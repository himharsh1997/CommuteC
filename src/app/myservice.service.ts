import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
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

postdata( step1,step2) {
   this.http.post('https://private-8d2fe-assignment36.apiary-mock.com/routes',step1) ;
   this.http.post('https://private-8d2fe-assignment36.apiary-mock.com/trip',step2)
   console.log("data send");

}
}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }
}
