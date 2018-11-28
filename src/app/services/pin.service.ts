import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { IApiResponse } from '../models/dashboard-card-items.model';

@Injectable({
  providedIn: 'root'
})
export class PinService {

  emitSearch = new Subject<string>();
  private apiEndPoint = 'http://www.splashbase.co/api/v1/images';

  constructor(private http: HttpClient) {
  }

  getPins(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiEndPoint}/latest`);
  }

  searchPins(term: string): Observable<IApiResponse> {

    const searchParams = new HttpParams().set('query', term);

    return this.http.get<IApiResponse>(`${this.apiEndPoint}/search`, {params: searchParams});
  }
}
