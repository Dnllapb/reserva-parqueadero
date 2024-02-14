import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { FincasEditComponent } from './fincas/fincas-edit/fincas-edit.component';
import { SessionGuard } from './core/guards/session.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'nosotros', component: FincasEditComponent },
  {path: 'dashboard',component: PagesComponent,children:[{path: 'fincas',loadChildren: () =>
          import('./fincas/fincas.module').then((m) => m.FincasModule),
          canActivate:[SessionGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
