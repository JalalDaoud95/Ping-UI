import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ipAddress } from '../models/ipAddress.model';
import { NewIpModel } from '../models/NewIpModel';

@Injectable({
  providedIn: 'root'
})
export class PingIpService {
  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }
  getAllIp() : Observable<ipAddress[]>
  {
    return this.http.get<ipAddress[]>(this.baseApiUrl + '/PingIp/IpAddresses');
  }


   PostNewIp(AddNewIp : NewIpModel) : Observable<NewIpModel> {
    return this.http.post<NewIpModel>(this.baseApiUrl + '/PingIp/NewIp', AddNewIp);

   }

   RemoveIp(id : number )   : Observable<ipAddress> 
   {
      return this.http.delete<ipAddress>(this.baseApiUrl + '/PingIp/IpToRemove/' + id)
   }

   
   pingIp() : Observable<ipAddress[]>
  {
    return this.http.get<ipAddress[]>(this.baseApiUrl + '/PingIp/IpToPing')
  } 
} 
/* import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PingIpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private _http: HttpClient) {}

  pingIp(ip: any[]) {
    console.log(ip);
     return this._http.post<string[]>('',JSON.stringify(ip),this.httpOptions);
  }
} */

