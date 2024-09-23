import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  standalone: true,
  imports: [],
  templateUrl: './multiplication-table.component.html',
  styleUrl: './multiplication-table.component.css'
})
export class MultiplicationTableComponent {
  @ViewChild('numberChoice') numberChoice!: ElementRef;
  tableArray: string[] = [];

  showMultiplicationTable(): void {
    this.tableArray.length = 0;
    for (let i = 1; i <= 10; i++) {
        this.tableArray.push(
            `${this.numberChoice.nativeElement.value} x ${i} = ${
              Number(this.numberChoice.nativeElement.value) * i
            }`
         );
    }
  }
}
