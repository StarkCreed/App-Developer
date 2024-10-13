import { Component, OnInit } from '@angular/core';
import { Numero } from '../interfaces/numero.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiples-main-name',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainComponent {
  constructor(private logout: AuthService, private router: Router) {}
  public result: Numero[] = [];

  results(results: Numero[]): void {
    this.result = results;
  }

  logoutSecion(): void {
    try {
      this.logout.logout();
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  get listNumbers(): Numero[] {
    return this.result;
  }
}
