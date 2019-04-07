import { Component, OnInit,Input } from '@angular/core';
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
  constructor(private api:MyserviceService) {
}

ngOnInit() {
       this.api.getdata().subscribe((res)=>{
        console.log(res);
        this.mylist = res;
});

}




}
