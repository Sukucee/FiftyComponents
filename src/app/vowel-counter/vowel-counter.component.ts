import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vowel-counter',
  standalone: true,
  imports: [],
  templateUrl: './vowel-counter.component.html',
  styleUrl: './vowel-counter.component.css'
})
export class VowelCounterComponent {
  vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	Result = 0;

	@ViewChild('inputWord') inputWord!: ElementRef;

	countVowels(): void {
		const word = String(this.inputWord.nativeElement.value);
		this.Result = 0;
		for (let i = 0; i < word.length; i++) {
			if (this.vowels.includes(word[i])) {
				this.Result += 1;
			}
		}
	}
}
