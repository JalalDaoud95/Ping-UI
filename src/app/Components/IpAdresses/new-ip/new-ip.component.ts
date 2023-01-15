import { Component, OnInit } from '@angular/core';
import { NewIpModel } from 'src/app/models/NewIpModel';
import { PingIpService } from 'src/app/Services/ping-ip.service';

@Component({
  selector: 'app-new-ip',
  templateUrl: './new-ip.component.html',
  styleUrls: ['./new-ip.component.css']
})
export class NewIpComponent implements OnInit {
   
  AddNewIp : NewIpModel = {
    id : 0,
    ipDesc : '',
    newIp : ''
  };

  constructor(private pingIpService : PingIpService) { }

  ngOnInit(): void {
  }
  AddIp(){
    this.pingIpService.PostNewIp(this.AddNewIp).subscribe(
      {
        next: (AddNewIp) =>{
        console.log(AddNewIp);
      }
  });
  }
  DeleteIp(id : number) {
    this.pingIpService.RemoveIp(id).subscribe(
      {
        next :(id) =>{
          console.log(id);
        }
      }
    )
  }

}
