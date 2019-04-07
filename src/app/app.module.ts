import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { MyserviceService } from './myservice.service';
import { FilterPipe }from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
 FormsModule 
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
