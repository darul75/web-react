var path = require('path');
var webpack = require('webpack');

var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/js/index'
  ],  
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/app/js/'
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'app/js') },
      { test: /\.sass$/, loader: "style!css!sass?indentedSyntax" },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ],    
  }
  
};