import { createActionGroup, props } from '@ngrx/store';
import { TodoItemType } from '../interfaces';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'addTodo': props<{ todo: TodoItemType }>(),
    'removeTodo': props<{ id: number }>(),
    'toggleTodo':  props<{ id: number }>()
  }
});