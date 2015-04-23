var React = require('react');
//var App = require('../views/index-prod');
require('babel/register');

/*in the client you need to use Router.run(routes, Router.HistoryLocation, callback), and on the server Router.run(routes, req.path, callback).*/

var App = require('../app/js/app');
//var App = require('../views/app');
var fs = require('fs');

var html = fs.readFileSync('./dist/index-prod.html', {encoding:'utf8'});

exports.index = function(req, res){

  res.contentType = "text/html; charset=utf8";
  
  var markup = '';  

  try {

      App(req, function(toto, tutu) {
        markup += 
        React.renderToString(React.createElement(toto, { bundle: 'bundle-prod.js' }));

      });

      
      /*markup += 
        React.renderToString(React.createElement(, { bundle: 'bundle-prod.js' }));
      */      
      /*markup += 
        React.renderToString(React.createElement(App(req), { bundle: 'bundle-prod.js' }));*/
      markup = html.replace('CONTENT', markup);
    } catch (e) {
      return cb(e);
    }

  /*   {  
    React.render(<Application/>, document.getElementById('app'));
    //React.render(<App />, document.getElementById('app'));
  })*/

  res.send(markup);

  //res.render('index', { bundle: 'bundle-prod.js' });
};