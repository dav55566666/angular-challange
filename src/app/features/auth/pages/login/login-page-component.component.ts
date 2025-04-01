import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthActions } from '../../store';

@Component({
  selector: 'login-page-component',
  templateUrl: './login-page-component.component.html',
  standalone: false,
  styleUrl: './login-page-component.component.scss'
})

export class LoginPageComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.form = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    
    if (this.form.valid) {
      this.store.dispatch(AuthActions.login({
        login: this.form.value.email,
        password: this.form.value.password,
      }));
      console.log(this.form.value);
    }
  }
}
