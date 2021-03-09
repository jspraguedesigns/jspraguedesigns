export interface PaypalResponse {
    gatewayResponse?: PaypalGatewayResponse;
    paypalOrderId?: string;
    status?: string;
    attemptCounter?: number;
}

export interface PaypalGatewayResponse {
    description?: string;
}
