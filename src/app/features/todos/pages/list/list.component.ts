import { Component, inject } from '@angular/core';
import { Selector, Store } from '@ngrx/store';
import { selectTodosAll } from '../../store/todo.selector';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TodosListComponent {
  private store = inject(Store)
  todos = this.store.select(selectTodosAll);
}
