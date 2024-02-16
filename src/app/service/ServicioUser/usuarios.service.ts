import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/Usuario/usuario';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl ="http://localhost:15432/api/v1/auth/register"
  private baseUrl2 ="http://localhost:15432/api/v1/user/getUser"
  private baseUrl3 ="http://localhost:15432/api/v1/user/update"
  private baseUrl4 ="http://localhost:15432/api/v1/user/search"
 private baseUrl5 ="http://localhost:15432/api/v1/user/delete"
 
  constructor( private httpClient:HttpClient) { }

  registrarUsuario(usuario:Usuario): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,usuario)
   }


   obtenerListaUsuarios() :Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl2}`)
  }
  actualizarUsuario(id: number, usuario: Usuario): Observable<object> {
    return this.httpClient.put(`${this.baseUrl3}/${id}`,usuario);
  }
  
  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseUrl4}/${id}`);
  }

  eliminarUsuario(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl5}/${id}`);
  }
   
}
