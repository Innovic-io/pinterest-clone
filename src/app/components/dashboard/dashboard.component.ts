import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IApiResponse, IPin } from '../../models/dashboard-card-items.model';
import { PinService } from '../../services/pin.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  apiResponse$: Observable<IApiResponse>;
  pins$: Observable<IPin[]>;
  searchSubscription$: Subscription;

  constructor(private pinService: PinService, private dataService: DataService) {}

  ngOnInit() {

    this.apiResponse$ = this.pinService.getPins();
    this.pins$ = this.dataService.getPins();

    this.searchSubscription$ = this.pinService.emitSearch
      .subscribe((search) =>  {
        this.apiResponse$ = this.pinService.searchPins(search);
      });
  }

  ngOnDestroy() {
    if (this.searchSubscription$) {
      this.searchSubscription$.unsubscribe();
    }
  }

}
