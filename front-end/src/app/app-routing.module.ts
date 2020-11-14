import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { TasksFinishiComponent } from './views/tasks-finishi/tasks-finishi.component';
import { TasksComponent } from './views/tasks/tasks.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'users', component: CadastroComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'home', component: HomeComponent},
  { path: 'tasks-concluded', component: TasksFinishiComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
