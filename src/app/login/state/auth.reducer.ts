import {createReducer, on} from '@ngrx/store';
import {initialState} from './auth.state';
import {login} from './auth.action';

// const _authReducer = createReducer(
//   initialState,
//   on(login, (state, action) => {
//     console.log(action);
//     return {
//       ...state,
//       jwt_token: action.jwt_token;
//     };
//   }),
// );
//
export function AuthReducer(state: any, action: any): any {
  return ;
  // return _authReducer(state, action);
}
