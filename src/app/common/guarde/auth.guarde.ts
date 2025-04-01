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
import { selectCurrentUser } from '../../features/auth/store/auth.selector';

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
        const userFromSession = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
        const isAuthenticated = !!userFromState || !!userFromSession;

        const allowedRoutes = ['auth/login', 'auth/registration'];
        const url = state.url.replace(/^\//, '');
        const isAllowed = allowedRoutes.some(route => url.startsWith(route));

        if (!isAuthenticated && !isAllowed) {
          return false;
        }
        return true;
      })
    );
  }
}

