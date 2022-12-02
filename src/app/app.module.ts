import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { HomeComponent } from './area-logada/home/home.component';

@NgModule({
  declarations: [AppComponent, NaoEncontradoComponent, AreaLogadaComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
