import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-odd-sum-calculator',
  standalone: true,
  imports: [],
  templateUrl: './odd-sum-calculator.component.html',
  styleUrl: './odd-sum-calculator.component.css'
})
export class OddSumCalculatorComponent {
  @ViewChild('number') number!: ElementRef;
	Result = 0;

	calculate(): void {
		const inputNumber = Number(this.number.nativeElement.value);
		this.Result = 0;
		for (let i = 1; i <= inputNumber; i += 2) {
			this.Result += i;
		}
	}
}
