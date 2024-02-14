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
sendLogin(): void{
  const {email,password} = this.formLogin.value
  this.authService.sendCredential(email,password)
  .subscribe(
   responseOk=>{
   
      const{tokenSession}=responseOk
      this.cookie.set('token',tokenSession,1,'/')
      if(!this.errorSession)
      {
        this.router.navigate(['/fincas']);
      }
      console.log('sesion iniciada correctamente',responseOk);

    },
    error=>{
      this.errorSession = true
      console.log('ocurrio un error en tu email y/o tu password');
     
    }
  )

}

  
}
