export interface AuthenticationChallengeParams {
    acsURL?: string;
    creq?: string;
    merchantData?: string;
    payerAuthenticationRequest?: string;
    sessionData?: string;
    termURL?: string;
    version?: string;
}

export interface AuthenticationChallengeFlowResponse {
    acsServerResponse?: ACSServerResponse;
    authenticationType?: string;
    secure3dResponse?: Secure3dResponse;
    version?: string;
}

export interface Secure3dResponse {
    responseCode3dSecure?: string;
}

export interface ACSServerResponse {
    cres?: string;
    md?: string;
    paRes?: string;
    threeDSSessionData?: string;
}

export interface Secure3DAuthenticationResponse {
    methodForm?: string;
}