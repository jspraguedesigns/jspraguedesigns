import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../models/transaction';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {GlobalAppData} from '../models/global-app-data';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  @Input() orderData: Transaction;

  constructor(public gd:GlobalAppData) {
  }

  ngOnInit(): void {
  }
}
