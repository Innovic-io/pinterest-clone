import { Component, OnInit } from '@angular/core';
import { PinService } from '../../services/pin.service';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../models/dashboard-card-items.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  apiResponse$: Observable<IApiResponse>;

  constructor( private pinService: PinService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.apiResponse$ = this.pinService.getPin( this.route.snapshot.params.id);
  }

}
