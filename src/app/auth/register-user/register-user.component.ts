import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/ServicioUser/usuarios.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private  usuarioService: UsuariosService,
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
      this.usuarioService.registrarUsuario(usuario).subscribe(
        dato => {
          console.log(dato);
          this.irAlaListaDeEmpleados();
        },
        error => console.log(error)
      );
    }
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['usuarios']);
  }
}
