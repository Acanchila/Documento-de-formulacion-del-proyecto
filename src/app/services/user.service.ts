import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interface/userModel';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {}

  async register(email: string, password: string, role: 'admin' | 'user' = 'user') {
  const usersRef = this.firestore.collection('users');

  // Verificar si el usuario ya existe
  const result = await usersRef.ref.where('email', '==', email).get();
  if (!result.empty) throw new Error('El usuario ya existe');

  // Guardar usuario con rol
  return usersRef.add({ email, password, role });
}


  async login(email: string, password: string) {
    const usersRef = this.firestore.collection('users');

    const result = await usersRef.ref.where('email', '==', email).get();

    if (result.empty) {
      throw new Error('Usuario no encontrado');
    }

    const user = result.docs[0].data() as User;


    if (user['password'] !== password) {
      throw new Error('Contraseña incorrecta');
    }

     localStorage.setItem('user', JSON.stringify({ email, role: user['role'] }));
  return true;
}

// Nuevo método para obtener rol
getRole(): 'admin' | 'user' | null {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return user ? user.role : null;
}

  logout() {
    localStorage.removeItem('user');
  }

  isLogged() {
    return localStorage.getItem('user') !== null;
  }

   async getAdminPassword(): Promise<string | null> {
    const doc = await this.firestore.collection('config').doc('admin').get().toPromise();


    if (!doc.exists) return null;
    return doc.data()?.['password'] || null;
  }
}
