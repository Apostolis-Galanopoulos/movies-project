import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { NetworkService } from '@app/core/network/network.service';
import { defer } from 'rxjs';
import { SearchService } from './search.service';
import { MovieModel } from '../models/movie-model';
import { MovieResponseModel } from '../models/movie-response-model';

const movie: MovieModel = {"adult":false,"backdrop_path":"/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg","budget":25000000,"id":278,"original_language":"en","original_title":"The Shawshank Redemption","overview":"Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.","popularity":57.466,"poster_path":"/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg","release_date":"1994-09-23","revenue":28341469,"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","title":"The Shawshank Redemption","video":false,"vote_average":8.7,"vote_count":21554, "genre_ids":[]};
const expectedMovies: MovieResponseModel = {
  "page": 1,
  "results": [movie],
  "total_pages": 1,
  "total_results": 2
}


function asyncData<T> (data: T) {
  return defer(() => Promise.resolve(data));
}

describe('SearchService', () => {
  let service: SearchService;
  let httpTestingController: HttpTestingController;
  let HttpServiceSpy: jasmine.SpyObj<NetworkService>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpService', ['get', 'post']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService, { provide: NetworkService, useValue: spy }]
    });
    service = TestBed.inject(SearchService);
    HttpServiceSpy = TestBed.inject(NetworkService) as jasmine.SpyObj<NetworkService>;
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  describe('SearchService movies()', () => {
    it('#getAll should return expected movies (called once)', (done: DoneFn) => {
      const movies: MovieResponseModel = expectedMovies;
      HttpServiceSpy.get.and.returnValue(asyncData(movies));

      service.movies('key').subscribe(
        movies => {
          expect(movies).toEqual(movies);
          expect(movies.results.length).toEqual(1);
          expect(movies.total_pages).toEqual(1);
          expect(movies.page).toEqual(1);
          expect(movies.total_results).toEqual(2);
          done();
        },
        done.fail
      );
      expect(HttpServiceSpy.get.calls.count()).toBe(1, 'one call');
    });
  })

});
