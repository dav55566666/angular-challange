import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-form',
  template: `<form><ng-content></ng-content></form>`,
})
export class FormComponent {
}
