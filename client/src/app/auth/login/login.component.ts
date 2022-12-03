import { IUser } from './../../shared/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    
  }

  loginHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { email, password } = form.value;
    this.authService.login(email!, password!)
    .subscribe(() => {
      this.router.navigate(['/'])
    })
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(4)]);
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
