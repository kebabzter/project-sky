import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // exports:[
  //   LoginComponent,
  //   RegisterComponent,
  //   LogoutComponent,
  //   ProfileComponent
  // ]
})
export class AuthModule { }
