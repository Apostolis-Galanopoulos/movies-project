import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';
import { MovieModel } from '../models/movie-model';
import { SearchService } from './search.service';

@Injectable()
export class MovieResolverService implements Resolve<MovieModel> {
  constructor (
    private readonly searchService: SearchService,
  ) { }

  resolve (
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<MovieModel> {
    const id: number = Number(route.paramMap.get('id'));
    return this.searchService.movie(id).pipe(map(data => data), take(1));

  }
}
