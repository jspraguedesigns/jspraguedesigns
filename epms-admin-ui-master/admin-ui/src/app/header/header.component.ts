import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true }}],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
