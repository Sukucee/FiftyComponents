import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-word-shuffler',
  standalone: true,
  imports: [],
  templateUrl: './word-shuffler.component.html',
  
})
export class WordShufflerComponent {
  @ViewChild('word') word!: ElementRef;
    Result = '';

    shuffleLetters() {
        const word = String(this.word.nativeElement.value);
        let array = word.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.Result = array.join('');
    }

    private shuffle(word: string): string {
        let array = word.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }
}
