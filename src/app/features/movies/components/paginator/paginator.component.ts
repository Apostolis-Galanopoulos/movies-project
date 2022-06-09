import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventModel } from './event.model';

@Component({
  selector: 'movie-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() set totalRecords (val: number | undefined) {
    this.total = val ? val : 0;
  }
  @Output() rowsChanged: EventEmitter<number> = new EventEmitter();

  total: number = 0;

  pageChange (event: EventModel): void {
    this.rowsChanged.emit(event.page + 1);
  }
}
