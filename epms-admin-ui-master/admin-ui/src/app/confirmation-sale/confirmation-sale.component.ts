import { Component, OnInit } from '@angular/core';
import {faPhone, faCheckCircle, faEnvelope,faTimesCircle , faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-confirmation-sale',
  templateUrl: './confirmation-sale.component.html',
  styleUrls: ['./confirmation-sale.component.scss']
})
export class ConfirmationSaleComponent implements OnInit {
  faPhone = faPhone;
  faCheckCircle = faCheckCircle;
  faEnvelope = faEnvelope;
  faTimesCircle = faTimesCircle;
  faExclamationTriangle = faExclamationTriangle
  title= 'Sale Confirmation';

  constructor() { }

  ngOnInit(): void {
  }

}
