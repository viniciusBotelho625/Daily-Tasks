import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescricaoCadastroComponent } from './components/descricao-cadastro/descricao-cadastro.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DescricaoCadastroComponent,
    FormCadastroComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
