import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { FincasEditComponent } from './fincas/fincas-edit/fincas-edit.component';
import { SessionGuard } from './core/guards/session.guard';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { ListaComponent } from './auth/register-user/lista/lista.component';
import { EditComponent } from './register-user/edit/edit.component';
import { FincasCreateComponent } from './fincas/fincas-create/fincas-create.component';
import { VehicleComponent } from './vehicle/vehicle/vehicle.component';
import { ReserveComponent } from './reserve/reserve/reserve.component';
import { ListReserveComponent } from './reserve/list-reserve/list-reserve.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'nosotros', component: FincasEditComponent },
  {path: 'fincas',component:FincasEditComponent,canActivate:[SessionGuard]},
  {path:'registrarUsuario',component:RegisterUserComponent},
  {path:'listas',component:ListaComponent},
  {path:'actualizar/:id',component:EditComponent},
  {path: 'dashboard',component: PagesComponent,children: [
    {
      path: 'fincas',loadChildren: () =>import('./fincas/fincas.module').then((m) => m.FincasModule),
    },
  ],
},
{path:'reservaNueva',component:ReserveComponent},
{path:'nuevoVehiculo',component:VehicleComponent},
{path:'listaReservas',component:ListReserveComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
