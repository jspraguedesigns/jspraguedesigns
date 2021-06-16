(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ets-component-lib', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ets-component-lib'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var EtsComponentLibService = /** @class */ (function () {
        function EtsComponentLibService() {
        }
        return EtsComponentLibService;
    }());
    EtsComponentLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EtsComponentLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var EtsComponentLibComponent = /** @class */ (function () {
        function EtsComponentLibComponent() {
        }
        EtsComponentLibComponent.prototype.ngOnInit = function () {
        };
        return EtsComponentLibComponent;
    }());
    EtsComponentLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    EtsComponentLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: EtsComponentLibComponent, selector: "lib-ets-component-lib", ngImport: i0__namespace, template: "\n    <p>\n      ets-component-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-ets-component-lib',
                        template: "\n    <p>\n      ets-component-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        return ButtonComponent;
    }());
    ButtonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: ButtonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ButtonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: ButtonComponent, selector: "lib-button", inputs: { label: "label", yellow: "yellow" }, ngImport: i0__namespace, template: "<button [attr.is-yellow]=\"yellow\" [ngClass]=\"{'make-yellow': yellow}\">{{label}}</button>", styles: ["button{background:#e5e5e5;padding:1rem 2rem;border-radius:150px;appearance:none;border:0;-webkit-appearance:none;-moz-appearance:none;font-size:1em;font-family:Open Sans,sans-serif;color:#949494;font-weight:600;cursor:pointer}button.make-yellow{background:#f2c300;color:#000}"], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: ButtonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-button',
                        templateUrl: './button.component.html',
                        styleUrls: ['./button.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                    type: i0.Input,
                    args: ['label']
                }], yellow: [{
                    type: i0.Input,
                    args: ['yellow']
                }] } });

    var EtsComponentLibModule = /** @class */ (function () {
        function EtsComponentLibModule() {
        }
        return EtsComponentLibModule;
    }());
    EtsComponentLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    EtsComponentLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibModule, declarations: [EtsComponentLibComponent,
            ButtonComponent], imports: [i1.CommonModule], exports: [EtsComponentLibComponent,
            ButtonComponent] });
    EtsComponentLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibModule, imports: [[
                i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0__namespace, type: EtsComponentLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EtsComponentLibComponent,
                            ButtonComponent
                        ],
                        imports: [
                            i1.CommonModule
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

    exports.ButtonComponent = ButtonComponent;
    exports.EtsComponentLibComponent = EtsComponentLibComponent;
    exports.EtsComponentLibModule = EtsComponentLibModule;
    exports.EtsComponentLibService = EtsComponentLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ets-component-lib.umd.js.map
