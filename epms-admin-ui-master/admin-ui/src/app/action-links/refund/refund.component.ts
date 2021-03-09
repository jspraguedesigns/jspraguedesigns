import { Component, OnInit, TemplateRef } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-refund',
    templateUrl: './refund.component.html',
    styleUrls: ['./refund.component.scss']
  })
  export class Refund implements OnInit{
programKey= 'XXXXXXX';
refund: FormGroup
    ngOnInit(): void {
      this.refund = new FormGroup ({
        amount: new FormControl(null,Validators.required),
        billingStatementText: new FormControl(null, Validators.required),
      })
    }
  }