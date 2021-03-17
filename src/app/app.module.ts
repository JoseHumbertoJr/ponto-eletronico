import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { LoginModule } from './autenticacao/login/login.module';
import { LoginRoutingModule } from './autenticacao/login/login-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { CadastroPfModule } from './autenticacao/cadastro-pf/cadastro-pf.module';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPfModule,
    CadastroPjModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
