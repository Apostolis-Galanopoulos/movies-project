import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CollectionsService } from '@app/core/collections/collections.service';
import { Collection } from '@app/core/models/collection.model';
import { of } from 'rxjs';
import { MovieModel } from '../../models/movie-model';
import { CardComponent } from './card.component';


const card: MovieModel = {"adult":false,"backdrop_path":"/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg","budget":25000000,"id":278,"original_language":"en","original_title":"The Shawshank Redemption","overview":"Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.","popularity":57.466,"poster_path":"/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg","release_date":"1994-09-23","revenue":28341469,"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","title":"The Shawshank Redemption","video":false,"vote_average":8.7,"vote_count":21554, "genre_ids":[]};
const collected: Collection = {
  title: 'My Collection',
  id: '123',
  description: 'My Collection',
  movies: [card]
}
describe('CardComponent', () => {
  let collectionServiceStub: Partial<CollectionsService> = {
    getCollection: () => of(collected),
    getCollections: () => of([collected]),
  }
  // let httpTestingController: HttpTestingController;
  let component: CardComponent;
  let fixture :  ComponentFixture<CardComponent>;;
  // let collectionServiceSpy: jasmine.SpyObj<CollectionsService>;

  beforeEach(async () => {
    // const spy = jasmine.createSpyObj('CollectionsService', ['getCollection', 'getCollections']);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CardComponent
      ],
      providers: [{ provide: CollectionsService, useValue: collectionServiceStub }],
    }).compileComponents();
    // httpTestingController = TestBed.inject(HttpTestingController);
    // collectionServiceSpy = TestBed.inject(CollectionsService) as jasmine.SpyObj<CollectionsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.collected = collected;
    component.card = card;
    fixture.detectChanges();
  })


  it('should create the card', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title of movie', () => {
    const compiled: HTMLElement = fixture.nativeElement as HTMLElement
    const element = compiled.querySelector('.card .title h2') as HTMLElement;
    expect(element?.textContent).toContain('The Shawshank Redemption');
  });

  it('should render poster image', () => {
    const compiled: HTMLImageElement = fixture.nativeElement as HTMLImageElement
    const element = compiled.querySelector('.card .poster img') as HTMLImageElement;
    expect(element?.src).toEqual('http://localhost:9876/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg');
  });

  it('should render poster alt attr', () => {
    const compiled: HTMLImageElement = fixture.debugElement.nativeElement as HTMLImageElement
    const element = compiled.querySelector('.card .poster img') as HTMLImageElement;
    expect(element?.alt).toEqual('The Shawshank Redemption');
  });
  it('should render the movie-rating', () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement as HTMLElement
    const element = compiled.querySelector('movie-rating') as HTMLElement;
    expect(element).toBeTruthy();
  });
    it('should render the movie-drop-down', () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement as HTMLElement
    const element = compiled.querySelector('movie-drop-down') as HTMLElement;
    expect(element).toBeTruthy();
  });
});
