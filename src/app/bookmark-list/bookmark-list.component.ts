import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bookmark-list',
  standalone: true,
  imports: [],
  templateUrl: './bookmark-list.component.html',
  
})
export class BookmarkListComponent {
  @ViewChild('linkInput') linkInput!: ElementRef;
  linksArray: string[] = [];
  addLink(): void {
      this.linksArray.push(
          `https://www.${this.linkInput.nativeElement.value}`
      );
      this.linkInput.nativeElement.value = '';
  }
}
