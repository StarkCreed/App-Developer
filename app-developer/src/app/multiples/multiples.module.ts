import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MainComponent } from './pages/main-page.component';
import { InsertNumberComponent } from './components/insert-number/insert-number.component';
import { ShowResultComponent } from './components/show-result/show-result.component';

@NgModule({
  declarations: [MainComponent, InsertNumberComponent, ShowResultComponent],
  exports: [MainComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class MultiplesPageModule {}
