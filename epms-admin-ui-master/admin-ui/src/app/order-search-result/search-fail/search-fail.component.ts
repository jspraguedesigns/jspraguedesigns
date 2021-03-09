import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'app-search-fail',
    templateUrl: './search-fail.component.html',
    styleUrls: ['./search-fail.component.scss']
  })

export class SearchFailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onRevise(){
    this.router.navigate(['/order-search']);
  }
}
