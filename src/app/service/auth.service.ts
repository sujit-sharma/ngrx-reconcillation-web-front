import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AuthResponse} from '../model/auth-response.model';
import {environment} from '../../environments/environment';
import {AppState} from '../shared/app.state';


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
    localStorage.setItem('jwt_token', token);
  }
}
