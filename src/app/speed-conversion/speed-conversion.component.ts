import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speed-conversion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speed-conversion.component.html',
  styleUrls: ['./speed-conversion.component.css']
})
export class SpeedConversionComponent {
  mph: number | null = null;
  private readonly conversionFactor = 0.621371;

  convertToMph(kmhValue: string): void {
    const kmh = parseFloat(kmhValue);
    if (!isNaN(kmh) && kmh >= 0) {
      this.mph = parseFloat((kmh * this.conversionFactor).toFixed(2));
    } else {
      this.mph = null;
    }
  }
}
