import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-master-global-config',
  templateUrl: './master-global-config.component.html',
  styleUrls: ['./master-global-config.component.scss']
})
export class MasterGlobalConfigComponent implements OnInit {
types: FormGroup;
ccList: any = [
    { id: 1, name: 'Visa'},
    { id: 2, name: 'MasterCard' },
    { id: 3, name: 'American Express' },
    { id: 4, name: 'Discover' },
    { id: 5, name: 'China UnionPay' },
    { id: 6, name: 'Diners Pay' }
  ];
  constructor() { }

  ngOnInit(): void {
    this.types = new FormGroup({
        creditCard: new FormControl(null),
        eCheck:new FormControl(null),
        payPal:new FormControl(null),
        fraudDetect: new FormControl(null),
        ThreeDS: new FormControl(null),
        dynamicCurrency: new FormControl(null)
    });
  }

  

}