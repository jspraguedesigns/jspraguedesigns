import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Countries, USRegions, CAProvinces } from '../models/countries-regions';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class AddressComponent implements OnInit {
  @Input('billingDetails') sessionAddressDetails: string;
  countryList: any = Countries;
  regionList: any = USRegions;
  provinceList: any = CAProvinces;
  selectedCountry = '';
  selectedProvince = '';
  selectedRegion = '';
  userAddressDetails: any = {};
  @Input() orderData: Transaction;
  @Output() addressInfo = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    if (this.sessionAddressDetails) {
      this.userAddressDetails = JSON.parse(this.sessionAddressDetails);
    }
  }

  onAddressChange(): void {
    this.addressInfo.emit(this.userAddressDetails);
  }

  changeRegion(e): void {
    this.selectedRegion = e.target.value;
  }

  changeCountry(e?: any): void {
    if (e) {
      this.selectedCountry = e.target.value;
    } else if (this.orderData.shippingAddress.country) {
      this.selectedCountry = this.orderData.shippingAddress.country;
    }
  }

  changeProvince(e): void {
    this.selectedProvince = e.target.value;
  }

  sameadrchkchange(evt): void {
    if (evt.target.checked) {
      this.userAddressDetails.streetAddress1 = this.orderData.shippingAddress.addressLine1;
      this.userAddressDetails.streetAddress2 = this.orderData.shippingAddress.addressLine2;
      this.userAddressDetails.city = this.orderData.shippingAddress.city;
      this.userAddressDetails.company = this.orderData.shippingAddress.company;
      this.userAddressDetails.country = this.orderData.shippingAddress.country;
      this.userAddressDetails.postalcode = this.orderData.shippingAddress.postalCode;
      this.userAddressDetails.region = this.orderData.shippingAddress.region;
      this.userAddressDetails.phone = this.orderData.shippingContact.phoneNumber;
      this.userAddressDetails.email = this.orderData.shippingContact.email;
      this.changeCountry();
    } else {
      this.userAddressDetails = {};
    }
    this.onAddressChange();
  }
}
