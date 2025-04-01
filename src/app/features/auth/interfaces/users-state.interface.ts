import { UserType } from "../../users/interfaces/user.interface";

export interface AuthState {
    currentUser: UserType | null;
}