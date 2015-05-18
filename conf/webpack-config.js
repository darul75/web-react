// MAIN DEPENDENCIES
var path = require('path');
var webpack = require('webpack');

var _ = require('lodash');

// base app dir
var root_dir = path.resolve(__dirname, '..');

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
  var devserver = options.devserver;
  var prod = options.production;

  config.devtool = !prod ? 'eval' : false;

  // STYLE LOADERS
  var cssLoaders = 'style-loader!css-loader';
  var sassLoaders = 'style!css!sass?indentedSyntax';

  // INIT PLUGINS
  var plugins = [new webpack.NoErrorsPlugin()];

  // directory cleaner
  var cleanDirectories = ['build', 'dist'];

  // html template
  var suffix = '';
  var outputPath = path.join(root_dir, 'build');

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

    outputPath = path.join(root_dir, 'dist');
  }

  // HTML TEMPLATE + ENV VARIABLE
  if (client) {
    suffix = !devserver ? suffix : '-dev';
    processVars['process.env'].BROWSER = JSON.stringify(true);
    plugins.push(new Clean(cleanDirectories, root_dir));
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

  // SOME STATS
  plugins.push(new StatsPlugin(path.join(outputPath, 'webpack-stats.json'), {
      chunkModules: true,
      exclude: excludeFromStats
  }));

  // small hash for production resources
  var hash = prod ? '-[hash]': '';
  var publicPath = !devserver ? '/' : 'http://127.0.0.1:8081';

  if (client) {
    // CLIENT
    return _.merge({}, config, {
      context: __dirname + path.sep + path.join('..', 'app'),
      entry: {
        app: './app',
        vendors: ['whatwg-fetch', 'classnames', 'react', 'react-router', 'react-hot-loader']
      },
      output: {
          path: outputPath,
          filename: 'app'+hash+'.js',
          publicPath: publicPath
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
        server: './server/server'
      },
       output: {
        path: './dist/',
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
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
