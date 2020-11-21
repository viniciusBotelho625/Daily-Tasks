import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Tasks } from '../models/task.interface';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Tasks[] = [];
  private listTask = new Subject<Tasks[]>();

  baseUrl = "/api/tasks"

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private router: Router) {}

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

  delete(id: string): void {
    this.http.delete(`/api/tasks/${id}`)
    .subscribe(() => {
    });
  }

  readById(id: string): Observable<Tasks> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Tasks>(url)
  }

  update(task: Tasks): Observable<Tasks> {
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Tasks>(url, task)
  }
}
