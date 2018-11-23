import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardItem } from '../../models/dashboard-card-items.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cardItem: CardItem;
}
