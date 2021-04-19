import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {isAuthenticated} from '../../../login/state/auth.selector';
import {logout} from '../../../login/state/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

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
}
