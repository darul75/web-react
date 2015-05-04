var React = require('react');
//var App = require('../views/index-prod');
require('babel/register');

/*in the client you need to use Router.run(routes, Router.HistoryLocation, callback), and on the server Router.run(routes, req.path, callback).*/

var App = require('../app/components/application');
//var App = require('../views/app');
var fs = require('fs');
var routes = require('../app/routes');
var Router = require('react-router');

var html = fs.readFileSync('./dist/index-prod.html', {encoding:'utf8'});

exports.index = function(req, res){

  res.contentType = "text/html; charset=utf8";
  
  var markup = '';  

  try {      

       Router.run(routes, req.path, function (Root, state) {
        
        markup += 
          React.renderToString(React.createElement(Root, { bundle: 'bundle-prod.js' }));

        console.log(markup);

        markup = html.replace('CONTENT', markup);
        res.send(markup); 
      });

      /*App(req, function(toto, tutu) {
        markup += 
        React.renderToString(React.createElement(toto, { bundle: 'bundle-prod.js' }));

      });*/


      /*markup += 
        React.renderToString(React.createElement(, { bundle: 'bundle-prod.js' }));
      */      
      /**/
//      markup = html.replace('CONTENT', markup);
    } catch (e) {
      console.log('error '+ e);
      return cb(e);
    }

  /*   {  
    React.render(<Application/>, document.getElementById('app'));
    //React.render(<App />, document.getElementById('app'));
  })*/

};