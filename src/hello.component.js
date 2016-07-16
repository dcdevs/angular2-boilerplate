
import { Component, View } from '@angular/core';

@Component({
	selector: 'hello-component',
	template: `<p>{{message}}</p>`
})

export class HelloComponent {
	constructor() {
		this.message = "Hola, Angular 2!";
	}
}
