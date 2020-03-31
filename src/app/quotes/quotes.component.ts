import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'Coders are fueled by coffee', author: 'David Baldaci' },
    { id: 2, name: 'Lms is not a Bible', author: 'David Kahara' },
    { id: 3, name: 'Prepare to master the internet', author: 'Gynn Glen' }
  ];

  constructor() {}

  ngOnInit() {}
}
