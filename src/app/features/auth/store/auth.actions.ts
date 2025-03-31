import { createActionGroup, props } from '@ngrx/store';
import { UserType } from '../interfaces';

export const AuthActions = createActionGroup({
  source: 'Todo',
  events: {
    'registrationUser': props<{ user: UserType }>(),
    'logout': props<{ user: UserType }>(),
    'login':  props<{ user: UserType }>()
  }
});