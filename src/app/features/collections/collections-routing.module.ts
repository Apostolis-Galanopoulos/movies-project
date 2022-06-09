import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionContainerComponent } from './components/collection-container/collection-container.component';
import { CollectionDetailComponent } from './components/collection-container/collection-detail/collection-detail.component';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';
import { ShowCollectionsComponent } from './components/show-collections/show-collections.component';
import { CollectionsResolverService } from './resolvers/collections-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: CollectionContainerComponent },
  { path: 'create', component: CreateCollectionComponent },
  {
    path: 'show', component: ShowCollectionsComponent,
    resolve: {
      dataResolver: CollectionsResolverService
    }
  },
  {
    path: 'show/:id', component: CollectionDetailComponent,
    resolve: {
      dataResolver: CollectionsResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
