import { AreaLogadaComponent } from './area-logada.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AreaLogadaComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'cadastrar-produtos',
        loadChildren: () =>
          import('./cadastrar-produtos/cadastrar-produtos.module').then(
            (m) => m.CadastrarProdutosModule
          ),
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./clientes/clientes.module').then(
            (m) => m.ClientesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaLogadaRoutingModule {}
