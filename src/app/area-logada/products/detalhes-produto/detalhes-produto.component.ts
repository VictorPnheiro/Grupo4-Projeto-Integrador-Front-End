import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { take, finalize } from 'rxjs';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  product: Product;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.carregarProduto();
  }

  carregarProduto(){
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idProduct = this.ActivatedRoute.snapshot.paramMap.get('id');

    this.productsService
    .pegarProdutoId(idProduct)
    .pipe(
      take(1),
      finalize(() => (this.estaCarregando = false))
    )
    .subscribe({
      next:(resposta: Product) => this.onSucesso(resposta),
      error:(erro) => this.onErro(erro),
    });
  }   

  onSucesso(resposta: Product){
    {
      this.product = resposta;
    }
  }

  onErro(error: any){
    {
      this.erroNoCarregamento = true;
      console.log(error);
    }
  }

  voltar(){
    this.router.navigate(['products'])
  }
}
