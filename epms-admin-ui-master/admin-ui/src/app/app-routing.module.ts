import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from '../app/admin-home/admin-home.component';
import {OrderSearchComponent} from '../app/order-search/order-search.component';
import {VirtualTerminalComponent} from '../app/virtual-terminal/virtual-terminal.component';
import {SalepaymentCheckoutComponent} from '../app/salepayment-checkout/salepayment-checkout.component';
import {ConfirmationSaleComponent} from '../app/confirmation-sale/confirmation-sale.component';
import {ConfirmationRefundComponent} from '../app/confirmation-refund/confirmation-refund.component';
import {OverrideRefundPaymentComponent} from '../app/override-refund-payment/override-refund-payment.component';
import {OrderSearchResultComponent} from '../app/order-search-result/order-search-result.component';
import {OrderSearchDetailsComponent} from '../app/order-search-result/order-search-details/order-search-details.component';
import {UserManagementComponent} from '../app/user-management/user-management.component';
import {UserDetailsComponent} from '../app/user-details/user-details.component';
import {AssignBusinessComponent} from '../app/assign-business/assign-business.component';
const routes: Routes = [
{ path: '', redirectTo: 'epms-admin-home', pathMatch: 'full'},
{ path: 'epms-admin-home', component:AdminHomeComponent },
{ path: 'order-search', component:OrderSearchComponent },
{ path: 'virtual-terminal', component:VirtualTerminalComponent },
{ path: 'salepayment-checkout', component:SalepaymentCheckoutComponent},
{ path: 'confirmation-sale', component:ConfirmationSaleComponent},
{ path: 'override-refund-payment', component:OverrideRefundPaymentComponent},
{ path: 'order-search-result', component:OrderSearchResultComponent},
{ path: 'confirmation-refund', component:ConfirmationRefundComponent},
{path: 'order-search-details', component:OrderSearchDetailsComponent},
{path: 'user-management', component:UserManagementComponent},
{path: 'user-details', component:UserDetailsComponent},
{path: 'assign-business', component:AssignBusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
