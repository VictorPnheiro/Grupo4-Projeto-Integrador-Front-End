import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';


@NgModule({
  declarations: [
    CadastrarProdutosComponent
  ],
  imports: [
    CommonModule,
    AreaLogadaRoutingModule
  ]
})
export class AreaLogadaModule { }
