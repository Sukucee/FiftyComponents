import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-what-letter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-letter.component.html',
 
})
export class WhatLetterComponent {
  randomLetter: string;
  userGuess: string = '';
  result: string | null = null;

  constructor() {
    this.randomLetter = this.generateRandomLetter();
  }

  generateRandomLetter(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  }

  checkGuess(): void {
    if (this.userGuess.toLowerCase() === this.randomLetter) {
      this.result = 'Correct!';
    } else {
      this.result = `Incorrect! The correct letter was: ${this.randomLetter}`;
    }
    this.randomLetter = this.generateRandomLetter(); // Generate a new random letter after every guess
  }
}
