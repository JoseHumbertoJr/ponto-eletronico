import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LogarComponent } from './components/logar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule} from  '@angular/flex-layout';
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [LoginComponent, LogarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class LoginModule { }
