import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/my-card.component';
import { MyDumbComponent } from './my-dumb/my-dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    MyDumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
