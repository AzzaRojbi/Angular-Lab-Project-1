import { Component } from '@angular/core';

export class PlayingCard {
    cardVal: string;
    suit: string;
}

@Component({
    selector: 'app-root',
    // Multi-line content allowed with back ticks.
    template: `<h1>Hello world!  {{title}} </h1>

    <table>
        <thead>
        <tr>
          <th>{{ 'Card' }}</th>
          <th>{{ 'Suit' }}</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let card of cards; let i=index">
          <td>{{ card.cardVal }}</td>
          <td>{{ card.suit }}</td>
        </tr>  
        </tbody>  
    </table>
       `
})

export class AppComponent {
    public title = 'This is Angular 5!';
    // Include card data in collection as public property.
    public cards = CARDS;
}

// Define card data.
var CARDS: PlayingCard[] = [
    { cardVal: "Ace", suit: "Spades" },
    { cardVal: "Two", suit: "Clubs" },
    { cardVal: "Six", suit: "Hearts" },
];