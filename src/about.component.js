import { Component } from '@angular/core';
import { RouteParams } from '@angular/router';

@Component({
  selector: 'about-component',
  template: '<p>{{ message }}</p>'
})
export class AboutComponent {
  constructor() {
    this.message = 'Hola';
  }
}