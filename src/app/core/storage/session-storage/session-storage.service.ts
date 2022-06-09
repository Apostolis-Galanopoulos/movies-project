import { Injectable } from '@angular/core';
import { NetworkService } from '../../network/network.service';
import { SessionModel } from './session-model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor () { }

  getSession (): string {
    return sessionStorage.getItem('userSession') as string;
  }

  setSession (userSession: string): void {
    sessionStorage.setItem('userSession', userSession);
  }

  userSession (networkService: NetworkService) {
    networkService.get<SessionModel>('authentication/guest_session/new').subscribe((data: SessionModel) => {
      this.setSession(data.guest_session_id);
    });
  }
}
