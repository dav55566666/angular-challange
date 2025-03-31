import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { todoFeature } from "../features";
import { AuthGuard } from "./guarde";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./component";
import { RouterOutlet } from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(todoFeature.name, todoFeature.reducer),
        RouterOutlet
    ],
    exports: [AppComponent],
    declarations: [AppComponent],
    providers: [AuthGuard]
})

export class AppModule {}