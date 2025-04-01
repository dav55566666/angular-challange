import { NgModule } from "@angular/core";
import { LoginPageComponent, RegistartionPageComponent } from "./pages";
import { UsersModule } from "../users";
import { StoreModule, StoreRootModule } from "@ngrx/store";
import { authFeature } from "./store";
import { provideRouter } from "@angular/router";
import { routes } from "./auth.routes";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [
        UsersModule, 
        StoreModule.forFeature(authFeature.name, authFeature.reducer), 
        ReactiveFormsModule
    ],
    exports: [LoginPageComponent, RegistartionPageComponent],
    declarations: [LoginPageComponent, RegistartionPageComponent],
    providers: [StoreRootModule, provideRouter(routes)],
})

export class AuthModule {}