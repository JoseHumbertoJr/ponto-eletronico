import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MascaraDirective } from './directives/mascara.directive';
import { DataPipe } from './pipes/data.pipe';
import { TipoPipe } from './pipes/tipo.pipe';
import { PtBrMatPagination } from './pt-br-mat-paginator';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MascaraDirective,
  	TipoPipe,
  	DataPipe
  ],
  exports: [
  	MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  providers: [
    PtBrMatPagination
  ]
})
export class SharedModule { }
