import { createActionGroup, props } from '@ngrx/store';
import { UserType } from '../interfaces';

export const UsersActions = createActionGroup({
  source: 'users',
  events: {
    'addUser': props<{ user: UserType }>(),
  }
});