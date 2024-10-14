import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-main-name',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}

  async loginWithGoogle(): Promise<void> {
    try {
      const result = await this.authService.loginWithGoogle();

      //Agrega el id del usuario
      localStorage.setItem('user', result.user!.uid);

      this.router.navigate(['multiplos']);
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  }
}
