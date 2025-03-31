import { UserType } from "./user.interface";

export interface UsersState {
    users: UserType[];
    currentUser: UserType | null;
}