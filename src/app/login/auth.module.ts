import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';

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
    EffectsModule.forFeature(),
    FormsModule
  ],
})
export class AuthModule {}
