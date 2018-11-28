import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IPin } from '../models/dashboard-card-items.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pins: IPin[] = [];

  getPins() {
    return of(this.pins);
  }

  createPin(pin: IPin) {
    this.pins.push(pin);
  }
}
