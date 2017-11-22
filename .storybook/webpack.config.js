const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../'),
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ]
  }
}
