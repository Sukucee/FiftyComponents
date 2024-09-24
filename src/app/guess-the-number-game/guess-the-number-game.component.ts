import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guess-the-number-game',
  standalone: true,
  imports: [],
  templateUrl: './guess-the-number-game.component.html',
  
})
export class GuessTheNumberGameComponent {
  numberToBeGuess = Math.round(Number(Math.random() * 10));
  @ViewChild('guess') guess!: ElementRef;
  result = '---';
  messages = ["Try again", "Try harder", "Go on"];

  makeAGuess(): void {
    const guessNumber = Number(this.guess.nativeElement.value);
    if (guessNumber === this.numberToBeGuess) {
      this.result = `You guess ${guessNumber} correct!`;
    } else {
      const randomIndex = Math.floor(Math.random() * this.messages.length);
      this.result = this.messages[randomIndex];
    }
  }
}
