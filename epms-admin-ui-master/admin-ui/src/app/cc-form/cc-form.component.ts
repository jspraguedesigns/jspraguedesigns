import { Component, OnInit, ViewChild} from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {CAProvinces, Countries, USRegions} from '../models/countries-regions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cc-form',
  templateUrl: './cc-form.component.html',
  styleUrls: ['./cc-form.component.scss']
})

export class CcFormComponent implements OnInit {

 ccForm: FormGroup;
 countryList: any = Countries;
 regionList: any = USRegions;
 provinceList: any = CAProvinces;


 
  private bsModalRef: BsModalRef;
 

  constructor(private modalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {

    this.ccForm = new FormGroup({
     
        ccType: new FormControl(null),
        ccNumber: new FormControl(null, Validators.required),
        ccExpiration: new FormControl(null, Validators.required),
        ccCVV: new FormControl(null, Validators.required),
        ccCardName: new FormControl(null, Validators.required),
        ccStreetAddress1: new FormControl(null, Validators.required),
        ccStreetAddress2: new FormControl(null),
        ccCity: new FormControl(null, Validators.required),
        ccCountry: new FormControl(null, Validators.required),
        ccState: new FormControl(null),
        ccZipCode: new FormControl(null, Validators.required),
        ccCompany: new FormControl(null),
        ccPhoneNumber: new FormControl(null),
        ccEmail: new FormControl(null, Validators.email)

      
    });
  }

  opendcc(dccModal) {
    this.bsModalRef = this.modalService.show(dccModal);
  }
  submitcc(dccModal){
    this.bsModalRef.hide();
    this.router.navigate(['/confirmation-sale']);

  }


}
