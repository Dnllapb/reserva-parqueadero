import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-fincas-create',
  templateUrl: './fincas-create.component.html',
  styleUrls: ['./fincas-create.component.scss'],
})
export class FincasCreateComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  fincaForm: any;

  constructor(private fb: FormBuilder) {
    this.fincaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.fincaForm.valid) {
      // Lógica para manejar el envío del formulario (puedes enviar los datos al backend aquí)
      console.log('Formulario enviado:', this.fincaForm.value);
    }
  }
}
