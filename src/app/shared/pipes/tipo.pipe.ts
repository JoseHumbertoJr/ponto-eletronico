import { Pipe, PipeTransform } from '@angular/core';

import { Tipo } from '../models';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo: Tipo, args?: any): string {
    return this.obterTexto(tipo);
  }

  obterTexto(tipo: Tipo): string{
    let tipoDesc: string;
    switch (tipo){
      case Tipo.INICIO_TRABALHO:
        tipoDesc = 'Inicio de Trabalho';
        break;
      case Tipo.INICIO_ALMOCO:
        tipoDesc = 'Inicio do almoço';
        break;
      case Tipo.TERMINO_ALMOCO:
        tipoDesc = 'Termino do almoço';
        break;
      case Tipo.TERMINO_TRABALHO:
        tipoDesc = "Termino do trabalho";
        break;
      default:
        tipoDesc = tipo;
        break;
    }
    return tipoDesc;
  }

}
