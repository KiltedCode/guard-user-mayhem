import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private authorized: boolean = false;
  private user: any = {};
  private users: any[] = [
    {
      id: 0,
      name: 'Herman',
      role: 'USER'
    },
    {
      id: 1,
      name: 'John',
      role: 'ADMIN'
    },
    {
      id: 2,
      name: 'Batman',
      role: 'SUPER_ADMIN'
    }
  ]

  constructor() { }

  hasRole(role: string): boolean {
    return this.loggedIn() && this.user.role == role;
  }

  loggedIn(): boolean {
    return this.authorized;
  }

  login(id: number): any {
    this.user = this.users[id];
    this.authorized = true;
    return this.user;
  }

  logout(): void {
    this.authorized = false;
  }

}
