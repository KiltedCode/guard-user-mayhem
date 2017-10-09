import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ga-error',
  templateUrl: './error.component.html',
  host: { 'class': 'content-wrapper' },
  styles: []
})
export class ErrorComponent implements OnInit {
  
  errorCode: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.errorCode = this.route.snapshot.queryParams['code'] || '';
  }

}
