import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-uppercase-greetings',
  standalone: true,
  imports: [],
  templateUrl: './uppercase-greetings.component.html',
  styleUrl: './uppercase-greetings.component.css'
})
export class UppercaseGreetingsComponent {
  @ViewChild('userName') userName!: ElementRef;
	Result = '';
	transform(): void {
		this.Result = String(this.userName.nativeElement.value).toUpperCase();
	}
}
