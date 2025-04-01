import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoFeature } from '../../store';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TodosListComponent {
  todos$ = todoFeature.selectTodos;
}
