import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { MovieResolverService } from './services/movie-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchContainerComponent },
  {
    path: 'detail/:id', component: DetailComponent,
    resolve: {
      dataResolver: MovieResolverService
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
