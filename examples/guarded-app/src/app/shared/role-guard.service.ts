import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuard implements CanActivate, CanLoad {

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

  canLoad(route: Route): boolean {
    let roles = route.data['roles'];
    if(this.authService.hasRole(roles)) {
      return true;
    } else {
      let code = roles.length == 1 && roles[0] == 'SUPER_ADMIN' ? 'NOT_SUPER' : 'NOT_AUTHORIZED';
      this.router.navigate(['/error'], { queryParams: { code: code }});
      return false;
    }
  }

}
