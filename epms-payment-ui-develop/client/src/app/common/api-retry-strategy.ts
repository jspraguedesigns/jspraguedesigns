import { timer, throwError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export type ShouldRetryFn = ({ status: number }) => boolean;

export interface RetryParams {
  maxAttempts?: number;
  scalingDuration?: number;
  shouldRetry?: ShouldRetryFn;
}

const defaultParams: RetryParams = {
  maxAttempts: 2,
  scalingDuration: 500,
  shouldRetry: ({ status }) => status >= 400
}

export const GenericRetryStrategy = (params: RetryParams = {}) => (attempts: Observable<any>) => attempts.pipe(
  mergeMap((error, i) => {
    const { maxAttempts, scalingDuration, shouldRetry } = { ...defaultParams, ...params }
    const retryAttempt = i + 1;
    // if maximum number of retries have been met
    // or response is a status code we don't wish to retry, throw error
    if (retryAttempt > maxAttempts || !shouldRetry(error)) {
      return throwError(error);
    }
    // retry after 1s, 2s, etc...
    return timer(retryAttempt * scalingDuration);
  })
);
