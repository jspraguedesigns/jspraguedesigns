import { Component, OnInit } from '@angular/core';
import { PageChangeEvent, DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { aggregateBy, process, State } from '@progress/kendo-data-query';
import { LINE_ITEMS} from './items';

@Component({
  selector: 'app-line-item-summary',
  templateUrl: './line-item-summary.component.html',
  styleUrls: ['./line-item-summary.component.css']
})
export class LineItemSummaryComponent implements OnInit {
  public state: State = {
    skip: 0,
    take: 10,

  };
  public gridData: GridDataResult = process(LINE_ITEMS, this.state);
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
    this.gridData = process(LINE_ITEMS, this.state);
  }

  public bsTableToggle() {
  }
}
