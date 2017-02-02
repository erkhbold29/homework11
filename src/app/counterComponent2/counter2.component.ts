import { Component, Input, Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component {

  constructor() { }
    
  @Input()
  counterValue: number = 0;
  
  @Output('update')
  counterChange: EventEmitter<number> = new EventEmitter<number>();
  
  increment(){
	 this.counterValue++;  
	 this.counterChange.emit(this.counterValue);
  }
    
  decrement(){
	 this.counterValue--;
     this.counterChange.emit(this.counterValue);
  }

}
