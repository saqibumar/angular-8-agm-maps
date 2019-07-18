
## Main Route
* The main route will contain a fullscreen map (eg Google maps).
* When the page loads, the map should display the markers from the `locations.json` data set in this repo. 
* Upon clicking on a marker a column will appear on the left of the same page, and the map will resize so both the column and the map fit the page.

## Second Route
* The second route will contain two tabs.
* The first tab will display all the data from the given data set with pagination.
* The second tab will display a form and a map. The user will fill the fields to create a new entry for the data set (name, lat, long). When the form is submitted the new pin will appear on the map of this page and it should also be added to the original dataset. 
* The map will include simple drawing tools. 
    * A clear button - that removes all pins on the map.
    * A circle draw button - when a circle is drawn, all the pins whose coordinates fall inside the area, should appear on the map.


# Maps

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

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
