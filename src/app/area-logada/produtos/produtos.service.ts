import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/area-logada/produtos/produto.interface';
import { HttpClient } from '@angular/common/http';
import { AnimateTimings } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }
  
  pegarProduto(){
    return this.http.get<Produto[]>(`${this.API_URL}/products`);
  }

  pegarProdutoId(idProduto: any){
    return this.http.get<Produto>(`${this.API_URL}/products/${Number(idProduto)}`);
  }

  cadastrarProduto(produto:Produto){
    return this.http.post<Produto[]>(`${this.API_URL}/products`, produto);
  }

  alterarProduto(idProduto: any, produto:Produto){
    return this.http.put<Produto>(`${this.API_URL}/products/${idProduto}`, produto);
  }

  apagarProduto(idProduto: Number){
    return this.http.delete<Produto[]>(`${this.API_URL}products/${idProduto}`);
  }

}
