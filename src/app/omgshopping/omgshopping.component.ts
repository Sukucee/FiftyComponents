import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-omgshopping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './omgshopping.component.html',
  styleUrl: './omgshopping.component.css'
})
export class OMGShoppingComponent {
  items = [
    { name: 'Carrot', checked: false },
    { name: 'Apple', checked: false },
    { name: 'Potato', checked: false },
    { name: 'Banana', checked: false },
    { name: 'Tomato', checked: false },
    { name: 'Onion', checked: false }
  ];
  boughtItems: string[] = [];

  buyItems(): void {
    this.boughtItems = this.items
      .filter(item => item.checked)
      .map(item => item.name);
  }
}
