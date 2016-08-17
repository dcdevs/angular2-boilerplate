import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'babel-core';

import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//production mode
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
