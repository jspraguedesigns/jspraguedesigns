import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  userSearch: FormGroup;
  constructor() { }
  

  ngOnInit(): void {
    this.userSearch =  new FormGroup({
      'userID': new FormControl(null),
    })
  }

  
}
