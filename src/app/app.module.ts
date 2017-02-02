import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counterComponent/counter.component';
import { Counter2Component } from './counterComponent2/counter2.component';
import { Counter3Component } from './counterComponent3/counter3.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Counter2Component,
    Counter3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
