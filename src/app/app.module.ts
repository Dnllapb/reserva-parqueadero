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
@NgModule({
  declarations: [
    AppComponent,
    ReservaDialogComponent,
    ReservaDialogComponent,
    BoldInfoDirective,
    EditComponent
    

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
    MatSidenavModule
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