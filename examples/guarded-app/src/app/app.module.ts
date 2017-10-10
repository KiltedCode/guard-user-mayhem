import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatDialogModule, MatGridListModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { RoleGuard } from './shared/role-guard.service';
import { HomeComponent } from './home/home.component';
import { ParksService } from './shared/parks.service';
import { ResortDetailsComponent } from './resort-details/resort-details.component';
import { TypeFilterPipe } from './shared/type-filter.pipe';
import { AttractionDetailsComponent } from './attraction-details/attraction-details.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResortDetailsComponent,
    TypeFilterPipe,
    AttractionDetailsComponent,
    LoginDialogComponent,
    UserProfileComponent,
    ErrorComponent,
    AdminComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    AdminService,
    AuthGuard,
    AuthService,
    ParksService,
    RoleGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
