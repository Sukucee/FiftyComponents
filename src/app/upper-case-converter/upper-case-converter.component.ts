import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upper-case-converter',
  standalone: true,
  imports: [],
  templateUrl: './upper-case-converter.component.html',
  styleUrl: './upper-case-converter.component.css'
})
export class UpperCaseConverterComponent {
  @ViewChild('text') text!: ElementRef;
	Result = '';

	convert(): void {
		this.Result = String(this.text.nativeElement.value).toUpperCase();
	}
}
