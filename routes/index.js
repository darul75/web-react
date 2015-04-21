var React = require('react');
//var APP = require('../views/index');

exports.index = function(req, res){

  /*var markup = React.renderToString(APP());

  console.log(markup);*/

  res.render('index', { title: 'Express', foo: {bar:'baz'} });
};