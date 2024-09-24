import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-divisible-checker',
  standalone: true,
  imports: [],
  templateUrl: './divisible-checker.component.html',
  styleUrl: './divisible-checker.component.css'
})
export class DivisibleCheckerComponent {
  @ViewChild('numOne') numOne!: ElementRef;
	@ViewChild('numTwo') numTwo!: ElementRef;
	Result = '';
	checkDivisibility(): void {
		const numOneValue = Number(this.numOne.nativeElement.value);
		const numTwoValue = Number(this.numTwo.nativeElement.value);
		this.Result =
			numOneValue % numTwoValue === 0
				? `${numOneValue} is divisible by ${numTwoValue}`
				: `${numOneValue} is not divisible by ${numTwoValue}`;
	}
}
