import {createAction, props} from '@ngrx/store';
import {AuthResponse} from '../../model/auth-response.model';

export const LOGIN_ACTION = '[login page] login start';
export const LOGIN_SUCCESS = '[login page] login success';
export const AUTO_LOGIN_ACTION = '[login page] auto login';
export const LOGOUT_ACTION = '[auth page] logout';

export const login = createAction(LOGIN_ACTION, props<{username: string, password: string}>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{token: string; redirect: boolean }>());
export const autoLogin = createAction(AUTO_LOGIN_ACTION);

export const logout = createAction(LOGOUT_ACTION);
