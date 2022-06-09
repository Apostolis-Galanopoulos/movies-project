import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'movie-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() clicked: EventEmitter<string> = new EventEmitter();
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  constructor () { }

  ngOnInit (): void {
  }
  clickEvent () {
    this.clicked.emit();
  }

}
