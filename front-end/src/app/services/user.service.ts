import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "/api/users"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    })
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user)
  }

  select(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }
}
