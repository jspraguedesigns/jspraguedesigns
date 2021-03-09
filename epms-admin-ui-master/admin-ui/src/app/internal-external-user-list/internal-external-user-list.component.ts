import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { SAMPLE_PRODUCTS } from './products';
import {Router} from '@angular/router';


@Component({
  selector: 'app-internal-external-user-list',
  templateUrl: './internal-external-user-list.component.html',

    styles: [`
        .customer-photo {
            display: inline-block;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-size: 32px 35px;
            background-position: center center;
            vertical-align: middle;
            line-height: 32px;
            box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0,0,0,.2);
            margin-left: 5px;
        }

        .customer-name {
            display: inline-block;
            vertical-align: middle;
            line-height: 32px;
            padding-left: 10px;
        }

        .red {
            color: #d9534f;
        }

        .text-bold {
            font-weight: 600;
        }
  `]
})
export class InternalExternalUserListComponent implements OnInit {
    constructor(private router: Router) { }
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
    public gridData: any[] = SAMPLE_PRODUCTS;
    public gridView: any[];

    public mySelection: string[] = [];

    public ngOnInit(): void {
        this.gridView = this.gridData;
    }

    public onFilter(inputValue: string): void {
        this.gridView = process(this.gridData, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: 'orderID',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'firstName',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'lastName',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'programGroup',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'osc',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                      field: 'role',
                      operator: 'contains',
                      value: inputValue
                  },
                  {
                    field: 'userAccountType',
                    operator: 'contains',
                    value: inputValue
                },
                {
                  field: 'createdDate',
                  operator: 'contains',
                  value: inputValue
              }
                ],
            }
        }).data;

        this.dataBinding.skip = 0;
    }

    onAssign(){
        this.router.navigate(['/assign-business']);
      }

}