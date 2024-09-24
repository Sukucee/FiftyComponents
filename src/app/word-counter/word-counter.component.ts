import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-word-counter',
  standalone: true,
  imports: [],
  templateUrl: './word-counter.component.html',
  styleUrl: './word-counter.component.css'
})
export class WordCounterComponent {
  @ViewChild('wordsInput') wordsInput!: ElementRef;
    Result = 0;

    countWords(): void {
        this.Result = String(this.wordsInput.nativeElement.value).split(
            ' '
        ).length;
    }
}
