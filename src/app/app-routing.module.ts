import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarPfComponent } from './autenticacao/cadastro-pf/components/cadastrar-pf/cadastrarPfComponent';
import { CadastroPjComponent } from './autenticacao/cadastro-pj/components/cadastro-pj.component';

const routes: Routes = [
  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: 'cadastro-pj', component: CadastroPjComponent},
  {path: 'cadastro-pf', component: CadastrarPfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
