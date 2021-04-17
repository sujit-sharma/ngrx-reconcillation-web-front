
export interface AuthState {
  jwt_token: string;
}
export const initialState: AuthState = {
  jwt_token: '',
};
