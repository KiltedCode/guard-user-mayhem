import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private authorized: boolean = false;
  private user: any = {
    name: 'John',
    role: 'ADMIN'
  };

  constructor() { }

  hasRole(role: string): boolean {
    return this.loggedIn() && this.user.role == role;
  }

  loggedIn(): boolean {
    return this.authorized;
  }

  login(): void {
    this.authorized = true;
  }

  logout(): void {
    this.authorized = false;
  }

}
