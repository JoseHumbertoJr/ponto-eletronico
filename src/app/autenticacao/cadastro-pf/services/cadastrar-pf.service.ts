import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

import { CadastroPf } from './../components/cadastrar-pf/models/cadastro-ts.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPfService {

  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) {}

  cadastrar(cadastroPf: CadastroPf): Observable<any>{
    return this.http.post(environment.baseApiUrl + this.PATH, cadastroPf);
  }
}
