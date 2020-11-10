import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescricaoCadastroComponent } from './components/descricao-cadastro/descricao-cadastro.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { CardsHomeComponent } from './components/cards-home/cards-home.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component'
import { FormLogonComponent } from './components/form-logon/form-logon.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { HomeComponent } from './views/home/home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './views/tasks/tasks.component';
import { FormTasksComponent } from './components/form-tasks/form-tasks.component';




@NgModule({
  declarations: [
    AppComponent,
    DescricaoCadastroComponent,
    FormCadastroComponent,
    HeaderHomeComponent,
    CadastroComponent,
    HomeComponent,
    LoginComponent,
    CardsHomeComponent,
    FormLogonComponent,
    DashboardComponent,
    CardDashboardComponent,
    TasksComponent,
    FormTasksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
