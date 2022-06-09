import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { MOVIES_DECLARATIONS, PROVIDERS } from './index';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    ...MOVIES_DECLARATIONS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    SharedModule
  ],
  providers: [...PROVIDERS]
})
export class MoviesModule { }
