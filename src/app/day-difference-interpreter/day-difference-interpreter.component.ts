import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day-difference-interpreter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-difference-interpreter.component.html',
  styleUrl: './day-difference-interpreter.component.css'
})
export class DayDifferenceInterpreterComponent {
  daysDifference: number | null = null;

  calculateDifference(startDate: string, endDate: string): void {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start && end && !isNaN(start.getTime()) && !isNaN(end.getTime())) {
      const differenceInTime = end.getTime() - start.getTime();
      this.daysDifference = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    } else {
      this.daysDifference = null;
    }
  }
}
