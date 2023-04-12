# @marcobiedermann/ui-modules-media

[![npm version](https://badge.fury.io/js/%40marcobiedermann%2Fui-modules-media.svg)](https://badge.fury.io/js/%40marcobiedermann%2Fui-modules-media)

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
npm install @marcobiedermann/ui-modules-media
```

## Usage

### CSS

```css
@import '@marcobiedermann/ui-modules-media';
```

### React

```jsx
import Media from '@marcobiedermann/ui-modules-media';

function App() {
  return (
    <Media>
      <Media.Object>
        <img src="path/to/image" />
      </Media.Object>
      <Media.Body>Body</Media.Body>
    </Media>
  );
}
```

## License

[MIT License](../../LICENSE)

Copyright (c) Marco Biedermann
