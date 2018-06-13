const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const rimraf = require('rimraf');

const rootPath = __dirname; // eslint-disable-line no-undef
const sourcePath = path.join(rootPath, 'src');
const buildPath = path.join(rootPath, 'build');

rimraf.sync(buildPath);

module.exports = {
  context: sourcePath,
  entry: path.join(sourcePath, 'index.js'),
  output: {
    path: buildPath,
    filename: 'evene.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      sourcePath,
      'node_modules'
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(sourcePath, 'index.html'),
      filename: 'index.html',
      title: 'evene'
    })
  ],
  devServer: {
    // server port should be (3274) E-API
    // EV-UI in telephone keypad
    port: 3884
  }
};
