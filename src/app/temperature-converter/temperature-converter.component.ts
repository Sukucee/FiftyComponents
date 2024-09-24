import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent {
  @ViewChild('temperature') temperature!: ElementRef;
  @ViewChild('tempUnit') tempUnit!: ElementRef;
  results = '';

  convert(): void {
      const tempInput = Number(this.temperature.nativeElement.value);
      this.results =
          this.tempUnit.nativeElement.value === 'celsius'
              ? `${tempInput} °F is equivalent to ${(tempInput - 32) * 0.555} °C`
              : `${tempInput} °C is equivalent to ${1.8 * tempInput + 32} °F`;
  }
}
