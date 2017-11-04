import { Component } from '@angular/core';

export class PlayingCard {
    cardVal: string;
    suit:    string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cool World';
  name = 'Azza';
}
