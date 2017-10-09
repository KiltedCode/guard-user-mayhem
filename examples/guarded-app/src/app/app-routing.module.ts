import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttractionDetailsComponent } from './attraction-details/attraction-details.component';
import { HomeComponent } from './home/home.component';
import { ResortDetailsComponent } from './resort-details/resort-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resort/:resortId/details', component: ResortDetailsComponent },
  { path: 'attraction/:attractionId', component: AttractionDetailsComponent, outlet: 'details'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
      
  ]
})
export class AppRoutingModule { }