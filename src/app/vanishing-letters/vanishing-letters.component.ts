import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vanishing-letters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vanishing-letters.component.html',
  
})
export class VanishingLettersComponent {
  inputWord: string = '';
  updatedWord: string = '';

  vanishLetter(): void {
    if (this.inputWord) {
      const indicesToRemove = new Set<number>();

      while (indicesToRemove.size < 3 && indicesToRemove.size < this.inputWord.length) {
        const randomIndex = Math.floor(Math.random() * this.inputWord.length);
        indicesToRemove.add(randomIndex);
      }
      this.updatedWord = this.inputWord
        .split('')
        .filter((_, index) => !indicesToRemove.has(index))
        .join('');
    }
  }
}
