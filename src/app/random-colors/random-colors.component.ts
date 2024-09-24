import { Component } from '@angular/core';

@Component({
  selector: 'app-random-colors',
  standalone: true,
  imports: [],
  templateUrl: './random-colors.component.html',
  
})
export class RandomColorsComponent {
  colorsArray = [
		'PINK','RED','BLACK','BLUE','GREEN',
		'BROWN','YELLOW','PURPLE','VIOLET',
		'MAGENTA','WHITE','SKY BLUE','ORANGE',
	];
	Color = '';

	generateRandomColor(): void {
		this.Color =
			this.colorsArray[
				Math.floor(Math.random() * this.colorsArray.length)
			];
	}
}


