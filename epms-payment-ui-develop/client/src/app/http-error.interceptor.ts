import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpRequest, HttpHandler,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {retry, catchError, retryWhen, finalize} from 'rxjs/operators';
import { GenericRetryStrategy, ShouldRetryFn } from './common/api-retry-strategy';
import {LoadingService} from "./services/loading.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private _loading: LoadingService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loading.setLoading(true, request.url);
    const { shouldRetry } = this;
    return next.handle(request)
      .pipe(retryWhen(GenericRetryStrategy({shouldRetry})))
      .pipe(finalize(() => {
        this._loading.setLoading(false, request.url);
      }));
  }
  private shouldRetry: ShouldRetryFn = (error) => (error.status === 502 || error.status === 500);
}
