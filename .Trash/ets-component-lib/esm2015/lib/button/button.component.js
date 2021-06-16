import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: ButtonComponent, selector: "lib-button", inputs: { label: "label", yellow: "yellow" }, ngImport: i0, template: "<button [attr.is-yellow]=\"yellow\" [ngClass]=\"{'make-yellow': yellow}\">{{label}}</button>", styles: ["button{background:#e5e5e5;padding:1rem 2rem;border-radius:150px;appearance:none;border:0;-webkit-appearance:none;-moz-appearance:none;font-size:1em;font-family:Open Sans,sans-serif;color:#949494;font-weight:600;cursor:pointer}button.make-yellow{background:#f2c300;color:#000}"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-button',
                    templateUrl: './button.component.html',
                    styleUrls: ['./button.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input,
                args: ['label']
            }], yellow: [{
                type: Input,
                args: ['yellow']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2V0cy1jb21wb25lbnQtbGliL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ldHMtY29tcG9uZW50LWxpYi9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQUcxQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7NEdBTlUsZUFBZTtnR0FBZixlQUFlLGdHQ1A1Qiw4RkFBd0Y7MkZETzNFLGVBQWU7a0JBTDNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUN2QzswRUFFaUIsS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPO2dCQUNHLE1BQU07c0JBQXRCLEtBQUs7dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogc3RyaW5nIHwgbnVsbDtcbiAgQElucHV0KCd5ZWxsb3cnKSB5ZWxsb3c6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuXG4iLCI8YnV0dG9uIFthdHRyLmlzLXllbGxvd109XCJ5ZWxsb3dcIiBbbmdDbGFzc109XCJ7J21ha2UteWVsbG93JzogeWVsbG93fVwiPnt7bGFiZWx9fTwvYnV0dG9uPiJdfQ==