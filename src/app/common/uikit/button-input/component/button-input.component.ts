import { Component, Input } from '@angular/core';
import { ButtonInputProps } from '../interfaces/button-input-props.interface';

@Component({
  selector: 'app-button-input',
  standalone: false,
  templateUrl: './button-input.component.html',
  styleUrl: './button-input.component.scss'
})
export class ButtonInputComponent {
  @Input() buttonInputProps!: ButtonInputProps
}
