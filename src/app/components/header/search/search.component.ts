import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchBy = new EventEmitter<string>();

  onSearchBy(term: string) {
    this.searchBy.emit(term);
  }
}
