import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {isAuthenticated} from '../../../login/state/auth.selector';
import {logout} from '../../../login/state/auth.action';
import {AuthResponse} from '../../../model/auth-response.model';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: Observable<boolean>;
  constructor(private store: Store<AppState>,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
    this.store.select(isAuthenticated).subscribe((data => {
      console.log('isAuthenticated at header-component' + data);
    }));
  }

  onLogout(event: Event): void {
    event.preventDefault();
    this.store.dispatch(logout());
  }

  randomHit(): void {
    console.log('sending random http request');
    this.http.get(
      `${environment.baseURL}/api/user/random`
    ).subscribe((data) => {
      console.log('111111111111' + data);
    });
  }
}
