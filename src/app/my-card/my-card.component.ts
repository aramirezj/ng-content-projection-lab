import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent {
  show = false;
  @ContentChild('xd') content!: TemplateRef<unknown>;

  ngAfterViewInit(){
    console.log(this.content)
  }
}
