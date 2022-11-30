import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent{

  constructor(private router: Router, private authService: AuthService) { 
    this.authService.user = null;
    this.router.navigate(['/']);
  }


}
