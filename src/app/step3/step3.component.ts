import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  providers:[MyserviceService]
})
export class Step3Component implements OnInit {

  constructor(private api:MyserviceService) {
   }
 mylist;

  ngOnInit() {
    this.api.getvendor().subscribe((res)=>{
     console.log(res);
     this.mylist = res;
       });
  }
  nameofvendor = null;
storevendor = (x)=>{
  console.log(x);
  this.nameofvendor  = (document.getElementById("" + x).childNodes[1] as HTMLElement).innerHTML ;
}
}
