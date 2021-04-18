import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {createEffect, ofType, Actions} from '@ngrx/effects';
import {login, loginSuccess} from './auth.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AuthService} from '../../service/auth.service';
import {Store} from '@ngrx/store';
import {setLoadingSpinner} from '../../shared/state/shared.action';

@Injectable()
export class AuthEffect {
  constructor(private action$: Actions,
              private router: Router,
              private authService: AuthService,
              private store: Store,
  ) {}
  login$ = createEffect(() => {
  console.log('login effects start');
  return this.action$.pipe(ofType(login), mergeMap((acts) => {
    return this.authService.login(acts.username, acts.password)
      .pipe(
        map((data) => {
          this.store.dispatch(setLoadingSpinner({status: false}));
          this.authService.persistToken(data.token);
          return loginSuccess(data);
        }),
      );
  })
  );
});


}
