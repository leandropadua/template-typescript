# Typescript Template Project
>  Starter template for Typescript projects

This template includes useful tools for any typescript project.

## Lint and Code format

* [ESlint](https://eslint.org/) as an official typescript linter and 
* [Prettier](https://prettier.io/) are set for automated code formatting

```bash
npm run lint            # execute eslint in all files
npm run lint -- --fix   # execute and fix lint errors
```

A github hook is set using [husky](https://github.com/typicode/husky) to ensure that any commit get the automated lint fixes.

## Testing
 * [Jest](https://jestjs.io/) for unit testing
 * [NYC](https://istanbul.js.org/) for code coverage

```bash
npm run test            # run unit tests
npm run test:watch      # watch for tests changes
npm run test:coverage   # add coverage report to the output
```

## Editor config

* Editorconfig and gitattributes files for helping prevent spurious code diffs.

## Useful typescript start commands

```bash
npm run build  # tsc accross the board with timestamp
npm run watch  # watch for applying continuous builds on save
npm run clean  # remove node_modules and dist folder
```

## Say hello world :)

```bash
$ npm run start
hello world
```
