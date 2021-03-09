import {Component, ViewEncapsulation} from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cvv-tooltip',
  templateUrl: './cvv-tooltip.html',
  styleUrls: ['./cvv-tooltip.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .my-custom-class .tooltip-inner {
      background-color: #ffffff;
      border: 1px solid #000;
      color: #000000;
      font-size: 125%;
    }
    .my-custom-class{
        width: 300px;
    }
    .my-custom-class .arrow::before {
      border-top-color: #000;
    }
  `]
})
export class NgbdTooltipCustomclass {
    faQuestionCircle = faQuestionCircle
}
