import { Component, OnInit, Injectable,Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  providers: [MyserviceService]
})

export class Step1Component implements OnInit {

   @Output() date = new EventEmitter<string>();
   @Output() shift = new EventEmitter<string>();
   @Output() trip = new EventEmitter<string>();
   @Output() address = new EventEmitter<string>();

  constructor(private main: MyserviceService) { }

  ngOnInit() {
  }

  data  = {'date':'','shift':'','t_type':'','a_type':''};

  display_date = (ev)=>{
     this.date.emit(ev.target.value)

     $('#date').removeClass('date');
     $('#date').addClass('datec');
     document.getElementById('date').innerHTML = ev.target.value;
     this.data.date = ev.target.value;
     console.log(this.data);
     this.data.date = ev.target.value ;
     this.main.steps1_data.date = ev.target.value;

  }

  dis_shift = (evs)=>{
 this.shift.emit(evs.target.innerHTML)
  document.getElementById('dropbtn').innerHTML = evs.target.innerHTML;
    $('.dropbtn').css('innerHTML',evs.target.innerHTML);
    this.data.shift = evs.target.innerHTML ;
    this.main.steps1_data.shift = evs.target.innerHTML;

  }

  trip_type = (evt) =>{

   if(evt.target.innerHTML == 'Pick-up')
   {
     $('#pup').removeClass('to_active_not').addClass('to_active');
     $('#dof').removeClass('to_active').addClass('to_active_not');
       this.data.t_type = 'Pick-up' ;
       this.main.steps1_data.t_type = 'Pick-up';
       this.trip.emit('Pick-up')
   }
   else if(evt.target.innerHTML == 'Drop-off'){
    $('#dof').removeClass('to_active_not').addClass('to_active');
    $('#pup').removeClass('to_active').addClass('to_active_not');
    this.data.t_type = 'Drop-off' ;
    this.main.steps1_data.t_type= 'Drop-off';
    this.trip.emit('Drop-off')
   }

  }

  ad_type = (evt) =>{

    if(evt.target.innerHTML == 'Nodal')
    {
      $('#no').removeClass('to_active_not').addClass('to_active');
      $('#ho').removeClass('to_active').addClass('to_active_not');
      this.data.a_type = 'Nodal' ;
      this.main.steps1_data.a_type = evt.target.innerHTML;
      this.address.emit('Nodal')
    }
    else if(evt.target.innerHTML == 'Home'){
     $('#ho').removeClass('to_active_not').addClass('to_active');
     $('#no').removeClass('to_active').addClass('to_active_not');
     this.data.a_type = 'Home' ;
     this.main.steps1_data.a_type = evt.target.innerHTML;
     this.address.emit('Home')
    }
 console.log(this.main.steps1_data);
   }

}
