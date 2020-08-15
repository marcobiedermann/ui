# UI Components

[![Build Status](https://travis-ci.com/marcobiedermann/ui.svg)](https://travis-ci.com/marcobiedermann/ui)
[![dependencies Status](https://david-dm.org/marcobiedermann/ui/status.svg)](https://david-dm.org/marcobiedermann/ui)
[![devDependencies Status](https://david-dm.org/marcobiedermann/ui/dev-status.svg)](https://david-dm.org/marcobiedermann/ui?type=dev)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://marcobiedermann-ui.netlify.app/)

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Storybook](#storybook)
  - [Testing](#testing)
- [Publish](#publish)

## Requirements

- [Node.js](https://nodejs.org)

## Installation

```sh
npm install
```

## Usage

### Storybook

Launch Storybook development server with hot module replacement.

```sh
npm run develop
```

Build Storybook for production into `docs` folder.

```sh
npm run build
```

### Testing

Run all tests and linting.

```sh
npm test
```

Run CSS and JavaScript linting.

```sh
npm run lint
```

Run CSS linting.

```sh
npm run lint:css
```

Run JavaScript linting.

```sh
npm run lint:js
```

## Publish

Publish a package using Lerna. You will be prompted with the package name and a version under which you want to release your changes.

```sh
npm run publish
```
