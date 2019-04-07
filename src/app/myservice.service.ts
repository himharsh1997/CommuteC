import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Step1data} from './step1data';
@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
private _postsURL = "http://private-8d2fe-assignment36.apiary-mock.com/employees";
private vendor = "https://private-8d2fe-assignment36.apiary-mock.com/vendors";
  value1;
  value2 = "";

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get(this._postsURL);
  }
  getvendor(){
    return this.http.get(this.vendor);
  }
  steps1_data = {'date':"",'shift':"",'t_type':'Pick-up','a_type':'Nodal'};
  steps2_data;
  steps3_data;

poststep1( me) {
  return this.http.post(me,)
}
}
