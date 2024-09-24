import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  standalone: true,
  imports: [],
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BMISolverComponent {
  @ViewChild('height') height!: ElementRef;
	@ViewChild('weight') weight!: ElementRef;
	Result = 0;
	calculate(): void {
		this.Result =
			Number(this.weight.nativeElement.value) /
			Math.pow(Number(this.height.nativeElement.value), 2);
	}

}
