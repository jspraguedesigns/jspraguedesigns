import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-audit-log',
    templateUrl: './audit-log.component.html',
    styleUrls: ['./audit-log.component.scss']
  })
  export class AuditLog implements OnInit{
    dateCreated= 'MM/DD/YYYY HH:MM:SS';
    createdBy= 'MPI System';
    message= 'Linked Override Refund Performed'
    ngOnInit(): void {
   
    }
  }