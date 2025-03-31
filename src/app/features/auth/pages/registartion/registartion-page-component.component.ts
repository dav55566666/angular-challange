import { Component } from '@angular/core';
import { ButtonInputProps, ButtonInputType, TextInputProps, TextInputTypes } from '../../../../common';

@Component({
  selector: 'registartion-page-component',
  standalone: false,
  templateUrl: './registartion-page-component.component.html',
  styleUrl: './registartion-page-component.component.scss'
})

export class RegistartionPageComponent {
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
    },
    {
      type: TextInputTypes.PASSWORD,
      inputId: 'passwordConfirme',
      name: 'passwordConfirme',
      onChange: (event: Event) => {},
      placeholder: 'Password Confirmation',
      title: "Password Confirmation",
    }
  ];
  inputButton: ButtonInputProps = {
    type: ButtonInputType.SUBMIT,
    inputId: 'login-button',
    name: 'login-button',
    click: (event: Event) => {},
    value: 'Registration',
  };
};
