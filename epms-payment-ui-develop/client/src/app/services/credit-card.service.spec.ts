// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// async testing methods
import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { CreditCardService } from './credit-card.service';
import { ISessionAuth } from '../models/paymentjs-models';

describe('CreditCardService', () => {
  let service: CreditCardService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Provide the service-under-test and its dependencies
      providers: [CreditCardService],
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ]
    });
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CreditCardService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('CreditCardService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test get creditcard sessiondetails', fakeAsync(() => {
    const expectedSession: ISessionAuth = { clientToken: 'clientToken', publicKeyBase64: 'publicKeyBase64' };
    let sessionResult;
    let sessionError;
    // Make an HTTP GET request
    service.getCreditCardSessionDetails('testTransId')
    .then(data => sessionResult = data)
    .catch(err => sessionError = err);

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(window.location.origin + '/epms/token/testTransId');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    req.flush(expectedSession);
    flushMicrotasks();
    expect(sessionResult.clientToken).toEqual('clientToken');
    expect(sessionResult.publicKeyBase64).toEqual('publicKeyBase64');
    expect(sessionError).toBeUndefined();
  }));
});
