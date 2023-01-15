 import { Component, OnInit } from '@angular/core';
import { ipAddress } from 'src/app/models/ipAddress.model';
import { PingIpService } from 'src/app/Services/ping-ip.service';

@Component({
  selector: 'app-ip-addresses-list',
  templateUrl: './ip-addresses-list.component.html',
  styleUrls: ['./ip-addresses-list.component.css']
})
export class IpAddressesListComponent implements OnInit {
  iptoping : ipAddress[] = [];

  constructor(private pingservice : PingIpService ) { }

  ngOnInit(): void {
    this.pingservice.getAllIp().subscribe({
      next : (iptoping) => {
        this.iptoping = iptoping; 
      },
      error : (response) => {
        console.log(response);
      }
    })
  }
}
    
 
/* import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
import { PingIpService } from 'src/app/Services/ping-ip.service';

@Component({
  selector: 'app-ip-addresses-list',
  templateUrl: './ip-addresses-list.component.html',
  styleUrls: ['./ip-addresses-list.component.css']
})
export class IpAddressesListComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private pingservice ) {
    this.form = fb.group({
      address: fb.array([]),
    });
  }

  addNewAddressGroup() {
    const add = this.form.get('http://localhost:5252/PingIp/IpToping') as FormArray;
    add.push(
      this.fb.group({
        ipAddress: [],
      })
    );
  }

  deleteAddressGroup(index: number) {
    const add = this.form.get('') as FormArray;
    add.removeAt(index);
  }

  submitIp() {
    if (!this.form.valid) {
      return;
    
    //console.log(this.form.get('http://localhost:5252/PingIp/IpToping').value);
     this.ipService.pingIp(this.form.get('http://localhost:5252/PingIp/IpToping').value);
  }
}
}
 */