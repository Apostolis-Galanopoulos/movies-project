import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '@app/core/models/collection.model';

@Component({
  selector: 'movie-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() options: Collection[] | null = [];
  @Input() selected!: Collection | null;
  @Input() placeholder!: string;
  @Output() valueChanged: EventEmitter<Collection> = new EventEmitter();
  constructor () { }

  ngOnInit (): void {
    console.log(this.selected);
  }
  changeValue (data: {value: Collection}) {
    this.valueChanged.emit(data.value);
    console.log(data.value);
  }
}
