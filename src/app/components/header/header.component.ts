import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() logoUrl: string;

  @Output() searchBy = new EventEmitter<string>();

  onSearchBy(term: string) {
    this.searchBy.emit(term);
  }

}
