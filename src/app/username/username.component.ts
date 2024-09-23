import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [],
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {
  @ViewChild('usernameField') usernameField!: ElementRef;
    username = '';
    showMyUsername(): void {
        this.username = this.usernameField.nativeElement.value;
    }
}
