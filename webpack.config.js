'use strict';

function fileConfig (fileName: string) {
  return {
    devtool: 'eval-source-map',
    entry:  __dirname + `/app/${fileName}`,
    output: {
      path: __dirname + "/public",
      filename: fileName
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.css$/,
          loader: 'style!css?modules!sass'
        }
      ]
    }
  }
}

const files = [
  'background.js',
  'options.js',
  'popup.js'
]

module.exports = files.map(fileConfig);
