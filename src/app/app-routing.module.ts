import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { CryptoSettingsComponent } from './crypto-settings/crypto-settings.component';

const routes: Routes = [
  { path: 'list', component: CryptoListComponent },
  { path: 'details/:id', component: CryptoDetailsComponent },
  { path: 'settings/:id', component: CryptoSettingsComponent },
  { path: '',   redirectTo: 'list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
