import {AUTH_STATE_NAME} from '../login/state/auth.selector';
import {AuthState} from '../login/state/auth.state';
import { AuthReducer} from '../login/state/auth.reducer';


export interface AppState {
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [AUTH_STATE_NAME]: AuthReducer
};
