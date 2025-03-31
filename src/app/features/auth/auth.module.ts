import { NgModule } from "@angular/core";
import { FormModule, TextInputModule } from "../../common";
import { ButtonInputModule } from "../../common/uikit/button-input/button-input.module";
import { LoginPageComponent, RegistartionPageComponent } from "./pages";

@NgModule({
    imports: [FormModule, TextInputModule, ButtonInputModule],
    exports: [LoginPageComponent, RegistartionPageComponent],
    declarations: [LoginPageComponent, RegistartionPageComponent]
})

export class AuthModule {}