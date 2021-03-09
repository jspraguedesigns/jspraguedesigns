import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {CAProvinces, Countries, USRegions} from '../models/countries-regions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-virtual-terminal',
  templateUrl: './virtual-terminal.component.html',
  styleUrls: ['./virtual-terminal.component.scss']
})

export class VirtualTerminalComponent implements OnInit {

  @Input() formContent: any;
  @Output() previousStepClicked = new EventEmitter();
  @Output() nextStepClicked = new EventEmitter();
  submitted = false;

  step: any = 1;
  selectedTransaction = '';
  selectedRegion = '';
  selectedProvince = '';
  selectedCountry = '';
  countryList: any = Countries;
  regionList: any = USRegions;
  provinceList: any = CAProvinces;

  transactionForm:FormGroup = new FormGroup({
  'transaction': new FormControl (null, Validators.required),
  'OSC': new FormControl (null, Validators.required),
})


constructor(private router: Router) {

}

  ngOnInit(): void {
  }

  submit(){
    this.submitted = true;
    console.log(this.transactionForm.value);
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
  ChangeOption(e) {
    this.selectedTransaction = e.target.value;
    console.log(e.target.value);
    this.transactionForm.get('transaction').setValue(e.target.value, {
      onlySelf: true
    })
  }


}
