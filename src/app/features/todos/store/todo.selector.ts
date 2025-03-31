import { createSelector } from "@ngrx/store";
import { todoFeature } from "./todo.state";

export const selectTodosAll = createSelector(
    todoFeature.selectTodos,
    (todos) => todos
)