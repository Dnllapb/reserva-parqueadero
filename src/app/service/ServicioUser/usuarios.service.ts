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
 
  constructor( private httpClient:HttpClient) { }

  registrarUsuario(usuario:Usuario): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,usuario)
   }


   obtenerListaUsuarios() :Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl2}`)
  }

   
}
