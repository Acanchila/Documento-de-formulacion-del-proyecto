import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  perfiles = [
    { nombre: "Diego Andres Buitrago - #01", imagen: "assets/imagenes/img2.jpg", votado: false },
    { nombre: "Maria Isabella Suarez - #02", imagen: "/assets/imagenes/img.jpeg", votado: false },
    { nombre: "Juan Felipe Valencia - #03", imagen: "assets/imagenes/img3.jpg", votado: false },
    { nombre: "Jheferson Gutierres - #04", imagen: "assets/imagenes/img1.jpeg", votado: false },
    { nombre: "Voto en blanco", imagen: "assets/imagenes/Voto-en-blanco.jpg", votado: false }
  ];
  // Controla la vista actual: 'votar' o 'admin'
  view: 'votar' | 'admin' = 'votar';

  // Controla si se muestra el modal de contraseña
  showPasswordModal: boolean = false;
  // Variable para guardar lo que ingrese el usuario en el input
  passwordInput: string = '';

  // Contraseña de administración (cámbiala según lo necesites)
  adminPassword: string = '1234';

  // Muestra la vista de votación
  mostrarVotar() {
    this.view = 'votar';
  }

  // Muestra el modal de contraseña para la administración
  mostrarAdmin() {
    this.showPasswordModal = true;
  }

  // Se invoca al confirmar la contraseña
  confirmAdmin() {
    if (this.passwordInput === this.adminPassword) {
      this.view = 'admin';
      this.showPasswordModal = false;
      this.passwordInput = '';
    } else {
      alert('Contraseña incorrecta');
      this.passwordInput = '';
      this.showPasswordModal = false;
    }
  }

  // Permite cancelar el modal de contraseña
  cancelAdmin() {
    this.showPasswordModal = false;
    this.passwordInput = '';
  }

  // Maneja el estado de voto para mostrar el overlay de agradecimiento (30 segundos)
  voteDone: boolean = false;
  handleVote(perfil: any) {
    if (!perfil.votado) {
      perfil.votado = true;
      this.voteDone = true; // Activa el mensaje de agradecimiento
  
      setTimeout(() => {
        perfil.votado = false;
        this.voteDone = false; // Oculta el mensaje después del tiempo definido
      }, 1000);
    }
  }
    get algunVotoHecho(): boolean {
    return this.perfiles.some(p => p.votado);
  }
  
}
