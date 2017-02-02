import { Component } from '@angular/core';
import { CounterComponent } from './counterComponent/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = CounterComponent;
}
