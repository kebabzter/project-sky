import { IUser } from './../../shared/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router){}
  errors: string | undefined = undefined;
  login(form: NgForm): void{
    this.authService.login(form.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.errors = err.error.error
      }
    })
  }
}
