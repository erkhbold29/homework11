import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  
  public counterValue : number = 0;
    
  increment(){
	 this.counterValue += 1;
  }
    
  decrement(){
     this.counterValue -= 1;
  }

  ngOnInit() {
  }

}
