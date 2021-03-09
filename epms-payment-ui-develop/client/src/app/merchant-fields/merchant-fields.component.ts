import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { MerchantDetails } from '../models/merchant-details';
import { Transaction } from '../models/transaction';
@Component({
  selector: 'app-merchant-fields',
  templateUrl: './merchant-fields.component.html',
  styleUrls: ['./merchant-fields.component.css']
})
export class MerchantFieldsComponent implements OnInit, OnChanges {
  @Input() merchantData: Transaction;
  @Input() merchantConfigData: Array<MerchantDetails>;

  faExclamationCircle = faExclamationCircle
  filteredMerchantData: Array<MerchantDetails> = [];
  merchantFieldsForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.filterMerchantData();
  }

  ngOnChanges() {
    this.filterMerchantData();
  }

  filterMerchantData() {
    let isUserDefinedDataExists = false;
    if (this.merchantData && this.merchantData.order) {
      if (this.merchantData.order.merchantDefinedField1) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField1, 1);
      }
      if (this.merchantData.order.merchantDefinedField2) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField2, 2);
      }
      if (this.merchantData.order.merchantDefinedField3) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField3, 3);
      }
      if (this.merchantData.order.merchantDefinedField4) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField4, 4);
      }
      if (this.merchantData.order.merchantDefinedField5) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField5, 5);
      }
      if (this.merchantData.order.merchantDefinedField6) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField6, 6);
      }
      if (this.merchantData.order.merchantDefinedField7) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField7, 7);
      }
      if (this.merchantData.order.merchantDefinedField8) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField8, 8);
      }
      if (this.merchantData.order.merchantDefinedField9) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField9, 9);
      }
      if (this.merchantData.order.merchantDefinedField10) {
        isUserDefinedDataExists = true;
        this.findAndPushToFilteredMerchantData(this.merchantData.order.merchantDefinedField10, 10);
      }
      if (!isUserDefinedDataExists && this.merchantConfigData) {
        this.filteredMerchantData = this.merchantConfigData;
      }
      if(this.filteredMerchantData) {
        this.filteredMerchantData.sort((config1, config2) => {
          return config1.seqNo - config2.seqNo;
        });
      }
    }
  }

  findAndPushToFilteredMerchantData(fieldName: string, sequence: number) {
    if (this.merchantConfigData) {
      let merchantFieldConfigData = this.merchantConfigData.find(element => element.seqNo === sequence);
      merchantFieldConfigData.merchantDefinedFieldName = fieldName;
        this.filteredMerchantData.push(merchantFieldConfigData);
    }
  }
}
