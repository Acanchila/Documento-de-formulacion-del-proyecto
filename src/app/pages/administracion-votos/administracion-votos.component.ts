import { Component, OnInit } from '@angular/core';
import { VotosService } from 'src/app/services/votos.service';

@Component({
  selector: 'app-administracion-votos',
  templateUrl: './administracion-votos.component.html',
  styleUrls: ['./administracion-votos.component.css']
})
export class AdministracionVotosComponent implements OnInit {
  votos: any[] = [];

  constructor(private votosService: VotosService) { }

  ngOnInit(): void {
    this.obtenerVotos();
  }

  // Agregamos el método para obtener votos
  obtenerVotos(): void {
    this.votosService.obtenerVotos().subscribe(
      data => {
        console.log('Votos obtenidos:', data);
        this.votos = data;
      },
      error => console.error('Error al obtener votos:', error)
    );
  }

  async eliminarTodosLosVotos(): Promise<void> {
    if (confirm('¿Estás seguro de que deseas eliminar todos los votos?')) {
      await this.votosService.eliminarVotos();
      this.obtenerVotos(); // Actualiza la lista después de eliminar
    }
  }
}
