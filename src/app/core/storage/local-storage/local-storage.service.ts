import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getLocal <Type> (name: string): Type {
    return localStorage.getItem(name) as unknown as Type;
  }

  setLocal <Type> (name: string, data: Type) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}
