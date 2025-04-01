import { Routes } from "@angular/router";
import { TodosCreateComponent, TodosListComponent } from "./pages";

export const routes: Routes = [
    {
        path: 'list',
        component: TodosListComponent,
    },
    {
        path: 'create',
        component: TodosCreateComponent
    }
];