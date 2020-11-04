import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescricaoCadastroComponent } from './components/descricao-cadastro/descricao-cadastro.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { CorpoHomeComponent } from './components/corpo-home/corpo-home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DescricaoCadastroComponent,
    FormCadastroComponent,
    HeaderHomeComponent,
    CorpoHomeComponent,
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
