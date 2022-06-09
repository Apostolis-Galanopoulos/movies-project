import { Injectable } from '@angular/core';
import { NetworkService } from '@app/core/network/network.service';
import { SessionStorageService } from '@app/core/storage/session-storage/session-storage.service';

@Injectable()
export class RatingService {

  constructor (
    private readonly networkService: NetworkService,
    private readonly sessionStorage: SessionStorageService
  ) { }
  rate (rating: number, id: number): void {
    const body = {
      value: rating
    };
    const params = {
      guest_session_id: this.sessionStorage.getSession()
    };
    this.networkService.post(`movie/${id}/rating`, body, { params }).subscribe();
  }
}
