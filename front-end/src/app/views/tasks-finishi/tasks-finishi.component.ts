import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-finishi',
  templateUrl: './tasks-finishi.component.html',
  styleUrls: ['./tasks-finishi.component.css']
})
export class TasksFinishiComponent implements OnInit {

  tasks: Tasks[]

  constructor(private router: Router, private tasksService: TaskService) { }

  ngOnInit(): void {

  }
}
