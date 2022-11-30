import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // form = this.fb.group({
  //   username: ['', [Validators.required, Validators.minLength(5)]],
  //   email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
  //   ext: [''],
  //   tel: [''],
  //   pass: this.fb.group({
  //     password: ['', [Validators.required, Validators.minLength(5)]],
  //     rePassword: []
  //   }, {
  //     validators: [sameValueGroupValidator('password', 'rePassword')]
  //   })
  // });

  constructor(private fb: FormBuilder) { }

  // registerHandler() {
  //   console.log(this.form.value);
  // }
}
