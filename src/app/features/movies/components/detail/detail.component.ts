import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { MovieModel } from '../../models/movie-model';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [RatingService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  movie$: Observable<MovieModel> = new Observable();
  movieId: number = 0;
  constructor (
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly ratingService: RatingService
  ) { }

  ngOnInit (): void {
    this.movie$ = this.activatedRoute.data.pipe(
      map((data) => {
        this.movieId = data.dataResolver.id;
        return data.dataResolver;
      })
    ) as Observable<MovieModel>;
  }

  goBack () {
    // tslint:disable-next-line: no-floating-promises
    this.router.navigate(['/movie/search']).then(() => { });
  }
  userRating (rating: number) {
    console.log('this.movieId: ', this.movieId);
    console.log('rating: ', rating);
    this.ratingService.rate(rating, this.movieId);
  }

}
