import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { GlobalAppData } from '../models/global-app-data';
import { Transaction } from '../models/transaction';
import { OrderAmountDetail } from '../models/order-amount-detail';
import { OrderLineItem } from '../models/order-line-item';
import {Order} from '../models/order';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 @Input()  orderData: Transaction;
  orderTotal: Order;
  @Input() amountDetail: OrderAmountDetail;
  constructor(private globalAppData: GlobalAppData, private orderService: OrderService) {

  }

  ngOnInit(): void {
  }
}
