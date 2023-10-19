import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-dumb',
  templateUrl: './my-dumb.component.html',
  styleUrls: ['./my-dumb.component.scss']
})
export class MyDumbComponent {
  @Input({required:true}) name!: string;

  ngOnInit(){
    console.log('Me inicio!'+this.name)
  }
}
