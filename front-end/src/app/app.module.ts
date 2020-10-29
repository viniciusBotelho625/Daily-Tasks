import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescricaoCadastroComponent } from './descricao-cadastro/descricao-cadastro.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    DescricaoCadastroComponent,
    FormCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
