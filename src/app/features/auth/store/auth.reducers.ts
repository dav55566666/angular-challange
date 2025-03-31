import { createReducer, on } from "@ngrx/store";
import { authInitialState } from "./auth.state";
import { AuthActions } from "./auth.actions";
import { UserType } from "../interfaces";

export const authReducers = createReducer(
    authInitialState,
    on(AuthActions.registrationUser, (state, { user }) => ({
        ...state,
        ...user
    })),
    on(AuthActions.login, (state, { user }) => {
        const loginedUser: UserType | null = state.users.find(el => el.username === user.username && el.password === user.password) || null
        return {
            ...state,
            currentUser: loginedUser
        }
    }),
    on(AuthActions.logout, (state) => ({
        ...state,
        currentUser: null
    }))
)