import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'happiness quote', 'Love is that condition in which the happiness of another person is essential to your own',new Date(2019,2,4)),
    new Quote(2, 'thankfull quote', 'Gratitude can transform common days into thanksgivings, turn routine jobs into joy, and change ordinary opportunities into blessings.',new Date(2019,3,4)),
    new Quote(3, 'succeess quote' , 'Success is not final; failure is not fatal: It is the courage to continue that counts',new Date(2019,6,8)),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completequotes(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
