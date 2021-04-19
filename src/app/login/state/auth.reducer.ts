import {createReducer, on} from '@ngrx/store';
import {initialState} from './auth.state';
import {login, loginSuccess, logout} from './auth.action';


// tslint:disable-next-line:variable-name
const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log(action);
    return {
      ...state,
      token: action.token,
      redirect: action.redirect,
    };
}),
  on(logout, (state) => {
    return {
      ...state,
      token: ''
    };
  })
);

export function AuthReducer(state, action): any {
  return _authReducer(state, action);
}
