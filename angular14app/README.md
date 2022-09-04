# Angular14app

This app uses the web component (angular element) from the `angular12element` folder. The custom
build of that app copies the prod code over to the assets folder in this project, so that it can be served
when index.html loads it at the end of the body.

So that we can use tags from web components, we need to add the following to the module in this folder:

    schemas: [CUSTOM_ELEMENTS_SCHEMA]

Otherwise, simply import the script at the end of the body (not in the head, because then it is loaded before the `app-root` is ready and you get error).

And then it can be used anywhere in this appl by using the tag which was used with `customElements.define(...)` in `angular12element`

In this example, I have renamed the files in the assets folder, and then renamed the component and rebuilt it, so that we have two web components that we can import, even though they are almost identical.

Once deployed to prod, we can load the entire app using just one of the web components in about 300ms (measured using the `after view checked` lifecycle hook, which appears to be the last one called). We measure the time difference between the script which runs in the header of the `index.html` file, and the last time the web component logs this.

If we import the second web component, it is taking up to 100ms longer.

My assumption is that angular is clever enough that if a second instance of a given version is loaded, it skips bootstrapping most of the internal code. It cannot do that if the versions are different.  If that is true, then every version of angular that is loaded is using memory and cpu which isn't necessary, if all web components were using the same version. So you really wouldn't want to build lots of angular elements and deploy each individually (e.g. one element application per widget!). Compared to importing components from a library, a web component based solution is probably worse. Don't also forget that out of the box there doesn't appear to be a standard way of ensuring that the interface of the web component matches the main application's expectations (e.g. pact tests or compiler support). Compare that to imported libs, where the compiler and unit tests can tell you if you are using the components correctly.

Compare that to PrimeNG: https://www.primefaces.org/primeng/setup, where the components are imported from a specific version of their library.

Also think about tree shaking - if multiple web components which are each deployed separately import the same stuff, you end up at least downloading all that stuff multiple times. Were they all imported from different libraries which used (the same version of?) external libs, then the final build of the application would optimise the generated artefacts, reducing their size and improving the (startup?) performance of our app.

We build this application using `ng build --output-hashing none` and copy the files from `dist/angular14app` into our abstratium.dev deployment under `deployedapp`. it is then deployed to the web.
note that i had to make the file names absolute because of a bug in abstratium that needs to be fixed.


----


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
