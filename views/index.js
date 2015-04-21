'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _Component = require('./component');

var _Component2 = _interopRequireWildcard(_Component);

if (process.env.BROWSER) {
  require('../stylesheets/styles.sass');
}

var App = (function (_React$Component) {
  function App() {
    _classCallCheck(this, App);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(App, _React$Component);

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _React2['default'].createElement(
        'html',
        null,
        _React2['default'].createElement(
          'head',
          null,
          _React2['default'].createElement('title', null)
        ),
        _React2['default'].createElement(
          'body',
          null,
          _React2['default'].createElement('div', { id: 'root' }),
          _React2['default'].createElement('script', { src: 'bundle-prod.js' })
        )
      );
    }
  }]);

  return App;
})(_React2['default'].Component);

exports['default'] = App;
;

if (typeof document !== 'undefined' && window) {
  window.onload = function () {
    _React2['default'].render(_React2['default'].createElement(_Component2['default'], null), document.getElementById('root'));
  };
};
module.exports = exports['default'];