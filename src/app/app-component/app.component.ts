import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreRootModule } from '@ngrx/store';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: `./app-component.html`,
  styleUrl: './app-component.scss',
  providers: [StoreRootModule]
})

export class AppComponent {
  title = 'angular-challange';
}
