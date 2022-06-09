import { forwardRef, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'movie-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() formControlName!: string;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  control!: AbstractControl;
  constructor (
    private readonly controlContainer: ControlContainer
  ) { }
  writeValue (): void {
  }
  registerOnChange (): void {
  }
  registerOnTouched (): void {
  }
  ngOnInit (): void { }

  get formControl (): FormControl {
    return  this.control = this.controlContainer.control!!.get(this.formControlName) as FormControl;
 }

}
