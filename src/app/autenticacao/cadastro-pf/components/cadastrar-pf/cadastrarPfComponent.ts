import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { CpfValidator } from '../../../../shared/validators/cpf.validator';
import { CnpjValidator } from './../../../../shared/validators/cnpj.validator';
import { CadastrarPfService } from './../../services/cadastrar-pf.service';
import { CadastroPf } from './models/cadastro-ts.model';


@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router,
    private cadastrarPfService: CadastrarPfService,
  ) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, CnpjValidator]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]]
    });
  }
  cadastrarPf() {
    if (this.form.invalid) {
      return;
    }
    const cadastroPf: CadastroPf = this.form.value;
    this.cadastrarPfService.cadastrar(cadastroPf).subscribe(
      data => {
        const msg: string = "Realize o login para acessar o sistema";
        this.snackbar.open(msg, "Sucesso", {duration: 5000});
        this.router.navigate(['/login']);
      },
      err => {
        let msg: string = "Tente novamente em instantes.";
        if(err.status == 400){
          msg = err.error.errors.join(' ');
        }
        this.snackbar.open(msg, "Erro", {duration: 5000});
      }
    );
    return false;
  }
}
