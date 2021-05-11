# ZingTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## NOTES

Using Node v15.4.0 and NPM 7.0.15. Inside the project, `rm -rf node_modules/*` (if it exists).

Install dependencies...

```
npm install
npm install zingchart --save --legacy-peer-deps
npm install zingchart-angular --save --legacy-peer-deps
ng serve
```

Observe the following error:

```
    
    Error: node_modules/zingchart-angular/lib/zingchart-angular.component.d.ts:3:23 - error TS7016: Could not find a declaration file for module 'zingchart/es6'. '/Users/craig/dev/zing-test/node_modules/zingchart/es6.js' implicitly has an 'any' type.
      Try `npm install @types/zingchart` if it exists or add a new declaration (.d.ts) file containing `declare module 'zingchart/es6';`
    
    3 import zingchart from 'zingchart/es6';
                            ~~~~~~~~~~~~~~~
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
