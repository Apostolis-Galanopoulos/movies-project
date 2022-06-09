import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { CollectionsService } from '@app/core/collections/collections.service';
import { Collection } from '@app/core/models/collection.model';
import { SearchService } from '@app/features/movies/services/search.service';
import { Observable } from 'rxjs/internal/Observable';
import { MovieModel } from '../../models/movie-model';
import { MovieResponseModel } from '../../models/movie-response-model';

@Component({
  selector: 'movie-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
  providers: [CollectionsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchContainerComponent implements OnInit {

  movies$: Observable<MovieResponseModel> = new Observable();
  private searchKey: string = '';
  constructor (
    private readonly searchService: SearchService,
    @Self() private readonly collectionsService: CollectionsService
  ) { }

  ngOnInit (): void {  }

  searchMovie (searchKey: string): void {
    this.searchKey = searchKey;
    this.movies$ = this.searchService.movies(this.searchKey);
  }

  rowsChanged (page: number) {
    this.movies$ = this.searchService.movies(this.searchKey, page);
  }
  addToCollection (data: {collection: Collection, movie: MovieModel}) {
    this.collectionsService.assignCollections(data);
  }

}
