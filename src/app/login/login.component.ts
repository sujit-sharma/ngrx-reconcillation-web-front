import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {login} from './state/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;

  constructor(private store: Store<any> ){ }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin(): void {
    console.log('Login submitted');
    const username = this.loginForm.value.username;
    const password  = this.loginForm.value.password;
    this.store.dispatch(login({username, password}));
  }
}
