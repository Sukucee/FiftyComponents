import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',

})
export class CalculatorComponent {
  @ViewChild('firstNumber') firstNumber!: ElementRef;
  @ViewChild('secondNumber') secondNumber!: ElementRef;
  result: number = 0;
  divide(): void {
      this.result =
          Number(this.firstNumber.nativeElement.value) /
          Number(this.secondNumber.nativeElement.value);
  }

  multiply(): void {
      this.result =
          Number(this.firstNumber.nativeElement.value) *
          Number(this.secondNumber.nativeElement.value);
  }

  subtract(): void {
      this.result =
          Number(this.firstNumber.nativeElement.value) -
          Number(this.secondNumber.nativeElement.value);
  }

  add(): void {
      this.result =
          Number(this.firstNumber.nativeElement.value) +
          Number(this.secondNumber.nativeElement.value);
  }
}
