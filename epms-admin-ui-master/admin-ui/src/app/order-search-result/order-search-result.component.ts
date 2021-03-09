import { Component, OnInit } from '@angular/core';
import {faSearch, faSortDown, faSortUp, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup} from '@angular/forms';
import { trigger, transition, state, animate, style } from '@angular/animations';
import {Router} from '@angular/router';


@Component({
  selector: 'app-order-search-result',
  templateUrl: './order-search-result.component.html',
  styleUrls: ['./order-search-result.component.scss'],
  animations: [
    trigger('fadeIn', [
      // ...
      state('open', style({
        height: 'auto',
        opacity: 1
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class OrderSearchResultComponent implements OnInit {
  faSearch = faSearch;
  faSortDown = faSortDown;
  faSortUp = faSortUp;
  faChevronLeft = faChevronLeft;
  searchResult: FormGroup;
  public display:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

   this.searchResult = new FormGroup({
    'orderState': new FormControl(null),
    'paymentMethod': new FormControl(null),
    'osc': new FormControl(null),
    'orderID': new FormControl(null),
    'local-currency-amnt': new FormControl(null)
   });
  }

  toggle() {
    this.display = !this.display;
   
}

onRevise(){
  this.router.navigate(['/order-search']);
}

}
