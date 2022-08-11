import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  user!: User;
  hasAccount = false
  token = '';
  registerForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'surname': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  })

  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  })
  constructor() {}

  ngOnInit(): void {
  }

  openLoginPage(): void{
    this.hasAccount = !this.hasAccount
  }

  register(): void{
    this.user = this.registerForm.getRawValue()
    this.user.token = 'asfasfasfasfasfasfasfasafasf'
    console.log(this.user)
  }

}
