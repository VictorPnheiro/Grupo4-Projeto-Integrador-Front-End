import { FluxoDeCaixaComponent } from './fluxo-de-caixa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FluxoDeCaixaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FluxoDeCaixaRoutingModule {}
