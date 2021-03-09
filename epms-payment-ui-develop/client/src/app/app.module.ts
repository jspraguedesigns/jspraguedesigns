import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/order.service';
import { CreditCardService } from './services/credit-card.service';
import { PaymentService } from './services/payment.service';
import { PaypalService } from './services/paypal.service';
import { GlobalAppData } from './models/global-app-data';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTooltipCustomclass } from './cvv-tooltip/cvv-tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderTotalComponent } from './order-total/order-total.component';
import { AcceptedPaymentTypesComponent } from './accepted-payment-types/accepted-payment-types.component';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TelecheckComponent } from './telecheck/telecheck.component';
import { PaypalComponent } from './paypal/paypal.component';
import { SharedService } from './services/shared.service';
import { ConfirmEqualValidatorDirective } from './common/confirm-equal-validator.directive';
import { AddressComponent } from './address/address.component';
import { PaypalStubComponent } from './paypal/stub/paypalstub.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MerchantResponseComponent } from './merchant-response/merchant-response.component';
import { MerchantFieldsComponent } from './merchant-fields/merchant-fields.component';
import {SubTotalComponent} from'./sub-total/sub-total.component'
import { LoaderComponentComponent } from './loader-component/loader-component.component';
import {HttpRequestInterceptor} from "./http-request-interceptor/ http-request-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CreditCardComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    OrderInfoComponent,
    NgbdTooltipCustomclass,
    OrderTotalComponent,
    AcceptedPaymentTypesComponent,
    TelecheckComponent,
    PaypalComponent,
    ConfirmEqualValidatorDirective,
    AddressComponent,
    PaypalStubComponent,
    MerchantResponseComponent,
    MerchantFieldsComponent,
    LoaderComponentComponent,
    SubTotalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalAppData,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    OrderService, CreditCardService, PaymentService, PaypalService, SharedService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
