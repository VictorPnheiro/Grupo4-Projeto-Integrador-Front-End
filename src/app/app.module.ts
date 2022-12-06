import { HttpClientModule } from '@angular/common/http';
import { DetalhesProdutoComponent } from './area-logada/products/detalhes-produto/detalhes-produto.component';
import { ListarProdutosComponent } from './area-logada/products/listar-produtos/listar-produtos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ListarClientesComponent } from './area-logada/clientes/listar-clientes/listar-clientes.component';
import { DetalhesClienteComponent } from './area-logada/clientes/detalhes-cliente/detalhes-cliente.component';


registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent, NaoEncontradoComponent, ListarClientesComponent,ListarProdutosComponent, DetalhesClienteComponent, DetalhesProdutoComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
