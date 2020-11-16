import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Tasks } from '../models/task.interface';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = "/api/tasks"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    })
  }

  create(tasks: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.baseUrl, tasks)
  }

  select(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.baseUrl)
  }

}
