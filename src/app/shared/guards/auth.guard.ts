import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


export interface CanComponentDeactivate {
  confirm(): boolean;
}

@Injectable()
export class AuthGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (component.confirm()) {
      return true;
    }
  }
}
