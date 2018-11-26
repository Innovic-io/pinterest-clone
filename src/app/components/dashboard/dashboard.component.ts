import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../models/dashboard-card-items.model';
import { PinService } from '../../services/pin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apiResponse$: Observable<IApiResponse>;

  constructor(private pinService: PinService) {
  }

  ngOnInit() {

    this.apiResponse$ = this.pinService.getPins();
  }

}
