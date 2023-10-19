import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent {
  show = false;

  @Input() hookShow!: Function;

  @Input() isNesting:boolean = false;
}
