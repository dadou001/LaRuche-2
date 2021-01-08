# LaRuche-2

La Ruche is an interactive editor of exercises for the WIMS and [PLaTon](https://github.com/PremierLangage) pedagogical platforms. The editor produces code (depending on the target platform) that may be sent or copied to the target platform server that will generate the exercise, show it to a student, mark it, etc...

## Requirements

- [NPM](https://www.npmjs.com/get-npm)
- [Angular CLI](https://cli.angular.io)
- [Nx](https://nx.dev/angular/getting-started/why-nx)

## Installation

- Open a terminal window and run the following commands

- git clone s<https://github.com/dadou001/LaRuche-2>
- cd LaRuche-2

- `./scripts/install.sh` or `sudo ./scripts/install.sh`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run npm run affected:test to execute the unit tests affected by a change.

## Understand the wsorkspace

Run `npm run dep-graph` to see a diagram of the dependencies of the project.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## File Structure

```txt
|   apps/
|       laruche/
|           src/
|               app/
|                   pages/
|           assets/
|           environments/
|               environment.ts
|               environment.prod.ts
|           index.html
|           styles.scss
|   libs/
|       feature/
|           fragment/
|       shared/
|           ui/
|           vendors/
| types/
|   blockly
| angular.json
| nx.json
| package.json
| tsconfig.json
```

`

## libs/feature/fragment

TODO

## libs/shared/ui

Declare modules|components|directives... used across the different pages of the application.

TODO

## libs/shared/vendors

TODO

## apps/laruche/src/app/pages

Declare the pages of the application. Each page has it own module.

- **workspace/**

 TODO

## Third party libraries integration into the project

### [QuillJS](https://www.npmjs.com/package/ngx-quill)

TODO

### [Blockly](https://www.npmjs.com/package/ngx-monaco-editor)

TODO

### [MonacoEditor](https://www.npmjs.com/package/ngx-monaco-editor)

TODO

### [Angular Material](https://material.angular.io/)

TODO

### [SweetAlert2](https://www.npmjs.com/package/ngx-sweetalert2)

TODO

### [NgxPipes](https://www.npmjs.com/package/ngx-pipes)

TODO

### [Angular Split](https://www.npmjs.com/package/angular-split)

TODO

Cet éditeur est soutenu par le MESRI dans le cadre de l’AMI Transformation pédagogique et numérique
