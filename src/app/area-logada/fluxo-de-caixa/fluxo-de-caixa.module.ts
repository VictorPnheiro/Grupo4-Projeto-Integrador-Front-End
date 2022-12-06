import { FluxoDeCaixaComponent } from './fluxo-de-caixa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoDeCaixaRoutingModule } from './fluxo-de-caixa-routing.module';


@NgModule({
  declarations: [FluxoDeCaixaComponent],
  imports: [
    CommonModule,
    FluxoDeCaixaRoutingModule
  ]
})
export class FluxoDeCaixaModule { }
