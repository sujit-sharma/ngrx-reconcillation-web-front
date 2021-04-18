import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './shared/app.state';
import {getLoading} from './shared/state/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-reconciliation-web-front';
  showLoading: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    // console.log(this.showLoading.subscribe());
  }
}
