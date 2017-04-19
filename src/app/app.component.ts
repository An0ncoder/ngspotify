import { Component } from '@angular/core';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { name = 'Angular'; }
