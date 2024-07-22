import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Token } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'https://localhost:7180/api/account/login/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, { username, password} );
  }
}
