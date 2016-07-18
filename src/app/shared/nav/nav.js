import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
/**
 * This class represents the navigation bar component.
 */
@Component({
  selector: 'navbar',
  templateUrl: 'templates/nav.html',
  directives: [ROUTER_DIRECTIVES]
})
//export
export class NavbarComponent {}
