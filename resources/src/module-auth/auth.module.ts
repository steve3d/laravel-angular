import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
