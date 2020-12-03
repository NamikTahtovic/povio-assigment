import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { CryptoSettingsComponent } from './crypto-settings/crypto-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoListComponent,
    CryptoDetailsComponent,
    CryptoSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
