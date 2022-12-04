import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ListarClientesComponent,
  },
  {
    path: 'novo-cliente',
    component: CadastrarClienteComponent,
  },
  {
    path: ':id',
    component: DetalhesClienteComponent,
  },
  {
    path: ':id/editar',
    component: CadastrarClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
