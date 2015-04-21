var React = require('react');
var APP = require('../views/index');

exports.index = function(req, res){

  /*var markup = React.renderToString(APP());

  console.log(markup);*/  

  var markup = '';

  try {
      
      
      markup +=
        React.renderToString(React.createElement(APP, {bundle: 'bundle-prod.js'}));
      console.log(markup);
    } catch (e) {
      return cb(e);
    }

  res.send(markup);  

  //res.render('index', { bundle: 'bundle-prod.js' });
};