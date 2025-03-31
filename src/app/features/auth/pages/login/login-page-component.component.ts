import { Component } from '@angular/core';
import { TextInputProps, TextInputTypes, ButtonInputProps, ButtonInputType} from '../../../../common';

@Component({
  selector: 'login-page-component',
  templateUrl: './login-page-component.component.html',
  standalone: false,
  styleUrl: './login-page-component.component.scss'
})

export class LoginPageComponent {
  inputs: TextInputProps[] = [
    {
      type: TextInputTypes.EMAIL,
      inputId: 'email',
      name: 'email',
      onChange: (event: Event) => {},
      placeholder: 'Email',
      title: "Email",
    },
    {
      type: TextInputTypes.PASSWORD,
      inputId: 'password',
      name: 'password',
      onChange: (event: Event) => {},
      placeholder: 'Password',
      title: "Password",
    }
  ];
  inputButton: ButtonInputProps = {
    type: ButtonInputType.SUBMIT,
    inputId: 'login-button',
    name: 'login-button',
    click: (event: Event) => {},
    value: 'Login',
  };
};
