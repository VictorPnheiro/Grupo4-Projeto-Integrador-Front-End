import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { take, finalize } from 'rxjs';
import { Cliente } from '../clientes.interface';

@Component({
  selector: 'app-detalhes-cliente',
  templateUrl: './detalhes-cliente.component.html',
  styleUrls: ['./detalhes-cliente.component.css']
})
export class DetalhesClienteComponent implements OnInit {

  cliente: Cliente;

  estaCarregando: boolean | undefined;
  erroNoCarregamento: boolean | undefined;

  constructor(
    private activatedroute: ActivatedRoute,
    private clientesService: ClientesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarContato();
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idCliente = this.activatedroute.snapshot.paramMap.get('id');

    this.clientesService
      .getClientePorId(idCliente)
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe({
        next: (response: Cliente) => this.onSucesso(response),
        error: (error) => this.onErro(error),
      });
  }

  onSucesso(response: Cliente) {
    {
      this.cliente = response;
    }
  }

  onErro(error: any) {
    {
      this.erroNoCarregamento = true;
      console.error(error);
    }
  }

  voltar() {
    this.router.navigate(['clientes'])
  }

}
