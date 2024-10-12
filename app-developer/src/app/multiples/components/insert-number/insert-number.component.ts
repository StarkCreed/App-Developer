import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Numero } from '../../interfaces/numero.interface';
import { LoadingController } from '@ionic/angular';
import { MultiplesService } from 'src/app/services/multiples/multiples.service';

@Component({
  selector: 'app-insert-number',
  templateUrl: './insert-number.component.html',
  styleUrls: ['./insert-number.component.scss'],
})
export class InsertNumberComponent {
  constructor(
    private loadingController: LoadingController,
    private multiplesServicer: MultiplesService
  ) {}

  @Output()
  public results: EventEmitter<Numero[]> = new EventEmitter();

  public data: number = 0;
  public multiples: Numero[] = [];

  async emitResult(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'crescent', // Puedes cambiar el tipo de spinner
      duration: 2000, // Puedes ajustar la duración máxima
    });
    await loading.present();

    setTimeout(async () => {
      // Aquí iría tu lógica para obtener los resultados
      for (let index = 0; index <= this.data; index++) {
        if (index % 3 === 0) {
          this.multiples.push({
            numero: index,
            multiplo: 3,
            color: 'green',
            exist: true,
          });
        } else if (index % 5 === 0) {
          this.multiples.push({
            numero: index,
            multiplo: 5,
            color: 'red',
            exist: true,
          });
        } else if (index % 7 === 0) {
          this.multiples.push({
            numero: index,
            multiplo: 7,
            color: 'blue',
            exist: true,
          });
        } else {
          this.multiples.push({
            numero: index,
            multiplo: 0,
            color: 'black',
            exist: true,
          });
        }
      }

      this.results.emit(this.multiples);
      this.multiplesServicer.addDocument('multiplos', {
        resultados: this.multiples,
      });
      this.multiples = [];

      await this.loadingController.dismiss();
    }, 1000); // Simula una demora de 3 segundos para la carga de datos
  }
}
