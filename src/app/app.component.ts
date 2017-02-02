import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'app works!';
	
 componentCounterValue: number = 10;
  counterChange(event) {
    this.componentCounterValue = event;
  }
}
