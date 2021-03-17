import { CadastrarPfComponent } from './autenticacao/cadastro-pf/components/cadastrar-pf/cadastrar-pf.component';
import { CadastroPjComponent } from './autenticacao/cadastro-pj/components/cadastro-pj.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
