import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fincas-create',
  templateUrl: './fincas-create.component.html',
  styleUrls: ['./fincas-create.component.scss'],
})
export class FincasCreateComponent {
  fincaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fincaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      
    });
  }

  onSubmit() {
    if (this.fincaForm.valid) {
      // Lógica para manejar el envío del formulario (puedes enviar los datos al backend aquí)
      console.log('Formulario enviado:', this.fincaForm.value);
    }
  }
}
