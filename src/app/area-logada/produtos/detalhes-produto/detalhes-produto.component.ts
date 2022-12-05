import { ProdutosService } from './../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.interface';
import { take, finalize } from 'rxjs';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: Produto;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private produtosService: ProdutosService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.carregarProduto();
  }

  carregarProduto(){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idProduto = this.ActivatedRoute.snapshot.paramMap.get('id');

    this.produtosService
    .pegarProdutoId(idProduto)
    .pipe(
      take(1),
      finalize(() => (this.estaCarregando = false))
    )
    .subscribe({
      next:(resposta: Produto) => this.onSucesso(resposta),
      error:(erro) => this.onErro(erro),
    });
  }   

  onSucesso(resposta: Produto){
    {
      this.produto = resposta;
    }
  }

  onErro(error: any){
    {
      this.erroNoCarregamento = true;
      console.log(error);
    }
  }

  voltar(){
    this.router.navigate(['produtos'])
  }
}
