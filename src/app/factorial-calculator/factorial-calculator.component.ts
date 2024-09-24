import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-factorial-calculator',
  standalone: true,
  imports: [],
  templateUrl: './factorial-calculator.component.html',
  
})
export class FactorialCalculatorComponent {
  @ViewChild('numberToBeFactorial') numberToBeFactorial!: ElementRef;
  result = 0;
  number = 0;

  startFactorial(): void {
      this.number = Number(this.numberToBeFactorial.nativeElement.value);
      this.result = this.factorial(this.number);
  }
  factorial(n: number): number {
      return n > 1 ? n * this.factorial(n - 1) : 1;
  }
}
