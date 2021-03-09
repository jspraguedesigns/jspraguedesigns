import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-sub-total',
  templateUrl: './sub-total.component.html',
  styleUrls: ['./sub-total.component.css']
})
export class SubTotalComponent implements OnInit {
  @Input() orderData: Transaction;

  ngOnInit(): void {
  }
}
