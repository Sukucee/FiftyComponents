import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  standalone: true,
  imports: [],
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  @ViewChild('firstName') firstName!: ElementRef;
    @ViewChild('middleInitial') middleInitial!: ElementRef;
    @ViewChild('lastName') lastName!: ElementRef;
    firstNameValue = '';
    lastNameValue = '';
    middleInitialValue = '';
    submitInformation(): void {
        this.firstNameValue = this.firstName.nativeElement.value;
        this.middleInitialValue = this.middleInitial.nativeElement.value;
        this.lastNameValue = this.lastName.nativeElement.value;
    }
}
