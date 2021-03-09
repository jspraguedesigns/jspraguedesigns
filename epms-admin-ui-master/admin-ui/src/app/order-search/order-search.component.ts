import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { IntlService } from '@progress/kendo-angular-intl';
import {CurrencyPipe, DatePipe} from '@angular/common';
import { THRESHOLD_DIFF } from '@progress/kendo-angular-popup/dist/es2015/services/scrollable.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent implements OnInit {
  pipe = new DatePipe('en-US');
  now = Date.now();
  quickDate = null;
  formatDate = null;
  today = null;
  last = null;
  lastMonth = null;
  yesterday = null;
  quickDateSelect = '';
  selectedDate = '';
  public orderState: Array<string> = [
    'SALE',
    'Sale transaction not yet Reconciled/settled',
    'SALE-SETTLED ',
    'SALE ERROR',
    'SALE REJECTED',
    'SALE PENDING - AUTHORIZED',
    'SALE NOMATCH_SETTLED',
    'REFUND',
    'REFUND SETTLED',
    'REFUND REJECTED',
    'REFUND ERROR',
    'LINKED OVERRIDE REFUND',
    'STANDALONE OVERRIDE-REFUND',
    'REFUND-NOMATCH_SETTLED',
    'CHARGEBACK/DISPUTE',
    'REVERSE-CHARGEBACK',
    'OVERRIDE-CHARGEBACK',
    'OVERRIDE-REQ_FOR_RET N/A',
    'OVERRIDE-REV-CHARGEBACK'

    ];
    public decision: Array<string> = [
      'ACCEPT – The transaction was successful',
      'REJECT – The transaction was rejected'
    ];

    public orderSaleAmt: Array<string> = [
      'Greater Than – Transactions with an amount greater than the amount specified will be returned',
        'Equal To – Transactions with an amount equal to the amount specified will be returned',
        'Less Than - Transactions with an amount less than the amount specified will be returned'
      
    ]

    public OSC: Array<string> = [
      'ERG',
      'ETS',
      'GRE'
    ]
searchForm: FormGroup;
dateSelect: FormGroup;
bsInlineValue = new Date();
bsInlineRangeValue: Date[];
maxDate = new Date();
formSubmitted = false;
public focusedDate: Date = new Date();

  constructor(private intl: IntlService,

    private currencyPipe: CurrencyPipe,
    private router: Router) { 
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }


  ngOnInit(): void {
    this.searchForm =  new FormGroup({
      'orderState': new FormControl(null),
      'decision': new FormControl(null),
      'amountFilter': new FormControl(null),
      'orderAmount': new FormControl(null),
      'bill-first-name': new FormControl(null, Validators.required),
      'bill-last-name': new FormControl(null, Validators.required),
    });

    this.dateSelect = new FormGroup({
      'quickDateSelect': new FormControl('')
    });

  

  }
  onDateChange(){
    this.selectedDate = this.dateSelect.value.quickDateSelect
    console.log(this.selectedDate)
      if(this.selectedDate === 'today'){
        this.formatDate = this.pipe.transform(this.now, 'medium');
        this.quickDate = this.formatDate;
       // this.focusedDate = this.quickDate;
    }  else if(this.selectedDate === 'yesterday'){
      let yesterday = new Date();
      yesterday.setDate(yesterday.getDate()-1);
      this.formatDate = this.pipe.transform(yesterday, 'medium');
      this.quickDate = this.formatDate;
     // this.focusedDate = this.quickDate;
  }
  else if(this.selectedDate === 'week'){
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate()+7);
    this.today = this.pipe.transform(this.now, 'medium');
    this.formatDate = this.pipe.transform(yesterday, 'medium');
    this.quickDate = this.formatDate;
   // this.focusedDate = this.quickDate;
}
else if(this.selectedDate === 'last'){
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate()-7);
  let last = new Date();
  last.setDate(last.getDate()-7);
  this.yesterday = this.pipe.transform(this.now, 'medium');
  this.last = this.pipe.transform(last, 'medium');
  this.quickDate = this.formatDate;
 // this.focusedDate = this.quickDate;
}  else if(this.selectedDate === 'month'){
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate()+30);
  this.today = this.pipe.transform(this.now, 'medium');
  this.formatDate = this.pipe.transform(yesterday, 'medium');
  this.quickDate = this.formatDate;
 // this.focusedDate = this.quickDate;
}
else if(this.selectedDate === 'pastMonth'){
  let lastMonth = new Date();
  lastMonth.setDate(lastMonth.getDate()-30);
  this.yesterday = this.pipe.transform(this.now, 'medium');
  this.lastMonth = this.pipe.transform(lastMonth, 'medium');
  this.quickDate = this.formatDate;
 // this.focusedDate = this.quickDate;
}
  else{
      this.quickDate = 'nope';
    }

  }
 
  onSubmit(){
    event.preventDefault();
    this.formSubmitted = true;
    console.log(this.searchForm);
    this.router.navigate(['/order-search-result']);
  }

  resetForm(){
    this.searchForm.reset();
  }

}
