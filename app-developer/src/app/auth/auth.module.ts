import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/main-page.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class AuthModule {}
