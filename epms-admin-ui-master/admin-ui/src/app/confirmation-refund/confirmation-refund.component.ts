import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faTimesCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirmation-refund',
  templateUrl: './confirmation-refund.component.html',
  styleUrls: ['./confirmation-refund.component.scss']
})
export class ConfirmationRefundComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  faTimesCircle  = faTimesCircle;
  faExclamationTriangle  = faExclamationTriangle ;
  title= 'Sale Refund';

  constructor() { }

  ngOnInit(): void {
  }

}
