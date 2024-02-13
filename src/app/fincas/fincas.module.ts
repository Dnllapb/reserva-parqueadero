import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FincasCreateComponent } from './fincas-create/fincas-create.component';
import { FincasListComponent } from './fincas-list/fincas-list.component';
import { FincasDetailsComponent } from './fincas-details/fincas-details.component';
import { FincasEditComponent } from './fincas-edit/fincas-edit.component';
import { fincaRoutingModule } from './fincas-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    FincasCreateComponent,
    FincasListComponent,
    FincasDetailsComponent,
    FincasEditComponent,
  ],
  imports: [
    CommonModule,
    fincaRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatSidenavModule,
    ReactiveFormsModule,
  ],
})
export class FincasModule {}
