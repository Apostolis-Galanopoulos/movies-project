import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '@app/core/models/collection.model';
import { Observable } from 'rxjs/internal/Observable';
import { MovieModel } from '../../models/movie-model';
import { MovieResponseModel } from '../../models/movie-response-model';

@Component({
  selector: 'movie-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.scss']
})
export class SearchDisplayComponent implements OnInit {
  collection$: Observable<Collection> = new Observable();
  @Input() movies$!: Observable<MovieResponseModel>;
  @Output() addToCollection: EventEmitter<{collection: Collection, movie: MovieModel}> = new EventEmitter();
  constructor (
  ) { }

  ngOnInit (): void {

  }
  clickEvent (data: {collection: Collection, movie: MovieModel}) {
    this.addToCollection.emit(data);
  }
  trackByFn (_index: number, movie: MovieModel) {
    return movie.id;
  }
}
