import { IUser } from './../../shared/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
    this.authService.user = {
      username: 'User',
      email: 'email@gmail.com'
    } as any;
    // this.router.navigate(['/']);
  }
}
