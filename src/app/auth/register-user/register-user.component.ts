import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/ServicioUser/usuarios.service';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  formulario: FormGroup;
  @ViewChild('myForm') myForm: NgForm;

  constructor(
    private formBuilder: FormBuilder,
    private  registerService: RegisterUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  guardarUsuario() {
    if (this.formulario.valid) {
      const usuario = this.formulario.value;
      this.registerService.registerUser(usuario.name,usuario.email,usuario.password)
        .subscribe({
          next: (response) => {
            console.log('Registro exitoso', response);
            // La navegación al login ya se maneja en el servicio, no es necesario repetirla aquí.
            // Si decides manejarla aquí, asegúrate de no tener un conflicto con el servicio.
          },
          error: (error) => {
            // Ahora manejamos el error de manera específica basándonos en el código de estado HTTP.
            console.log('Error durante el registro', error);
            if (error.status === 403) {
              alert('Las contraseñas no son válidas.');
            } else {
              alert('Hubo un error al registrar el usuario.');
            }
          }
        });
    } else {
      alert('Por favor, completa el formulario correctamente.');
    }
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['usuarios']);
  }
  clear() {
    this.formulario.reset(); // Limpia el formulario
  }

}
