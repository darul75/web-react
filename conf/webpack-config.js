// MAIN DEPENDENCIES
import path from 'path';
import webpack from 'webpack';

import _ from 'lodash';

// base app dir
var root_dir = path.resolve(__dirname, '..');

// PLUGINS
// html / clean / extract css / stats
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Clean from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import writeStats from './utils/write-stats';
let UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();

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

  config.devtool = !prod ? "#inline-source-map" : false;

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
    if (prod) {
      plugins.push(new webpack.optimize.UglifyJsPlugin({warnings: false, minimize: true, sourceMap: false}));
      plugins.push(new webpack.optimize.AggressiveMergingPlugin());
    }
    plugins.push(
      new HtmlWebpackPlugin({
        filename: 'index'+suffix+'.html',
        template: 'assets/index'+suffix+'.html'
      })
    );
    //plugins.push(function () { this.plugin('done', writeStats); });
  }

  // small hash for production resources
  var hash = prod ? '-[hash]': '';
  var publicPath = !devserver ? '/' : 'http://127.0.0.1:8081/';

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

    let server = !devserver ? './server/server' : './server/server-dev';
    let out = !devserver ? './dist/' : path.resolve(__dirname, '..', 'build');

    var entry = [server];
    config.recordsPath = path.resolve(__dirname, '..', 'build/webpack.records.json');

    if (devserver) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
      //entry.push('webpack/hot/signal.js');
      entry.push('webpack/hot/poll?1000');
    }

    return _.merge({}, config, {
      entry: entry,
       output: {
        path: out,
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: publicPath
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

          { test: /\.(jsx?|js)$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
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
