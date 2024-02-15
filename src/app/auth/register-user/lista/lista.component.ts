import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Usuario } from 'src/app/Usuario/usuario';

import { UsuariosService } from 'src/app/service/ServicioUser/usuarios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

   usuarios:Usuario[];

  constructor(private usuarioService:UsuariosService, private router:Router){}

  ngOnInit(): void {
    this.obtenerUsuarios();
 
  }

  private obtenerUsuarios(){
    this.usuarioService.obtenerListaUsuarios().subscribe(dato=>{
      this.usuarios = dato;
         });
        
        }
}
