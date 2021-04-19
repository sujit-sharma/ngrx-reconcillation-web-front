import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {createEffect, ofType, Actions} from '@ngrx/effects';
import {login, loginSuccess, logout} from './auth.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {AuthService} from '../../service/auth.service';
import {Store} from '@ngrx/store';
import {setErrorMessage, setLoadingSpinner} from '../../shared/state/shared.action';
import {of} from 'rxjs';
import {AuthResponse} from '../../model/auth-response.model';

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
        map((authResponse: AuthResponse) => {
          this.store.dispatch(setLoadingSpinner({status: false}));
          this.store.dispatch(setErrorMessage({message: ''}));
          const token = authResponse.token;
          this.authService.persistToken(token);
          return loginSuccess({token, redirect: true});
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
          if (action.redirect) {
            this.router.navigate(['/']);
          }
        })
        );
    },
    {dispatch: false }
  );
  logout$ = createEffect( () => {
    return this.action$.pipe(
      ofType(logout),
      map(() => {
        this.authService.logout();
        this.router.navigate(['auth']);
      })
    );
  }, {dispatch: false});
}
