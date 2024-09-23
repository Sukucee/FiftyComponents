import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-greetings',
  standalone: true,
  imports: [],
  templateUrl: './user-greetings.component.html',
  styleUrl: './user-greetings.component.css'
})
export class UserGreetingsComponent {
  @ViewChild('name') name!: ElementRef;
  greetings = '';

  greetUser(): void {
      this.greetings = `Greetings lord, ${this.name.nativeElement.value}`;
  }
}
