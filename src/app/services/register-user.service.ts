import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { enviroment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  private readonly URL  = enviroment.api
  constructor(private http: HttpClient,  private router:Router) { }
  registerUser(name: string, email: string, password: string): Observable<any> {
    const user = { name, email, password,role:'USER'};
    return this.http.post(`${this.URL}/auth/register`, user, { observe: 'response', responseType: 'text' })
      .pipe(
        tap(response => {
          if (response.status === 201) {
            console.log('Registro exitoso', response.body);
            this.router.navigate(['/login']);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error en el registro', error);
          // Aquí puedes manejar diferentes tipos de errores basados en error.status
          return throwError(() => new Error('Error en el proceso de registro'));
        })
      );
  }
}