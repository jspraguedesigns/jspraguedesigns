
    import { FormBuilder, FormGroup } from '@angular/forms';
    import { Component, OnInit } from '@angular/core';
    import { IDropdownSettings } from 'ng-multiselect-dropdown';
    import {Router} from '@angular/router'
    @Component({
        selector: 'app-program',
        templateUrl: './assign-program.component.html'
    })
    export class AssignProgramComponent implements OnInit {
        dropdownList = [];
        selectedItems = [];
        dropdownSettings: any  = {};
        myForm: FormGroup;
        constructor(private fb: FormBuilder,private router: Router) {}
        ngOnInit() {
          this.dropdownList = [
            { id: 1, text: 'Barbecue' },
            { id: 2, text: 'Mustard' },
            { id: 3, text: 'Ketchup' },
            { id: 4, text: 'Mayonaise' }
          ];
          this.selectedItems = [
            { id: 1, text: 'Barbecue' },
            { id: 2, text: 'Mustard' }
          ];
         
          this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true,
            limitSelection: 2
          };
          this.myForm = this.fb.group({
            city: [this.selectedItems]
        });
        }

        back(){
            this.router.navigate(['/user-management']);
        }   
    
    }