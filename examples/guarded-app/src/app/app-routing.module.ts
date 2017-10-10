import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AttractionDetailsComponent } from './attraction-details/attraction-details.component';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ResortDetailsComponent } from './resort-details/resort-details.component';
import { RoleGuard } from './shared/role-guard.service';
import { SitemapComponent } from './sitemap/sitemap.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [RoleGuard], 
    data: { roles: ['ADMIN', 'SUPER_ADMIN'] } 
  },
  { path: 'error', component: ErrorComponent},
  { path: 'home', component: HomeComponent },
  { 
    path: 'resort/:resortId/details', 
    component: ResortDetailsComponent,
    canDeactivate: [ CanDeactivateGuard ]
  },
  { path: 'sitemap', component: SitemapComponent },
  { 
    path: 'super', 
    loadChildren: 'app/super-admin/super-admin.module#SuperAdminModule', 
    canLoad: [RoleGuard], 
    data: { roles: ['SUPER_ADMIN'] } 
  },
  { 
    path: 'user', 
    component: UserProfileComponent, 
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule { }