import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


export interface CanComponentDeactivate {
  confirm(): boolean;
}

@Injectable()
export class AuthGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate): boolean {

    if (component.confirm()) {
      return true;
    }
  }
}
