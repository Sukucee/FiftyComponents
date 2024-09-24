import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fibonacci-generator',
  standalone: true,
  imports: [],
  templateUrl: './fibonacci-generator.component.html',
  styleUrl: './fibonacci-generator.component.css'
})
export class FibonacciGeneratorComponent {
  @ViewChild('number') number!: ElementRef;
	Result = 0 ;

	calculatefib(): void {
		this.Result = this.fib(Number(this.number.nativeElement.value));
	}

	fib(n: number): number {
		return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
	}
}
