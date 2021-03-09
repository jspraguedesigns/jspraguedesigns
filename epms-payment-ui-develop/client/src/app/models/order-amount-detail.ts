export interface OrderAmountDetail {
    amountDetailId?: number;
    baseCurrencyAmount?: number;
    dccopted?: boolean;
    exchangeRate?: number;
    foreignCurrencyAmount?: number;
    foreignCurrencyCode?: string;
    inquiryRateId?: number;
    shippingAmount?: number;
    subtotalAmount?: number;
    taxAmount?: number;
    vatAmount?: number;
    baseCurrencyCode?: string;
    margin?: string;
}
