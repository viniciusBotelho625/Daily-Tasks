import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/models/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-update',
  templateUrl: './tasks-update.component.html',
  styleUrls: ['./tasks-update.component.css']
})
export class TasksUpdateComponent implements OnInit {

  task: Tasks = new Tasks();
  updateDtCadastro: string;
  updateDtTermino: string;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.taskService.readById(id).subscribe(task => {
      this.task = task
      console.log(task.dt_cadastro)
      this.updateDtCadastro = new Date(task.dt_cadastro).toISOString().split('T')[0]
      this.updateDtTermino = new Date(task.dt_termino).toISOString().split('T')[0]
      console.log(task)
    });
    document.body.classList.add('bg-dashboard');
  }

  updateTask(): void {
    this.task.dt_cadastro = new Date(this.updateDtCadastro)
    this.task.dt_termino = new Date(this.updateDtTermino)
    this.taskService.update(this.task).subscribe(() => {
      this.taskService.showMessage('Lembrete alterado com sucesso!')
      this.router.navigate(["/home"])
    })
  }
}
