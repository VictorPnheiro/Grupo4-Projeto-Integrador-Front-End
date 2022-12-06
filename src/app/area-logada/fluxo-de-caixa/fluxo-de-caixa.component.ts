import { Component, OnInit } from '@angular/core';
import { FluxoDeCaixa } from './fluxo-de-caixa.interface';

@Component({
  selector: 'app-fluxo-de-caixa',
  templateUrl: './fluxo-de-caixa.component.html',
  styleUrls: ['./fluxo-de-caixa.component.css']
})
export class FluxoDeCaixaComponent implements OnInit {

  constructor() { }

  fluxoDeCaixa: Array<FluxoDeCaixa>;

  ngOnInit(): void {
  }

  

}
