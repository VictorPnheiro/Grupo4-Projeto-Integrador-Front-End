import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get<Cliente[]>(`${this.API_URL}/users`);
  }

  getClientePorId(idCliente: any) {
    return this.http.get<Cliente>(`${this.API_URL}/users/${idCliente}`);
  }

  criarCliente(cliente: Cliente) {
    return this.http.post<Cliente[]>(`${this.API_URL}/users`, cliente);
  }

  attCliente(idCliente: any, cliente: Cliente) {
    return this.http.put<Cliente>(
      `${this.API_URL}/users/${idCliente}`,
      cliente
    );
  }

  apagarCliente(idCliente: any) {
    return this.http.delete<Cliente[]>(`${this.API_URL}/users/${idCliente}`);
  }
}
