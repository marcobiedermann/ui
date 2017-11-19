const { promisify } = require('util');
const fs = require('fs');
const postcss = require('postcss');
const postcssCssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

(async function build() {
  fs.mkdir(`${process.cwd()}/dist`, (error) => {
    if (error && error.errno !== -17) {
      throw error;
    }
  });

  const css = await readFileAsync(`${process.cwd()}/index.css`, 'utf8');
  const result = await postcss([
    postcssCssnext({
      features: {
        rem: false,
      },
    }),
    postcssImport(),
    cssnano({
      autoprefixer: false,
    }),
  ]).process(css, {
    from: `${process.cwd()}/index.css`,
    to: `${process.cwd()}/dist/index.css`,
    map: {
      inline: false,
    },
  });

  writeFileAsync(`${process.cwd()}/dist/index.css`, result.css);
  writeFileAsync(`${process.cwd()}/dist/index.css.map`, result.map);
}());
