import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotee';
  quote: string[];
  quotes: Quote[] = [
    new Quote( 1, 'happiness','Love is that condition in which the happiness of another person is essential to your own',new Date(2019,2,4) ),
  new Quote( 2,  'thankfull','Gratitude can transform common days into thanksgivings, turn routine jobs into joy, and change ordinary opportunities into blessings.',new Date(2019,3,4)),
  new Quote( 3,'succeess','Success is not final; failure is not fatal: It is the courage to continue that counts',new Date(2019,6,8)),
  ];
  constructor() {
    this.quote = ['happiness', 'thankful', 'success']
  }
}
