import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faCreditCard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-salepayment-checkout',
  templateUrl: './salepayment-checkout.component.html',
  styleUrls: ['./salepayment-checkout.component.scss']
})
export class SalepaymentCheckoutComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faCreditCard = faCreditCard;
  showCreditCard = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  showCC(){
    this.showCreditCard = true;
  }



}
