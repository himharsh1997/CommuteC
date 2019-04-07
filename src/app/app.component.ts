import { Component } from '@angular/core';
import {Step1Component} from '../app/step1/step1.component';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MyserviceService]
})
export class AppComponent {
  title = 'CommuteC';
 constructor(private da:MyserviceService){

 }
 s1_data ={'date':"",'shift':"",'t_type':"Pick-up",'a_type':"Nodal"};
 s2_data;
 s3_data;
data_tostep2 = [{'name':'Himanshu'}];

 ngOnInit(): void {



 }
 dateEventHander($event: any) {
     this.s1_data.date = $event;
   }
  shiftEventHander($event: any) {
       this.s1_data.shift = $event;
     }
  t_typeEventHander($event: any) {
         this.s1_data.t_type = $event;
       }
  addressEventHander($event: any) {
           this.s1_data.a_type = $event;
         }

  step = 1;

  //jQuery time
forward = ()=>{


if(this.s1_data.date != "" && this.s1_data.shift != ""){
this.step = this.step + 1;
document.getElementById("baricon1").innerHTML='<i class="fa fa-check b1c" id="b1c" aria-hidden="true" style="display:inline;"></i>';
document.getElementById("b1c").style.display = "inline";
document.getElementById("baricon1").style.backgroundColor = "#73a6d1"
document.getElementById("baricon1").style.color = "white"
document.getElementById("bar1").style.backgroundColor = "#73a6d1"

}
else {}

}


backward = ()=>{

}

}
