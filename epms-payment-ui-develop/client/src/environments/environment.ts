// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  PAYMENT_UI: 'http://localhost:80',
  GRE_PAYPAL_CLIENTID: 'AfD8VCvzRraB3fFq11JjaY6tabxhvc3AQzly5rTBoZsWiPo5nzVQeglryZKRup6S2REmsshK3fotzKUN',
  PROGRAMS_PAYPAL_CLIENTID: 'ASmWyjwTKKtT2gpiOUnZ4hOqUBrE_jrQelsvUbNvEKZ5a-yZAKowhBD5dCoxk_iiQnBrw12dWheg4n5K',
  PRAXIS_PAYPAL_CLIENTID: 'AcSOgwQLwgkmRWeMNuS5qK9KYGfxwHR2sHu-gIxk72DsRkxR1zbbJrXM3wvXIQdrRWQlinL9aHwUrZg1',
  TOEFL_PAYPAL_CLIENTID: 'AcSOgwQLwgkmRWeMNuS5qK9KYGfxwHR2sHu-gIxk72DsRkxR1zbbJrXM3wvXIQdrRWQlinL9aHwUrZg1',
  MAX_PAYMENT_ALLOWED_ATTEMPTS: 3,
  PAYPAL_SDK: 'https://www.paypal.com/sdk/js?disable-funding=credit,card&client-id=',
  FISERV_SDK: 'https://lib.paymentjs.firstdata.com/uat/client-2.0.0.js'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
