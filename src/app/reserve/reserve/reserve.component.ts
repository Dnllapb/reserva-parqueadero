import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/services/reserve.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit{
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private  reserveService: ReserveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dateInit: ['', Validators.required],
      dateFinal: ['', Validators.required],
      plate: ['', Validators.required],
      fee: ['', Validators.required],
      type: ['', Validators.required],
  

    });
  }


  saveReserve() {
    if (this.formulario.valid) {
      const reserve = this.formulario.value;
      this.reserveService.newReserve(reserve).subscribe(
        dato => {
          console.log(dato);
          //this.irAlaListaDeEmpleados();
        },
        error => console.log(error)
      );
    }
  }

  irAlaListaDeEmpleados() {
    this.router.navigate(['usuarios']);
  }
}


