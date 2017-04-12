const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
     extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
	{test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
	{test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader'})},
	{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.(eot|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
	{ test: /\.png$/, loader: "url-loader?limit=100000" } ,
	{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
	{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
   ]
};

module.exports = config;
