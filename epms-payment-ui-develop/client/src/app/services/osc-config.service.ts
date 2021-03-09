import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalAppData} from '../models/global-app-data';
import {Observable} from 'rxjs';
import {OscConfig} from '../models/osc-config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OscConfigService {

  public modeOfReciptToHopIdMap: Map<string, string> = new Map<string, string>();

  constructor(private http: HttpClient, private gd: GlobalAppData) {
    this.modeOfReciptToHopIdMap.set('N', 'cfhop');
    this.modeOfReciptToHopIdMap.set('I', 'cfhop');
    this.modeOfReciptToHopIdMap.set('M',  'ihop');
    this.modeOfReciptToHopIdMap.set('T',  'ihop');
    this.modeOfReciptToHopIdMap.set('F',  'ihop');
    this.modeOfReciptToHopIdMap.set('V', 'ihop');
  }


  getOscConfig(oscCode, modeOfRecipt): Observable<OscConfig> {

    const hopId = this.modeOfReciptToHopIdMap.get(modeOfRecipt.toUpperCase());
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<OscConfig>(environment.PAYMENT_UI + `/epms/config/osc/${oscCode}/hop/${hopId}`, httpOptions);
  }
}
