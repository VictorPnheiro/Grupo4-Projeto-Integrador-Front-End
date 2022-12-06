import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take, finalize } from 'rxjs';
import { Product } from '../product.interface';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  products: Array<Product>;

  pagina = 1;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) {}

  ngOnInit(){
    this.carregarProdutos();
  }

  carregarProdutos(){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.productsService
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

  onSucesso(resposta: Product[]){
    this.products = resposta;
  }

  onErro(erro: any){
    // this.erroNoCarregamento = true; -> Validar se precisa
    console.log(erro)
  }

  novoProduto(){
    this.router.navigate(['products/new-product']);
  }

  verDetalhes(idProduct: any){
    this.router.navigate([`products/${idProduct}`])
  }

  editarProduto(idProduct: Number){
    this.router.navigate([`products/${idProduct}/editar`])
  }

  apagarProduto(idProduct: Number){
    this.productsService
      .apagarProduto(idProduct)
      .subscribe({
        next: () => this.onSucessoApagarProduto(idProduct),
        error: () => this.onErroApagarProduto(),
      });
  }
  
  onSucessoApagarProduto(idProduct: Number){
    this.products = this.products?.filter((products) => products.id != idProduct)
    alert('Produto deletado com sucesso')
  }

  onErroApagarProduto(){
    alert('Ocorreu um erro ao tentar deletar produto!')
  }

  proximaPagina() {
    this.pagina = this.pagina + 1;
    // implementar lógica de paginação
  }

  paginaAnterior() {
    this.pagina = this.pagina - 1;
    // implementar lógica de paginação
  }

}
