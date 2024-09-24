import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-minigame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minigame.component.html',
  styleUrl: './minigame.component.css'
})
export class MinigameComponent {
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  choices: string[] = ['rock', 'paper', 'scissors'];

  playGame(playerChoice: string): void {
    this.playerChoice = playerChoice;
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];

    this.result = this.calculateWinner();
  }

  calculateWinner(): string {
    if (this.playerChoice === this.computerChoice) {
      return "It's a tie!";
    } else if (
      (this.playerChoice === 'rock' && this.computerChoice === 'scissors') ||
      (this.playerChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.playerChoice === 'scissors' && this.computerChoice === 'paper')
    ) {
      return 'You won!';
    } else {
      return 'Universe won!';
    }
  }
}

