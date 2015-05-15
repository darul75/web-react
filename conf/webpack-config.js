// MAIN DEPENDENCIES
var path = require('path');
var webpack = require('webpack');

var _ = require('lodash');

var root_dir = path.resolve(__dirname, '..');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var pathToReact = path.resolve(node_modules_dir, 'react/dist/react.min.js');

// PLUGINS
// html / clean / extract css / stats
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    Clean = require("clean-webpack-plugin");    
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    StatsPlugin = require("stats-webpack-plugin"),
    UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();

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
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  }
};

module.exports = function(options) {
  var client = options.client;
  var server = options.server;
  var prod = options.production;

  config.devtool = !prod ? 'eval' : false;

  // STYLE LOADERS
  var cssLoaders = 'style-loader!css-loader';
  var sassLoaders = 'style!css!sass?indentedSyntax';

  // INIT PLUGINS
  var plugins = [new webpack.NoErrorsPlugin()];

  var cleanDirectories = [];

  // html template  
  var suffix = '';
  var outputPath = root_dir + '/build/';

  var processVars = {
    'process.env':{}
  };

  // PRODUCTION CASE
  if (prod) {
    // WRAP INTO CSS FILE
    cssLoaders = extractForProduction(cssLoaders);
    sassLoaders = extractForProduction(sassLoaders);
    
    suffix = '-prod';
    plugins.push(new webpack.PrefetchPlugin("react"));    
    plugins.push(new ExtractTextPlugin("app-[hash].css"));  
    processVars['process.env'].NODE_ENV = JSON.stringify('production');

    outputPath = root_dir + '/dist/';
  } 

  // SOME STATS
  plugins.push(new StatsPlugin(outputPath+"stats.prerender.json", {
      chunkModules: true,
      exclude: excludeFromStats
  }));

  // CLEAN FIRST
  cleanDirectories.push(outputPath);
  
  // HTML TEMPLATE + ENV VARIABLE
  if (client) {   
    processVars['process.env'].BROWSER = JSON.stringify(true);
    plugins.push(new Clean(cleanDirectories));
    plugins.push(new webpack.DefinePlugin(processVars));
    plugins.push(new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'));
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
    plugins.push(new webpack.optimize.UglifyJsPlugin({warnings: false, minimize: true, sourceMap: false}));
    plugins.push(new webpack.optimize.AggressiveMergingPlugin());    
    plugins.push(
      new HtmlWebpackPlugin({
        filename: 'index'+suffix+'.html',
        template: 'assets/index'+suffix+'.html'
      })    
    );
  }    

  // small hash for production resources
  var hash = prod ? '-[hash]': '';  

  if (client) {    
    // CLIENT
    return _.merge({}, config, {
      context: __dirname + "/../app",
      entry: {    
        app: './app',
        vendors: ['classnames', 'react', 'react-router', 'react-hot-loader']
      },    
      output: {
          path: outputPath,
          filename: 'app'+hash+'.js',
          publicPath: prod ? '/' : '/'
      },
      target: 'web',
      module: {
        loaders: [
          { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },      
          { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
          { test: /\.sass$/, loader: sassLoaders },
          { test: /\.css$/, loader: cssLoaders },
          { test: /\.scss$/, loader: cssLoaders }
        ]        
      },
      plugins: plugins,
      root: outputPath    
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