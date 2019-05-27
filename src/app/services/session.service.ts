import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  loggedIn: boolean;

  constructor() { }

  createSession(): void {
    this.loggedIn = true;
  }

  removeSession(): void {
    this.loggedIn = false;
  }
}
