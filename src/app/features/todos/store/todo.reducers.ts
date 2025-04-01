import { createReducer, on } from "@ngrx/store";
import { TodoActions } from "./todo.actions";
import { ToDoState } from "../interfaces";

export const todosReducers = (initialState: ToDoState) => {
    return createReducer(
        initialState,
        on(TodoActions.addTodo, (state, { todo }) => ({
            ...state,
            ...todo
        })),
        on(TodoActions.removeTodo, (state, { id }) => ({
            ...state,
            todos: state.todos.filter(t => t.id !== id)
        })),
        on(TodoActions.toggleTodo, (state, { id }) => ({
            ...state,
            todos: state.todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        }))
    )
}