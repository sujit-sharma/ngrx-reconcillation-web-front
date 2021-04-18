import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {createEffect, ofType, Actions} from '@ngrx/effects';
import {login, loginSuccess} from './auth.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {AuthService} from '../../service/auth.service';
import {Store} from '@ngrx/store';
import {setErrorMessage, setLoadingSpinner} from '../../shared/state/shared.action';
import {of} from 'rxjs';

@Injectable()
export class AuthEffect {
  constructor(private action$: Actions,
              private router: Router,
              private authService: AuthService,
              private store: Store,
  ) {}
  // @ts-ignore
  login$ = createEffect(() => {
  console.log('login effects start');
  return this.action$.pipe(ofType(login), mergeMap((acts) => {
    return this.authService.login(acts.username, acts.password)
      .pipe(
        map((data) => {
          this.store.dispatch(setLoadingSpinner({status: false}));
          this.store.dispatch(setErrorMessage({message: ''}));
          this.authService.persistToken(data.token);
          return loginSuccess(data);
        }),
        catchError((err => {
          this.store.dispatch(setLoadingSpinner({ status: false }));
          console.log('catch block ');
          console.log(err.error.message);
          const errorMessage = this.authService.getErrorMeassage(err.error.message);
          return of(setErrorMessage({message: errorMessage}));
        }))
      );
  })
  );
});
  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(loginSuccess),
        tap(( action ) => {
          this.store.dispatch(setErrorMessage({message: ''}));
          this.router.navigate(['/']);
        })
        );
    },
    {dispatch: false }
  );
}
