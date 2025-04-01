import { createFeature, on } from "@ngrx/store";
import { UsersState } from "../interfaces";
import { usersReducers } from "./users.reducer";

const intitialState: UsersState = {
    users: []
} 

export const usersFeature = createFeature({
    name: 'users',
    reducer: usersReducers(intitialState)
})
