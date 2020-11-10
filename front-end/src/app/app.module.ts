import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescricaoCadastroComponent } from './components/descricao-cadastro/descricao-cadastro.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { CardsHomeComponent } from './components/cards-home/cards-home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormLogonComponent } from './components/form-logon/form-logon.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { ModalComponent } from './components/modal/modal.component';


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
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
