import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit{
  constructor(private router: Router, private authService:AuthService, private cookie:CookieService) {}

  login() {
    this.router.navigateByUrl('/dashboard/fincas/fincas');
  }


    errorSession: boolean = false
    errrSessionMessage:string ="";
    formLogin:FormGroup = new FormGroup({});
    ngOnInit(): void {
      this.formLogin = new FormGroup(
        {
           email: new FormControl('',[
            Validators.required,
            Validators.email
           ]),
           password: new FormControl('',[
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
              
           ])
        }
        )
      
      
    }
    sendLogin(email: string, password: string): void {
      this.authService.sendCredential(email, password).subscribe({
        next: (response) => {
          console.log('Inicio de sesión exitoso', response);
          // Aquí podrías redirigir a la página de inicio de sesión exitosa o realizar otras acciones necesarias
        },
        error: (error) => {
          console.error('Error al iniciar sesión', error);
          // Aquí podrías manejar el error, por ejemplo, mostrar un mensaje de error al usuario
        }
      });
    }
  }
