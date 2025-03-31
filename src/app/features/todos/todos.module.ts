import { NgModule } from "@angular/core";
import { TodoItemComponent } from "./components";
import { TodosListComponent } from "./pages";

@NgModule({
    imports: [],
    exports: [TodoItemComponent, TodosListComponent],
    declarations: [TodoItemComponent, TodosListComponent]
})

export class TodosModule {}