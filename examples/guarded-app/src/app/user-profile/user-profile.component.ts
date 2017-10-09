import { Component, OnInit } from '@angular/core';

import { AuthService, User } from '../shared/';

@Component({
  selector: 'ga-user-profile',
  templateUrl: './user-profile.component.html',
  host: { 'class': 'content-wrapper' },
  styles: []
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.currentUser();
  }

}
