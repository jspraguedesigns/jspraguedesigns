import { Component, OnInit } from '@angular/core';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-search-details',
  templateUrl: './order-search-details.component.html',
  styleUrls: ['./order-search-details.component.scss']
})
export class OrderSearchDetailsComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
