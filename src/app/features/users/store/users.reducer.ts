import { createReducer, on } from "@ngrx/store";
import { UsersState } from "../interfaces";
import { UsersActions } from "./users.actions";

export const usersReducers = (initialState: UsersState) => {
    return createReducer(
        initialState,
        on(UsersActions.addUser, (state, { user }) => ({
            ...state,
            ...user
        })),
    )
}