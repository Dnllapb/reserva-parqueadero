import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { FincasModule } from './fincas/fincas.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ReservaDialogComponent } from './reserva-dialog/reserva-dialog.component';
import { BoldInfoDirective } from './bold-info.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { ReservationsService } from './services/reservation.service';
import { FincasService } from './fincas/fincas.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from './core/interceptors/inject-session.interceptor';
import { ListaComponent } from './auth/register-user/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservaDialogComponent,
    ReservaDialogComponent,
    BoldInfoDirective,
    ListaComponent,
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
    FormsModule
  ],
  providers: [ReservationsService, FincasService,CookieService,
    {
        provide:HTTP_INTERCEPTORS,
        useClass:InjectSessionInterceptor,
        multi:true

    }
      
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
