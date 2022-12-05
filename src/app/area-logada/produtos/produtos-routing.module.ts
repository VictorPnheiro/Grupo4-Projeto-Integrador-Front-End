import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
  path: '',
  component: ListarProdutosComponent
  },
  {
    path: 'novo-produto',
    component: CadastrarProdutoComponent,
  },
  {
    path: ':id',
    component: DetalhesProdutoComponent,
  },
  {
    path: ':id/editar',
    component: CadastrarProdutoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarProdutoRoutingModule { }
