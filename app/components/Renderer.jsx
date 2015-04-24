import React from 'react';
import Router from 'react-router';

const routes = require('../routes');

delete process.env.BROWSER;

/*in the client you need to use Router.run(routes, Router.HistoryLocation, callback), 
and on the server Router.run(routes, req.path, callback).*/

export default function(req, cb) {
  Router.run(routes, req.path, cb);
}