import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.hasRole(route.data['roles'])) {
      return true;
    } else {
      this.router.navigate(['/error'], { queryParams: { code: 'NOT_AUTHORIZED' }});
      return false;
    }
  }

}
