import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'babel-core';

import { Component, View, provide, enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';

import { HelloComponent } from './hello.component';
import { AboutComponent } from './about.component';

const routes: RouterConfig = [
	{ path: '', component: HelloComponent },
	{ path: 'about/:nombre', component: AboutComponent }
];
@Component({
	selector: 'hello-app',
	directives: [ROUTER_DIRECTIVES],
	template: `
		<ul>
			<li><a [routerLink]="['/']">Home</a></li>
			<li><a [routerLink]="['/about/Cindy!']">About</a></li>
		</ul>
		<router-outlet></router-outlet>
	`
})

class HelloApp { }
//production mode
enableProdMode();
//start app
bootstrap(HelloApp, [
	provideRouter(routes),
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  {provide: APP_BASE_HREF, useValue: '/'}
])
.catch(err => console.error(err));
