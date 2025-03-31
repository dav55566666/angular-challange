import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './pages/list/list.component';
import { TodosCreateComponent } from './pages';
import { AuthGuard } from '../../app-module';

const routes: Routes = [
  {
    path: 'list',
    component: TodosListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: TodosCreateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}
