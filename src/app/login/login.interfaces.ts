import { Usuario } from '../shared/interfaces/usuario.iterfaces';

export interface LoginResponse {
  usuario: Usuario;
  tokenAutenticacao: string;
}
