import { Component, OnInit } from '@angular/core';
import {faSearch, faSortDown, faSortUp, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  faSearch = faSearch;
  faSortDown = faSortDown;
  faSortUp = faSortUp;
  faChevronLeft = faChevronLeft;
  public display:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggle() {
    this.display = !this.display;
   
}

back(){
  this.router.navigate(['/user-management']);
}
}
