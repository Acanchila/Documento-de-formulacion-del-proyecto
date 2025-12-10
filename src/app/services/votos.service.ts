import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  constructor(private afs: AngularFirestore) { }

  async votar(nombre: string) {
    try {
      // Usamos el ID del documento como el nombre del candidato
      const docRef = this.afs.collection('votos').doc(nombre);
      const docSnapshot = await docRef.get().toPromise();

      if (docSnapshot.exists) {
        const currentVotos = (docSnapshot.data() as any)?.votos || 0;
        await docRef.set({ votos: currentVotos + 1 }, { merge: true });
      } else {
        await docRef.set({ candidato: nombre, votos: 1 });
      }
      console.log(`Voto registrado para ${nombre}`);
    } catch (error) {
      console.error('Error al votar:', error);
    }
  }

  obtenerVotos(): Observable<any[]> {
    return this.afs.collection('votos', ref => ref.orderBy('votos', 'desc'))
      .valueChanges({ idField: 'id' })
      .pipe(
        tap((data: any[]) => {
          console.log('Datos recibidos:', data);
          console.log('Número de documentos:', data.length);
        }),
        catchError((error: any) => {
          console.error('Error en la consulta:', error);
          return of([]);
        })
      );
  }

  async eliminarVotos(): Promise<void> {
    try {
      // Obtiene todos los documentos de la colección "votos"
      const snapshot = await this.afs.collection('votos').ref.get();
      // Crea un batch para eliminar todos los documentos de una sola vez
      const batch = this.afs.firestore.batch();
      snapshot.forEach(doc => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      console.log('Todos los votos han sido eliminados.');
    } catch (error) {
      console.error('Error al eliminar votos:', error);
    }
  }
}
