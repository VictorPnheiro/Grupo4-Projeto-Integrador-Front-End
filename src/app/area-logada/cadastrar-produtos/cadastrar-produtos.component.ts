import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/interfaces/produto';
import { ProdutoService } from 'src/shared/produto/produto.service';


@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
  public ProdutoService: Produto;

  // produtoService: Produto[] = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    // this.produtos = this.ProdutoService.cadastar()
  }

  public produtos: Produto[] = []

  public produto: Produto = {} as Produto;

  public cadastrar(){
      this.ProdutoService.cadastrar(this.produto)
  
  }


}
