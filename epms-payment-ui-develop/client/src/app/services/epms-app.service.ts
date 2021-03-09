import { Injectable } from '@angular/core';
import { GlobalAppData } from '../models/global-app-data';
import { getQueryParamByName } from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class EpmsAppService {

  constructor() { }

  getSessionDetails(): GlobalAppData {
    const status = getQueryParamByName('status');
    if (status && status.toLowerCase() !== 'approved') {
      const sessionData = sessionStorage.getItem('sessionid');
      if (sessionData) {
        const decryptSessionData = JSON.parse(atob(atob(sessionData)));
        const gdSessionData = Object.assign(new GlobalAppData(), decryptSessionData);
        if (gdSessionData.transId === getQueryParamByName('t')) {
          return gdSessionData;
        } else {
          return null;
        }
      }
    }
  }
}
