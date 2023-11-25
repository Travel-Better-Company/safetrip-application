// signin.component.ts
import { Component } from '@angular/core';
import { SigninRequestDto } from '../../models/signin-request.dto';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})

export class SigninComponent {
  signinRequest: SigninRequestDto = {
    email: '',
    password: '',
  };

  accountForm: FormGroup;
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.accountForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signin() {
    this.authService.signin(this.signinRequest).subscribe(
      (response) => {
        // Handle successful signin response
        console.log('User signed in:', response);
      },
      (error) => {
        // Handle error
        console.error('Error during signin:', error);
      }
    );
  }
}