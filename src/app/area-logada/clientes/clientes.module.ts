import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastrarClienteComponent],
  imports: [CommonModule, ClientesRoutingModule, ReactiveFormsModule],
})
export class ClientesModule {}
