import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'movie-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  value = 0;
  @Input() set rating (val: number | undefined) {
    if (val) {
      this.value = (val * 10);
    }
  }
}
