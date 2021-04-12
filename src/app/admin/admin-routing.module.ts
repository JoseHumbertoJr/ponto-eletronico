import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../shared/services/admin-guard.service';
import { AdminComponent } from './components/admin.components';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListagemComponent } from './components/listagem/listagem.component';


export const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: ListagemComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'atualizacao/:lancamentoId',
        component: AtualizacaoComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule{

}
