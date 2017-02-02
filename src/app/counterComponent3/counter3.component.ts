import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.css']
})
export class Counter3Component implements OnInit {

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
