import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiplication-checker',
  standalone: true,
  imports: [],
  templateUrl: './multiplication-checker.component.html',
  styleUrl: './multiplication-checker.component.css'
})
export class MultiplicationCheckerComponent {
  @ViewChild('numOne') numOne!: ElementRef;
	@ViewChild('numTwo') numTwo!: ElementRef;
	Result = false;

	check(): void {
		this.Result =
			Number(this.numOne.nativeElement.value) %
				Number(this.numTwo.nativeElement.value) ===
			0
				? true
				: false;
	}
}
