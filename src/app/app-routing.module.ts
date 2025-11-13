import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AdministracionVotosComponent } from './pages/administracion-votos/administracion-votos.component';

const routes: Routes = [
  { path: ' ', component: PerfilComponent }, // Página para votar
  { path: 'administracion-votos', component: AdministracionVotosComponent }, // Página para ver votos
  { path: '**', redirectTo: 'perfil', pathMatch: 'full' } // Redirigir a perfil si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
