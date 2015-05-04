// MAIN DEPENDENCIES
var path = require('path');
var webpack = require('webpack');

// node_modules = path.resolve(__dirname, 'node_modules'),

// PLUGINS
// html / clean / extract css
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    Clean = require("clean-webpack-plugin");    
    ExtractTextPlugin = require("extract-text-webpack-plugin");

// fixture extract css
function extractForProduction(loaders) {
  return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

var cssLoaders = 'style-loader!css-loader';
var sassLoaders = 'style!css!sass?indentedSyntax';

module.exports = function(options) {
  var production = options.production;

  // webpack plugins
  var plugins = [new webpack.NoErrorsPlugin()];

  var cleanDirectories = [];

  // html template  
  var suffix = '';
  var path = './build/';

  if (production) {

    cssLoaders = extractForProduction(cssLoaders);
    sassLoaders = extractForProduction(sassLoaders);

    console.log("prod");
    suffix = '-prod';    
    plugins.push(new ExtractTextPlugin("app-[hash].css"));

    path = './dist/';

    cleanDirectories.push('../dist');
  }
  else {
    cleanDirectories.push('../build'); 
  }
  
  plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index'+suffix+'.html',
      template: 'assets/index'+suffix+'.html'
    })    
  );

  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true)  
      }
    })
  );

  // new Clean(cleanDirectories)        

  //publicPath = '/app/js/';

  var hash = production ? '-[hash]': '';  

  return {
    devtool: 'eval',
    entry: [    
      './app/index'
    ],  
    output: {
        path: path,
        filename: 'app'+hash+'.js',
        publicPath: production ? '' : ''
    },
    plugins: plugins,
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
        { test: /\.sass$/, loader: sassLoaders },
        { test: /\.css$/, loader: cssLoaders },
        { test: /\.scss$/, loader: cssLoaders },
        { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
      ],    
    }
  }
};