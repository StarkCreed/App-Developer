import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-main-name',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then((result) => {
        console.log('Inició sesión con Google:', result.user);
        // Aquí puedes manejar el resultado, como redirigir al usuario a una página específica
      })
      .catch((error) => {
        console.error('Error al iniciar sesión con Google:', error);
      });
  }
}
