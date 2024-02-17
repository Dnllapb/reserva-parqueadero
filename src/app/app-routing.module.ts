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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'nosotros', component: FincasEditComponent },
  {path: 'fincas',component:FincasEditComponent,canActivate:[SessionGuard]},
  {path:'registrarUsuario',component:RegisterUserComponent},
  {path:'listas',component:ListaComponent},
  {path:'Actualizar/:id',component:EditComponent},
  {path: 'dashboard',component: PagesComponent,children: [
    {
      path: 'fincas',loadChildren: () =>import('./fincas/fincas.module').then((m) => m.FincasModule),
    },
  ],
},
{path:'reservaNueva',component:FincasCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
