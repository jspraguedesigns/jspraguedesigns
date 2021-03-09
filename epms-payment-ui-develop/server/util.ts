import * as crypto from 'crypto';

const ALLOWED_TIME_DIFFERENCE = process.env.ALLOWED_TIME_DIFFERENCE ? process.env.ALLOWED_TIME_DIFFERENCE : 300000; // 300,000 in milliseconds => 5 minutes 
const SIGNING_KEY = process.env.SIGNING_KEY ? process.env.SIGNING_KEY :"e2ws346eb7b12c1c9e4a7f9167c2da74ab3c19";//secretkey
const RESPONSE_SIGN_FIELDS = process.env.RESPONSE_SIGN_FIELDS ? process.env.RESPONSE_SIGN_FIELDS :
    "timestamp,orderAmount,originatingSystemCode,oscSessionId,customerId";
const REQUEST_SIGN_FIELDS = process.env.REQUEST_SIGN_FIELDS ? process.env.REQUEST_SIGN_FIELDS :
    "timestamp,orderAmount,originatingSystemCode,oscSessionId,customerID";

/**
 * Summary. Function to create a signed field response containing JSON
 * @param req 
 * Return object -> message body is an object contains,
 *      signField => fields that are signed in comma separated sequence
 *      transactionSignature => hash value signature
 *      timestamp of signature
 */
export function createSignedResponse(req:any){
    let messageBody = {
        'transactionSignature':'',
        'signField':'',
        'timestamp': 0
    };
    //add signedfield property to request object
    req.signedFields = REQUEST_SIGN_FIELDS;
    //add timestamp in milliseconds to request object to use it's value part of signed fields
    let timestamp = Number(new Date().valueOf()); 
    req.timestamp = timestamp;
    //create a message containing values of all fields from request that needs to be signed
    const message = createMessage(req);
    //create a signature using signing key and message
    const messageSignature = createMessageSignature(SIGNING_KEY,message);
    messageBody.transactionSignature = messageSignature;
    messageBody.signField = req.signedFields;
    messageBody.timestamp = timestamp;    
    return messageBody;
}
/**
 * Summary. Validate the incoming request by creating a message and signature of fields to be signed.
 *          Also, validate the timestamp in request if it is in allowed range of difference.
 * @param req Description. JSON object that needs to be validated
 */
export function validateRequest(req:any){
    //create a response object to return to call
    let responseObj = {
        signatureMatch: <boolean> false,
        timestampMatch: <boolean> false
    }
    //request body- initial checks of required fields
    if(!req.transactionSignature){//false (null or undefined)
        console.log('Request is missing Transaction signature, expected attribute name <<transactionSignature>> in request.');
        return responseObj;
    }else if(!req.timestamp){
        console.log('Request is missing Transaction timestamp, expected attribute name <<timestamp>> in request.');
        return responseObj;
    }else if(!req.signedFields){
        console.log('Request is missing Signed fields, expected attribute name <<signedFields>> in request.');
        return responseObj;
    }
    //create a message from request that needs to be signed
    const message = createMessage(req);
    //create a signature using signing key and message
    const messageSignature = createMessageSignature(SIGNING_KEY,message);
    //match transaction signature
    responseObj.signatureMatch = matchSignature(messageSignature, req.transactionSignature);
    //validate timestamp in request
    responseObj.timestampMatch = validateTimestamp(req.timestamp, ALLOWED_TIME_DIFFERENCE);
    return responseObj;
}
/**
 * Summary. Create a string (message) to hold the values of all required fields that needs to be signed
 * @param requestFields Description. JSON object
 */
function createMessage(requestFields:any){
    let message = "";
    if(requestFields.signedFields){
        let signFieldArr = requestFields.signedFields.split(',');
        //construct map for all request fields
        const map: Map<any,any> = new Map<any,any>();
        const keys = Object.keys(requestFields);
        const values = Object.values(requestFields);
        for(let i=0; i<=Object.keys(requestFields).length; i++){
            map.set(keys[i], values[i])
        }
        for(let sField of signFieldArr){
            message = message+map.get(sField);
        }
        console.log("MESSAGE to sign:<<start>>"+message +"<<end>>");
    } else {
        console.log("Request is missing sign field information, expected attribute name <<signedFields>> in request.");
    }
    return message;
}
/**
 * Summary. using createHmac method of crypto encrypt the message with base64 using a secret key provided.
 * @param signingKey 
 * @param message 
 * 
 * returns hash
 */
function createMessageSignature(signingKey:any, message:any){
    let hashValue:any; 
    if(signingKey && message){
        try{
            hashValue = crypto.createHmac('sha256', signingKey).update(message).digest('base64');
            console.log('Encoded Signature: <<start>>'+ hashValue +'<<end>>');
            return hashValue;
        } catch(err){
            console.error('Create Message Signature failed: '+err);
        }    
    }else{
        console.log('Missing Signing key or message.');
    }    
} 
/**
 * Summary. Compares two string (call it as signature)
 * @param transactionSignature 
 * @param requestTransactionSignature 
 */
function matchSignature (transactionSignature:any, requestTransactionSignature:any){
    let result = false;
    if(transactionSignature && requestTransactionSignature){        
        if(transactionSignature === requestTransactionSignature){
            result = true;
        }  
        console.log("transactionSignature: "+transactionSignature);
        console.log("requestTransactionSignature: "+requestTransactionSignature);
        console.log('signature match: '+result);
        return result;
    }else{
        console.log('Missing signature(s) to compare!');
        return result;
    }
}
/**
 * Summary. Validate the current timestamp in milliseconds with allowed difference
 * @param reqTimestamp Description. Request Timestamp in milliseconds to validate
 * @param allowedTimeDiff Description. Allowed difference in milliseconds (default = 300000 milliseconds)
 * 
 * return boolean whether request timestamp was within allowed difference of current timestamp
 */
function validateTimestamp(reqTimestamp:any, allowedTimeDiff:any){
    //compares the time in millisecons
    if(reqTimestamp){
        let currTimestamp = Number(new Date().valueOf()); //use for timestamp in milliseconds
        let differenceInTimestamp = currTimestamp - reqTimestamp;
        console.log('<<currenttimestamp>> '+currTimestamp +' <<reqTimestamp>> '+ reqTimestamp +' <<diff>> '+differenceInTimestamp);
        if ((differenceInTimestamp < (allowedTimeDiff ? allowedTimeDiff : 30000)) 
            && differenceInTimestamp > 0){ //should be postive number
            console.log(`timestamp validation within allowed range of ${allowedTimeDiff} is `+true);   
            return true;
        } 
        return false;//timestamp out of bound
    }else{
        console.log('Missing input request timestamp for compare!');
        return false;
    }
}
