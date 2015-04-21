var React = require('react');
var APP = require('../views/index');

exports.index = function(req, res){

  /*var markup = React.renderToString(APP());

  console.log(markup);*/  

  try {
      var markup = '';
      
      markup +=
        React.renderToStaticMarkup(React.createElement(APP, {}));
      console.log(markup);
    } catch (e) {
      return cb(e);
    }

  res.render('index', { bundle: 'bundle-prod.js' });
};