import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { FincasEditComponent } from './fincas/fincas-edit/fincas-edit.component';
import { SessionGuard } from './core/guards/session.guard';
import { SequenceError } from 'rxjs';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { ListaComponent } from './auth/register-user/lista/lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'nosotros', component: FincasEditComponent },
  {path: 'fincas',component:FincasEditComponent,canActivate:[SessionGuard]},
  {path:'registrar',component:RegisterUserComponent},
  {path:'listas',component:ListaComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
