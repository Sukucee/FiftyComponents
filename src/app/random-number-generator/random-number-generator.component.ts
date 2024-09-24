import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-random-number-generator',
  standalone: true,
  imports: [],
  templateUrl: './random-number-generator.component.html',
  styleUrl: './random-number-generator.component.css'
})
export class RandomNumberGeneratorComponent {
  @ViewChild('upperBound') upperBound!: ElementRef;
  @ViewChild('lowerBound') lowerBound!: ElementRef;
  generated = 0;
  generate(): void {
      const min = Number(this.lowerBound.nativeElement.value);
      const max = Number(this.upperBound.nativeElement.value);
      this.generated = Math.round(Math.random() * (max - min) + min);
  }
}
