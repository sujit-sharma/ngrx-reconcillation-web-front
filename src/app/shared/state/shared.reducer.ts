import {initialState} from './shared.state';
import {createReducer, on} from '@ngrx/store';
import {setLoadingSpinner} from './shared.action';

// tslint:disable-next-line:variable-name
const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoadingSpinner: action.status,
    };
})
);

export function SharedReducer(state, action): any {
  return _sharedReducer(state, action);
}
