import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { enviroment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  private readonly URL  = enviroment.api
  constructor(private http: HttpClient, private cookies:CookieService, private router:Router) { }
  registerUser(name:string, email: string,password:string,enable:boolean ):Observable<any>
  {
    const user  ={name ,email ,password,enable}
    return this.http.post(`${this.URL}/auth/register`,user,{responseType:'text'})
    .pipe(
      tap((responseOK:string) => {
          //this.cookies.set('token_service', responseOK,  1, '/')  
          this.router.navigate(['/login']);       
      })
      )
  }
}