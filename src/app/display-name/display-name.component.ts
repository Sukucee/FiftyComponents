import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-display-name',
  standalone: true,
  imports: [],
  templateUrl: './display-name.component.html',

})
export class DisplayNameComponent {
  @ViewChild('usernameField') usernameField!: ElementRef;
    username = '';
    showMyUsername(): void {
        this.username = this.usernameField.nativeElement.value;
    }
}


