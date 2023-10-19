import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent {
  show = false;

  @Input() hookShow!: Function;

  @ContentChild('microfrontPoderoso') microfrontPoderoso!: TemplateRef<unknown>;

  ngAfterViewInit(){
    console.log(this.microfrontPoderoso);
  }
}
