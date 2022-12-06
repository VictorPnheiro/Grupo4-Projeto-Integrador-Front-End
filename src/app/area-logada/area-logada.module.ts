import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [AreaLogadaComponent, OrdersComponent],
  imports: [CommonModule, AreaLogadaRoutingModule],
})
export class AreaLogadaModule {}
