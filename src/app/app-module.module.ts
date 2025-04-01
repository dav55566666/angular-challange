import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app-component';
import { routes } from './app.routes';
import { authFeature, todoFeature } from './features';
import { AuthGuard } from './common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(),
    StoreModule.forFeature(authFeature.name, authFeature.reducer),
    StoreModule.forFeature(todoFeature.name, todoFeature.reducer),
  ],
  providers: [AuthGuard],
})
export class AppModule {}
