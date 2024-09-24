import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-farenheit-to-celcius',
  standalone: true,
  imports: [],
  templateUrl: './farenheit-to-celcius.component.html',
  styleUrl: './farenheit-to-celcius.component.css'
})
export class FarenheitToCelciusComponent {
  @ViewChild('fahrenheit') fahrenheit!: ElementRef;
  celsius = 0;
  convertToCelsius(): void {
      this.celsius =
          (Number(this.fahrenheit.nativeElement.value) - 32) * 5/9;
  }
}
