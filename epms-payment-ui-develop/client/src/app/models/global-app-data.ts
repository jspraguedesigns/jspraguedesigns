import { Injectable } from '@angular/core';
import {SubscriptionDetail} from './subscription-detail';
import {OscConfig} from './osc-config';
import {Transaction} from "./transaction";

@Injectable()
export class GlobalAppData {
    transId?: string;
    paymentType: string;
    address: string;
    attemptCount = 1;
    isStubEnabled = false;
    sourceType: string;
    subscriptionDetail?: SubscriptionDetail;
    oscConfig: OscConfig;
    orderTransaction?: Transaction;
}
