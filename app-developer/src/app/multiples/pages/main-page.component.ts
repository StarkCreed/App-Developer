import { Component, OnInit } from '@angular/core';
import { Numero } from '../interfaces/numero.interface';

@Component({
  selector: 'app-multiples-main-name',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainComponent {
  public result: Numero[] = [];

  results(results: Numero[]): void {
    this.result = results;
    console.log(results);
  }

  get listNumbers(): Numero[] {
    return this.result;
  }
}
