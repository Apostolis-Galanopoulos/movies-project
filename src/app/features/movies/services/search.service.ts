import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkService } from '@app/core/network/network.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { MovieModel } from '../models/movie-model';
import { MovieResponseModel } from '../models/movie-response-model';

@Injectable()
export class SearchService {

  private small: string = 'w94_and_h141_bestv2';
  private large: string = 'w300_and_h450_bestv2';
  private domain: string = environment.domain;
  constructor (
    readonly networkService: NetworkService
  ) { }

  movies (query: string, page: number = 1, include_adult: boolean = false, language: string = 'en-US'): Observable<MovieResponseModel> {
    const params = new HttpParams()
      .set('query', query)
      .set('language', language)
      .set('page', page)
      .set('include_adult', include_adult);
    return this.networkService.get<MovieResponseModel>('search/movie', { params })
    .pipe(map((data: MovieResponseModel) => this.appendDomainOnPoster(data)));
  }

  movie (id: number): Observable<MovieModel> {
    return this.networkService.get<MovieModel>(`movie/${id}`)
    .pipe(
      map((data: MovieModel) => {
       data.poster_path = this.addDomain(data.poster_path, this.large);
       return data;
    })
    );
  }

  appendDomainOnPoster (data: MovieResponseModel): MovieResponseModel {
     data.results.map((item: MovieModel) => {
        return item.poster_path = this.addDomain(item.poster_path, this.small);
    });
    return data;
  }
  addDomain (posterPath: string, size: string): string {
  return posterPath ?
    `${this.domain}/t/p/${size}${posterPath}` :
     '/assets/images/no-image-placeholder.svg';
  }
}
