import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { HttpUtilService, Lancamento, LancamentoService, Tipo } from './../../../shared/models';

declare var navigator: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancado: string;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private httpUltil: HttpUtilService,
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit(): void {
    this.dataAtual = moment().format('DD/MM/YYYY HH:mm:ss');
    this.dataAtualEn = moment().format('YYYY-MM-DD HH:mm:ss');
    this.obterGeoLocation();
    this.ultimoTipoLancado = '';
    this.obterUltimoLancamento();
  }

  obterUltimoLancamento() {
    this.lancamentoService.buscarUltimoTipoLancado().subscribe(
      data => {
        this.ultimoTipoLancado = data.data ? data.data.tipo : '';
      },
      err => {
        const msg: string = "Erro obtendo último lancamento.";
        this.snackBar.open(msg, "Erro", {duration: 5000});
      }
    );
  }

  obterGeoLocation(): string {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>
        this.geoLocation = `${position.coords.latitude}, ${position.coords.longitude}`);
    }
    return '';
  }

  obterUrlMapa(): string{
    return "https://www.google.com/maps/search/" + this.geoLocation;
  }

  iniciarTrabalho(){
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  terminarTrabalho(){
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  iniciarAlmoco(){
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco(){
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }

  cadastrar(tipo: Tipo){
    const lancamento: Lancamento = new Lancamento(
      this.dataAtualEn,tipo,this.geoLocation,this.httpUltil.obterIdUsuario()
    );
    this.lancamentoService.cadastrar(lancamento).subscribe(
      data => {
        const msg: string = "Lancamento realzidado com sucesso!";
        this.snackBar.open(msg, "Sucesso", {duration: 5000});
        this.router.navigate(['/funcionario/listagem']);
      },
      err => {
        let msg: string = "Tente novamente em instantes.";
        if(err.status == 400){
          msg = err.error.errors.join(' ');
        }
        this.snackBar.open(msg, "Erro", {duration: 5000});
      }
    );
  }

  exibirInicioTrabalho(): boolean{
    console.log(this.ultimoTipoLancado);
    return this.ultimoTipoLancado == '' || this.ultimoTipoLancado == Tipo.TERMINO_TRABALHO;
  }

  exibirTerminoTrabalho(): boolean{
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO ||
      this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO;
  }

  exibirInicioAlmoco(): boolean{
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO;
  }

  exibirTerminoAlmoco(): boolean{
    return this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO;
  }
}
