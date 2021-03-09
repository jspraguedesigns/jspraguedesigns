import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import {CAProvinces, Countries, USRegions} from '../models/countries-regions';

@Component({
  selector: 'app-telecheck',
  templateUrl: './telecheck.component.html',
  styleUrls: ['./telecheck.component.scss']
})
export class TelecheckComponent implements OnInit {
  telecheckForm: FormGroup;
  countryList: any = Countries;
  regionList: any = USRegions;
  provinceList: any = CAProvinces;
  constructor() { }

  ngOnInit(): void {
    this.telecheckForm = new FormGroup({
      
      telecheckType: new FormControl(null),
      telecheckNumber: new FormControl(null, Validators.required),
      telecheckExpiration: new FormControl(null, Validators.required),
      telecheckCVV: new FormControl(null, Validators.required),
      telecheckCardName: new FormControl(null, Validators.required),
      telecheckStreetAddress1: new FormControl(null, Validators.required),
      telecheckStreetAddress2: new FormControl(null),
      telecheckCity: new FormControl(null, Validators.required),
      telecheckCountry: new FormControl(null, Validators.required),
      telecheckState: new FormControl(null),
      telecheckZipCode: new FormControl(null, Validators.required),
      telecheckCompany: new FormControl(null),
      telecheckPhoneNumber: new FormControl(null),
      telecheckEmail: new FormControl(null, Validators.email)
  
    });
  }



}
