import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  
})
export class HelloWorldComponent {
  message = 'HELLO WORLD!';

}
