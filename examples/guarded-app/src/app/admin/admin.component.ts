import { Component, OnInit } from '@angular/core';

import { AdminService } from './admin.service';

@Component({
  selector: 'ga-admin',
  templateUrl: './admin.component.html',
  host: { 'class': 'content-wrapper' },
  styles: []
})
export class AdminComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {

  }

  resetData(): void {
    this.adminService.resetData();
    alert('Data Reset');
  }

}
