import { Injectable } from '@angular/core';
import { CollectionsService } from '@app/core/collections/collections.service';
import { Collection } from '@app/core/models/collection.model';
import { uuIdv4 } from '@app/core/utils/uuidv4';

@Injectable()
export class CollectionsComponentService {

  constructor (
    private readonly collectionsService: CollectionsService
  ) { }

  save (data: {title: string, description: string}) {
   const id: string = uuIdv4();
   const collection: Collection = {id, ...data};
    this.collectionsService.createOrUpdate(collection);
  }
}
