import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './multiples/pages/main-page.component';
import { AuthComponent } from './auth/pages/main-page.component';
import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToLogin = () => redirectLoggedInTo(['/multiplos']);

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToLogin },
  },
  {
    path: 'multiplos',
    component: MainComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
