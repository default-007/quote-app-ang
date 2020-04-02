import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  votes: number;
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() {
    this.votes = 0;
  }

  likeVote(): boolean {
    this.votes += 1;
    return false;
  }

  dislikeVote(): boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {}
}
