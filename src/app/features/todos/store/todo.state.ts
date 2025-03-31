import { createFeature } from "@ngrx/store";
import { ToDoState } from "../interfaces";
import { todosReducers } from "./todo.reducers";

export const todosInitialState: ToDoState = {
    todos: [
        {
            id: 1,
            task: 'Test Task',
            date: new Date(),
            deadLine: new Date('2025-04-15T18:00:00'),
            subTastks: [
                { id: 1, task: 'Test Task' },
            ],
            completed: false
        },
        {
            id: 2,
            task: 'Test Task2',
            date: new Date(),
            deadLine: new Date('2025-04-15T18:00:00'),
            subTastks: null,
            completed: false
        }
    ]
}

export const todoFeature = createFeature({
    name: 'todos',
    reducer: todosReducers,
})