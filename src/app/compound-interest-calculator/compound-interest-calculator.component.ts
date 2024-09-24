import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-compound-interest-calculator',
  standalone: true,
  imports: [],
  templateUrl: './compound-interest-calculator.component.html',
  styleUrl: './compound-interest-calculator.component.css'
})
export class CompoundInterestCalculatorComponent {
  @ViewChild('principal') principal!: ElementRef;
	@ViewChild('rate') rate!: ElementRef;
	@ViewChild('years') years!: ElementRef;
	@ViewChild('timesCompounded') timesCompounded!: ElementRef;
	ComIn: number = 0;

	calculate() {
		const principalValue = Number(this.principal.nativeElement.value);
		const rateValue = Number(this.rate.nativeElement.value) / 100;
		const years = Number(this.years.nativeElement.value);
		const timesCompoundedValue = Number(
			this.timesCompounded.nativeElement.value,
		);

		const futureValue =
			principalValue *
			Math.pow(
				1 + rateValue / timesCompoundedValue,
				timesCompoundedValue * years,
			);

		this.ComIn = Number((futureValue - principalValue).toFixed(2));
	}
}
