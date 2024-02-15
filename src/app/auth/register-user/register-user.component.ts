import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Usuario/usuario';
import { UsuariosService } from 'src/app/service/ServicioUser/usuarios.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {


  usuario : Usuario = new Usuario();

  constructor(private usuarioService:UsuariosService, private router:Router){}


  ngOnInit(): void {
    console.log(this.usuario);
  
 
  }
  
  guardarUsuario(){
    this.usuarioService.registrarUsuario(this.usuario).subscribe(dato=>{
      console.log(dato)
     this.guardarUsuario();
    },error=>console.log(error));
    
  
  }


        
  onSubmit(){
    this.guardarUsuario();
    
  }
}
