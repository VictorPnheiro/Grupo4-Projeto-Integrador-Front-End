import { Injectable } from '@angular/core';
import { Produto } from 'src/app/shared/interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  private static produtos: Produto[] = [];

  public static list(): Produto[]{
    return this.produtos
  }

  public static cadastrar(produto: Produto):void{
    this.produtos.push(produto)
  }


  constructor() { }

  // cadastrar(){
  //   // this.produtos.push(Produto)
  //   return[{
  //     id: 1,
  //     nome:'Alivium',
  //     descricao:'Ibuprofeno 400mg',
  //     valor: 24.06,
  //     qtd_estoque: 10
  //   }]
  // }
}
