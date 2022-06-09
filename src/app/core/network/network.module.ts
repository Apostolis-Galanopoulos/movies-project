import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { SessionStorageService } from '../storage/session-storage/session-storage.service';
import { AuthService } from './auth/auth.service';
import { NetworkService } from './network.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
    {
      provide: APP_INITIALIZER,
      deps: [SessionStorageService, NetworkService],
      useFactory: (ss: SessionStorageService, networkService: NetworkService) => () => { ss.userSession(networkService); },
      multi: true
  },
  ]
})
export class NetworkModule { }
