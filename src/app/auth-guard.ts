import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const user = localStorage.getItem('user');

  if (user) {
    return true;
  }

  return inject(Router).createUrlTree(['/login']);
};
/*import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};*/
