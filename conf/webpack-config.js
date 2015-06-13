// MAIN DEPENDENCIES
import path from 'path';
import webpack from 'webpack';

import _ from 'lodash';

// base app dir
let root_dir = path.resolve(__dirname, '..');

// PLUGINS
// html / clean / extract css / stats
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Clean from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
let UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();

// Fixture to extract css
function extractForProduction(loaders) {
  return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

// stats
let excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/
];

// common configs
let config = {
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
  let client = options.client,
      server = options.server,
      devserver = options.devserver,
      prod = options.production;

  config.devtool = !prod ? "#inline-source-map" : false;

  // STYLE LOADERS
  let cssLoaders = 'style-loader!css-loader',
      sassLoaders = 'style!css!sass?indentedSyntax',
      scssLoaders = 'style!css!sass';

  // INIT PLUGINS
  let plugins = [new webpack.NoErrorsPlugin()];

  // directory cleaner
  let cleanDirectories = ['build', 'dist'];

  // html template
  let suffix = '',
      outputPath = path.join(root_dir, 'build');

  let processVars = {
    'process.env':{}
  };

  // PRODUCTION CASE
  if (prod) {
    // WRAP INTO CSS FILE
    cssLoaders = extractForProduction(cssLoaders);
    sassLoaders = extractForProduction(sassLoaders);
    scssLoaders = extractForProduction(scssLoaders);

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
  }

  // small hash for production resources
  let hash = prod ? '-[hash]': '',
      publicPath = !devserver ? '/' : 'http://127.0.0.1:5000/',
      devMainClientApp = prod || devserver ? './app' : './app-dev';

  if (client) {
    // CLIENT
    return _.merge({}, config, {
      context: __dirname + path.sep + path.join('..', 'app'),
      entry: {
        app: devMainClientApp,
        vendors: ['classnames', 'iso', 'react', 'react-router', 'react-hot-loader', 'whatwg-fetch']
      },
      output: {
          path: outputPath,
          filename: 'app'+hash+'.js',
          publicPath: publicPath
      },
      target: 'web',
      module: {
        loaders: [
          { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: [/node_modules/, /__tests__/] },
          { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
          { test: /\.sass$/, loader: sassLoaders },
          { test: /\.css$/, loader: cssLoaders },
          { test: /\.scss$/, loader: scssLoaders }
        ]
      },
      plugins: plugins,
      root: outputPath
    });
  }
  else {
    // SERVER

    let server = !devserver ? './server/server' : './server/utils/server-dev';
    let out = !devserver ? './dist/' : path.resolve(__dirname, '..', 'build');

    let entry = [server];
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
          { test: /\.(jsx?|js)$/, loaders: ['react-hot', 'babel'], exclude: [/node_modules/, /__tests__/] },
          { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
          { test: /\.sass$/, loader: sassLoaders },
          { test: /\.css$/, loader: cssLoaders },
          { test: /\.scss$/, loader: scssLoaders }
        ]
      },
      plugins: plugins
    });
  }
};
