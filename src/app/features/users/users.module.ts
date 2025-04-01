import { NgModule } from "@angular/core";
import { usersFeature } from "./store";
import { StoreModule } from "@ngrx/store";

@NgModule({
    imports: [StoreModule.forFeature(usersFeature.name, usersFeature.reducer)],
    exports: [],
    providers: [],
    declarations: [],
})

export class UsersModule {}