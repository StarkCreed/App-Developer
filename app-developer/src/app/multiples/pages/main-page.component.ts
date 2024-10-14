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
  //Dependencias inyectadas
  constructor(private logout: AuthService, private router: Router) {}

  public result: Numero[] = [];

  results(results: Numero[]): void {
    this.result = results;
  }

  async logoutSesion(): Promise<void> {
    await this.logout.logout();

    //Borra el id del usuario
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  get listNumbers(): Numero[] {
    return this.result;
  }
}
