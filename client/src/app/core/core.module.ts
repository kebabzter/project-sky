import { AuthGuard } from './guards/auth.guard';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatButtonModule
  ],
  exports:[
    HomeComponent,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [AuthGuard]
})
export class CoreModule { }
