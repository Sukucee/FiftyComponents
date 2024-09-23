import { Component } from '@angular/core';

@Component({
  selector: 'app-show-date',
  standalone: true,
  imports: [],
  templateUrl: './show-date.component.html',
  
})
export class ShowDateComponent {
  date = '';
    showDate(): void {
        this.date = String(new Date().toISOString()).substring(0, 10);
    }
}

