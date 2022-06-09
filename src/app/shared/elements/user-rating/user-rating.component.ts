import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'movie-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.scss']
})
export class UserRatingComponent implements OnInit, OnDestroy {

  MIN = .5;
  MAX = 10;
  STEP = .5;
  @Input() rating: number = 0;
  @Output() rated: EventEmitter<number> = new EventEmitter();

  private destroy$ = new Subject<void>();

  rate: FormControl = new FormControl();
  ngOnInit (): void {
    this.rate.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500))
      .subscribe((value: number) => {
        console.log(value);
        this.rated.emit(value);
      });
  }
  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
