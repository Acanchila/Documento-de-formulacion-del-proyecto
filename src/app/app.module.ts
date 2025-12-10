import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// IMPORTACIONES DE LA API COMPATIBLE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AdministracionVotosComponent } from './pages/administracion-votos/administracion-votos.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { VotarComponent } from './pages/votar/votar.component';
// Asegúrate de declarar también tus otros componentes, por ejemplo:


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    AdministracionVotosComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    VotarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
