import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-palindrome-checker',
  standalone: true,
  imports: [],
  templateUrl: './palindrome-checker.component.html',
  styleUrl: './palindrome-checker.component.css'
})
export class PalindromeCheckerComponent {
  @ViewChild('word') word!: ElementRef;
  result = '';

  checkPalindrome(): void {
      this.result =
          this.reverser(this.word.nativeElement.value) ===
          this.word.nativeElement.value
              ? `System: ${this.word.nativeElement.value} is a Palindrome`
              : `System: ${this.word.nativeElement.value} is not a Palindrome`;
  }

  reverser(str: string): string {
      let reversedWord = '';
      for (let i = str.length - 1; i >= 0; i--) {
          reversedWord += str[i];
      }
      return reversedWord;
  }
}
