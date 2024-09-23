import { Component } from '@angular/core';

@Component({
  selector: 'app-show-button',
  standalone: true,
  imports: [],
  templateUrl: './show-button.component.html',
  
})
export class ShowButtonComponent {
  show = '';
  showHello(): void {
    this.show = 'Hello World';
  }
}
