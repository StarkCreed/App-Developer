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
      spinner: 'crescent',
      duration: 2000,
    });

    await loading.present();

    try {
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

      await this.multiplesServicer.addDocument('multiplos', {
        resultados: this.multiples,
        uid: localStorage.getItem('user'),
      });

      this.multiples = [];
    } catch (error) {
      console.error('Error al emitir los resultados:', error);
    } finally {
      await this.loadingController.dismiss();
    }
  }
}
