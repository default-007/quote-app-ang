import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes App';

  quotes: Quote[] = [
    new Quote(
      'Coders are fueled by coffee',
      'David Baldaci',
      'default-007',
      new Date(2020, 3, 31)
    ),
    new Quote(
      'Lms is not a Bible',
      'David Kahara',
      'John Doe',
      new Date(2020, 3, 31)
    ),
    new Quote(
      'Prepare to master the internet',
      'Gynn Glen',
      'Karrie',
      new Date(2020, 3, 31)
    )
  ];
}
