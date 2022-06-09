import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CollectionsService } from '@app/core/collections/collections.service';
import { Collection } from '@app/core/models/collection.model';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';

@Injectable()
export class CollectionsResolverService implements Resolve<Collection[]> {
  constructor (
    private readonly collectionsService: CollectionsService,
  ) { }

  resolve (
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Collection[]> {
    return this.collectionsService.getCollections().pipe(take(1));

  }
}
