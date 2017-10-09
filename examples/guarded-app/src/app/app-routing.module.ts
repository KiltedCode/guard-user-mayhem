import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth-guard.service';
import { AttractionDetailsComponent } from './attraction-details/attraction-details.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ResortDetailsComponent } from './resort-details/resort-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent},
  { path: 'home', component: HomeComponent },
  { 
    path: 'resort/:resortId/details', component: ResortDetailsComponent 
  },
  { path: 'attraction/:attractionId', component: AttractionDetailsComponent, outlet: 'details'},
  { path: 'user', component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
      
  ]
})
export class AppRoutingModule { }