'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _App = require('./app');

var _App2 = _interopRequireWildcard(_App);

if (!process.env) {
  require('../stylesheets/styles.sass');
}

if (typeof document !== 'undefined' && window) {
  window.onload = function () {
    _React2['default'].render(_React2['default'].createElement(_App2['default'], null), document.getElementById('app'));
    //React.render(<Html />, document);
  };
};