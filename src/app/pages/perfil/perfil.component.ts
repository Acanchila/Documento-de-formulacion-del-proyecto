import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VotosService } from 'src/app/services/votos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  @Input() nombre: string = '';
  @Input() imagen: string = '';
  @Input() disabled: boolean = false;

  // ESTE es el nombre correcto porque tu votar.component.html espera "voteCast"
  @Output() voteCast = new EventEmitter<void>();

  constructor(private votosService: VotosService) {}

  votar() {
    if (this.disabled) return;

    // Guardar voto en el servicio
    this.votosService.votar(this.nombre);

    // Emitir evento al componente padre (votar.component)
    this.voteCast.emit();
  }
}

