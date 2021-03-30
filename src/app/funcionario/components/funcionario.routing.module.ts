import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioComponent } from './funcionario.components';
import { LancamentoComponent } from './lancamento/lancamento.component';
import { ListagemComponent } from './listagem/listagem.component';

export const FuncinarioRoutes: Routes = [
  {
    path: 'funcionario',
    component: FuncionarioComponent,
    children: [
      {
        path: '',
        component: LancamentoComponent
      },
      {
        path: 'listagem',
        component: ListagemComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(FuncinarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class FuncionarioRoutingModule{

}
