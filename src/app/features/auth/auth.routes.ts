import { Routes } from "@angular/router";
import { LoginPageComponent, RegistartionPageComponent } from "./pages";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'registration',
    component: RegistartionPageComponent,
  },
]