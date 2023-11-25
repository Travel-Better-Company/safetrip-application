import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css'],
})
export class ListAccountComponent implements OnInit {
  dataSource: MatTableDataSource<Account> = new MatTableDataSource<Account>();

  displayedColumns: string[] = ['id', 'balance', 'accountNumber'];
  noDataMessage: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.getAllAccounts();
  }

  getAllAccounts(): void {
    this.accountService.getAllAccountsByUser().subscribe((accounts) => {
      this.dataSource.data = accounts;
    });
  }
}
