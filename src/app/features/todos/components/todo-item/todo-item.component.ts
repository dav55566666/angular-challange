import { Component, Input } from '@angular/core';
import { TodoItemType } from '../../interfaces';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todoItemProps!: TodoItemType;
}
