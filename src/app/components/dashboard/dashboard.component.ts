import { Component } from '@angular/core';
import { CARDITEMS } from '../../mock-data/mock-dashboard-card-items';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cardItems = CARDITEMS;

}
