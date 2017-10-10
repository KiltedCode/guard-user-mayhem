import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { AuthService, ConfirmationSaveComponent, ParkAttraction, ParksService } from '../shared/';

@Component({
  selector: 'ga-resort-details',
  templateUrl: './resort-details.component.html',
  host: { 'class': 'content-wrapper' },
  styles: []
})
export class ResortDetailsComponent implements OnInit {

  attractions: ParkAttraction[];
  edited: boolean;
  filters: string[];
  parks$: Observable<any[]>;
  resortId: string;
  resortName: string;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private parksService: ParksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.edited = false;
    this.filters = [];

    this.route.params.subscribe((params: Params) => {
      this.resortId = params['resortId'];

      this.resortName = this.parksService.getResortName(this.resortId);

      /* get parks for grid */
      this.getResortDetails();

      /* get attractions list */
      this.getResortAttractions();

    });
  }

  cancel(): void {
    this.edited = false;
    this.getResortAttractions();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(!this.edited) {
      return true;
    } else {
      let confirmDialog = this.dialog.open(ConfirmationSaveComponent);
      return confirmDialog.afterClosed();
    }
  }

  filterType(type: string): void {
    let i = this.filters.indexOf(type);
    if(i == -1) {
      this.filters = this.filters.concat(type);
    } else {
      this.filters = [ ...this.filters.slice(0, i), ...this.filters.slice(i + 1) ];
    }
  }

  private getResortAttractions(): void {
    this.parksService.getResortAttractions(this.resortId)
      .subscribe(
        (attrs: ParkAttraction[]) => {
          this.attractions = attrs;
        }
      );
  }

  private getResortDetails(): void {
    this.parks$ = this.parksService.getResortDetails(this.resortId);
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  save(): void {
    this.edited = false;
    this.parksService.saveResortAttractions(this.resortId, this.attractions);
  }
}
