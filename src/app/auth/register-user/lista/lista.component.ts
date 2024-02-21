import swal from 'sweetalert2';
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

actualizarEmpleado(id:number){
  this.router.navigate(['actualizar',id]);
}

eliminarUsuario(id: number): void {
  
  swal.fire({
    title: '¿Estás seguro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (result.value) {
       this.usuarioService.eliminarUsuario(id).subscribe(
        () => {
          this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
          swal.fire('Eliminado!', 'success');
        },
        error => {
          console.error('Error al eliminar el usuario:', error);
          swal.fire('Error', 'Se produjo un error al eliminar el usuario.', 'error');
        }
      );
    }
  });
}
}
