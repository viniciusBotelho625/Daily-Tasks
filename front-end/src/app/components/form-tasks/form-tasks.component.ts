import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.css']
})
export class FormTasksComponent implements OnInit {

  task: Tasks = {
    dt_cadastro: null,
    dt_termino: null,
    titulo: '',
    descricao: ''
  }

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createTask() {
    this.taskService.create(this.task).subscribe(() => {
    this.taskService.showMessage('Lembrete criado com sucesso!')
    this.router.navigate(['home'])
    })
  }

}
