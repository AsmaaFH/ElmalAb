# ElmalAb
###
This App Allow the players (27 players) to devide themselvies randomly in 3 groups.

- I used firebase to my small database.

-I used rxjx library (behaviour subject) to read the number of players added. according to this number will allow the navigation to the groups or not,  as can't navigate while players num < 21 players. 

- I used the lazy loading to load the groups Module once the admin want to devide the players.

- I used a service to listen from database, and injected the service on my components that use this service.

- I used directives, @input, @output in my App.

- I used bootstrap to facilicate my style.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

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
