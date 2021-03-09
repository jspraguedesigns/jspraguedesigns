import {Component, OnInit, ViewChild} from '@angular/core';
import {EpmsAppService} from './services/epms-app.service';
import {GlobalAppData} from './models/global-app-data';
import {OrderService} from './services/order.service';
import {Transaction} from './models/transaction';
import {getQueryParamByName} from './common/utils';
import {OscConfigService} from './services/osc-config.service';
import {environment} from '../environments/environment';
import { LoadingService } from './services/loading.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {delay} from 'rxjs/operators';
import {MerchantResponseComponent} from "./merchant-response/merchant-response.component";
import {OrderComponent} from "./order/order.component";
import { MerchantDetails } from './models/merchant-details';



@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private appService: EpmsAppService,
              private odService: OrderService,
              private oscConfigService: OscConfigService,
              private gd: GlobalAppData,
              private _loading: LoadingService,
              private spinner: NgxSpinnerService) {

              }
  paymentType: string = null;
  contact: string = null;
  paymentStatus: string = null;
  orderDetails: Transaction;
  paypalClientId: string = null;
  loading: boolean = false;
  merchantConfigData: Array<MerchantDetails>;

  @ViewChild(OrderComponent) orderComponent;

  ngOnInit(): void {
   this.listenToLoading();
   this.gd.isStubEnabled = this.isStubEnabled();
   this.getOrderDetails();
   const gdSessionData: GlobalAppData = this.appService.getSessionDetails();
   if (gdSessionData) {
      this.paymentType = gdSessionData.paymentType;
      this.contact = gdSessionData.address;
      this.paymentStatus = 'declined';
    }
  }
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
        this.spinner.show();
      });
  }

  getOrderDetails(): void {
    this.odService.getOrder().subscribe((result: Transaction) => {
      if (result) {
        this.orderDetails = result;
        this.gd.attemptCount = result.pmtCounter;
        this.gd.orderTransaction = result;
        this.gd.sourceType = result.order.sourceType;
        this.gd.subscriptionDetail = result.subscriptionDetail;
        this.loadOscConfigDetails();
      }
    }, (error: any) => {
    });
  }

  private loadPaypalConfig(): void {
    const paypalScript = document.createElement('script');
    paypalScript.src = environment.PAYPAL_SDK + this.paypalClientId;
    paypalScript.async = true;
    paypalScript.type = 'text/javascript';
    window.document.head.appendChild(paypalScript);
  }

  getProgarmBasedPaypalClientId(prgGrpName): void {
    if(prgGrpName === "ETS PROGRAMS")
      this.paypalClientId = environment.PROGRAMS_PAYPAL_CLIENTID;
    else if(prgGrpName === "ETS GRE")
      this.paypalClientId = environment.GRE_PAYPAL_CLIENTID;
    else if(prgGrpName === "ETS TOEFL")
      this.paypalClientId = environment.TOEFL_PAYPAL_CLIENTID;
    else if(prgGrpName === "ETS PRAXIS")
      this.paypalClientId = environment.PRAXIS_PAYPAL_CLIENTID;
    else
      this.paypalClientId = environment.PROGRAMS_PAYPAL_CLIENTID; // default
  }

  loadOscConfigDetails(): void {
    const oscConfigObs = this.oscConfigService.getOscConfig(this.orderDetails.storeId, this.orderDetails.modeOfReceipt);
    oscConfigObs.subscribe(data => {
      this.gd.oscConfig = data;
      if (!this.gd.isStubEnabled) // isStub=false
        if(data && data.programGroupName){
          this.getProgarmBasedPaypalClientId(data.programGroupName);
          this.loadPaypalConfig(); // retrieve paypal clientId based on store and program
        }
      if (data && data.maxRejectAtmptCount) {
        environment.MAX_PAYMENT_ALLOWED_ATTEMPTS = data.maxRejectAtmptCount;
      }
      if(data && data.merchantDefinedField) {
        this.merchantConfigData = data.merchantDefinedField;
      }
    });
  }

  isStubEnabled(): boolean {
    const isStubParamExists = getQueryParamByName('isStub');

    if (isStubParamExists) {
      return (isStubParamExists === 'true'
      );

    }
    return false;
  }

  backToOrder(){
    this.orderComponent.merchantResponseComponent.backToOrder('', {});
  }
}
