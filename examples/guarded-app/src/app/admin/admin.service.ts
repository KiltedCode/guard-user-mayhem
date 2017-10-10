import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

  constructor() { }

  resetData(): void {
    localStorage.clear();
  }

}
