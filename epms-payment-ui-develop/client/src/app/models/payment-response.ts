import { AuthenticationChallengeParams, AuthenticationChallengeFlowResponse, Secure3DAuthenticationResponse } from './secure-3d-authentication'

export interface PaymentResponse {
    achResponse?: TeleCheckResponse;
    attemptCounter?: number;
    authChallengeParams?: AuthenticationChallengeParams;
    authResponseChallengeFlow?: AuthenticationChallengeFlowResponse;
    authenticationResponse?: Secure3DAuthenticationResponse;
    errorResponse?: ProcessorErrorResponse;
    fraudDetectionResponse?: string;
    gatewayResponse?: GatewayResponse;
    processorResponse?: ProcessorErrorResponse;
    secure3DAuthType?: string;
    status?: string;
}

export interface TeleCheckResponse {
    approvalCode?: string;
    referenceNumber?: string;
    responseCode?: string;
    transactionStatus?: string;
}

export interface GatewayResponse {
    description?: string;
}

export interface ProcessorErrorResponse {
    message?: string;
    responseCode?: string;
}

export enum PaymentResponseStatus {
    APPROVED = 0,
    WAITING = 1,
    FAILED = 2,
    VALIDATION_FAILED = 3,
    DECLINED = 4,
    PROCESSING_FAILED = 5,
}

export enum Secure3DAuthType {
    form_3ds = 'SECURE_3D_METHOD_FORM',
    challenge = 'CHALLENGE',
    frictionLess = 'FRICTIONLESS'
}
