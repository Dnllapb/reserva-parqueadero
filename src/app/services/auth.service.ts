import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL  = enviroment.api

  constructor(private http: HttpClient, private cookies:CookieService) { }
  sendCredential(email: string,password:string ):Observable<any>
  {
    const user  ={email ,password}
    return this.http.post(`${this.URL}/auth/authenticate`,user,{responseType:'text'})
    .pipe(
      tap((responseOK:string) => {
          this.cookies.set('token_service', responseOK,  1, '/')         
      })
      )
  }
}