import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckLoginGuard } from 'src/guards/check-login.guard';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { TasksFinishiComponent } from './views/tasks-finishi/tasks-finishi.component';
import { TasksUpdateComponent } from './views/tasks-update/tasks-update.component';
import { TasksComponent } from './views/tasks/tasks.component';



const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'users', component: CadastroComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate:[CheckLoginGuard],
  },
  { path: 'tasks', component: TasksComponent, canActivate:[CheckLoginGuard],},
  { path: 'home', component: HomeComponent, canActivate:[CheckLoginGuard],},
  { path: 'home/:id', component: HomeComponent, canActivate:[CheckLoginGuard],},
  { path: 'tasks/update/:id', component: TasksUpdateComponent, canActivate:[CheckLoginGuard],},
  { path: 'my-tasks/tasks-finishi', component: TasksFinishiComponent, canActivate:[CheckLoginGuard],}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
