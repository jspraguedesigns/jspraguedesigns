import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';


@Component({
  selector: 'app-osc-form',
  templateUrl: './osc-form.component.html',
  styleUrls: ['./osc-form.compoonent.scss']
})
export class OSCFormComponent implements OnInit {
  submitted = false;

  constructor() { }
  oscForm = new FormGroup({
    'assign': new FormControl ('')
  });
  ngOnInit(): void {

    console.log(this.oscForm.value.assign);
 
  }
  submit(){

    console.log(this.oscForm.value);
  }


}
