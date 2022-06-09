import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NetworkService } from './network.service';


describe('NetworkService', () => {
  let service: HttpClient;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpService', ['get', 'post']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NetworkService, { provide: HttpClient, useValue: spy }]
    });
    service = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
