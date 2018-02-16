import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent }   from './app.component';
import { AnimateComponent } from './animation.component';
@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule

  ],
 // declarations: [ AppComponent, routingComponents],
  //bootstrap:    [ AppComponent ]
  declarations: [ AppComponent, routingComponents, AnimateComponent],
  bootstrap:    [ AppComponent,AnimateComponent]
})
export class AppModule { }
