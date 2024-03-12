const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const json5 = require('json5');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
module.exports = {
  entry: {
    main: './src/index.js',
    individual: './src/individual.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(), // Adicione CleanWebpackPlugin aos seus plugins
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['main', 'individual'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/individualProduct.html',
      filename: 'individual.html',
      chunks: ['individual'],
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },  
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
