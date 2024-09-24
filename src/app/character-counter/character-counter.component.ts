import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-character-counter',
  standalone: true,
  imports: [],
  templateUrl: './character-counter.component.html',
 
})
export class CharacterCounterComponent {
  @ViewChild('text') text!: ElementRef;
  count = 0;
  countTheCharacter(): void {
      this.count = Number(String(this.text.nativeElement.value).length);
  }
}
