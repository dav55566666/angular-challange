import { Routes } from '@angular/router';
// import { AuthGuard } from './common';

export const routes: Routes = [
    {
        path: 'todos',
        loadChildren: () => import('./features').then(m => m.TodosModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'auth',
        loadChildren: () => import('./features').then(m => m.AuthModule),
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    }
];
