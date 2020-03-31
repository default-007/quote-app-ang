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
    new Quote(1, 'Coders are fueled by coffee', 'David', new Date(2020, 3, 31)),
    new Quote(2, 'Lms is not a Bible', 'David Kahara', new Date(2020, 3, 31)),
    new Quote(
      3,
      'Prepare to master the internet',
      'Gynn Glen',
      new Date(2020, 3, 31)
    )
  ];
}
