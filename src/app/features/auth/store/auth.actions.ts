import { createActionGroup, props } from '@ngrx/store';
import { UserType } from '../../users';

export const AuthActions = createActionGroup({
  source: 'auth',
  events: {
    'registrationUser': props<{ user: UserType }>(),
    'logout': props<{ user: UserType }>(),
    'login':  props<{ login: string, password: string }>()
  }
});