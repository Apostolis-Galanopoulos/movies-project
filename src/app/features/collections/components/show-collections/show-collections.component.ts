import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collection } from '@app/core/models/collection.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'movie-show-collections',
  templateUrl: './show-collections.component.html',
  styleUrls: ['./show-collections.component.scss']
})
export class ShowCollectionsComponent implements OnInit {
  collections$: Observable<Collection[]> = new Observable();
  constructor (
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit (): void {
    this.collections$ = this.activatedRoute.data
    .pipe(
      map((data) => {
        return data.dataResolver;
      })
    ) as Observable<Collection[]>;
  }
  trackByFn (_index: number, movie: Collection) {
    return movie.id;
  }
}
