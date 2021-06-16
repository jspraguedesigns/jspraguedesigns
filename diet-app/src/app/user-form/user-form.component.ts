import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  units = new FormControl('', [Validators.required, Validators.email]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  weight  = new FormControl('', [Validators.required]);
  age  = new FormControl('', [Validators.required]);
  targetweight  = new FormControl('', [Validators.required]);
  height  = new FormControl('', [Validators.required]);
  idealBF  = new FormControl('', [Validators.required]);
  currentBF = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  activity = new FormControl('', [Validators.required]);
  weeks = new FormControl('', [Validators.required]);
  length = new FormControl('', [Validators.required]);
  supps = new FormControl('', [Validators.required]);
  currentWeight = new FormControl('', [Validators.required]);
  calories = 0;
  bmr = 0
  protein = 0;
  fat = 0; 
  carbs = 0; 
  highcarbs = 0; 
  goal = 0;
  lossRate = 0;
  highDays = 0;
  lowDays = 0;
  fatCals = 0;
  proCals = 0;
  
  calculate(){

    if (this.gender.value == 0)
    {this.bmr = ((66 + (this.weight.value * 6.23) + (12.7 * this.height.value) - (6.8 * this.age.value)) * this.activity.value)}
    else{
      this.bmr = ((655 + (this.weight.value * 4.35) + (4.7 * this.height.value) - (4.7 * this.age.value)) * this.activity.value)
    }

    if (this.targetweight.value > this.weight.value){
    this.goal = ((((this.targetweight.value - this.weight.value)*3500)/7)/this.length.value);
     this.calories = this.bmr + this.goal;
     this.highDays = 3;
     this.lowDays = 4;
    }
    else{
      this.goal = ((((this.weight.value - this.targetweight.value)*3500)/7)/this.length.value);
      this.calories = this.bmr - this.goal;
      this.highDays = 2;
      this.lowDays = 5;
    }

    this.protein = (this.targetweight.value / 2.2046 * this.supps.value);
    this.proCals = (this.protein * 4)
    this.fat =(((this.idealBF.value/100)/(this.currentBF.value/100)*(this.calories - (this.protein * 4)) *((this.currentBF.value/100)+0.07)+(9 * this.gender.value))/9);
    this.fatCals = (((this.idealBF.value/100)/(this.currentBF.value/100)*(this.calories - (this.protein * 4)) *((this.currentBF.value/100)+0.07)+(9 * this.gender.value)));
    this.carbs = (7 * (this.calories - this.proCals - this.fatCals)/(this.lowDays + (this.highDays * 3.75))/4)
    this.highcarbs = (((this.carbs*4) * 3.75) /4 )
    console.log("fat",this.fatCals,"protein", this.proCals, this.lowDays, this.highDays)
  }

  calculateMetric(){
    if (this.gender.value == 0)
    {this.bmr = ((66 + (this.weight.value * 13.7) + (5 * this.height.value) - (6.8 * this.age.value)) * this.activity.value)}
    else{
      this.bmr = ((655 + (this.weight.value * 9.6) + (1.8 * this.height.value) - (4.7 * this.age.value)) * this.activity.value)
    }

    if (this.targetweight.value > this.weight.value){
    this.goal = ((((this.targetweight.value - this.weight.value)*3500)/7)/this.length.value);
     this.calories = this.bmr + this.goal;
     this.highDays = 3;
     this.lowDays = 4;
    }
    else{
      this.goal = ((((this.weight.value - this.targetweight.value)*3500)/7)/this.length.value);
      this.calories = this.bmr - this.goal;
      this.highDays = 2;
      this.lowDays = 5;
    }

    this.protein = (this.targetweight.value * this.supps.value);
    this.proCals = (this.protein * 4)
    this.fat =(((this.idealBF.value/100)/(this.currentBF.value/100)*(this.calories - (this.protein * 4)) *((this.currentBF.value/100)+0.07)+(9 * this.gender.value))/9);
    this.fatCals = (((this.idealBF.value/100)/(this.currentBF.value/100)*(this.calories - (this.protein * 4)) *((this.currentBF.value/100)+0.07)+(9 * this.gender.value)));
    this.carbs = (7 * (this.calories - this.proCals - this.fatCals)/(this.lowDays + (this.highDays * 3.75))/4)
    this.highcarbs = (((this.carbs*4) * 3.75) /4 )
    console.log("fat",this.fatCals,"protein", this.proCals, this.lowDays, this.highDays)
  }

  emailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  nameErrorMessage() {

  }
 submit(){}

}
