import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AuthResponse} from '../model/auth-response.model';
import {environment} from '../../environments/environment';
import {AppState} from '../shared/app.state';

import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private http: HttpClient,
              private store: Store<AppState>
  ) {}
  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(
      `${environment.baseURL}/api/user/login?username=${username}&password=${password}`
    );
  }

  persistToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    const isValidToken  = this.isTokenValid();
    return isValidToken;
  }

  private isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: object = this.jwtDecode(token);
      const expiryTime: number = this.getTokenExpireTime(decodedToken);
      return ((1000 * expiryTime) - (new Date()).getTime()) > 5000;
    }
    console.log('token does not exist');
    return false;
  }

  private getTokenExpireTime(decodedToken: object): number {
    // @ts-ignore
    return decodedToken.exp;
  }

  private jwtDecode(token: string): object {
    return jwt_decode(token);


  }

  getErrorMeassage(message: string): string {
    switch (message) {
      case 'Login successful':
        return 'Successfully Login';
      case 'Invalid username or password':
        return 'Password or username is incorrect';
      default:
        return 'An error occurs while processing login';
    }
  }

  formatLoginResponse(data: AuthResponse): AuthResponse {
    const authResponse = new AuthResponse(data.message, data.token);
    return authResponse;
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
  }
}
