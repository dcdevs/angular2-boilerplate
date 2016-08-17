import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarComponent } from './shared';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  templateUrl: 'templates/app.html'
})

export class AppComponent{
  constructor(){}
}
