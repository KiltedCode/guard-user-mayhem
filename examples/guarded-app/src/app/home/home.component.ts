import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-home',
  templateUrl: './home.component.html',
  host: { 'class': 'content-wrapper' },
  styles: []
})
export class HomeComponent implements OnInit {

  resorts: any[];

  constructor() { }

  ngOnInit() {
    this.resorts = [
      {
        name: 'Walt Disney World',
        id: 'wdw',
        color: '#8bbedd'
      },
      { 
        name: 'Universal Orlando',
        id: 'universal',
        color: '#FF8C00'
      },
      { 
        name: 'LEGOLAND Florida Resort',
        id: 'legoland',
        color: '#FFE330'
      }
    ]
  }

}
