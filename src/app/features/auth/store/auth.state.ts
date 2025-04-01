import { createFeature } from "@ngrx/store";
import { AuthState } from "../interfaces";
import { authReducers } from "./auth.reducers";

export const authInitialState: AuthState = {
    currentUser: null
}

export const authFeature = createFeature({
    name: 'auth',
    reducer: authReducers(authInitialState)
})