import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { FincasModule } from './fincas/fincas.module';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ReservaDialogComponent } from './reserva-dialog/reserva-dialog.component';
import { BoldInfoDirective } from './bold-info.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { ReservationsService } from './services/reservation.service';
import { FincasService } from './fincas/fincas.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectSessionInterceptor } from './core/interceptors/inject-session.interceptor';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditComponent } from './register-user/edit/edit.component';
import { VehicleComponent } from './vehicle/vehicle/vehicle.component';
import { ReserveComponent } from './reserve/reserve/reserve.component';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './auth/register-user/lista/lista.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { ListReserveComponent } from './reserve/list-reserve/list-reserve.component';
@NgModule({
  declarations: [
    AppComponent,
    ReservaDialogComponent,
    ReservaDialogComponent,
    BoldInfoDirective,
    EditComponent,
    VehicleComponent,
    ReserveComponent,
    ListaComponent,
    HeaderComponent,
    FooterComponent,
    ListReserveComponent

    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    FincasModule,
    AuthModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,    
    CommonModule,
    MatFormFieldModule,
    MatCardModule,    
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule
  ],
  providers: [
    ReservationsService,
    FincasService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}