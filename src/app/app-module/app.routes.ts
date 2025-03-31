import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'todo',
        loadChildren: () => import('../features/todos/todos.module').then(m => m.TodosModule)
    },
];
