import { createFeature } from "@ngrx/store";
import { UsersState } from "../interfaces";
import { authReducers } from "./auth.reducers";

export const authInitialState: UsersState = {
    users: [
        {
            id: 1,
            username: 'joy_ember',
            password: '1223'
        }
    ],
    currentUser: null
}

export const authFeature = createFeature({
    name: 'users',
    reducer: authReducers
})