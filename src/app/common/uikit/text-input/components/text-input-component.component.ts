import { Component, Input } from '@angular/core';
import { TextInputProps } from '../interfaces/text-input-props.interface';

@Component({
  selector: 'app-text-input',
  standalone: false,
  templateUrl: './text-input-component.component.html',
  styleUrl: './text-input-component.component.scss'
})
export class TextInputComponent {
  @Input() textInputProps!: TextInputProps;
}
