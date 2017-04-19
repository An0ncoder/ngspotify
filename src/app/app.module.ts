import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavbarTopComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
