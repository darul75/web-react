// MAIN DEPENDENCIES
var path = require('path');
var webpack = require('webpack');

var _ = require('lodash');

var node_modules_dir = path.resolve(__dirname, '../node_modules');
var pathToReact = path.resolve(node_modules_dir, 'react/dist/react.min.js');

// PLUGINS
// html / clean / extract css / stats
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    Clean = require("clean-webpack-plugin");    
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    StatsPlugin = require("stats-webpack-plugin");

// Fixture to extract css
function extractForProduction(loaders) {
  return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

// stats
var excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/
];

// common configs

var config = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = function(options) {
  var client = options.client;
  var server = options.server;
  var prod = options.production;

  // STYLE LOADERS
  var cssLoaders = 'style-loader!css-loader';
  var sassLoaders = 'style!css!sass?indentedSyntax';

  // INIT PLUGINS
  var plugins = [new webpack.NoErrorsPlugin()];

  var cleanDirectories = [];

  // html template  
  var suffix = '';
  var outputPath = './build/';

  // PRODUCTION CASE
  if (prod) {
    // WRAP INTO CSS FILE
    cssLoaders = extractForProduction(cssLoaders);
    sassLoaders = extractForProduction(sassLoaders);
    
    suffix = '-prod';    
    plugins.push(new ExtractTextPlugin("app-[hash].css"));    

    outputPath = './dist/';

    plugins.push(new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'));    
  } 

  // SOME STATS
  plugins.push(new StatsPlugin(outputPath+"stats.prerender.json", {
      chunkModules: true,
      exclude: excludeFromStats
  })); 

  // CLEAN FIRT
  cleanDirectories.push('.'+outputPath);
  
  // HTML TEMPLATE + ENV VARIABLE
  if (client) {
    plugins.push(new Clean(cleanDirectories));
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
  }  

  // small hash for production resources
  var hash = prod ? '-[hash]': '';  

  if (client) {
    // CLIENT
    return _.merge({}, config, {
      devtool: 'eval',
      entry: {    
        app: './app/app',
        vendors: ['react', 'react-router', 'react-hot-loader']
      },    
      output: {
          path: outputPath,
          filename: 'app'+hash+'.js',
          publicPath: prod ? '' : ''
      },
      module: {
        loaders: [
          { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },      
          { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
          { test: /\.sass$/, loader: sassLoaders },
          { test: /\.css$/, loader: cssLoaders },
          { test: /\.scss$/, loader: cssLoaders }
        ]
      },
      plugins: plugins    
    });
  }
  else {
    // SERVER
    return _.merge({}, config, {    
      entry: {    
        server: './app/server'
      },
       output: {
        path: './dist/',
        filename: 'server.js',
        libraryTarget: 'commonjs2'
      },      
      target: 'node',
      externals: /^[a-z][a-z\.\-0-9]*$/,
      node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
      },
      module : {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
          { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
          { test: /\.sass$/, loader: sassLoaders },
          { test: /\.css$/, loader: cssLoaders },
          { test: /\.scss$/, loader: cssLoaders }
        ]
      },
      plugins: plugins
    });
  }
};