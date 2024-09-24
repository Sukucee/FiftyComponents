import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-username-validator',
  standalone: true,
  imports: [],
  templateUrl: './username-validator.component.html',
  
})
export class UsernameValidatorComponent {
  @ViewChild('username') username!: ElementRef;
	Result = '';

	validate(): void {
		const usernameValue = this.username.nativeElement.value;
		const regex = /^[\w\p{P}\p{S}]{8}$/u;
		this.Result = regex.test(usernameValue) ? 'Allowed' : 'Denied';
	}
}
