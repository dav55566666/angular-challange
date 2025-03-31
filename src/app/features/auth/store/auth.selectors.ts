import { createSelector } from "@ngrx/store";
import { authFeature } from "./auth.state";

export const selectCurrentUser = createSelector(
    authFeature.selectCurrentUser,
    (currentUser) => currentUser
)

export const selectUsers = createSelector(
    authFeature.selectUsers,
    (users) => users
)