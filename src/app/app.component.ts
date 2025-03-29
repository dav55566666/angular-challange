import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<app-root><router-outlet></router-outlet></app-root>`,
})
export class AppComponent {
  title = 'angular-challange';
}
