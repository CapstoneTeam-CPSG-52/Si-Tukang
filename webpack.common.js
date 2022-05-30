/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prefer-template */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/signin.html'),
      filename: 'signin.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/signup.html'),
      filename: 'signup.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/heros/**'],
          },
        },
      ],
    }),
  ],
};
