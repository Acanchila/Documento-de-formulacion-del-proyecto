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
  @Input() disabled: boolean = false; // Para deshabilitar el botón

  @Output() voteCast = new EventEmitter<void>(); // Emite cuando se realiza un voto

  constructor(private votosService: VotosService) { }

  votar() {
    if (this.disabled) return; // Si está deshabilitado, no hace nada
    this.votosService.votar(this.nombre);
    this.voteCast.emit();
  }
}
