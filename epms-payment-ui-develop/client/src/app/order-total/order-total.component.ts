import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.css']
})
export class OrderTotalComponent implements OnInit {
  @Input() orderData: Transaction;

  ngOnInit(): void {
  }
}
