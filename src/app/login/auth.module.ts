import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'login'},
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
