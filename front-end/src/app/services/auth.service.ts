import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
// import { environment } from '../../environments/environment'

import { User, UserResponse } from '../models/user.interface';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  baseUrl = "/api/logon"

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.checkToken();
  }

  get islogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }
  // showMessage(msg: string): void {
  //   this.snackBar.open(msg, 'X', {
  //     duration: 3000,
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //   })
  // }

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(this.baseUrl , authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token);
          this.loggedIn.next(true);
          return res;
        }),
      catchError( (err) => this.handlerErrror(err))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  private checkToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired ->', isExpired);

    isExpired ? this.logout() : this.loggedIn.next(true);

      // if (isExpired) {
      //   this.logout();
      // } else {
      //   this.loggedIn.next(true)
      // }
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private handlerErrror(err): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
