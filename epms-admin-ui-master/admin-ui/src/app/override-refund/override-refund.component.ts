import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {CAProvinces, Countries, USRegions} from '../models/countries-regions';
import {CurrencyPipe} from '@angular/common';
@Component({
  selector: 'app-override-refund',
  templateUrl: './override-refund.component.html',
  styleUrls: ['./override-refund.component.scss']
})
export class OverrideRefundComponent implements OnInit {
  step: any = 1;
  selectedRegion = '';
  selectedProvince = '';
  selectedCountry = '';
  countryList: any = Countries;
  regionList: any = USRegions;
  provinceList: any = CAProvinces;
  selectedTransaction = '';
  refundForm: FormGroup ;
  formSubmitted = false;
  constructor(
    private router: Router,
    private currencyPipe: CurrencyPipe
    ) { }

  ngOnInit(): void {
    console.log(this.selectedCountry)
    const USRequired = this.selectedCountry ==='US'? true:false;
    const CARequired = this.selectedCountry === 'CA'? true:false;

   this.refundForm = new FormGroup({
    'paymentDetails': new FormGroup({
      'amount': new FormControl(null, Validators.required),
      'mode-of-receipt': new FormControl('F', Validators.required),
      'billingStatementText': new FormControl(null, [Validators.minLength(25), Validators.maxLength(25)]),
      'program-spec-key': new FormControl(null)
     }),
 'shippingInfo': new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'streetAddress1': new FormControl(null, Validators.required),
      'streetAddress2': new FormControl(null),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'province': new FormControl(null),
      'state': new FormControl(null, Validators.required),
      'state-province': new FormControl(null),
      'zip': new FormControl(null, Validators.required),
      'postalCA': new FormControl(null),
      'zipPostal': new FormControl(null),
      'company': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null, Validators.email),
      'project': new FormControl(null, [Validators.required,Validators.minLength(5), Validators.pattern("^[0-9]*$")]),
       'product': new FormControl(null, [Validators.minLength(5), Validators.pattern("^[0-9]*$")]),
       'journal-entry-num': new FormControl(null, [Validators.minLength(6), Validators.pattern("^[0-9]*$")]),
       'activity': new FormControl(null, [Validators.minLength(3), Validators.pattern("^[0-9]*$")]),
       'resource': new FormControl(null, [Validators.minLength(2), Validators.pattern("^[0-9]*$")])
     })
    });
    
    this.refundForm.get('shippingInfo.country').valueChanges
    .subscribe(value => {
      if(value === 'US') {
        this.refundForm.get('shippingInfo.state').setValidators(Validators.required);
        this.refundForm.get('shippingInfo.zip').setValidators(Validators.required);
      } else {
        this.refundForm.get('shippingInfo.state').clearValidators();
        this.refundForm.get('shippingInfo.zip').clearValidators();

      }
      if(value === 'CA') {
        this.refundForm.get('shippingInfo.province').setValidators(Validators.required);
        this.refundForm.get('shippingInfo.postalCA').setValidators(Validators.required);
      } else {
        this.refundForm.get('shippingInfo.province').clearValidators();
        this.refundForm.get('shippingInfo.postalCA').clearValidators();
      }
    }
    );
  }

  
  
  onSubmit(){
    event.preventDefault();
    this.formSubmitted = true;
    console.log(this.refundForm);
    this.router.navigate(['/override-refund-payment']);
  }

  goToLastStep() {
    this.step = this.step - 1;
  }
  changeRegion(e) {
    this.selectedRegion = e.target.value;
  }

  changeProvince(e) {
    this.selectedProvince = e.target.value;
  }
  changeCountry(e) {
    this.selectedCountry = e.target.value;
    console.log(e.target.value);
  }
}
