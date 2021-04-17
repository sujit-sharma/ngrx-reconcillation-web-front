import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './shared/app.state';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffect} from './login/state/auth.effect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument( {
          logOnly: environment.production,
        }),
        EffectsModule.forRoot([AuthEffect]),
    ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
