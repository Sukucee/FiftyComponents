import { Component } from '@angular/core';

@Component({
  selector: 'app-random-quote-display',
  standalone: true,
  imports: [],
  templateUrl: './random-quote-display.component.html',
  
})
export class RandomQuoteDisplayComponent {
  quotesArray = [
		'Life is like a rainbow, you need a sunshine and storm to be able to see the beuty of it',
		'I finally got eight hours of sleep! It only took me three days.',
		'Some people wake up feeling like a million bucks. Me? I wake up feeling like a coupon that expired yesterday.',
		'Im on a seafood diet. I see food, and I eat it.',
		'If were not supposed to have midnight snacks, why is there a light in the fridge?',
		'I put the pro in procrastination!',
		'The early bird gets the worm, but the second mouse gets the cheese.',
		'Im not lazy Im just on energy-saving mode.',
		'I used to have superpowers, but my therapist took them away.',
		'I like long walks… away from awkward conversations.',
	];
	Quote = '';

	generateRandomQuote(): void {
		this.Quote =
			this.quotesArray[
				Math.floor(Math.random() * this.quotesArray.length)
			];
	}
}
