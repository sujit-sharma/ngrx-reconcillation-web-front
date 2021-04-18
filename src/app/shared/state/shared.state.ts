export interface SharedState {
  showLoadingSpinner: boolean;
  errorMessage: string;
}

export const initialState: SharedState = {
  showLoadingSpinner: false,
  errorMessage: '',
};
