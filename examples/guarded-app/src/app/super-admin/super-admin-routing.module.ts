import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperComponent } from './super/super.component';
import { RoleGuard } from '../shared/role-guard.service';

const routes: Routes = [
  { path: '', component: SuperComponent, canActivate: [RoleGuard], data: { roles: ['SUPER_ADMIN'] } },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [
    RoleGuard
  ]
})
export class SuperAdminRoutingModule { }