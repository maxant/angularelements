# Angular12element

## What is this?

A demo of a web component built with angular elements, based on https://medium.com/codingthesmartway-com-blog/angular-elements-a-practical-introduction-to-web-components-with-angular-6-52c0b3076c2c

See also https://angular.io/guide/elements

## How it works

This is a standalone application, that contains a component which is then exported as a web component by using a custom build script.

It can be run with the standard `ng serve`, which will show a page with the component embedded as a normal angular component.

We then build it using the standard `ng build --output-hashing none` which produces artifacts under the `dist` folder, which are then used by the custom build script (see below) to build the web component.

We then copy that web component javascript into a second angular app that is built using a different version of angular, in order to see if angular is bootstrapped twice or just once. That is basically what we are testing here - is angular just a provided dependency, or is it included in the build of the web component?

## Dependencies / Setup

    ng new angular12element
    cd angular12element
    ng add @angular/elements

For the custom build script:

    npm install fs-extra concat

    cd ..
    # update angular cli to version 14:
    npm remove -g ng
    npm i -g @angular/cli
    ng version           # outputs 14.2.1
    ng new angular14app
    cd angular14app

## Upgrading Node

https://phoenixnap.com/kb/update-node-js-version -> install a program called `n` (node)

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

or for a specific version:

    sudo n [version.number]

## Changes to a standard angular app

`app.module.ts`:

    import { Injector, NgModule } from '@angular/core';
    import { createCustomElement } from '@angular/elements';
    .
    .
    @NgModule({
      ...
      entryComponents: [
        ComponentaComponent
      ]
    })
    export class AppModule {

      constructor(private injector: Injector) {}

      ngDoBootstrap() {
        const el = createCustomElement(ComponentaComponent, { injector: this.injector });
        customElements.define('component-a', el); // note, this is a different name than the one used in the app!
      }
   
`package.json`, in the scripts section:

    "build:elements": "ng build --output-hashing none && node elements-build.js"

Then build the web component like this: `npm run build:elements`

This uses the custom build script `elements-build.js` to build the web components files and place them under the `elements` folder. It also copies those files over to the `angular14app` folder which is an angular app using a difference angular version, which uses the web component.


----


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
