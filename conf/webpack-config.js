// MAIN DEPENDENCIES
var path = require('path');
var webpack = require('webpack');

var node_modules_dir = path.resolve(__dirname, '../node_modules');
var pathToReact = path.resolve(node_modules_dir, 'react/dist/react.min.js');

// PLUGINS
// html / clean / extract css
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    Clean = require("clean-webpack-plugin");    
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    StatsPlugin = require("stats-webpack-plugin");

// fixture extract css
function extractForProduction(loaders) {
  return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

var cssLoaders = 'style-loader!css-loader';
var sassLoaders = 'style!css!sass?indentedSyntax';

// stats
var excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/
];

module.exports = function(options) {
  var production = options.production;

  // webpack plugins
  var plugins = [new webpack.NoErrorsPlugin()];

  var cleanDirectories = [];

  // html template  
  var suffix = '';
  var outputPath = './build/';

  if (production) {

    cssLoaders = extractForProduction(cssLoaders);
    sassLoaders = extractForProduction(sassLoaders);

    console.log("prod");
    suffix = '-prod';    
    plugins.push(new ExtractTextPlugin("app-[hash].css"));
    plugins.push(new StatsPlugin(path.join(__dirname, '../dist/', "stats.prerender.json"), {
      chunkModules: true,
      exclude: excludeFromStats
    }));

    outputPath = './dist/';

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

  plugins.push(new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'));

  // new Clean(cleanDirectories)        

  var hash = production ? '-[hash]': '';  

  return {
    devtool: 'eval',
    entry: {    
      app: './app/index',
      vendors: ['react', 'react-router', 'react-hot-loader']
    },    
    output: {
        path: outputPath,
        filename: 'app'+hash+'.js',
        publicPath: production ? '' : ''
    },
    plugins: plugins,
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: [node_modules_dir] },
        { test: /\.sass$/, loader: sassLoaders },
        { test: /\.css$/, loader: cssLoaders },
        { test: /\.scss$/, loader: cssLoaders },
        { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' }
      ]
    }
  }
};