import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccountComponent } from './list-account/list-account.component';
import { RegisterAccountComponent } from './register-account/register-account.component';

const routes: Routes = [
  { path: '', component: ListAccountComponent },
  { path: 'register-account', component: RegisterAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
