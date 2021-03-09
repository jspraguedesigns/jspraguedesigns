import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GlobalAppData} from '../models/global-app-data';
import {faCreditCard, faLandmark} from '@fortawesome/free-solid-svg-icons';
import {environment} from '../../../src/environments/environment';
import {Transaction} from '../models/transaction';
import {getQueryParamByName} from '../common/utils';
import {faPaypal} from '@fortawesome/free-brands-svg-icons';
import {OscConfig} from '../models/osc-config';
import {BlockPaymentOption} from '../models/block-payment-option';
import {MerchantResponseComponent} from "../merchant-response/merchant-response.component";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() paymentType: string;
  @Input() contact: string;
  @Input() paymentStatus: string;
  @Input() orderData: Transaction;
  billingDetails: string = null;
  status: string = null;
  showCreditCard = false;
  showBankAccount = false;
  faCreditCard = faCreditCard;
  faLandmark = faLandmark;
  faPaypal = faPaypal;
  showPaypal = false;
  activeBtn = false;
  activePP = false;
  activeBA = false;
  isStubEnabled: boolean;

  @ViewChild(MerchantResponseComponent) public merchantResponseComponent;

  constructor(public globalAppData: GlobalAppData) { }

  ngOnInit(): void {
    this.isStubEnabled = this.globalAppData.isStubEnabled;
    if (!this.isStubEnabled) {
      this.loadFiservConfig();
      //this.loadPaypalConfig();// method moved in app.component.ts
    }
    this.handleAcsResponse();
  }

  loadPaymentIframe(): void {
    this.activeBtn = true;
    this.activePP = false;
    this.activeBA = false;
    if (this.globalAppData. transId) {
      this.showCreditCard = true;
      this.showBankAccount = false;
      this.showPaypal = false;
      this.globalAppData.paymentType = 'cc';
    } else {
      alert('Order is not created');
    }
  }

  loadBankAccount(): void {
    this.activeBtn = false;
    this.activePP = false;
    this.activeBA = true;
    this.showBankAccount = true;
    this.showPaypal = false;
    this.showCreditCard = false;
  }

  paymentStatusChange(pmtStatus: boolean): void {
    this.status = pmtStatus ? 'approved' : 'maxAttemptError';
    this.showCreditCard = false;
    this.showPaypal = false;
    this.showBankAccount = false;
  }

  // private loadPaypalConfig(): void {
  //   const paypalScript = document.createElement('script');
  //   paypalScript.src = 'https://www.paypal.com/sdk/js?disable-funding=credit,card&client-id=' + environment.ETS_PAYPAL_CLIENTID;
  //   paypalScript.async = true;
  //   paypalScript.type = 'text/javascript';
  //   window.document.head.appendChild(paypalScript);
  // }

  private loadFiservConfig(): void {
    const firservScript = document.createElement('script');
    firservScript.src = environment.FISERV_SDK;
    window.document.head.appendChild(firservScript);
  }

  loadPaypal(): void {
    this.activeBtn = false;
    this.activeBA = false;
    this.activePP = true;
    this.showPaypal = true;
    this.showBankAccount = false;
    this.showCreditCard = false;
    this.globalAppData.paymentType = 'paypal';
  }

  handleAcsResponse(): void {
    if (this.paymentType && this.paymentType === 'cc') {
      this.showCreditCard = true;
    }
    if (this.contact) {
      this.billingDetails = this.contact;
    }
    if (this.paymentStatus) {
      this.status = this.paymentStatus;
    } else {
      // TODO : remove this once intergrated with Program Applications.
      const orderStatus = getQueryParamByName('status');
      if (orderStatus) {
        this.status = orderStatus.toLowerCase();
        if(this.status==='APPROVED'.toLowerCase()){
          setTimeout(()=>{
            this.merchantResponseComponent.redirectToMerchantSuccessURL("",{});
          },300)

        } else if(this.status==='error'){
          setTimeout(()=>{
            this.merchantResponseComponent.redirectToMerchantErrorURL("",{});
          },300)

        }
      }
    }
  }



  getBlockPaymentOption() {
    let blockPymtOpt=[];
    if (this.globalAppData && this.globalAppData.oscConfig) {
      const oscConfig: OscConfig = this.globalAppData.oscConfig;
      if (oscConfig.blockPymtOpt && oscConfig.blockPymtOpt.length > 0) {
        blockPymtOpt = oscConfig.blockPymtOpt.filter(pymtOpt => pymtOpt.country.countryIsoCode === this.orderData.shippingAddress.country ||
          pymtOpt.country.countryIsoCode === this.orderData.order.testCenterCountryCode

        );
      }

    }

    return blockPymtOpt;
  }

  getBlockedPaymentMethodNames(){
    const names = [];
    let blockPaymentOptArr = this.getBlockPaymentOption();
    if ( blockPaymentOptArr && blockPaymentOptArr.length > 0) {
      for(const blockPymtOpt of  blockPaymentOptArr){
        names.push(blockPymtOpt.paymentMethod.paymentMethodName);
      }
    }
    return names;
  }

  isPaypalEnabled(): boolean {
    if (this.globalAppData && this.globalAppData.oscConfig && 'subscription' !== this.globalAppData.sourceType.toLowerCase()) {
      const oscConfig = this.globalAppData.oscConfig;
      let blockPaymentOptArr = this.getBlockPaymentOption();

      const paymentMethodNames = [];
      if (blockPaymentOptArr && blockPaymentOptArr.length > 0) {
        for (const blockPaymentOpt of blockPaymentOptArr) {
          if (blockPaymentOpt.paymentMethod && blockPaymentOpt.paymentMethod.paymentMethodName) {
            paymentMethodNames.push(blockPaymentOpt.paymentMethod.paymentMethodName);
          }
        }

      }
      if (oscConfig.paypalEnabled && 'CFHOP' === oscConfig.hopId &&paymentMethodNames.indexOf('Paypal') < 0) {

        return true;
      }
    } else {
      return false;
    }
  }

  isBankAccountEnabled(): boolean {

    if (this.globalAppData && this.globalAppData.oscConfig) {
      const oscConfig = this.globalAppData.oscConfig;
      let blockPaymentOptArr = this.getBlockPaymentOption();

      const paymentMethodNames = [];
      if (blockPaymentOptArr && blockPaymentOptArr.length > 0) {
        for (const blockPaymentOpt of blockPaymentOptArr) {
          if (blockPaymentOpt.paymentMethod && blockPaymentOpt.paymentMethod.paymentMethodName) {
            paymentMethodNames.push(blockPaymentOpt.paymentMethod.paymentMethodName);
          }
        }

      }
      if (oscConfig.bankAccountEnabled && paymentMethodNames.indexOf('Bank Account') < 0) {

        return true;
      }
    } else {
      return false;
    }
  }

}
