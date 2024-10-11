import { Component, Input } from '@angular/core';
import { Numero } from '../../interfaces/numero.interface';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss'],
})
export class ShowResultComponent {
  @Input()
  public listNumbers: Numero[] = [];
}
