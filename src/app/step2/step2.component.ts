import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import {interval} from 'rxjs';
import {startWith} from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  providers:[MyserviceService]
})
export class Step2Component implements OnInit {
  title = "step2-title";
  count = 0;
  mylist:any;
  names :any= [];
  searchText:any ;
  @Output() nameg = new EventEmitter<any>()
  constructor(private api:MyserviceService) {
   }

  ngOnInit() {
       this.api.getdata().subscribe((res)=>{
        console.log(res);
        this.mylist = res;
          });
}
pushname = (id)=>{
  console.log((document.getElementById("checkme" + id) as HTMLInputElement).value == "unchecked");

  if((document.getElementById("checkme" + id) as HTMLInputElement).value == "unchecked")
  {
    (document.getElementById("checkme" + id) as HTMLInputElement).checked = true;
    (document.getElementById("checkme" + id) as HTMLInputElement).value = "checked";
    this.names.push(id);
    this.count = this.count + 1;
    this.nameg.emit(this.names);

  }
  else if((document.getElementById("checkme" + id) as HTMLInputElement).value == "checked"){

    (document.getElementById("checkme" + id) as HTMLInputElement).checked = false;
    (document.getElementById("checkme" + id) as HTMLInputElement).value = "unchecked";
    this.names = this.names.filter((x)=>{ if (x != id){return x;} })
    this.count = this.count - 1;
    this.nameg.emit(this.names);

  }

console.log(this.names);
}




}
