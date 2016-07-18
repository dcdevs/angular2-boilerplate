import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'babel-core';

import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';

import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { App } from './app/app';

//production mode
enableProdMode();
//start app
bootstrap(App, [
  APP_ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
])
.catch(err => console.error(err));
