# Angular2-Boilerplate

Angular 2 project architecture

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Dependency Status](https://david-dm.org/dcdevs/angular2-boilerplate.svg)](https://david-dm.org/dcdevs/angular2-boilerplate)
[![devDependency Status](https://david-dm.org/dcdevs/angular2-boilerplate/dev-status.svg)](https://david-dm.org/dcdevs/angular2-boilerplate#info=devDependencies)

## How to start

**Note** that this seed project requires node v4.x.x or higher

In order to start the seed use:

Clone the repository:
```sh
$ git clone https://github.com/dcdevs/angular2-boilerplate.git
```
Enter to cloned folder
```sh
$ cd angular2-boilerplate
```
Install the project's dependencies
```sh
$ npm install
```
Run server, watches your files and uses browserSync reload by default
```sh
$ npm start
```
Build
```sh
$ npm run build
```

## Dev Dependencies

* babel-core: Transform ECMAScript6 to ECMAScript 5
* babelify: As of Babel 6.0.0 there are no plugins included by default. For babelify to be useful, you must also include some presets and/or plugins.
* babel-preset-es2015: Babel preset for all es2015 plugins.
* browserify: With Browserify you can write code [in the browser] that uses require in the same way that you would use it in Node.
* watchify: Update any source file and your browserify bundle will be recompiled on the spot.
* vinyl-buffer: An alternative to gulp-streamify that you can pipe to, instead of being required to wrap your streams.
* vinyl-source-stream: Use conventional text streams at the start of your gulp or vinyl pipelines, making for nicer interoperability with the existing npm stream ecosystem.
* http-server: http-server is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.
* gulp: gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.
* browser-sync: Keep multiple browsers & devices in sync when building websites..

## Project Dependencies

* zone.js: A Zone is an execution context that persists across async tasks.

## Directory Structure

```
.
├── README.md
├── gulpfile.babel.js          <- configuration of the gulp tasks
├── package.json               <- dependencies of the project
├── .editorconfig              <- editor config
├── .babelrc                   <- babel config
├── .gitignore                 <- git ignore
├── src                        <- source code of the application
│   └── app
│       │── about
│       │   │── about.css
│       │   │── about.html
│       │   │── about.js
│       │   │── index.js
│       │── home
│       │   │── home.css
│       │   │── home.html
│       │   │── home.js
│       │   │── index.js
│       │── app.component.e2e-spec.ts
│       │── app.component.html
│       │── app.component.spec.ts
│       │── app.component.ts
│       │── hot_loader_main.ts
│       │── main.ts
│       │── shared
│       │   │── index.js
│       │   ├── nav
│       │   │   ├── index.ts
│       │   │   ├── navbar.component.css
│       │   │   ├── navbar.component.html
│       │   │   └── navbar.component.ts
│       ├── assets
│       │   └── img
│       │       └── images.svg
│       └── css
│           └── main.css
│   │── main.js
│   └── index.html
```

## Version

1.0.0
