import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-anagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anagram.component.html',
  styleUrl: './anagram.component.css'
})
export class AnagramComponent {
  word1: string = '';
  word2: string = '';
  result: string | null = null;

  checkAnagram(): void {
    const formattedWord1 = this.word1.toLowerCase().replace(/[^a-z]/g, '');
    const formattedWord2 = this.word2.toLowerCase().replace(/[^a-z]/g, '');

    if (formattedWord1.length !== formattedWord2.length) {
      this.result = 'Not Anagrams';
      return;
    }

    const sortedWord1 = formattedWord1.split('').sort().join('');
    const sortedWord2 = formattedWord2.split('').sort().join('');

    this.result = sortedWord1 === sortedWord2 ? 'Anagrams' : 'Not Anagrams';
  }
}
