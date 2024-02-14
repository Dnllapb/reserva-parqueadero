import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookieService:CookieService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }
  checkCookieSession():boolean{
    try{
      const token:boolean  = this.cookieService.check('token')
      console.log('oki doki',token)
      if(token)
      {
        return true
      }else{
        this.router.navigate(['/fincas'])
        return token
      }
  
    }catch(e){
      console.log('Algo salio mal',e);
      return false
    }
    
  }
  
}
