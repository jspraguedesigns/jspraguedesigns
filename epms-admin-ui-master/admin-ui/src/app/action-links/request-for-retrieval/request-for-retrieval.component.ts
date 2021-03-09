import { Component, OnInit, TemplateRef } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-request-retrieval',
    templateUrl: './request-for-retrieval.component.html',
    styleUrls: ['./request-for-retrieval.component.scss']
  })
  export class Retrieval implements OnInit{

retrieval: FormGroup
    ngOnInit(): void {
      this.retrieval = new FormGroup ({
        amount: new FormControl(null,Validators.required)
      })
    }
  }