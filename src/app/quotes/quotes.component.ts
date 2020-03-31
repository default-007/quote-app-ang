import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Coders are fueled by coffee',
      'David Baldaci',
      new Date(2020, 3, 31)
    ),
    new Quote(2, 'Lms is not a Bible', 'David Kahara', new Date(2020, 3, 31)),
    new Quote(
      3,
      'Prepare to master the internet',
      'Gynn Glen',
      new Date(2020, 3, 31)
    )
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}
}
