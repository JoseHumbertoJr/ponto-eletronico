import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule} from  '@angular/flex-layout';
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import {
	CadastrarPjComponent,
	CadastroPjComponent
} from './components';
import { CadastrarPjService } from './services';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [
  	CadastrarPjComponent,
  	CadastroPjComponent
  ],
  providers: [
    CadastrarPjService
  ]
})
export class CadastroPjModule { }
