import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css'],
})
export class RegisterAccountComponent implements OnInit {
  accountForm: FormGroup;
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private accountService: AccountService
  ) {
    this.accountForm = this.formBuilder.group({
      balance: ['', [Validators.required, Validators.min(1000)]],
      accountNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.accountForm.invalid) {
      return;
    }

    const account: Account = {
      userId: 16,
      balance: this.accountForm.value.balance,
      accountNumber: this.accountForm.value.accountNumber,
    };

    this.accountService.makeAccounts(account).subscribe({
      next: (data) => {
        this.successMessage = 'Cuenta registrada correctamente';
        this.showSnackbar(this.successMessage);
        this.redirectToAccountList();
      },
      error: (e) => {
        const errorMessage = e.error.message;
        this.showSnackbar(errorMessage);
      },
    });
  }

  cancel(): void {
    this.redirectToAccountList();
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 2000,
      panelClass: 'snackbar-error',
    });
  }

  redirectToAccountList(): void {
    this.router.navigate(['/accounts']);
  }
}
