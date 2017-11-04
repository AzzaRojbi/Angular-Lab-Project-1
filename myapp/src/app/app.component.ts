import { Component } from '@angular/core';

export class PlayingCard {
    cardVal: string;
    suit: string;
}

@Component({
    selector: 'app-root',
    // Multi-line content allowed with back ticks.
    template: `<h1>Hello world!  {{title}} <br/>
              <!-- Show cards in unordered list. -->
              <ul><li *ngFor="let card of cards">{{card.cardVal}}</li></ul>`
})

export class AppComponent {
    public title = 'This is Angular 4!';
    // Include card data in collection as public property.
    public cards = CARDS;
}

// Define card data.
var CARDS: PlayingCard[] = [
    { cardVal: "Ace", suit: "Spades" },
    { cardVal: "Two", suit: "Clubs" },
    { cardVal: "Six", suit: "Hearts" },
];