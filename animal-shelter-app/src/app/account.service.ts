import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from './login';
import { CurrentUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loginUrl = 'https://localhost:7180/api/account/login/';
  private logoutUrl = 'https://localhost:7180/api/account/logout/';
  private currentUserUrl = 'https://localhost:7180/api/account/currentUser/';

  private currentUserSubject = new BehaviorSubject<CurrentUser | undefined>(undefined);
  currentUser$ = this.currentUserSubject.asObservable();
  private loginSubject = new Subject<void>();
  login$ = this.loginSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, { username, password }).pipe(
      tap(() => this.notifyLogin())
    );
  }

  logout(){
    return this.http.post<Token>(this.logoutUrl, {}).pipe(
      tap(() => this.notifyLogin())
    );
  }

  notifyLogin() {
    this.loginSubject.next();
  }

  getCurrentUser(): Observable<CurrentUser>{
    return this.http.get<CurrentUser>(this.currentUserUrl, {} ).pipe(
      tap(currentUser => this.currentUserSubject.next(currentUser))
    );
  }
}
