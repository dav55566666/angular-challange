import { NgModule } from "@angular/core";
import { TodoItemComponent } from "./components";
import { TodosListComponent } from "./pages";
import { StoreRootModule } from "@ngrx/store";
import { routes } from "./todos.routes";
import { provideRouter } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [ReactiveFormsModule],
    exports: [TodoItemComponent, TodosListComponent],
    declarations: [TodoItemComponent, TodosListComponent],
    providers: [StoreRootModule, provideRouter(routes)]
})

export class TodosModule {}