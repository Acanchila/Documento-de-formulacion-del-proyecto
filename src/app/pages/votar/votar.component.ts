import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotosService } from 'src/app/services/votos.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit {

  ngOnInit(): void {}

  // PERFILES QUE SE MUESTRAN EN LA VISTA
  perfiles = [
    { nombre: "voto  - #03", imagen: "assets/imagenes/img2.jpg", votado: false },
    { nombre: "voto - #04", imagen: "assets/imagenes/img1.jpg", votado: false },
    { nombre: "Voto en blanco", imagen: "assets/imagenes/Voto-en-blanco.jpg", votado: false }
  ];

  // Estado de la vista
  view: 'votar' | 'admin' = 'votar';

  // Modal contraseña
  showPasswordModal: boolean = false;
  passwordInput: string = '';
  adminPassword: string = '1234';

  constructor(private votosService: VotosService, private router: Router) {}

  // Cuando el perfil emite voteCast
  handleVote(perfil: any) {
    if (!perfil.votado) {
      perfil.votado = true;

      setTimeout(() => {
        perfil.votado = false;
      }, 1000);
    }
  }

  // Para mostrar el mensaje de gracias
  get algunVotoHecho(): boolean {
    return this.perfiles.some(p => p.votado);
  }

  // Confirmar admin
  confirmAdmin() {
    if (this.passwordInput === this.adminPassword) {
      this.view = 'admin';
    } else {
      alert('Contraseña incorrecta');
    }
    this.passwordInput = '';
    this.showPasswordModal = false;
  }

  cancelAdmin() {
    this.passwordInput = '';
    this.showPasswordModal = false;
  }
}

