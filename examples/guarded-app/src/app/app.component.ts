import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from './shared';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  user: any;
  
  constructor(
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  isAdmin(): boolean {
    return this.authService.hasRole(['ADMIN', 'SUPER_ADMIN']);
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  openLogin(): void {
    let loginDialog = this.dialog.open(LoginDialogComponent)
    loginDialog.afterClosed().subscribe(result => {
      this.user = this.authService.login(result);
    });
  }
}
