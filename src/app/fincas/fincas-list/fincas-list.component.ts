import { Component, Renderer2 } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { ReservaDialogComponent } from 'src/app/reserva-dialog/reserva-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fincas-list',
  templateUrl: './fincas-list.component.html',
  styleUrls: ['./fincas-list.component.scss'],
})
export class FincasListComponent {
  fincas = [
    {
      nombre: 'Finca La Tranquilidad',
      imagen:
        'https://tse2.mm.bing.net/th?id=OIP.UHT953tM4lh-zUuNoy6-8QHaFj&pid=Api&P=0&h=180',
      descripcion: 'Ubicación: Villa de Leyva, Boyacá',
      claseNombre: 'clase-elegante',
      claseDescripcion: 'clase-normal',
    },
    {
      nombre: 'Hacienda El Paraíso',
      imagen:
        'https://cdn0.matrimonio.com.co/vendor/0025/3_2/960/jpg/casa9_10_120025.jpeg',
      descripcion: 'Ubicación: Armenia, Quindío',
    },
    {
      nombre: 'Finca Los Pájaros',
      imagen:
        'https://finkeros_listings.s3.amazonaws.com/xxl_515_1369325150.5083_b3505f80e0.jpg',
      descripcion: 'Ubicación: Santa Marta, Magdalena',
    },
    {
      nombre: 'Rancho del Sol',
      imagen:
        'https://thumbs.apts247.info/resize/?img=https://media.apts247.info/a8/a8ce8bf808ac447181f6fca02cbc45db/galleries/community/amenities/0U6A0258.jpg&w=710',
      descripcion: 'Ubicación: Villavicencio, Meta',
    },
    {
      nombre: 'Hotel campestre Monterrey',
      imagen:
        'https://www.hotelcampestremonterrey.com/media/27288/hotel-monterrey-campestre-san-gil-fachada.jpg?width=725&height=507&mode=crop',
      descripcion: 'Ubicación: San Gil, Santander',
    },
    {
      nombre: 'Finca La Vista Hermosa',
      imagen:
        'https://www.bienesonline.com/colombia/photos/se-alquila-hermosa-finca-en-caluce-palmira-14644483170.jpg',
      descripcion: 'Ubicación: Cali, Valle del Cauca',
    },
    {
      nombre: 'Hacienda Calibio capilla ph',
      imagen:
        'https://i.pinimg.com/originals/a5/55/61/a55561ffbff6656ebd34e047ce76bb9f.jpg',
      descripcion: 'Ubicación: Popayán, Cauca',
    },
    {
      nombre: 'Rancho Verde',
      imagen: 'https://villageverde.com.br/01/bg8.jpg',
      descripcion: 'Ubicación: Medellín, Antioquia',
    },
    {
      nombre: 'Finca El Oasis de Icor',
      imagen:
        'https://cdn0.bodas.net/vendor/43653/3_2/1280/jpg/altar-piscina_1_143653-157546287512764.jpeg',
      descripcion: 'Ubicación: Barranquilla, Atlántico',
    },
    {
      nombre: 'Hacienda La Mariposa',
      imagen:
        'https://pix10.agoda.net/hotelImages/176/176329/176329_13020700050010317043.jpg?s=1024x768',
      descripcion: 'Ubicacion: Bogota',
    },
    {
      nombre: 'Finca 3',
      imagen: 'url_de_la_imagen8.jpg',
      descripcion: 'Descripción de la Finca 11',
    },
    {
      nombre: 'Finca 3',
      imagen: 'url_de_la_imagen8.jpg',
      descripcion: 'Descripción de la Finca 12',
    },
    {
      nombre: 'Finca 3',
      imagen: 'url_de_la_imagen8.jpg',
      descripcion: 'Descripción de la Finca 12',
    },
    {
      nombre: 'Finca 3',
      imagen: 'url_de_la_imagen8.jpg',
      descripcion: 'Descripción de la Finca 14',
    },
    {
      nombre: 'Finca 3',
      imagen: 'url_de_la_imagen8.jpg',
      descripcion: 'Descripción de la Finca 15',
    },
    {
      nombre: 'Finca 3',
      imagen: 'url_de_la_imagen8.jpg',
      descripcion: 'Descripción de la Finca 16',
    },
    {
      nombre: 'Finca 3',
      imagen: 'url_de_la_imagen8.jpg',
      descripcion: 'Descripción de la Finca 17',
    },
  ];

  pageSize = 9;
  maxPagesToShow = 20;
  paginatedFincas: any[] = [];

  constructor(
    private dialog: MatDialog,
    private renderer: Renderer2,
    private snackBar: MatSnackBar
  ) {
    this.updatePaginatedFincas();
  }

  updatePaginatedFincas() {
    this.paginatedFincas = this.chunkArray(this.fincas, this.pageSize);
  }

  chunkArray(array: any[], size: number): any[] {
    const resultArray = [];
    for (let i = 0; i < array.length; i += size) {
      resultArray.push(array.slice(i, i + size));
    }
    return resultArray;
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFincas = this.chunkArray(
      this.fincas.slice(startIndex, endIndex),
      this.pageSize
    );
  }

  alquilarFinca(finca: any) {
    const dialogRef = this.dialog.open(ReservaDialogComponent, {
      width: '400px',
      height: '400px',
      data: { fincaInfo: finca },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.actualizarReserva(result);
        console.log(
          `Reserva realizada por ${result.nombre} para ${finca.nombre}`
        );

        // Mostrar el Snackbar desde aquí
        this.mostrarSnackBar();
      } else {
        console.log('Modal de reserva cerrado');
      }
    });
  }

  mostrarSnackBar(): void {
    this.snackBar.open('¡Reserva exitosa!', 'Cerrar', {
      duration: 3000,
    });
  }
  actualizarReserva(result: any) {
    console.log('reserva actualizada');
  }
}
