import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../app.state';
import {AUTH_STATE_NAME} from '../../login/state/auth.selector';
import {SharedState} from './shared.state';

export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state: SharedState) => {
  return state.showLoadingSpinner;
});
