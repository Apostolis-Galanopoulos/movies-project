import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './components/detail/detail.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchDisplayComponent } from './components/search-display/search-display.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MovieResolverService } from './services/movie-resolver.service';
import { SearchService } from './services/search.service';

export const MOVIES_DECLARATIONS = [
  SearchContainerComponent,
  SearchInputComponent,
  SearchDisplayComponent,
  DetailComponent,
  CardComponent
];

export const PROVIDERS = [
  MovieResolverService,
  SearchService
];
