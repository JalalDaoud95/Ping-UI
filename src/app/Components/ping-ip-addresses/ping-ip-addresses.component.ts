import { Component, OnInit } from '@angular/core';
import { ipAddress } from 'src/app/models/ipAddress.model';
import { PingIpService } from 'src/app/Services/ping-ip.service';

@Component({
  selector: 'app-ping-ip-addresses',
  templateUrl: './ping-ip-addresses.component.html',
  styleUrls: ['./ping-ip-addresses.component.css']
})
export class PingIpAddressesComponent implements OnInit {
  pingedIp : ipAddress[] = []

  constructor(private pingService : PingIpService) { }

  ngOnInit(): void {
    this.pingService.pingIp().subscribe({
      next : (pingedIp) => {
        this.pingedIp = pingedIp;
      },
      error : (response) => {
        console.log(response);
      }
      
    })
  }

}
