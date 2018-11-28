import { Component } from '@angular/core';
import { PinService } from './services/pin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private pinService: PinService) {
  }

  onSearchBy(term?: string) {
    this.pinService.emitSearch.next(term);
  }
}
