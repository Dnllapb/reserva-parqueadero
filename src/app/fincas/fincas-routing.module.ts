import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FincasListComponent } from './fincas-list/fincas-list.component';
import { FincasCreateComponent } from './fincas-create/fincas-create.component';
import { FincasEditComponent } from './fincas-edit/fincas-edit.component';
import { FincasDetailsComponent } from './fincas-details/fincas-details.component';

const routes: Routes = [
  { path: 'fincas', component: FincasListComponent },
  { path: 'fincaCreate', component: FincasCreateComponent },
  { path: 'fincaEdit', component: FincasEditComponent },
  { path: 'fincaDetails/id', component: FincasDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class fincaRoutingModule {}
