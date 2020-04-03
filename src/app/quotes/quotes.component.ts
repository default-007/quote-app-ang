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
    ),
    new Quote(
      'You can, you should, and if you are brave enough to start, you will.',
      'Stephen King',
      'John Paul',
      new Date(2020, 4, 2)
    )
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit() {}
}
