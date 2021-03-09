import { Component, OnInit, TemplateRef } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-manual-reverse-chargeback',
    templateUrl: './manual-reverse-chargeback.component.html',
    styleUrls: ['./manual-reverse-chargeback.component.scss']
  })
  export class ReverseChargeback implements OnInit{

reverse: FormGroup
    ngOnInit(): void {
      this.reverse = new FormGroup ({
        amount: new FormControl(null,Validators.required),
        reasonCode: new FormControl(null),
        reverse: new FormControl(null),
      })
    }
  }