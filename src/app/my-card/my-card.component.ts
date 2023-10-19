import { Component, ContentChild, TemplateRef } from '@angular/core';
import { ZippyContentDirective } from '../app-example-zippy-content.directive';

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