import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [],
  templateUrl: './currency-converter.component.html',
  
})
export class CurrencyConverterComponent {
  @ViewChild('php') php!: ElementRef;
  @ViewChild('currencySelector') currencySelector!: ElementRef;

  
    usd = 55.88;
    euro = 61.93;
    gbp = 73.6;
    cad = 40.97;
    krw = 0.441;
    values = 0;

  convert(): void {
      if (!this.currencySelector.nativeElement.value) {
          this.values = 0;
      } else if (this.currencySelector.nativeElement.value === 'usd') {
          this.values = Number(this.php.nativeElement.value) / this.usd;
      } else if (this.currencySelector.nativeElement.value === 'krw') {
          this.values = Number(this.php.nativeElement.value) / this.krw;
      } else if (this.currencySelector.nativeElement.value === 'gbp') {
          this.values = Number(this.php.nativeElement.value) / this.gbp;
      } else if (this.currencySelector.nativeElement.value === 'eur') {
          this.values = Number(this.php.nativeElement.value) / this.euro;
      } else if (this.currencySelector.nativeElement.value === 'cad') {
          this.values = Number(this.php.nativeElement.value) / this.cad;
      }
  }
}
