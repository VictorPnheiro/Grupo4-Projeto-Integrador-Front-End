import { ProdutosRoutingModule } from './produtos-routing.module';
import ptBr from '@angular/common/locales/pt';

import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(ptBr);

@NgModule({
  declarations: [CadastrarProdutoComponent],
  imports: [CommonModule, ProdutosRoutingModule, ReactiveFormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
})
export class ProdutosModule {}
