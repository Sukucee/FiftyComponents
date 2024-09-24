import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  @ViewChild('item') item!: ElementRef;
  shoppingList: string[] = [];
  addItem(): void {
      const itemName = this.item.nativeElement.value;
      if (itemName && this.shoppingList.indexOf(itemName)) {
          this.shoppingList.push(itemName);
      }
  }

  removeItem(itemName: string): void {
      this.shoppingList.splice(this.shoppingList.indexOf(itemName), 1);
  }
}
