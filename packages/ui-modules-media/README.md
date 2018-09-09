# @marcobiedermann/ui-modules-media

[![npm version](https://badge.fury.io/js/%40marcobiedermann%2Fui-modules-media.svg)](https://badge.fury.io/js/%40marcobiedermann%2Fui-modules-media)

## Table of contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Requirements

* [Node.js](https://nodejs.org)
* [postcss](https://github.com/postcss/postcss)
* [postcss-import](https://github.com/postcss/postcss-import)

## Installation

```sh
npm install @marcobiedermann/ui-modules-media
```

## Usage

### CSS

```css
@import '@marcobiedermann/ui-modules-media';
```

### React / React Native

```jsx
import Media, { MediaObject, MediaBody } from '@marcobiedermann/ui-modules-media';

const Component = () => (
  <Media>
    <MediaObject>
      <img src="path/to/image" />
    </MediaObject>
    <MediaBody>
      Body
    </MediaBody>
  </Media>
);
```

## License

[MIT License](../../LICENSE)

Copyright (c) 2017 Marco Biedermann
