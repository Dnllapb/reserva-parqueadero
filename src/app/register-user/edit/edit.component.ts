import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Usuario/usuario';
import { UsuariosService } from 'src/app/service/ServicioUser/usuarios.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { this.usuario = new Usuario();  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.usuarioService.obtenerUsuarioPorId(userId).subscribe(
        (data: Usuario) => {
          this.usuario = data;
        },
        error => {
          console.error('Error al obtener el usuario:', error);
        }
      );
    });
  }

  onSubmit(): void {
    const userId = this.usuario.id;
    this.usuarioService.actualizarUsuario(userId, this.usuario).subscribe(
      data => {
        console.log('Usuario actualizado exitosamente:', data);
        // Aquí puedes realizar cualquier acción adicional después de la actualización
        this.router.navigate(['/listas']);
      },
      error => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }
}



