import fs from 'fs';
import path from 'path';
//import debug from 'debug';

// https://github.com/iam4x/isomorphic-flux-boilerplate/blob/master/webpack/utils/write-stats.js
// borrowed from https://github.com/gpbl/isomorphic500/blob/master/webpack%2Futils%2Fwrite-stats.js

const filepath = path.resolve(__dirname, '../../build/webpack-stats.json');

export default function (stats) {

  const publicPath = this.options.output.publicPath;
  const json = stats.toJson();

  // get chunks by name and extensions
  const getChunks = function (name, ext) {
    ext = ext || /.js$/;
    let chunks = json.assetsByChunkName[name];

    // a chunk could be a string or an array, so make sure it is an array
    if (!(Array.isArray(chunks))) {
      chunks = [chunks];
    }

    return chunks
      .filter(chunk => ext.test(path.extname(chunk))) // filter by extension
      .map(chunk => `${publicPath}${chunk}`); // add public path to it
  };

  const script = getChunks('app', /js/);
  const style = getChunks('app', /css/);

  // Find compiled images in modules
  // it will be used to map original filename to the compiled one
  // for server side rendering
  const imagesRegex = /\.(jpe?g|png|gif|svg)$/;
  const images = json.modules
    .filter(module => imagesRegex.test(module.name))
    .map(image => {
      return {
        original: image.name,
        compiled: `${publicPath}${image.assets[0]}`
      };
    });

  const content = {script, style, images};

  fs.writeFileSync(filepath, JSON.stringify(content));
  //debug('dev')('`webpack-stats.json` updated');
}