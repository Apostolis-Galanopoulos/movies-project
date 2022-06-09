import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormService {

  constructor (
    private readonly fb: FormBuilder
  ) { }

  buildForm (): FormGroup {
    return this.fb.group(
      {
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
      });
  }
}
