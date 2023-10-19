import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contentProjection';
  miVariable = 0;
  show = false;
  show2 = false;

  hookShow(){
    this.show2 = !this.show2;
    console.log(this.show2)
  }
}
