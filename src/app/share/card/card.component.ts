import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPin } from '../../models/dashboard-card-items.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() pin: IPin;
}
