import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/my-card.component';
import { MyDumbComponent } from './my-dumb/my-dumb.component';
import { MySuperDumbComponent } from './my-super-dumb/my-super-dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    MyDumbComponent,
    MySuperDumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
