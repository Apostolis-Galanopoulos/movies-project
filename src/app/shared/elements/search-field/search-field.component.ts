import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'movie-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  search: FormControl = new FormControl('',
  [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9 ]*$')]);

  @Output() searchKey: EventEmitter<string> = new EventEmitter();

  constructor () { }

  ngOnInit (): void {
  }
  searchMovie () {
    this.searchKey.emit(this.search.value);
  }

}
