import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OrderSearchComponent } from './order-search/order-search.component';
import { VirtualTerminalComponent } from './virtual-terminal/virtual-terminal.component';
import { OSCHopConfigComponent } from './oschop-config/oschop-config.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { CVAToolComponent } from './cvatool/cvatool.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SalePaymentComponent } from './sale-payment/sale-payment.component';
import { OverrideRefundComponent } from './override-refund/override-refund.component';
import { SalepaymentCheckoutComponent } from './salepayment-checkout/salepayment-checkout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CcFormComponent } from './cc-form/cc-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmationSaleComponent } from './confirmation-sale/confirmation-sale.component';
import { OverrideRefundPaymentComponent } from './override-refund-payment/override-refund-payment.component';
import { CommonModule,CurrencyPipe } from '@angular/common';
import { CurrencyInputDirective } from './currency-input.directive';
import { ConfirmationRefundComponent } from './confirmation-refund/confirmation-refund.component';
import { PageComponentsModule } from '@ets/page-components';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { LabelModule } from '@progress/kendo-angular-label';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { OrderSearchResultComponent } from './order-search-result/order-search-result.component';
import { CcRefundComponent } from './cc-refund/cc-refund.component';
import { GridModule} from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { OrderSearchDetailsComponent } from './order-search-result/order-search-details/order-search-details.component';
import {  NgxPageScrollModule } from 'ngx-page-scroll';
import { LineItemSummaryComponent } from './line-item-summary/line-item-summary.component';
import { TelecheckComponent } from './telecheck/telecheck.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ActionLinksComponent } from './action-links/action-links.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminUiComponent } from './admin-ui/admin-ui.component';
import {AuditLog} from './action-links/audit-log/audit-log.component';
import {AuditMessage} from './action-links/audit-message/audit-message.component';
import {LinkedOverrideRefund} from './action-links/linked-override-refund/linked-override-refund.component';
import {Refund} from './action-links/refund/refund.component';
import {ReverseChargeback} from './action-links/manual-reverse-chargeback/manual-reverse-chargeback.component';
import {Retrieval} from './action-links/request-for-retrieval/request-for-retrieval.component';
import { InternalExternalUserListComponent } from './internal-external-user-list/internal-external-user-list.component';
import {SearchFailsComponent} from './order-search-result/search-fail/search-fail.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AssignBusinessComponent } from './assign-business/assign-business.component';
import {OSCFormComponent} from './assign-business/osc-form/osc-form.component';
import {AssignOSCComponent} from './assign-business/osc-form/assign-osc/assign-osc.component';
import {AssignProgramComponent} from './assign-business/osc-form/assign-program/assign-program.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MasterGlobalConfigComponent} from './oschop-config/master-global-config/master-global-config.component'
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminHomeComponent,
    OrderSearchComponent,
    VirtualTerminalComponent,
    OSCHopConfigComponent,
    UserManagementComponent,
    CVAToolComponent,
    SalePaymentComponent,
    OverrideRefundComponent,
    SalepaymentCheckoutComponent,
    CcFormComponent,
    ConfirmationSaleComponent,
    OverrideRefundPaymentComponent,
    CurrencyInputDirective,
    ConfirmationRefundComponent,
    OrderSearchResultComponent,
    CcRefundComponent,
    FilterTableComponent,
    OrderSearchDetailsComponent,
    LineItemSummaryComponent,
    TelecheckComponent,
    NavBarComponent,
    ActionLinksComponent,
    AdminUiComponent,
    LinkedOverrideRefund,
    Refund,
    ReverseChargeback,
    Retrieval,
    AuditLog,
    AuditMessage,
    InternalExternalUserListComponent,
    SearchFailsComponent,
    UserDetailsComponent,
    AssignBusinessComponent,
    OSCFormComponent,
    AssignOSCComponent,
    AssignProgramComponent,
    MasterGlobalConfigComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    PageComponentsModule,
    DateInputsModule,
    IntlModule,
    LabelModule,
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    GridModule, 
    DropDownsModule,
    NgxPageScrollModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
