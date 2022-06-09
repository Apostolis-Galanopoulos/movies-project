import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionsService } from '@app/core/collections/collections.service';
import { SharedModule } from '@app/shared/shared.module';
import { CollectionsRoutingModule } from './collections-routing.module';
import { COLLECTION_DECLARATIONS } from './index';
import { CollectionsResolverService } from './resolvers/collections-resolver.service';

@NgModule({
  declarations: [
    ...COLLECTION_DECLARATIONS
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ CollectionsResolverService, CollectionsService ]
})
export class CollectionsModule { }
