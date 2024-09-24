import { Component } from '@angular/core';

@Component({
  selector: 'app-letters-and-numbers',
  standalone: true,
  imports: [],
  templateUrl: './letters-and-numbers.component.html',
  styleUrl: './letters-and-numbers.component.css'
})
export class LettersAndNumbersComponent {
  outputNumbers: string = '';

  convert(inputText: string): void {
    this.outputNumbers = inputText
      .toLowerCase()
      .split('')
      .map(letter => letter.charCodeAt(0) - 96) // Convert letter to number
      .filter(num => num > 0) // Filter out non-letter characters
      .join(' ');
  }
}


