import { Injectable } from '@angular/core';
import { Constants } from '@app/core/constants/constants';
import { MovieModel } from '@app/features/movies/models/movie-model';
import head from 'lodash/head';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Collection } from '../models/collection.model';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';

@Injectable()
export class CollectionsService {

  constructor (
    private readonly localStorageService: LocalStorageService
  ) { }

  createOrUpdate (collection: Collection) {
    const existingCollections: Collection[] = JSON.parse(this.localStorageService.getLocal(Constants.COLLECTIONS));
    let newCollections: Collection[] = [];
    if (existingCollections) {
      newCollections = existingCollections.filter((item: Collection) => {
        return item.id !== collection.id;
      });
    }
    newCollections.push(collection);
    this.localStorageService.setLocal(Constants.COLLECTIONS, newCollections);
  }
  assignCollections (data: {collection: Collection, movie: MovieModel}) {
    const oldCollection: Collection = this.checkIfExists(data.movie.id);
    if (oldCollection) {
      this.removeMovieFromOldCollection(data.movie.id, oldCollection.id);
    }

    const existingCollections: Collection[] = JSON.parse(this.localStorageService.getLocal(Constants.COLLECTIONS));
    if (existingCollections) {
      existingCollections.map((item: Collection) => {
        if (item.id === data.collection.id) {
          if (item.movies) {
            item.movies.push(data.movie);
          } else {
            item.movies = [];
            item.movies.push(data.movie);
          }
        }
        return item;
      });
    }
    this.localStorageService.setLocal(Constants.COLLECTIONS, existingCollections);
  }
  removeMovieFromOldCollection (id: number, cId: string): void {
    const existingCollections: Collection[] = JSON.parse(this.localStorageService.getLocal(Constants.COLLECTIONS));
    if (existingCollections) {
      existingCollections.map((item: Collection) => {
        if (item.id === cId && item.movies) {
          item.movies = item.movies!!.filter((movie: MovieModel) => {
            return movie.id !== id;
          });
        }
        return item;
      });
    }
    this.localStorageService.setLocal(Constants.COLLECTIONS, existingCollections);
  }
  getCollection (id: number): Observable<Collection> {
    const collections: Collection[] = JSON.parse(this.localStorageService.getLocal(Constants.COLLECTIONS));
    let collection: Collection[] = [];
    if (collections) {
      collection = collections.filter((item: Collection) => {
        const movieResults = item.movies && item.movies!!.filter((movie: MovieModel) => {
          return movie.id === id;
        });
        return movieResults && movieResults!!.length;
      });
    }
    const results: Collection = head(collection) as Collection;
    return of(results);
  }

  getCollections (): Observable<Collection[]> {
    const existingCollections: Collection[] = JSON.parse(this.localStorageService.getLocal(Constants.COLLECTIONS));
    return of(existingCollections);
  }

  checkIfExists (id: number): Collection {
    const collections: Collection[] = JSON.parse(this.localStorageService.getLocal(Constants.COLLECTIONS));
    let collection: Collection[] = [];
    if (collections) {
      collection = collections.filter((item: Collection) => {
        const movieResults = item.movies && item.movies!!.filter((movie: MovieModel) => {
          return movie.id === id;
        });
        return movieResults && movieResults!!.length;
      });
    }
    return head(collection) as Collection;
  }
}
