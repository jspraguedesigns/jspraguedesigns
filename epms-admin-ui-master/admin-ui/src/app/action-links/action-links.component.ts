import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-action-links',
  templateUrl: './action-links.component.html',
  styleUrls: ['./action-links.component.scss']
})
export class ActionLinksComponent implements OnInit {

  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false,
    class: "modal-emps"
  };
  constructor(private modalService: BsModalService) {}
 


  ngOnInit(): void {

  }
  openModal(linkedoverriderefund: TemplateRef<any>) {
    this.modalRef = this.modalService.show(linkedoverriderefund);
  }

}
