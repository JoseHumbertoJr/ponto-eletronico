import { LoginComponent } from './components/login/login.component';
import { LogarComponent } from './components/logar.component';

import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LogarComponent,
    children: [{path: '', component: LoginComponent}]
  },
]
@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
