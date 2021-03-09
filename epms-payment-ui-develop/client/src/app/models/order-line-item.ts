export interface OrderLineItem {
    foreignCurrencyTaxAmount?: number;
    foreignCurrencyUnitPrice?: number;
    lineItemId?: number;
    lineNumber?: number;
    productCode?: string;
    productName?: string;
    productSKU?: string;
    quantity?: number;
    subTotal?: number;
    taxAmount?: number;
    unitPrice?: number;
}
