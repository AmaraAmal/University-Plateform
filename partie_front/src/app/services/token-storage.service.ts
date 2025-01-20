import { Injectable } from '@angular/core';
import { first } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }
  
  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public saveRole(role: string): void {
    window.localStorage.setItem('role', role);
  }

  public getRole(): string | null {
    return window.localStorage.getItem('role');
  }

  public saveId(id: string): void {
    window.localStorage.setItem('userId', id);
  }

  public getId(): string | null {
    return window.localStorage.getItem('userId');
  }

  public saveFirstName(firstName: string): void {
    window.localStorage.setItem('firstName', firstName);
  }

  public getFirstName(): string | null {
    return window.localStorage.getItem('firstName');
  }

  public saveLastName(lastName: string): void {
    window.localStorage.setItem('lastName', lastName);
  }

  public getLastName(): string | null {
    return window.localStorage.getItem('lastName');
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
