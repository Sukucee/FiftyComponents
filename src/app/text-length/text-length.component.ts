import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-length',
  standalone: true,
  imports: [],
  templateUrl: './text-length.component.html',
  styleUrl: './text-length.component.css'
})
export class TextlengthComponent {
  @ViewChild('inputText') inputText!: ElementRef;
  Length = 0;

  countLength(): void {
      this.Length = Number(String(this.inputText.nativeElement.value).length);
  }
}
