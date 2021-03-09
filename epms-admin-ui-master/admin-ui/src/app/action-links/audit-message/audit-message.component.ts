import { Component, OnInit, TemplateRef } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-audit-message',
    templateUrl: './audit-message.component.html',
    styleUrls: ['./audit-message.component.scss']
  })
  export class AuditMessage implements OnInit{
    dateCreated= 'MM/DD/YYYY HH:MM:SS';
    createdBy= 'MPI System';
    message= 'Linked Override Refund Performed';
    auditMessage: FormGroup;
    ngOnInit(): void {
      this.auditMessage = new FormGroup ({
        message: new FormControl(null)
      })
    }
  }