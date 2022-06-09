import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NetworkModule } from './network/network.module';

@NgModule({
  declarations: [],
  imports: [
    NetworkModule,
    CommonModule
  ]
})
export class CoreModule { }
