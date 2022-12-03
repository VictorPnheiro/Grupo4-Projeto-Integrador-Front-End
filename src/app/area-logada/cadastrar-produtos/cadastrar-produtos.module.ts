import { CadastrarProdutosComponent } from './cadastrar-produtos.component';
import ptBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { CadastrarProdutosRoutingModule } from './cadastrar-produtos-routing.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [CadastrarProdutosComponent],
  imports: [CommonModule, CadastrarProdutosRoutingModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
})
export class CadastrarProdutosModule {}
