import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-currency-formatter',
  standalone: true,
  imports: [],
  templateUrl: './currency-formatter.component.html',
  styleUrl: './currency-formatter.component.css'
})
export class CurrencyFormatterComponent {
  @ViewChild('currency') currency!: ElementRef;
	@ViewChild('conversionCurr') conversionCurr!: ElementRef;
	Result = '';
	convert(): void {
		if (this.conversionCurr.nativeElement.value === 'usd') {
			this.Result = `$ ${this.currency.nativeElement.value}`;
		} else if (this.conversionCurr.nativeElement.value === 'php') {
			this.Result = `₱ ${this.currency.nativeElement.value}`;
		} else if (this.conversionCurr.nativeElement.value === 'euro') {
			this.Result = `€ ${this.currency.nativeElement.value}`;
		}
	}
}
