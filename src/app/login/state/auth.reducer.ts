import {createReducer, on} from '@ngrx/store';
import {initialState} from './auth.state';
import {login, loginSuccess} from './auth.action';


// tslint:disable-next-line:variable-name
const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log(action);
    return {
      ...state,
      authResponse: action.authResponse,
      redirect: action.redirect,
    };
})
);

export function AuthReducer(state, action): any {
  return _authReducer(state, action);
}
