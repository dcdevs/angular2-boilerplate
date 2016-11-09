import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AboutComponent }   from './about';
import { HomeComponent }    from './home';
import { AppComponent }     from './app';

import { routing }          from './app.routes';
import { NavbarComponent } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
