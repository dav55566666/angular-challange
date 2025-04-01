import { createReducer, on, Store } from "@ngrx/store";
import { AuthActions } from "./auth.actions";
import { AuthState } from "../interfaces";

export const authReducers = (initialState: AuthState) => {
    return createReducer(
        initialState,
        on(AuthActions.registrationUser, (state, { user }) => ({
            ...state,
            ...user
        }))
    )
}