import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
 
import { ParksService } from './parks.service';

 
@Injectable()
export class ResortResolverService implements Resolve<string> {
  constructor(
    private parksService: ParksService, 
    private router: Router
  ) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    let id = route.paramMap.get('resortId');
 
    return this.parksService.getResortName(id).take(1).map(resortName => {
      if (resortName) {
        return resortName;
      } else {
        this.router.navigate(['/error'], { queryParams: { code: 'NOT_FOUND_RESORT' }});
        return null;
      }
    });
  }
}