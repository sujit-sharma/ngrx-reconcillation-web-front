import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {createEffect, ofType, Actions} from '@ngrx/effects';
import {login, loginSuccess} from './auth.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AuthService} from '../../service/auth.service';

@Injectable()
export class AuthEffect {
  constructor(private action$: Actions,
              private router: Router,
              private authService: AuthService
  ) {}
  login$ = createEffect(() => {
  console.log('login effects start');
  return this.action$.pipe(ofType(login), mergeMap((acts) => {
    return this.authService.login(acts.username, acts.password)
      .pipe(
        map((data) => {
          console.log('login service returned');
          return loginSuccess(data);
        }),
      );
  })
  );
});


}
