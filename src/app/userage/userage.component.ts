import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-userage',
  standalone: true,
  imports: [],
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  @ViewChild('birthYear') birthYear!: ElementRef;
  age = 0;
  currentYear = new Date().getFullYear();

  submitUserAge(): void {
      this.age = this.currentYear - this.birthYear.nativeElement.value;
  }
}
