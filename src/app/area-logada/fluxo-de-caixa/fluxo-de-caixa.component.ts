import { Component, OnInit } from '@angular/core';
import { FLUXO_DE_CAIXA_MENSAL } from './fluxo-de-caixa-constrants';


@Component({
  selector: 'app-fluxo-de-caixa',
  templateUrl: './fluxo-de-caixa.component.html',
  styleUrls: ['./fluxo-de-caixa.component.css']
})
export class FluxoDeCaixaComponent implements OnInit {

  FLUXO_DE_CAIXA_MENSAL = FLUXO_DE_CAIXA_MENSAL;

  constructor() { }

  ngOnInit(): void {
  }

}
