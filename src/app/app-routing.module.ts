import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositCoinsComponent } from './deposit-coins/deposit-coins.component';
import { DepositNotesComponent } from './deposit-notes/deposit-notes.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  { path: '', redirectTo: 'balance', pathMatch: 'full' },
  { path: 'balance', component: BalanceComponent },
  {
    path: 'deposit',
    component: DepositComponent,

    children: [
      { path: 'coins', component: DepositCoinsComponent },
      { path: 'notes', component: DepositNotesComponent },
    ],
  },

  { path: 'withdraw', component: WithdrawComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
