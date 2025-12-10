import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AdministracionVotosComponent } from './pages/administracion-votos/administracion-votos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VotarComponent } from './pages/votar/votar.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard], data: { roles: ['user','admin'] } },
  { path: 'votar', component: VotarComponent, canActivate: [AuthGuard], data: { roles: ['user','admin'] } },
  { path: 'administracion-votos', component: AdministracionVotosComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
