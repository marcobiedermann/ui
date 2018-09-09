# @marcobiedermann/ui-modules-embed

[![npm version](https://badge.fury.io/js/%40marcobiedermann%2Fui-modules-embed.svg)](https://badge.fury.io/js/%40marcobiedermann%2Fui-modules-embed)

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
npm install @marcobiedermann/ui-modules-embed
```

## Usage

### CSS

```css
@import '@marcobiedermann/ui-modules-embed';
```

### React / React Native

```jsx
import Embed from '@marcobiedermann/ui-modules-embed';

const Component = () => (
  <Embed>
    <iframe src="/" />
  </Embed>
)
```

## License

[MIT License](../../LICENSE)

Copyright (c) 2018 Marco Biedermann
