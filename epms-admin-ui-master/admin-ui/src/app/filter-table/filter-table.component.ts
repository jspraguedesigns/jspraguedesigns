import { Component, OnInit} from '@angular/core';
import { PageChangeEvent, DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { aggregateBy, process, State } from '@progress/kendo-data-query';
import { SAMPLE_PRODUCTS } from './products';
@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnInit {
  
    public state: State = {
        skip: 0,
        take: 10,
    
      };
      public gridData: GridDataResult = process(SAMPLE_PRODUCTS, this.state);
      public bsTableOpen: true;
    
      constructor() { }
      
      ngOnInit() {
      }
      public buttonCount = 5;
      public info = true;
      public pageSizes = true;
      public previousNext = true;
      public pageSize = 5;
      public skip = 0;

      protected pageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
    }
    
      public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.gridData = process(SAMPLE_PRODUCTS, this.state);
      }
    
      public bsTableToggle() {
      }
    }
    