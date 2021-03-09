import { Component } from '@angular/core';
import { GlobalAppData } from '../models/global-app-data';

@Component({
  selector: 'app-accepted-payment-types',
  templateUrl: './accepted-payment-types.component.html',
  styleUrls: ['./accepted-payment-types.component.css']
})
export class AcceptedPaymentTypesComponent {
  constructor(public gd: GlobalAppData) {
  }
}

