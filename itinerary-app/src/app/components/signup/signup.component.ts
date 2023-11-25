// signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupRequestDto } from '../../models/signup-request.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  accountForm: FormGroup;
  successMessage: string = '';
  
  signupRequest: SignupRequestDto = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService) {
      this.accountForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.min(1000)]],
        accountNumber: ['', Validators.required],
      });
    }

  signup() {
    this.authService.signup(this.signupRequest).subscribe(response => {
      // Handle successful signup response
      console.log('User signed up:', response);
    }, error => {
      // Handle error
      console.error('Error during signup:', error);
    });
  }
}