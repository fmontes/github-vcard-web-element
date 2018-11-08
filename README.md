# Github Vcard Web Element

<img src="https://user-images.githubusercontent.com/751424/48176613-8827f980-e2d6-11e8-8453-b05db2b7774a.jpg" atl="Github VCard Web Component" />

Using Angular to create [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Build and use

1. Run `npm run build:elements`
2. That will build a Javsscript file into: `/elements/github-vcard.js`
3. Create a HTML page with the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Custom Element</title>

</head>
<body>
    <github-vcard user="YOUR_GITHUB_USERNAME"></github-vcard>
    <script type="text/javascript" src="github-vcard.js"></script>
</body>
</html>
```

4. And you are all set

------------------------------------

## @angular/cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
