import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take, finalize } from 'rxjs';
import { Produto } from '../produto.interface';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  produtos: Array<Produto>;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
  ) {}

  ngOnInit(){
    this.carregarProduto();
  }

  carregarProduto(){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.produtosService
      .pegarProduto()
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe({
        next: (resposta) => this.onSucesso(resposta),
        error: (erro) => this.onErro(erro),
      });
  }

  onSucesso(resposta: Produto[]){
    this.produtos = resposta;
  }

  onErro(erro: any){
    this.erroNoCarregamento = true;
    console.log(erro)
  }

  novoProduto(){
    this.router.navigate([`produtos/novo-produto`]);
  }

  verDetalhes(idProduto: any){
    this.router.navigate([`produtos/${idProduto}`])
  }

  editarProduto(idProduto: Number){
    this.router.navigate([`produtos/${idProduto}/editar`])
  }

  apagarProduto(idProduto: Number){
    this.produtosService
      .apagarProduto(idProduto)
      .subscribe({
        next: () => this.onSucessoApagarProduto(idProduto),
        error: () => this.onErroApagarProduto(),
      });
  }
  
  onSucessoApagarProduto(idProduto: Number){
    this.produtos = this.produtos?.filter((produtos) => produtos.id != idProduto)
    alert('Produto deletado com sucesso')
  }

  onErroApagarProduto(){
    alert('Ocorreu um erro ao tentar deletar produto!')
  }

}
