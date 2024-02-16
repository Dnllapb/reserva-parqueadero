import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  fincaForm: any;

  constructor(
    private fb: FormBuilder,
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.fincaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((resp: any) => {
      if (resp.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cd.detectChanges();
  }

  logout() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.fincaForm.valid) {
      // Lógica para manejar el envío del formulario (puedes enviar los datos al backend aquí)
      console.log('Formulario enviado:', this.fincaForm.value);
    }
  }
}