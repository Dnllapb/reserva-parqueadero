import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Reserve } from './Reserve/Reserve';
import { ReserveService } from '../services/reserve.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private  reserveService: ReserveService,
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
      this.reserveService.newReserve(usuario).subscribe(
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
