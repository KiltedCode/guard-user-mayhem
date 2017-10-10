import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperComponent } from './super/super.component';
import { SuperAdminRoutingModule } from './super-admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ],
  declarations: [
    SuperComponent
  ]
})
export class SuperAdminModule { }
