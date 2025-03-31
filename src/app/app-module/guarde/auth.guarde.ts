import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { inject } from '@angular/core';
import { selectCurrentUser } from '../../features';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private store = inject(Store);
  private router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.store.select(selectCurrentUser).pipe(
      map(userFromState => {
        const userFromSession = sessionStorage.getItem('user');

        const isAuthenticated = !!userFromState || !!userFromSession;

        const allowedRoutes = ['auth/login', 'auth/registration'];

        const tryingToAccess = state.url.replace(/^\//, '');

        if (!isAuthenticated && !allowedRoutes.includes(tryingToAccess)) {
          return this.router.createUrlTree(['/auth/login']);
        }

        return true;
      })
    );
  }
}
