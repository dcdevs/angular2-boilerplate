import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about-component',
  template: '<p>{{ message }}</p>'
})
export class AboutComponent{

  selectedUser: String;
  sub: any;

  constructor(router: Router, route: ActivatedRoute) {
    this.sub = route
      .params
      .subscribe(params => {
        this.selectedUser = params;
      });
    this.message = `Hola, ${ this.selectedUser.nombre }!`;
  }
}
