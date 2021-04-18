import {AUTH_STATE_NAME} from '../login/state/auth.selector';
import {AuthState} from '../login/state/auth.state';
import { AuthReducer} from '../login/state/auth.reducer';
import {SHARED_STATE_NAME} from './state/shared.selector';
import {SharedState} from './state/shared.state';
import {SharedReducer} from './state/shared.reducer';


export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [AUTH_STATE_NAME]: AuthReducer,
  [SHARED_STATE_NAME]: SharedReducer,
};
