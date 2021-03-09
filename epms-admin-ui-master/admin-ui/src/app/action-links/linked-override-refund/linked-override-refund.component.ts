import { Component, OnInit, TemplateRef } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-linked-override-refund',
    templateUrl: './linked-override-refund.component.html',
    styleUrls: ['./linked-override-refund.component.scss']
  })
  export class LinkedOverrideRefund implements OnInit{
    overrideRefund: FormGroup;
    ngOnInit(): void {
      this.overrideRefund = new FormGroup ({
        amount: new FormControl(null,Validators.required),
        product: new FormControl(null, Validators.required),
      })
    }
  }