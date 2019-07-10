# @marcobiedermann/ui-utilities-grid

[![npm version](https://badge.fury.io/js/%40marcobiedermann%2Fui-utilities-grid.svg)](https://badge.fury.io/js/%40marcobiedermann%2Fui-utilities-grid)

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Requirements

- [Node.js](https://nodejs.org)
- [postcss](https://github.com/postcss/postcss)
- [postcss-import](https://github.com/postcss/postcss-import)

## Installation

```sh
npm install @marcobiedermann/ui-utilities-grid
```

## Usage

### CSS

```css
@import '@marcobiedermann/ui-utilities-grid';
```

### React / React Native

```jsx
import Grid, { GridRow, GridColumn } from '@marcobiedermann/ui-utilities-grid/react';

const Component = () => (
  <Grid>
    <GridRow>
      <GridColumn>Column 1</GridColumn>

      <GridColumn>Column 2</GridColumn>
    </GridRow>
  </Grid>
);
```

## License

[MIT License](../../LICENSE)

Copyright (c) 2018 Marco Biedermann
