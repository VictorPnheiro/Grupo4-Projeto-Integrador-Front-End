import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent, NaoEncontradoComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
