import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatGridListModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { RoleGuard } from './shared/role-guard.service';
import { HomeComponent } from './home/home.component';
import { ParksService } from './shared/parks.service';
import { ResortDetailsComponent } from './resort-details/resort-details.component';
import { TypeFilterPipe } from './shared/type-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResortDetailsComponent,
    TypeFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ParksService,
    RoleGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
