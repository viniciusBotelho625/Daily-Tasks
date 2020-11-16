import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-cards-home',
  templateUrl: './cards-home.component.html',
  styleUrls: ['./cards-home.component.css']
})

export class CardsHomeComponent implements OnInit {

  tasks: Tasks[]

  constructor(private router: Router, private tasksService: TaskService) { }

  ngOnInit(): void {
    this.tasksService.select().subscribe(tasks => {
      this.tasks = tasks
      console.log(tasks)
    })
  }

  navigateToTasks(): void {
    this.router.navigate(['/tasks'])
  }

  concluidTask() {

  }
}
