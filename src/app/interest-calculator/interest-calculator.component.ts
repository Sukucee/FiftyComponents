import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-interest-calculator',
  standalone: true,
  imports: [],
  templateUrl: './interest-calculator.component.html',
  styleUrl: './interest-calculator.component.css'
})
export class InterestCalculatorComponent {
    @ViewChild('principal') principal!: ElementRef;
    @ViewChild('rate') rate!: ElementRef;
    @ViewChild('years') years!: ElementRef;
    Money = 0;
  
    calculate(): void {
      this.Money =
        Number(this.principal.nativeElement.value) *
        (Number(this.rate.nativeElement.value) / 100) *
        Number(this.years.nativeElement.value);
    }
}
