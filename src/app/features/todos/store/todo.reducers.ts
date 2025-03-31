import { createReducer, on } from "@ngrx/store";
import { todosInitialState } from "./todo.state";
import { TodoActions } from "./todo.actions";

export const todosReducers = createReducer(
    todosInitialState,
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