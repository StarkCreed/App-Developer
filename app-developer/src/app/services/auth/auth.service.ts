import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Método para hacer login con Google
  loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // Método para cerrar sesión
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Método para obtener el estado de autenticación
  getAuthState() {
    return this.afAuth.authState;
  }
}
