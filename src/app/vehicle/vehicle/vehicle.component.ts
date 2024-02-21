import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/service/ServicioUser/usuarios.service';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private  vehicleService: VehicleService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      plate: ['', Validators.required],
      model: ['', Validators.required],
      
    });
  

}
saveVehicle() {
  console.log('test vehicle');
  
  if (this.formulario.valid) {
    const vehicle = this.formulario.value;
   // const userId = this.authService.getAuthenticatedUserId();
    this.vehicleService.newVehicle(vehicle).subscribe(
      dato => {
        console.log(dato);
       // this.irAlaListaDeEmpleados();
      },
      error => console.log(error)
    );
  }else{
    console.log("fallo");
    
  }
}

listVehicles() {
  this.router.navigate(['usuarios']);
}
}
