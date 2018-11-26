import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResponse } from '../models/dashboard-card-items.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PinService {

  private apiEndPoint = 'http://www.splashbase.co/api/v1/images';

  constructor(private http: HttpClient) {
  }

  getPins(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiEndPoint}/latest`);
  }

}
