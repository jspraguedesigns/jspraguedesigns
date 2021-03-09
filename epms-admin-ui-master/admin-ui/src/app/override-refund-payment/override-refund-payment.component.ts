import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPhone, faEnvelope, faCreditCard, faLandmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-override-refund-payment',
  templateUrl: './override-refund-payment.component.html',
  styleUrls: ['./override-refund-payment.component.scss']
})
export class OverrideRefundPaymentComponent implements OnInit {
  showCreditCard = false;
  showBankAcct = false;
  faPhone =  faPhone;
  faEnvelope = faEnvelope;
  faCreditCard = faCreditCard;
  faLandmark = faLandmark;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showCC(){
    this.showCreditCard = true;
    this.showBankAcct = false;
  }

  showBank(){
    this.showBankAcct = true;
    this.showCreditCard = false;
  }

}
