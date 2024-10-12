import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './multiples/pages/main-page.component';
import { AuthComponent } from './auth/pages/main-page.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent }, // Ruta predeterminada (Home)
  { path: 'multiplos', component: MainComponent }, // Ruta para /about
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
