import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'movie-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() searchKey: EventEmitter<string> = new EventEmitter();
  constructor () { }

  ngOnInit (): void {
  }
  searchMovie (keyword: string) {
    this.searchKey.emit(keyword);
  }

}
