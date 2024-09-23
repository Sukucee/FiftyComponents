import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-even-odd-checker',
  standalone: true,
  imports: [],
  templateUrl: './even-odd-checker.component.html',
 
})
export class EvenOddCheckerComponent {
  @ViewChild('inputNumber') inputNumber!: ElementRef;
  results = '';
  evenOrOdd(): void {
      this.results =
          Number(this.inputNumber.nativeElement.value) % 2 !== 0
              ? (this.results = 'ODD siya!')
              : (this.results = 'ay o, EVEN!');
  }
}

