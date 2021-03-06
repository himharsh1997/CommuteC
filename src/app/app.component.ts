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
 type = "Next";
 s1_data ={'date':"",'shift':"",'t_type':"Pick-up",'a_type':"Nodal"};
 s2_data = [];
 s3_data;

data_tostep2 = [];
step2kadata = null;
vendorkadata = null;
 alldata1 = {"step1":this.s1_data,"step2":this.step2kadata}
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
        nameEventHandler($event:any){
          this.step2kadata = $event;

        }
        vendorEventHandler($event:any){
          this.vendorkadata = $event;

        }

  step = 1;

  //jQuery time
forward = ()=>{

if(this.s1_data.date != "" && this.s1_data.shift != "" && this.step == 1){
  if(this.step < 3){
this.step = this.step + 1;
}

document.getElementById("b1c").style.display = "inline";
document.getElementById("b1p").style.display = "none";
document.getElementById("baricon1").style.backgroundColor = "#73a6d1"
document.getElementById("baricon1").style.color = "white"
document.getElementById("bar1").style.backgroundColor = "#73a6d1"

}
else {}

if(this.step == 2 && this.step2kadata != null){
  if(this.step < 3){
this.step = this.step + 1;
this.type = "Submit";

}
document.getElementById("b2c").style.display = "inline";
document.getElementById("b2p").style.display = "none";
document.getElementById("baricon2").style.backgroundColor = "#73a6d1"
document.getElementById("baricon2").style.color = "white"
document.getElementById("bar2").style.backgroundColor = "#73a6d1"
}

if(this.step == 3 && this.vendorkadata != null){
this.da.postdata(this.s1_data,this.vendorkadata);
this.step = this.step + 1;
document.getElementById("b3c").style.display = "inline";
document.getElementById("b3p").style.display = "none";
document.getElementById("baricon3").style.backgroundColor = "#73a6d1"
document.getElementById("baricon3").style.color = "white"

}

}


backward = ()=>{

if(this.step > 1){

  if(this.step == 2){
    document.getElementById("b1c").style.display = "none";
    document.getElementById("b1p").style.display = "inline-flex";
    document.getElementById("baricon1").style.backgroundColor = "white"
    document.getElementById("baricon1").style.color = "#73a6d1"
    document.getElementById("bar1").style.backgroundColor = "#dae3ea"
  }
   if(this.step == 3){


    document.getElementById("b2c").style.display = "none";
    document.getElementById("b2p").style.display = "inline-flex";
    document.getElementById("baricon2").style.backgroundColor = "white";
    document.getElementById("baricon2").style.borderColor = "#73a6d1";
    document.getElementById("baricon2").style.color = "#73a6d1";
    document.getElementById("bar2").style.backgroundColor = "#dae3ea";
   }

 this.step = this.step - 1;

 }

}

}
