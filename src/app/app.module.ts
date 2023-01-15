import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpAddressesListComponent } from './Components/IpAdresses/ip-addresses-list/ip-addresses-list.component';

import { NewIpComponent } from './Components/IpAdresses/new-ip/new-ip.component';
import { PingIpAddressesComponent } from './Components/ping-ip-addresses/ping-ip-addresses.component';

@NgModule({
  declarations: [
    AppComponent,
    IpAddressesListComponent, 
    NewIpComponent, PingIpAddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
