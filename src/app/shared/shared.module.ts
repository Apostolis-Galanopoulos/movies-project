import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { ELEMENTS } from './elements';

@NgModule({
  declarations: [
    ...ELEMENTS
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    PaginatorModule,
    ButtonModule,
    ProgressBarModule,
    InputTextareaModule,
    SliderModule,
    DropdownModule,
    InputTextModule,
  ],
  exports: [
    ...ELEMENTS
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class SharedModule { }
