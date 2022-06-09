import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MovieResolverService } from './movie-resolver.service';
import { SearchService } from './search.service';

describe('MovieResolverService', () => {
  let service: MovieResolverService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SearchService', ['movie']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieResolverService, { provide: SearchService, useValue: spy }]
    });
    service = TestBed.inject(MovieResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
