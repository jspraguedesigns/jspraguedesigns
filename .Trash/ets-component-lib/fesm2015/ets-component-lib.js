import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class EtsComponentLibService {
    constructor() { }
}
EtsComponentLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EtsComponentLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class EtsComponentLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
EtsComponentLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EtsComponentLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: EtsComponentLibComponent, selector: "lib-ets-component-lib", ngImport: i0, template: `
    <p>
      ets-component-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ets-component-lib',
                    template: `
    <p>
      ets-component-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ButtonComponent {
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

class EtsComponentLibModule {
}
EtsComponentLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EtsComponentLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibModule, declarations: [EtsComponentLibComponent,
        ButtonComponent], imports: [CommonModule], exports: [EtsComponentLibComponent,
        ButtonComponent] });
EtsComponentLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: EtsComponentLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EtsComponentLibComponent,
                        ButtonComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        EtsComponentLibComponent,
                        ButtonComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ets-component-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, EtsComponentLibComponent, EtsComponentLibModule, EtsComponentLibService };
//# sourceMappingURL=ets-component-lib.js.map
