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
    { id: 1, name: 'Coders are fueled by coffee' },
    { id: 2, name: 'Lms is not a Bible' },
    { id: 3, name: 'Prepare to master the internet' }
  ];
}
