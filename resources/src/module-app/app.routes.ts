import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', loadChildren: () => import('../module-auth/auth.module').then(m => m.AuthModule)}
];

