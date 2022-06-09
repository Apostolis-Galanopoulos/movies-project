import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CollectionsService } from '@app/core/collections/collections.service';
import { Collection } from '@app/core/models/collection.model';
import { MovieModel } from '@app/features/movies/models/movie-model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() collected!: Collection | null;
  @Input() card!: MovieModel;
  @Output() addToCollection: EventEmitter<{collection: Collection, movie: MovieModel}> = new EventEmitter();
  collection$: Observable<Collection> = new Observable();
  collections$: Observable<Collection[]> = new Observable();
  constructor (
    private readonly collectionsService: CollectionsService
  ) { }

  ngOnInit (): void {
    this.collection$ = this.collectionsService.getCollection(this.card.id);
    this.collections$ = this.collectionsService.getCollections();
    this.collection$.subscribe(console.log);
  }

  valueChanged (data: Collection) {
    this.addToCollection.emit({collection : data, movie: this.card});
  }
}
