import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpAddressesListComponent } from './Components/IpAdresses/ip-addresses-list/ip-addresses-list.component';
import { NewIpComponent } from './Components/IpAdresses/new-ip/new-ip.component';
import { PingIpAddressesComponent } from './Components/ping-ip-addresses/ping-ip-addresses.component';

const routes: Routes = [
  {
    path:'',
    component : IpAddressesListComponent
  },
  {
    path:'IpAddresses',
    component : IpAddressesListComponent
  },
  {
    path:'NewIp',
    component :  NewIpComponent 
  },
  {
    path: 'PingIp',
    component : PingIpAddressesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
