import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Usuario/usuario';
import { UsuariosService } from 'src/app/service/ServicioUser/usuarios.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formulario: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.usuarioService.obtenerUsuarioPorId(userId).subscribe(
        (data: Usuario) => {
          this.usuario = data;
          // Asignar los valores al formulario
          this.formulario.patchValue({
            id: this.usuario.id,
            nombre: this.usuario.name,
     
            role: this.usuario.role,
            email: this.usuario.email
          });
        },
        error => {
          console.error('Error al obtener el usuario:', error);
        }
      );
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const usuarioActualizado = this.formulario.value;
      const userId = usuarioActualizado.id;
      this.usuarioService.actualizarUsuario(userId, usuarioActualizado).subscribe(
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
}