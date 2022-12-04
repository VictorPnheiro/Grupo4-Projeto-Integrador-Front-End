import { ClientesService } from './../clientes.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { onErrorResumeNext, finalize, take } from 'rxjs';
import { Cliente } from '../clientes.interface';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
})
export class ListarClientesComponent implements OnInit {
  clientes: Array<Cliente>;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) {}

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.clientesService
      .getClientes()
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe({
        next: (resposta) => this.onSucesso(resposta),
        error: (erro) => this.onErro(erro),
      });
  }

  onSucesso(resposta: Cliente[]) {
    this.clientes = resposta;
  }

  onErro(erro: any) {
    console.log(erro);
  }

  novoCliente() {
    this.router.navigate(['clientes/novo-cliente']);
  }

  verDetalhes(idContato: any) {
    this.router.navigate([`clientes/${idContato}`]);
  }

  editarCliente(idCliente: Number) {
    this.router.navigate([`clientes/${idCliente}/editar`]);
  }

  apagarCliente(idCliente: Number) {
    this.clientesService
      .apagarCliente(idCliente)
      .subscribe({
        next: () => this.onSucessoApagarCliente(idCliente),
        error: () => this.onErroApagarCliente(),
      });
  }

  onSucessoApagarCliente(idCliente: Number){
    this.clientes = this.clientes?.filter((clientes) => clientes.id != idCliente)
    alert('Cliente deletado com sucesso!')
  }

  onErroApagarCliente(){
    alert('Ocorreu um erro ao tentar deletar cliente!')
  }
}
