module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// NODE
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _http = __webpack_require__(5);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _path = __webpack_require__(3);
	
	var _path2 = _interopRequireDefault(_path);
	
	// EXPRESS
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _serveFavicon = __webpack_require__(2);
	
	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);
	
	// Profile dev or production
	var profile = process.env.DEV ? 'dev' : 'prod',
	    publicPath = profile === 'dev' ? 'build' : 'dist';
	
	var app = (0, _express2['default'])();
	
	app.set('port', process.env.PORT || 3000);
	app.use(_express2['default']['static'](publicPath));
	app.use((0, _serveFavicon2['default'])(_path2['default'].join(__dirname, '../app/images/favicon.ico')));
	
	//
	// Register middlewares
	// --------------------
	
	// renderer
	var renderer = __webpack_require__(6);
	// apis
	var apiRoutes = __webpack_require__(81);
	
	//
	// Configure middlewares
	// --------------------
	renderer.init(profile);
	
	//
	// Activate middlewares
	// --------------------
	app.use(apiRoutes);
	app.use(renderer.render);
	
	_http2['default'].createServer(app).listen(app.get('port'), function () {
	  console.log('Express server listening on port ' + app.get('port'));
	});
	
	//
	// check if HMR is enabled
	// --------------------
	if (false) {
	  // accept update of dependency
	  module.hot.accept(['./routes/api', './routes/renderer'], function () {
	    apiRoutes = require('./routes/api');
	    app.use(apiRoutes);
	    renderer = require('./routes/renderer');
	    renderer.init('dev');
	  });
	}

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "server.js" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("serve-favicon");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("http");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var renderer = __webpack_require__(7);
	
	var profile = 'dev';
	
	var routesRenderer = {
	  init: function init(type) {
	    profile = type;
	    renderer.init(type);
	  },
	  render: function render(req, res, next) {
	    renderer.render(req, res, next);
	  }
	};
	
	//
	// check if HMR is enabled
	// --------------------
	if (false) {
	  module.hot.accept(['../utils/renderer'], function () {
	    renderer = require('../utils/renderer');
	    renderer.init(profile);
	  });
	}
	
	exports['default'] = routesRenderer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "renderer.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// NODE
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _fs = __webpack_require__(12);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	// EXTERNALS
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _iso = __webpack_require__(11);
	
	var _iso2 = _interopRequireDefault(_iso);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(13);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	// CORE
	
	var _appRoutes = __webpack_require__(14);
	
	var _appRoutes2 = _interopRequireDefault(_appRoutes);
	
	var _appAlt = __webpack_require__(39);
	
	var _appAlt2 = _interopRequireDefault(_appAlt);
	
	var html = '';
	
	var renderer = {
	  init: function init(type) {
	    html = type === 'dev' ? _fs2['default'].readFileSync('./assets/index-dev.html', { encoding: 'utf8' }) : _fs2['default'].readFileSync('./dist/index-prod.html', { encoding: 'utf8' });
	  },
	  render: function render(req, res, next) {
	    var markup = '',
	        iso = new _iso2['default']();
	
	    var oneItemBootstraped = {
	      'AppStore': {
	        'dataByRestApi': {},
	        'data': {
	          'iaqpor7p': {
	            'id': 'iaqpor7p',
	            'complete': false,
	            'text': 'fsfsdf'
	          }
	        }
	      }
	    };
	
	    /* This is where the magic happens, we take the locals data we have already
	    fetched and seed our stores with data.
	    Next we use react-router to run the URL that is provided in routes.jsx
	    Finally we use iso in order to render this content so it picks back up
	    on the client side and bootstraps the stores.
	    init server renderer
	    */
	    _appAlt2['default'].bootstrap(JSON.stringify(res.locals.data || oneItemBootstraped));
	
	    try {
	      _reactRouter2['default'].run(_appRoutes2['default'], req.path, function (Handler, state) {
	        // alt flux flush
	        var content = _react2['default'].renderToString(_react2['default'].createElement(Handler));
	        iso.add(content, _appAlt2['default'].flush());
	
	        res.contentType = 'text/html; charset=utf8';
	        var notFound = _lodash2['default'].find(state.routes, { isNotFound: true });
	
	        if (notFound !== undefined) {
	          res.status(404);
	        }
	
	        // RENDERING back to client
	        var markupContent = iso.render();
	        // DOM <head> instrumentation
	        var head = _reactHelmet2['default'].rewind();
	        markup = html.replace('META', head.meta).replace('TITLE', head.title).replace('LINK', head.link).replace('CONTENT', markupContent);
	        // SEND response
	        res.send(markup);
	      });
	    } catch (e) {
	      return next(e);
	    }
	  }
	};
	
	exports['default'] = renderer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "renderer.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("lodash");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react-helmet");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("iso");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("fs");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react-router");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	/*eslint-disable no-unused-vars*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	/*eslint-enable no-unused-vars*/
	
	var _reactRouter = __webpack_require__(13);
	
	// COMPONENT
	
	var _componentsAppApp = __webpack_require__(15);
	
	var _componentsAppApp2 = _interopRequireDefault(_componentsAppApp);
	
	var _componentsContactSectionContact = __webpack_require__(58);
	
	var _componentsContactSectionContact2 = _interopRequireDefault(_componentsContactSectionContact);
	
	var _componentsHomeSectionHomeSection = __webpack_require__(59);
	
	var _componentsHomeSectionHomeSection2 = _interopRequireDefault(_componentsHomeSectionHomeSection);
	
	var _componentsNotFoundSectionNotFoundSection = __webpack_require__(69);
	
	var _componentsNotFoundSectionNotFoundSection2 = _interopRequireDefault(_componentsNotFoundSectionNotFoundSection);
	
	var _componentsTodoSectionTodoSection = __webpack_require__(70);
	
	var _componentsTodoSectionTodoSection2 = _interopRequireDefault(_componentsTodoSectionTodoSection);
	
	exports['default'] = _react2['default'].createElement(
	  _reactRouter.Route,
	  { name: 'app', path: '/', handler: _componentsAppApp2['default'] },
	  _react2['default'].createElement(_reactRouter.Route, { name: 'home', path: '/home', handler: _componentsHomeSectionHomeSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'todo', path: '/todo', handler: _componentsTodoSectionTodoSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'contact', path: '/contact', handler: _componentsContactSectionContact2['default'] }),
	  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsHomeSectionHomeSection2['default'] }),
	  _react2['default'].createElement(_reactRouter.NotFoundRoute, { handler: _componentsNotFoundSectionNotFoundSection2['default'] })
	);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(13);
	
	// COMPONENT
	
	var _HeaderHeader = __webpack_require__(16);
	
	var _HeaderHeader2 = _interopRequireDefault(_HeaderHeader);
	
	var _FooterFooter = __webpack_require__(34);
	
	var _FooterFooter2 = _interopRequireDefault(_FooterFooter);
	
	var _RecorderRecorder = __webpack_require__(37);
	
	var _RecorderRecorder2 = _interopRequireDefault(_RecorderRecorder);
	
	var _DocumentHtmlHeaderTags = __webpack_require__(51);
	
	var _DocumentHtmlHeaderTags2 = _interopRequireDefault(_DocumentHtmlHeaderTags);
	
	if (process.env.BROWSER) {
	  __webpack_require__(53);
	  __webpack_require__(55);
	  __webpack_require__(57);
	}
	
	var App = (function (_React$Component) {
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(App, _React$Component);
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_DocumentHtmlHeaderTags2['default'], null),
	        _react2['default'].createElement(_HeaderHeader2['default'], null),
	        _react2['default'].createElement(
	          'div',
	          { className: 'main-content' },
	          _react2['default'].createElement(_reactRouter.RouteHandler, null)
	        ),
	        _react2['default'].createElement(_RecorderRecorder2['default'], null),
	        _react2['default'].createElement(_FooterFooter2['default'], null)
	      );
	    }
	  }]);
	
	  return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	
	App.prototype.displayName = 'App';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(13);
	
	var brandings = ['react', 'flux', 'webpack', 'nodejs', 'babel', 'mocha', 'javascript', 'heroku', 'html-5', 'css-3', 'express', 'lodash'];
	
	var brandingsMarkup = [];
	
	brandings.forEach(function (elt, idx) {
	  brandingsMarkup.push(_react2['default'].createElement('img', { src: __webpack_require__(17)("./" + elt + '.svg'), key: idx, width: '40', height: '40' }));
	});
	
	if (process.env.BROWSER) {
	  __webpack_require__(30);
	}
	
	var Header = (function (_React$Component) {
	  function Header() {
	    _classCallCheck(this, Header);
	
	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(Header, _React$Component);
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'header' },
	        _react2['default'].createElement(
	          'div',
	          null,
	          brandingsMarkup
	        ),
	        _react2['default'].createElement(
	          'header',
	          null,
	          _react2['default'].createElement(
	            'ul',
	            null,
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: 'app' },
	                'Home'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: 'todo' },
	                'Todo'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: 'contact' },
	                'Contact'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	
	Header.prototype.displayName = 'Header';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./babel.svg": 18,
		"./css-3.svg": 19,
		"./express.svg": 20,
		"./flux.svg": 21,
		"./heroku.svg": 22,
		"./html-5.svg": 23,
		"./javascript.svg": 24,
		"./lodash.svg": 25,
		"./mocha.svg": 26,
		"./nodejs.svg": 27,
		"./react.svg": 28,
		"./webpack.svg": 29
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 17;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3BOGsrW.svg"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIzNjFweCIgdmlld0JveD0iMCAwIDI1NiAzNjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljg0Mzg2OCwzNjAuMDg3OTEyIEwyMy42NjE3MTQzLDMzMS4xNjYyNDIgTDAuNDQ1MTg2ODEzLDcwLjc2NTcxNDMgTDI1NS41NTQ4MTMsNzAuNzY1NzE0MyBMMjMyLjMxMzY3LDMzMS4xMjU0NTEgTDEyNy44NDM4NjgsMzYwLjA4NzkxMiBMMTI3Ljg0Mzg2OCwzNjAuMDg3OTEyIFoiIGZpbGw9IiMyNjRERTQiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjEyLjQxNjcwMywzMTQuNTQ2NjM3IEwyMzIuMjc3ODAyLDkyLjA1NzMxODcgTDEyOCw5Mi4wNTczMTg3IEwxMjgsMzM3Ljk1MDI0MiBMMjEyLjQxNjcwMywzMTQuNTQ2NjM3IEwyMTIuNDE2NzAzLDMxNC41NDY2MzcgWiIgZmlsbD0iIzI5NjVGMSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik01My42Njg1NzE0LDE4OC42MzYxMzIgTDU2LjUzMDk4OSwyMjAuNTcyODM1IEwxMjgsMjIwLjU3MjgzNSBMMTI4LDE4OC42MzYxMzIgTDUzLjY2ODU3MTQsMTg4LjYzNjEzMiBMNTMuNjY4NTcxNCwxODguNjM2MTMyIFoiIGZpbGw9IiNFQkVCRUIiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNNDcuOTE3MDExLDEyMy45OTQ3MjUgTDUwLjgyMDIxOTgsMTU1LjkzMjEzMiBMMTI4LDE1NS45MzIxMzIgTDEyOCwxMjMuOTk0NzI1IEw0Ny45MTcwMTEsMTIzLjk5NDcyNSBMNDcuOTE3MDExLDEyMy45OTQ3MjUgWiIgZmlsbD0iI0VCRUJFQiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjgsMjcxLjU4MDEzMiBMMTI3Ljg2MDA0NCwyNzEuNjE3NDA3IEw5Mi4yOTE1MTY1LDI2Mi4wMTMxODcgTDkwLjAxNzc1ODIsMjM2LjU0MTg5IEw1Ny45NTc5NzgsMjM2LjU0MTg5IEw2Mi40MzIzNTE2LDI4Ni42ODc2NDggTDEyNy44NTMwMTEsMzA0Ljg0ODg3OSBMMTI4LDMwNC44MDgwODggTDEyOCwyNzEuNTgwMTMyIEwxMjgsMjcxLjU4MDEzMiBaIiBmaWxsPSIjRUJFQkVCIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTYwLjQ4MzUxNjUsMCBMOTkuMTY0ODM1MiwwIEw5OS4xNjQ4MzUyLDE2LjE3NTgyNDIgTDc2LjY1OTM0MDcsMTYuMTc1ODI0MiBMNzYuNjU5MzQwNywzMi4zNTE2NDg0IEw5OS4xNjQ4MzUyLDMyLjM1MTY0ODQgTDk5LjE2NDgzNTIsNDguNTI3NDcyNSBMNjAuNDgzNTE2NSw0OC41Mjc0NzI1IEw2MC40ODM1MTY1LDAgTDYwLjQ4MzUxNjUsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEwNi45MDEwOTksMCBMMTQ1LjU4MjQxOCwwIEwxNDUuNTgyNDE4LDE0LjA2NTkzNDEgTDEyMy4wNzY5MjMsMTQuMDY1OTM0MSBMMTIzLjA3NjkyMywxNi44NzkxMjA5IEwxNDUuNTgyNDE4LDE2Ljg3OTEyMDkgTDE0NS41ODI0MTgsNDkuMjMwNzY5MiBMMTA2LjkwMTA5OSw0OS4yMzA3NjkyIEwxMDYuOTAxMDk5LDM0LjQ2MTUzODUgTDEyOS40MDY1OTMsMzQuNDYxNTM4NSBMMTI5LjQwNjU5MywzMS42NDgzNTE2IEwxMDYuOTAxMDk5LDMxLjY0ODM1MTYgTDEwNi45MDEwOTksMCBMMTA2LjkwMTA5OSwwIFoiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTUzLjMxODY4MSwwIEwxOTIsMCBMMTkyLDE0LjA2NTkzNDEgTDE2OS40OTQ1MDUsMTQuMDY1OTM0MSBMMTY5LjQ5NDUwNSwxNi44NzkxMjA5IEwxOTIsMTYuODc5MTIwOSBMMTkyLDQ5LjIzMDc2OTIgTDE1My4zMTg2ODEsNDkuMjMwNzY5MiBMMTUzLjMxODY4MSwzNC40NjE1Mzg1IEwxNzUuODI0MTc2LDM0LjQ2MTUzODUgTDE3NS44MjQxNzYsMzEuNjQ4MzUxNiBMMTUzLjMxODY4MSwzMS42NDgzNTE2IEwxNTMuMzE4NjgxLDAgTDE1My4zMTg2ODEsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTIwMi4xMjY3NjksMTg4LjYzNjEzMiBMMjA3Ljg5MjM5NiwxMjMuOTk0NzI1IEwxMjcuODg5NTgyLDEyMy45OTQ3MjUgTDEyNy44ODk1ODIsMTU1LjkzMjEzMiBMMTcyLjg5MjEzMiwxNTUuOTMyMTMyIEwxNjkuOTg2MTEsMTg4LjYzNjEzMiBMMTI3Ljg4OTU4MiwxODguNjM2MTMyIEwxMjcuODg5NTgyLDIyMC41NzI4MzUgTDE2Ny4yMTY1MjcsMjIwLjU3MjgzNSBMMTYzLjUwOTQ1MSwyNjEuOTkyNzkxIEwxMjcuODg5NTgyLDI3MS42MDY4NTcgTDEyNy44ODk1ODIsMzA0LjgzMzQwNyBMMTkzLjM2MjI4NiwyODYuNjg3NjQ4IEwxOTMuODQyNjM3LDI4MS4yOTE5NTYgTDIwMS4zNDc1MTYsMTk3LjIxMjEzMiBMMjAyLjEyNjc2OSwxODguNjM2MTMyIEwyMDIuMTI2NzY5LDE4OC42MzYxMzIgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "haVk2qs.svg"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjEwMnB4IiB2aWV3Qm94PSIwIDAgMjU2IDEwMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0yMDUuMDMzMzA2LDAgQzE5NC45ODU0MjEsMCAxODUuNjI2OTgyLDIuOTIwNjk0MDggMTc3LjczMTc5OSw3LjkzODgxODg4IEwxMjcuOTk4NTQ1LDQ0LjQ2NDk0OTMgTDEwMS43ODUwMjUsMjUuMjE1NzEzNSBDMTAwLjIwNTQwNywyNy43Nzg1OTM0IDk4LjYxNDE1MjEsMzAuMzI2OTI4MSA5Ny4wOTI3MTQ5LDMyLjk2NTQ0MzYgQzk2LjcyNjE3MzYsMzMuNTk5NjE4MiA5Ni4zODU4MTM4LDM0LjI0MjUyIDk2LjAyNTA5MDYsMzQuODc2Njk0NiBMMTE3LjkzNjExNCw1MC45NjY2OTM2IEw3MS45NTg0NTUsODQuNzI5MjE5IEM2NS42NTc0MzU3LDg4LjY1NjQ0NzEgNTguNDA4MDYzNSw5MC43MzM1MTQ0IDUwLjk2Mzc4NDUsOTAuNzMzNTE0NCBDMjkuMDM4MjE1NSw5MC43MzM1MTQ0IDExLjE5Njk2MzcsNzIuODk1MTcxNiAxMS4xOTY5NjM3LDUwLjk2NjY5MzYgQzExLjE5Njk2MzcsMjkuMDM4MjE1NSAyOS4wMzUzMDY0LDExLjE5OTg3MjcgNTAuOTYzNzg0NSwxMS4xOTk4NzI3IEM1OC40MDgwNjM1LDExLjE5OTg3MjcgNjUuNjYwMzQ0OCwxMy4yNzQwMzEgNzEuOTU4NDU1LDE3LjIwNDE2ODEgTDc2LjUyODU4NDksMjAuNTU4MzExOCBDNzguNDE2NTYzNCwxNy4yOTQzNDg5IDgwLjM3NDM1OTQsMTQuMTA2MDIxNSA4Mi4zNDk2MDk3LDEwLjk0MDk2NjYgTDc4LjI2NTI5MjQsNy45NDE3Mjc5MyBDNzAuMzczMDE4NSwyLjkyMDY5NDA4IDYxLjAxMTY3MDMsMC4wMDI5MDkwNTc4NSA1MC45NjM3ODQ1LDAuMDAyOTA5MDU3ODUgQzIyLjgxODY0OTgsMC4wMDI5MDkwNTc4NSAwLDIyLjgyMTU1ODggMCw1MC45NjY2OTM2IEMwLDc5LjExMTgyODMgMjIuODE1NzQwNywxMDEuOTMwNDc4IDUwLjk2Mzc4NDUsMTAxLjkzMDQ3OCBDNjEuMDExNjcwMywxMDEuOTMwNDc4IDcwLjM3MzAxODUsOTkuMDA5Nzg0IDc4LjI2NTI5MjQsOTMuOTkxNjU5MiBMMTI3Ljk5ODU0NSw1Ny40Njg0Mzc5IEwxNTQuMzEzODgzLDc2Ljc5MzMwOTIgQzE1NS45MjU1MDEsNzQuMTUxODg0NiAxNTcuNTM0MjEsNzEuNTAxNzMyOSAxNTkuMTI1NDY0LDY4Ljc0MTAzNyBDMTU5LjQzOTY0Myw2OC4xOTQxMzQyIDE1OS43MjQ3Myw2Ny42NTAxNDAzIDE2MC4wMzYsNjcuMTAzMjM3NSBMMTM4LjA2Mzg4Niw1MC45NjY2OTM2IEwxODQuMDM4NjM2LDE3LjIwNDE2ODEgQzE5MC4zMzk2NTUsMTMuMjc2OTQgMTk3LjU5MTkzNiwxMS4xOTk4NzI3IDIwNS4wMzMzMDYsMTEuMTk5ODcyNyBDMjI2Ljk2MTc4NSwxMS4xOTk4NzI3IDI0NC44MDAxMjcsMjkuMDM4MjE1NSAyNDQuODAwMTI3LDUwLjk2NjY5MzYgQzI0NC44MDAxMjcsNzIuODk1MTcxNiAyMjYuOTYxNzg1LDkwLjczMzUxNDQgMjA1LjAzMzMwNiw5MC43MzM1MTQ0IEMxOTcuNTg5MDI3LDkwLjczMzUxNDQgMTkwLjMzOTY1NSw4OC42NTkzNTYxIDE4NC4wMzg2MzYsODQuNzI5MjE5IEwxNzkuNTM1NDE0LDgxLjQyMTYyMDIgQzE3Ny42MjcwNzIsODQuNzE3NTgyOCAxNzUuNjk1NDU4LDg3LjkyMDQ1NTQgMTczLjc1NTExNiw5MS4wNjgwNTYgTDE3Ny43MzQ3MDgsOTMuOTg4NzUwMSBDMTg1LjYyOTg5MSw5OS4wMDk3ODQgMTk0Ljk4ODMzLDEwMS45Mjc1NjkgMjA1LjAzNjIxNSwxMDEuOTI3NTY5IEMyMzMuMTgxMzUsMTAxLjkyNzU2OSAyNTYsNzkuMTA4OTE5MiAyNTYsNTAuOTYzNzg0NSBDMjU1Ljk5NzA5MSwyMi44MTg2NDk4IDIzMy4xODEzNSwwIDIwNS4wMzMzMDYsMCBMMjA1LjAzMzMwNiwwIFoiIGZpbGw9IiM0NEI3NEEiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSI0MDBweCIgdmlld0JveD0iMCAwIDI1NiA0MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjguMDgzMDA3MiwzOTguMjg4NzM3IEwyOC4wODMwMDcyLDM2My41MTAyMDMgQzI4LjA4MzAwNzIsMzYxLjA1ODI2NSAyNi4yODU0NjUyLDM2MC4wMDA0ODQgMjQuMTY2MzU3NiwzNjAuMDAwNDg0IEMxOS45MTgyNTA3LDM2MC4wMDA0ODQgMTQuNjEyMzYyNSwzNjEuMDU4MjY1IDkuNzk1MTY5MjMsMzYzLjE4MTQzMyBMOS43OTUxNjkyMywzOTguMjg4Nzk0IEwwLDM5OC4yODg3OTQgTDAsMzMzLjcxMjczMiBMOS43OTUxNjkyMywzMzMuNzEyNzMyIEw5Ljc5NTE2OTIzLDM1NS4wMTcxMzQgQzE0LjQ1MDY2NDksMzUzLjMwNDUgMjAuMDAxMzI5NCwzNTEuODM2MTg1IDI1LjU1MjkwODcsMzUxLjgzNjE4NSBDMzQuNDUxMTM2NiwzNTEuODM2MTg1IDM3Ljc5ODY5OTksMzU3LjMwNjAwMSAzNy43OTg2OTk5LDM2NC44MTMyMTggTDM3Ljc5ODY5OTksMzk4LjI4ODc5NCBMMjguMDgzMDA3MiwzOTguMjg4Nzk0IEwyOC4wODMwMDcyLDM5OC4yODg3MzcgTDI4LjA4MzAwNzIsMzk4LjI4ODczNyBaIE01Ni4wODIwMjA5LDM3Ny4yMjY0ODEgQzU2LjQwODEwMzUsMzg4LjkwMDQ5OSA1OC42OTUxOTgyLDM5MS4xODcxMzYgNjUuODc2MzMyNSwzOTEuMTg3MTM2IEM3MS41MTAwNzU3LDM5MS4xODcxMzYgNzcuODc4MjA1MSwzODkuMzA4MzQ1IDgyLjc3NzYxOTMsMzg3LjQyOTk1NCBMODQuNDA5ODYxNywzOTQuNzc1OTMxIEM3OS4xODQzNjQ4LDM5Ny4xNDY1NjIgNzIuODE3MTUwNCwzOTkuNDMwNTEyIDY1LjIyNjg1NDgsMzk5LjQzMDUxMiBDNDguODk2NDgzOSwzOTkuNDMwNTEyIDQ2LjM2NDU1NTcsMzkwLjQ1Mjc1IDQ2LjM2NDU1NTcsMzc2LjE2MzMyNSBDNDYuMzY0NTU1NywzNjguMzI3Nzk2IDQ2LjkzODEwMTksMzYxLjIyMzk2NSA0OC44MTUxMjA2LDM1NC42OTMyMjQgQzUzLjcxMjcwNTIsMzUyLjgxNDgzMyA2MC4yNDQzNjE4LDM1MS44MzYxMjggNjguNDg3NjgwMSwzNTEuODM2MTI4IEM4MS44ODA1NjM2LDM1MS44MzYxMjggODUuOTYwNzQwNiwzNTkuMjY2MDQxIDg1Ljk2MDc0MDYsMzcyLjI0NTc2MSBMODUuOTYwNzQwNiwzNzcuMjI2NDI0IEw1Ni4wODIwMjA5LDM3Ny4yMjY0MjQgTDU2LjA4MjAyMDksMzc3LjIyNjQ4MSBMNTYuMDgyMDIwOSwzNzcuMjI2NDgxIFogTTY4LjQ4NzczNzIsMzYwLjAwMDQ4NCBDNjUuNTUyOTM3MywzNjAuMDAwNDg0IDYwLjg5NzQ0MTcsMzYwLjA4MTc5IDU3LjA2MTE4MzQsMzYwLjgxMzQ4OSBDNTYuNjU0NzA5NCwzNjIuNzczNTg3IDU2LjE2MjQxMjMsMzY1LjQ2ODA3IDU1Ljk5ODk0MjIsMzcwLjQ0ODc5IEw3Ni40MDg1NzUyLDM3MC40NDg3OSBDNzYuNDA4NTc1MiwzNjMuNjcwOTg1IDc1LjE4MzcyMTYsMzYwLjAwMDQ4NCA2OC40ODc3MzcyLDM2MC4wMDA0ODQgTDY4LjQ4NzczNzIsMzYwLjAwMDQ4NCBMNjguNDg3NzM3MiwzNjAuMDAwNDg0IFogTTEwNC4zMjU0MjUsMzYzLjE4MTQzMyBMMTA0LjMyNTQyNSwzOTguMjg4Nzk0IEw5NC41Mjg0MjYxLDM5OC4yODg3OTQgTDk0LjUyODQyNjEsMzU4Ljc3NDI1OCBDMTAyLjc3NDQ4OSwzNTQuMjg1Mzc4IDExMS41MDkxODksMzUyLjg5NjU5NiAxMTcuMjI2MDY5LDM1Mi40ODg3NSBMMTE3LjIyNjA2OSwzNjAuNjUzMDQ5IEMxMTMuMjI1NDI1LDM2MC45NzkxODkgMTA4LjE2MTY4MywzNjEuNDY4NzQyIDEwNC4zMjU0MjUsMzYzLjE4MTQzMyBMMTA0LjMyNTQyNSwzNjMuMTgxNDMzIEwxMDQuMzI1NDI1LDM2My4xODE0MzMgWiBNMTQzLjEwMzI4NywzOTkuNDMwNTEyIEMxMjguNDg3MzIzLDM5OS40MzA1MTIgMTIxLjg3NTI3NSwzOTIuMjQ3NjA1IDEyMS44NzUyNzUsMzc1LjgzNzI0MyBDMTIxLjg3NTI3NSwzNTguNDQ4MTc2IDEzMC42MTAwMzIsMzUxLjgzNjEyOCAxNDMuMTAzMjg3LDM1MS44MzYxMjggQzE1Ny43MTQ3OTIsMzUxLjgzNjEyOCAxNjQuMzI4NjEzLDM1OS4wMTkwMzUgMTY0LjMyODYxMywzNzUuNDI5Mzk3IEMxNjQuMzI4NjEzLDM5Mi44MTg1MjEgMTU1LjU5MjA4MiwzOTkuNDMwNTEyIDE0My4xMDMyODcsMzk5LjQzMDUxMiBMMTQzLjEwMzI4NywzOTkuNDMwNTEyIEwxNDMuMTAzMjg3LDM5OS40MzA1MTIgWiBNMTQzLjEwMzI4NywzNjAuMDAwNDg0IEMxMzUuNTkwNjk2LDM2MC4wMDA0ODQgMTMxLjQyODM1NSwzNjQuMzI1ODM4IDEzMS40MjgzNTUsMzc1LjgzNzMgQzEzMS40MjgzNTUsMzg4LjQxMTQwNCAxMzQuOTM4NTMxLDM5MS4xODcxOTMgMTQzLjEwMzI4NywzOTEuMTg3MTkzIEMxNTAuNjEyMjc3LDM5MS4xODcxOTMgMTU0Ljc3NzMwNSwzODYuOTQwNDU5IDE1NC43NzczMDUsMzc1LjQyOTQ1NCBDMTU0Ljc3NzMwNSwzNjIuODU1MjkzIDE1MS4yNjYyNzEsMzYwLjAwMDQ4NCAxNDMuMTAzMjg3LDM2MC4wMDA0ODQgTDE0My4xMDMyODcsMzYwLjAwMDQ4NCBMMTQzLjEwMzI4NywzNjAuMDAwNDg0IFogTTIxMS41OTI4NTQsMzk4LjI4ODczNyBMMjAwLjA4MTQ0OSwzOTguMjg4NzM3IEMxOTcuMzg4NzM4LDM5MS4xMDUzNzIgMTkzLjYzMTE1NiwzODMuNzU2NzY2IDE4Ny44MzQ3NDMsMzc3LjM4OTQ5NCBMMTgyLjY5MTQ2NywzNzcuMzg5NDk0IEwxODIuNjkxNDY3LDM5OC4yODg3MzcgTDE3Mi44OTUzODMsMzk4LjI4ODczNyBMMTcyLjg5NTM4MywzMzMuNzEyNzMyIEwxODIuNjkxNDY3LDMzMy43MTI3MzIgTDE4Mi42OTE0NjcsMzcwLjc3NDgxNiBMMTg3LjI2Mzg4NCwzNzAuNzc0ODE2IEMxOTIuMjQzNjksMzY1LjYzMTA4MyAxOTYuMDc5OTQ4LDM1OS4yNjYwOTggMTk4Ljc3NTI4OSwzNTIuOTc3OTAzIEwyMDkuNzk1MzEyLDM1Mi45Nzc5MDMgQzIwNi4wNDEyNzUsMzYwLjU3MTM0MyAyMDEuMjI0OTM5LDM2Ny4yNjUwOTcgMTk1LjgzNTk3MiwzNzIuNzM0OTEzIEMyMDIuMjg2MzIzLDM4MC44OTkyNyAyMDcuMzQ3NDM1LDM4OS41NTMxMjEgMjExLjU5Mjg1NCwzOTguMjg4NzM3IEwyMTEuNTkyODU0LDM5OC4yODg3MzcgTDIxMS41OTI4NTQsMzk4LjI4ODczNyBaIE0yMjkuOTU1NzA5LDM5OS40MzA1MTIgQzIyMS4wNTkyNTQsMzk5LjQzMDUxMiAyMTcuNzExNjksMzkzLjk2MjkyNiAyMTcuNzExNjksMzg2LjQ1MTI0OSBMMjE3LjcxMTY5LDM1Mi45Nzc5MDMgTDIyNy40MjU2MSwzNTIuOTc3OTAzIEwyMjcuNDI1NjEsMzg3LjY3NDczIEMyMjcuNDI1NjEsMzkwLjEyNjY2NyAyMjkuMjIwNDY1LDM5MS4xODcxMzYgMjMxLjM0MzE3NSwzOTEuMTg3MTM2IEMyMzUuNTg4NTk1LDM5MS4xODcxMzYgMjQxLjM4NDk1LDM5MC4xMjY2NjcgMjQ2LjIwMzkxNiwzODguMDAzNSBMMjQ2LjIwMzkxNiwzNTIuOTc3OTAzIEwyNTYsMzUyLjk3NzkwMyBMMjU2LDM5Mi4zMjg5MTEgQzI0NC40MDcyODksMzk4LjY5NjU4MyAyMzUuNTA3Mjg4LDM5OS40MzA1MTIgMjI5Ljk1NTcwOSwzOTkuNDMwNTEyIEwyMjkuOTU1NzA5LDM5OS40MzA1MTIgTDIyOS45NTU3MDksMzk5LjQzMDUxMiBaIiBmaWxsPSIjNjc2MkE2Ij48L3BhdGg+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMjUuNjI3NTU3LDMxNy4yNTI3OTEgTDMwLjI1NzEzNjMsMzE3LjI1Mjc5MSBDMTMuNTQ1NzI0OSwzMTcuMjUyNzkxIDAsMzAzLjcwODIxMiAwLDI4Ni45OTgxMTEgTDAsMzAuMjU1OTg5OCBDMCwxMy41NDU3MjQ5IDEzLjU0NTcyNDksMCAzMC4yNTcxMzYzLDAgTDIyNS42Mjc1NTcsMCBDMjQyLjMzNjUxMiwwIDI1NS44ODczMTQsMTMuNTQ1NzI0OSAyNTUuODg3MzE0LDMwLjI1NTk4OTggTDI1NS44ODczMTQsMjg2Ljk5ODExMSBDMjU1Ljg4NzMxNCwzMDMuNzA4MjEyIDI0Mi4zMzY1MTIsMzE3LjI1Mjc5MSAyMjUuNjI3NTU3LDMxNy4yNTI3OTEgTDIyNS42Mjc1NTcsMzE3LjI1Mjc5MSBMMjI1LjYyNzU1NywzMTcuMjUyNzkxIFoiIGZpbGw9IiM2NzYyQTYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE2MC4zNjA4MjQsMjczLjYwMDc3OCBMMTYwLjM2MDgyNCwxNDcuNjA5Nzk3IEMxNjAuMzYwODI0LDE0Ny42MDk3OTcgMTY4LjU1NTI4MSwxMTcuNDYwMTA1IDU5LjQxNjU2ODEsMTU5Ljk0MzgyMSBDNTkuMjE2OTExMSwxNjAuNDgyNTE4IDU5LjIxNjkxMTEsNDMuNDM5NzQ0MSA1OS4yMTY5MTExLDQzLjQzOTc0NDEgTDk0Ljg3NjU4MDksNDMuMjIwOTIzOSBMOTQuODc2NTgwOSwxMTguMjExMzk5IEM5NC44NzY1ODA5LDExOC4yMTEzOTkgMTk0LjcyMjk2OSw3OC44ODU2NzExIDE5NC43MjI5NjksMTQ4LjAzNDgyNSBMMTk0LjcyMjk2OSwyNzMuNjAxMTA2IEwxNjAuMzYwODI0LDI3My42MDExMDYgTDE2MC4zNjA4MjQsMjczLjYwMDc3OCBMMTYwLjM2MDgyNCwyNzMuNjAwNzc4IFogTTE4MC42ODA4MDQsODguNjA2NDY0NSBMMTQyLjg1NjAyNiw4OC42MDY0NjQ1IEMxNTYuNDcwODY5LDcxLjk2MDI0MDYgMTY4Ljc5NTg4NSw0My40Mzk0MTY1IDE2OC43OTU4ODUsNDMuNDM5NDE2NSBMMjA3LjkwNTI0OSw0My40Mzk0MTY1IEMyMDcuOTA1MjQ5LDQzLjQzOTU4MDMgMjAxLjIxMDQzMSw2Mi4wMjU1NDA2IDE4MC42ODA4MDQsODguNjA2NDY0NSBMMTgwLjY4MDgwNCw4OC42MDY0NjQ1IEwxODAuNjgwODA0LDg4LjYwNjQ2NDUgWiBNNTkuODY0MzYzNCwyNzMuMzgxOTU4IEw1OS44NjQzNjM0LDIwMS42MzM5ODYgTDk1Ljc0MTU0MzIsMjM3LjUxMTE2NiBMNTkuODY0MzYzNCwyNzMuMzgxOTU4IEw1OS44NjQzNjM0LDI3My4zODE5NTggWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIzNjFweCIgdmlld0JveD0iMCAwIDI1NiAzNjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjU1LjU1NDgxMyw3MC43NjU3MTQzIEwyMzIuMzEzNjcsMzMxLjEyNTQ1MSBMMTI3Ljg0Mzg2OCwzNjAuMDg3OTEyIEwyMy42NjE3MTQzLDMzMS4xNjYyNDIgTDAuNDQ1MTg2ODEzLDcwLjc2NTcxNDMgTDI1NS41NTQ4MTMsNzAuNzY1NzE0MyBMMjU1LjU1NDgxMyw3MC43NjU3MTQzIFoiIGZpbGw9IiNFNDREMjYiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTI4LDMzNy45NTAyNDIgTDIxMi40MTY3MDMsMzE0LjU0NjYzNyBMMjMyLjI3NzgwMiw5Mi4wNTczMTg3IEwxMjgsOTIuMDU3MzE4NyBMMTI4LDMzNy45NTAyNDIgTDEyOCwzMzcuOTUwMjQyIFoiIGZpbGw9IiNGMTY1MjkiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNODIuODIwMjE5OCwxNTUuOTMyMTMyIEwxMjgsMTU1LjkzMjEzMiBMMTI4LDEyMy45OTQ3MjUgTDQ3LjkxNzAxMSwxMjMuOTk0NzI1IEw0OC42ODE0OTQ1LDEzMi41NjI5ODkgTDU2LjUzMDk4OSwyMjAuNTcyODM1IEwxMjgsMjIwLjU3MjgzNSBMMTI4LDE4OC42MzYxMzIgTDg1LjczODkwMTEsMTg4LjYzNjEzMiBMODIuODIwMjE5OCwxNTUuOTMyMTMyIEw4Mi44MjAyMTk4LDE1NS45MzIxMzIgWiIgZmlsbD0iI0VCRUJFQiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik05MC4wMTc3NTgyLDIzNi41NDE4OSBMNTcuOTU3OTc4LDIzNi41NDE4OSBMNjIuNDMyMzUxNiwyODYuNjg3NjQ4IEwxMjcuODUzMDExLDMwNC44NDg4NzkgTDEyOCwzMDQuODA4MDg4IEwxMjgsMjcxLjU4MDEzMiBMMTI3Ljg2MDA0NCwyNzEuNjE3NDA3IEw5Mi4yOTE1MTY1LDI2Mi4wMTMxODcgTDkwLjAxNzc1ODIsMjM2LjU0MTg5IEw5MC4wMTc3NTgyLDIzNi41NDE4OSBaIiBmaWxsPSIjRUJFQkVCIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTI0LjE4MDc0NzMsMCBMNDAuNDEwNzI1MywwIEw0MC40MTA3MjUzLDE2LjAzNTE2NDggTDU1LjI1NzMxODcsMTYuMDM1MTY0OCBMNTUuMjU3MzE4NywwIEw3MS40ODgsMCBMNzEuNDg4LDQ4LjU1ODQxNzYgTDU1LjI1ODAyMiw0OC41NTg0MTc2IEw1NS4yNTgwMjIsMzIuMjk4MTk3OCBMNDAuNDExNDI4NiwzMi4yOTgxOTc4IEw0MC40MTE0Mjg2LDQ4LjU1ODQxNzYgTDI0LjE4MTQ1MDUsNDguNTU4NDE3NiBMMjQuMTgxNDUwNSwwIEwyNC4xODA3NDczLDAgTDI0LjE4MDc0NzMsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTkyLjgzMDk0NTEsMTYuMTAyNjgxMyBMNzguNTQyNzY5MiwxNi4xMDI2ODEzIEw3OC41NDI3NjkyLDAgTDEyMy4zNTY4MzUsMCBMMTIzLjM1NjgzNSwxNi4xMDI2ODEzIEwxMDkuMDYyMzMsMTYuMTAyNjgxMyBMMTA5LjA2MjMzLDQ4LjU1ODQxNzYgTDkyLjgzMTY0ODQsNDguNTU4NDE3NiBMOTIuODMxNjQ4NCwxNi4xMDI2ODEzIEw5Mi44MzA5NDUxLDE2LjEwMjY4MTMgTDkyLjgzMDk0NTEsMTYuMTAyNjgxMyBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEzMC40NjkyNzUsMCBMMTQ3LjM5MjcwMywwIEwxNTcuODAyOTAxLDE3LjA2MTk3OCBMMTY4LjIwMjU0OSwwIEwxODUuMTMyMzA4LDAgTDE4NS4xMzIzMDgsNDguNTU4NDE3NiBMMTY4Ljk2OTE0Myw0OC41NTg0MTc2IEwxNjguOTY5MTQzLDI0LjQ5MDE5NzggTDE1Ny44MDI5MDEsNDEuNzU1NDI4NiBMMTU3LjUyMzY5Miw0MS43NTU0Mjg2IEwxNDYuMzQ5NzE0LDI0LjQ5MDE5NzggTDE0Ni4zNDk3MTQsNDguNTU4NDE3NiBMMTMwLjQ2OTI3NSw0OC41NTg0MTc2IEwxMzAuNDY5Mjc1LDAgTDEzMC40NjkyNzUsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTE5My4yMDk2NywwIEwyMDkuNDQ0NTcxLDAgTDIwOS40NDQ1NzEsMzIuNTA3NzgwMiBMMjMyLjI2ODY1OSwzMi41MDc3ODAyIEwyMzIuMjY4NjU5LDQ4LjU1ODQxNzYgTDE5My4yMDk2Nyw0OC41NTg0MTc2IEwxOTMuMjA5NjcsMCBMMTkzLjIwOTY3LDAgWiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjcuODg5NTgyLDIyMC41NzI4MzUgTDE2Ny4yMTY1MjcsMjIwLjU3MjgzNSBMMTYzLjUwOTQ1MSwyNjEuOTkyNzkxIEwxMjcuODg5NTgyLDI3MS42MDY4NTcgTDEyNy44ODk1ODIsMzA0LjgzMzQwNyBMMTkzLjM2MjI4NiwyODYuNjg3NjQ4IEwxOTMuODQyNjM3LDI4MS4yOTE5NTYgTDIwMS4zNDc1MTYsMTk3LjIxMjEzMiBMMjAyLjEyNjc2OSwxODguNjM2MTMyIEwxMjcuODg5NTgyLDE4OC42MzYxMzIgTDEyNy44ODk1ODIsMjIwLjU3MjgzNSBMMTI3Ljg4OTU4MiwyMjAuNTcyODM1IFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljg4OTU4MiwxNTUuODU0MDY2IEwxMjcuODg5NTgyLDE1NS45MzIxMzIgTDIwNS4wMzI3OTEsMTU1LjkzMjEzMiBMMjA1LjY3MzQ5NSwxNDguNzUzNTgyIEwyMDcuMTI4NjE1LDEzMi41NjI5ODkgTDIwNy44OTIzOTYsMTIzLjk5NDcyNSBMMTI3Ljg4OTU4MiwxMjMuOTk0NzI1IEwxMjcuODg5NTgyLDE1NS44NTQwNjYgTDEyNy44ODk1ODIsMTU1Ljg1NDA2NiBaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyNTZweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMCwwIEwyNTYsMCBMMjU2LDI1NiBMMCwyNTYgTDAsMCBaIiBmaWxsPSIjRjdERjFFIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTY3LjMxMTc0NiwyMTMuOTMyMjkyIEw4Ni45MDI2NTQsMjAyLjA3NjI0MSBDOTAuNjgyMTA3OSwyMDguNzc3MzQ2IDk0LjEyMDIyODYsMjE0LjQ0NzEzNyAxMDIuMzY3MDg2LDIxNC40NDcxMzcgQzExMC4yNzIyMDMsMjE0LjQ0NzEzNyAxMTUuMjU2MDc2LDIxMS4zNTQ4MTkgMTE1LjI1NjA3NiwxOTkuMzI2ODgzIEwxMTUuMjU2MDc2LDExNy41Mjg3ODcgTDEzOS4zMTM1NzUsMTE3LjUyODc4NyBMMTM5LjMxMzU3NSwxOTkuNjY2OTk3IEMxMzkuMzEzNTc1LDIyNC41ODQzMyAxMjQuNzA3NzU5LDIzNS45MjU5NDMgMTAzLjM5ODQsMjM1LjkyNTk0MyBDODQuMTUzMjk1MiwyMzUuOTI1OTQzIDcyLjk4MTk0MjksMjI1Ljk1ODYwMyA2Ny4zMTEzMzk3LDIxMy45MzAyNiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xNTIuMzgwOTUyLDIxMS4zNTQ0MTMgTDE3MS45Njk0MjIsMjAwLjAxMjggQzE3Ny4xMjU5OTQsMjA4LjQzMzk4MSAxODMuODI3OTExLDIxNC42MTk4MzUgMTk1LjY4NDM2OCwyMTQuNjE5ODM1IEMyMDUuNjUyNTIxLDIxNC42MTk4MzUgMjEyLjAwOTA0MSwyMDkuNjM1OTYyIDIxMi4wMDkwNDEsMjAyLjc2MjE1OSBDMjEyLjAwOTA0MSwxOTQuNTEzNjc2IDIwNS40Nzk0MTYsMTkxLjU5MjAyNSAxOTQuNDgxMTY4LDE4Ni43ODIwNyBMMTg4LjQ2ODQxOSwxODQuMjAyNTY1IEMxNzEuMTExMjEzLDE3Ni44MTQ3MyAxNTkuNTk3MzA4LDE2Ny41MzUzNCAxNTkuNTk3MzA4LDE0Ny45NDQ4MzggQzE1OS41OTczMDgsMTI5LjkwMTMwOCAxNzMuMzQ0NTA4LDExNi4xNTMyOTUgMTk0LjgyNTc1MiwxMTYuMTUzMjk1IEMyMTAuMTE5OTI0LDExNi4xNTMyOTUgMjIxLjExNzc2NSwxMjEuNDgwOTQgMjI5LjAyMTY2MywxMzUuNDAwNDMyIEwyMTAuMjkwNTksMTQ3LjQyODc3NSBDMjA2LjE2NjE0NiwxNDAuMDQwMTI3IDIwMS42OTk1NTYsMTM3LjExOTI4OSAxOTQuODI2MTU5LDEzNy4xMTkyODkgQzE4Ny43ODA0NywxMzcuMTE5Mjg5IDE4My4zMTIyNTQsMTQxLjU4NzA5OCAxODMuMzEyMjU0LDE0Ny40Mjg3NzUgQzE4My4zMTIyNTQsMTU0LjY0NjM0OSAxODcuNzgwNDcsMTU3LjU2ODQwNiAxOTguMDg5OTU2LDE2Mi4wMzY2MjIgTDIwNC4xMDM5MjQsMTY0LjYxNDA5NSBDMjI0LjU1MzQ0OCwxNzMuMzc4NjQxIDIzNi4wNjczNTIsMTgyLjMxMzQ0OCAyMzYuMDY3MzUyLDIwMi40MTgzODcgQzIzNi4wNjczNTIsMjI0LjA3MTkyNCAyMTkuMDU1MTM3LDIzNS45Mjc5NzUgMTk2LjIwMDQzMiwyMzUuOTI3OTc1IEMxNzMuODYwOTc4LDIzNS45Mjc5NzUgMTU5LjQyNTgyOSwyMjUuMjc0MzExIDE1Mi4zODEzNTksMjExLjM1NDQxMyIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyMzNweCIgdmlld0JveD0iMCAwIDI1NiAyMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMC4zODc3OTQyMDIsMCBMMjQuMTc5OTAzNCwwIEwyNC4xNzk5MDM0LDE1Ny44OTMwNjIgTDExOC4yNjY4NjIsMTU3Ljg5MzA2MiBMMTE4LjI2Njg2MiwxNzcuMzU5MzIxIEwwLjM4Nzc5NTM3NiwxNzcuMzU5MzIxIEwwLjM4Nzc5NTM3NiwzLjMzNzU5NTI0ZS0xNCBMMC4zODc3OTQyMDIsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTE4My4xNTQ0MjMsNDYuNTAyNzQ5OSBDMTk5LjM3NjMyNiw0NC4zMzk4Mjk0IDIxNi42Nzk2NTIsNDcuNTg0MjA3OSAyMjkuNjU3MTgyLDU4LjM5ODgwNDYgQzI0My43MTYxMzQsNjguMTMxOTM4NiAyNTEuMjg2Mzc1LDg1LjQzNTI4NjMgMjUyLjM2NzgzMywxMDEuNjU3MTczIEMyNTQuNTMwNzQ5LDEyMS4xMjM0NDEgMjUyLjM2NzgzMywxNDAuNTg5NzA5IDI0MS41NTMyMTksMTU2LjgxMTYwMyBDMjMxLjgyMDA5OCwxNjkuNzg5MTE2IDIxNi42Nzk2NTMsMTc4LjQ0MDc5NyAxOTkuMzc2MzI2LDE3OS41MjIyNTUgQzE4My4xNTQ0MjMsMTgxLjY4NTE3IDE2NC43Njk2MDMsMTc4LjQ0MDc5NyAxNTAuNzEwNjUxLDE2Ny42MjYyIEMxMzcuNzMzMTIxLDE1Ni44MTE2MDMgMTMxLjI0NDM3NCwxNDAuNTg5NzA5IDEyOS4wODE0NTgsMTI0LjM2NzgyMyBDMTI2LjkxODU0MiwxMDcuMDY0NDcgMTI5LjA4MTQ1OCw4Ny41OTgyMDIxIDEzOS44OTYwMzcsNzIuNDU3NzczOCBDMTQ4LjU0NzczNSw1Ny4zMTczNDE5IDE2NS44NTEwNjEsNDcuNTg0MjA3OSAxODMuMTU0NDIzLDQ2LjUwMjc0OTkgTDE4My4xNTQ0MjMsNDYuNTAyNzQ5OSBaIE0xODYuMzk4Nzk2LDY0Ljg4NzU2MTQgQzE5Ny4yMTMzNzUsNjMuODA2MDk4OCAyMDkuMTA5NDQ4LDY3LjA1MDQ3NzIgMjE3Ljc2MTExLDc0LjYyMDY5MDggQzIyNS4zMzEzNSw4My4yNzIzNzE3IDIyOS42NTcxODIsOTQuMDg2OTU5IDIzMC43Mzg2NCwxMDQuOTAxNTU2IEMyMzEuODIwMDk4LDExNi43OTc2MSAyMzAuNzM4NjQsMTI5Ljc3NTEyMiAyMjUuMzMxMzUsMTQwLjU4OTcxIEMyMTkuOTI0MDYxLDE1MS40MDQyOTkgMjEwLjE5MDkwNCwxNTguOTc0NTIgMTk4LjI5NDg2OSwxNjEuMTM3NDM2IEMxODcuNDgwMjU0LDE2My4zMDAzNTIgMTc1LjU4NDIxNywxNjAuMDU1OTc4IDE2OC4wMTM5NzcsMTUzLjU2NzIzMSBDMTU5LjM2MjMxMywxNDcuMDc4NDY2IDE1My45NTUwMjUsMTM3LjM0NTMzNiAxNTEuNzkyMDczLDEyNy42MTIxOTggQzE0OS42MjkxNTcsMTEzLjU1MzIyNyAxNTAuNzEwNjUxLDk5LjQ5NDI1NzkgMTU2LjExNzk0LDg2LjUxNjc0NTQgQzE2MS41MjUyMjksNzQuNjIwNjkwOCAxNzMuNDIxMzAxLDY1Ljk2OTAxOTMgMTg2LjM5ODc5NSw2NC44ODc1NjE0IEwxODYuMzk4Nzk2LDY0Ljg4NzU2MTQgWiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0wLjM4Nzc5NDIwMiwyMDUuNDc3MjggTDI1NS42MTIyMDcsMjA1LjQ3NzI4IEwyNTUuNjEyMjA3LDIzMi41MTM3NjEgTDAuMzg3Nzk0MjAyLDIzMi41MTM3NjEgTDAuMzg3Nzk0MjAyLDIwNS40NzcyOCBMMC4zODc3OTQyMDIsMjA1LjQ3NzI4IFoiIGZpbGw9IiMzNDkyRkYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3JUsukm.svg"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSI3MHB4IiB2aWV3Qm94PSIwIDAgMjU2IDcwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTEyOS4yODY2NzQsMC4xODE5ODQ0ODYgQzEyOS4xMDk5MDUsMC4xODQxNDMwMDIgMTI4LjkzMTEwNiwwLjIyNjMzMzM1NiAxMjguNzczMzQ5LDAuMzE4ODY4OTM4IEMxMjguNDU4MzY1LDAuNTAzNzk3NjM5IDEyOC4yNjAwMTksMC44NDM0MjI4NjcgMTI4LjI2MDAxOSwxLjIwODYzNTE0IEwxMjguMjYwMDE5LDI3LjM4ODIxNCBDMTI4LjI2MDAxOSwyNy42NDU0NDg2IDEyOC4xNDAyMzksMjcuODc1MzA5IDEyNy45MTc4MDQsMjguMDA0MzE0OSBDMTI3LjY5NDgwNywyOC4xMzM2NDQ1IDEyNy40MjI2ODgsMjguMTMzNjQ0NSAxMjcuMTk5MTQ3LDI4LjAwNDMxNDkgTDEyMi45MjE0MzEsMjUuNTQwMzQ3MyBDMTIyLjI4NDA4NiwyNS4xNzI4MzQgMTIxLjUwNTYxMiwyNS4xNzMwNTQyIDEyMC44NjgxMjUsMjUuNTQwMzQ3MyBMMTAzLjc5MTQ3OSwzNS4zOTYyMDkxIEMxMDMuMTUzMDM3LDM1Ljc2NDQ5MDggMTAyLjc2NDgyNCwzNi40NzMwMTUgMTAyLjc2NDgyNCwzNy4yMDk5MDY1IEwxMDIuNzY0ODI0LDU2LjkyMTYzMDIgQzEwMi43NjQ4MjQsNTcuNjU3OTY5MSAxMDMuMTUzNTg1LDU4LjMzMjIyMDQgMTAzLjc5MTQ3OSw1OC43MDExNTgzIEwxMjAuODY4MTI1LDY4LjU1NzAyMDIgQzEyMS41MDY1NjYsNjguOTI1NDA5OCAxMjIuMjgyOTg5LDY4LjkyNTQwOTggMTIyLjkyMTQzMSw2OC41NTcwMjAyIEwxMzkuOTk4MDc3LDU4LjcwMTE1ODMgQzE0MC42MzU5Nyw1OC4zMzIyMjA0IDE0MS4wMjQ3MzIsNTcuNjU3OTY5MSAxNDEuMDI0NzMyLDU2LjkyMTYzMDIgTDE0MS4wMjQ3MzIsNy43NzkyMDk3MSBDMTQxLjAyNDczMiw3LjAzMTY2MzgxIDE0MC42MTY4MDcsNi4zMzAxMjQ1MiAxMzkuOTYzODU2LDUuOTY1NDU2MTkgTDEyOS43OTk5OTksMC4yODQ2NDc4MjUgQzEyOS42NDAzOSwwLjE5NTYxNzY3MyAxMjkuNDYzNDQ0LDAuMTgwMDY3NzIzIDEyOS4yODY2NzQsMC4xODIwNDA2MDcgTDEyOS4yODY2NzQsMC4xODE5ODQ0ODYgWiBNMTkuNDM0ODg5NywyNC43ODczNjE5IEMxOS4xMDkyMzg3LDI0LjgwMDQ4NTcgMTguODAzMjkwNywyNC44NTc0NDQ2IDE4LjUxMDkwMjQsMjUuMDI2OTY1OCBMMS40MzQyNTE4NywzNC44ODI4Mjc3IEMwLjc5Nzk0NzI1MSwzNS4yNTA2NjkgMC40MDc2MDEyMTQsMzUuOTIwNjUwOCAwLjQwNzYwMTIxNCwzNi42NjIzNjAxIEwwLjQ0MTc0ODkzOCw2My4xMTU3MDc4IEMwLjQ0MTc0ODkzOCw2My40ODM2NjE0IDAuNjMxNTczMTUzLDYzLjgyNTMyODYgMC45NTUwNzg1ODMsNjQuMDA1NTgxOSBDMS4yNzIxNjAyNyw2NC4xOTUzNjMgMS42NjU3MTgxOCw2NC4xOTUzNjMgMS45ODE3MjkyNCw2NC4wMDU1ODE5IEwxMi4xMTEzNjQzLDU4LjE4Nzc3NjkgQzEyLjc1MzAyNjQsNTcuODA2NTc0MyAxMy4xNzIyMzYxLDU3LjE0MzQ5NTQgMTMuMTcyMjM2MSw1Ni40MDgyNDg4IEwxMy4xNzIyMzYxLDQ0LjA1NDI1NDMgQzEzLjE3MjIzNjEsNDMuMzE3MzYyOCAxMy41NTk4Nzk3LDQyLjY0MTAzNSAxNC4xOTg4OTExLDQyLjI3NDcyMTkgTDE4LjUxMDgyOSwzOS43NzY1OTM2IEMxOC44MzI2NTUxLDM5LjU5MDUzMzggMTkuMTc4MTYwMSwzOS41MDI4MTYxIDE5LjUzNzQ3OTcsMzkuNTAyODE2MSBDMTkuODg5NDI1NywzOS41MDI4MTYxIDIwLjI1MTIxMDMsMzkuNTkwNDI1OSAyMC41NjQxMzQ2LDM5Ljc3NjU5MzYgTDI0Ljg3NjA3MjYsNDIuMjc0NzIxOSBDMjUuNTE1MDYyNCw0Mi42NDEwMzUgMjUuOTAyNzIzMiw0My4zMTczNjI4IDI1LjkwMjcyMzIsNDQuMDU0MjU0MyBMMjUuOTAyNzIzMiw1Ni40MDgyNDg4IEMyNS45MDI3MjMyLDU3LjE0MzQ5NTQgMjYuMzI2MTIwNSw1Ny44MTA4NDgyIDI2Ljk2MzU5OTMsNTguMTg3Nzc2OSBMMzcuMDkzMjM0NCw2NC4wMDU1ODE5IEMzNy40MTEzNjA4LDY0LjE5NTM2MyAzNy44MDQzNjYxLDY0LjE5NTM2MyAzOC4xMTk4ODUxLDY0LjAwNTU4MTkgQzM4LjQzNDMyMDQsNjMuODI1MzI4NiAzOC42MzMyMTA0LDYzLjQ4MzY2MTQgMzguNjMzMjEwNCw2My4xMTU3MDc4IEwzOC42NjczNTgxLDM2LjY2MjM2MDEgQzM4LjY2NzM1ODEsMzUuOTIwNjUwOCAzOC4yODEzMzc3LDM1LjI1MDY2OSAzNy42NDA3MDc1LDM0Ljg4MjgyNzcgTDIwLjU2NDA5NTgsMjUuMDI2OTY1OCBDMjAuMjc1MjY0OCwyNC44NTc0NDQ2IDE5Ljk2Nzk2MTEsMjQuODAwNzE4OCAxOS42NDAxMDg1LDI0Ljc4NzM2MTkgTDE5LjQzNDc3NzUsMjQuNzg3MzYxOSBMMTkuNDM0ODg5NywyNC43ODczNjE5IFogTTE3Mi44ODUxNzEsMjUuMDI2OTY1OCBDMTcyLjUyODQxMSwyNS4wMjY1MzQxIDE3Mi4xNzg4MzEsMjUuMTE2NzY0NCAxNzEuODU4NTE2LDI1LjMwMDczOSBMMTU0Ljc4MTg3LDM1LjE1NjYwMDkgQzE1NC4xNDM5NzYsMzUuNTI0OTkwNSAxNTMuNzU1MjE5LDM2LjE5OTI0MTggMTUzLjc1NTIxOSwzNi45MzYxMzMzIEwxNTMuNzU1MjE5LDU2LjY0Nzg1MjcgQzE1My43NTUyMTksNTcuMzg5MDEzNyAxNTQuMTcyNzIzLDU4LjA2MTA3NjMgMTU0LjgxNjA5MSw1OC40MjczODUxIEwxNzEuNzU1ODUyLDY4LjA3NzkxNiBDMTcyLjM4MTQyNSw2OC40MzUxMzc0IDE3My4xNDUyNTUsNjguNDYxODU1NSAxNzMuNzc0OTMzLDY4LjExMTg0NzggTDE4NC4wNDE0NTYsNjIuMzk2NzYyMiBDMTg0LjM2NzI0Niw2Mi4yMTYwNjg1IDE4NC41ODc2MzQsNjEuODc4NTYzIDE4NC41ODkwMDMsNjEuNTA2OTk2IEMxODQuNTkxMTYxLDYxLjEzNTMyMTEgMTg0LjM5NzM2MSw2MC44MDIxOTMxIDE4NC4wNzU2NzgsNjAuNjE3MjI5OCBMMTY2Ljg5NjM2NCw1MC43NjEzNjggQzE2Ni41NzQ2OCw1MC41Nzc5NDE2IDE2Ni4zNDg4MTcsNTAuMjA2MjY2NyAxNjYuMzQ4ODE3LDQ5LjgzNzMyODggTDE2Ni4zNDg4MTcsNDMuNjc3NDE2MyBDMTY2LjM0ODgxNyw0My4zMDkxMzQ2IDE2Ni41Nzc0MTcsNDIuOTcxNjI0NyAxNjYuODk2MzY0LDQyLjc4Nzc1OCBMMTcyLjIzNDk1NywzOS43MDc2OTM4IEMxNzIuNTUyNTM1LDM5LjUyMzkzNSAxNzIuOTQyNjYxLDM5LjUyMzkzNSAxNzMuMjYxNjA3LDM5LjcwNzY5MzggTDE3OC42MDAyLDQyLjc4Nzc1OCBDMTc4LjkxOTE0Nyw0Mi45NzE2MjQ3IDE3OS4xMTM1MjYsNDMuMzA5MTM0NiAxNzkuMTEzNTI2LDQzLjY3NzQxNjMgTDE3OS4xMTM1MjYsNDguNTM3MDEyOSBDMTc5LjExMzUyNiw0OC45MDU4Mzg1IDE3OS4zMDc5MDQsNDkuMjQyODAwMSAxNzkuNjI2ODUxLDQ5LjQyNjY2NjggQzE3OS45NDcxNjYsNDkuNjExMDgxOCAxODAuMzM0NTU5LDQ5LjYxMTg0NTkgMTgwLjY1MzUwNiw0OS40MjY2NjY4IEwxOTAuODg1ODA0LDQzLjQ3MjE5MzIgQzE5MS41MjA5NjEsNDMuMTAzMjU1MyAxOTEuOTEyNDU1LDQyLjQyNzI1MTMgMTkxLjkxMjQ1NSw0MS42OTI2NjUxIEwxOTEuOTEyNDU1LDM2LjkzNTc4NzkgQzE5MS45MTI0NTUsMzYuMjAxMDg1MiAxOTEuNTIyMzI5LDM1LjUyNTE5MzQgMTkwLjg4NTgwNCwzNS4xNTYyNTU1IEwxNzMuOTExODIxLDI1LjMwMDM5MzcgQzE3My41OTIxODQsMjUuMTE1MTA2NiAxNzMuMjQxOTMsMjUuMDI3MDYwOCAxNzIuODg1MTcxLDI1LjAyNjYyMDQgTDE3Mi44ODUxNzEsMjUuMDI2OTY1OCBaIE0xMjEuODI2MzMzLDM5Ljc0MjMxNjQgQzEyMS45MTUzNjQsMzkuNzQyMzE2NCAxMjIuMDIwMTY0LDM5Ljc2NDIwMzcgMTIyLjEwMDEwNywzOS44MTAyMTAzIEwxMjcuOTUyMDI1LDQzLjE5ODIxNzEgQzEyOC4xMTA4MTQsNDMuMjkwMjA0NCAxMjguMjI1Nzk4LDQzLjQ1OTYxNzcgMTI4LjIyNTc5OCw0My42NDMwNDQgTDEyOC4yMjU3OTgsNTAuNDE4OTQ5NiBDMTI4LjIyNTc5OCw1MC42MDI5MjQyIDEyOC4xMTE5MSw1MC43NzI0NDU1IDEyNy45NTIwMjUsNTAuODYzODg4OCBMMTIyLjEwMDEwNyw1NC4yNTE3ODMzIEMxMjEuOTQwNzY5LDU0LjM0MjY3ODQgMTIxLjc0NjExOSw1NC4zNDI2Nzg0IDEyMS41ODY3ODEsNTQuMjUxNzgzMyBMMTE1LjczNDg2Myw1MC44NjM4ODg4IEMxMTUuNTc1NTI2LDUwLjc3MTkwMTUgMTE1LjQ2MTA5LDUwLjYwMjkyNDIgMTE1LjQ2MTA5LDUwLjQxODk0OTYgTDExNS40NjEwOSw0My42NDMwNDQgQzExNS40NjEwOSw0My40NTk2MTc3IDExNS41NzYwNzQsNDMuMjkwNjQ0NyAxMTUuNzM0ODYzLDQzLjE5ODIxNzEgTDEyMS41ODY3ODEsMzkuODEwNzU4NiBDMTIxLjY2NjcyNCwzOS43NjQ3NjQ5IDEyMS43MzcyOSwzOS43NDI4NjQ2IDEyMS44MjYzMzMsMzkuNzQyODY0NiBMMTIxLjgyNjMzMywzOS43NDIzMTY0IFoiIGZpbGw9IiM0MDQxMzciPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjI0LjA0NjY3MSwyNC41NDc4NjE2IEMyMjMuNDU0NjI5LDI0LjU0Nzg2MTYgMjIyLjg3OTAyNywyNC42NzAyOTI2IDIyMi4zNjk4MDcsMjQuOTU4NTIzNiBMMjA2LjI1MTM2NSwzNC4yNjY4MzQ3IEMyMDUuMjA4Mjg4LDM0Ljg2NzM4NTYgMjA0LjU3NDUsMzYuMDAyNTYyMiAyMDQuNTc0NSwzNy4yMDk5MDY1IEwyMDQuNTc0NSw1NS43OTIzNjM3IEMyMDQuNTc0NSw1Ni45OTkwNTE5IDIwNS4yMDgyODgsNTguMTMyOTExNyAyMDYuMjUxMzY1LDU4LjczNTMyNzYgTDIxMC40NjA2MzksNjEuMTY1MTI1OSBDMjEyLjUwNTczLDYyLjE3MzA0OTMgMjEzLjI1OTk4LDYyLjE1NzQ5OTQgMjE0LjE5MDgxLDYyLjE1NzQ5OTQgQzIxNy4yMTg3NSw2Mi4xNTc0OTk0IDIxOC45NDc2MzEsNjAuMzIwMjU2OSAyMTguOTQ3NjMxLDU3LjEyNjk1NjkgTDIxOC45NDc2MzEsMzguNzg0MTA3OSBDMjE4Ljk0NzYzMSwzOC41MjQ3ODgxIDIxOC43MjMxMzYsMzguMzM5MTY4NyAyMTguNDY4NTI2LDM4LjMzOTE2ODcgTDIxNi40NDk0NDYsMzguMzM5MTY4NyBDMjE2LjE5MDcyNiwzOC4zMzkxNjg3IDIxNS45NzAzMzgsMzguNTI0Nzg4MSAyMTUuOTcwMzM4LDM4Ljc4NDEwNzkgTDIxNS45NzAzMzgsNTcuMTI2OTU2OSBDMjE1Ljk3MDMzOCw1OC41NDIzNjkyIDIxNC40OTYwNjcsNTkuOTY1Nzc2NyAyMTIuMTAzMjgzLDU4Ljc2OTYwMDUgTDIwNy43MjI5MDMsNTYuMjAzMDI1NyBDMjA3LjU2ODIxOSw1Ni4xMTg3MDU0IDIwNy40NDkxMjUsNTUuOTY5ODgwMSAyMDcuNDQ5MTI1LDU1Ljc5MjM2MzcgTDIwNy40NDkxMjUsMzcuMjA5OTA2NSBDMjA3LjQ0OTEyNSwzNy4wMzM0ODY3IDIwNy41NjY4NTEsMzYuODU0MzI5OCAyMDcuNzIyOTAzLDM2Ljc2NTA3OTUgTDIyMy44MDcxMTksMjcuNDkwOTMzNCBDMjIzLjk1NzY5MywyNy40MDQ0MjAxIDIyNC4xMzcwMTQsMjcuNDA0NDIwMSAyMjQuMjg2MjI0LDI3LjQ5MDkzMzQgTDI0MC4zNzA0NCwzNi43NjUwNzk1IEMyNDAuNTIzNzU1LDM2Ljg1NzA2NjggMjQwLjY0NDIxMywzNy4wMjgxMjA2IDI0MC42NDQyMTMsMzcuMjA5OTA2NSBMMjQwLjY0NDIxMyw1NS43OTIzNjM3IEMyNDAuNjQ0MjEzLDU1Ljk2OTg4MDEgMjQwLjU1NTE4Myw1Ni4xNTE2NjYgMjQwLjQwNDY2MSw1Ni4yMzcxOTUgTDIyNC4yODYyMjQsNjUuNTExMzQxMSBDMjI0LjE0Nzk2Niw2NS41OTM0NzI2IDIyMy45NTc2OTMsNjUuNTkzNDcyNiAyMjMuODA3MTE5LDY1LjUxMTM0MTEgTDIxOS42NjYyODcsNjMuMDQ3MzczNSBDMjE5LjU0MzA4Nyw2Mi45NzUwOTc3IDIxOS4zNzQ3MTksNjIuOTgwNTcxNyAyMTkuMjU1NjI1LDYzLjA0NzM3MzUgQzIxOC4xMTI2MjIsNjMuNjk1MzQyNyAyMTcuODk3NzA3LDYzLjc3MDY4MzYgMjE2LjgyNTg4Myw2NC4xNDI0NzA3IEMyMTYuNTYxNjkzLDY0LjIzNDQ1OCAyMTYuMTYwNjExLDY0LjM3NzU4OTIgMjE2Ljk2Mjc3Miw2NC44MjY5MDU5IEwyMjIuMzY5ODA3LDY4LjAwOTQ3MzcgQzIyMi44ODQ1MDEsNjguMzA3MzM2IDIyMy40NTgwNTcsNjguNDU0MzAwNyAyMjQuMDQ2NjcxLDY4LjQ1NDMwMDcgQzIyNC42NDM0OTcsNjguNDU0MzAwNyAyMjUuMjA4ODQyLDY4LjMwNzMzNiAyMjUuNzIzNTM2LDY4LjAwOTQ3MzcgTDI0MS44NDE5NzQsNTguNzM1MzI3NiBDMjQyLjg4NTA1NSw1OC4xMjg2NDIyIDI0My41MTg4MzksNTYuOTk5MDUxOSAyNDMuNTE4ODM5LDU1Ljc5MjM2MzcgTDI0My41MTg4MzksMzcuMjA5OTA2NSBDMjQzLjUxODgzOSwzNi4wMDI1NjIyIDI0Mi44ODUwNTUsMzQuODY5OTA2OCAyNDEuODQxOTc0LDM0LjI2NjgzNDcgTDIyNS43MjM1MzYsMjQuOTU4NTIzNiBDMjI1LjIxODQyMiwyNC42NzAyOTI2IDIyNC42Mzg3MTQsMjQuNTQ3ODYxNiAyMjQuMDQ2NjcxLDI0LjU0Nzg2MTYgTDIyNC4wNDY2NzEsMjQuNTQ3ODYxNiBaIE03MC43MzMyNzQ5LDI0LjkyNDI0NjMgQzcwLjM3NzQzNDksMjQuOTI0MjQ2MyA3MC4wMjUyOTg5LDI1LjAxNDA0NDkgNjkuNzA2NjI0MiwyNS4xOTgwMTk2IEw1Mi42Mjk5NzgsMzUuMDE5NzE2NCBDNTEuOTkxNTM2NSwzNS4zODc2NjU3IDUxLjYwMzMyMywzNi4wOTcxNzg1IDUxLjYwMzMyMywzNi44MzM0MTM4IEw1MS42MDMzMjMsNTYuNTQ1MTMzMiBDNTEuNjAzMzIzLDU3LjI4MjI0NDkgNTEuOTkxOTUwOSw1Ny45NTU5NDc5IDUyLjYyOTk3OCw1OC4zMjQ2NjU2IEw2OS43MDY2MjQyLDY4LjE4MDUyNzUgQzcwLjM0NTA2NTgsNjguNTQ5MjQ1MiA3MS4xMjE0ODgzLDY4LjU0OTI0NTIgNzEuNzU5OTI5OCw2OC4xODA1Mjc1IEw4OC44MzY1NzYxLDU4LjMyNDY2NTYgQzg5LjQ3MzkyMTEsNTcuOTU1OTQ3OSA4OS44NjMyMzEsNTcuMjgyMjQ0OSA4OS44NjMyMzEsNTYuNTQ1MTMzMiBMODkuODYzMjMxLDM2LjgzMzQxMzggQzg5Ljg2MzIzMSwzNi4wOTYwODYzIDg5LjQ3NTAxNzYsMzUuMzg3NjY1NyA4OC44MzY1NzYxLDM1LjAxOTcxNjQgTDcxLjc1OTkyOTgsMjUuMTk4MDE5NiBDNzEuNDQxMjU1MiwyNS4wMTQwNDQ5IDcxLjA4OTExNDksMjQuOTI0MjQ2MyA3MC43MzMyNzQ5LDI0LjkyNDI0NjMgTDcwLjczMzI3NDksMjQuOTI0MjQ2MyBaIE0yNDcuOTY3NjY1LDI1LjAyNzE4NiBMMjQ3Ljk2NzY2NSwyNS41MDYyOTAyIEwyNDkuMzAyMzE1LDI1LjUwNjI5MDIgTDI0OS4zMDIzMTUsMjkuMDMxMDczNSBMMjQ5Ljg0OTg2MSwyOS4wMzEwNzM1IEwyNDkuODQ5ODYxLDI1LjUwNjI5MDIgTDI1MS4yMTg3MzIsMjUuNTA2MjkwMiBMMjUxLjIxODczMiwyNS4wMjcxODYgTDI0Ny45Njc2NjUsMjUuMDI3MTg2IEwyNDcuOTY3NjY1LDI1LjAyNzE4NiBaIE0yNTEuNjk3ODM2LDI1LjAyNzE4NiBMMjUxLjY5NzgzNiwyOS4wMzEwNzM1IEwyNTIuMjExMTYxLDI5LjAzMTA3MzUgTDI1Mi4yMTExNjEsMjYuNjY5ODI5NiBDMjUyLjIxMTE2MSwyNi41NzM0NjA1IDI1Mi4yMTU1MjEsMjYuNDI0NDE5MyAyNTIuMjExMTYxLDI2LjIyNTAwMjYgQzI1Mi4yMDQ1OTksMjYuMDIxODYwNCAyNTIuMjExMTYxLDI1Ljg0NDc4NDQgMjUyLjIxMTE2MSwyNS43NDU3ODYyIEwyNTIuMjExMTYxLDI1LjY0Mjg1MDkgTDI1My4zNDA0NzksMjkuMDMwNzQ1NCBMMjUzLjg4ODAyNiwyOS4wMzA3NDU0IEwyNTUuMDUxNTY1LDI1LjY0Mjg1MDkgQzI1NS4wNTE1NjUsMjUuODU4MzY1NyAyNTUuMDIyNzcxLDI2LjA2NjQzMzcgMjU1LjAxNzQxOCwyNi4yNTg4Mzk1IEMyNTUuMDE1MjU5LDI2LjQ0NjA5OTQgMjU1LjAxNzQxOCwyNi41ODY3MTM4IDI1NS4wMTc0MTgsMjYuNjY5NTAxNSBMMjU1LjAxNzQxOCwyOS4wMzA3NDU0IEwyNTUuNTMwNzQzLDI5LjAzMDc0NTQgTDI1NS41MzA3NDMsMjUuMDI2ODU3OSBMMjU0Ljc3Nzg2NSwyNS4wMjY4NTc5IEwyNTMuNjE0MzI2LDI4LjQxNDg2NDYgTDI1Mi40ODUwMDgsMjUuMDI2ODU3OSBMMjUxLjY5NzkwOSwyNS4wMjY4NTc5IEwyNTEuNjk3ODM2LDI1LjAyNzE4NiBaIE0yMjguMzU4NjA5LDM3LjgyNjExNTMgQzIyMy43Njg3ODgsMzcuODI2MTE1MyAyMjEuMDM1MTU3LDM5Ljc3OTQzODUgMjIxLjAzNTE1Nyw0My4wMjc4MTk1IEMyMjEuMDM1MTU3LDQ2LjU1MTczMDcgMjIzLjc0ODI1Nyw0Ny41MTk5MDI5IDIyOC4xNTMyNzgsNDcuOTU1NzUwNCBDMjMzLjQyMzQyOSw0OC40NzE2NTMgMjMzLjgzNDA4Nyw0OS4yNDU0NDY1IDIzMy44MzQwODcsNTAuMjgyODI5MyBDMjMzLjgzNDA4Nyw1Mi4wODIxODEyIDIzMi4zOTk1MTEsNTIuODQ5NDA0MSAyMjkuMDA4ODIzLDUyLjg0OTQwNDEgQzIyNC43NDg5MDEsNTIuODQ5NDA0MSAyMjMuODEyNTkzLDUxLjc4NTk1OTQgMjIzLjQ5OTEyMSw0OS42NjY4NDA2IEMyMjMuNDYyMjEsNDkuNDM5NjA1IDIyMy4yODY5NDcsNDkuMjU2MTc4NiAyMjMuMDU0MjQyLDQ5LjI1NjE3ODYgTDIyMC45NjY3MTUsNDkuMjU2MTc4NiBDMjIwLjcwOTM2OCw0OS4yNTYxNzg2IDIyMC40ODc2MTEsNDkuNDc3NDk1NiAyMjAuNDg3NjExLDQ5LjczNTI4MjggQzIyMC40ODc2MTEsNTIuNDQ3ODMzOCAyMjEuOTYzMjUsNTUuNjU1Njk5NCAyMjkuMDA4ODIzLDU1LjY1NTY5OTQgQzIzNC4xMDkyMzMsNTUuNjU1Njk5NCAyMzcuMDUwOTMyLDUzLjY1MzY0NTYgMjM3LjA1MDkzMiw1MC4xNDU5NDQ4IEMyMzcuMDUwOTMyLDQ2LjY2ODU3NTUgMjM0LjY3NDU3NCw0NS43MzUyMjQ2IDIyOS43Mjc0OCw0NS4wODExMjUxIEMyMjQuNzI4MzY1LDQ0LjQxOTY4NjcgMjI0LjI1MjAwMiw0NC4wOTU5Nzg0IDIyNC4yNTIwMDIsNDIuOTI1MjEyMyBDMjI0LjI1MjAwMiw0MS45NTg3ODg1IDIyNC42NTU4MTgsNDAuNjY2NDY3NyAyMjguMzU4NjA5LDQwLjY2NjQ2NzcgQzIzMS42NjU3OTcsNDAuNjY2NDY3NyAyMzIuODg4MTk5LDQxLjM3OTcwMTkgMjMzLjM4OTIwNCw0My42MDk2NDc1IEMyMzMuNDMzMDA5LDQzLjgxOTI0OCAyMzMuNjE3ODA4LDQzLjk4NjAyNzkgMjMzLjgzNDA4Nyw0My45ODYwMjc5IEwyMzUuOTIxNjEzLDQzLjk4NjAyNzkgQzIzNi4wNTAyODcsNDMuOTg2MDI3OSAyMzYuMTc0ODU1LDQzLjkwNzE4MTcgMjM2LjI2MzgzMyw0My44MTQ4NjYyIEMyMzYuMzUxNDM5LDQzLjcxNjMwODQgMjM2LjQxMzAzOSw0My42MDUyNjU3IDIzNi40MDA3MTgsNDMuNDcyNzU4NyBDMjM2LjA3NzY2NiwzOS42MzIzNjU5IDIzMy41MTY1MDksMzcuODI2MTE1MyAyMjguMzU4NjA5LDM3LjgyNjExNTMgTDIyOC4zNTg2MDksMzcuODI2MTE1MyBaIE0xNzIuODUwOTUsNDIuNTE0NTUwMyBDMTcyLjc4MjcyMyw0Mi41MTQ1NTAzIDE3Mi43MDcyMTgsNDIuNTE0NTUwMyAxNzIuNjQ1NjE5LDQyLjU0ODQ4MjIgTDE2OS4zNjAzMzEsNDQuNDY0ODk5IEMxNjkuMjM3MTMyLDQ0LjUzNDk4NiAxNjkuMTU1LDQ0LjY2NTQwNzkgMTY5LjE1NSw0NC44MDcxMTQ1IEwxNjkuMTU1LDQ4LjU3MTUwNiBDMTY5LjE1NSw0OC43MTMyMTI1IDE2OS4yMzcxMzIsNDguODQzMDkwNSAxNjkuMzYwMzMxLDQ4LjkxMzcyNTcgTDE3Mi42NDU2MTksNTAuNzk1ODY1NCBDMTcyLjc2ODgxNCw1MC44NjcwNDQ2IDE3Mi45MDAyMjksNTAuODY3MDQ0NiAxNzMuMDIyMDU1LDUwLjc5NTg2NTQgTDE3Ni4zMDczNDIsNDguOTEzNzI1NyBDMTc2LjQyOTE3Myw0OC44NDM2Mzg3IDE3Ni41MTI2NzMsNDguNzEzMjEyNSAxNzYuNTEyNjczLDQ4LjU3MTUwNiBMMTc2LjUxMjY3Myw0NC44MDcxMTQ1IEMxNzYuNTEyNjczLDQ0LjY2NTQwNzkgMTc2LjQyOTIzLDQ0LjUzNTQyMjEgMTc2LjMwNzM0Miw0NC40NjQ4OTkgTDE3My4wMjIwNTUsNDIuNTQ4NDgyMiBDMTcyLjk2MTE2OCw0Mi41MTIzNDg2IDE3Mi45MTkyMjgsNDIuNTE0NTUwMyAxNzIuODUwOTUsNDIuNTE0NTUwMyBMMTcyLjg1MDk1LDQyLjUxNDU1MDMgWiIgZmlsbD0iIzgzQ0QyOSI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyMzBweCIgdmlld0JveD0iMCAwIDI1NiAyMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8cGF0aCBkPSJNMC43NTQxMjQxMTIsMTE0Ljc1MDM0MSBDMC43NTQxMjQxMTIsMTMzLjk2NDY4MiAxOS41MTY2MDMyLDE1MS45MDIwNSA0OS4wOTcyLDE2Mi4wMTI1MjUgQzQzLjE5MDIzMDksMTkxLjc1MDIzIDQ4LjAzODU2NzIsMjE1LjcxODYxOCA2NC4yMzI1Mzk1LDIyNS4wNTgxMDQgQzgwLjg3ODI2NywyMzQuNjU3MjA1IDEwNS42NzYyOTYsMjI4LjAxMjYyIDEyOS4yMTI5OTIsMjA3LjQzODgxNiBDMTUyLjE1NTg2NSwyMjcuMTgyMDc0IDE3NS4zNDM3MjksMjM0Ljk1MjAzMyAxOTEuNTIyNjEyLDIyNS41ODYwMDUgQzIwOC4xNTIwNjMsMjE1Ljk1OTAzNyAyMTMuMjEwMzgzLDE5MC4zNjUwMDMgMjA3LjE0MDA1MiwxNTkuNjk5MDk0IEMyMzcuOTQ5ODEsMTQ5LjUxMjY2NCAyNTUuMTgzOTM3LDEzNC4yMTc2MDQgMjU1LjE4MzkzNywxMTQuNzUwMzQxIEMyNTUuMTgzOTM3LDk1Ljk4MTQ2NjUgMjM2LjM4NjY0Niw3OS43NDM4NjIgMjA3LjIwNTAyNCw2OS42OTc5OTIyIEMyMTMuNzM5OTcsMzcuNzY0NzExNyAyMDguMjAyNzIsMTQuMzc3OTM2NCAxOTEuMzM4NDE2LDQuNjUyNzU1MDUgQzE3NS4wNzk0NTksLTQuNzIyOTIxOTcgMTUxLjYyMjQxOSwzLjQ0ODkzNjQxIDEyOC4zNDIxMjYsMjMuNzA5MjU5MSBDMTA0LjEyMjkzNywyLjIwNDUyNzY0IDgwLjg5NzM0NzQsLTQuMzYxMTM2NzUgNjQuMDQ5MzkyLDUuMzkyMzg5NTQgQzQ3LjgwNjIzNzcsMTQuNzk0NzM1OCA0My4xNzExMDk2LDM5LjE5ODY5NjIgNDkuMDk3MTk5OSw2OS40ODY5NDA1IEMyMC41MTU0Mjk1LDc5LjQ1MjIwMjQgMC43NTQxMjQxMTIsOTYuMDU2NTI1OSAwLjc1NDEyNDExMiwxMTQuNzUwMzQxIFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0yMDEuMDI0NTUzLDc5LjY3NDExNzggQzE5OC42ODA1MzQsNzguODY3MzA1NiAxOTYuMjUxNjUxLDc4LjEwMzkzMDggMTkzLjc1MDc3NCw3Ny4zODE5ODI4IEMxOTQuMTYxODIzLDc1LjcwNDQwODUgMTk0LjUzOTA4NSw3NC4wNDg1NTMgMTk0Ljg3NDUyLDcyLjQyMDg1MTUgQzIwMC4zODA2MzIsNDUuNjkzNDg2MiAxOTYuNzgwNTQ0LDI0LjE2MTczNDUgMTg0LjQ4NzMxNSwxNy4wNzI1NjU2IEMxNzIuNjk5NjUxLDEwLjI3NDk5MTQgMTUzLjQyMTgyNiwxNy4zNjI1NTE1IDEzMy45NTIxNTEsMzQuMzA2NDEzMiBDMTMyLjA3OTkxMiwzNS45MzU3MjM1IDEzMC4yMDI0NDQsMzcuNjYwNzU3MyAxMjguMzI1NzgyLDM5LjQ2ODY0NDEgQzEyNy4wNzUzNDMsMzguMjcyNTAyNyAxMjUuODI2OTE2LDM3LjExNjU4MTMgMTI0LjU4MTcwNywzNi4wMTA5MzQ4IEMxMDQuMTc2OTE4LDE3Ljg5MzQ1NDggODMuNzI0MjY3MSwxMC4yNTg1MDEyIDcxLjQ0MzEwNDUsMTcuMzY4MTgyMyBDNTkuNjY2NzAyMiwyNC4xODU0NjQzIDU2LjE3OTIzMDIsNDQuNDI3MzYyMSA2MS4xMzU1MzUsNjkuNzU3MDg0MSBDNjEuNjE0MTUyNCw3Mi4yMDM2NjM4IDYyLjE3MzYxMTksNzQuNzAyMTI3MyA2Mi44MDYyNzE4LDc3LjI0MjQxOTUgQzU5LjkxMTY0MTgsNzguMDY0MTEzMSA1Ny4xMTcxNTk1LDc4Ljk0MDEwMzcgNTQuNDQzMzM3LDc5Ljg3MiBDMzAuNTIwOTExMiw4OC4yMTI0MTE2IDE1LjI0Mjk1OTksMTAxLjI4Mzg5NiAxNS4yNDI5NTk5LDExNC44NDI0NDQgQzE1LjI0Mjk1OTksMTI4Ljg0NTgyNiAzMS42NDM4NTIzLDE0Mi44OTE0MzggNTYuNTYwOTE3NSwxNTEuNDA4MDEyIEM1OC41MjcyNzEsMTUyLjA4MDA4OCA2MC41Njc2MjkyLDE1Mi43MTU1NjMgNjIuNjcwMzI4NCwxNTMuMzE4ODYyIEM2MS45ODc3OTU4LDE1Ni4wNjYyODggNjEuMzk0MTQ5MywxNTguNzU4NjExIDYwLjg5NTgyNCwxNjEuMzg0NTcyIEM1Ni4xNjk5Nzk2LDE4Ni4yNzQ2OSA1OS44NjA1NjI0LDIwNi4wMzgzNzIgNzEuNjA1NTkzMSwyMTIuODEyNjE5IEM4My43MzcxMzc1LDIxOS44MDg0NzggMTA0LjA5NzI4MiwyMTIuNjE3NTUyIDEyMy45MjI5MDMsMTk1LjI4NzU3OSBDMTI1LjQ4OTg3MywxOTMuOTE3Njg3IDEyNy4wNjI0NzMsMTkyLjQ2NDk0MyAxMjguNjM3ODg4LDE5MC45NDIyMTYgQzEzMC42Nzk4NTYsMTkyLjkwODU2OSAxMzIuNzE4NjA0LDE5NC43Njk1NDYgMTM0Ljc0NjQ5NSwxOTYuNTE1MDkyIEMxNTMuOTQ5OTE0LDIxMy4wNDAyNjQgMTcyLjkxNjQzNywyMTkuNzEzMTU3IDE4NC42NTA2MDgsMjEyLjkyMDAwNyBDMTk2Ljc3MDA4NiwyMDUuOTA0MDM3IDIwMC43MDg4MjcsMTg0LjY3MzEzMSAxOTUuNTk1MjYxLDE1OC44NDIyNjkgQzE5NS4yMDQ3MjUsMTU2Ljg2OTQ4IDE5NC43NTAyNCwxNTQuODU0MDU4IDE5NC4yMzk4NDksMTUyLjgwMjg0MSBDMTk1LjY2OTY2OCwxNTIuMzgwMTI4IDE5Ny4wNzMzNDUsMTUxLjk0Mzc0MiAxOTguNDQyMDMsMTUxLjQ5MDA2MSBDMjI0LjM0NTY5MSwxNDIuOTA3NTI2IDI0MS4xOTk0NTksMTI5LjAzMjg0OCAyNDEuMTk5NDU5LDExNC44NDI0NDQgQzI0MS4xOTk0NTksMTAxLjIzNDgyOCAyMjUuNDI4ODEzLDg4LjA3NTI2MTYgMjAxLjAyNDU1Myw3OS42NzQxMTc4IEwyMDEuMDI0NTUzLDc5LjY3NDExNzggTDIwMS4wMjQ1NTMsNzkuNjc0MTE3OCBaIiBmaWxsPSIjNTNDMURFIj48L3BhdGg+CiAgICA8cGF0aCBkPSJNMTk1LjQwNjIyOCwxNDIuMzI3NTU0IEMxOTQuMTcwNjcxLDE0Mi43MzY1OSAxOTIuOTAyOTM4LDE0My4xMzE5NTMgMTkxLjYxMTA3MywxNDMuNTE1MjQ5IEMxODguNzUxNDM1LDEzNC40NjIxNCAxODQuODkxOTI4LDEyNC44MzU0OTQgMTgwLjE2ODg5OSwxMTQuODg5NTAyIEMxODQuNjc1OTQ3LDEwNS4xODA0MDUgMTg4LjM4NjIzNyw5NS42NzY4MzI3IDE5MS4xNjU4MzgsODYuNjgyNDQ0NiBDMTkzLjQ3NzI3OSw4Ny4zNTEzMDI0IDE5NS43MjA3NDgsODguMDU2NzYwNSAxOTcuODgyNTcxLDg4LjgwMTIzMTggQzIxOC43OTIxMTksOTUuOTk5Mzk2NyAyMzEuNTQ2NjcxLDEwNi42NDE5OTggMjMxLjU0NjY3MSwxMTQuODQyNDQ0IEMyMzEuNTQ2NjcxLDEyMy41Nzc0MTQgMjE3Ljc3MjE0MiwxMzQuOTE2NjI1IDE5NS40MDYyMjgsMTQyLjMyNzU1NCBMMTk1LjQwNjIyOCwxNDIuMzI3NTU0IEwxOTUuNDA2MjI4LDE0Mi4zMjc1NTQgWiBNMTg2LjEyNTg3NiwxNjAuNzE2OTIgQzE4OC4zODcwNDEsMTcyLjEzODk4NSAxODguNzEwMDA3LDE4Mi40NjU4NiAxODcuMjEyMjE2LDE5MC41Mzg4MDkgQzE4NS44NjY0NTcsMTk3Ljc5Mjg4IDE4My4xNjAwNTYsMjAyLjYyOTMyOSAxNzkuODEzNzU2LDIwNC41NjYzMjIgQzE3Mi42OTI4MTMsMjA4LjY4ODA2MyAxNTcuNDY0NzM2LDIwMy4zMzAzNjMgMTQxLjA0MTcyMiwxODkuMTk3ODc2IEMxMzkuMTU5MDI2LDE4Ny41Nzc4MTYgMTM3LjI2MjY1NSwxODUuODQ3OTU2IDEzNS4zNjAyNTEsMTg0LjAxNzE0MyBDMTQxLjcyNzA3LDE3Ny4wNTM4NjMgMTQ4LjA5MDI2OSwxNjguOTU4Nzk0IDE1NC4zMDA2MzIsMTU5Ljk2ODQyNyBDMTY1LjIyMzk2OCwxNTguOTk5MTI3IDE3NS41NDQwMDcsMTU3LjQxNDQ2IDE4NC45MDI3ODcsMTU1LjI1MTAyOSBDMTg1LjM2MzcwOCwxNTcuMTEwMzk3IDE4NS43NzMxNDcsMTU4LjkzMzk3IDE4Ni4xMjU4NzYsMTYwLjcxNjkyIEwxODYuMTI1ODc2LDE2MC43MTY5MiBMMTg2LjEyNTg3NiwxNjAuNzE2OTIgWiBNOTIuMjc2NjM3OSwyMDMuODU0MDI3IEM4NS4zMTkzOTA0LDIwNi4zMTEwNjQgNzkuNzc4Mjg3NSwyMDYuMzgxNDQ5IDc2LjQyODc2OTgsMjA0LjQ1MDA4NiBDNjkuMzAxMzkyLDIwMC4zMzkyMDUgNjYuMzM4Mzg4MSwxODQuNDcwODI1IDcwLjM4MDA5MTEsMTYzLjE4NDgxNyBDNzAuODQzMDIyOCwxNjAuNzQ3MDg1IDcxLjM5NDAzNjIsMTU4LjI0Mjk5MiA3Mi4wMjkxMDkyLDE1NS42ODMzOTQgQzgxLjI4NTMyOTEsMTU3LjczMDE4NyA5MS41Mjk3NTMzLDE1OS4yMDMwNDEgMTAyLjQ3OTIzMywxNjAuMDkwNjk2IEMxMDguNzMxNDI1LDE2OC44ODgwMDcgMTE1LjI3ODQyOSwxNzYuOTc0MjI4IDEyMS44NzYxMSwxODQuMDU0NTQ4IEMxMjAuNDM0NjI3LDE4NS40NDYxNTggMTE4Ljk5ODc3NCwxODYuNzcxMDA0IDExNy41NzA5NjYsMTg4LjAxOTQzMSBDMTA4LjgwNDIyMywxOTUuNjgyNTM5IDEwMC4wMTg5NzksMjAxLjExOTQ3MiA5Mi4yNzY2Mzc5LDIwMy44NTQwMjcgTDkyLjI3NjYzNzksMjAzLjg1NDAyNyBMOTIuMjc2NjM3OSwyMDMuODU0MDI3IFogTTU5LjY4Mjc5MDMsMTQyLjI3NDA2MSBDNDguNjY0OTM2NCwxMzguNTA4MjY3IDM5LjU2NTk3NjUsMTMzLjYxMzkwMSAzMy4zMjkwNjgzLDEyOC4yNzMwOTQgQzI3LjcyNDgyMDIsMTIzLjQ3MzY0NyAyNC44OTUzNDY0LDExOC43MDg3ODkgMjQuODk1MzQ2NCwxMTQuODQyNDQ0IEMyNC44OTUzNDY0LDEwNi42MTQ2NDkgMzcuMTYyMDI5OSw5Ni4xMjAwNTY1IDU3LjYyMDcxMzMsODguOTg3MDQ3OSBDNjAuMTAzMDg4OCw4OC4xMjE1MTQ1IDYyLjcwMTY5OTksODcuMzA1ODUzOSA2NS4zOTg0NDc4LDg2LjUzOTY2MzggQzY4LjIyNTkxMDQsOTUuNzM3MTYyNiA3MS45MzQ5OTQ1LDEwNS4zNTMzNTEgNzYuNDExMDczMSwxMTUuMDc3MzI5IEM3MS44NzcwNzc4LDEyNC45NDU2OTYgNjguMTE1MzA1NiwxMzQuNzE1MTI0IDY1LjI2MDA5MTEsMTQ0LjAyMDQxMSBDNjMuMzM3NTc3NCwxNDMuNDY3Nzg5IDYxLjQ3NDk5MTQsMTQyLjg4NjIwOSA1OS42ODI3OTAzLDE0Mi4yNzQwNjEgTDU5LjY4Mjc5MDMsMTQyLjI3NDA2MSBMNTkuNjgyNzkwMywxNDIuMjc0MDYxIFogTTcwLjYwODU0MDUsNjcuOTAzMzQ2NCBDNjYuMzYyMTE3OCw0Ni4yMDE0NjQzIDY5LjE4MjM0MSwyOS44MzAzMzQ3IDc2LjI3OTE1MTYsMjUuNzIyMjY4NyBDODMuODM4NDkxOCwyMS4zNDU5MzU2IDEwMC41NTQzMDYsMjcuNTg1NjU5IDExOC4xNzIyNTUsNDMuMjI5MjA5NyBDMTE5LjI5ODQxMyw0NC4yMjkwNzc4IDEyMC40Mjg5OTYsNDUuMjc1NjAwOSAxMjEuNTYyNzk3LDQ2LjM1ODMyMjEgQzExNC45OTc2OTQsNTMuNDA3NjczMiAxMDguNTEwNjE4LDYxLjQzMzE2MjYgMTAyLjMxMzkzLDcwLjE3ODU4OTEgQzkxLjY4NzAxMzMsNzEuMTYzNTc1OCA4MS41MTQ1ODI4LDcyLjc0NTgyODggNzIuMTYxODM1MSw3NC44NjQ2MTU4IEM3MS41NzM4MTkzLDcyLjQ5OTI4MDQgNzEuMDUyOTcwOSw3MC4xNzUzNzE2IDcwLjYwODU0MDUsNjcuOTAzMzQ2NCBMNzAuNjA4NTQwNSw2Ny45MDMzNDY0IEw3MC42MDg1NDA1LDY3LjkwMzM0NjQgWiBNMTY4LjA3NTk2NSw5MS45NzA1NjQgQzE2NS44NDAxMzksODguMTA4NjQ0MSAxNjMuNTQ0Nzg1LDg0LjMzODAyMzUgMTYxLjIwNDc4OSw4MC42NzAzNjYxIEMxNjguNDE0MjE2LDgxLjU4MTc1MDIgMTc1LjMyMTU4OSw4Mi43OTE1NjY0IDE4MS44MDgyNjQsODQuMjcyMDYyOSBDMTc5Ljg2MDgxMyw5MC41MTMzOTUxIDE3Ny40MzM1NCw5Ny4wMzkwODI1IDE3NC41NzYzMTQsMTAzLjcyODg2NyBDMTcyLjUyNjcwNiw5OS44Mzc1ODY4IDE3MC4zNTg4NSw5NS45MTQxMzA0IDE2OC4wNzU5NjUsOTEuOTcwNTY0IEwxNjguMDc1OTY1LDkxLjk3MDU2NCBMMTY4LjA3NTk2NSw5MS45NzA1NjQgWiBNMTI4LjMyODk5OSw1My4yNTY4NDg0IEMxMzIuNzgxMzQ4LDU4LjA4MDQyNzQgMTM3LjI0MDEzMiw2My40NjU4NzkgMTQxLjYyNTcxNiw2OS4zMDkwMzM3IEMxMzcuMjA2MzQ3LDY5LjEwMDI5MjIgMTMyLjczMjI3OSw2OC45OTE2OTgzIDEyOC4yMjEyMSw2OC45OTE2OTgzIEMxMjMuNzUyNzczLDY4Ljk5MTY5ODMgMTE5LjMxMTY4Niw2OS4wOTc4NzkgMTE0LjkxOTY2Nyw2OS4zMDMwMDA3IEMxMTkuMzA5Njc1LDYzLjUxNDE0MjkgMTIzLjgwNzA3LDU4LjEzNTkzMDggMTI4LjMyODk5OSw1My4yNTY4NDg0IEwxMjguMzI4OTk5LDUzLjI1Njg0ODQgTDEyOC4zMjg5OTksNTMuMjU2ODQ4NCBaIE04OC4zMjc0NDA3LDkyLjAzNzMyOTEgQzg2LjA5NDAyNjcsOTUuOTEwMTA4NCA4My45NjYzOTEyLDk5LjgxMjI0ODMgODEuOTQ4OTU4NCwxMDMuNzIxNjI4IEM3OS4xMzc5ODU4LDk3LjA1NTE3MDUgNzYuNzMzMjM0OSw5MC40OTk3MjAzIDc0Ljc2ODg5MjQsODQuMTY5OTA0MSBDODEuMjE1NzQ4Niw4Mi43MjcyMTQ0IDg4LjA5MDU0NTIsODEuNTQ3NTYzMyA5NS4yNTQxMjEsODAuNjUzNDczNyBDOTIuODgxMTQzOCw4NC4zNTQ5MTU5IDkwLjU2Njg4NzYsODguMTUzMjg4MyA4OC4zMjc0NDA3LDkyLjAzNjUyNDcgTDg4LjMyNzQ0MDcsOTIuMDM3MzI5MSBMODguMzI3NDQwNyw5Mi4wMzczMjkxIFogTTk1LjQ2MDQ0OTMsMTQ5LjcxOTk4MSBDODguMDU5MTczNiwxNDguODk0MjY1IDgxLjA4MTAxMTgsMTQ3Ljc3NTM0NyA3NC42MzU3NjQzLDE0Ni4zNzI0NzQgQzc2LjYzMTQ3ODQsMTM5LjkyOTY0IDc5LjA4OTMxOTcsMTMzLjIzNDIyNSA4MS45NTk4MTc3LDEyNi40MjQxODIgQzgzLjk4MjQ3OTIsMTMwLjMzMDc0NiA4Ni4xMTg1NjA5LDEzNC4yMzQ0OTUgODguMzY1NjQ5NywxMzguMTE1NzIxIEw4OC4zNjYwNTE4LDEzOC4xMTU3MjEgQzkwLjY1NDk2OTQsMTQyLjA2OTc0NCA5My4wMjYzMzc4LDE0NS45NDI5MjUgOTUuNDYwNDQ5MywxNDkuNzE5OTgxIEw5NS40NjA0NDkzLDE0OS43MTk5ODEgTDk1LjQ2MDQ0OTMsMTQ5LjcxOTk4MSBaIE0xMjguNTk2MDYsMTc3LjEwODU2MiBDMTI0LjAyMTA0LDE3Mi4xNzIzNjcgMTE5LjQ1NzY4NCwxNjYuNzEyMTA3IDExNS4wMDA5MTEsMTYwLjgzODc4NyBDMTE5LjMyNzM3MSwxNjEuMDA4NTE1IDEyMy43MzgyOTMsMTYxLjA5NTM5MSAxMjguMjIxMjEsMTYxLjA5NTM5MSBDMTMyLjgyNjc5NywxNjEuMDk1MzkxIDEzNy4zNzk2OTUsMTYwLjk5MTYyMyAxNDEuODYxMDAzLDE2MC43OTIxMzIgQzEzNy40NjA5MzksMTY2Ljc3MTIzMSAxMzMuMDE4MjQ0LDE3Mi4yMzk5MzcgMTI4LjU5NjA2LDE3Ny4xMDg1NjIgTDEyOC41OTYwNiwxNzcuMTA4NTYyIEwxMjguNTk2MDYsMTc3LjEwODU2MiBaIE0xNzQuNjY4NDE4LDEyNi4wNzcwODQgQzE3Ny42ODg1MzQsMTMyLjk2MDcyOSAxODAuMjM0NDU3LDEzOS42MjExNTMgMTgyLjI1NTkxMiwxNDUuOTU0MTg3IEMxNzUuNzA0NDg0LDE0Ny40NDg3NiAxNjguNjMxMDAxLDE0OC42NTI1NDQgMTYxLjE3ODI0NCwxNDkuNTQ3MDM2IEMxNjMuNTIzODcyLDE0NS44Mjk5MDcgMTY1LjgzOTMzNCwxNDEuOTk0NTMyIDE2OC4xMTQ1NzYsMTM4LjA0OTM1NyBDMTcwLjQxNjM2NSwxMzQuMDU3OTMgMTcyLjYwMTkxNywxMzAuMDYwNDY5IDE3NC42Njg0MTgsMTI2LjA3NzA4NCBMMTc0LjY2ODQxOCwxMjYuMDc3MDg0IEwxNzQuNjY4NDE4LDEyNi4wNzcwODQgWiBNMTU5Ljc1MzI1LDEzMy4yMjY5ODUgQzE1Ni4yMjExMzQsMTM5LjM1MTI3NyAxNTIuNTk0OTAzLDE0NS4xOTc2NDkgMTQ4LjkxMzU3MSwxNTAuNzE2MjMgQzE0Mi4yMDg1MDIsMTUxLjE5NTY1MSAxMzUuMjgxNDIsMTUxLjQ0MjYwMiAxMjguMjIxMjEsMTUxLjQ0MjYwMiBDMTIxLjE4OTU1NiwxNTEuNDQyNjAyIDExNC4zNDk3NSwxNTEuMjI0MjA3IDEwNy43NjMzMzEsMTUwLjc5NjY2OSBDMTAzLjkzMzU4NywxNDUuMjA1Njk0IDEwMC4yMjg1MjUsMTM5LjM0MjAyNyA5Ni43MTg5MzE3LDEzMy4yNzk2NzMgTDk2LjcxOTczNjEsMTMzLjI3OTY3MyBDOTMuMjE5MzkzNSwxMjcuMjMzODEgODkuOTk3Nzc1NCwxMjEuMTM2ODY3IDg3LjA3ODYxMTIsMTE1LjA3NDExMiBDODkuOTk2OTcwOSwxMDguOTk3Mjc5IDkzLjIxMDE0MjksMTAyLjg5MzQ5OSA5Ni42OTAzNzU1LDk2Ljg1ODQ5NDkgTDk2LjY4OTU3MTEsOTYuODU5NzAxNSBDMTAwLjE3OTA1NCw5MC44MDg2MDk2IDEwMy44NTE1MzgsODQuOTczNDk4OCAxMDcuNjQ1ODg4LDc5LjQxNzUxNDUgQzExNC4zNjU4MzgsNzguOTA5NTM2NiAxMjEuMjU2NzIzLDc4LjY0NDQ4NzEgMTI4LjIyMDgwOCw3OC42NDQ0ODcxIEwxMjguMjIxMjEsNzguNjQ0NDg3MSBDMTM1LjIxNjY2Niw3OC42NDQ0ODcxIDE0Mi4xMTYzOTksNzguOTExNTQ3NSAxNDguODM0MzM3LDc5LjQyMzk0OTggQzE1Mi41NzA3NzEsODQuOTM5MzExOSAxNTYuMjE4MzE5LDkwLjc1NTUxOTIgMTU5LjcyMTQ3Nyw5Ni44MDc0MTU2IEMxNjMuMjY0NDUzLDEwMi45MjcyODQgMTY2LjUxOTA1MSwxMDguOTkwNDQxIDE2OS40NjIzNDcsMTE0LjkzNjk2MiBDMTY2LjUyNzksMTIwLjk4NTY0IDE2My4yODA1NDEsMTI3LjEwOTkzMyAxNTkuNzUzMjUsMTMzLjIyNjk4NSBMMTU5Ljc1MzI1LDEzMy4yMjY5ODUgTDE1OS43NTMyNSwxMzMuMjI2OTg1IFogTTE3OS42NjU3NDcsMjUuNDM1MDk4MiBDMTg3LjIzMjMyNywyOS43OTg1NjA5IDE5MC4xNzQ4MTgsNDcuMzk2Mzk5MSAxODUuNDIwODIsNzAuNDcyNTk3IEMxODUuMTE3NTYxLDcxLjk0NTA0OTUgMTg0Ljc3NjA5NSw3My40NDQ4NTE1IDE4NC40MDUyNjYsNzQuOTY0NzYzNSBDMTc1LjAzMDc5OSw3Mi44MDE3MzQ1IDE2NC44NTExMjksNzEuMTkyMTMyIDE1NC4xOTMyNDUsNzAuMTkyMjYzOSBDMTQ3Ljk4NDQ5LDYxLjM1MDcxMTcgMTQxLjU1MDUwNCw1My4zMTI3NTQxIDEzNS4wOTIzODYsNDYuMzUzODk3OCBDMTM2LjgyODY4Miw0NC42ODM1NjMzIDEzOC41NjI1NjQsNDMuMDkwODUzMSAxNDAuMjg5MjA2LDQxLjU4NzgzMzUgQzE1Ni45NzA4MzQsMjcuMDcwNDQxNSAxNzIuNTYyMDk5LDIxLjMzODY5NiAxNzkuNjY1NzQ3LDI1LjQzNTA5ODIgTDE3OS42NjU3NDcsMjUuNDM1MDk4MiBMMTc5LjY2NTc0NywyNS40MzUwOTgyIFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0xMjguMjIxMjEsOTQuNjY1MzAwOCBDMTM5LjM2NDU1LDk0LjY2NTMwMDggMTQ4LjM5ODM1MywxMDMuNjk4NzAyIDE0OC4zOTgzNTMsMTE0Ljg0MjQ0NCBDMTQ4LjM5ODM1MywxMjUuOTg1Nzg0IDEzOS4zNjQ1NSwxMzUuMDE5NTg5IDEyOC4yMjEyMSwxMzUuMDE5NTg5IEMxMTcuMDc3ODcsMTM1LjAxOTU4OSAxMDguMDQ0MDY2LDEyNS45ODU3ODQgMTA4LjA0NDA2NiwxMTQuODQyNDQ0IEMxMDguMDQ0MDY2LDEwMy42OTg3MDIgMTE3LjA3Nzg3LDk0LjY2NTMwMDggMTI4LjIyMTIxLDk0LjY2NTMwMDgiIGZpbGw9IiM1M0MxREUiPjwvcGF0aD4KPC9zdmc+Cg=="

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyOTZweCIgdmlld0JveD0iMCAwIDI1NiAyOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjUwJSIgY3k9IjUwJSIgZng9IjUwJSIgZnk9IjUwJSIgcj0iNTAlIiBpZD0icmFkaWFsR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5M0I0RTciIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0I5RDFGOCIgb2Zmc2V0PSI1OS4yNzMzNTc4JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUNCNkUwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTEyOC4wMzIzNDIsMC40NTU1MTYwMTQgTDAuMjk3OTA3NDczLDc0LjIwMzEwMzIgTDAuMjk3OTA3NDczLDIyMS42OTgyNzggTDEyOC4wMzIzNDIsMjk1LjQ0NjMyIEwyNTUuNzY3MjMxLDIyMS42OTgyNzggTDI1NS43NjcyMzEsNzQuMjAzMTAzMiBMMTI4LjAzMjM0MiwwLjQ1NTUxNjAxNCBaIiBmaWxsPSJ1cmwoI3JhZGlhbEdyYWRpZW50LTEpIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEyOC4wMzM3MDgsNzUuMjYyNjMzNSBMNjQuNjkwMTA2OCwxMTEuODM0MTkyIEw2NC42OTAxMDY4LDE4NC45Nzc3NjUgTDEyOC4wMzM3MDgsMjIxLjU0OTc3OSBMMTkxLjM3ODIyMSwxODQuOTc3NzY1IEwxOTEuMzc4MjIxLDExMS44MzQxOTIgTDEyOC4wMzM3MDgsNzUuMjYyNjMzNSBaIiBmaWxsPSIjNkY5NURCIj48L3BhdGg+CiAgICAgICAgPGcgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTI4LDAgTDAsNzQuMjQ5MTEwMyBMMTI4LDE0My45NDMwNiBMMjU2LDc0LjcwNDYyNjMgTDEyOCwwIFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE1My41MDg4OTcpIiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjgsMCBMMCw2Ny44NzE4ODYxIEwxMjgsMTQxLjY2NTQ4IEwyNTUuNTQ0NDg0LDY3LjQxNjM3MDEgTDEyOCwwIFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Header.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Header.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "div.header {\n  width: 100%;\n  margin: 10px auto;\n  text-align: center; }\n\nheader {\n  text-align: center;\n  border-bottom: 2px solid #f4f4f4; }\n\nul {\n  list-style-type: none; }\n\nheader li {\n  display: inline;\n  padding: 5px;\n  border-left: 1px solid #eee; }\n\nli a {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #888; }\n\nimg {\n  margin: 0 10px; }\n", ""]);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	// 
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(var i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	if (process.env.BROWSER) {
	  __webpack_require__(35);
	}
	
	var Footer = (function (_React$Component) {
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(Footer, _React$Component);
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'footer' },
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=star&count=true&v=2', frameBorder: '0', scrolling: '0', width: '170px', height: '20px' }),
	          _react2['default'].createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=fork&count=true&v=2', frameBorder: '0', scrolling: '0', width: '170px', height: '20px' })
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	})(_react2['default'].Component);
	
	exports['default'] = Footer;
	
	Footer.prototype.displayName = 'Footer';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Footer.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Footer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "div.footer {\n  width: 100%;\n  margin: 50px 0;\n  padding: 10px;\n  text-align: center;\n  text-align: center;\n  border-top: 2px solid #f4f4f4; }\n", ""]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	//import cx from 'classnames';
	
	// FLUX
	
	var _actionsRecorderActions = __webpack_require__(38);
	
	var _actionsRecorderActions2 = _interopRequireDefault(_actionsRecorderActions);
	
	var _storesRecorderStore = __webpack_require__(41);
	
	var _storesRecorderStore2 = _interopRequireDefault(_storesRecorderStore);
	
	var _altUtilsConnectToStores = __webpack_require__(46);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	var _altUtilsMakeFinalStore = __webpack_require__(48);
	
	var _altUtilsMakeFinalStore2 = _interopRequireDefault(_altUtilsMakeFinalStore);
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	if (process.env.BROWSER) {
	  __webpack_require__(49);
	}
	
	var FinalStore = (0, _altUtilsMakeFinalStore2['default'])(_alt2['default']);
	
	var records = (function (_React$Component) {
	  function Records(props) {
	    _classCallCheck(this, Records);
	
	    _get(Object.getPrototypeOf(Records.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      record: true
	    };
	    _actionsRecorderActions2['default'].recordStart();
	  }
	
	  _inherits(Records, _React$Component);
	
	  _createClass(Records, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var showStartClass = this.state.record ? 'hidden' : '';
	      var showStopClass = !this.state.record ? 'hidden' : '';
	      var recordsMarkup = [];
	      var recs = Records.getPropsFromStores().records;
	      recs.forEach(function (record, idx) {
	        recordsMarkup.push(_react2['default'].createElement(
	          'div',
	          { key: idx },
	          _react2['default'].createElement(
	            'span',
	            null,
	            'a: ',
	            record.action.toString(),
	            ' - d: ',
	            JSON.stringify(record.data)
	          ),
	          _react2['default'].createElement(
	            'button',
	            { onClick: _this._onClickReplay.bind(_this, record) },
	            'do'
	          )
	        ));
	      });
	      return _react2['default'].createElement(
	        'div',
	        { id: 'recorder' },
	        _react2['default'].createElement(
	          'h4',
	          null,
	          'Recorder'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { id: 'recorder-actions' },
	          _react2['default'].createElement(
	            'button',
	            { className: showStartClass, onClick: this._onClickStart.bind(this) },
	            'START'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: showStopClass, onClick: this._onClickStop.bind(this) },
	            'STOP'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: showStopClass, onClick: this._onClickReplay.bind(this) },
	            'REPLAY'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { onClick: this._onClickClear.bind(this) },
	            'CLEAR'
	          )
	        ),
	        recordsMarkup
	      );
	    }
	  }, {
	    key: '_onClickClear',
	    value: function _onClickClear() {
	      _actionsRecorderActions2['default'].recordClear();
	    }
	  }, {
	    key: '_onClickStart',
	    value: function _onClickStart() {
	      _actionsRecorderActions2['default'].recordStart();
	      this.setState({ record: true });
	    }
	  }, {
	    key: '_onClickStop',
	    value: function _onClickStop() {
	      _actionsRecorderActions2['default'].recordStop();
	      this.setState({ record: false });
	    }
	  }, {
	    key: '_onClickReplay',
	    value: function _onClickReplay() {
	      _actionsRecorderActions2['default'].replay();
	    }
	  }], [{
	    key: 'getStores',
	    value: function getStores() {
	      return [FinalStore, _storesRecorderStore2['default']];
	    }
	  }, {
	    key: 'getPropsFromStores',
	    value: function getPropsFromStores() {
	      return {
	        records: _storesRecorderStore2['default'].getState().get('records').toJS()
	      };
	    }
	  }]);
	
	  return Records;
	})(_react2['default'].Component);
	
	records.prototype.displayName = 'Records';
	
	exports['default'] = (0, _altUtilsConnectToStores2['default'])(records);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Recorder.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// DEPENDENCY
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var RecorderActions = function RecorderActions() {
	  _classCallCheck(this, RecorderActions);
	
	  this.generateActions('recordClear', 'recordStart', 'recordStop', 'replay');
	};
	
	module.exports = _alt2['default'].createActions(RecorderActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "RecorderActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alt = __webpack_require__(40);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// create alt instance
	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("alt");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _immutable = __webpack_require__(43);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	// FLUX
	
	var _actionsRecorderActions = __webpack_require__(38);
	
	var _actionsRecorderActions2 = _interopRequireDefault(_actionsRecorderActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _altUtilsImmutableUtil = __webpack_require__(42);
	
	var _altUtilsImmutableUtil2 = _interopRequireDefault(_altUtilsImmutableUtil);
	
	var _altUtilsDispatcherRecorder = __webpack_require__(44);
	
	var _altUtilsDispatcherRecorder2 = _interopRequireDefault(_altUtilsDispatcherRecorder);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(45);
	
	var _altUtilsMakeHot2 = _interopRequireDefault(_altUtilsMakeHot);
	
	var recorderStore = (0, _altUtilsMakeHot2['default'])(_alt2['default'], (0, _altUtilsImmutableUtil2['default'])((function () {
	  function RecorderStore() {
	    _classCallCheck(this, RecorderStore);
	
	    this.bindActions(_actionsRecorderActions2['default']);
	    this.state = new _immutable.Map({
	      records: new _immutable.List(),
	      dispatchToken: ''
	    });
	    this.recorder = new _altUtilsDispatcherRecorder2['default'](_alt2['default']);
	  }
	
	  _createClass(RecorderStore, [{
	    key: 'onRecordClear',
	    value: function onRecordClear() {
	      this.recorder.clear();
	    }
	  }, {
	    key: 'onRecordStart',
	    value: function onRecordStart() {
	      this.recorder.record();
	      var self = this;
	      var dispatchToken = _alt2['default'].dispatcher.register(function () {
	        var dumpEvents = self.recorder.serializeEvents();
	        //self.setState(self.state.set('records', Immutable.fromJS([payload] /*JSON.parse(dumpEvents)*/)));
	        self.setState(self.state.set('records', _immutable2['default'].fromJS(self.recorder.events)));
	      });
	      this.setState(this.state.set('dispatchToken', dispatchToken));
	    }
	  }, {
	    key: 'onRecordStop',
	    value: function onRecordStop() {
	      this.recorder.stop();
	      _alt2['default'].dispatcher.unregister(this.state.get('dispatchToken'));
	    }
	  }, {
	    key: 'onReplay',
	    value: function onReplay() {
	      var _this = this;
	
	      setTimeout(function () {
	        _this.recorder.replay();
	      }, 0);
	    }
	  }]);
	
	  return RecorderStore;
	})()), 'RecorderStore');
	
	module.exports = recorderStore;
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "RecorderStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _immutable = __webpack_require__(43);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function immutable(StoreModel) {
	  StoreModel.config = {
	    setState: function setState(currentState, nextState) {
	      this.state = nextState;
	      return this.state;
	    },
	
	    getState: function getState(currentState) {
	      return currentState;
	    },
	
	    onSerialize: function onSerialize(state) {
	      return state.toJS();
	    },
	
	    onDeserialize: function onDeserialize(data) {
	      return _immutable2['default'].fromJS(data);
	    }
	  };
	
	  return StoreModel;
	}
	
	exports['default'] = immutable;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("immutable");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * DispatcherRecorder(alt: AltInstance): DispatcherInstance
	 *
	 * > Record and replay your actions at any point in time.
	 *
	 * This util allows you to record a set of dispatches which you can later
	 * replay at your convenience.
	 *
	 * Good for: Debugging, repeating, logging.
	 *
	 * Usage:
	 *
	 * ```js
	 * var recorder = new DispatcherRecorder(alt);
	 *
	 * // start recording
	 * recorder.record();
	 *
	 * // call a series of actions
	 *
	 * // stop recording
	 * recorder.stop();
	 *
	 * // replay the events that took place
	 * recorder.replay();
	 * ```
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function DispatcherRecorder(alt) {
	  var maxEvents = arguments[1] === undefined ? Infinity : arguments[1];
	
	  this.alt = alt;
	  this.events = [];
	  this.dispatchToken = null;
	  this.maxEvents = maxEvents;
	}
	
	/**
	 * If recording started you get true, otherwise false since there's a recording
	 * in progress.
	 * record(): boolean
	 */
	DispatcherRecorder.prototype.record = function () {
	  var _this = this;
	
	  if (this.dispatchToken) {
	    return false;
	  }
	
	  this.dispatchToken = this.alt.dispatcher.register(function (payload) {
	    if (_this.events.length < _this.maxEvents) {
	      _this.events.push(payload);
	    }
	  });
	
	  return true;
	};
	
	/**
	 * Stops the recording in progress.
	 * stop(): undefined
	 */
	DispatcherRecorder.prototype.stop = function () {
	  this.alt.dispatcher.unregister(this.dispatchToken);
	  this.dispatchToken = null;
	};
	
	/**
	 * Clear all events from memory.
	 * clear(): undefined
	 */
	DispatcherRecorder.prototype.clear = function () {
	  this.events = [];
	};
	
	/**
	 * (As|S)ynchronously replay all events that were recorded.
	 * replay(replayTime: ?number, done: ?function): undefined
	 */
	DispatcherRecorder.prototype.replay = function (replayTime, done) {
	  var alt = this.alt;
	
	  if (replayTime === void 0) {
	    this.events.forEach(function (payload) {
	      alt.dispatch(payload.action, payload.data);
	    });
	  }
	
	  var onNext = function onNext(payload, nextAction) {
	    return function () {
	      setTimeout(function () {
	        alt.dispatch(payload.action, payload.data);
	        nextAction();
	      }, replayTime);
	    };
	  };
	
	  var next = done || function () {};
	  var i = this.events.length - 1;
	  while (i >= 0) {
	    var _event = this.events[i];
	    next = onNext(_event, next);
	    i -= 1;
	  }
	
	  next();
	};
	
	/**
	 * Serialize all the events so you can pass them around or load them into
	 * a separate recorder.
	 * serializeEvents(): string
	 */
	DispatcherRecorder.prototype.serializeEvents = function () {
	  var events = this.events.map(function (event) {
	    return {
	      id: event.id,
	      action: event.action,
	      data: event.data || {}
	    };
	  });
	  return JSON.stringify(events);
	};
	
	/**
	 * Load serialized events into the recorder and overwrite the current events
	 * loadEvents(events: string): undefined
	 */
	DispatcherRecorder.prototype.loadEvents = function (events) {
	  var parsedEvents = JSON.parse(events);
	  this.events = parsedEvents.map(function (event) {
	    return {
	      action: event.action,
	      data: event.data
	    };
	  });
	  return parsedEvents;
	};
	
	exports["default"] = DispatcherRecorder;
	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function makeHot(alt, Store) {
	  var name = arguments[2] === undefined ? Store.displayName : arguments[2];
	  return (function () {
	    if (false) {
	      module.hot.dispose(function () {
	        delete alt.stores[name];
	      });
	    }
	
	    return alt.createStore(Store, name);
	  })();
	}
	
	exports["default"] = makeHot;
	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 'Higher Order Component' that controls the props of a wrapped
	 * component via stores.
	 *
	 * Expects the Component to have two static methods:
	 *   - getStores(): Should return an array of stores.
	 *   - getPropsFromStores(props): Should return the props from the stores.
	 *
	 * Example using old React.createClass() style:
	 *
	 *    const MyComponent = React.createClass({
	 *      statics: {
	 *        getStores(props) {
	 *          return [myStore]
	 *        },
	 *        getPropsFromStores(props) {
	 *          return myStore.getState()
	 *        }
	 *      },
	 *      render() {
	 *        // Use this.props like normal ...
	 *      }
	 *    })
	 *    MyComponent = connectToStores(MyComponent)
	 *
	 *
	 * Example using ES6 Class:
	 *
	 *    class MyComponent extends React.Component {
	 *      static getStores(props) {
	 *        return [myStore]
	 *      }
	 *      static getPropsFromStores(props) {
	 *        return myStore.getState()
	 *      }
	 *      render() {
	 *        // Use this.props like normal ...
	 *      }
	 *    }
	 *    MyComponent = connectToStores(MyComponent)
	 *
	 * A great explanation of the merits of higher order components can be found at
	 * http://bit.ly/1abPkrP
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _functions = __webpack_require__(47);
	
	function connectToStores(Spec) {
	  var Component = arguments[1] === undefined ? Spec : arguments[1];
	  return (function () {
	    // Check for required static methods.
	    if (!(0, _functions.isFunction)(Spec.getStores)) {
	      throw new Error('connectToStores() expects the wrapped component to have a static getStores() method');
	    }
	    if (!(0, _functions.isFunction)(Spec.getPropsFromStores)) {
	      throw new Error('connectToStores() expects the wrapped component to have a static getPropsFromStores() method');
	    }
	
	    var StoreConnection = _react2['default'].createClass({
	      displayName: 'StoreConnection',
	
	      getInitialState: function getInitialState() {
	        return Spec.getPropsFromStores(this.props, this.context);
	      },
	
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState(Spec.getPropsFromStores(nextProps, this.context));
	      },
	
	      componentDidMount: function componentDidMount() {
	        var _this = this;
	
	        var stores = Spec.getStores(this.props, this.context);
	        this.storeListeners = stores.map(function (store) {
	          return store.listen(_this.onChange);
	        });
	        if (Spec.componentDidConnect) {
	          Spec.componentDidConnect(this.props, this.context);
	        }
	      },
	
	      componentWillUnmount: function componentWillUnmount() {
	        this.storeListeners.forEach(function (unlisten) {
	          return unlisten();
	        });
	      },
	
	      onChange: function onChange() {
	        this.setState(Spec.getPropsFromStores(this.props, this.context));
	      },
	
	      render: function render() {
	        return _react2['default'].createElement(Component, (0, _functions.assign)({}, this.props, this.state));
	      }
	    });
	
	    return StoreConnection;
	  })();
	}
	
	exports['default'] = connectToStores;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.isPromise = isPromise;
	exports.eachObject = eachObject;
	exports.assign = assign;
	var isFunction = function isFunction(x) {
	  return typeof x === 'function';
	};
	
	exports.isFunction = isFunction;
	
	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}
	
	function eachObject(f, o) {
	  o.forEach(function (from) {
	    Object.keys(Object(from)).forEach(function (key) {
	      f(key, from[key]);
	    });
	  });
	}
	
	function assign(target) {
	  for (var _len = arguments.length, source = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    source[_key - 1] = arguments[_key];
	  }
	
	  eachObject(function (key, value) {
	    return target[key] = value;
	  }, source);
	  return target;
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * makeFinalStore(alt: AltInstance): AltStore
	 *
	 * > Creates a `FinalStore` which is a store like any other except that it
	 * waits for all other stores in your alt instance to emit a change before it
	 * emits a change itself.
	 *
	 * Want to know when a particular dispatch has completed? This is the util
	 * you want.
	 *
	 * Good for: taking a snapshot and persisting it somewhere, saving data from
	 * a set of stores, syncing data, etc.
	 *
	 * Usage:
	 *
	 * ```js
	 * var FinalStore = makeFinalStore(alt);
	 *
	 * FinalStore.listen(function () {
	 *   // all stores have now changed
	 * });
	 * ```
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = makeFinalStore;
	function FinalStore() {
	  var _this = this;
	
	  this.dispatcher.register(function (payload) {
	    var stores = Object.keys(_this.alt.stores).reduce(function (arr, store) {
	      arr.push(_this.alt.stores[store].dispatchToken);
	      return arr;
	    }, []);
	
	    _this.waitFor(stores);
	    _this.setState({ payload: payload });
	    _this.emitChange();
	  });
	}
	
	function makeFinalStore(alt) {
	  return alt.FinalStore ? alt.FinalStore : alt.FinalStore = alt.createUnsavedStore(FinalStore);
	}
	
	module.exports = exports["default"];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Recorder.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_Recorder.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "div#recorder {\n  position: fixed;\n  top: 200px;\n  right: 10%;\n  padding: 10px;\n  background: #000;\n  color: #fff; }\n  div#recorder div#recorder-actions button {\n    margin-bottom: 10px; }\n  div#recorder span {\n    font-size: 0.8rem; }\n", ""]);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	// TODO: do it in store maybe
	var metas = __webpack_require__(52).helmet;
	
	var HtmlHeaderTags = (function (_React$Component) {
	  function HtmlHeaderTags() {
	    _classCallCheck(this, HtmlHeaderTags);
	
	    _get(Object.getPrototypeOf(HtmlHeaderTags.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(HtmlHeaderTags, _React$Component);
	
	  _createClass(HtmlHeaderTags, [{
	    key: 'render',
	    value: function render() {
	      // DOM <head> instrumentation
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactHelmet2['default'], {
	          title: metas.title,
	          meta: metas.meta,
	          link: metas.link
	        })
	      );
	    }
	  }]);
	
	  return HtmlHeaderTags;
	})(_react2['default'].Component);
	
	exports['default'] = HtmlHeaderTags;
	
	HtmlHeaderTags.prototype.displayName = 'HtmlHeaderTags';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HtmlHeaderTags.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"helmet": {
			"title": "web-react",
			"meta": [
				{
					"name": "description",
					"content": "Webpack Node React Starter Kit"
				},
				{
					"name": "viewport",
					"content": "width=device-width, initial-scale=1"
				}
			],
			"link": [
				{
					"rel": "shortcut icon",
					"href": "/favicon.ico",
					"type": "image/x-icon"
				},
				{
					"rel": "icon",
					"href": "/favicon.ico",
					"type": "image/x-icon"
				}
			]
		}
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_App.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_App.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "body {\n  width: 750px;\n  margin: auto;\n  font: 100% Helvetica, sans-serif;\n  color: #aaa; }\n\nh1, h2, h3 {\n  margin-top: 24px;\n  margin-bottom: 12px; }\n\ndiv.main-content {\n  -webkit-padding-start: 40px; }\n\nbutton {\n  margin-right: 5px;\n  font-size: 12px;\n  color: white;\n  text-align: center;\n  background: #3498db;\n  border: 0;\n  cursor: pointer; }\n\nbutton:focus {\n  outline: none;\n  border-color: #53C1DE;\n  box-shadow: 0 0 10px #53C1DE; }\n\ninput {\n  height: 20px;\n  border: 1px;\n  padding: 0px 10px; }\n\ninput[type='checkbox'] {\n  position: relative;\n  top: 3px; }\n\ninput:focus {\n  outline: none;\n  border-color: #53C1DE;\n  box-shadow: 0 0 10px #53C1DE; }\n\nlabel {\n  line-height: 25px; }\n", ""]);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?indentedSyntax!./_App.sass", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?indentedSyntax!./_App.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "h1 {\n  color: #5a8894; }\n", ""]);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	// TODO: do it in store maybe
	var metas = __webpack_require__(52).helmet;
	
	var Contact = (function (_React$Component) {
	  function Contact() {
	    _classCallCheck(this, Contact);
	
	    _get(Object.getPrototypeOf(Contact.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(Contact, _React$Component);
	
	  _createClass(Contact, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'CONTACT PAGE'
	        ),
	        _react2['default'].createElement(_reactHelmet2['default'], { title: metas.title, titleTemplate: '%s | Contact page' }),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'test the 404 page ',
	          _react2['default'].createElement(
	            'a',
	            { href: '/middleofnowhere' },
	            'here'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Contact;
	})(_react2['default'].Component);
	
	exports['default'] = Contact;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Contact.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	// FLUX
	
	var _storesAppStore = __webpack_require__(60);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _storesAppStoreDepending = __webpack_require__(62);
	
	var _storesAppStoreDepending2 = _interopRequireDefault(_storesAppStoreDepending);
	
	var _HomeSectionActions = __webpack_require__(63);
	
	var _HomeSectionActions2 = _interopRequireDefault(_HomeSectionActions);
	
	var _altUtilsConnectToStores = __webpack_require__(46);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	// COMPONENT
	
	var _HomeSectionSubPartOne = __webpack_require__(64);
	
	var _HomeSectionSubPartOne2 = _interopRequireDefault(_HomeSectionSubPartOne);
	
	var _HomeSectionSubPartTwo = __webpack_require__(66);
	
	var _HomeSectionSubPartTwo2 = _interopRequireDefault(_HomeSectionSubPartTwo);
	
	if (process.env.BROWSER) {
	  __webpack_require__(67);
	}
	
	var homeSection = (function (_React$Component) {
	  function HomeSection() {
	    _classCallCheck(this, HomeSection);
	
	    _get(Object.getPrototypeOf(HomeSection.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(HomeSection, _React$Component);
	
	  _createClass(HomeSection, [{
	    key: 'render',
	    value: function render() {
	      // retrieve data from store
	      var storeProps = HomeSection.getPropsFromStores();
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'HOME PAGE'
	        ),
	        _react2['default'].createElement(_HomeSectionActions2['default'], null),
	        _react2['default'].createElement(_HomeSectionSubPartOne2['default'], { apiData: storeProps.apiData }),
	        _react2['default'].createElement(_HomeSectionSubPartTwo2['default'], { apiData: storeProps.apiData }),
	        _react2['default'].createElement(_HomeSectionSubPartTwo2['default'], { apiData: storeProps.apiDataDepending })
	      );
	    }
	  }], [{
	    key: 'getStores',
	    value: function getStores() {
	      return [_storesAppStore2['default'], _storesAppStoreDepending2['default']];
	    }
	  }, {
	    key: 'getPropsFromStores',
	    value: function getPropsFromStores() {
	      return {
	        apiData: _storesAppStore2['default'].getState().get('dataByRestApi').toJS(),
	        apiDataDepending: _storesAppStoreDepending2['default'].getState().get('dataByRestApi').toJS()
	      };
	    }
	  }]);
	
	  return HomeSection;
	})(_react2['default'].Component);
	
	homeSection.prototype.displayName = 'HomeSection';
	
	exports['default'] = (0, _altUtilsConnectToStores2['default'])(homeSection);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _immutable = __webpack_require__(43);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(61);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _altUtilsImmutableUtil = __webpack_require__(42);
	
	var _altUtilsImmutableUtil2 = _interopRequireDefault(_altUtilsImmutableUtil);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(45);
	
	var _altUtilsMakeHot2 = _interopRequireDefault(_altUtilsMakeHot);
	
	var appStore = (0, _altUtilsMakeHot2['default'])(_alt2['default'], (0, _altUtilsImmutableUtil2['default'])((function () {
	  function AppStore() {
	    _classCallCheck(this, AppStore);
	
	    this.bindActions(_actionsAppActions2['default']);
	    this.state = new _immutable.Map({
	      dataByRestApi: new _immutable.Map({}),
	      data: new _immutable.Map({})
	    });
	  }
	
	  _createClass(AppStore, [{
	    key: 'onCreate',
	    value: function onCreate(text) {
	      text = text.trim();
	      if (text === '') {
	        return false;
	      }
	      // hand waving of course.
	      var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	      var newData = this.state.get('data').set(id, new _immutable.Map({
	        id: id,
	        complete: false,
	        edit: false,
	        text: text
	      }));
	
	      this.setState(this.state.set('data', newData));
	    }
	  }, {
	    key: 'onRemove',
	    value: function onRemove(id) {
	      var newData = this.state.get('data')['delete'](id);
	      this.setState(this.state.set('data', newData));
	    }
	  }, {
	    key: 'onRemoveAll',
	    value: function onRemoveAll() {
	      this.setState(this.state.set('data', new _immutable.Map({})));
	    }
	  }, {
	    key: 'onUpdateComplete',
	    value: function onUpdateComplete(x) {
	      var id = x.id;
	      var complete = x.complete;
	
	      this.update(id, { complete: complete });
	    }
	  }, {
	    key: 'onUpdateCompleteAll',
	    value: function onUpdateCompleteAll(x) {
	      var completed = x.completed;
	
	      // update all map items
	      var allTodoKeysIt = this.state.get('data').keys();
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = allTodoKeysIt[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var value = _step.value;
	
	          this.update(value, { complete: completed });
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'onUpdateText',
	    value: function onUpdateText(x) {
	      var id = x.id;
	      var text = x.text;
	
	      text = text ? text.trim() : '';
	      if (text === '') {
	        return false;
	      }
	      this.update(id, { text: text });
	    }
	  }, {
	    key: 'update',
	    value: function update(id, updates) {
	      // update item by id check
	      var newData = this.state.get('data').update(id, function (todo) {
	        var updateKeys = Object.keys(updates);
	        updateKeys.forEach(function (key) {
	          todo = todo.set(key, updates[key]);
	        });
	        return todo;
	      });
	      this.setState(this.state.set('data', newData));
	    }
	  }, {
	    key: 'updateAll',
	    value: function updateAll(updates) {
	      for (var id in this.data) {
	        this.update(id, updates);
	      }
	    }
	  }, {
	    key: 'onFetch',
	    value: function onFetch() {
	      var _this = this;
	
	      this.setState(this.state.set('dataByRestApi', _immutable2['default'].fromJS({ data: 'hello' })));
	      fetch('https://api.github.com/users/github').then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        _this.setState(_this.state.set('dataByRestApi', _immutable2['default'].fromJS({ data: json })));
	      });
	    }
	  }, {
	    key: 'onDestroyCompleted',
	    value: function onDestroyCompleted() {
	      for (var id in this.data) {
	        if (this.data[id].complete) {
	          this.onDestroy(id);
	        }
	      }
	    }
	  }], [{
	    key: 'areAllComplete',
	    value: function areAllComplete() {
	      var _getState = this.getState();
	
	      var data = _getState.data;
	
	      for (var id in data) {
	        if (!data[id].complete) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }]);
	
	  return AppStore;
	})()), 'AppStore');
	
	module.exports = appStore;
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// DEPENDENCY
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var AppActions = function AppActions() {
	  _classCallCheck(this, AppActions);
	
	  this.generateActions('create', 'fetch', 'remove', 'removeAll', 'updateComplete', 'updateCompleteAll', 'updateText');
	};
	
	module.exports = _alt2['default'].createActions(AppActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _immutable = __webpack_require__(43);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(61);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _altUtilsImmutableUtil = __webpack_require__(42);
	
	var _altUtilsImmutableUtil2 = _interopRequireDefault(_altUtilsImmutableUtil);
	
	var _AppStore = __webpack_require__(60);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(45);
	
	var _altUtilsMakeHot2 = _interopRequireDefault(_altUtilsMakeHot);
	
	var dependingStore = (0, _altUtilsMakeHot2['default'])(_alt2['default'], (0, _altUtilsImmutableUtil2['default'])((function () {
	  function DependingStore() {
	    _classCallCheck(this, DependingStore);
	
	    this.bindActions(_actionsAppActions2['default']);
	    this.state = new _immutable.Map({
	      dataByRestApi: new _immutable.Map({})
	    });
	  }
	
	  _createClass(DependingStore, [{
	    key: 'onFetch',
	    value: function onFetch() {
	      this.waitFor([_AppStore2['default'].dispatchToken]); // event has to be consumed
	      this.setState(this.state.set('dataByRestApi', _immutable2['default'].fromJS({ data: 'here is dependency store' })));
	    }
	  }]);
	
	  return DependingStore;
	})()), 'DependingStore');
	
	module.exports = dependingStore;
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStoreDepending.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(61);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var HomeSectionActions = (function (_React$Component) {
	  function HomeSectionActions() {
	    _classCallCheck(this, HomeSectionActions);
	
	    _get(Object.getPrototypeOf(HomeSectionActions.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(HomeSectionActions, _React$Component);
	
	  _createClass(HomeSectionActions, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'home-section-actions' },
	        _react2['default'].createElement(
	          'button',
	          { onClick: this._onClick.bind(this) },
	          'FAKE API CALL'
	        )
	      );
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      _actionsAppActions2['default'].fetch();
	    }
	  }]);
	
	  return HomeSectionActions;
	})(_react2['default'].Component);
	
	exports['default'] = HomeSectionActions;
	
	HomeSectionActions.prototype.displayName = 'HomeSectionActions';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(65);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(61);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	var HomeSectionSubPartOne = (function (_React$Component) {
	  function HomeSectionSubPartOne() {
	    _classCallCheck(this, HomeSectionSubPartOne);
	
	    _get(Object.getPrototypeOf(HomeSectionSubPartOne.prototype), 'constructor', this).call(this);
	    this.propsTypes = {
	      apiData: PropTypes.object.isRequired
	    };
	  }
	
	  _inherits(HomeSectionSubPartOne, _React$Component);
	
	  _createClass(HomeSectionSubPartOne, [{
	    key: 'render',
	    value: function render() {
	      var contentMarkup = 'dispatching zone 1';
	      if (this.props.apiData.data) {
	        contentMarkup = (0, _marked2['default'])('```json\n' + JSON.stringify(this.props.apiData.data, null, 2) + '```', { breaks: true });
	      }
	
	      return _react2['default'].createElement('div', { className: 'home-section-sub-part-one', dangerouslySetInnerHTML: { __html: contentMarkup } });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      _actionsAppActions2['default'].fetch();
	    }
	  }]);
	
	  return HomeSectionSubPartOne;
	})(_react2['default'].Component);
	
	exports['default'] = HomeSectionSubPartOne;
	
	HomeSectionSubPartOne.prototype.displayName = 'HomeSectionSubPartOne';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionSubPartOne.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("marked");

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(65);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(61);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	var HomeSectionSubPartTwo = (function (_React$Component) {
	  function HomeSectionSubPartTwo() {
	    _classCallCheck(this, HomeSectionSubPartTwo);
	
	    _get(Object.getPrototypeOf(HomeSectionSubPartTwo.prototype), 'constructor', this).call(this);
	    this.propsTypes = {
	      apiData: PropTypes.object.isRequired
	    };
	  }
	
	  _inherits(HomeSectionSubPartTwo, _React$Component);
	
	  _createClass(HomeSectionSubPartTwo, [{
	    key: 'render',
	    value: function render() {
	      var contentMarkup = 'dispatching zone 2';
	      if (this.props.apiData.data) {
	        contentMarkup = (0, _marked2['default'])('```json\n' + JSON.stringify(this.props.apiData.data, null, 2) + '```', { breaks: true });
	      }
	
	      return _react2['default'].createElement('div', { className: 'home-section-sub-part-two', dangerouslySetInnerHTML: { __html: contentMarkup } });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      _actionsAppActions2['default'].fetch();
	    }
	  }]);
	
	  return HomeSectionSubPartTwo;
	})(_react2['default'].Component);
	
	exports['default'] = HomeSectionSubPartTwo;
	
	HomeSectionSubPartTwo.prototype.displayName = 'HomeSectionSubPartTwo';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionSubPartTwo.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_HomeSection.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_HomeSection.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "div.home-section-actions {\n  padding: 10px;\n  margin: 10px 0;\n  background-color: #6DF6FF;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-one {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-two {\n  padding: 10px;\n  background-color: #8EE7FD;\n  border: 1px #eee solid; }\n", ""]);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NotFoundSection = (function (_React$Component) {
	  function NotFoundSection() {
	    _classCallCheck(this, NotFoundSection);
	
	    _get(Object.getPrototypeOf(NotFoundSection.prototype), 'constructor', this).call(this);
	  }
	
	  _inherits(NotFoundSection, _React$Component);
	
	  _createClass(NotFoundSection, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'PAGE NOT FOUND'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'yes indeed'
	        )
	      );
	    }
	  }]);
	
	  return NotFoundSection;
	})(_react2['default'].Component);
	
	exports['default'] = NotFoundSection;
	
	NotFoundSection.prototype.displayName = 'NotFoundSection';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NotFoundSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(71);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	// COMPONENT
	
	var _TodoItem = __webpack_require__(72);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	var _TodoTextInput = __webpack_require__(76);
	
	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);
	
	var _TodoSnapshots = __webpack_require__(77);
	
	var _TodoSnapshots2 = _interopRequireDefault(_TodoSnapshots);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(61);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _storesAppStore = __webpack_require__(60);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _storesSnapshotStore = __webpack_require__(80);
	
	var _storesSnapshotStore2 = _interopRequireDefault(_storesSnapshotStore);
	
	var _altUtilsConnectToStores = __webpack_require__(46);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	var todoSection = (function (_React$Component) {
	  function TodoSection() {
	    _classCallCheck(this, TodoSection);
	
	    _get(Object.getPrototypeOf(TodoSection.prototype), 'constructor', this).call(this);
	    this.state = {
	      completed: false
	    };
	  }
	
	  _inherits(TodoSection, _React$Component);
	
	  _createClass(TodoSection, [{
	    key: 'render',
	    value: function render() {
	      // retrieve data from store
	      var storeProps = TodoSection.getPropsFromStores();
	      // build with current data
	      var allTodos = storeProps.allData,
	          todos = [];
	      // generate todo item list
	      for (var key in allTodos) {
	        todos.push(_react2['default'].createElement(_TodoItem2['default'], { key: key, todo: allTodos[key] }));
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'TODO PAGE'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'todo' },
	          _react2['default'].createElement(
	            'p',
	            null,
	            'First add some tasks by pressing enter key'
	          ),
	          _react2['default'].createElement(_TodoTextInput2['default'], { className: 'edit', id: 'new-todo', placeholder: 'What needs to be done ?', onSave: this._onSave.bind(this), value: '' }),
	          _react2['default'].createElement(
	            'ul',
	            { id: 'todo-list' },
	            todos
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: (0, _classnames2['default'])({ 'hidden': !todos.length }), onClick: this._onClickToggleAll.bind(this) },
	            'TOGGLE ALL STATES'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: (0, _classnames2['default'])({ 'hidden': !todos.length }), onClick: this._onClickRemoveAll.bind(this) },
	            'CLEAR'
	          )
	        ),
	        _react2['default'].createElement(_TodoSnapshots2['default'], { snapshots: storeProps.snapshots, todoLength: todos.length })
	      );
	    }
	  }, {
	    key: '_onClickRemoveAll',
	    value: function _onClickRemoveAll() {
	      _actionsAppActions2['default'].removeAll();
	    }
	  }, {
	    key: '_onClickToggleAll',
	    value: function _onClickToggleAll() {
	      var completed = !this.state.completed;
	      this.setState({
	        completed: completed
	      });
	      _actionsAppActions2['default'].updateCompleteAll({ completed: completed });
	    }
	  }, {
	    key: '_onSave',
	    value: function _onSave(text) {
	      if (text.trim()) {
	        _actionsAppActions2['default'].create(text);
	      }
	    }
	  }], [{
	    key: 'getStores',
	    value: function getStores() {
	      return [_storesAppStore2['default'], _storesSnapshotStore2['default']];
	    }
	  }, {
	    key: 'getPropsFromStores',
	    value: function getPropsFromStores() {
	      return {
	        allData: _storesAppStore2['default'].getState().get('data').toJS(),
	        areAllComplete: _storesAppStore2['default'].areAllComplete(),
	        snapshots: _storesSnapshotStore2['default'].getState().get('snapshots').toArray()
	      };
	    }
	  }]);
	
	  return TodoSection;
	})(_react2['default'].Component);
	
	todoSection.prototype.displayName = 'TodoSection';
	
	exports['default'] = (0, _altUtilsConnectToStores2['default'])(todoSection);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("classnames");

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(71);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(61);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// COMPONENT
	
	var _TodoTextInputEdit = __webpack_require__(73);
	
	var _TodoTextInputEdit2 = _interopRequireDefault(_TodoTextInputEdit);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(74);
	}
	
	var TodoItem = (function (_React$Component) {
	  function TodoItem(props) {
	    _classCallCheck(this, TodoItem);
	
	    _get(Object.getPrototypeOf(TodoItem.prototype), 'constructor', this).call(this, props);
	    this.propsTypes = {
	      todo: PropTypes.object.isRequired
	    };
	  }
	
	  _inherits(TodoItem, _React$Component);
	
	  _createClass(TodoItem, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.state = {
	        complete: false,
	        editing: false,
	        text: this.props.todo.text
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var todo = this.props.todo;
	
	      return _react2['default'].createElement(
	        'li',
	        { className: (0, _classnames2['default'])({
	            'completed': todo.complete,
	            'editing': this.state.editing
	          }),
	          key: todo.id },
	        _react2['default'].createElement(
	          'div',
	          { className: (0, _classnames2['default'])({ 'inline': this.state.editing }) },
	          _react2['default'].createElement('input', { type: 'checkbox', className: 'toggle', disabled: this.state.editing, checked: todo.complete, onChange: this._onClickToggleComplete.bind(this), title: 'toggle task state (completed ?)' }),
	          _react2['default'].createElement(
	            'label',
	            { className: (0, _classnames2['default'])({ 'hidden': this.state.editing }), onClick: this._onClickEdit.bind(this), title: 'Edit me by a click' },
	            todo.text
	          ),
	          _react2['default'].createElement(_TodoTextInputEdit2['default'], { className: (0, _classnames2['default'])({ 'hidden': !this.state.editing }), onUpdate: this._onUpdate.bind(this), onCancelUpdate: this._onCancelUpdate.bind(this), todo: todo }),
	          _react2['default'].createElement(
	            'button',
	            { className: (0, _classnames2['default'])({ 'hidden': this.state.editing, 'destroy': true }), onClick: this._onClickRemove.bind(this), title: 'remove task' },
	            '✖'
	          )
	        )
	      );
	    }
	  }, {
	    key: '_onClickEdit',
	    value: function _onClickEdit() {
	      this.setState({
	        editing: true
	      });
	    }
	  }, {
	    key: '_onClickRemove',
	    value: function _onClickRemove() {
	      _actionsAppActions2['default'].remove(this.props.todo.id);
	    }
	  }, {
	    key: '_onClickToggleComplete',
	    value: function _onClickToggleComplete() {
	      _actionsAppActions2['default'].updateComplete({
	        id: this.props.todo.id,
	        complete: !this.props.todo.complete
	      });
	    }
	  }, {
	    key: '_onCancelUpdate',
	    value: function _onCancelUpdate() {
	      this.setState({ editing: false });
	    }
	  }, {
	    key: '_onSave',
	    value: function _onSave(text) {
	      if (text.trim()) {
	        _actionsAppActions2['default'].create(text);
	      }
	    }
	  }, {
	    key: '_onUpdate',
	    value: function _onUpdate(todo) {
	      this.setState({ editing: false });
	      _actionsAppActions2['default'].updateText({
	        id: todo.id,
	        text: todo.text
	      });
	    }
	  }]);
	
	  return TodoItem;
	})(_react2['default'].Component);
	
	exports['default'] = TodoItem;
	
	TodoItem.prototype.displayName = 'TodoItem';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoItem.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var PropTypes = _react2['default'].PropTypes;
	
	var ENTER_KEY_CODE = 13;
	
	var TodoTextInputEdit = (function (_React$Component) {
	  function TodoTextInputEdit(props) {
	    _classCallCheck(this, TodoTextInputEdit);
	
	    _get(Object.getPrototypeOf(TodoTextInputEdit.prototype), 'constructor', this).call(this, props);
	    this.propsTypes = {
	      className: PropTypes.string,
	      onCancelUpdate: PropTypes.func.isRequired,
	      onUpdate: PropTypes.func.isRequired,
	      todo: PropTypes.object.isRequired
	    };
	    this.state = {
	      value: this.props.todo.text
	    };
	  }
	
	  _inherits(TodoTextInputEdit, _React$Component);
	
	  _createClass(TodoTextInputEdit, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: this.props.className },
	        _react2['default'].createElement('input', { onChange: this._onChange.bind(this),
	          onKeyDown: this._onKeyDown.bind(this),
	          value: this.state.value,
	          autoFocus: true }),
	        _react2['default'].createElement(
	          'button',
	          { onClick: this._onClickUpdate.bind(this) },
	          'UPDATE'
	        ),
	        _react2['default'].createElement(
	          'button',
	          { onClick: this._onClickCancel.bind(this) },
	          'CANCEL'
	        )
	      );
	    }
	  }, {
	    key: '_onClickCancel',
	    value: function _onClickCancel() {
	      this.props.onCancelUpdate();
	    }
	  }, {
	    key: '_onClickUpdate',
	    value: function _onClickUpdate() {
	      this.props.onUpdate(this.props.todo);
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange( /*object*/event) {
	      this.setState({
	        value: event.target.value
	      });
	      this.props.todo.text = event.target.value;
	    }
	  }, {
	    key: '_onKeyDown',
	    value: function _onKeyDown(event) {
	      if (event.keyCode === ENTER_KEY_CODE) {
	        this._onClickUpdate();
	      }
	    }
	  }]);
	
	  return TodoTextInputEdit;
	})(_react2['default'].Component);
	
	exports['default'] = TodoTextInputEdit;
	
	TodoTextInputEdit.prototype.displayName = 'TodoTextInputEdit';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoTextInputEdit.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_TodoItem.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./_TodoItem.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	exports.push([module.id, "div.todo {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n  div.todo div.inline {\n    display: inline-flex; }\n  div.todo label {\n    margin-right: 5px;\n    cursor: pointer; }\n  div.todo input[type='checkbox'] {\n    margin-right: 10px;\n    cursor: pointer; }\n\ndiv.todo-snapshot {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\nbutton.destroy {\n  top: 6px;\n  border-radius: 50%;\n  margin-left: 5px;\n  height: 15px;\n  padding: 3px;\n  margin-top: 0;\n  line-height: 10px;\n  border: 0;\n  cursor: pointer; }\n\n.button.destroy:active {\n  top: 1px;\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\nli.completed label {\n  text-decoration: line-through; }\n\n.hidden {\n  display: none; }\n", ""]);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var PropTypes = _react2['default'].PropTypes;
	
	var ENTER_KEY_CODE = 13;
	
	var TodoTextInput = (function (_React$Component) {
	  function TodoTextInput(props) {
	    _classCallCheck(this, TodoTextInput);
	
	    _get(Object.getPrototypeOf(TodoTextInput.prototype), 'constructor', this).call(this, props);
	    this.propsTypes = {
	      className: PropTypes.string,
	      id: PropTypes.string,
	      placeholder: PropTypes.string,
	      onSave: PropTypes.func.isRequired,
	      value: PropTypes.string
	    };
	    this.state = {
	      value: this.props.value || ''
	    };
	  }
	
	  _inherits(TodoTextInput, _React$Component);
	
	  _createClass(TodoTextInput, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement('input', { className: this.props.className,
	          id: this.props.id,
	          placeholder: this.props.placeholder,
	          onChange: this._onChange.bind(this),
	          onKeyDown: this._onKeyDown.bind(this),
	          value: this.state.value,
	          autoFocus: true }),
	        _react2['default'].createElement(
	          'button',
	          { onClick: this._onClickSave.bind(this), title: 'add task' },
	          'ADD'
	        )
	      );
	    }
	  }, {
	    key: '_onClickSave',
	    value: function _onClickSave() {
	      this.props.onSave(this.state.value);
	      this.setState({
	        value: ''
	      });
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange( /*object*/event) {
	      this.setState({
	        value: event.target.value
	      });
	    }
	  }, {
	    key: '_onKeyDown',
	    value: function _onKeyDown(event) {
	      if (event.keyCode === ENTER_KEY_CODE) {
	        this._onClickSave();
	      }
	    }
	  }]);
	
	  return TodoTextInput;
	})(_react2['default'].Component);
	
	exports['default'] = TodoTextInput;
	
	TodoTextInput.prototype.displayName = 'TodoTextInput';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoTextInput.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(71);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	// FLUX
	
	var _actionsSnapshotActions = __webpack_require__(78);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	// COMPONENT
	
	var _TodoSnapshotsItem = __webpack_require__(79);
	
	var _TodoSnapshotsItem2 = _interopRequireDefault(_TodoSnapshotsItem);
	
	var PropTypes = _react2['default'].PropTypes;
	
	var TodoSnapshots = (function (_React$Component) {
	  function TodoSnapshots(props) {
	    _classCallCheck(this, TodoSnapshots);
	
	    _get(Object.getPrototypeOf(TodoSnapshots.prototype), 'constructor', this).call(this, props);
	    this.propsTypes = {
	      todoLength: PropTypes.number.isRequired
	    };
	  }
	
	  _inherits(TodoSnapshots, _React$Component);
	
	  _createClass(TodoSnapshots, [{
	    key: 'render',
	    value: function render() {
	      var allSnaps = this.props.snapshots,
	          hasTodos = this.props.todoLength,
	          snapshots = [];
	
	      for (var key in allSnaps) {
	        snapshots.push(_react2['default'].createElement(_TodoSnapshotsItem2['default'], { key: key, snapshot: allSnaps[key] }));
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'todo-snapshot' },
	        _react2['default'].createElement(
	          'p',
	          null,
	          'Then take a snapshot or load it'
	        ),
	        _react2['default'].createElement(
	          'button',
	          { className: (0, _classnames2['default'])({ 'hidden': !hasTodos }), onClick: this._onClick.bind(this) },
	          'TAKE SNAPSHOT'
	        ),
	        _react2['default'].createElement(
	          'ul',
	          { id: 'todo-snapshot-list' },
	          snapshots
	        )
	      );
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      _actionsSnapshotActions2['default'].takeSnapshot();
	    }
	  }]);
	
	  return TodoSnapshots;
	})(_react2['default'].Component);
	
	exports['default'] = TodoSnapshots;
	
	TodoSnapshots.prototype.displayName = 'TodoSnapshots';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSnapshots.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// DEPENDENCY
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var SnapshotActions = function SnapshotActions() {
	  _classCallCheck(this, SnapshotActions);
	
	  this.generateActions('removeSnapshot', 'bootstrapSnapshot', 'takeSnapshot');
	};
	
	module.exports = _alt2['default'].createActions(SnapshotActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	// FLUX
	
	var _actionsSnapshotActions = __webpack_require__(78);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(74);
	}
	
	var TodoSnapshotsItem = (function (_React$Component) {
	  function TodoSnapshotsItem(props) {
	    _classCallCheck(this, TodoSnapshotsItem);
	
	    _get(Object.getPrototypeOf(TodoSnapshotsItem.prototype), 'constructor', this).call(this, props);
	    this.propsTypes = {
	      snapshot: PropTypes.object.isRequired
	    };
	  }
	
	  _inherits(TodoSnapshotsItem, _React$Component);
	
	  _createClass(TodoSnapshotsItem, [{
	    key: 'render',
	    value: function render() {
	      var todo = this.props.snapshot;
	
	      return _react2['default'].createElement(
	        'li',
	        { key: todo.id },
	        _react2['default'].createElement(
	          'div',
	          { className: 'inline' },
	          _react2['default'].createElement(
	            'label',
	            null,
	            _react2['default'].createElement(
	              'a',
	              { href: '#', onClick: this._bootstrapSnapshot.bind(this) },
	              todo.id
	            )
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: 'destroy', onClick: this._onClickRemove.bind(this) },
	            '✖'
	          )
	        )
	      );
	    }
	  }, {
	    key: '_bootstrapSnapshot',
	    value: function _bootstrapSnapshot() {
	      _actionsSnapshotActions2['default'].bootstrapSnapshot(this.props.snapshot.id);
	    }
	  }, {
	    key: '_onClickRemove',
	    value: function _onClickRemove() {
	      _actionsSnapshotActions2['default'].removeSnapshot(this.props.snapshot.id);
	    }
	  }]);
	
	  return TodoSnapshotsItem;
	})(_react2['default'].Component);
	
	exports['default'] = TodoSnapshotsItem;
	
	TodoSnapshotsItem.prototype.displayName = 'TodoSnapshotsItem';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSnapshotsItem.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _immutable = __webpack_require__(43);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	// FLUX
	
	var _actionsSnapshotActions = __webpack_require__(78);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _altUtilsImmutableUtil = __webpack_require__(42);
	
	var _altUtilsImmutableUtil2 = _interopRequireDefault(_altUtilsImmutableUtil);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(45);
	
	var _altUtilsMakeHot2 = _interopRequireDefault(_altUtilsMakeHot);
	
	var snapshotStore = (0, _altUtilsMakeHot2['default'])(_alt2['default'], (0, _altUtilsImmutableUtil2['default'])((function () {
	  function SnapshotStore() {
	    _classCallCheck(this, SnapshotStore);
	
	    this.bindActions(_actionsSnapshotActions2['default']);
	    this.state = new _immutable.Map({
	      snapshots: new _immutable.List([])
	    });
	  }
	
	  _createClass(SnapshotStore, [{
	    key: 'onBootstrapSnapshot',
	    value: function onBootstrapSnapshot(id) {
	      var idx = this.state.get('snapshots').findIndex(function (snapshot) {
	        return snapshot.id === id;
	      });
	
	      if (idx >= 0) {
	        // TODO
	        // alt.prepare(AppStor)
	        var snapshot = this.state.get('snapshots').get(idx);
	        _alt2['default'].bootstrap(_immutable2['default'].fromJS(snapshot.data));
	        // alt.rollback();
	      }
	    }
	  }, {
	    key: 'onTakeSnapshot',
	    value: function onTakeSnapshot() {
	      var snapshot = {
	        id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
	        data: _alt2['default'].takeSnapshot('AppStore')
	      };
	      var newList = this.state.get('snapshots').push(snapshot);
	      this.setState(this.state.set('snapshots', newList));
	    }
	  }, {
	    key: 'onRemoveSnapshot',
	    value: function onRemoveSnapshot(id) {
	      // find snapshot index in list
	      var idx = this.state.get('snapshots').findIndex(function (snapshot) {
	        return snapshot.id === id;
	      });
	
	      if (idx >= 0) {
	        var newList = this.state.get('snapshots')['delete'](idx);
	        this.setState(this.state.set('snapshots', newList));
	      }
	    }
	  }]);
	
	  return SnapshotStore;
	})()), 'SnapshotStore');
	
	module.exports = snapshotStore;
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	/*eslint-disable new-cap*/
	var router = _express2['default'].Router();
	/*eslint-enable new-cap*/
	
	var api = __webpack_require__(82);
	
	router.use('/api/*', function (req, res, next) {
	  api.todo(req, res, next);
	});
	
	exports['default'] = router;
	
	//
	// check if HMR is enabled
	// --------------------
	if (false) {
	  module.hot.accept(['../api/api'], function () {
	    api = require('../api/api');
	  });
	}
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var api = {
	  todo: function todo(req, res, next) {
	    try {
	      res.setHeader('Content-Type', 'application/json');
	
	      // simple api fetch example, no own DB here so external call is made.
	
	      // https://api.github.com/users/github
	      /* fetch('https://api.github.com/users/github')
	       .then((response) => {
	         return response.json();
	       }).then((json) => {
	         res.status(200).send(json);
	       });
	       */
	      res.status(200).send({ test: 'test' });
	    } catch (err) {
	      next(err);
	    }
	  },
	  othertodo: function othertodo() {}
	};
	
	exports['default'] = api;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTk4YzgxYTViNjI2YmI3MDA1NzgiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZlLWZhdmljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9yb3V0ZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcgXlxcLlxcLy4qXFwuc3ZnJCIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2JhYmVsLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2Nzcy0zLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2V4cHJlc3Muc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvZmx1eC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9oZXJva3Uuc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvaHRtbC01LnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2phdmFzY3JpcHQuc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvbG9kYXNoLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL21vY2hhLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL25vZGVqcy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9yZWFjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy93ZWJwYWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzPzBkMzMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzcz80NTc3Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9SZWNvcmRlci9SZWNvcmRlci5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hY3Rpb25zL1JlY29yZGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hbHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWx0XCIiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvc3RvcmVzL1JlY29yZGVyU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHQvdXRpbHMvSW1tdXRhYmxlVXRpbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW11dGFibGVcIiIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9EaXNwYXRjaGVyUmVjb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHQvdXRpbHMvbWFrZUhvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9jb25uZWN0VG9TdG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHQvdXRpbHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL21ha2VGaW5hbFN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1JlY29yZGVyL19SZWNvcmRlci5zY3NzPzMzMWIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUmVjb3JkZXIvX1JlY29yZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29uZmlnLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzcz8yYTNkIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Fzcz9lZmFjIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3N0b3Jlcy9BcHBTdG9yZURlcGVuZGluZy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydE9uZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzcz80MDBmIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9JdGVtLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dEVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3M/OWZiYyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9fVG9kb0l0ZW0uc2NzcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9UZXh0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NuYXBzaG90c0l0ZW0uanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvc3RvcmVzL1NuYXBzaG90U3RvcmUuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvcm91dGVzL2FwaS5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9hcGkvYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQ3JDaUIsQ0FBTTs7OztpQ0FDTixDQUFNOzs7Ozs7b0NBR0gsQ0FBUzs7Ozt5Q0FDVCxDQUFlOzs7OztBQUduQyxLQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsTUFBTTtLQUM3QyxVQUFVLEdBQUcsT0FBTyxLQUFLLEtBQUssR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDOztBQUVuRCxLQUFJLEdBQUcsR0FBRywyQkFBUyxDQUFDOztBQUVwQixJQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztBQUMxQyxJQUFHLENBQUMsR0FBRyxDQUFDLDhCQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNwQyxJQUFHLENBQUMsR0FBRyxDQUFDLCtCQUFRLGtCQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7QUFPcEUsS0FBSSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyxDQUFtQixDQUFDLENBQUM7O0FBRTVDLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsRUFBYyxDQUFDLENBQUM7Ozs7O0FB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QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDcENBLHVDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDakpBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EscUM7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQSxxRkFBb0Y7QUFDcEY7QUFDQSxNQUFLOztBQUVMO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EscUM7Ozs7OztBQ2pIQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0EsdUZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRTs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSxxQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDakRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNqQkE7QUFDQSx5Q0FBd0Msb0JBQW9CLGVBQWUsZUFBZSxrQkFBa0IscUJBQXFCLGdCQUFnQixFQUFFLDhDQUE4QywwQkFBMEIsRUFBRSx1QkFBdUIsd0JBQXdCLEVBQUUsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NBNVAsQ0FBTzs7Ozt3Q0FDTixFQUFjOzs7OztBQUdqQyxLQUFNLEtBQUssR0FBRyxtQkFBTyxDQUFDLEVBQTZCLENBQUMsQ0FBQyxNQUFNLENBQUM7O0tBRXZDLGNBQWM7QUFDdEIsWUFEUSxjQUFjLEdBQ25COzJCQURLLGNBQWM7O0FBRS9CLGdDQUZpQixjQUFjLDZDQUV2QjtJQUNUOzthQUhrQixjQUFjOztnQkFBZCxjQUFjOztZQUszQixrQkFBRzs7QUFFUCxjQUNFOzs7U0FDRTtBQUNFLGdCQUFLLEVBQUUsS0FBSyxDQUFDLEtBQU07QUFDakIsZUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFLO0FBQ2pCLGVBQUksRUFBRSxLQUFLLENBQUMsSUFBSztXQUNuQjtRQUNFLENBQ047TUFDSDs7O1VBaEJrQixjQUFjO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXRDLGNBQWM7O0FBbUJuQyxlQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FDMUJ4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzFCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDakJBO0FBQ0EsaUNBQWdDLGlCQUFpQixpQkFBaUIscUNBQXFDLGdCQUFnQixFQUFFLGdCQUFnQixxQkFBcUIsd0JBQXdCLEVBQUUsc0JBQXNCLGdDQUFnQyxFQUFFLFlBQVksc0JBQXNCLG9CQUFvQixpQkFBaUIsdUJBQXVCLHdCQUF3QixjQUFjLG9CQUFvQixFQUFFLGtCQUFrQixrQkFBa0IsMEJBQTBCLGlDQUFpQyxFQUFFLFdBQVcsaUJBQWlCLGdCQUFnQixzQkFBc0IsRUFBRSw0QkFBNEIsdUJBQXVCLGFBQWEsRUFBRSxpQkFBaUIsa0JBQWtCLDBCQUEwQixpQ0FBaUMsRUFBRSxXQUFXLHNCQUFzQixFQUFFLFU7Ozs7OztBQ0RwdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ2pCQTtBQUNBLCtCQUE4QixtQkFBbUIsRUFBRSxVOzs7Ozs7QUNEbkQsdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDQ2tCLENBQU87Ozs7d0NBQ04sRUFBYzs7Ozs7QUFHakMsS0FBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxFQUE2QixDQUFDLENBQUMsTUFBTSxDQUFDOztLQUV2QyxPQUFPO0FBQ2YsWUFEUSxPQUFPLEdBQ1o7MkJBREssT0FBTzs7QUFFeEIsZ0NBRmlCLE9BQU8sNkNBRWhCO0lBQ1Q7O2FBSGtCLE9BQU87O2dCQUFQLE9BQU87O1lBS3BCLGtCQUFHO0FBQ1AsY0FDRTs7O1NBQ0U7Ozs7VUFBcUI7U0FDckIsNkRBQVEsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFNLEVBQUMsYUFBYSxFQUFDLG1CQUFtQixHQUFHO1NBQ2hFOzs7O1dBQXFCOztlQUFHLElBQUksRUFBQyxrQkFBa0I7O1lBQVM7VUFBSTtRQUN4RCxDQUNOO01BQ0g7OztVQWJrQixPQUFPO0lBQVMsbUJBQU0sU0FBUzs7c0JBQS9CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDTlYsQ0FBTzs7Ozs7OzJDQUdKLEVBQXVCOzs7O29EQUNkLEVBQWdDOzs7OytDQUMvQixFQUFzQjs7OztvREFDekIsRUFBMkI7Ozs7OztrREFHckIsRUFBeUI7Ozs7a0RBQ3pCLEVBQXlCOzs7O0FBRTNELEtBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDdkIsc0JBQU8sQ0FBQyxFQUFxQixDQUFDLENBQUM7RUFDaEM7O0FBRUQsS0FBSSxXQUFXO0FBQ0YsWUFEVyxXQUFXLEdBQ25COzJCQURRLFdBQVc7O0FBRS9CLGdDQUZvQixXQUFXLDZDQUV2QjtJQUNUOzthQUhxQixXQUFXOztnQkFBWCxXQUFXOztZQUszQixrQkFBRzs7QUFFUCxXQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs7QUFFbEQsY0FDRTs7O1NBQ0U7Ozs7VUFBa0I7U0FDbEIsdUVBQXNCO1NBQ3RCLHVFQUF1QixPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQVEsR0FBRztTQUN0RCx1RUFBdUIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFRLEdBQUU7U0FDckQsdUVBQXVCLE9BQU8sRUFBRSxVQUFVLENBQUMsZ0JBQWlCLEdBQUU7UUFDMUQsQ0FDTjtNQUNIOzs7WUFFZSxxQkFBRztBQUNqQixjQUFPLG1FQUE2QixDQUFDO01BQ3RDOzs7WUFFd0IsOEJBQUc7QUFDMUIsY0FBTztBQUNMLGdCQUFPLEVBQUUsNEJBQVMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUN4RCx5QkFBZ0IsRUFBRSxxQ0FBa0IsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUMzRSxDQUFDO01BQ0g7OztVQTdCcUIsV0FBVztJQUFTLG1CQUFNLFNBQVMsQ0E4QjFELENBQUM7O0FBRUYsWUFBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDOztzQkFFbkMsMENBQWdCLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDbERkLEVBQVc7Ozs7Ozs4Q0FHakIsRUFBdUI7Ozs7OztnQ0FHOUIsRUFBUTs7OztrREFDRixFQUF5Qjs7Ozs7OzRDQUUzQixFQUFtQjs7OztBQUV2QyxLQUFJLFFBQVEsR0FBRyxvREFBYTtBQUNmLFlBRCtCLFFBQVEsR0FDcEM7MkJBRDRCLFFBQVE7O0FBRWhELFNBQUksQ0FBQyxXQUFXLGdDQUFZLENBQUM7QUFDN0IsU0FBSSxDQUFDLEtBQUssR0FBRyxlQWRFLEdBQUcsQ0FjRztBQUNuQixvQkFBYSxFQUFFLGVBZkYsR0FBRyxDQWVPLEVBQUUsQ0FBQztBQUMxQixXQUFJLEVBQUUsZUFoQk8sR0FBRyxDQWdCRixFQUFFLENBQUM7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7O2dCQVB5QyxRQUFROztZQVMxQyxrQkFBQyxJQUFJLEVBQUU7QUFDYixXQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25CLFdBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUNmLGdCQUFPLEtBQUssQ0FBQztRQUNkOztBQUVELFdBQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzRSxXQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGVBM0JoQyxHQUFHLENBMkJxQztBQUNyRCxXQUFFLEVBQUUsRUFBRTtBQUNOLGlCQUFRLEVBQUUsS0FBSztBQUNmLGFBQUksRUFBRSxLQUFLO0FBQ1gsYUFBSSxFQUFFLElBQUk7UUFDWCxDQUFDLENBQUMsQ0FBQzs7QUFFSixXQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2hEOzs7WUFFTyxrQkFBQyxFQUFFLEVBQUU7QUFDWCxXQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELFdBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDaEQ7OztZQUVVLHVCQUFHO0FBQ1osV0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsZUEzQ3RCLEdBQUcsQ0EyQzJCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwRDs7O1lBRWUsMEJBQUMsQ0FBQyxFQUFFO1dBQ1osRUFBRSxHQUFlLENBQUMsQ0FBbEIsRUFBRTtXQUFFLFFBQVEsR0FBSyxDQUFDLENBQWQsUUFBUTs7QUFDbEIsV0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQVIsUUFBUSxFQUFFLENBQUMsQ0FBQztNQUMvQjs7O1lBRWtCLDZCQUFDLENBQUMsRUFBRTtXQUNmLFNBQVMsR0FBSyxDQUFDLENBQWYsU0FBUzs7O0FBRWYsV0FBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7OztBQUNsRCw4QkFBaUIsYUFBYSw4SEFBQztlQUF2QixLQUFLOztBQUNYLGVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7VUFDM0M7Ozs7Ozs7Ozs7Ozs7OztNQUNGOzs7WUFFVyxzQkFBQyxDQUFDLEVBQUU7V0FDUixFQUFFLEdBQVcsQ0FBQyxDQUFkLEVBQUU7V0FBRSxJQUFJLEdBQUssQ0FBQyxDQUFWLElBQUk7O0FBQ2QsV0FBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQy9CLFdBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUNmLGdCQUFPLEtBQUssQ0FBQztRQUNkO0FBQ0QsV0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLENBQUMsQ0FBQztNQUMzQjs7O1lBRUssZ0JBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRTs7QUFFbEIsV0FBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFDLElBQUksRUFBSztBQUMxRCxhQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDLG1CQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQzFCLGVBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUNwQyxDQUFDLENBQUM7QUFDSCxnQkFBTyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUM7QUFDSCxXQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2hEOzs7WUFFUSxtQkFBQyxPQUFPLEVBQUU7QUFDakIsWUFBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3hCLGFBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFCO01BQ0Y7OztZQUVNLG1CQUFHOzs7QUFDUixXQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx1QkFBVSxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsWUFBSyxDQUFDLHFDQUFxQyxDQUFDLENBQ3pDLElBQUksQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUNsQixnQkFBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksRUFBSztBQUNoQixlQUFLLFFBQVEsQ0FBQyxNQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLHVCQUFVLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUNGLENBQUM7TUFDSDs7O1lBRWlCLDhCQUFHO0FBQ25CLFlBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUN4QixhQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO0FBQzFCLGVBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDcEI7UUFDRjtNQUNGOzs7WUFFb0IsMEJBQUc7dUJBQ1AsSUFBSSxDQUFDLFFBQVEsRUFBRTs7V0FBeEIsSUFBSSxhQUFKLElBQUk7O0FBQ1YsWUFBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDbkIsYUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDdEIsa0JBQU8sS0FBSyxDQUFDO1VBQ2Q7UUFDRjtBQUNELGNBQU8sSUFBSSxDQUFDO01BQ2I7OztVQXZHeUMsUUFBUTtNQXdHbEQsRUFBRSxVQUFVLENBQUMsQ0FBQzs7QUFFaEIsT0FBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQ3JIVCxFQUFROzs7O0tBRWxCLFVBQVUsR0FDSCxTQURQLFVBQVUsR0FDQTt5QkFEVixVQUFVOztBQUVaLE9BQUksQ0FBQyxlQUFlLENBQ2xCLFFBQVEsRUFDUixPQUFPLEVBQ1AsUUFBUSxFQUNSLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLFlBQVksQ0FDYixDQUFDO0VBQ0g7O0FBR0gsT0FBTSxDQUFDLE9BQU8sR0FBRyxpQkFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDaEJqQixFQUFXOzs7Ozs7OENBR2pCLEVBQXVCOzs7Ozs7Z0NBRzlCLEVBQVE7Ozs7a0RBQ0YsRUFBeUI7Ozs7cUNBQzFCLEVBQVk7Ozs7Ozs0Q0FFYixFQUFtQjs7OztBQUV2QyxLQUFJLGNBQWMsR0FBRyxvREFBYTtBQUNyQixZQURxQyxjQUFjLEdBQ2hEOzJCQURrQyxjQUFjOztBQUU1RCxTQUFJLENBQUMsV0FBVyxnQ0FBWSxDQUFDO0FBQzdCLFNBQUksQ0FBQyxLQUFLLEdBQUcsZUFmRSxHQUFHLENBZUc7QUFDbkIsb0JBQWEsRUFBRSxlQWhCRixHQUFHLENBZ0JPLEVBQUUsQ0FBQztNQUMzQixDQUFDLENBQUM7SUFDSjs7Z0JBTitDLGNBQWM7O1lBUXZELG1CQUFHO0FBQ1IsV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLHNCQUFTLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDdkMsV0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsdUJBQVUsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLDBCQUEwQixFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDdEc7OztVQVgrQyxjQUFjO01BWTlELEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFdEIsT0FBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0MxQmIsQ0FBTzs7Ozs7OzhDQUdGLEVBQTBCOzs7O0tBRTVCLGtCQUFrQjtBQUMxQixZQURRLGtCQUFrQixHQUN2QjsyQkFESyxrQkFBa0I7O0FBRW5DLGdDQUZpQixrQkFBa0IsNkNBRTNCO0lBQ1Q7O2FBSGtCLGtCQUFrQjs7Z0JBQWxCLGtCQUFrQjs7WUFLL0Isa0JBQUc7QUFDUCxjQUNFOztXQUFLLFNBQVMsRUFBQyxzQkFBc0I7U0FDbkM7O2FBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7VUFBdUI7UUFDN0QsQ0FDTjtNQUNIOzs7WUFFTyxvQkFBRztBQUNULHNDQUFXLEtBQUssRUFBRSxDQUFDO01BQ3BCOzs7VUFma0Isa0JBQWtCO0lBQVMsbUJBQU0sU0FBUzs7c0JBQTFDLGtCQUFrQjs7QUFrQnZDLG1CQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDdkI5QyxDQUFPOzs7O21DQUNOLEVBQVE7Ozs7Ozs4Q0FHSixFQUEwQjs7OztLQUUzQyxTQUFTLHNCQUFULFNBQVM7O0tBRU0scUJBQXFCO0FBQzdCLFlBRFEscUJBQXFCLEdBQzFCOzJCQURLLHFCQUFxQjs7QUFFdEMsZ0NBRmlCLHFCQUFxQiw2Q0FFOUI7QUFDUixTQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2hCLGNBQU8sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7TUFDckMsQ0FBQztJQUNIOzthQU5rQixxQkFBcUI7O2dCQUFyQixxQkFBcUI7O1lBUWxDLGtCQUFHO0FBQ1AsV0FBSSxhQUFhLEdBQUcsb0JBQW9CLENBQUM7QUFDekMsV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDM0Isc0JBQWEsR0FBRyx5QkFBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2hIOztBQUVELGNBQ0UsMENBQUssU0FBUyxFQUFDLDJCQUEyQixFQUFDLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFPLENBQ25HO01BQ0g7OztZQUVPLG9CQUFHO0FBQ1Qsc0NBQVcsS0FBSyxFQUFFLENBQUM7TUFDcEI7OztVQXJCa0IscUJBQXFCO0lBQVMsbUJBQU0sU0FBUzs7c0JBQTdDLHFCQUFxQjs7QUF3QjFDLHNCQUFxQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUM7Ozs7Ozs7OztBQ2pDdEUsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDQ2tCLENBQU87Ozs7bUNBQ04sRUFBUTs7Ozs7OzhDQUdKLEVBQTBCOzs7O0tBRTNDLFNBQVMsc0JBQVQsU0FBUzs7S0FFTSxxQkFBcUI7QUFDN0IsWUFEUSxxQkFBcUIsR0FDMUI7MkJBREsscUJBQXFCOztBQUV0QyxnQ0FGaUIscUJBQXFCLDZDQUU5QjtBQUNSLFNBQUksQ0FBQyxVQUFVLEdBQUc7QUFDaEIsY0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtNQUNyQyxDQUFDO0lBQ0g7O2FBTmtCLHFCQUFxQjs7Z0JBQXJCLHFCQUFxQjs7WUFRbEMsa0JBQUc7QUFDUCxXQUFJLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztBQUN6QyxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUMzQixzQkFBYSxHQUFHLHlCQUFPLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDaEg7O0FBRUQsY0FDRSwwQ0FBSyxTQUFTLEVBQUMsMkJBQTJCLEVBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQU8sQ0FDbkc7TUFDSDs7O1lBRU8sb0JBQUc7QUFDVCxzQ0FBVyxLQUFLLEVBQUUsQ0FBQztNQUNwQjs7O1VBckJrQixxQkFBcUI7SUFBUyxtQkFBTSxTQUFTOztzQkFBN0MscUJBQXFCOztBQXdCMUMsc0JBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FDakN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDakJBO0FBQ0EscURBQW9ELGtCQUFrQixtQkFBbUIsOEJBQThCLDJCQUEyQixFQUFFLG1DQUFtQyxtQkFBbUIsa0JBQWtCLDhCQUE4QiwyQkFBMkIsRUFBRSxtQ0FBbUMsa0JBQWtCLDhCQUE4QiwyQkFBMkIsRUFBRSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0FyWCxDQUFPOzs7O0tBRUosZUFBZTtBQUN2QixZQURRLGVBQWUsR0FDcEI7MkJBREssZUFBZTs7QUFFaEMsZ0NBRmlCLGVBQWUsNkNBRXhCO0lBQ1Q7O2FBSGtCLGVBQWU7O2dCQUFmLGVBQWU7O1lBSzVCLGtCQUFHO0FBQ1AsY0FDRTs7O1NBQ0U7Ozs7VUFBdUI7U0FDdkI7Ozs7VUFBaUI7UUFDYixDQUNOO01BQ0g7OztVQVprQixlQUFlO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXZDLGVBQWU7O0FBZXBDLGdCQUFlLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NqQnhDLENBQU87Ozs7dUNBQ1YsRUFBWTs7Ozs7O3FDQUdOLEVBQVk7Ozs7MENBQ1AsRUFBaUI7Ozs7MENBQ2pCLEVBQWlCOzs7Ozs7OENBR3BCLEVBQTBCOzs7OzJDQUM1QixFQUF1Qjs7OztnREFDbEIsRUFBNEI7Ozs7b0RBQzFCLEVBQTJCOzs7O0FBRXZELEtBQUksV0FBVztBQUNGLFlBRFcsV0FBVyxHQUNuQjsyQkFEUSxXQUFXOztBQUUvQixnQ0FGb0IsV0FBVyw2Q0FFdkI7QUFDUixTQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsZ0JBQVMsRUFBRSxLQUFLO01BQ2pCLENBQUM7SUFDSDs7YUFOcUIsV0FBVzs7Z0JBQVgsV0FBVzs7WUFRM0Isa0JBQUc7O0FBRVAsV0FBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7O0FBRWxELFdBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPO1dBQzdCLEtBQUssR0FBRyxFQUFFLENBQUM7O0FBRWYsWUFBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7QUFDeEIsY0FBSyxDQUFDLElBQUksQ0FBQywwREFBVSxHQUFHLEVBQUUsR0FBSSxFQUFDLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pEOztBQUVELGNBQ0U7OztTQUNFOzs7O1VBQWtCO1NBQ2xCOzthQUFLLFNBQVMsRUFBQyxNQUFNO1dBQ25COzs7O1lBQWlEO1dBQ2pELCtEQUFlLFNBQVMsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFDLEtBQUssRUFBQyxFQUFFLEdBQUc7V0FDaEk7O2VBQUksRUFBRSxFQUFDLFdBQVc7YUFBRSxLQUFLO1lBQU07V0FDL0I7O2VBQVEsU0FBUyxFQUFFLDZCQUFHLEVBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFOztZQUEyQjtXQUN4SDs7ZUFBUSxTQUFTLEVBQUUsNkJBQUcsRUFBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7O1lBQWdCO1VBQ3pHO1NBQ04sK0RBQWUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFVLEVBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxNQUFPLEdBQUU7UUFDdkUsQ0FDTjtNQUNIOzs7WUFFZ0IsNkJBQUc7QUFDbEIsc0NBQVcsU0FBUyxFQUFFLENBQUM7TUFDeEI7OztZQUVnQiw2QkFBRztBQUNsQixXQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQ3hDLFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixrQkFBUyxFQUFFLFNBQVM7UUFDckIsQ0FBQyxDQUFDO0FBQ0gsc0NBQVcsaUJBQWlCLENBQUMsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztNQUN0RDs7O1lBRU0saUJBQUMsSUFBSSxFQUFFO0FBQ1osV0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUM7QUFDZCx3Q0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekI7TUFDRjs7O1lBRWUscUJBQUc7QUFDakIsY0FBTywrREFBeUIsQ0FBQztNQUNsQzs7O1lBRXdCLDhCQUFHO0FBQzFCLGNBQU87QUFDTCxnQkFBTyxFQUFFLDRCQUFTLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDL0MsdUJBQWMsRUFBRSw0QkFBUyxjQUFjLEVBQUU7QUFDekMsa0JBQVMsRUFBRSxpQ0FBYyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFO1FBQy9ELENBQUM7TUFDSDs7O1VBOURxQixXQUFXO0lBQVMsbUJBQU0sU0FBUyxDQStEMUQsQ0FBQzs7QUFFRixZQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7O3NCQUVuQywwQ0FBZ0IsV0FBVyxDQUFDOzs7Ozs7Ozs7QUNsRjNDLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0NrQixDQUFPOzs7O3VDQUNWLEVBQVk7Ozs7Ozs4Q0FHSixFQUEwQjs7Ozs7OzhDQUduQixFQUFxQjs7OztLQUU3QyxTQUFTLHNCQUFULFNBQVM7O0FBRWYsS0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtBQUN2QixzQkFBTyxDQUFDLEVBQWtCLENBQUMsQ0FBQztFQUM3Qjs7S0FFb0IsUUFBUTtBQUNoQixZQURRLFFBQVEsQ0FDZixLQUFLLEVBQUU7MkJBREEsUUFBUTs7QUFFekIsZ0NBRmlCLFFBQVEsNkNBRW5CLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxVQUFVLEdBQUc7QUFDaEIsV0FBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtNQUNsQyxDQUFDO0lBQ0g7O2FBTmtCLFFBQVE7O2dCQUFSLFFBQVE7O1lBUVQsOEJBQUc7QUFDbkIsV0FBSSxDQUFDLEtBQUssR0FBRztBQUNYLGlCQUFRLEVBQUUsS0FBSztBQUNmLGdCQUFPLEVBQUUsS0FBSztBQUNkLGFBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQzNCLENBQUM7TUFDSDs7O1lBRUssa0JBQUc7QUFDUCxXQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs7QUFFM0IsY0FDRTs7V0FBSSxTQUFTLEVBQUUsNkJBQUc7QUFDZCx3QkFBVyxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQzFCLHNCQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQzlCLENBQUU7QUFDSCxjQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUc7U0FDYjs7YUFBSyxTQUFTLEVBQUUsNkJBQUcsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBRTtXQUNqRCw0Q0FBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFDLEtBQUssRUFBQyxpQ0FBaUMsR0FBRTtXQUMzTDs7ZUFBTyxTQUFTLEVBQUUsNkJBQUcsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxLQUFLLEVBQUMsb0JBQW9CO2FBQUUsSUFBSSxDQUFDLElBQUk7WUFBUztXQUMzSSxtRUFBbUIsU0FBUyxFQUFFLDZCQUFHLEVBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUMsSUFBSSxFQUFFLElBQUssR0FBRztXQUN2Szs7ZUFBUSxTQUFTLEVBQUUsNkJBQUcsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFDLEtBQUssRUFBQyxhQUFhOztZQUFrQjtVQUNsSjtRQUNILENBQ0w7TUFDSDs7O1lBRVcsd0JBQUc7QUFDYixXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osZ0JBQU8sRUFBRSxJQUFJO1FBQ2QsQ0FBQyxDQUFDO01BQ0o7OztZQUVhLDBCQUFHO0FBQ2Ysc0NBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ3ZDOzs7WUFFcUIsa0NBQUc7QUFDdkIsc0NBQVcsY0FBYyxDQUFDO0FBQ3hCLFdBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3RCLGlCQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRO1FBQ3BDLENBQUMsQ0FBQztNQUNKOzs7WUFFYywyQkFBRztBQUNoQixXQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7TUFDakM7OztZQUVNLGlCQUFDLElBQUksRUFBRTtBQUNaLFdBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDO0FBQ2Qsd0NBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCO01BQ0Y7OztZQUVRLG1CQUFDLElBQUksRUFBRTtBQUNkLFdBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUNoQyxzQ0FBVyxVQUFVLENBQUM7QUFDcEIsV0FBRSxFQUFFLElBQUksQ0FBQyxFQUFFO0FBQ1gsYUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2hCLENBQUMsQ0FBQztNQUNKOzs7VUFwRWtCLFFBQVE7SUFBUyxtQkFBTSxTQUFTOztzQkFBaEMsUUFBUTs7QUF1RTdCLFNBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0N0RjFCLENBQU87Ozs7S0FFbkIsU0FBUyxzQkFBVCxTQUFTOztBQUVmLEtBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQzs7S0FFTCxpQkFBaUI7QUFDekIsWUFEUSxpQkFBaUIsQ0FDeEIsS0FBSyxFQUFFOzJCQURBLGlCQUFpQjs7QUFFbEMsZ0NBRmlCLGlCQUFpQiw2Q0FFNUIsS0FBSyxFQUFFO0FBQ2IsU0FBSSxDQUFDLFVBQVUsR0FBRztBQUNoQixnQkFBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNO0FBQzNCLHFCQUFjLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVO0FBQ3pDLGVBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7QUFDbkMsV0FBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtNQUNsQyxDQUFDO0FBQ0YsU0FBSSxDQUFDLEtBQUssR0FBRztBQUNYLFlBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJO01BQzVCLENBQUM7SUFDSDs7YUFaa0IsaUJBQWlCOztnQkFBakIsaUJBQWlCOztZQWM5QixrQkFBRztBQUNQLGNBQ0U7O1dBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtTQUNuQyw0Q0FBTyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3pDLG9CQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3RDLGdCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNO0FBQ3hCLG9CQUFTLEVBQUUsSUFBSyxHQUFHO1NBQ3JCOzthQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7O1VBQWdCO1NBQ2hFOzthQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7O1VBQWdCO1FBQzVELENBQ047TUFDSDs7O1lBRWEsMEJBQUc7QUFDZixXQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO01BQzdCOzs7WUFFYSwwQkFBRztBQUNmLFdBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDdEM7OztZQUVRLDhCQUFZLEtBQUssRUFBRTtBQUMxQixXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osY0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztRQUMxQixDQUFDLENBQUM7QUFDSCxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7TUFDM0M7OztZQUVTLG9CQUFDLEtBQUssRUFBRTtBQUNoQixXQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssY0FBYyxFQUFFO0FBQ3BDLGFBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QjtNQUNGOzs7VUE5Q2tCLGlCQUFpQjtJQUFTLG1CQUFNLFNBQVM7O3NCQUF6QyxpQkFBaUI7O0FBaUR0QyxrQkFBaUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7Ozs7QUN4RDlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNqQkE7QUFDQSxxQ0FBb0MsbUJBQW1CLGtCQUFrQiw4QkFBOEIsMkJBQTJCLEVBQUUseUJBQXlCLDJCQUEyQixFQUFFLG9CQUFvQix3QkFBd0Isc0JBQXNCLEVBQUUscUNBQXFDLHlCQUF5QixzQkFBc0IsRUFBRSx1QkFBdUIsbUJBQW1CLGtCQUFrQiw4QkFBOEIsMkJBQTJCLEVBQUUsb0JBQW9CLGFBQWEsdUJBQXVCLHFCQUFxQixpQkFBaUIsaUJBQWlCLGtCQUFrQixzQkFBc0IsY0FBYyxvQkFBb0IsRUFBRSw0QkFBNEIsYUFBYSxrQkFBa0IsNkJBQTZCLHFCQUFxQixFQUFFLHdCQUF3QixrQ0FBa0MsRUFBRSxhQUFhLGtCQUFrQixFQUFFLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDQWgwQixDQUFPOzs7O0tBRW5CLFNBQVMsc0JBQVQsU0FBUzs7QUFFZixLQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7O0tBRUwsYUFBYTtBQUNyQixZQURRLGFBQWEsQ0FDcEIsS0FBSyxFQUFFOzJCQURBLGFBQWE7O0FBRTlCLGdDQUZpQixhQUFhLDZDQUV4QixLQUFLLEVBQUU7QUFDYixTQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2hCLGdCQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU07QUFDM0IsU0FBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNO0FBQ3BCLGtCQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU07QUFDN0IsYUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVTtBQUNqQyxZQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU07TUFDeEIsQ0FBQztBQUNGLFNBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxZQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRTtNQUM5QixDQUFDO0lBQ0g7O2FBYmtCLGFBQWE7O2dCQUFiLGFBQWE7O1lBZTFCLGtCQUFHO0FBQ1AsY0FDRTs7O1NBQ0UsNENBQU8sU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBVTtBQUNyQyxhQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFHO0FBQ2xCLHNCQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFZO0FBQ3BDLG1CQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3BDLG9CQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO0FBQ3RDLGdCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNO0FBQ3hCLG9CQUFTLEVBQUUsSUFBSyxHQUFHO1NBQ3JCOzthQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxLQUFLLEVBQUMsVUFBVTs7VUFBYTtRQUN4RSxDQUNOO01BQ0g7OztZQUVXLHdCQUFHO0FBQ2IsV0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxXQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osY0FBSyxFQUFFLEVBQUU7UUFDVixDQUFDLENBQUM7TUFDSjs7O1lBRVEsOEJBQVksS0FBSyxFQUFFO0FBQzFCLFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixjQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzFCLENBQUMsQ0FBQztNQUNKOzs7WUFFUyxvQkFBQyxLQUFLLEVBQUU7QUFDaEIsV0FBSSxLQUFLLENBQUMsT0FBTyxLQUFLLGNBQWMsRUFBRTtBQUNwQyxhQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckI7TUFDRjs7O1VBL0NrQixhQUFhO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXJDLGFBQWE7O0FBa0RsQyxjQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDeERwQyxDQUFPOzs7O3VDQUNWLEVBQVk7Ozs7OzttREFHQyxFQUErQjs7Ozs7OzhDQUc3QixFQUFxQjs7OztLQUU3QyxTQUFTLHNCQUFULFNBQVM7O0tBRU0sYUFBYTtBQUNyQixZQURRLGFBQWEsQ0FDcEIsS0FBSyxFQUFFOzJCQURBLGFBQWE7O0FBRTlCLGdDQUZpQixhQUFhLDZDQUV4QixLQUFLLEVBQUU7QUFDYixTQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2hCLGlCQUFVLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO01BQ3hDLENBQUM7SUFDSDs7YUFOa0IsYUFBYTs7Z0JBQWIsYUFBYTs7WUFRMUIsa0JBQUc7QUFDUCxXQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7V0FDL0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtXQUNoQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztBQUVuQixZQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtBQUN4QixrQkFBUyxDQUFDLElBQUksQ0FBQyxtRUFBbUIsR0FBRyxFQUFFLEdBQUksRUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUMxRTs7QUFFRCxjQUNFOztXQUFLLFNBQVMsRUFBQyxlQUFlO1NBQzVCOzs7O1VBQXNDO1NBQ3RDOzthQUFRLFNBQVMsRUFBRSw2QkFBRyxFQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBQyxDQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7VUFBd0I7U0FDeEc7O2FBQUksRUFBRSxFQUFDLG9CQUFvQjtXQUFFLFNBQVM7VUFBTTtRQUN4QyxDQUNOO01BQ0g7OztZQUVPLG9CQUFHO0FBQ1QsMkNBQWdCLFlBQVksRUFBRSxDQUFDO01BQ2hDOzs7VUE1QmtCLGFBQWE7SUFBUyxtQkFBTSxTQUFTOztzQkFBckMsYUFBYTs7QUErQmxDLGNBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQzFDdEMsRUFBUTs7OztLQUVsQixlQUFlLEdBQ1IsU0FEUCxlQUFlLEdBQ0w7eUJBRFYsZUFBZTs7QUFFakIsT0FBSSxDQUFDLGVBQWUsQ0FDbEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixjQUFjLENBQ2YsQ0FBQztFQUNIOztBQUdILE9BQU0sQ0FBQyxPQUFPLEdBQUcsaUJBQUksYUFBYSxDQUFDLGVBQWUsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDWmpDLENBQU87Ozs7OzttREFHRyxFQUErQjs7OztLQUVyRCxTQUFTLHNCQUFULFNBQVM7O0FBRWYsS0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtBQUN2QixzQkFBTyxDQUFDLEVBQWtCLENBQUMsQ0FBQztFQUM3Qjs7S0FFb0IsaUJBQWlCO0FBQ3pCLFlBRFEsaUJBQWlCLENBQ3hCLEtBQUssRUFBRTsyQkFEQSxpQkFBaUI7O0FBRWxDLGdDQUZpQixpQkFBaUIsNkNBRTVCLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxVQUFVLEdBQUc7QUFDaEIsZUFBUSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtNQUN0QyxDQUFDO0lBQ0g7O2FBTmtCLGlCQUFpQjs7Z0JBQWpCLGlCQUFpQjs7WUFROUIsa0JBQUc7QUFDUCxXQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7QUFFL0IsY0FDRTs7V0FBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUc7U0FDZjs7YUFBSyxTQUFTLEVBQUMsUUFBUTtXQUNyQjs7O2FBQU87O2lCQUFHLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO2VBQUUsSUFBSSxDQUFDLEVBQUU7Y0FBSztZQUFRO1dBQ3JGOztlQUFRLFNBQVMsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7WUFBa0I7VUFDbEY7UUFDSCxDQUNMO01BQ0g7OztZQUVpQiw4QkFBRztBQUNuQiwyQ0FBZ0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDM0Q7OztZQUVhLDBCQUFHO0FBQ2YsMkNBQWdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUN4RDs7O1VBM0JrQixpQkFBaUI7SUFBUyxtQkFBTSxTQUFTOztzQkFBekMsaUJBQWlCOztBQThCdEMsa0JBQWlCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDekMzQixFQUFXOzs7Ozs7bURBR2xCLEVBQTRCOzs7Ozs7Z0NBR3hDLEVBQVE7Ozs7a0RBQ0YsRUFBeUI7Ozs7Ozs0Q0FFM0IsRUFBbUI7Ozs7QUFFdkMsS0FBSSxhQUFhLEdBQUcsb0RBQWE7QUFDcEIsWUFEb0MsYUFBYSxHQUM5QzsyQkFEaUMsYUFBYTs7QUFFMUQsU0FBSSxDQUFDLFdBQVcscUNBQWlCLENBQUM7QUFDbEMsU0FBSSxDQUFDLEtBQUssR0FBRyxlQWRFLEdBQUcsQ0FjRztBQUNuQixnQkFBUyxFQUFFLGVBZk8sSUFBSSxDQWVGLEVBQUUsQ0FBQztNQUN4QixDQUFDLENBQUM7SUFDSjs7Z0JBTjhDLGFBQWE7O1lBUXpDLDZCQUFDLEVBQUUsRUFBRTtBQUN0QixXQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDOUQsZ0JBQU8sUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDOztBQUVILFdBQUksR0FBRyxJQUFJLENBQUMsRUFBRTs7O0FBR1osYUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELDBCQUFJLFNBQVMsQ0FBQyx1QkFBVSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O1FBRWhEO01BQ0Y7OztZQUVhLDBCQUFHO0FBQ2YsV0FBTSxRQUFRLEdBQUc7QUFDZixXQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUNuRSxhQUFJLEVBQUUsaUJBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxDQUFDO0FBQ0YsV0FBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNELFdBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDckQ7OztZQUVlLDBCQUFDLEVBQUUsRUFBRTs7QUFFbkIsV0FBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQzlELGdCQUFPLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQzs7QUFFSCxXQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7QUFDWixhQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELGFBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDckQ7TUFDRjs7O1VBekM4QyxhQUFhO01BMEM1RCxFQUFFLGVBQWUsQ0FBQyxDQUFDOztBQUVyQixPQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQ3hEVixDQUFTOzs7OztBQUc3QixLQUFJLE1BQU0sR0FBRyxxQkFBUSxNQUFNLEVBQUUsQ0FBQzs7O0FBRzlCLEtBQUksR0FBRyxHQUFHLG1CQUFPLENBQUMsRUFBWSxDQUFDLENBQUM7O0FBRWhDLE9BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUs7QUFDdkMsTUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzFCLENBQUMsQ0FBQzs7c0JBRVksTUFBTTs7Ozs7QUFLckIsS0FBRyxLQUFVLEVBQUU7QUFDYixTQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLFlBQU07QUFDdEMsUUFBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7RUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRCxLQUFJLEdBQUcsR0FBRztBQUNSLE9BQUksRUFBRSxjQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3hCLFNBQUk7QUFDRixVQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFZbEQsVUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztNQUN0QyxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ1osV0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ1g7SUFDRjtBQUNELFlBQVMsRUFBRSxxQkFBTSxFQUVoQjtFQUNGLENBQUM7O3NCQUVhLEdBQUciLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTk4YzgxYTViNjI2YmI3MDA1NzhcbiAqKi8iLCIvLyBOT0RFXHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbi8vIEVYUFJFU1NcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBmYXZpY29uIGZyb20gJ3NlcnZlLWZhdmljb24nO1xyXG5cclxuLy8gUHJvZmlsZSBkZXYgb3IgcHJvZHVjdGlvblxyXG5sZXQgcHJvZmlsZSA9IHByb2Nlc3MuZW52LkRFViA/ICdkZXYnIDogJ3Byb2QnLFxyXG5cdHB1YmxpY1BhdGggPSBwcm9maWxlID09PSAnZGV2JyA/ICdidWlsZCcgOiAnZGlzdCc7XHJcblxyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocHVibGljUGF0aCkpO1xyXG5hcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2FwcC9pbWFnZXMvZmF2aWNvbi5pY28nKSkpO1xyXG5cclxuLy9cclxuLy8gUmVnaXN0ZXIgbWlkZGxld2FyZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIHJlbmRlcmVyXHJcbmxldCByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XHJcbi8vIGFwaXNcclxubGV0IGFwaVJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2FwaScpO1xyXG5cclxuLy9cclxuLy8gQ29uZmlndXJlIG1pZGRsZXdhcmVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnJlbmRlcmVyLmluaXQocHJvZmlsZSk7XHJcblxyXG4vL1xyXG4vLyBBY3RpdmF0ZSBtaWRkbGV3YXJlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hcHAudXNlKGFwaVJvdXRlcyk7XHJcbmFwcC51c2UocmVuZGVyZXIucmVuZGVyKTtcclxuXHJcbmh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAnICsgYXBwLmdldCgncG9ydCcpKTtcclxufSk7XHJcblxyXG4vL1xyXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgLy8gYWNjZXB0IHVwZGF0ZSBvZiBkZXBlbmRlbmN5XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuL3JvdXRlcy9hcGknLCAnLi9yb3V0ZXMvcmVuZGVyZXInXSwgKCkgPT4ge1xyXG4gICAgYXBpUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XHJcbiAgICBhcHAudXNlKGFwaVJvdXRlcyk7XHJcbiAgICByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XHJcbiAgICByZW5kZXJlci5pbml0KCdkZXYnKTtcclxuICB9KTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvc2VydmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmUtZmF2aWNvblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwic2VydmUtZmF2aWNvblwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicGF0aFwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaHR0cFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibGV0IHJlbmRlcmVyID0gcmVxdWlyZSgnLi4vdXRpbHMvcmVuZGVyZXInKTtcclxuXHJcbmxldCBwcm9maWxlID0gJ2Rldic7XHJcblxyXG52YXIgcm91dGVzUmVuZGVyZXIgPSB7XHJcbiAgaW5pdDogKHR5cGUpID0+IHtcclxuICAgIHByb2ZpbGUgPSB0eXBlO1xyXG4gICAgcmVuZGVyZXIuaW5pdCh0eXBlKTtcclxuICB9LFxyXG4gIHJlbmRlcjogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICByZW5kZXJlci5yZW5kZXIocmVxLCByZXMsIG5leHQpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vXHJcbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICBtb2R1bGUuaG90LmFjY2VwdChbJy4uL3V0aWxzL3JlbmRlcmVyJ10sICgpID0+IHtcclxuICAgIHJlbmRlcmVyID0gcmVxdWlyZSgnLi4vdXRpbHMvcmVuZGVyZXInKTtcclxuICAgIHJlbmRlcmVyLmluaXQocHJvZmlsZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1JlbmRlcmVyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvcm91dGVzL3JlbmRlcmVyLmpzXG4gKiovIiwiLy8gTk9ERVxyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5cclxuLy8gRVhURVJOQUxTXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IElzbyBmcm9tICdpc28nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG4vLyBDT1JFXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vLi4vYXBwL3JvdXRlcyc7XHJcbmltcG9ydCBhbHQgZnJvbSAnLi4vLi4vYXBwL2FsdCc7XHJcblxyXG5sZXQgaHRtbCA9ICcnO1xyXG5cclxudmFyIHJlbmRlcmVyID0ge1xyXG4gIGluaXQ6ICh0eXBlKSA9PiB7XHJcbiAgICBodG1sID0gdHlwZSA9PT0gJ2RldicgP1xyXG4gICAgICBmcy5yZWFkRmlsZVN5bmMoJy4vYXNzZXRzL2luZGV4LWRldi5odG1sJywge2VuY29kaW5nOiAndXRmOCd9KVxyXG4gICAgICA6XHJcbiAgICAgIGZzLnJlYWRGaWxlU3luYygnLi9kaXN0L2luZGV4LXByb2QuaHRtbCcsIHtlbmNvZGluZzogJ3V0ZjgnfSk7XHJcbiAgfSxcclxuICByZW5kZXI6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgbGV0IG1hcmt1cCA9ICcnLFxyXG4gICAgICBpc28gPSBuZXcgSXNvKCk7XHJcblxyXG4gICAgY29uc3Qgb25lSXRlbUJvb3RzdHJhcGVkID0ge1xyXG4gICAgICAnQXBwU3RvcmUnOiB7XHJcbiAgICAgICAgJ2RhdGFCeVJlc3RBcGknOiB7fSxcclxuICAgICAgICAnZGF0YSc6IHtcclxuICAgICAgICAgICdpYXFwb3I3cCc6IHtcclxuICAgICAgICAgICAgJ2lkJzogJ2lhcXBvcjdwJyxcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogZmFsc2UsXHJcbiAgICAgICAgICAgICd0ZXh0JzogJ2ZzZnNkZidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyogVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVucywgd2UgdGFrZSB0aGUgbG9jYWxzIGRhdGEgd2UgaGF2ZSBhbHJlYWR5XHJcbiAgICBmZXRjaGVkIGFuZCBzZWVkIG91ciBzdG9yZXMgd2l0aCBkYXRhLlxyXG4gICAgTmV4dCB3ZSB1c2UgcmVhY3Qtcm91dGVyIHRvIHJ1biB0aGUgVVJMIHRoYXQgaXMgcHJvdmlkZWQgaW4gcm91dGVzLmpzeFxyXG4gICAgRmluYWxseSB3ZSB1c2UgaXNvIGluIG9yZGVyIHRvIHJlbmRlciB0aGlzIGNvbnRlbnQgc28gaXQgcGlja3MgYmFjayB1cFxyXG4gICAgb24gdGhlIGNsaWVudCBzaWRlIGFuZCBib290c3RyYXBzIHRoZSBzdG9yZXMuXHJcbiAgICBpbml0IHNlcnZlciByZW5kZXJlclxyXG4gICAgKi9cclxuICAgIGFsdC5ib290c3RyYXAoSlNPTi5zdHJpbmdpZnkocmVzLmxvY2Fscy5kYXRhIHx8IG9uZUl0ZW1Cb290c3RyYXBlZCkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIFJvdXRlci5ydW4ocm91dGVzLCByZXEucGF0aCwgKEhhbmRsZXIsIHN0YXRlKSA9PiB7XHJcblx0XHRcdFx0Ly8gYWx0IGZsdXggZmx1c2hcclxuICAgICAgICBsZXQgY29udGVudCA9IFJlYWN0LnJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGFuZGxlcikpO1xyXG4gICAgICAgIGlzby5hZGQoY29udGVudCwgYWx0LmZsdXNoKCkpO1xyXG5cclxuICAgICAgICByZXMuY29udGVudFR5cGUgPSAndGV4dC9odG1sOyBjaGFyc2V0PXV0ZjgnO1xyXG4gICAgICAgIGxldCBub3RGb3VuZCA9IF8uZmluZChzdGF0ZS5yb3V0ZXMsIHtpc05vdEZvdW5kOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIGlmIChub3RGb3VuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdFx0XHQvLyBSRU5ERVJJTkcgYmFjayB0byBjbGllbnRcclxuICAgICAgICBsZXQgbWFya3VwQ29udGVudCA9IGlzby5yZW5kZXIoKTtcclxuICAgICAgICAvLyBET00gPGhlYWQ+IGluc3RydW1lbnRhdGlvblxyXG4gICAgICAgIGxldCBoZWFkID0gSGVsbWV0LnJld2luZCgpO1xyXG4gICAgICAgIG1hcmt1cCA9IGh0bWwucmVwbGFjZSgnTUVUQScsIGhlYWQubWV0YSkucmVwbGFjZSgnVElUTEUnLCBoZWFkLnRpdGxlKS5yZXBsYWNlKCdMSU5LJywgaGVhZC5saW5rKS5yZXBsYWNlKCdDT05URU5UJywgbWFya3VwQ29udGVudCk7XHJcbiAgICAgICAgLy8gU0VORCByZXNwb25zZVxyXG4gICAgICAgIHJlcy5zZW5kKG1hcmt1cCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci91dGlscy9yZW5kZXJlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3QtaGVsbWV0XCJcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpc29cIlxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZnNcIlxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcclxuLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8qZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCB7Um91dGUsIERlZmF1bHRSb3V0ZSwgTm90Rm91bmRSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0FwcC9BcHAnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24vQ29udGFjdCc7XHJcbmltcG9ydCBIb21lU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24nO1xyXG5pbXBvcnQgTm90Rm91bmRTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZFNlY3Rpb24vTm90Rm91bmRTZWN0aW9uJztcclxuaW1wb3J0IFRvZG9TZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgPFJvdXRlIG5hbWU9J2FwcCcgcGF0aD0nLycgaGFuZGxlcj17QXBwbGljYXRpb259PlxyXG4gICAgPFJvdXRlIG5hbWU9J2hvbWUnIHBhdGg9Jy9ob21lJyBoYW5kbGVyPXtIb21lU2VjdGlvbn0vPlxyXG4gICAgPFJvdXRlIG5hbWU9J3RvZG8nIHBhdGg9Jy90b2RvJyBoYW5kbGVyPXtUb2RvU2VjdGlvbn0vPlxyXG4gICAgPFJvdXRlIG5hbWU9J2NvbnRhY3QnIHBhdGg9XCIvY29udGFjdFwiIGhhbmRsZXI9e0NvbnRhY3R9Lz5cclxuICAgIDxEZWZhdWx0Um91dGUgaGFuZGxlcj17SG9tZVNlY3Rpb259IC8+XHJcbiAgICA8Tm90Rm91bmRSb3V0ZSBoYW5kbGVyPXtOb3RGb3VuZFNlY3Rpb259IC8+XHJcbiAgPC9Sb3V0ZT5cclxuKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3JvdXRlcy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVIYW5kbGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgUmVjb3JkZXIgZnJvbSAnLi4vUmVjb3JkZXIvUmVjb3JkZXInO1xyXG5pbXBvcnQgSHRtbEhlYWRlclRhZ3MgZnJvbSAnLi4vRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19BcHAuc2NzcycpO1xyXG4gIHJlcXVpcmUoJy4vX0FwcC5zYXNzJyk7XHJcbiAgcmVxdWlyZSgnZmlsZT9uYW1lPWZhdmljb24uaWNvIS4uLy4uL2ltYWdlcy9mYXZpY29uLmljbycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEh0bWxIZWFkZXJUYWdzIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWNvbnRlbnQnPlxyXG4gICAgICAgICAgPFJvdXRlSGFuZGxlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZWNvcmRlciAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdBcHAnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9BcHAvQXBwLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmNvbnN0IGJyYW5kaW5ncyA9IFsncmVhY3QnLCAnZmx1eCcsICd3ZWJwYWNrJywgJ25vZGVqcycsICdiYWJlbCcsICdtb2NoYScsICdqYXZhc2NyaXB0JywgJ2hlcm9rdScsICdodG1sLTUnLCAnY3NzLTMnLCAnZXhwcmVzcycsICdsb2Rhc2gnXTtcclxuXHJcbmxldCBicmFuZGluZ3NNYXJrdXAgPSBbXTtcclxuXHJcbmJyYW5kaW5ncy5mb3JFYWNoKChlbHQsIGlkeCkgPT4ge1xyXG4gIGJyYW5kaW5nc01hcmt1cC5wdXNoKDxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi9pbWFnZXMvYnJhbmRpbmcvJyArIGVsdCArICcuc3ZnJyl9IGtleT17aWR4fSB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIi8+KTtcclxufSk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX0hlYWRlci5zY3NzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPGRpdj57YnJhbmRpbmdzTWFya3VwfTwvZGl2PlxyXG5cdFx0XHRcdDxoZWFkZXI+XHJcblx0XHRcdFx0XHQ8dWw+XHJcbiAgICAgICAgICAgIDxsaT48TGluayB0bz0nYXBwJz5Ib21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayB0bz0ndG9kbyc+VG9kbzwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PExpbmsgdG89J2NvbnRhY3QnPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkhlYWRlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSGVhZGVyJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1xuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYWJlbC5zdmdcIjogMTgsXG5cdFwiLi9jc3MtMy5zdmdcIjogMTksXG5cdFwiLi9leHByZXNzLnN2Z1wiOiAyMCxcblx0XCIuL2ZsdXguc3ZnXCI6IDIxLFxuXHRcIi4vaGVyb2t1LnN2Z1wiOiAyMixcblx0XCIuL2h0bWwtNS5zdmdcIjogMjMsXG5cdFwiLi9qYXZhc2NyaXB0LnN2Z1wiOiAyNCxcblx0XCIuL2xvZGFzaC5zdmdcIjogMjUsXG5cdFwiLi9tb2NoYS5zdmdcIjogMjYsXG5cdFwiLi9ub2RlanMuc3ZnXCI6IDI3LFxuXHRcIi4vcmVhY3Quc3ZnXCI6IDI4LFxuXHRcIi4vd2VicGFjay5zdmdcIjogMjlcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZyBeXFwuXFwvLipcXC5zdmckXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNCT0dzclcuc3ZnXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9iYWJlbC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJek5qRndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUF6TmpFaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcGJsbE5hVzRnYldWbGRDSStDaUFnSUNBOFp6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVEkzTGpnME16ZzJPQ3d6TmpBdU1EZzNPVEV5SUV3eU15NDJOakUzTVRRekxETXpNUzR4TmpZeU5ESWdUREF1TkRRMU1UZzJPREV6TERjd0xqYzJOVGN4TkRNZ1RESTFOUzQxTlRRNE1UTXNOekF1TnpZMU56RTBNeUJNTWpNeUxqTXhNelkzTERNek1TNHhNalUwTlRFZ1RERXlOeTQ0TkRNNE5qZ3NNell3TGpBNE56a3hNaUJNTVRJM0xqZzBNemcyT0N3ek5qQXVNRGczT1RFeUlGb2lJR1pwYkd3OUlpTXlOalJFUlRRaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1qRXlMalF4Tmpjd015d3pNVFF1TlRRMk5qTTNJRXd5TXpJdU1qYzNPREF5TERreUxqQTFOek14T0RjZ1RERXlPQ3c1TWk0d05UY3pNVGczSUV3eE1qZ3NNek0zTGprMU1ESTBNaUJNTWpFeUxqUXhOamN3TXl3ek1UUXVOVFEyTmpNM0lFd3lNVEl1TkRFMk56QXpMRE14TkM0MU5EWTJNemNnV2lJZ1ptbHNiRDBpSXpJNU5qVkdNU0krUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazAxTXk0Mk5qZzFOekUwTERFNE9DNDJNell4TXpJZ1REVTJMalV6TURrNE9Td3lNakF1TlRjeU9ETTFJRXd4TWpnc01qSXdMalUzTWpnek5TQk1NVEk0TERFNE9DNDJNell4TXpJZ1REVXpMalkyT0RVM01UUXNNVGc0TGpZek5qRXpNaUJNTlRNdU5qWTROVGN4TkN3eE9EZ3VOak0yTVRNeUlGb2lJR1pwYkd3OUlpTkZRa1ZDUlVJaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk5EY3VPVEUzTURFeExERXlNeTQ1T1RRM01qVWdURFV3TGpneU1ESXhPVGdzTVRVMUxqa3pNakV6TWlCTU1USTRMREUxTlM0NU16SXhNeklnVERFeU9Dd3hNak11T1RrME56STFJRXcwTnk0NU1UY3dNVEVzTVRJekxqazVORGN5TlNCTU5EY3VPVEUzTURFeExERXlNeTQ1T1RRM01qVWdXaUlnWm1sc2JEMGlJMFZDUlVKRlFpSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHhNamdzTWpjeExqVTRNREV6TWlCTU1USTNMamcyTURBME5Dd3lOekV1TmpFM05EQTNJRXc1TWk0eU9URTFNVFkxTERJMk1pNHdNVE14T0RjZ1REa3dMakF4TnpjMU9ESXNNak0yTGpVME1UZzVJRXcxTnk0NU5UYzVOemdzTWpNMkxqVTBNVGc1SUV3Mk1pNDBNekl6TlRFMkxESTROaTQyT0RjMk5EZ2dUREV5Tnk0NE5UTXdNVEVzTXpBMExqZzBPRGczT1NCTU1USTRMRE13TkM0NE1EZ3dPRGdnVERFeU9Dd3lOekV1TlRnd01UTXlJRXd4TWpnc01qY3hMalU0TURFek1pQmFJaUJtYVd4c1BTSWpSVUpGUWtWQ0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUWXdMalE0TXpVeE5qVXNNQ0JNT1RrdU1UWTBPRE0xTWl3d0lFdzVPUzR4TmpRNE16VXlMREUyTGpFM05UZ3lORElnVERjMkxqWTFPVE0wTURjc01UWXVNVGMxT0RJME1pQk1Oell1TmpVNU16UXdOeXd6TWk0ek5URTJORGcwSUV3NU9TNHhOalE0TXpVeUxETXlMak0xTVRZME9EUWdURGs1TGpFMk5EZ3pOVElzTkRndU5USTNORGN5TlNCTU5qQXVORGd6TlRFMk5TdzBPQzQxTWpjME56STFJRXcyTUM0ME9ETTFNVFkxTERBZ1REWXdMalE0TXpVeE5qVXNNQ0JhSWlCbWFXeHNQU0lqTURBd01EQXdJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEV3Tmk0NU1ERXdPVGtzTUNCTU1UUTFMalU0TWpReE9Dd3dJRXd4TkRVdU5UZ3lOREU0TERFMExqQTJOVGt6TkRFZ1RERXlNeTR3TnpZNU1qTXNNVFF1TURZMU9UTTBNU0JNTVRJekxqQTNOamt5TXl3eE5pNDROemt4TWpBNUlFd3hORFV1TlRneU5ERTRMREUyTGpnM09URXlNRGtnVERFME5TNDFPREkwTVRnc05Ea3VNak13TnpZNU1pQk1NVEEyTGprd01UQTVPU3cwT1M0eU16QTNOamt5SUV3eE1EWXVPVEF4TURrNUxETTBMalEyTVRVek9EVWdUREV5T1M0ME1EWTFPVE1zTXpRdU5EWXhOVE00TlNCTU1USTVMalF3TmpVNU15d3pNUzQyTkRnek5URTJJRXd4TURZdU9UQXhNRGs1TERNeExqWTBPRE0xTVRZZ1RERXdOaTQ1TURFd09Ua3NNQ0JNTVRBMkxqa3dNVEE1T1N3d0lGb2lJR1pwYkd3OUlpTXdNREF3TURBaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1UVXpMak14T0RZNE1Td3dJRXd4T1RJc01DQk1NVGt5TERFMExqQTJOVGt6TkRFZ1RERTJPUzQwT1RRMU1EVXNNVFF1TURZMU9UTTBNU0JNTVRZNUxqUTVORFV3TlN3eE5pNDROemt4TWpBNUlFd3hPVElzTVRZdU9EYzVNVEl3T1NCTU1Ua3lMRFE1TGpJek1EYzJPVElnVERFMU15NHpNVGcyT0RFc05Ea3VNak13TnpZNU1pQk1NVFV6TGpNeE9EWTRNU3d6TkM0ME5qRTFNemcxSUV3eE56VXVPREkwTVRjMkxETTBMalEyTVRVek9EVWdUREUzTlM0NE1qUXhOellzTXpFdU5qUTRNelV4TmlCTU1UVXpMak14T0RZNE1Td3pNUzQyTkRnek5URTJJRXd4TlRNdU16RTROamd4TERBZ1RERTFNeTR6TVRnMk9ERXNNQ0JhSWlCbWFXeHNQU0lqTURBd01EQXdJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEl3TWk0eE1qWTNOamtzTVRnNExqWXpOakV6TWlCTU1qQTNMamc1TWpNNU5pd3hNak11T1RrME56STFJRXd4TWpjdU9EZzVOVGd5TERFeU15NDVPVFEzTWpVZ1RERXlOeTQ0T0RrMU9ESXNNVFUxTGprek1qRXpNaUJNTVRjeUxqZzVNakV6TWl3eE5UVXVPVE15TVRNeUlFd3hOamt1T1RnMk1URXNNVGc0TGpZek5qRXpNaUJNTVRJM0xqZzRPVFU0TWl3eE9EZ3VOak0yTVRNeUlFd3hNamN1T0RnNU5UZ3lMREl5TUM0MU56STRNelVnVERFMk55NHlNVFkxTWpjc01qSXdMalUzTWpnek5TQk1NVFl6TGpVd09UUTFNU3d5TmpFdU9Ua3lOemt4SUV3eE1qY3VPRGc1TlRneUxESTNNUzQyTURZNE5UY2dUREV5Tnk0NE9EazFPRElzTXpBMExqZ3pNelF3TnlCTU1Ua3pMak0yTWpJNE5pd3lPRFl1TmpnM05qUTRJRXd4T1RNdU9EUXlOak0zTERJNE1TNHlPVEU1TlRZZ1RESXdNUzR6TkRjMU1UWXNNVGszTGpJeE1qRXpNaUJNTWpBeUxqRXlOamMyT1N3eE9EZ3VOak0yTVRNeUlFd3lNREl1TVRJMk56WTVMREU0T0M0Mk16WXhNeklnV2lJZ1ptbHNiRDBpSTBaR1JrWkdSaUkrUEM5d1lYUm9QZ29nSUNBZ1BDOW5QZ284TDNOMlp6NEtcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2Nzcy0zLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJoYVZrMnFzLnN2Z1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvZXhwcmVzcy5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p4emRtY2dkMmxrZEdnOUlqSTFObkI0SWlCb1pXbG5hSFE5SWpFd01uQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qVTJJREV3TWlJZ2RtVnljMmx2YmowaU1TNHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQndjbVZ6WlhKMlpVRnpjR1ZqZEZKaGRHbHZQU0o0VFdsdVdVMXBiaUJ0WldWMElqNEtJQ0FnSUR4blBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHlNRFV1TURNek16QTJMREFnUXpFNU5DNDVPRFUwTWpFc01DQXhPRFV1TmpJMk9UZ3lMREl1T1RJd05qazBNRGdnTVRjM0xqY3pNVGM1T1N3M0xqa3pPRGd4T0RnNElFd3hNamN1T1RrNE5UUTFMRFEwTGpRMk5EazBPVE1nVERFd01TNDNPRFV3TWpVc01qVXVNakUxTnpFek5TQkRNVEF3TGpJd05UUXdOeXd5Tnk0M056ZzFPVE0wSURrNExqWXhOREUxTWpFc016QXVNekkyT1RJNE1TQTVOeTR3T1RJM01UUTVMRE15TGprMk5UUTBNellnUXprMkxqY3lOakUzTXpZc016TXVOVGs1TmpFNE1pQTVOaTR6T0RVNE1UTTRMRE0wTGpJME1qVXlJRGsyTGpBeU5UQTVNRFlzTXpRdU9EYzJOamswTmlCTU1URTNMamt6TmpFeE5DdzFNQzQ1TmpZMk9UTTJJRXczTVM0NU5UZzBOVFVzT0RRdU56STVNakU1SUVNMk5TNDJOVGMwTXpVM0xEZzRMalkxTmpRME56RWdOVGd1TkRBNE1EWXpOU3c1TUM0M016TTFNVFEwSURVd0xqazJNemM0TkRVc09UQXVOek16TlRFME5DQkRNamt1TURNNE1qRTFOU3c1TUM0M016TTFNVFEwSURFeExqRTVOamsyTXpjc056SXVPRGsxTVRjeE5pQXhNUzR4T1RZNU5qTTNMRFV3TGprMk5qWTVNellnUXpFeExqRTVOamsyTXpjc01qa3VNRE00TWpFMU5TQXlPUzR3TXpVek1EWTBMREV4TGpFNU9UZzNNamNnTlRBdU9UWXpOemcwTlN3eE1TNHhPVGs0TnpJM0lFTTFPQzQwTURnd05qTTFMREV4TGpFNU9UZzNNamNnTmpVdU5qWXdNelEwT0N3eE15NHlOelF3TXpFZ056RXVPVFU0TkRVMUxERTNMakl3TkRFMk9ERWdURGMyTGpVeU9EVTRORGtzTWpBdU5UVTRNekV4T0NCRE56Z3VOREUyTlRZek5Dd3hOeTR5T1RRek5EZzVJRGd3TGpNM05ETTFPVFFzTVRRdU1UQTJNREl4TlNBNE1pNHpORGsyTURrM0xERXdMamswTURrMk5qWWdURGM0TGpJMk5USTVNalFzTnk0NU5ERTNNamM1TXlCRE56QXVNemN6TURFNE5Td3lMamt5TURZNU5EQTRJRFl4TGpBeE1UWTNNRE1zTUM0d01ESTVNRGt3TlRjNE5TQTFNQzQ1TmpNM09EUTFMREF1TURBeU9UQTVNRFUzT0RVZ1F6SXlMamd4T0RZME9UZ3NNQzR3TURJNU1Ea3dOVGM0TlNBd0xESXlMamd5TVRVMU9EZ2dNQ3cxTUM0NU5qWTJPVE0ySUVNd0xEYzVMakV4TVRneU9ETWdNakl1T0RFMU56UXdOeXd4TURFdU9UTXdORGM0SURVd0xqazJNemM0TkRVc01UQXhMamt6TURRM09DQkROakV1TURFeE5qY3dNeXd4TURFdU9UTXdORGM0SURjd0xqTTNNekF4T0RVc09Ua3VNREE1TnpnMElEYzRMakkyTlRJNU1qUXNPVE11T1RreE5qVTVNaUJNTVRJM0xqazVPRFUwTlN3MU55NDBOamcwTXpjNUlFd3hOVFF1TXpFek9EZ3pMRGMyTGpjNU16TXdPVElnUXpFMU5TNDVNalUxTURFc056UXVNVFV4T0RnME5pQXhOVGN1TlRNME1qRXNOekV1TlRBeE56TXlPU0F4TlRrdU1USTFORFkwTERZNExqYzBNVEF6TnlCRE1UVTVMalF6T1RZME15dzJPQzR4T1RReE16UXlJREUxT1M0M01qUTNNeXcyTnk0Mk5UQXhOREF6SURFMk1DNHdNellzTmpjdU1UQXpNak0zTlNCTU1UTTRMakEyTXpnNE5pdzFNQzQ1TmpZMk9UTTJJRXd4T0RRdU1ETTROak0yTERFM0xqSXdOREUyT0RFZ1F6RTVNQzR6TXprMk5UVXNNVE11TWpjMk9UUWdNVGszTGpVNU1Ua3pOaXd4TVM0eE9UazROekkzSURJd05TNHdNek16TURZc01URXVNVGs1T0RjeU55QkRNakkyTGprMk1UYzROU3d4TVM0eE9UazROekkzSURJME5DNDRNREF4TWpjc01qa3VNRE00TWpFMU5TQXlORFF1T0RBd01USTNMRFV3TGprMk5qWTVNellnUXpJME5DNDRNREF4TWpjc056SXVPRGsxTVRjeE5pQXlNall1T1RZeE56ZzFMRGt3TGpjek16VXhORFFnTWpBMUxqQXpNek13Tml3NU1DNDNNek0xTVRRMElFTXhPVGN1TlRnNU1ESTNMRGt3TGpjek16VXhORFFnTVRrd0xqTXpPVFkxTlN3NE9DNDJOVGt6TlRZeElERTROQzR3TXpnMk16WXNPRFF1TnpJNU1qRTVJRXd4TnprdU5UTTFOREUwTERneExqUXlNVFl5TURJZ1F6RTNOeTQyTWpjd056SXNPRFF1TnpFM05UZ3lPQ0F4TnpVdU5qazFORFU0TERnM0xqa3lNRFExTlRRZ01UY3pMamMxTlRFeE5pdzVNUzR3Tmpnd05UWWdUREUzTnk0M016UTNNRGdzT1RNdU9UZzROelV3TVNCRE1UZzFMall5T1RnNU1TdzVPUzR3TURrM09EUWdNVGswTGprNE9ETXpMREV3TVM0NU1qYzFOamtnTWpBMUxqQXpOakl4TlN3eE1ERXVPVEkzTlRZNUlFTXlNek11TVRneE16VXNNVEF4TGpreU56VTJPU0F5TlRZc056a3VNVEE0T1RFNU1pQXlOVFlzTlRBdU9UWXpOemcwTlNCRE1qVTFMams1TnpBNU1Td3lNaTQ0TVRnMk5EazRJREl6TXk0eE9ERXpOU3d3SURJd05TNHdNek16TURZc01DQk1NakExTGpBek16TXdOaXd3SUZvaUlHWnBiR3c5SWlNME5FSTNORUVpUGp3dmNHRjBhRDRLSUNBZ0lEd3ZaejRLUEM5emRtYytcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2ZsdXguc3ZnXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSTBNREJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBME1EQWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThaejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTWpndU1EZ3pNREEzTWl3ek9UZ3VNamc0TnpNM0lFd3lPQzR3T0RNd01EY3lMRE0yTXk0MU1UQXlNRE1nUXpJNExqQTRNekF3TnpJc016WXhMakExT0RJMk5TQXlOaTR5T0RVME5qVXlMRE0yTUM0d01EQTBPRFFnTWpRdU1UWTJNelUzTml3ek5qQXVNREF3TkRnMElFTXhPUzQ1TVRneU5UQTNMRE0yTUM0d01EQTBPRFFnTVRRdU5qRXlNell5TlN3ek5qRXVNRFU0TWpZMUlEa3VOemsxTVRZNU1qTXNNell6TGpFNE1UUXpNeUJNT1M0M09UVXhOamt5TXl3ek9UZ3VNamc0TnprMElFd3dMRE01T0M0eU9EZzNPVFFnVERBc016TXpMamN4TWpjek1pQk1PUzQzT1RVeE5qa3lNeXd6TXpNdU56RXlOek15SUV3NUxqYzVOVEUyT1RJekxETTFOUzR3TVRjeE16UWdRekUwTGpRMU1EWTJORGtzTXpVekxqTXdORFVnTWpBdU1EQXhNekk1TkN3ek5URXVPRE0yTVRnMUlESTFMalUxTWprd09EY3NNelV4TGpnek5qRTROU0JETXpRdU5EVXhNVE0yTml3ek5URXVPRE0yTVRnMUlETTNMamM1T0RZNU9Ua3NNelUzTGpNd05qQXdNU0F6Tnk0M09UZzJPVGs1TERNMk5DNDRNVE15TVRnZ1RETTNMamM1T0RZNU9Ua3NNems0TGpJNE9EYzVOQ0JNTWpndU1EZ3pNREEzTWl3ek9UZ3VNamc0TnprMElFd3lPQzR3T0RNd01EY3lMRE01T0M0eU9EZzNNemNnVERJNExqQTRNekF3TnpJc016azRMakk0T0Rjek55QmFJRTAxTmk0d09ESXdNakE1TERNM055NHlNalkwT0RFZ1F6VTJMalF3T0RFd016VXNNemc0TGprd01EUTVPU0ExT0M0Mk9UVXhPVGd5TERNNU1TNHhPRGN4TXpZZ05qVXVPRGMyTXpNeU5Td3pPVEV1TVRnM01UTTJJRU0zTVM0MU1UQXdOelUzTERNNU1TNHhPRGN4TXpZZ056Y3VPRGM0TWpBMU1Td3pPRGt1TXpBNE16UTFJRGd5TGpjM056WXhPVE1zTXpnM0xqUXlPVGsxTkNCTU9EUXVOREE1T0RZeE55d3pPVFF1TnpjMU9UTXhJRU0zT1M0eE9EUXpOalE0TERNNU55NHhORFkxTmpJZ056SXVPREUzTVRVd05Dd3pPVGt1TkRNd05URXlJRFkxTGpJeU5qZzFORGdzTXprNUxqUXpNRFV4TWlCRE5EZ3VPRGsyTkRnek9Td3pPVGt1TkRNd05URXlJRFEyTGpNMk5EVTFOVGNzTXprd0xqUTFNamMxSURRMkxqTTJORFUxTlRjc016YzJMakUyTXpNeU5TQkRORFl1TXpZME5UVTFOeXd6TmpndU16STNOemsySURRMkxqa3pPREV3TVRrc016WXhMakl5TXprMk5TQTBPQzQ0TVRVeE1qQTJMRE0xTkM0Mk9UTXlNalFnUXpVekxqY3hNamN3TlRJc016VXlMamd4TkRnek15QTJNQzR5TkRRek5qRTRMRE0xTVM0NE16WXhNamdnTmpndU5EZzNOamd3TVN3ek5URXVPRE0yTVRJNElFTTRNUzQ0T0RBMU5qTTJMRE0xTVM0NE16WXhNamdnT0RVdU9UWXdOelF3Tml3ek5Ua3VNalkyTURReElEZzFMamsyTURjME1EWXNNemN5TGpJME5UYzJNU0JNT0RVdU9UWXdOelF3Tml3ek56Y3VNakkyTkRJMElFdzFOaTR3T0RJd01qQTVMRE0zTnk0eU1qWTBNalFnVERVMkxqQTRNakF5TURrc016YzNMakl5TmpRNE1TQk1OVFl1TURneU1ESXdPU3d6TnpjdU1qSTJORGd4SUZvZ1RUWTRMalE0Tnpjek56SXNNell3TGpBd01EUTROQ0JETmpVdU5UVXlPVE0zTXl3ek5qQXVNREF3TkRnMElEWXdMamc1TnpRME1UY3NNell3TGpBNE1UYzVJRFUzTGpBMk1URTRNelFzTXpZd0xqZ3hNelE0T1NCRE5UWXVOalUwTnpBNU5Dd3pOakl1Tnpjek5UZzNJRFUyTGpFMk1qUXhNak1zTXpZMUxqUTJPREEzSURVMUxqazVPRGswTWpJc016Y3dMalEwT0RjNUlFdzNOaTQwTURnMU56VXlMRE0zTUM0ME5EZzNPU0JETnpZdU5EQTROVGMxTWl3ek5qTXVOamN3T1RnMUlEYzFMakU0TXpjeU1UWXNNell3TGpBd01EUTROQ0EyT0M0ME9EYzNNemN5TERNMk1DNHdNREEwT0RRZ1REWTRMalE0Tnpjek56SXNNell3TGpBd01EUTROQ0JNTmpndU5EZzNOek0zTWl3ek5qQXVNREF3TkRnMElGb2dUVEV3TkM0ek1qVTBNalVzTXpZekxqRTRNVFF6TXlCTU1UQTBMak15TlRReU5Td3pPVGd1TWpnNE56azBJRXc1TkM0MU1qZzBNall4TERNNU9DNHlPRGczT1RRZ1REazBMalV5T0RReU5qRXNNelU0TGpjM05ESTFPQ0JETVRBeUxqYzNORFE0T1N3ek5UUXVNamcxTXpjNElERXhNUzQxTURreE9Ea3NNelV5TGpnNU5qVTVOaUF4TVRjdU1qSTJNRFk1TERNMU1pNDBPRGczTlNCTU1URTNMakl5TmpBMk9Td3pOakF1TmpVek1EUTVJRU14TVRNdU1qSTFOREkxTERNMk1DNDVOemt4T0RrZ01UQTRMakUyTVRZNE15d3pOakV1TkRZNE56UXlJREV3TkM0ek1qVTBNalVzTXpZekxqRTRNVFF6TXlCTU1UQTBMak15TlRReU5Td3pOak11TVRneE5ETXpJRXd4TURRdU16STFOREkxTERNMk15NHhPREUwTXpNZ1dpQk5NVFF6TGpFd016STROeXd6T1RrdU5ETXdOVEV5SUVNeE1qZ3VORGczTXpJekxETTVPUzQwTXpBMU1USWdNVEl4TGpnM05USTNOU3d6T1RJdU1qUTNOakExSURFeU1TNDROelV5TnpVc016YzFMamd6TnpJME15QkRNVEl4TGpnM05USTNOU3d6TlRndU5EUTRNVGMySURFek1DNDJNVEF3TXpJc016VXhMamd6TmpFeU9DQXhORE11TVRBek1qZzNMRE0xTVM0NE16WXhNamdnUXpFMU55NDNNVFEzT1RJc016VXhMamd6TmpFeU9DQXhOalF1TXpJNE5qRXpMRE0xT1M0d01Ua3dNelVnTVRZMExqTXlPRFl4TXl3ek56VXVOREk1TXprM0lFTXhOalF1TXpJNE5qRXpMRE01TWk0NE1UZzFNakVnTVRVMUxqVTVNakE0TWl3ek9Ua3VORE13TlRFeUlERTBNeTR4TURNeU9EY3NNems1TGpRek1EVXhNaUJNTVRRekxqRXdNekk0Tnl3ek9Ua3VORE13TlRFeUlFd3hORE11TVRBek1qZzNMRE01T1M0ME16QTFNVElnV2lCTk1UUXpMakV3TXpJNE55d3pOakF1TURBd05EZzBJRU14TXpVdU5Ua3dOamsyTERNMk1DNHdNREEwT0RRZ01UTXhMalF5T0RNMU5Td3pOalF1TXpJMU9ETTRJREV6TVM0ME1qZ3pOVFVzTXpjMUxqZ3pOek1nUXpFek1TNDBNamd6TlRVc016ZzRMalF4TVRRd05DQXhNelF1T1RNNE5UTXhMRE01TVM0eE9EY3hPVE1nTVRRekxqRXdNekk0Tnl3ek9URXVNVGczTVRreklFTXhOVEF1TmpFeU1qYzNMRE01TVM0eE9EY3hPVE1nTVRVMExqYzNOek13TlN3ek9EWXVPVFF3TkRVNUlERTFOQzQzTnpjek1EVXNNemMxTGpReU9UUTFOQ0JETVRVMExqYzNOek13TlN3ek5qSXVPRFUxTWpreklERTFNUzR5TmpZeU56RXNNell3TGpBd01EUTROQ0F4TkRNdU1UQXpNamczTERNMk1DNHdNREEwT0RRZ1RERTBNeTR4TURNeU9EY3NNell3TGpBd01EUTROQ0JNTVRRekxqRXdNekk0Tnl3ek5qQXVNREF3TkRnMElGb2dUVEl4TVM0MU9USTROVFFzTXprNExqSTRPRGN6TnlCTU1qQXdMakE0TVRRME9Td3pPVGd1TWpnNE56TTNJRU14T1RjdU16ZzROek00TERNNU1TNHhNRFV6TnpJZ01Ua3pMall6TVRFMU5pd3pPRE11TnpVMk56WTJJREU0Tnk0NE16UTNORE1zTXpjM0xqTTRPVFE1TkNCTU1UZ3lMalk1TVRRMk55d3pOemN1TXpnNU5EazBJRXd4T0RJdU5qa3hORFkzTERNNU9DNHlPRGczTXpjZ1RERTNNaTQ0T1RVek9ETXNNems0TGpJNE9EY3pOeUJNTVRjeUxqZzVOVE00TXl3ek16TXVOekV5TnpNeUlFd3hPREl1TmpreE5EWTNMRE16TXk0M01USTNNeklnVERFNE1pNDJPVEUwTmpjc016Y3dMamMzTkRneE5pQk1NVGczTGpJMk16ZzROQ3d6TnpBdU56YzBPREUySUVNeE9USXVNalF6Tmprc016WTFMall6TVRBNE15QXhPVFl1TURjNU9UUTRMRE0xT1M0eU5qWXdPVGdnTVRrNExqYzNOVEk0T1N3ek5USXVPVGMzT1RBeklFd3lNRGt1TnprMU16RXlMRE0xTWk0NU56YzVNRE1nUXpJd05pNHdOREV5TnpVc016WXdMalUzTVRNME15QXlNREV1TWpJME9UTTVMRE0yTnk0eU5qVXdPVGNnTVRrMUxqZ3pOVGszTWl3ek56SXVOek0wT1RFeklFTXlNREl1TWpnMk16SXpMRE00TUM0NE9Ua3lOeUF5TURjdU16UTNORE0xTERNNE9TNDFOVE14TWpFZ01qRXhMalU1TWpnMU5Dd3pPVGd1TWpnNE56TTNJRXd5TVRFdU5Ua3lPRFUwTERNNU9DNHlPRGczTXpjZ1RESXhNUzQxT1RJNE5UUXNNems0TGpJNE9EY3pOeUJhSUUweU1qa3VPVFUxTnpBNUxETTVPUzQwTXpBMU1USWdRekl5TVM0d05Ua3lOVFFzTXprNUxqUXpNRFV4TWlBeU1UY3VOekV4Tmprc016a3pMamsyTWpreU5pQXlNVGN1TnpFeE5qa3NNemcyTGpRMU1USTBPU0JNTWpFM0xqY3hNVFk1TERNMU1pNDVOemM1TURNZ1RESXlOeTQwTWpVMk1Td3pOVEl1T1RjM09UQXpJRXd5TWpjdU5ESTFOakVzTXpnM0xqWTNORGN6SUVNeU1qY3VOREkxTmpFc016a3dMakV5TmpZMk55QXlNamt1TWpJd05EWTFMRE01TVM0eE9EY3hNellnTWpNeExqTTBNekUzTlN3ek9URXVNVGczTVRNMklFTXlNelV1TlRnNE5UazFMRE01TVM0eE9EY3hNellnTWpReExqTTRORGsxTERNNU1DNHhNalkyTmpjZ01qUTJMakl3TXpreE5pd3pPRGd1TURBek5TQk1NalEyTGpJd016a3hOaXd6TlRJdU9UYzNPVEF6SUV3eU5UWXNNelV5TGprM056a3dNeUJNTWpVMkxETTVNaTR6TWpnNU1URWdRekkwTkM0ME1EY3lPRGtzTXprNExqWTVOalU0TXlBeU16VXVOVEEzTWpnNExETTVPUzQwTXpBMU1USWdNakk1TGprMU5UY3dPU3d6T1RrdU5ETXdOVEV5SUV3eU1qa3VPVFUxTnpBNUxETTVPUzQwTXpBMU1USWdUREl5T1M0NU5UVTNNRGtzTXprNUxqUXpNRFV4TWlCYUlpQm1hV3hzUFNJak5qYzJNa0UySWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEdjK0NpQWdJQ0FnSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB5TWpVdU5qSTNOVFUzTERNeE55NHlOVEkzT1RFZ1RETXdMakkxTnpFek5qTXNNekUzTGpJMU1qYzVNU0JETVRNdU5UUTFOekkwT1N3ek1UY3VNalV5TnpreElEQXNNekF6TGpjd09ESXhNaUF3TERJNE5pNDVPVGd4TVRFZ1REQXNNekF1TWpVMU9UZzVPQ0JETUN3eE15NDFORFUzTWpRNUlERXpMalUwTlRjeU5Ea3NNQ0F6TUM0eU5UY3hNell6TERBZ1RESXlOUzQyTWpjMU5UY3NNQ0JETWpReUxqTXpOalV4TWl3d0lESTFOUzQ0T0Rjek1UUXNNVE11TlRRMU56STBPU0F5TlRVdU9EZzNNekUwTERNd0xqSTFOVGs0T1RnZ1RESTFOUzQ0T0Rjek1UUXNNamcyTGprNU9ERXhNU0JETWpVMUxqZzROek14TkN3ek1ETXVOekE0TWpFeUlESTBNaTR6TXpZMU1USXNNekUzTGpJMU1qYzVNU0F5TWpVdU5qSTNOVFUzTERNeE55NHlOVEkzT1RFZ1RESXlOUzQyTWpjMU5UY3NNekUzTGpJMU1qYzVNU0JNTWpJMUxqWXlOelUxTnl3ek1UY3VNalV5TnpreElGb2lJR1pwYkd3OUlpTTJOell5UVRZaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEUyTUM0ek5qQTRNalFzTWpjekxqWXdNRGMzT0NCTU1UWXdMak0yTURneU5Dd3hORGN1TmpBNU56azNJRU14TmpBdU16WXdPREkwTERFME55NDJNRGszT1RjZ01UWTRMalUxTlRJNE1Td3hNVGN1TkRZd01UQTFJRFU1TGpReE5qVTJPREVzTVRVNUxqazBNemd5TVNCRE5Ua3VNakUyT1RFeE1Td3hOakF1TkRneU5URTRJRFU1TGpJeE5qa3hNVEVzTkRNdU5ETTVOelEwTVNBMU9TNHlNVFk1TVRFeExEUXpMalF6T1RjME5ERWdURGswTGpnM05qVTRNRGtzTkRNdU1qSXdPVEl6T1NCTU9UUXVPRGMyTlRnd09Td3hNVGd1TWpFeE16azVJRU01TkM0NE56WTFPREE1TERFeE9DNHlNVEV6T1RrZ01UazBMamN5TWprMk9TdzNPQzQ0T0RVMk56RXhJREU1TkM0M01qSTVOamtzTVRRNExqQXpORGd5TlNCTU1UazBMamN5TWprMk9Td3lOek11TmpBeE1UQTJJRXd4TmpBdU16WXdPREkwTERJM015NDJNREV4TURZZ1RERTJNQzR6TmpBNE1qUXNNamN6TGpZd01EYzNPQ0JNTVRZd0xqTTJNRGd5TkN3eU56TXVOakF3TnpjNElGb2dUVEU0TUM0Mk9EQTRNRFFzT0RndU5qQTJORFkwTlNCTU1UUXlMamcxTmpBeU5pdzRPQzQyTURZME5qUTFJRU14TlRZdU5EY3dPRFk1TERjeExqazJNREkwTURZZ01UWTRMamM1TlRnNE5TdzBNeTQwTXprME1UWTFJREUyT0M0M09UVTRPRFVzTkRNdU5ETTVOREUyTlNCTU1qQTNMamt3TlRJME9TdzBNeTQwTXprME1UWTFJRU15TURjdU9UQTFNalE1TERRekxqUXpPVFU0TURNZ01qQXhMakl4TURRek1TdzJNaTR3TWpVMU5EQTJJREU0TUM0Mk9EQTRNRFFzT0RndU5qQTJORFkwTlNCTU1UZ3dMalk0TURnd05DdzRPQzQyTURZME5qUTFJRXd4T0RBdU5qZ3dPREEwTERnNExqWXdOalEyTkRVZ1dpQk5OVGt1T0RZME16WXpOQ3d5TnpNdU16Z3hPVFU0SUV3MU9TNDROalF6TmpNMExESXdNUzQyTXpNNU9EWWdURGsxTGpjME1UVTBNeklzTWpNM0xqVXhNVEUyTmlCTU5Ua3VPRFkwTXpZek5Dd3lOek11TXpneE9UVTRJRXcxT1M0NE5qUXpOak0wTERJM015NHpPREU1TlRnZ1dpSWdabWxzYkQwaUkwWkdSa1pHUmlJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUR3dlp6NEtQQzl6ZG1jK0NnPT1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2hlcm9rdS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJek5qRndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUF6TmpFaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcGJsbE5hVzRnYldWbGRDSStDaUFnSUNBOFp6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NalUxTGpVMU5EZ3hNeXczTUM0M05qVTNNVFF6SUV3eU16SXVNekV6Tmpjc016TXhMakV5TlRRMU1TQk1NVEkzTGpnME16ZzJPQ3d6TmpBdU1EZzNPVEV5SUV3eU15NDJOakUzTVRRekxETXpNUzR4TmpZeU5ESWdUREF1TkRRMU1UZzJPREV6TERjd0xqYzJOVGN4TkRNZ1RESTFOUzQxTlRRNE1UTXNOekF1TnpZMU56RTBNeUJNTWpVMUxqVTFORGd4TXl3M01DNDNOalUzTVRReklGb2lJR1pwYkd3OUlpTkZORFJFTWpZaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1USTRMRE16Tnk0NU5UQXlORElnVERJeE1pNDBNVFkzTURNc016RTBMalUwTmpZek55Qk1Nak15TGpJM056Z3dNaXc1TWk0d05UY3pNVGczSUV3eE1qZ3NPVEl1TURVM016RTROeUJNTVRJNExETXpOeTQ1TlRBeU5ESWdUREV5T0N3ek16Y3VPVFV3TWpReUlGb2lJR1pwYkd3OUlpTkdNVFkxTWpraVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk9ESXVPREl3TWpFNU9Dd3hOVFV1T1RNeU1UTXlJRXd4TWpnc01UVTFMamt6TWpFek1pQk1NVEk0TERFeU15NDVPVFEzTWpVZ1REUTNMamt4TnpBeE1Td3hNak11T1RrME56STFJRXcwT0M0Mk9ERTBPVFExTERFek1pNDFOakk1T0RrZ1REVTJMalV6TURrNE9Td3lNakF1TlRjeU9ETTFJRXd4TWpnc01qSXdMalUzTWpnek5TQk1NVEk0TERFNE9DNDJNell4TXpJZ1REZzFMamN6T0Rrd01URXNNVGc0TGpZek5qRXpNaUJNT0RJdU9ESXdNakU1T0N3eE5UVXVPVE15TVRNeUlFdzRNaTQ0TWpBeU1UazRMREUxTlM0NU16SXhNeklnV2lJZ1ptbHNiRDBpSTBWQ1JVSkZRaUkrUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazA1TUM0d01UYzNOVGd5TERJek5pNDFOREU0T1NCTU5UY3VPVFUzT1RjNExESXpOaTQxTkRFNE9TQk1Oakl1TkRNeU16VXhOaXd5T0RZdU5qZzNOalE0SUV3eE1qY3VPRFV6TURFeExETXdOQzQ0TkRnNE56a2dUREV5T0N3ek1EUXVPREE0TURnNElFd3hNamdzTWpjeExqVTRNREV6TWlCTU1USTNMamcyTURBME5Dd3lOekV1TmpFM05EQTNJRXc1TWk0eU9URTFNVFkxTERJMk1pNHdNVE14T0RjZ1REa3dMakF4TnpjMU9ESXNNak0yTGpVME1UZzVJRXc1TUM0d01UYzNOVGd5TERJek5pNDFOREU0T1NCYUlpQm1hV3hzUFNJalJVSkZRa1ZDSWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRJMExqRTRNRGMwTnpNc01DQk1OREF1TkRFd056STFNeXd3SUV3ME1DNDBNVEEzTWpVekxERTJMakF6TlRFMk5EZ2dURFUxTGpJMU56TXhPRGNzTVRZdU1ETTFNVFkwT0NCTU5UVXVNalUzTXpFNE55d3dJRXczTVM0ME9EZ3NNQ0JNTnpFdU5EZzRMRFE0TGpVMU9EUXhOellnVERVMUxqSTFPREF5TWl3ME9DNDFOVGcwTVRjMklFdzFOUzR5TlRnd01qSXNNekl1TWprNE1UazNPQ0JNTkRBdU5ERXhOREk0Tml3ek1pNHlPVGd4T1RjNElFdzBNQzQwTVRFME1qZzJMRFE0TGpVMU9EUXhOellnVERJMExqRTRNVFExTURVc05EZ3VOVFU0TkRFM05pQk1NalF1TVRneE5EVXdOU3d3SUV3eU5DNHhPREEzTkRjekxEQWdUREkwTGpFNE1EYzBOek1zTUNCYUlpQm1hV3hzUFNJak1EQXdNREF3SWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRreUxqZ3pNRGswTlRFc01UWXVNVEF5TmpneE15Qk1Oemd1TlRReU56WTVNaXd4Tmk0eE1ESTJPREV6SUV3M09DNDFOREkzTmpreUxEQWdUREV5TXk0ek5UWTRNelVzTUNCTU1USXpMak0xTmpnek5Td3hOaTR4TURJMk9ERXpJRXd4TURrdU1EWXlNek1zTVRZdU1UQXlOamd4TXlCTU1UQTVMakEyTWpNekxEUTRMalUxT0RReE56WWdURGt5TGpnek1UWTBPRFFzTkRndU5UVTROREUzTmlCTU9USXVPRE14TmpRNE5Dd3hOaTR4TURJMk9ERXpJRXc1TWk0NE16QTVORFV4TERFMkxqRXdNalk0TVRNZ1REa3lMamd6TURrME5URXNNVFl1TVRBeU5qZ3hNeUJhSWlCbWFXeHNQU0lqTURBd01EQXdJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEV6TUM0ME5qa3lOelVzTUNCTU1UUTNMak01TWpjd015d3dJRXd4TlRjdU9EQXlPVEF4TERFM0xqQTJNVGszT0NCTU1UWTRMakl3TWpVME9Td3dJRXd4T0RVdU1UTXlNekE0TERBZ1RERTROUzR4TXpJek1EZ3NORGd1TlRVNE5ERTNOaUJNTVRZNExqazJPVEUwTXl3ME9DNDFOVGcwTVRjMklFd3hOamd1T1RZNU1UUXpMREkwTGpRNU1ERTVOemdnVERFMU55NDRNREk1TURFc05ERXVOelUxTkRJNE5pQk1NVFUzTGpVeU16WTVNaXcwTVM0M05UVTBNamcySUV3eE5EWXVNelE1TnpFMExESTBMalE1TURFNU56Z2dUREUwTmk0ek5EazNNVFFzTkRndU5UVTROREUzTmlCTU1UTXdMalEyT1RJM05TdzBPQzQxTlRnME1UYzJJRXd4TXpBdU5EWTVNamMxTERBZ1RERXpNQzQwTmpreU56VXNNQ0JhSWlCbWFXeHNQU0lqTURBd01EQXdJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEU1TXk0eU1EazJOeXd3SUV3eU1Ea3VORFEwTlRjeExEQWdUREl3T1M0ME5EUTFOekVzTXpJdU5UQTNOemd3TWlCTU1qTXlMakkyT0RZMU9Td3pNaTQxTURjM09EQXlJRXd5TXpJdU1qWTROalU1TERRNExqVTFPRFF4TnpZZ1RERTVNeTR5TURrMk55dzBPQzQxTlRnME1UYzJJRXd4T1RNdU1qQTVOamNzTUNCTU1Ua3pMakl3T1RZM0xEQWdXaUlnWm1sc2JEMGlJekF3TURBd01DSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHhNamN1T0RnNU5UZ3lMREl5TUM0MU56STRNelVnVERFMk55NHlNVFkxTWpjc01qSXdMalUzTWpnek5TQk1NVFl6TGpVd09UUTFNU3d5TmpFdU9Ua3lOemt4SUV3eE1qY3VPRGc1TlRneUxESTNNUzQyTURZNE5UY2dUREV5Tnk0NE9EazFPRElzTXpBMExqZ3pNelF3TnlCTU1Ua3pMak0yTWpJNE5pd3lPRFl1TmpnM05qUTRJRXd4T1RNdU9EUXlOak0zTERJNE1TNHlPVEU1TlRZZ1RESXdNUzR6TkRjMU1UWXNNVGszTGpJeE1qRXpNaUJNTWpBeUxqRXlOamMyT1N3eE9EZ3VOak0yTVRNeUlFd3hNamN1T0RnNU5UZ3lMREU0T0M0Mk16WXhNeklnVERFeU55NDRPRGsxT0RJc01qSXdMalUzTWpnek5TQk1NVEkzTGpnNE9UVTRNaXd5TWpBdU5UY3lPRE0xSUZvaUlHWnBiR3c5SWlOR1JrWkdSa1lpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTVRJM0xqZzRPVFU0TWl3eE5UVXVPRFUwTURZMklFd3hNamN1T0RnNU5UZ3lMREUxTlM0NU16SXhNeklnVERJd05TNHdNekkzT1RFc01UVTFMamt6TWpFek1pQk1NakExTGpZM016UTVOU3d4TkRndU56VXpOVGd5SUV3eU1EY3VNVEk0TmpFMUxERXpNaTQxTmpJNU9Ea2dUREl3Tnk0NE9USXpPVFlzTVRJekxqazVORGN5TlNCTU1USTNMamc0T1RVNE1pd3hNak11T1RrME56STFJRXd4TWpjdU9EZzVOVGd5TERFMU5TNDROVFF3TmpZZ1RERXlOeTQ0T0RrMU9ESXNNVFUxTGpnMU5EQTJOaUJhSWlCbWFXeHNQU0lqUmtaR1JrWkdJajQ4TDNCaGRHZytDaUFnSUNBOEwyYytDand2YzNablBnbz1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2h0bWwtNS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJeU5UWndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUF5TlRZaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcGJsbE5hVzRnYldWbGRDSStDaUFnSUNBOFp6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NQ3d3SUV3eU5UWXNNQ0JNTWpVMkxESTFOaUJNTUN3eU5UWWdUREFzTUNCYUlpQm1hV3hzUFNJalJqZEVSakZGSWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRZM0xqTXhNVGMwTml3eU1UTXVPVE15TWpreUlFdzROaTQ1TURJMk5UUXNNakF5TGpBM05qSTBNU0JET1RBdU5qZ3lNVEEzT1N3eU1EZ3VOemMzTXpRMklEazBMakV5TURJeU9EWXNNakUwTGpRME56RXpOeUF4TURJdU16WTNNRGcyTERJeE5DNDBORGN4TXpjZ1F6RXhNQzR5TnpJeU1ETXNNakUwTGpRME56RXpOeUF4TVRVdU1qVTJNRGMyTERJeE1TNHpOVFE0TVRrZ01URTFMakkxTmpBM05pd3hPVGt1TXpJMk9EZ3pJRXd4TVRVdU1qVTJNRGMyTERFeE55NDFNamczT0RjZ1RERXpPUzR6TVRNMU56VXNNVEUzTGpVeU9EYzROeUJNTVRNNUxqTXhNelUzTlN3eE9Ua3VOalkyT1RrM0lFTXhNemt1TXpFek5UYzFMREl5TkM0MU9EUXpNeUF4TWpRdU56QTNOelU1TERJek5TNDVNalU1TkRNZ01UQXpMak01T0RRc01qTTFMamt5TlRrME15QkRPRFF1TVRVek1qazFNaXd5TXpVdU9USTFPVFF6SURjeUxqazRNVGswTWprc01qSTFMamsxT0RZd015QTJOeTR6TVRFek16azNMREl4TXk0NU16QXlOaUlnWm1sc2JEMGlJekF3TURBd01DSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHhOVEl1TXpnd09UVXlMREl4TVM0ek5UUTBNVE1nVERFM01TNDVOamswTWpJc01qQXdMakF4TWpnZ1F6RTNOeTR4TWpVNU9UUXNNakE0TGpRek16azRNU0F4T0RNdU9ESTNPVEV4TERJeE5DNDJNVGs0TXpVZ01UazFMalk0TkRNMk9Dd3lNVFF1TmpFNU9ETTFJRU15TURVdU5qVXlOVEl4TERJeE5DNDJNVGs0TXpVZ01qRXlMakF3T1RBME1Td3lNRGt1TmpNMU9UWXlJREl4TWk0d01Ea3dOREVzTWpBeUxqYzJNakUxT1NCRE1qRXlMakF3T1RBME1Td3hPVFF1TlRFek5qYzJJREl3TlM0ME56azBNVFlzTVRreExqVTVNakF5TlNBeE9UUXVORGd4TVRZNExERTROaTQzT0RJd055Qk1NVGc0TGpRMk9EUXhPU3d4T0RRdU1qQXlOVFkxSUVNeE56RXVNVEV4TWpFekxERTNOaTQ0TVRRM015QXhOVGt1TlRrM016QTRMREUyTnk0MU16VXpOQ0F4TlRrdU5UazNNekE0TERFME55NDVORFE0TXpnZ1F6RTFPUzQxT1Rjek1EZ3NNVEk1TGprd01UTXdPQ0F4TnpNdU16UTBOVEE0TERFeE5pNHhOVE15T1RVZ01UazBMamd5TlRjMU1pd3hNVFl1TVRVek1qazFJRU15TVRBdU1URTVPVEkwTERFeE5pNHhOVE15T1RVZ01qSXhMakV4TnpjMk5Td3hNakV1TkRnd09UUWdNakk1TGpBeU1UWTJNeXd4TXpVdU5EQXdORE15SUV3eU1UQXVNamt3TlRrc01UUTNMalF5T0RjM05TQkRNakEyTGpFMk5qRTBOaXd4TkRBdU1EUXdNVEkzSURJd01TNDJPVGsxTlRZc01UTTNMakV4T1RJNE9TQXhPVFF1T0RJMk1UVTVMREV6Tnk0eE1Ua3lPRGtnUXpFNE55NDNPREEwTnl3eE16Y3VNVEU1TWpnNUlERTRNeTR6TVRJeU5UUXNNVFF4TGpVNE56QTVPQ0F4T0RNdU16RXlNalUwTERFME55NDBNamczTnpVZ1F6RTRNeTR6TVRJeU5UUXNNVFUwTGpZME5qTTBPU0F4T0RjdU56Z3dORGNzTVRVM0xqVTJPRFF3TmlBeE9UZ3VNRGc1T1RVMkxERTJNaTR3TXpZMk1qSWdUREl3TkM0eE1ETTVNalFzTVRZMExqWXhOREE1TlNCRE1qSTBMalUxTXpRME9Dd3hOek11TXpjNE5qUXhJREl6Tmk0d05qY3pOVElzTVRneUxqTXhNelEwT0NBeU16WXVNRFkzTXpVeUxESXdNaTQwTVRnek9EY2dRekl6Tmk0d05qY3pOVElzTWpJMExqQTNNVGt5TkNBeU1Ua3VNRFUxTVRNM0xESXpOUzQ1TWpjNU56VWdNVGsyTGpJd01EUXpNaXd5TXpVdU9USTNPVGMxSUVNeE56TXVPRFl3T1RjNExESXpOUzQ1TWpjNU56VWdNVFU1TGpReU5UZ3lPU3d5TWpVdU1qYzBNekV4SURFMU1pNHpPREV6TlRrc01qRXhMak0xTkRReE15SWdabWxzYkQwaUl6QXdNREF3TUNJK1BDOXdZWFJvUGdvZ0lDQWdQQzluUGdvOEwzTjJaejRLXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9qYXZhc2NyaXB0LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l5TXpOd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXlNek1pSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4WnlCemRISnZhMlU5SW01dmJtVWlJSE4wY205clpTMTNhV1IwYUQwaU1TSWdabWxzYkQwaWJtOXVaU0lnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWo0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1DNHpPRGMzT1RReU1ESXNNQ0JNTWpRdU1UYzVPVEF6TkN3d0lFd3lOQzR4TnprNU1ETTBMREUxTnk0NE9UTXdOaklnVERFeE9DNHlOalk0TmpJc01UVTNMamc1TXpBMk1pQk1NVEU0TGpJMk5qZzJNaXd4TnpjdU16VTVNekl4SUV3d0xqTTROemM1TlRNM05pd3hOemN1TXpVNU16SXhJRXd3TGpNNE56YzVOVE0zTml3ekxqTXpOelU1TlRJMFpTMHhOQ0JNTUM0ek9EYzNPVFF5TURJc01DQmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURTRNeTR4TlRRME1qTXNORFl1TlRBeU56UTVPU0JETVRrNUxqTTNOak15Tml3ME5DNHpNems0TWprMElESXhOaTQyTnprMk5USXNORGN1TlRnME1qQTNPU0F5TWprdU5qVTNNVGd5TERVNExqTTVPRGd3TkRZZ1F6STBNeTQzTVRZeE16UXNOamd1TVRNeE9UTTROaUF5TlRFdU1qZzJNemMxTERnMUxqUXpOVEk0TmpNZ01qVXlMak0yTnpnek15d3hNREV1TmpVM01UY3pJRU15TlRRdU5UTXdOelE1TERFeU1TNHhNak0wTkRFZ01qVXlMak0yTnpnek15d3hOREF1TlRnNU56QTVJREkwTVM0MU5UTXlNVGtzTVRVMkxqZ3hNVFl3TXlCRE1qTXhMamd5TURBNU9Dd3hOamt1TnpnNU1URTJJREl4Tmk0Mk56azJOVE1zTVRjNExqUTBNRGM1TnlBeE9Ua3VNemMyTXpJMkxERTNPUzQxTWpJeU5UVWdRekU0TXk0eE5UUTBNak1zTVRneExqWTROVEUzSURFMk5DNDNOamsyTURNc01UYzRMalEwTURjNU55QXhOVEF1TnpFd05qVXhMREUyTnk0Mk1qWXlJRU14TXpjdU56TXpNVEl4TERFMU5pNDRNVEUyTURNZ01UTXhMakkwTkRNM05Dd3hOREF1TlRnNU56QTVJREV5T1M0d09ERTBOVGdzTVRJMExqTTJOemd5TXlCRE1USTJMamt4T0RVME1pd3hNRGN1TURZME5EY2dNVEk1TGpBNE1UUTFPQ3c0Tnk0MU9UZ3lNREl4SURFek9TNDRPVFl3TXpjc056SXVORFUzTnpjek9DQkRNVFE0TGpVME56Y3pOU3cxTnk0ek1UY3pOREU1SURFMk5TNDROVEV3TmpFc05EY3VOVGcwTWpBM09TQXhPRE11TVRVME5ESXpMRFEyTGpVd01qYzBPVGtnVERFNE15NHhOVFEwTWpNc05EWXVOVEF5TnpRNU9TQmFJRTB4T0RZdU16azROemsyTERZMExqZzROelUyTVRRZ1F6RTVOeTR5TVRNek56VXNOak11T0RBMk1EazRPQ0F5TURrdU1UQTVORFE0TERZM0xqQTFNRFEzTnpJZ01qRTNMamMyTVRFeExEYzBMall5TURZNU1EZ2dRekl5TlM0ek16RXpOU3c0TXk0eU56SXpOekUzSURJeU9TNDJOVGN4T0RJc09UUXVNRGcyT1RVNUlESXpNQzQzTXpnMk5Dd3hNRFF1T1RBeE5UVTJJRU15TXpFdU9ESXdNRGs0TERFeE5pNDNPVGMyTVNBeU16QXVOek00TmpRc01USTVMamMzTlRFeU1pQXlNalV1TXpNeE16VXNNVFF3TGpVNE9UY3hJRU15TVRrdU9USTBNRFl4TERFMU1TNDBNRFF5T1RrZ01qRXdMakU1TURrd05Dd3hOVGd1T1RjME5USWdNVGs0TGpJNU5EZzJPU3d4TmpFdU1UTTNORE0ySUVNeE9EY3VORGd3TWpVMExERTJNeTR6TURBek5USWdNVGMxTGpVNE5ESXhOeXd4TmpBdU1EVTFPVGM0SURFMk9DNHdNVE01Tnpjc01UVXpMalUyTnpJek1TQkRNVFU1TGpNMk1qTXhNeXd4TkRjdU1EYzRORFkySURFMU15NDVOVFV3TWpVc01UTTNMak0wTlRNek5pQXhOVEV1TnpreU1EY3pMREV5Tnk0Mk1USXhPVGdnUXpFME9TNDJNamt4TlRjc01URXpMalUxTXpJeU55QXhOVEF1TnpFd05qVXhMRGs1TGpRNU5ESTFOemtnTVRVMkxqRXhOemswTERnMkxqVXhOamMwTlRRZ1F6RTJNUzQxTWpVeU1qa3NOelF1TmpJd05qa3dPQ0F4TnpNdU5ESXhNekF4TERZMUxqazJPVEF4T1RNZ01UZzJMak01T0RjNU5TdzJOQzQ0T0RjMU5qRTBJRXd4T0RZdU16azROemsyTERZMExqZzROelUyTVRRZ1dpSWdabWxzYkQwaUl6QXdNREF3TUNJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWswd0xqTTROemM1TkRJd01pd3lNRFV1TkRjM01qZ2dUREkxTlM0Mk1USXlNRGNzTWpBMUxqUTNOekk0SUV3eU5UVXVOakV5TWpBM0xESXpNaTQxTVRNM05qRWdUREF1TXpnM056azBNakF5TERJek1pNDFNVE0zTmpFZ1REQXVNemczTnprME1qQXlMREl3TlM0ME56Y3lPQ0JNTUM0ek9EYzNPVFF5TURJc01qQTFMalEzTnpJNElGb2lJR1pwYkd3OUlpTXpORGt5UmtZaVBqd3ZjR0YwYUQ0S0lDQWdJRHd2Wno0S1BDOXpkbWMrQ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvbG9kYXNoLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzSlVzdWttLnN2Z1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvbW9jaGEuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSTNNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNalUySURjd0lpQjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSEJ5WlhObGNuWmxRWE53WldOMFVtRjBhVzg5SW5oTmFXNVpUV2x1SUcxbFpYUWlQZ29nSUNBZ1BHYytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEV5T1M0eU9EWTJOelFzTUM0eE9ERTVPRFEwT0RZZ1F6RXlPUzR4TURrNU1EVXNNQzR4T0RReE5ETXdNRElnTVRJNExqa3pNVEV3Tml3d0xqSXlOak16TXpNMU5pQXhNamd1Tnpjek16UTVMREF1TXpFNE9EWTRPVE00SUVNeE1qZ3VORFU0TXpZMUxEQXVOVEF6TnprM05qTTVJREV5T0M0eU5qQXdNVGtzTUM0NE5ETTBNakk0TmpjZ01USTRMakkyTURBeE9Td3hMakl3T0RZek5URTBJRXd4TWpndU1qWXdNREU1TERJM0xqTTRPREl4TkNCRE1USTRMakkyTURBeE9Td3lOeTQyTkRVME5EZzJJREV5T0M0eE5EQXlNemtzTWpjdU9EYzFNekE1SURFeU55NDVNVGM0TURRc01qZ3VNREEwTXpFME9TQkRNVEkzTGpZNU5EZ3dOeXd5T0M0eE16TTJORFExSURFeU55NDBNakkyT0Rnc01qZ3VNVE16TmpRME5TQXhNamN1TVRrNU1UUTNMREk0TGpBd05ETXhORGtnVERFeU1pNDVNakUwTXpFc01qVXVOVFF3TXpRM015QkRNVEl5TGpJNE5EQTROaXd5TlM0eE56STRNelFnTVRJeExqVXdOVFl4TWl3eU5TNHhOek13TlRReUlERXlNQzQ0TmpneE1qVXNNalV1TlRRd016UTNNeUJNTVRBekxqYzVNVFEzT1N3ek5TNHpPVFl5TURreElFTXhNRE11TVRVek1ETTNMRE0xTGpjMk5EUTVNRGdnTVRBeUxqYzJORGd5TkN3ek5pNDBOek13TVRVZ01UQXlMamMyTkRneU5Dd3pOeTR5TURrNU1EWTFJRXd4TURJdU56WTBPREkwTERVMkxqa3lNVFl6TURJZ1F6RXdNaTQzTmpRNE1qUXNOVGN1TmpVM09UWTVNU0F4TURNdU1UVXpOVGcxTERVNExqTXpNakl5TURRZ01UQXpMamM1TVRRM09TdzFPQzQzTURFeE5UZ3pJRXd4TWpBdU9EWTRNVEkxTERZNExqVTFOekF5TURJZ1F6RXlNUzQxTURZMU5qWXNOamd1T1RJMU5EQTVPQ0F4TWpJdU1qZ3lPVGc1TERZNExqa3lOVFF3T1RnZ01USXlMamt5TVRRek1TdzJPQzQxTlRjd01qQXlJRXd4TXprdU9UazRNRGMzTERVNExqY3dNVEUxT0RNZ1F6RTBNQzQyTXpVNU55dzFPQzR6TXpJeU1qQTBJREUwTVM0d01qUTNNeklzTlRjdU5qVTNPVFk1TVNBeE5ERXVNREkwTnpNeUxEVTJMamt5TVRZek1ESWdUREUwTVM0d01qUTNNeklzTnk0M056a3lNRGszTVNCRE1UUXhMakF5TkRjek1pdzNMakF6TVRZMk16Z3hJREUwTUM0Mk1UWTRNRGNzTmk0ek16QXhNalExTWlBeE16a3VPVFl6T0RVMkxEVXVPVFkxTkRVMk1Ua2dUREV5T1M0M09UazVPVGtzTUM0eU9EUTJORGM0TWpVZ1F6RXlPUzQyTkRBek9Td3dMakU1TlRZeE56WTNNeUF4TWprdU5EWXpORFEwTERBdU1UZ3dNRFkzTnpJeklERXlPUzR5T0RZMk56UXNNQzR4T0RJd05EQTJNRGNnVERFeU9TNHlPRFkyTnpRc01DNHhPREU1T0RRME9EWWdXaUJOTVRrdU5ETTBPRGc1Tnl3eU5DNDNPRGN6TmpFNUlFTXhPUzR4TURreU16ZzNMREkwTGpnd01EUTROVGNnTVRndU9EQXpNamt3Tnl3eU5DNDROVGMwTkRRMklERTRMalV4TURrd01qUXNNalV1TURJMk9UWTFPQ0JNTVM0ME16UXlOVEU0Tnl3ek5DNDRPREk0TWpjM0lFTXdMamM1TnprME56STFNU3d6TlM0eU5UQTJOamtnTUM0ME1EYzJNREV5TVRRc016VXVPVEl3TmpVd09DQXdMalF3TnpZd01USXhOQ3d6Tmk0Mk5qSXpOakF4SUV3d0xqUTBNVGMwT0Rrek9DdzJNeTR4TVRVM01EYzRJRU13TGpRME1UYzBPRGt6T0N3Mk15NDBPRE0yTmpFMElEQXVOak14TlRjek1UVXpMRFl6TGpneU5UTXlPRFlnTUM0NU5UVXdOemcxT0RNc05qUXVNREExTlRneE9TQkRNUzR5TnpJeE5qQXlOeXcyTkM0eE9UVXpOak1nTVM0Mk5qVTNNVGd4T0N3Mk5DNHhPVFV6TmpNZ01TNDVPREUzTWpreU5DdzJOQzR3TURVMU9ERTVJRXd4TWk0eE1URXpOalF6TERVNExqRTROemMzTmprZ1F6RXlMamMxTXpBeU5qUXNOVGN1T0RBMk5UYzBNeUF4TXk0eE56SXlNell4TERVM0xqRTBNelE1TlRRZ01UTXVNVGN5TWpNMk1TdzFOaTQwTURneU5EZzRJRXd4TXk0eE56SXlNell4TERRMExqQTFOREkxTkRNZ1F6RXpMakUzTWpJek5qRXNORE11TXpFM016WXlPQ0F4TXk0MU5UazROemszTERReUxqWTBNVEF6TlNBeE5DNHhPVGc0T1RFeExEUXlMakkzTkRjeU1Ua2dUREU0TGpVeE1EZ3lPU3d6T1M0M056WTFPVE0ySUVNeE9DNDRNekkyTlRVeExETTVMalU1TURVek16Z2dNVGt1TVRjNE1UWXdNU3d6T1M0MU1ESTRNVFl4SURFNUxqVXpOelEzT1Rjc016a3VOVEF5T0RFMk1TQkRNVGt1T0RnNU5ESTFOeXd6T1M0MU1ESTRNVFl4SURJd0xqSTFNVEl4TURNc016a3VOVGt3TkRJMU9TQXlNQzQxTmpReE16UTJMRE01TGpjM05qVTVNellnVERJMExqZzNOakEzTWpZc05ESXVNamMwTnpJeE9TQkRNalV1TlRFMU1EWXlOQ3cwTWk0Mk5ERXdNelVnTWpVdU9UQXlOekl6TWl3ME15NHpNVGN6TmpJNElESTFMamt3TWpjeU16SXNORFF1TURVME1qVTBNeUJNTWpVdU9UQXlOekl6TWl3MU5pNDBNRGd5TkRnNElFTXlOUzQ1TURJM01qTXlMRFUzTGpFME16UTVOVFFnTWpZdU16STJNVEl3TlN3MU55NDRNVEE0TkRneUlESTJMamsyTXpVNU9UTXNOVGd1TVRnM056YzJPU0JNTXpjdU1Ea3pNak0wTkN3Mk5DNHdNRFUxT0RFNUlFTXpOeTQwTVRFek5qQTRMRFkwTGpFNU5UTTJNeUF6Tnk0NE1EUXpOall4TERZMExqRTVOVE0yTXlBek9DNHhNVGs0T0RVeExEWTBMakF3TlRVNE1Ua2dRek00TGpRek5ETXlNRFFzTmpNdU9ESTFNekk0TmlBek9DNDJNek15TVRBMExEWXpMalE0TXpZMk1UUWdNemd1TmpNek1qRXdOQ3cyTXk0eE1UVTNNRGM0SUV3ek9DNDJOamN6TlRneExETTJMalkyTWpNMk1ERWdRek00TGpZMk56TTFPREVzTXpVdU9USXdOalV3T0NBek9DNHlPREV6TXpjM0xETTFMakkxTURZMk9TQXpOeTQyTkRBM01EYzFMRE0wTGpnNE1qZ3lOemNnVERJd0xqVTJOREE1TlRnc01qVXVNREkyT1RZMU9DQkRNakF1TWpjMU1qWTBPQ3d5TkM0NE5UYzBORFEySURFNUxqazJOemsyTVRFc01qUXVPREF3TnpFNE9DQXhPUzQyTkRBeE1EZzFMREkwTGpjNE56TTJNVGtnVERFNUxqUXpORGMzTnpVc01qUXVOemczTXpZeE9TQk1NVGt1TkRNME9EZzVOeXd5TkM0M09EY3pOakU1SUZvZ1RURTNNaTQ0T0RVeE56RXNNalV1TURJMk9UWTFPQ0JETVRjeUxqVXlPRFF4TVN3eU5TNHdNalkxTXpReElERTNNaTR4TnpnNE16RXNNalV1TVRFMk56WTBOQ0F4TnpFdU9EVTROVEUyTERJMUxqTXdNRGN6T1NCTU1UVTBMamM0TVRnM0xETTFMakUxTmpZd01Ea2dRekUxTkM0eE5ETTVOellzTXpVdU5USTBPVGt3TlNBeE5UTXVOelUxTWpFNUxETTJMakU1T1RJME1UZ2dNVFV6TGpjMU5USXhPU3d6Tmk0NU16WXhNek16SUV3eE5UTXVOelUxTWpFNUxEVTJMalkwTnpnMU1qY2dRekUxTXk0M05UVXlNVGtzTlRjdU16ZzVNREV6TnlBeE5UUXVNVGN5TnpJekxEVTRMakEyTVRBM05qTWdNVFUwTGpneE5qQTVNU3cxT0M0ME1qY3pPRFV4SUV3eE56RXVOelUxT0RVeUxEWTRMakEzTnpreE5pQkRNVGN5TGpNNE1UUXlOU3cyT0M0ME16VXhNemMwSURFM015NHhORFV5TlRVc05qZ3VORFl4T0RVMU5TQXhOek11TnpjME9UTXpMRFk0TGpFeE1UZzBOemdnVERFNE5DNHdOREUwTlRZc05qSXVNemsyTnpZeU1pQkRNVGcwTGpNMk56STBOaXcyTWk0eU1UWXdOamcxSURFNE5DNDFPRGMyTXpRc05qRXVPRGM0TlRZeklERTROQzQxT0Rrd01ETXNOakV1TlRBMk9UazJJRU14T0RRdU5Ua3hNVFl4TERZeExqRXpOVE15TVRFZ01UZzBMak01TnpNMk1TdzJNQzQ0TURJeE9UTXhJREU0TkM0d056VTJOemdzTmpBdU5qRTNNakk1T0NCTU1UWTJMamc1TmpNMk5DdzFNQzQzTmpFek5qZ2dRekUyTmk0MU56UTJPQ3cxTUM0MU56YzVOREUySURFMk5pNHpORGc0TVRjc05UQXVNakEyTWpZMk55QXhOall1TXpRNE9ERTNMRFE1TGpnek56TXlPRGdnVERFMk5pNHpORGc0TVRjc05ETXVOamMzTkRFMk15QkRNVFkyTGpNME9EZ3hOeXcwTXk0ek1Ea3hNelEySURFMk5pNDFOemMwTVRjc05ESXVPVGN4TmpJME55QXhOall1T0RrMk16WTBMRFF5TGpjNE56YzFPQ0JNTVRjeUxqSXpORGsxTnl3ek9TNDNNRGMyT1RNNElFTXhOekl1TlRVeU5UTTFMRE01TGpVeU16a3pOU0F4TnpJdU9UUXlOall4TERNNUxqVXlNemt6TlNBeE56TXVNall4TmpBM0xETTVMamN3TnpZNU16Z2dUREUzT0M0Mk1EQXlMRFF5TGpjNE56YzFPQ0JETVRjNExqa3hPVEUwTnl3ME1pNDVOekUyTWpRM0lERTNPUzR4TVRNMU1qWXNORE11TXpBNU1UTTBOaUF4TnprdU1URXpOVEkyTERRekxqWTNOelF4TmpNZ1RERTNPUzR4TVRNMU1qWXNORGd1TlRNM01ERXlPU0JETVRjNUxqRXhNelV5Tml3ME9DNDVNRFU0TXpnMUlERTNPUzR6TURjNU1EUXNORGt1TWpReU9EQXdNU0F4TnprdU5qSTJPRFV4TERRNUxqUXlOalkyTmpnZ1F6RTNPUzQ1TkRjeE5qWXNORGt1TmpFeE1EZ3hPQ0F4T0RBdU16TTBOVFU1TERRNUxqWXhNVGcwTlRrZ01UZ3dMalkxTXpVd05pdzBPUzQwTWpZMk5qWTRJRXd4T1RBdU9EZzFPREEwTERRekxqUTNNakU1TXpJZ1F6RTVNUzQxTWpBNU5qRXNORE11TVRBek1qVTFNeUF4T1RFdU9URXlORFUxTERReUxqUXlOekkxTVRNZ01Ua3hMamt4TWpRMU5TdzBNUzQyT1RJMk5qVXhJRXd4T1RFdU9URXlORFUxTERNMkxqa3pOVGM0TnprZ1F6RTVNUzQ1TVRJME5UVXNNell1TWpBeE1EZzFNaUF4T1RFdU5USXlNekk1TERNMUxqVXlOVEU1TXpRZ01Ua3dMamc0TlRnd05Dd3pOUzR4TlRZeU5UVTFJRXd4TnpNdU9URXhPREl4TERJMUxqTXdNRE01TXpjZ1F6RTNNeTQxT1RJeE9EUXNNalV1TVRFMU1UQTJOaUF4TnpNdU1qUXhPVE1zTWpVdU1ESTNNRFl3T0NBeE56SXVPRGcxTVRjeExESTFMakF5TmpZeU1EUWdUREUzTWk0NE9EVXhOekVzTWpVdU1ESTJPVFkxT0NCYUlFMHhNakV1T0RJMk16TXpMRE01TGpjME1qTXhOalFnUXpFeU1TNDVNVFV6TmpRc016a3VOelF5TXpFMk5DQXhNakl1TURJd01UWTBMRE01TGpjMk5ESXdNemNnTVRJeUxqRXdNREV3Tnl3ek9TNDRNVEF5TVRBeklFd3hNamN1T1RVeU1ESTFMRFF6TGpFNU9ESXhOekVnUXpFeU9DNHhNVEE0TVRRc05ETXVNamt3TWpBME5DQXhNamd1TWpJMU56azRMRFF6TGpRMU9UWXhOemNnTVRJNExqSXlOVGM1T0N3ME15NDJORE13TkRRZ1RERXlPQzR5TWpVM09UZ3NOVEF1TkRFNE9UUTVOaUJETVRJNExqSXlOVGM1T0N3MU1DNDJNREk1TWpReUlERXlPQzR4TVRFNU1TdzFNQzQzTnpJME5EVTFJREV5Tnk0NU5USXdNalVzTlRBdU9EWXpPRGc0T0NCTU1USXlMakV3TURFd055dzFOQzR5TlRFM09ETXpJRU14TWpFdU9UUXdOelk1TERVMExqTTBNalkzT0RRZ01USXhMamMwTmpFeE9TdzFOQzR6TkRJMk56ZzBJREV5TVM0MU9EWTNPREVzTlRRdU1qVXhOemd6TXlCTU1URTFMamN6TkRnMk15dzFNQzQ0TmpNNE9EZzRJRU14TVRVdU5UYzFOVEkyTERVd0xqYzNNVGt3TVRVZ01URTFMalEyTVRBNUxEVXdMall3TWpreU5ESWdNVEUxTGpRMk1UQTVMRFV3TGpReE9EazBPVFlnVERFeE5TNDBOakV3T1N3ME15NDJORE13TkRRZ1F6RXhOUzQwTmpFd09TdzBNeTQwTlRrMk1UYzNJREV4TlM0MU56WXdOelFzTkRNdU1qa3dOalEwTnlBeE1UVXVOek0wT0RZekxEUXpMakU1T0RJeE56RWdUREV5TVM0MU9EWTNPREVzTXprdU9ERXdOelU0TmlCRE1USXhMalkyTmpjeU5Dd3pPUzQzTmpRM05qUTVJREV5TVM0M016Y3lPU3d6T1M0M05ESTROalEySURFeU1TNDRNall6TXpNc016a3VOelF5T0RZME5pQk1NVEl4TGpneU5qTXpNeXd6T1M0M05ESXpNVFkwSUZvaUlHWnBiR3c5SWlNME1EUXhNemNpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTWpJMExqQTBOalkzTVN3eU5DNDFORGM0TmpFMklFTXlNak11TkRVME5qSTVMREkwTGpVME56ZzJNVFlnTWpJeUxqZzNPVEF5Tnl3eU5DNDJOekF5T1RJMklESXlNaTR6TmprNE1EY3NNalF1T1RVNE5USXpOaUJNTWpBMkxqSTFNVE0yTlN3ek5DNHlOalk0TXpRM0lFTXlNRFV1TWpBNE1qZzRMRE0wTGpnMk56TTROVFlnTWpBMExqVTNORFVzTXpZdU1EQXlOVFl5TWlBeU1EUXVOVGMwTlN3ek55NHlNRGs1TURZMUlFd3lNRFF1TlRjME5TdzFOUzQzT1RJek5qTTNJRU15TURRdU5UYzBOU3cxTmk0NU9Ua3dOVEU1SURJd05TNHlNRGd5T0Rnc05UZ3VNVE15T1RFeE55QXlNRFl1TWpVeE16WTFMRFU0TGpjek5UTXlOellnVERJeE1DNDBOakEyTXprc05qRXVNVFkxTVRJMU9TQkRNakV5TGpVd05UY3pMRFl5TGpFM016QTBPVE1nTWpFekxqSTFPVGs0TERZeUxqRTFOelE1T1RRZ01qRTBMakU1TURneExEWXlMakUxTnpRNU9UUWdRekl4Tnk0eU1UZzNOU3cyTWk0eE5UYzBPVGswSURJeE9DNDVORGMyTXpFc05qQXVNekl3TWpVMk9TQXlNVGd1T1RRM05qTXhMRFUzTGpFeU5qazFOamtnVERJeE9DNDVORGMyTXpFc016Z3VOemcwTVRBM09TQkRNakU0TGprME56WXpNU3d6T0M0MU1qUTNPRGd4SURJeE9DNDNNak14TXpZc016Z3VNek01TVRZNE55QXlNVGd1TkRZNE5USTJMRE00TGpNek9URTJPRGNnVERJeE5pNDBORGswTkRZc016Z3VNek01TVRZNE55QkRNakUyTGpFNU1EY3lOaXd6T0M0ek16a3hOamczSURJeE5TNDVOekF6TXpnc016Z3VOVEkwTnpnNE1TQXlNVFV1T1Rjd016TTRMRE00TGpjNE5ERXdOemtnVERJeE5TNDVOekF6TXpnc05UY3VNVEkyT1RVMk9TQkRNakUxTGprM01ETXpPQ3cxT0M0MU5ESXpOamt5SURJeE5DNDBPVFl3Tmpjc05Ua3VPVFkxTnpjMk55QXlNVEl1TVRBek1qZ3pMRFU0TGpjMk9UWXdNRFVnVERJd055NDNNakk1TURNc05UWXVNakF6TURJMU55QkRNakEzTGpVMk9ESXhPU3cxTmk0eE1UZzNNRFUwSURJd055NDBORGt4TWpVc05UVXVPVFk1T0Rnd01TQXlNRGN1TkRRNU1USTFMRFUxTGpjNU1qTTJNemNnVERJd055NDBORGt4TWpVc016Y3VNakE1T1RBMk5TQkRNakEzTGpRME9URXlOU3d6Tnk0d016TTBPRFkzSURJd055NDFOalk0TlRFc016WXVPRFUwTXpJNU9DQXlNRGN1TnpJeU9UQXpMRE0yTGpjMk5UQTNPVFVnVERJeU15NDRNRGN4TVRrc01qY3VORGt3T1RNek5DQkRNakl6TGprMU56WTVNeXd5Tnk0ME1EUTBNakF4SURJeU5DNHhNemN3TVRRc01qY3VOREEwTkRJd01TQXlNalF1TWpnMk1qSTBMREkzTGpRNU1Ea3pNelFnVERJME1DNHpOekEwTkN3ek5pNDNOalV3TnprMUlFTXlOREF1TlRJek56VTFMRE0yTGpnMU56QTJOamdnTWpRd0xqWTBOREl4TXl3ek55NHdNamd4TWpBMklESTBNQzQyTkRReU1UTXNNemN1TWpBNU9UQTJOU0JNTWpRd0xqWTBOREl4TXl3MU5TNDNPVEl6TmpNM0lFTXlOREF1TmpRME1qRXpMRFUxTGprMk9UZzRNREVnTWpRd0xqVTFOVEU0TXl3MU5pNHhOVEUyTmpZZ01qUXdMalF3TkRZMk1TdzFOaTR5TXpjeE9UVWdUREl5TkM0eU9EWXlNalFzTmpVdU5URXhNelF4TVNCRE1qSTBMakUwTnprMk5pdzJOUzQxT1RNME56STJJREl5TXk0NU5UYzJPVE1zTmpVdU5Ua3pORGN5TmlBeU1qTXVPREEzTVRFNUxEWTFMalV4TVRNME1URWdUREl4T1M0Mk5qWXlPRGNzTmpNdU1EUTNNemN6TlNCRE1qRTVMalUwTXpBNE55dzJNaTQ1TnpVd09UYzNJREl4T1M0ek56UTNNVGtzTmpJdU9UZ3dOVGN4TnlBeU1Ua3VNalUxTmpJMUxEWXpMakEwTnpNM016VWdRekl4T0M0eE1USTJNaklzTmpNdU5qazFNelF5TnlBeU1UY3VPRGszTnpBM0xEWXpMamMzTURZNE16WWdNakUyTGpneU5UZzRNeXcyTkM0eE5ESTBOekEzSUVNeU1UWXVOVFl4TmprekxEWTBMakl6TkRRMU9DQXlNVFl1TVRZd05qRXhMRFkwTGpNM056VTRPVElnTWpFMkxqazJNamMzTWl3Mk5DNDRNalk1TURVNUlFd3lNakl1TXpZNU9EQTNMRFk0TGpBd09UUTNNemNnUXpJeU1pNDRPRFExTURFc05qZ3VNekEzTXpNMklESXlNeTQwTlRnd05UY3NOamd1TkRVME16QXdOeUF5TWpRdU1EUTJOamN4TERZNExqUTFORE13TURjZ1F6SXlOQzQyTkRNME9UY3NOamd1TkRVME16QXdOeUF5TWpVdU1qQTRPRFF5TERZNExqTXdOek16TmlBeU1qVXVOekl6TlRNMkxEWTRMakF3T1RRM016Y2dUREkwTVM0NE5ERTVOelFzTlRndU56TTFNekkzTmlCRE1qUXlMamc0TlRBMU5TdzFPQzR4TWpnMk5ESXlJREkwTXk0MU1UZzRNemtzTlRZdU9UazVNRFV4T1NBeU5ETXVOVEU0T0RNNUxEVTFMamM1TWpNMk16Y2dUREkwTXk0MU1UZzRNemtzTXpjdU1qQTVPVEEyTlNCRE1qUXpMalV4T0Rnek9Td3pOaTR3TURJMU5qSXlJREkwTWk0NE9EVXdOVFVzTXpRdU9EWTVPVEEyT0NBeU5ERXVPRFF4T1RjMExETTBMakkyTmpnek5EY2dUREl5TlM0M01qTTFNellzTWpRdU9UVTROVEl6TmlCRE1qSTFMakl4T0RReU1pd3lOQzQyTnpBeU9USTJJREl5TkM0Mk16ZzNNVFFzTWpRdU5UUTNPRFl4TmlBeU1qUXVNRFEyTmpjeExESTBMalUwTnpnMk1UWWdUREl5TkM0d05EWTJOekVzTWpRdU5UUTNPRFl4TmlCYUlFMDNNQzQzTXpNeU56UTVMREkwTGpreU5ESTBOak1nUXpjd0xqTTNOelF6TkRrc01qUXVPVEkwTWpRMk15QTNNQzR3TWpVeU9UZzVMREkxTGpBeE5EQTBORGtnTmprdU56QTJOakkwTWl3eU5TNHhPVGd3TVRrMklFdzFNaTQyTWprNU56Z3NNelV1TURFNU56RTJOQ0JETlRFdU9Ua3hOVE0yTlN3ek5TNHpPRGMyTmpVM0lEVXhMall3TXpNeU15d3pOaTR3T1RjeE56ZzFJRFV4TGpZd016TXlNeXd6Tmk0NE16TTBNVE00SUV3MU1TNDJNRE16TWpNc05UWXVOVFExTVRNek1pQkROVEV1TmpBek16SXpMRFUzTGpJNE1qSTBORGtnTlRFdU9Ua3hPVFV3T1N3MU55NDVOVFU1TkRjNUlEVXlMall5T1RrM09DdzFPQzR6TWpRMk5qVTJJRXcyT1M0M01EWTJNalF5TERZNExqRTRNRFV5TnpVZ1F6Y3dMak0wTlRBMk5UZ3NOamd1TlRRNU1qUTFNaUEzTVM0eE1qRTBPRGd6TERZNExqVTBPVEkwTlRJZ056RXVOelU1T1RJNU9DdzJPQzR4T0RBMU1qYzFJRXc0T0M0NE16WTFOell4TERVNExqTXlORFkyTlRZZ1F6ZzVMalEzTXpreU1URXNOVGN1T1RVMU9UUTNPU0E0T1M0NE5qTXlNekVzTlRjdU1qZ3lNalEwT1NBNE9TNDROak15TXpFc05UWXVOVFExTVRNek1pQk1PRGt1T0RZek1qTXhMRE0yTGpnek16UXhNemdnUXpnNUxqZzJNekl6TVN3ek5pNHdPVFl3T0RZeklEZzVMalEzTlRBeE56WXNNelV1TXpnM05qWTFOeUE0T0M0NE16WTFOell4TERNMUxqQXhPVGN4TmpRZ1REY3hMamMxT1RreU9UZ3NNalV1TVRrNE1ERTVOaUJETnpFdU5EUXhNalUxTWl3eU5TNHdNVFF3TkRRNUlEY3hMakE0T1RFeE5Ea3NNalF1T1RJME1qUTJNeUEzTUM0M016TXlOelE1TERJMExqa3lOREkwTmpNZ1REY3dMamN6TXpJM05Ea3NNalF1T1RJME1qUTJNeUJhSUUweU5EY3VPVFkzTmpZMUxESTFMakF5TnpFNE5pQk1NalEzTGprMk56WTJOU3d5TlM0MU1EWXlPVEF5SUV3eU5Ea3VNekF5TXpFMUxESTFMalV3TmpJNU1ESWdUREkwT1M0ek1ESXpNVFVzTWprdU1ETXhNRGN6TlNCTU1qUTVMamcwT1RnMk1Td3lPUzR3TXpFd056TTFJRXd5TkRrdU9EUTVPRFl4TERJMUxqVXdOakk1TURJZ1RESTFNUzR5TVRnM016SXNNalV1TlRBMk1qa3dNaUJNTWpVeExqSXhPRGN6TWl3eU5TNHdNamN4T0RZZ1RESTBOeTQ1TmpjMk5qVXNNalV1TURJM01UZzJJRXd5TkRjdU9UWTNOalkxTERJMUxqQXlOekU0TmlCYUlFMHlOVEV1TmprM09ETTJMREkxTGpBeU56RTROaUJNTWpVeExqWTVOemd6Tml3eU9TNHdNekV3TnpNMUlFd3lOVEl1TWpFeE1UWXhMREk1TGpBek1UQTNNelVnVERJMU1pNHlNVEV4TmpFc01qWXVOalk1T0RJNU5pQkRNalV5TGpJeE1URTJNU3d5Tmk0MU56TTBOakExSURJMU1pNHlNVFUxTWpFc01qWXVOREkwTkRFNU15QXlOVEl1TWpFeE1UWXhMREkyTGpJeU5UQXdNallnUXpJMU1pNHlNRFExT1Rrc01qWXVNREl4T0RZd05DQXlOVEl1TWpFeE1UWXhMREkxTGpnME5EYzRORFFnTWpVeUxqSXhNVEUyTVN3eU5TNDNORFUzT0RZeUlFd3lOVEl1TWpFeE1UWXhMREkxTGpZME1qZzFNRGtnVERJMU15NHpOREEwTnprc01qa3VNRE13TnpRMU5DQk1NalV6TGpnNE9EQXlOaXd5T1M0d016QTNORFUwSUV3eU5UVXVNRFV4TlRZMUxESTFMalkwTWpnMU1Ea2dRekkxTlM0d05URTFOalVzTWpVdU9EVTRNelkxTnlBeU5UVXVNREl5TnpjeExESTJMakEyTmpRek16Y2dNalUxTGpBeE56UXhPQ3d5Tmk0eU5UZzRNemsxSUVNeU5UVXVNREUxTWpVNUxESTJMalEwTmpBNU9UUWdNalUxTGpBeE56UXhPQ3d5Tmk0MU9EWTNNVE00SURJMU5TNHdNVGMwTVRnc01qWXVOalk1TlRBeE5TQk1NalUxTGpBeE56UXhPQ3d5T1M0d016QTNORFUwSUV3eU5UVXVOVE13TnpRekxESTVMakF6TURjME5UUWdUREkxTlM0MU16QTNORE1zTWpVdU1ESTJPRFUzT1NCTU1qVTBMamMzTnpnMk5Td3lOUzR3TWpZNE5UYzVJRXd5TlRNdU5qRTBNekkyTERJNExqUXhORGcyTkRZZ1RESTFNaTQwT0RVd01EZ3NNalV1TURJMk9EVTNPU0JNTWpVeExqWTVOemt3T1N3eU5TNHdNalk0TlRjNUlFd3lOVEV1TmprM09ETTJMREkxTGpBeU56RTROaUJhSUUweU1qZ3VNelU0TmpBNUxETTNMamd5TmpFeE5UTWdRekl5TXk0M05qZzNPRGdzTXpjdU9ESTJNVEUxTXlBeU1qRXVNRE0xTVRVM0xETTVMamMzT1RRek9EVWdNakl4TGpBek5URTFOeXcwTXk0d01qYzRNVGsxSUVNeU1qRXVNRE0xTVRVM0xEUTJMalUxTVRjek1EY2dNakl6TGpjME9ESTFOeXcwTnk0MU1UazVNREk1SURJeU9DNHhOVE15Tnpnc05EY3VPVFUxTnpVd05DQkRNak16TGpReU16UXlPU3cwT0M0ME56RTJOVE1nTWpNekxqZ3pOREE0Tnl3ME9TNHlORFUwTkRZMUlESXpNeTQ0TXpRd09EY3NOVEF1TWpneU9ESTVNeUJETWpNekxqZ3pOREE0Tnl3MU1pNHdPREl4T0RFeUlESXpNaTR6T1RrMU1URXNOVEl1T0RRNU5EQTBNU0F5TWprdU1EQTRPREl6TERVeUxqZzBPVFF3TkRFZ1F6SXlOQzQzTkRnNU1ERXNOVEl1T0RRNU5EQTBNU0F5TWpNdU9ERXlOVGt6TERVeExqYzROVGsxT1RRZ01qSXpMalE1T1RFeU1TdzBPUzQyTmpZNE5EQTJJRU15TWpNdU5EWXlNakVzTkRrdU5ETTVOakExSURJeU15NHlPRFk1TkRjc05Ea3VNalUyTVRjNE5pQXlNak11TURVME1qUXlMRFE1TGpJMU5qRTNPRFlnVERJeU1DNDVOalkzTVRVc05Ea3VNalUyTVRjNE5pQkRNakl3TGpjd09UTTJPQ3cwT1M0eU5UWXhOemcySURJeU1DNDBPRGMyTVRFc05Ea3VORGMzTkRrMU5pQXlNakF1TkRnM05qRXhMRFE1TGpjek5USTRNamdnUXpJeU1DNDBPRGMyTVRFc05USXVORFEzT0RNek9DQXlNakV1T1RZek1qVXNOVFV1TmpVMU5qazVOQ0F5TWprdU1EQTRPREl6TERVMUxqWTFOVFk1T1RRZ1F6SXpOQzR4TURreU16TXNOVFV1TmpVMU5qazVOQ0F5TXpjdU1EVXdPVE15TERVekxqWTFNelkwTlRZZ01qTTNMakExTURrek1pdzFNQzR4TkRVNU5EUTRJRU15TXpjdU1EVXdPVE15TERRMkxqWTJPRFUzTlRVZ01qTTBMalkzTkRVM05DdzBOUzQzTXpVeU1qUTJJREl5T1M0M01qYzBPQ3cwTlM0d09ERXhNalV4SUVNeU1qUXVOekk0TXpZMUxEUTBMalF4T1RZNE5qY2dNakkwTGpJMU1qQXdNaXcwTkM0d09UVTVOemcwSURJeU5DNHlOVEl3TURJc05ESXVPVEkxTWpFeU15QkRNakkwTGpJMU1qQXdNaXcwTVM0NU5UZzNPRGcxSURJeU5DNDJOVFU0TVRnc05EQXVOalkyTkRZM055QXlNamd1TXpVNE5qQTVMRFF3TGpZMk5qUTJOemNnUXpJek1TNDJOalUzT1Rjc05EQXVOalkyTkRZM055QXlNekl1T0RnNE1UazVMRFF4TGpNM09UY3dNVGtnTWpNekxqTTRPVEl3TkN3ME15NDJNRGsyTkRjMUlFTXlNek11TkRNek1EQTVMRFF6TGpneE9USTBPQ0F5TXpNdU5qRTNPREE0TERRekxqazROakF5TnprZ01qTXpMamd6TkRBNE55dzBNeTQ1T0RZd01qYzVJRXd5TXpVdU9USXhOakV6TERRekxqazROakF5TnprZ1F6SXpOaTR3TlRBeU9EY3NORE11T1RnMk1ESTNPU0F5TXpZdU1UYzBPRFUxTERRekxqa3dOekU0TVRjZ01qTTJMakkyTXpnek15dzBNeTQ0TVRRNE5qWXlJRU15TXpZdU16VXhORE01TERRekxqY3hOak13T0RRZ01qTTJMalF4TXpBek9TdzBNeTQyTURVeU5qVTNJREl6Tmk0ME1EQTNNVGdzTkRNdU5EY3lOelU0TnlCRE1qTTJMakEzTnpZMk5pd3pPUzQyTXpJek5qVTVJREl6TXk0MU1UWTFNRGtzTXpjdU9ESTJNVEUxTXlBeU1qZ3VNelU0TmpBNUxETTNMamd5TmpFeE5UTWdUREl5T0M0ek5UZzJNRGtzTXpjdU9ESTJNVEUxTXlCYUlFMHhOekl1T0RVd09UVXNOREl1TlRFME5UVXdNeUJETVRjeUxqYzRNamN5TXl3ME1pNDFNVFExTlRBeklERTNNaTQzTURjeU1UZ3NOREl1TlRFME5UVXdNeUF4TnpJdU5qUTFOakU1TERReUxqVTBPRFE0TWpJZ1RERTJPUzR6TmpBek16RXNORFF1TkRZME9EazVJRU14TmprdU1qTTNNVE15TERRMExqVXpORGs0TmlBeE5qa3VNVFUxTERRMExqWTJOVFF3TnprZ01UWTVMakUxTlN3ME5DNDRNRGN4TVRRMUlFd3hOamt1TVRVMUxEUTRMalUzTVRVd05pQkRNVFk1TGpFMU5TdzBPQzQzTVRNeU1USTFJREUyT1M0eU16Y3hNeklzTkRndU9EUXpNRGt3TlNBeE5qa3VNell3TXpNeExEUTRMamt4TXpjeU5UY2dUREUzTWk0Mk5EVTJNVGtzTlRBdU56azFPRFkxTkNCRE1UY3lMamMyT0RneE5DdzFNQzQ0Tmpjd05EUTJJREUzTWk0NU1EQXlNamtzTlRBdU9EWTNNRFEwTmlBeE56TXVNREl5TURVMUxEVXdMamM1TlRnMk5UUWdUREUzTmk0ek1EY3pORElzTkRndU9URXpOekkxTnlCRE1UYzJMalF5T1RFM015dzBPQzQ0TkRNMk16ZzNJREUzTmk0MU1USTJOek1zTkRndU56RXpNakV5TlNBeE56WXVOVEV5TmpjekxEUTRMalUzTVRVd05pQk1NVGMyTGpVeE1qWTNNeXcwTkM0NE1EY3hNVFExSUVNeE56WXVOVEV5TmpjekxEUTBMalkyTlRRd056a2dNVGMyTGpReU9USXpMRFEwTGpVek5UUXlNakVnTVRjMkxqTXdOek0wTWl3ME5DNDBOalE0T1RrZ1RERTNNeTR3TWpJd05UVXNOREl1TlRRNE5EZ3lNaUJETVRjeUxqazJNVEUyT0N3ME1pNDFNVEl6TkRnMklERTNNaTQ1TVRreU1qZ3NOREl1TlRFME5UVXdNeUF4TnpJdU9EVXdPVFVzTkRJdU5URTBOVFV3TXlCTU1UY3lMamcxTURrMUxEUXlMalV4TkRVMU1ETWdXaUlnWm1sc2JEMGlJemd6UTBReU9TSStQQzl3WVhSb1Bnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvbm9kZWpzLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l5TXpCd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXlNekFpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4Y0dGMGFDQmtQU0pOTUM0M05UUXhNalF4TVRJc01URTBMamMxTURNME1TQkRNQzQzTlRReE1qUXhNVElzTVRNekxqazJORFk0TWlBeE9TNDFNVFkyTURNeUxERTFNUzQ1TURJd05TQTBPUzR3T1RjeUxERTJNaTR3TVRJMU1qVWdRelF6TGpFNU1ESXpNRGtzTVRreExqYzFNREl6SURRNExqQXpPRFUyTnpJc01qRTFMamN4T0RZeE9DQTJOQzR5TXpJMU16azFMREl5TlM0d05UZ3hNRFFnUXpnd0xqZzNPREkyTnl3eU16UXVOalUzTWpBMUlERXdOUzQyTnpZeU9UWXNNakk0TGpBeE1qWXlJREV5T1M0eU1USTVPVElzTWpBM0xqUXpPRGd4TmlCRE1UVXlMakUxTlRnMk5Td3lNamN1TVRneU1EYzBJREUzTlM0ek5ETTNNamtzTWpNMExqazFNakF6TXlBeE9URXVOVEl5TmpFeUxESXlOUzQxT0RZd01EVWdRekl3T0M0eE5USXdOak1zTWpFMUxqazFPVEF6TnlBeU1UTXVNakV3TXpnekxERTVNQzR6TmpVd01ETWdNakEzTGpFME1EQTFNaXd4TlRrdU5qazVNRGswSUVNeU16Y3VPVFE1T0RFc01UUTVMalV4TWpZMk5DQXlOVFV1TVRnek9UTTNMREV6TkM0eU1UYzJNRFFnTWpVMUxqRTRNemt6Tnl3eE1UUXVOelV3TXpReElFTXlOVFV1TVRnek9UTTNMRGsxTGprNE1UUTJOalVnTWpNMkxqTTROalkwTml3M09TNDNORE00TmpJZ01qQTNMakl3TlRBeU5DdzJPUzQyT1RjNU9USXlJRU15TVRNdU56TTVPVGNzTXpjdU56WTBOekV4TnlBeU1EZ3VNakF5TnpJc01UUXVNemMzT1RNMk5DQXhPVEV1TXpNNE5ERTJMRFF1TmpVeU56VTFNRFVnUXpFM05TNHdOemswTlRrc0xUUXVOekl5T1RJeE9UY2dNVFV4TGpZeU1qUXhPU3d6TGpRME9Ea3pOalF4SURFeU9DNHpOREl4TWpZc01qTXVOekE1TWpVNU1TQkRNVEEwTGpFeU1qa3pOeXd5TGpJd05EVXlOelkwSURnd0xqZzVOek0wTnpRc0xUUXVNell4TVRNMk56VWdOalF1TURRNU16a3lMRFV1TXpreU16ZzVOVFFnUXpRM0xqZ3dOakl6Tnpjc01UUXVOemswTnpNMU9DQTBNeTR4TnpFeE1EazJMRE01TGpFNU9EWTVOaklnTkRrdU1EazNNVGs1T1N3Mk9TNDBPRFk1TkRBMUlFTXlNQzQxTVRVME1qazFMRGM1TGpRMU1qSXdNalFnTUM0M05UUXhNalF4TVRJc09UWXVNRFUyTlRJMU9TQXdMamMxTkRFeU5ERXhNaXd4TVRRdU56VXdNelF4SUZvaUlHWnBiR3c5SWlOR1JrWkdSa1lpUGp3dmNHRjBhRDRLSUNBZ0lEeHdZWFJvSUdROUlrMHlNREV1TURJME5UVXpMRGM1TGpZM05ERXhOemdnUXpFNU9DNDJPREExTXpRc056Z3VPRFkzTXpBMU5pQXhPVFl1TWpVeE5qVXhMRGM0TGpFd016a3pNRGdnTVRrekxqYzFNRGMzTkN3M055NHpPREU1T0RJNElFTXhPVFF1TVRZeE9ESXpMRGMxTGpjd05EUXdPRFVnTVRrMExqVXpPVEE0TlN3M05DNHdORGcxTlRNZ01UazBMamczTkRVeUxEY3lMalF5TURnMU1UVWdRekl3TUM0ek9EQTJNeklzTkRVdU5qa3pORGcyTWlBeE9UWXVOemd3TlRRMExESTBMakUyTVRjek5EVWdNVGcwTGpRNE56TXhOU3d4Tnk0d056STFOalUySUVNeE56SXVOams1TmpVeExERXdMakkzTkRrNU1UUWdNVFV6TGpReU1UZ3lOaXd4Tnk0ek5qSTFOVEUxSURFek15NDVOVEl4TlRFc016UXVNekEyTkRFek1pQkRNVE15TGpBM09Ua3hNaXd6TlM0NU16VTNNak0xSURFek1DNHlNREkwTkRRc016Y3VOall3TnpVM015QXhNamd1TXpJMU56Z3lMRE01TGpRMk9EWTBOREVnUXpFeU55NHdOelV6TkRNc016Z3VNamN5TlRBeU55QXhNalV1T0RJMk9URTJMRE0zTGpFeE5qVTRNVE1nTVRJMExqVTRNVGN3Tnl3ek5pNHdNVEE1TXpRNElFTXhNRFF1TVRjMk9URTRMREUzTGpnNU16UTFORGdnT0RNdU56STBNalkzTVN3eE1DNHlOVGcxTURFeUlEY3hMalEwTXpFd05EVXNNVGN1TXpZNE1UZ3lNeUJETlRrdU5qWTJOekF5TWl3eU5DNHhPRFUwTmpReklEVTJMakUzT1RJek1ESXNORFF1TkRJM016WXlNU0EyTVM0eE16VTFNelVzTmprdU56VTNNRGcwTVNCRE5qRXVOakUwTVRVeU5DdzNNaTR5TURNMk5qTTRJRFl5TGpFM016WXhNVGtzTnpRdU56QXlNVEkzTXlBMk1pNDRNRFl5TnpFNExEYzNMakkwTWpReE9UVWdRelU1TGpreE1UWTBNVGdzTnpndU1EWTBNVEV6TVNBMU55NHhNVGN4TlRrMUxEYzRMamswTURFd016Y2dOVFF1TkRRek16TTNMRGM1TGpnM01pQkRNekF1TlRJd09URXhNaXc0T0M0eU1USTBNVEUySURFMUxqSTBNamsxT1Rrc01UQXhMakk0TXpnNU5pQXhOUzR5TkRJNU5UazVMREV4TkM0NE5ESTBORFFnUXpFMUxqSTBNamsxT1Rrc01USTRMamcwTlRneU5pQXpNUzQyTkRNNE5USXpMREUwTWk0NE9URTBNemdnTlRZdU5UWXdPVEUzTlN3eE5URXVOREE0TURFeUlFTTFPQzQxTWpjeU56RXNNVFV5TGpBNE1EQTRPQ0EyTUM0MU5qYzJNamt5TERFMU1pNDNNVFUxTmpNZ05qSXVOamN3TXpJNE5Dd3hOVE11TXpFNE9EWXlJRU0yTVM0NU9EYzNPVFU0TERFMU5pNHdOall5T0RnZ05qRXVNemswTVRRNU15d3hOVGd1TnpVNE5qRXhJRFl3TGpnNU5UZ3lOQ3d4TmpFdU16ZzBOVGN5SUVNMU5pNHhOams1TnprMkxERTROaTR5TnpRMk9TQTFPUzQ0TmpBMU5qSTBMREl3Tmk0d016Z3pOeklnTnpFdU5qQTFOVGt6TVN3eU1USXVPREV5TmpFNUlFTTRNeTQzTXpjeE16YzFMREl4T1M0NE1EZzBOemdnTVRBMExqQTVOekk0TWl3eU1USXVOakUzTlRVeUlERXlNeTQ1TWpJNU1ETXNNVGsxTGpJNE56VTNPU0JETVRJMUxqUTRPVGczTXl3eE9UTXVPVEUzTmpnM0lERXlOeTR3TmpJME56TXNNVGt5TGpRMk5EazBNeUF4TWpndU5qTTNPRGc0TERFNU1DNDVOREl5TVRZZ1F6RXpNQzQyTnprNE5UWXNNVGt5TGprd09EVTJPU0F4TXpJdU56RTROakEwTERFNU5DNDNOamsxTkRZZ01UTTBMamMwTmpRNU5Td3hPVFl1TlRFMU1Ea3lJRU14TlRNdU9UUTVPVEUwTERJeE15NHdOREF5TmpRZ01UY3lMamt4TmpRek55d3lNVGt1TnpFek1UVTNJREU0TkM0Mk5UQTJNRGdzTWpFeUxqa3lNREF3TnlCRE1UazJMamMzTURBNE5pd3lNRFV1T1RBME1ETTNJREl3TUM0M01EZzRNamNzTVRnMExqWTNNekV6TVNBeE9UVXVOVGsxTWpZeExERTFPQzQ0TkRJeU5qa2dRekU1TlM0eU1EUTNNalVzTVRVMkxqZzJPVFE0SURFNU5DNDNOVEF5TkN3eE5UUXVPRFUwTURVNElERTVOQzR5TXprNE5Ea3NNVFV5TGpnd01qZzBNU0JETVRrMUxqWTJPVFkyT0N3eE5USXVNemd3TVRJNElERTVOeTR3TnpNek5EVXNNVFV4TGprME16YzBNaUF4T1RndU5EUXlNRE1zTVRVeExqUTVNREEyTVNCRE1qSTBMak0wTlRZNU1Td3hOREl1T1RBM05USTJJREkwTVM0eE9UazBOVGtzTVRJNUxqQXpNamcwT0NBeU5ERXVNVGs1TkRVNUxERXhOQzQ0TkRJME5EUWdRekkwTVM0eE9UazBOVGtzTVRBeExqSXpORGd5T0NBeU1qVXVOREk0T0RFekxEZzRMakEzTlRJMk1UWWdNakF4TGpBeU5EVTFNeXczT1M0Mk56UXhNVGM0SUV3eU1ERXVNREkwTlRVekxEYzVMalkzTkRFeE56Z2dUREl3TVM0d01qUTFOVE1zTnprdU5qYzBNVEUzT0NCYUlpQm1hV3hzUFNJak5UTkRNVVJGSWo0OEwzQmhkR2crQ2lBZ0lDQThjR0YwYUNCa1BTSk5NVGsxTGpRd05qSXlPQ3d4TkRJdU16STNOVFUwSUVNeE9UUXVNVGN3TmpjeExERTBNaTQzTXpZMU9TQXhPVEl1T1RBeU9UTTRMREUwTXk0eE16RTVOVE1nTVRreExqWXhNVEEzTXl3eE5ETXVOVEUxTWpRNUlFTXhPRGd1TnpVeE5ETTFMREV6TkM0ME5qSXhOQ0F4T0RRdU9Ea3hPVEk0TERFeU5DNDRNelUwT1RRZ01UZ3dMakUyT0RnNU9Td3hNVFF1T0RnNU5UQXlJRU14T0RRdU5qYzFPVFEzTERFd05TNHhPREEwTURVZ01UZzRMak00TmpJek55dzVOUzQyTnpZNE16STNJREU1TVM0eE5qVTRNemdzT0RZdU5qZ3lORFEwTmlCRE1Ua3pMalEzTnpJM09TdzROeTR6TlRFek1ESTBJREU1TlM0M01qQTNORGdzT0RndU1EVTJOell3TlNBeE9UY3VPRGd5TlRjeExEZzRMamd3TVRJek1UZ2dRekl4T0M0M09USXhNVGtzT1RVdU9UazVNemsyTnlBeU16RXVOVFEyTmpjeExERXdOaTQyTkRFNU9UZ2dNak14TGpVME5qWTNNU3d4TVRRdU9EUXlORFEwSUVNeU16RXVOVFEyTmpjeExERXlNeTQxTnpjME1UUWdNakUzTGpjM01qRTBNaXd4TXpRdU9URTJOakkxSURFNU5TNDBNRFl5TWpnc01UUXlMak15TnpVMU5DQk1NVGsxTGpRd05qSXlPQ3d4TkRJdU16STNOVFUwSUV3eE9UVXVOREEyTWpJNExERTBNaTR6TWpjMU5UUWdXaUJOTVRnMkxqRXlOVGczTml3eE5qQXVOekUyT1RJZ1F6RTRPQzR6T0Rjd05ERXNNVGN5TGpFek9EazROU0F4T0RndU56RXdNREEzTERFNE1pNDBOalU0TmlBeE9EY3VNakV5TWpFMkxERTVNQzQxTXpnNE1Ea2dRekU0TlM0NE5qWTBOVGNzTVRrM0xqYzVNamc0SURFNE15NHhOakF3TlRZc01qQXlMall5T1RNeU9TQXhOemt1T0RFek56VTJMREl3TkM0MU5qWXpNaklnUXpFM01pNDJPVEk0TVRNc01qQTRMalk0T0RBMk15QXhOVGN1TkRZME56TTJMREl3TXk0ek16QXpOak1nTVRReExqQTBNVGN5TWl3eE9Ea3VNVGszT0RjMklFTXhNemt1TVRVNU1ESTJMREU0Tnk0MU56YzRNVFlnTVRNM0xqSTJNalkxTlN3eE9EVXVPRFEzT1RVMklERXpOUzR6TmpBeU5URXNNVGcwTGpBeE56RTBNeUJETVRReExqY3lOekEzTERFM055NHdOVE00TmpNZ01UUTRMakE1TURJMk9Td3hOamd1T1RVNE56azBJREUxTkM0ek1EQTJNeklzTVRVNUxqazJPRFF5TnlCRE1UWTFMakl5TXprMk9Dd3hOVGd1T1RrNU1USTNJREUzTlM0MU5EUXdNRGNzTVRVM0xqUXhORFEySURFNE5DNDVNREkzT0Rjc01UVTFMakkxTVRBeU9TQkRNVGcxTGpNMk16Y3dPQ3d4TlRjdU1URXdNemszSURFNE5TNDNOek14TkRjc01UVTRMamt6TXprM0lERTROaTR4TWpVNE56WXNNVFl3TGpjeE5qa3lJRXd4T0RZdU1USTFPRGMyTERFMk1DNDNNVFk1TWlCTU1UZzJMakV5TlRnM05pd3hOakF1TnpFMk9USWdXaUJOT1RJdU1qYzJOak0zT1N3eU1ETXVPRFUwTURJM0lFTTROUzR6TVRrek9UQTBMREl3Tmk0ek1URXdOalFnTnprdU56YzRNamczTlN3eU1EWXVNemd4TkRRNUlEYzJMalF5T0RjMk9UZ3NNakEwTGpRMU1EQTROaUJETmprdU16QXhNemt5TERJd01DNHpNemt5TURVZ05qWXVNek00TXpnNE1Td3hPRFF1TkRjd09ESTFJRGN3TGpNNE1EQTVNVEVzTVRZekxqRTRORGd4TnlCRE56QXVPRFF6TURJeU9Dd3hOakF1TnpRM01EZzFJRGN4TGpNNU5EQXpOaklzTVRVNExqSTBNams1TWlBM01pNHdNamt4TURreUxERTFOUzQyT0RNek9UUWdRemd4TGpJNE5UTXlPVEVzTVRVM0xqY3pNREU0TnlBNU1TNDFNamszTlRNekxERTFPUzR5TURNd05ERWdNVEF5TGpRM09USXpNeXd4TmpBdU1Ea3dOamsySUVNeE1EZ3VOek14TkRJMUxERTJPQzQ0T0Rnd01EY2dNVEUxTGpJM09EUXlPU3d4TnpZdU9UYzBNakk0SURFeU1TNDROell4TVN3eE9EUXVNRFUwTlRRNElFTXhNakF1TkRNME5qSTNMREU0TlM0ME5EWXhOVGdnTVRFNExqazVPRGMzTkN3eE9EWXVOemN4TURBMElERXhOeTQxTnpBNU5qWXNNVGc0TGpBeE9UUXpNU0JETVRBNExqZ3dOREl5TXl3eE9UVXVOamd5TlRNNUlERXdNQzR3TVRnNU56a3NNakF4TGpFeE9UUTNNaUE1TWk0eU56WTJNemM1TERJd015NDROVFF3TWpjZ1REa3lMakkzTmpZek56a3NNakF6TGpnMU5EQXlOeUJNT1RJdU1qYzJOak0zT1N3eU1ETXVPRFUwTURJM0lGb2dUVFU1TGpZNE1qYzVNRE1zTVRReUxqSTNOREEyTVNCRE5EZ3VOalkwT1RNMk5Dd3hNemd1TlRBNE1qWTNJRE01TGpVMk5UazNOalVzTVRNekxqWXhNemt3TVNBek15NHpNamt3TmpnekxERXlPQzR5TnpNd09UUWdRekkzTGpjeU5EZ3lNRElzTVRJekxqUTNNelkwTnlBeU5DNDRPVFV6TkRZMExERXhPQzQzTURnM09Ea2dNalF1T0RrMU16UTJOQ3d4TVRRdU9EUXlORFEwSUVNeU5DNDRPVFV6TkRZMExERXdOaTQyTVRRMk5Ea2dNemN1TVRZeU1ESTVPU3c1Tmk0eE1qQXdOVFkxSURVM0xqWXlNRGN4TXpNc09EZ3VPVGczTURRM09TQkROakF1TVRBek1EZzRPQ3c0T0M0eE1qRTFNVFExSURZeUxqY3dNVFk1T1Rrc09EY3VNekExT0RVek9TQTJOUzR6T1RnME5EYzRMRGcyTGpVek9UWTJNemdnUXpZNExqSXlOVGt4TURRc09UVXVOek0zTVRZeU5pQTNNUzQ1TXpRNU9UUTFMREV3TlM0ek5UTXpOVEVnTnpZdU5ERXhNRGN6TVN3eE1UVXVNRGMzTXpJNUlFTTNNUzQ0Tnpjd056YzRMREV5TkM0NU5EVTJPVFlnTmpndU1URTFNekExTml3eE16UXVOekUxTVRJMElEWTFMakkyTURBNU1URXNNVFEwTGpBeU1EUXhNU0JETmpNdU16TTNOVGMzTkN3eE5ETXVORFkzTnpnNUlEWXhMalEzTkRrNU1UUXNNVFF5TGpnNE5qSXdPU0ExT1M0Mk9ESTNPVEF6TERFME1pNHlOelF3TmpFZ1REVTVMalk0TWpjNU1ETXNNVFF5TGpJM05EQTJNU0JNTlRrdU5qZ3lOemt3TXl3eE5ESXVNamMwTURZeElGb2dUVGN3TGpZd09EVTBNRFVzTmpjdU9UQXpNelEyTkNCRE5qWXVNell5TVRFM09DdzBOaTR5TURFME5qUXpJRFk1TGpFNE1qTTBNU3d5T1M0NE16QXpNelEzSURjMkxqSTNPVEUxTVRZc01qVXVOekl5TWpZNE55QkRPRE11T0RNNE5Ea3hPQ3d5TVM0ek5EVTVNelUySURFd01DNDFOVFF6TURZc01qY3VOVGcxTmpVNUlERXhPQzR4TnpJeU5UVXNORE11TWpJNU1qQTVOeUJETVRFNUxqSTVPRFF4TXl3ME5DNHlNamt3TnpjNElERXlNQzQwTWpnNU9UWXNORFV1TWpjMU5qQXdPU0F4TWpFdU5UWXlOemszTERRMkxqTTFPRE15TWpFZ1F6RXhOQzQ1T1RjMk9UUXNOVE11TkRBM05qY3pNaUF4TURndU5URXdOakU0TERZeExqUXpNekUyTWpZZ01UQXlMak14TXprekxEY3dMakUzT0RVNE9URWdRemt4TGpZNE56QXhNek1zTnpFdU1UWXpOVGMxT0NBNE1TNDFNVFExT0RJNExEY3lMamMwTlRneU9EZ2dOekl1TVRZeE9ETTFNU3czTkM0NE5qUTJNVFU0SUVNM01TNDFOek00TVRrekxEY3lMalE1T1RJNE1EUWdOekV1TURVeU9UY3dPU3czTUM0eE56VXpOekUySURjd0xqWXdPRFUwTURVc05qY3VPVEF6TXpRMk5DQk1OekF1TmpBNE5UUXdOU3cyTnk0NU1ETXpORFkwSUV3M01DNDJNRGcxTkRBMUxEWTNMamt3TXpNME5qUWdXaUJOTVRZNExqQTNOVGsyTlN3NU1TNDVOekExTmpRZ1F6RTJOUzQ0TkRBeE16a3NPRGd1TVRBNE5qUTBNU0F4TmpNdU5UUTBOemcxTERnMExqTXpPREF5TXpVZ01UWXhMakl3TkRjNE9TdzRNQzQyTnpBek5qWXhJRU14TmpndU5ERTBNakUyTERneExqVTRNVGMxTURJZ01UYzFMak15TVRVNE9TdzRNaTQzT1RFMU5qWTBJREU0TVM0NE1EZ3lOalFzT0RRdU1qY3lNRFl5T1NCRE1UYzVMamcyTURneE15dzVNQzQxTVRNek9UVXhJREUzTnk0ME16TTFOQ3c1Tnk0d016a3dPREkxSURFM05DNDFOell6TVRRc01UQXpMamN5T0RnMk55QkRNVGN5TGpVeU5qY3dOaXc1T1M0NE16YzFPRFk0SURFM01DNHpOVGc0TlN3NU5TNDVNVFF4TXpBMElERTJPQzR3TnpVNU5qVXNPVEV1T1Rjd05UWTBJRXd4TmpndU1EYzFPVFkxTERreExqazNNRFUyTkNCTU1UWTRMakEzTlRrMk5TdzVNUzQ1TnpBMU5qUWdXaUJOTVRJNExqTXlPRGs1T1N3MU15NHlOVFk0TkRnMElFTXhNekl1TnpneE16UTRMRFU0TGpBNE1EUXlOelFnTVRNM0xqSTBNREV6TWl3Mk15NDBOalU0TnprZ01UUXhMall5TlRjeE5pdzJPUzR6TURrd016TTNJRU14TXpjdU1qQTJNelEzTERZNUxqRXdNREk1TWpJZ01UTXlMamN6TWpJM09TdzJPQzQ1T1RFMk9UZ3pJREV5T0M0eU1qRXlNU3cyT0M0NU9URTJPVGd6SUVNeE1qTXVOelV5TnpjekxEWTRMams1TVRZNU9ETWdNVEU1TGpNeE1UWTROaXcyT1M0d09UYzROemtnTVRFMExqa3hPVFkyTnl3Mk9TNHpNRE13TURBM0lFTXhNVGt1TXpBNU5qYzFMRFl6TGpVeE5ERTBNamtnTVRJekxqZ3dOekEzTERVNExqRXpOVGt6TURnZ01USTRMak15T0RrNU9TdzFNeTR5TlRZNE5EZzBJRXd4TWpndU16STRPVGs1TERVekxqSTFOamcwT0RRZ1RERXlPQzR6TWpnNU9Ua3NOVE11TWpVMk9EUTROQ0JhSUUwNE9DNHpNamMwTkRBM0xEa3lMakF6TnpNeU9URWdRemcyTGpBNU5EQXlOamNzT1RVdU9URXdNVEE0TkNBNE15NDVOall6T1RFeUxEazVMamd4TWpJME9ETWdPREV1T1RRNE9UVTROQ3d4TURNdU56SXhOakk0SUVNM09TNHhNemM1T0RVNExEazNMakExTlRFM01EVWdOell1TnpNek1qTTBPU3c1TUM0ME9UazNNakF6SURjMExqYzJPRGc1TWpRc09EUXVNVFk1T1RBME1TQkRPREV1TWpFMU56UTROaXc0TWk0M01qY3lNVFEwSURnNExqQTVNRFUwTlRJc09ERXVOVFEzTlRZek15QTVOUzR5TlRReE1qRXNPREF1TmpVek5EY3pOeUJET1RJdU9EZ3hNVFF6T0N3NE5DNHpOVFE1TVRVNUlEa3dMalUyTmpnNE56WXNPRGd1TVRVek1qZzRNeUE0T0M0ek1qYzBOREEzTERreUxqQXpOalV5TkRjZ1REZzRMak15TnpRME1EY3NPVEl1TURNM016STVNU0JNT0RndU16STNORFF3Tnl3NU1pNHdNemN6TWpreElGb2dUVGsxTGpRMk1EUTBPVE1zTVRRNUxqY3hPVGs0TVNCRE9EZ3VNRFU1TVRjek5pd3hORGd1T0RrME1qWTFJRGd4TGpBNE1UQXhNVGdzTVRRM0xqYzNOVE0wTnlBM05DNDJNelUzTmpRekxERTBOaTR6TnpJME56UWdRemMyTGpZek1UUTNPRFFzTVRNNUxqa3lPVFkwSURjNUxqQTRPVE14T1Rjc01UTXpMakl6TkRJeU5TQTRNUzQ1TlRrNE1UYzNMREV5Tmk0ME1qUXhPRElnUXpnekxqazRNalEzT1RJc01UTXdMak16TURjME5pQTROaTR4TVRnMU5qQTVMREV6TkM0eU16UTBPVFVnT0RndU16WTFOalE1Tnl3eE16Z3VNVEUxTnpJeElFdzRPQzR6TmpZd05URTRMREV6T0M0eE1UVTNNakVnUXprd0xqWTFORGsyT1RRc01UUXlMakEyT1RjME5DQTVNeTR3TWpZek16YzRMREUwTlM0NU5ESTVNalVnT1RVdU5EWXdORFE1TXl3eE5Ea3VOekU1T1RneElFdzVOUzQwTmpBME5Ea3pMREUwT1M0M01UazVPREVnVERrMUxqUTJNRFEwT1RNc01UUTVMamN4T1RrNE1TQmFJRTB4TWpndU5UazJNRFlzTVRjM0xqRXdPRFUyTWlCRE1USTBMakF5TVRBMExERTNNaTR4TnpJek5qY2dNVEU1TGpRMU56WTROQ3d4TmpZdU56RXlNVEEzSURFeE5TNHdNREE1TVRFc01UWXdMamd6T0RjNE55QkRNVEU1TGpNeU56TTNNU3d4TmpFdU1EQTROVEUxSURFeU15NDNNemd5T1RNc01UWXhMakE1TlRNNU1TQXhNamd1TWpJeE1qRXNNVFl4TGpBNU5UTTVNU0JETVRNeUxqZ3lOamM1Tnl3eE5qRXVNRGsxTXpreElERXpOeTR6TnprMk9UVXNNVFl3TGprNU1UWXlNeUF4TkRFdU9EWXhNREF6TERFMk1DNDNPVEl4TXpJZ1F6RXpOeTQwTmpBNU16a3NNVFkyTGpjM01USXpNU0F4TXpNdU1ERTRNalEwTERFM01pNHlNems1TXpjZ01USTRMalU1TmpBMkxERTNOeTR4TURnMU5qSWdUREV5T0M0MU9UWXdOaXd4TnpjdU1UQTROVFl5SUV3eE1qZ3VOVGsyTURZc01UYzNMakV3T0RVMk1pQmFJRTB4TnpRdU5qWTROREU0TERFeU5pNHdOemN3T0RRZ1F6RTNOeTQyT0RnMU16UXNNVE15TGprMk1EY3lPU0F4T0RBdU1qTTBORFUzTERFek9TNDJNakV4TlRNZ01UZ3lMakkxTlRreE1pd3hORFV1T1RVME1UZzNJRU14TnpVdU56QTBORGcwTERFME55NDBORGczTmlBeE5qZ3VOak14TURBeExERTBPQzQyTlRJMU5EUWdNVFl4TGpFM09ESTBOQ3d4TkRrdU5UUTNNRE0ySUVNeE5qTXVOVEl6T0RjeUxERTBOUzQ0TWprNU1EY2dNVFkxTGpnek9UTXpOQ3d4TkRFdU9UazBOVE15SURFMk9DNHhNVFExTnpZc01UTTRMakEwT1RNMU55QkRNVGN3TGpReE5qTTJOU3d4TXpRdU1EVTNPVE1nTVRjeUxqWXdNVGt4Tnl3eE16QXVNRFl3TkRZNUlERTNOQzQyTmpnME1UZ3NNVEkyTGpBM056QTROQ0JNTVRjMExqWTJPRFF4T0N3eE1qWXVNRGMzTURnMElFd3hOelF1TmpZNE5ERTRMREV5Tmk0d056Y3dPRFFnV2lCTk1UVTVMamMxTXpJMUxERXpNeTR5TWpZNU9EVWdRekUxTmk0eU1qRXhNelFzTVRNNUxqTTFNVEkzTnlBeE5USXVOVGswT1RBekxERTBOUzR4T1RjMk5Ea2dNVFE0TGpreE16VTNNU3d4TlRBdU56RTJNak1nUXpFME1pNHlNRGcxTURJc01UVXhMakU1TlRZMU1TQXhNelV1TWpneE5ESXNNVFV4TGpRME1qWXdNaUF4TWpndU1qSXhNakVzTVRVeExqUTBNall3TWlCRE1USXhMakU0T1RVMU5pd3hOVEV1TkRReU5qQXlJREV4TkM0ek5EazNOU3d4TlRFdU1qSTBNakEzSURFd055NDNOak16TXpFc01UVXdMamM1TmpZMk9TQkRNVEF6TGprek16VTROeXd4TkRVdU1qQTFOamswSURFd01DNHlNamcxTWpVc01UTTVMak0wTWpBeU55QTVOaTQzTVRnNU16RTNMREV6TXk0eU56azJOek1nVERrMkxqY3hPVGN6TmpFc01UTXpMakkzT1RZM015QkRPVE11TWpFNU16a3pOU3d4TWpjdU1qTXpPREVnT0RrdU9UazNOemMxTkN3eE1qRXVNVE0yT0RZM0lEZzNMakEzT0RZeE1USXNNVEUxTGpBM05ERXhNaUJET0RrdU9UazJPVGN3T1N3eE1EZ3VPVGszTWpjNUlEa3pMakl4TURFME1qa3NNVEF5TGpnNU16UTVPU0E1Tmk0Mk9UQXpOelUxTERrMkxqZzFPRFE1TkRrZ1REazJMalk0T1RVM01URXNPVFl1T0RVNU56QXhOU0JETVRBd0xqRTNPVEExTkN3NU1DNDRNRGcyTURrMklERXdNeTQ0TlRFMU16Z3NPRFF1T1Rjek5EazRPQ0F4TURjdU5qUTFPRGc0TERjNUxqUXhOelV4TkRVZ1F6RXhOQzR6TmpVNE16Z3NOemd1T1RBNU5UTTJOaUF4TWpFdU1qVTJOekl6TERjNExqWTBORFE0TnpFZ01USTRMakl5TURnd09DdzNPQzQyTkRRME9EY3hJRXd4TWpndU1qSXhNakVzTnpndU5qUTBORGczTVNCRE1UTTFMakl4TmpZMk5pdzNPQzQyTkRRME9EY3hJREUwTWk0eE1UWXpPVGtzTnpndU9URXhOVFEzTlNBeE5EZ3VPRE0wTXpNM0xEYzVMalF5TXprME9UZ2dRekUxTWk0MU56QTNOekVzT0RRdU9UTTVNekV4T1NBeE5UWXVNakU0TXpFNUxEa3dMamMxTlRVeE9USWdNVFU1TGpjeU1UUTNOeXc1Tmk0NE1EYzBNVFUySUVNeE5qTXVNalkwTkRVekxERXdNaTQ1TWpjeU9EUWdNVFkyTGpVeE9UQTFNU3d4TURndU9Ua3dORFF4SURFMk9TNDBOakl6TkRjc01URTBMamt6TmprMk1pQkRNVFkyTGpVeU56a3NNVEl3TGprNE5UWTBJREUyTXk0eU9EQTFOREVzTVRJM0xqRXdPVGt6TXlBeE5Ua3VOelV6TWpVc01UTXpMakl5TmprNE5TQk1NVFU1TGpjMU16STFMREV6TXk0eU1qWTVPRFVnVERFMU9TNDNOVE15TlN3eE16TXVNakkyT1RnMUlGb2dUVEUzT1M0Mk5qVTNORGNzTWpVdU5ETTFNRGs0TWlCRE1UZzNMakl6TWpNeU55d3lPUzQzT1RnMU5qQTVJREU1TUM0eE56UTRNVGdzTkRjdU16azJNems1TVNBeE9EVXVOREl3T0RJc056QXVORGN5TlRrM0lFTXhPRFV1TVRFM05UWXhMRGN4TGprME5UQTBPVFVnTVRnMExqYzNOakE1TlN3M015NDBORFE0TlRFMUlERTROQzQwTURVeU5qWXNOelF1T1RZME56WXpOU0JETVRjMUxqQXpNRGM1T1N3M01pNDRNREUzTXpRMUlERTJOQzQ0TlRFeE1qa3NOekV1TVRreU1UTXlJREUxTkM0eE9UTXlORFVzTnpBdU1Ua3lNall6T1NCRE1UUTNMams0TkRRNUxEWXhMak0xTURjeE1UY2dNVFF4TGpVMU1EVXdOQ3cxTXk0ek1USTNOVFF4SURFek5TNHdPVEl6T0RZc05EWXVNelV6T0RrM09DQkRNVE0yTGpneU9EWTRNaXcwTkM0Mk9ETTFOak16SURFek9DNDFOakkxTmpRc05ETXVNRGt3T0RVek1TQXhOREF1TWpnNU1qQTJMRFF4TGpVNE56Z3pNelVnUXpFMU5pNDVOekE0TXpRc01qY3VNRGN3TkRReE5TQXhOekl1TlRZeU1EazVMREl4TGpNek9EWTVOaUF4TnprdU5qWTFOelEzTERJMUxqUXpOVEE1T0RJZ1RERTNPUzQyTmpVM05EY3NNalV1TkRNMU1EazRNaUJNTVRjNUxqWTJOVGMwTnl3eU5TNDBNelV3T1RneUlGb2lJR1pwYkd3OUlpTkdSa1pHUmtZaVBqd3ZjR0YwYUQ0S0lDQWdJRHh3WVhSb0lHUTlJazB4TWpndU1qSXhNakVzT1RRdU5qWTFNekF3T0NCRE1UTTVMak0yTkRVMUxEazBMalkyTlRNd01EZ2dNVFE0TGpNNU9ETTFNeXd4TURNdU5qazROekF5SURFME9DNHpPVGd6TlRNc01URTBMamcwTWpRME5DQkRNVFE0TGpNNU9ETTFNeXd4TWpVdU9UZzFOemcwSURFek9TNHpOalExTlN3eE16VXVNREU1TlRnNUlERXlPQzR5TWpFeU1Td3hNelV1TURFNU5UZzVJRU14TVRjdU1EYzNPRGNzTVRNMUxqQXhPVFU0T1NBeE1EZ3VNRFEwTURZMkxERXlOUzQ1T0RVM09EUWdNVEE0TGpBME5EQTJOaXd4TVRRdU9EUXlORFEwSUVNeE1EZ3VNRFEwTURZMkxERXdNeTQyT1RnM01ESWdNVEUzTGpBM056ZzNMRGswTGpZMk5UTXdNRGdnTVRJNExqSXlNVEl4TERrMExqWTJOVE13TURnaUlHWnBiR3c5SWlNMU0wTXhSRVVpUGp3dmNHRjBhRDRLUEM5emRtYytDZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9yZWFjdC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJeU9UWndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUF5T1RZaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcGJsbE5hVzRnYldWbGRDSStDaUFnSUNBOFpHVm1jejRLSUNBZ0lDQWdJQ0E4Y21Ga2FXRnNSM0poWkdsbGJuUWdZM2c5SWpVd0pTSWdZM2s5SWpVd0pTSWdabmc5SWpVd0pTSWdabms5SWpVd0pTSWdjajBpTlRBbElpQnBaRDBpY21Ga2FXRnNSM0poWkdsbGJuUXRNU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lEeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTTVNMEkwUlRjaUlHOW1abk5sZEQwaU1DVWlQand2YzNSdmNENEtJQ0FnSUNBZ0lDQWdJQ0FnUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSTBJNVJERkdPQ0lnYjJabWMyVjBQU0kxT1M0eU56TXpOVGM0SlNJK1BDOXpkRzl3UGdvZ0lDQWdJQ0FnSUNBZ0lDQThjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpPVU5DTmtVd0lpQnZabVp6WlhROUlqRXdNQ1VpUGp3dmMzUnZjRDRLSUNBZ0lDQWdJQ0E4TDNKaFpHbGhiRWR5WVdScFpXNTBQZ29nSUNBZ1BDOWtaV1p6UGdvZ0lDQWdQR2MrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFeU9DNHdNekl6TkRJc01DNDBOVFUxTVRZd01UUWdUREF1TWprM09UQTNORGN6TERjMExqSXdNekV3TXpJZ1REQXVNamszT1RBM05EY3pMREl5TVM0Mk9UZ3lOemdnVERFeU9DNHdNekl6TkRJc01qazFMalEwTmpNeUlFd3lOVFV1TnpZM01qTXhMREl5TVM0Mk9UZ3lOemdnVERJMU5TNDNOamN5TXpFc056UXVNakF6TVRBek1pQk1NVEk0TGpBek1qTTBNaXd3TGpRMU5UVXhOakF4TkNCYUlpQm1hV3hzUFNKMWNtd29JM0poWkdsaGJFZHlZV1JwWlc1MExURXBJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEV5T0M0d016TTNNRGdzTnpVdU1qWXlOak16TlNCTU5qUXVOamt3TVRBMk9Dd3hNVEV1T0RNME1Ua3lJRXcyTkM0Mk9UQXhNRFk0TERFNE5DNDVOemMzTmpVZ1RERXlPQzR3TXpNM01EZ3NNakl4TGpVME9UYzNPU0JNTVRreExqTTNPREl5TVN3eE9EUXVPVGMzTnpZMUlFd3hPVEV1TXpjNE1qSXhMREV4TVM0NE16UXhPVElnVERFeU9DNHdNek0zTURnc056VXVNall5TmpNek5TQmFJaUJtYVd4c1BTSWpOa1k1TlVSQ0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BHY2dabWxzYkQwaUkwWkdSa1pHUmlJZ1ptbHNiQzF2Y0dGamFYUjVQU0l3TGpFaVBnb2dJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTVRJNExEQWdUREFzTnpRdU1qUTVNVEV3TXlCTU1USTRMREUwTXk0NU5ETXdOaUJNTWpVMkxEYzBMamN3TkRZeU5qTWdUREV5T0N3d0lGb2lQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThMMmMrQ2lBZ0lDQWdJQ0FnUEdjZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NQzR3TURBd01EQXNJREUxTXk0MU1EZzRPVGNwSWlCbWFXeHNQU0lqUmtaR1JrWkdJaUJtYVd4c0xXOXdZV05wZEhrOUlqQXVNU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHhNamdzTUNCTU1DdzJOeTQ0TnpFNE9EWXhJRXd4TWpnc01UUXhMalkyTlRRNElFd3lOVFV1TlRRME5EZzBMRFkzTGpReE5qTTNNREVnVERFeU9Dd3dJRm9pUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvd2VicGFjay5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0ZjRmNDsgfVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbmhlYWRlciBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7IH1cXG5cXG5saSBhIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjODg4OyB9XFxuXFxuaW1nIHtcXG4gIG1hcmdpbjogMCAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxuLy8gXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KCkge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCgpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fRm9vdGVyLnNjc3MnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2hidG5zLmNvbS9naXRodWItYnRuLmh0bWw/dXNlcj1kYXJ1bDc1JnJlcG89d2ViLXJlYWN0JnR5cGU9c3RhciZjb3VudD10cnVlJnY9MicgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nMCcgd2lkdGg9JzE3MHB4JyBoZWlnaHQ9JzIwcHgnPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2hidG5zLmNvbS9naXRodWItYnRuLmh0bWw/dXNlcj1kYXJ1bDc1JnJlcG89d2ViLXJlYWN0JnR5cGU9Zm9yayZjb3VudD10cnVlJnY9MicgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nMCcgd2lkdGg9JzE3MHB4JyBoZWlnaHQ9JzIwcHgnPjwvaWZyYW1lPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Gb290ZXIucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0Zvb3Rlcic7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjRmNGY0OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL2ltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IFJlY29yZGVyQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1JlY29yZGVyQWN0aW9ucyc7XHJcbmltcG9ydCBSZWNvcmRlclN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9SZWNvcmRlclN0b3JlJztcclxuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcclxuaW1wb3J0IG1ha2VGaW5hbFN0b3JlIGZyb20gJ2FsdC91dGlscy9tYWtlRmluYWxTdG9yZSc7XHJcblxyXG5pbXBvcnQgYWx0IGZyb20gJy4uLy4uL2FsdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX1JlY29yZGVyLnNjc3MnKTtcclxufVxyXG5cclxuY29uc3QgRmluYWxTdG9yZSA9IG1ha2VGaW5hbFN0b3JlKGFsdCk7XHJcblxyXG5sZXQgcmVjb3JkcyA9IGNsYXNzIFJlY29yZHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICByZWNvcmQ6IHRydWVcclxuICAgIH07XHJcbiAgICBSZWNvcmRlckFjdGlvbnMucmVjb3JkU3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBzaG93U3RhcnRDbGFzcyA9IHRoaXMuc3RhdGUucmVjb3JkID8gJ2hpZGRlbicgOiAnJztcclxuICAgIGxldCBzaG93U3RvcENsYXNzID0gIXRoaXMuc3RhdGUucmVjb3JkID8gJ2hpZGRlbicgOiAnJztcclxuICAgIGxldCByZWNvcmRzTWFya3VwID0gW107XHJcbiAgICBjb25zdCByZWNzID0gUmVjb3Jkcy5nZXRQcm9wc0Zyb21TdG9yZXMoKS5yZWNvcmRzO1xyXG4gICAgcmVjcy5mb3JFYWNoKChyZWNvcmQsIGlkeCkgPT4ge1xyXG4gICAgICByZWNvcmRzTWFya3VwLnB1c2goPGRpdiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICA8c3Bhbj5hOiB7cmVjb3JkLmFjdGlvbi50b1N0cmluZygpfSAtIGQ6IHtKU09OLnN0cmluZ2lmeShyZWNvcmQuZGF0YSl9PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrUmVwbGF5LmJpbmQodGhpcywgcmVjb3JkKX0+ZG88L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD0ncmVjb3JkZXInPlxyXG4gICAgICAgIDxoND5SZWNvcmRlcjwvaDQ+XHJcbiAgICAgICAgPGRpdiBpZD0ncmVjb3JkZXItYWN0aW9ucyc+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c2hvd1N0YXJ0Q2xhc3N9IG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tTdGFydC5iaW5kKHRoaXMpfT5TVEFSVDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3Nob3dTdG9wQ2xhc3N9IG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tTdG9wLmJpbmQodGhpcyl9PlNUT1A8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzaG93U3RvcENsYXNzfSBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrUmVwbGF5LmJpbmQodGhpcyl9PlJFUExBWTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrQ2xlYXIuYmluZCh0aGlzKX0+Q0xFQVI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cmVjb3Jkc01hcmt1cH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2tDbGVhcigpIHtcclxuICAgIFJlY29yZGVyQWN0aW9ucy5yZWNvcmRDbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2tTdGFydCgpIHtcclxuICAgIFJlY29yZGVyQWN0aW9ucy5yZWNvcmRTdGFydCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVjb3JkOiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBfb25DbGlja1N0b3AoKSB7XHJcbiAgICBSZWNvcmRlckFjdGlvbnMucmVjb3JkU3RvcCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVjb3JkOiBmYWxzZX0pO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2tSZXBsYXkoKSB7XHJcbiAgICBSZWNvcmRlckFjdGlvbnMucmVwbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIFtGaW5hbFN0b3JlLCBSZWNvcmRlclN0b3JlXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWNvcmRzOiBSZWNvcmRlclN0b3JlLmdldFN0YXRlKCkuZ2V0KCdyZWNvcmRzJykudG9KUygpXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbnJlY29yZHMucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1JlY29yZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFRvU3RvcmVzKHJlY29yZHMpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9SZWNvcmRlci9SZWNvcmRlci5qc1xuICoqLyIsIi8vIERFUEVOREVOQ1lcclxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5cclxuY2xhc3MgUmVjb3JkZXJBY3Rpb25zIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxyXG4gICAgICAncmVjb3JkQ2xlYXInLFxyXG4gICAgICAncmVjb3JkU3RhcnQnLFxyXG4gICAgICAncmVjb3JkU3RvcCcsXHJcbiAgICAgICdyZXBsYXknXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhbHQuY3JlYXRlQWN0aW9ucyhSZWNvcmRlckFjdGlvbnMpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvYWN0aW9ucy9SZWNvcmRlckFjdGlvbnMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBBbHQgZnJvbSAnYWx0JztcclxuXHJcbi8vIGNyZWF0ZSBhbHQgaW5zdGFuY2VcclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsdCgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvYWx0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbHRcIlxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBJbW11dGFibGUsIHtNYXAsIExpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBSZWNvcmRlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9SZWNvcmRlckFjdGlvbnMnO1xyXG5cclxuLy8gREVQRU5ERU5DWVxyXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbmltcG9ydCBpbW11dGFibGUgZnJvbSAnYWx0L3V0aWxzL0ltbXV0YWJsZVV0aWwnO1xyXG5pbXBvcnQgRGlzcGF0Y2hlclJlY29yZGVyIGZyb20gJ2FsdC91dGlscy9EaXNwYXRjaGVyUmVjb3JkZXInO1xyXG5cclxuLy8gd2VicGFjayBob3QgcmVsb2FkXHJcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcclxuXHJcbmxldCByZWNvcmRlclN0b3JlID0gbWFrZUhvdChhbHQsIGltbXV0YWJsZShjbGFzcyBSZWNvcmRlclN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoUmVjb3JkZXJBY3Rpb25zKTtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgTWFwKHtcclxuICAgICAgcmVjb3JkczogbmV3IExpc3QoKSxcclxuICAgICAgZGlzcGF0Y2hUb2tlbjogJydcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZWNvcmRlciA9IG5ldyBEaXNwYXRjaGVyUmVjb3JkZXIoYWx0KTtcclxuICB9XHJcblxyXG4gIG9uUmVjb3JkQ2xlYXIoKSB7XHJcbiAgICB0aGlzLnJlY29yZGVyLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBvblJlY29yZFN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWNvcmRlci5yZWNvcmQoKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBkaXNwYXRjaFRva2VuID0gYWx0LmRpc3BhdGNoZXIucmVnaXN0ZXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCBkdW1wRXZlbnRzID0gc2VsZi5yZWNvcmRlci5zZXJpYWxpemVFdmVudHMoKTtcclxuICAgICAgLy9zZWxmLnNldFN0YXRlKHNlbGYuc3RhdGUuc2V0KCdyZWNvcmRzJywgSW1tdXRhYmxlLmZyb21KUyhbcGF5bG9hZF0gLypKU09OLnBhcnNlKGR1bXBFdmVudHMpKi8pKSk7XHJcbiAgICAgIHNlbGYuc2V0U3RhdGUoc2VsZi5zdGF0ZS5zZXQoJ3JlY29yZHMnLCBJbW11dGFibGUuZnJvbUpTKHNlbGYucmVjb3JkZXIuZXZlbnRzKSkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuc2V0KCdkaXNwYXRjaFRva2VuJywgZGlzcGF0Y2hUb2tlbikpO1xyXG4gIH1cclxuXHJcbiAgb25SZWNvcmRTdG9wKCkge1xyXG4gICAgdGhpcy5yZWNvcmRlci5zdG9wKCk7XHJcbiAgICBhbHQuZGlzcGF0Y2hlci51bnJlZ2lzdGVyKHRoaXMuc3RhdGUuZ2V0KCdkaXNwYXRjaFRva2VuJykpO1xyXG4gIH1cclxuXHJcbiAgb25SZXBsYXkoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZWNvcmRlci5yZXBsYXkoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbn0pLCAnUmVjb3JkZXJTdG9yZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZWNvcmRlclN0b3JlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvc3RvcmVzL1JlY29yZGVyU3RvcmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW1tdXRhYmxlID0gcmVxdWlyZSgnaW1tdXRhYmxlJyk7XG5cbnZhciBfaW1tdXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltbXV0YWJsZSk7XG5cbmZ1bmN0aW9uIGltbXV0YWJsZShTdG9yZU1vZGVsKSB7XG4gIFN0b3JlTW9kZWwuY29uZmlnID0ge1xuICAgIHNldFN0YXRlOiBmdW5jdGlvbiBzZXRTdGF0ZShjdXJyZW50U3RhdGUsIG5leHRTdGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH0sXG5cbiAgICBnZXRTdGF0ZTogZnVuY3Rpb24gZ2V0U3RhdGUoY3VycmVudFN0YXRlKSB7XG4gICAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICAgIH0sXG5cbiAgICBvblNlcmlhbGl6ZTogZnVuY3Rpb24gb25TZXJpYWxpemUoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS50b0pTKCk7XG4gICAgfSxcblxuICAgIG9uRGVzZXJpYWxpemU6IGZ1bmN0aW9uIG9uRGVzZXJpYWxpemUoZGF0YSkge1xuICAgICAgcmV0dXJuIF9pbW11dGFibGUyWydkZWZhdWx0J10uZnJvbUpTKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3RvcmVNb2RlbDtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gaW1tdXRhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL0ltbXV0YWJsZVV0aWwuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tdXRhYmxlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpbW11dGFibGVcIlxuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIERpc3BhdGNoZXJSZWNvcmRlcihhbHQ6IEFsdEluc3RhbmNlKTogRGlzcGF0Y2hlckluc3RhbmNlXG4gKlxuICogPiBSZWNvcmQgYW5kIHJlcGxheSB5b3VyIGFjdGlvbnMgYXQgYW55IHBvaW50IGluIHRpbWUuXG4gKlxuICogVGhpcyB1dGlsIGFsbG93cyB5b3UgdG8gcmVjb3JkIGEgc2V0IG9mIGRpc3BhdGNoZXMgd2hpY2ggeW91IGNhbiBsYXRlclxuICogcmVwbGF5IGF0IHlvdXIgY29udmVuaWVuY2UuXG4gKlxuICogR29vZCBmb3I6IERlYnVnZ2luZywgcmVwZWF0aW5nLCBsb2dnaW5nLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgRGlzcGF0Y2hlclJlY29yZGVyKGFsdCk7XG4gKlxuICogLy8gc3RhcnQgcmVjb3JkaW5nXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcbiAqXG4gKiAvLyBjYWxsIGEgc2VyaWVzIG9mIGFjdGlvbnNcbiAqXG4gKiAvLyBzdG9wIHJlY29yZGluZ1xuICogcmVjb3JkZXIuc3RvcCgpO1xuICpcbiAqIC8vIHJlcGxheSB0aGUgZXZlbnRzIHRoYXQgdG9vayBwbGFjZVxuICogcmVjb3JkZXIucmVwbGF5KCk7XG4gKiBgYGBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIERpc3BhdGNoZXJSZWNvcmRlcihhbHQpIHtcbiAgdmFyIG1heEV2ZW50cyA9IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gSW5maW5pdHkgOiBhcmd1bWVudHNbMV07XG5cbiAgdGhpcy5hbHQgPSBhbHQ7XG4gIHRoaXMuZXZlbnRzID0gW107XG4gIHRoaXMuZGlzcGF0Y2hUb2tlbiA9IG51bGw7XG4gIHRoaXMubWF4RXZlbnRzID0gbWF4RXZlbnRzO1xufVxuXG4vKipcbiAqIElmIHJlY29yZGluZyBzdGFydGVkIHlvdSBnZXQgdHJ1ZSwgb3RoZXJ3aXNlIGZhbHNlIHNpbmNlIHRoZXJlJ3MgYSByZWNvcmRpbmdcbiAqIGluIHByb2dyZXNzLlxuICogcmVjb3JkKCk6IGJvb2xlYW5cbiAqL1xuRGlzcGF0Y2hlclJlY29yZGVyLnByb3RvdHlwZS5yZWNvcmQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKHRoaXMuZGlzcGF0Y2hUb2tlbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuZGlzcGF0Y2hUb2tlbiA9IHRoaXMuYWx0LmRpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICBpZiAoX3RoaXMuZXZlbnRzLmxlbmd0aCA8IF90aGlzLm1heEV2ZW50cykge1xuICAgICAgX3RoaXMuZXZlbnRzLnB1c2gocGF5bG9hZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogU3RvcHMgdGhlIHJlY29yZGluZyBpbiBwcm9ncmVzcy5cbiAqIHN0b3AoKTogdW5kZWZpbmVkXG4gKi9cbkRpc3BhdGNoZXJSZWNvcmRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hbHQuZGlzcGF0Y2hlci51bnJlZ2lzdGVyKHRoaXMuZGlzcGF0Y2hUb2tlbik7XG4gIHRoaXMuZGlzcGF0Y2hUb2tlbiA9IG51bGw7XG59O1xuXG4vKipcbiAqIENsZWFyIGFsbCBldmVudHMgZnJvbSBtZW1vcnkuXG4gKiBjbGVhcigpOiB1bmRlZmluZWRcbiAqL1xuRGlzcGF0Y2hlclJlY29yZGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5ldmVudHMgPSBbXTtcbn07XG5cbi8qKlxuICogKEFzfFMpeW5jaHJvbm91c2x5IHJlcGxheSBhbGwgZXZlbnRzIHRoYXQgd2VyZSByZWNvcmRlZC5cbiAqIHJlcGxheShyZXBsYXlUaW1lOiA/bnVtYmVyLCBkb25lOiA/ZnVuY3Rpb24pOiB1bmRlZmluZWRcbiAqL1xuRGlzcGF0Y2hlclJlY29yZGVyLnByb3RvdHlwZS5yZXBsYXkgPSBmdW5jdGlvbiAocmVwbGF5VGltZSwgZG9uZSkge1xuICB2YXIgYWx0ID0gdGhpcy5hbHQ7XG5cbiAgaWYgKHJlcGxheVRpbWUgPT09IHZvaWQgMCkge1xuICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgIGFsdC5kaXNwYXRjaChwYXlsb2FkLmFjdGlvbiwgcGF5bG9hZC5kYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBvbk5leHQgPSBmdW5jdGlvbiBvbk5leHQocGF5bG9hZCwgbmV4dEFjdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWx0LmRpc3BhdGNoKHBheWxvYWQuYWN0aW9uLCBwYXlsb2FkLmRhdGEpO1xuICAgICAgICBuZXh0QWN0aW9uKCk7XG4gICAgICB9LCByZXBsYXlUaW1lKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBuZXh0ID0gZG9uZSB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgdmFyIGkgPSB0aGlzLmV2ZW50cy5sZW5ndGggLSAxO1xuICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgdmFyIF9ldmVudCA9IHRoaXMuZXZlbnRzW2ldO1xuICAgIG5leHQgPSBvbk5leHQoX2V2ZW50LCBuZXh0KTtcbiAgICBpIC09IDE7XG4gIH1cblxuICBuZXh0KCk7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSBhbGwgdGhlIGV2ZW50cyBzbyB5b3UgY2FuIHBhc3MgdGhlbSBhcm91bmQgb3IgbG9hZCB0aGVtIGludG9cbiAqIGEgc2VwYXJhdGUgcmVjb3JkZXIuXG4gKiBzZXJpYWxpemVFdmVudHMoKTogc3RyaW5nXG4gKi9cbkRpc3BhdGNoZXJSZWNvcmRlci5wcm90b3R5cGUuc2VyaWFsaXplRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHMubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZXZlbnQuaWQsXG4gICAgICBhY3Rpb246IGV2ZW50LmFjdGlvbixcbiAgICAgIGRhdGE6IGV2ZW50LmRhdGEgfHwge31cbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2ZW50cyk7XG59O1xuXG4vKipcbiAqIExvYWQgc2VyaWFsaXplZCBldmVudHMgaW50byB0aGUgcmVjb3JkZXIgYW5kIG92ZXJ3cml0ZSB0aGUgY3VycmVudCBldmVudHNcbiAqIGxvYWRFdmVudHMoZXZlbnRzOiBzdHJpbmcpOiB1bmRlZmluZWRcbiAqL1xuRGlzcGF0Y2hlclJlY29yZGVyLnByb3RvdHlwZS5sb2FkRXZlbnRzID0gZnVuY3Rpb24gKGV2ZW50cykge1xuICB2YXIgcGFyc2VkRXZlbnRzID0gSlNPTi5wYXJzZShldmVudHMpO1xuICB0aGlzLmV2ZW50cyA9IHBhcnNlZEV2ZW50cy5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbjogZXZlbnQuYWN0aW9uLFxuICAgICAgZGF0YTogZXZlbnQuZGF0YVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcGFyc2VkRXZlbnRzO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEaXNwYXRjaGVyUmVjb3JkZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9EaXNwYXRjaGVyUmVjb3JkZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBtYWtlSG90KGFsdCwgU3RvcmUpIHtcbiAgdmFyIG5hbWUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFN0b3JlLmRpc3BsYXlOYW1lIDogYXJndW1lbnRzWzJdO1xuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIGFsdC5zdG9yZXNbbmFtZV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWx0LmNyZWF0ZVN0b3JlKFN0b3JlLCBuYW1lKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtYWtlSG90O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvbWFrZUhvdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqICdIaWdoZXIgT3JkZXIgQ29tcG9uZW50JyB0aGF0IGNvbnRyb2xzIHRoZSBwcm9wcyBvZiBhIHdyYXBwZWRcbiAqIGNvbXBvbmVudCB2aWEgc3RvcmVzLlxuICpcbiAqIEV4cGVjdHMgdGhlIENvbXBvbmVudCB0byBoYXZlIHR3byBzdGF0aWMgbWV0aG9kczpcbiAqICAgLSBnZXRTdG9yZXMoKTogU2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiBzdG9yZXMuXG4gKiAgIC0gZ2V0UHJvcHNGcm9tU3RvcmVzKHByb3BzKTogU2hvdWxkIHJldHVybiB0aGUgcHJvcHMgZnJvbSB0aGUgc3RvcmVzLlxuICpcbiAqIEV4YW1wbGUgdXNpbmcgb2xkIFJlYWN0LmNyZWF0ZUNsYXNzKCkgc3R5bGU6XG4gKlxuICogICAgY29uc3QgTXlDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgIHN0YXRpY3M6IHtcbiAqICAgICAgICBnZXRTdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICAgIHJldHVybiBbbXlTdG9yZV1cbiAqICAgICAgICB9LFxuICogICAgICAgIGdldFByb3BzRnJvbVN0b3Jlcyhwcm9wcykge1xuICogICAgICAgICAgcmV0dXJuIG15U3RvcmUuZ2V0U3RhdGUoKVxuICogICAgICAgIH1cbiAqICAgICAgfSxcbiAqICAgICAgcmVuZGVyKCkge1xuICogICAgICAgIC8vIFVzZSB0aGlzLnByb3BzIGxpa2Ugbm9ybWFsIC4uLlxuICogICAgICB9XG4gKiAgICB9KVxuICogICAgTXlDb21wb25lbnQgPSBjb25uZWN0VG9TdG9yZXMoTXlDb21wb25lbnQpXG4gKlxuICpcbiAqIEV4YW1wbGUgdXNpbmcgRVM2IENsYXNzOlxuICpcbiAqICAgIGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAqICAgICAgc3RhdGljIGdldFN0b3Jlcyhwcm9wcykge1xuICogICAgICAgIHJldHVybiBbbXlTdG9yZV1cbiAqICAgICAgfVxuICogICAgICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgcmV0dXJuIG15U3RvcmUuZ2V0U3RhdGUoKVxuICogICAgICB9XG4gKiAgICAgIHJlbmRlcigpIHtcbiAqICAgICAgICAvLyBVc2UgdGhpcy5wcm9wcyBsaWtlIG5vcm1hbCAuLi5cbiAqICAgICAgfVxuICogICAgfVxuICogICAgTXlDb21wb25lbnQgPSBjb25uZWN0VG9TdG9yZXMoTXlDb21wb25lbnQpXG4gKlxuICogQSBncmVhdCBleHBsYW5hdGlvbiBvZiB0aGUgbWVyaXRzIG9mIGhpZ2hlciBvcmRlciBjb21wb25lbnRzIGNhbiBiZSBmb3VuZCBhdFxuICogaHR0cDovL2JpdC5seS8xYWJQa3JQXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZnVuY3Rpb25zID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gY29ubmVjdFRvU3RvcmVzKFNwZWMpIHtcbiAgdmFyIENvbXBvbmVudCA9IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gU3BlYyA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIHN0YXRpYyBtZXRob2RzLlxuICAgIGlmICghKDAsIF9mdW5jdGlvbnMuaXNGdW5jdGlvbikoU3BlYy5nZXRTdG9yZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3RUb1N0b3JlcygpIGV4cGVjdHMgdGhlIHdyYXBwZWQgY29tcG9uZW50IHRvIGhhdmUgYSBzdGF0aWMgZ2V0U3RvcmVzKCkgbWV0aG9kJyk7XG4gICAgfVxuICAgIGlmICghKDAsIF9mdW5jdGlvbnMuaXNGdW5jdGlvbikoU3BlYy5nZXRQcm9wc0Zyb21TdG9yZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3RUb1N0b3JlcygpIGV4cGVjdHMgdGhlIHdyYXBwZWQgY29tcG9uZW50IHRvIGhhdmUgYSBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkgbWV0aG9kJyk7XG4gICAgfVxuXG4gICAgdmFyIFN0b3JlQ29ubmVjdGlvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gICAgICBkaXNwbGF5TmFtZTogJ1N0b3JlQ29ubmVjdGlvbicsXG5cbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gU3BlYy5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIH0sXG5cbiAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU3BlYy5nZXRQcm9wc0Zyb21TdG9yZXMobmV4dFByb3BzLCB0aGlzLmNvbnRleHQpKTtcbiAgICAgIH0sXG5cbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgc3RvcmVzID0gU3BlYy5nZXRTdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5zdG9yZUxpc3RlbmVycyA9IHN0b3Jlcy5tYXAoZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3JlLmxpc3RlbihfdGhpcy5vbkNoYW5nZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoU3BlYy5jb21wb25lbnREaWRDb25uZWN0KSB7XG4gICAgICAgICAgU3BlYy5jb21wb25lbnREaWRDb25uZWN0KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdG9yZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uICh1bmxpc3Rlbikge1xuICAgICAgICAgIHJldHVybiB1bmxpc3RlbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTcGVjLmdldFByb3BzRnJvbVN0b3Jlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2Z1bmN0aW9ucy5hc3NpZ24pKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gU3RvcmVDb25uZWN0aW9uO1xuICB9KSgpO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjb25uZWN0VG9TdG9yZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzUHJvbWlzZSA9IGlzUHJvbWlzZTtcbmV4cG9ydHMuZWFjaE9iamVjdCA9IGVhY2hPYmplY3Q7XG5leHBvcnRzLmFzc2lnbiA9IGFzc2lnbjtcbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGVhY2hPYmplY3QoZiwgbykge1xuICBvLmZvckVhY2goZnVuY3Rpb24gKGZyb20pIHtcbiAgICBPYmplY3Qua2V5cyhPYmplY3QoZnJvbSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZihrZXksIGZyb21ba2V5XSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzb3VyY2UgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc291cmNlW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGVhY2hPYmplY3QoZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgfSwgc291cmNlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvZnVuY3Rpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogbWFrZUZpbmFsU3RvcmUoYWx0OiBBbHRJbnN0YW5jZSk6IEFsdFN0b3JlXG4gKlxuICogPiBDcmVhdGVzIGEgYEZpbmFsU3RvcmVgIHdoaWNoIGlzIGEgc3RvcmUgbGlrZSBhbnkgb3RoZXIgZXhjZXB0IHRoYXQgaXRcbiAqIHdhaXRzIGZvciBhbGwgb3RoZXIgc3RvcmVzIGluIHlvdXIgYWx0IGluc3RhbmNlIHRvIGVtaXQgYSBjaGFuZ2UgYmVmb3JlIGl0XG4gKiBlbWl0cyBhIGNoYW5nZSBpdHNlbGYuXG4gKlxuICogV2FudCB0byBrbm93IHdoZW4gYSBwYXJ0aWN1bGFyIGRpc3BhdGNoIGhhcyBjb21wbGV0ZWQ/IFRoaXMgaXMgdGhlIHV0aWxcbiAqIHlvdSB3YW50LlxuICpcbiAqIEdvb2QgZm9yOiB0YWtpbmcgYSBzbmFwc2hvdCBhbmQgcGVyc2lzdGluZyBpdCBzb21ld2hlcmUsIHNhdmluZyBkYXRhIGZyb21cbiAqIGEgc2V0IG9mIHN0b3Jlcywgc3luY2luZyBkYXRhLCBldGMuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogYGBganNcbiAqIHZhciBGaW5hbFN0b3JlID0gbWFrZUZpbmFsU3RvcmUoYWx0KTtcbiAqXG4gKiBGaW5hbFN0b3JlLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gKiAgIC8vIGFsbCBzdG9yZXMgaGF2ZSBub3cgY2hhbmdlZFxuICogfSk7XG4gKiBgYGBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbWFrZUZpbmFsU3RvcmU7XG5mdW5jdGlvbiBGaW5hbFN0b3JlKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgIHZhciBzdG9yZXMgPSBPYmplY3Qua2V5cyhfdGhpcy5hbHQuc3RvcmVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgc3RvcmUpIHtcbiAgICAgIGFyci5wdXNoKF90aGlzLmFsdC5zdG9yZXNbc3RvcmVdLmRpc3BhdGNoVG9rZW4pO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9LCBbXSk7XG5cbiAgICBfdGhpcy53YWl0Rm9yKHN0b3Jlcyk7XG4gICAgX3RoaXMuc2V0U3RhdGUoeyBwYXlsb2FkOiBwYXlsb2FkIH0pO1xuICAgIF90aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGaW5hbFN0b3JlKGFsdCkge1xuICByZXR1cm4gYWx0LkZpbmFsU3RvcmUgPyBhbHQuRmluYWxTdG9yZSA6IGFsdC5GaW5hbFN0b3JlID0gYWx0LmNyZWF0ZVVuc2F2ZWRTdG9yZShGaW5hbFN0b3JlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvbWFrZUZpbmFsU3RvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fUmVjb3JkZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX1JlY29yZGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX1JlY29yZGVyLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvUmVjb3JkZXIvX1JlY29yZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYjcmVjb3JkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyMDBweDtcXG4gIHJpZ2h0OiAxMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICBkaXYjcmVjb3JkZXIgZGl2I3JlY29yZGVyLWFjdGlvbnMgYnV0dG9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgZGl2I3JlY29yZGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9SZWNvcmRlci9fUmVjb3JkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbi8vIFRPRE86IGRvIGl0IGluIHN0b3JlIG1heWJlXHJcbmNvbnN0IG1ldGFzID0gcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy5qc29uJykuaGVsbWV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbEhlYWRlclRhZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIERPTSA8aGVhZD4gaW5zdHJ1bWVudGF0aW9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWxtZXRcclxuICAgICAgICAgIHRpdGxlPXttZXRhcy50aXRsZX1cclxuICAgICAgICAgICAgbWV0YT17bWV0YXMubWV0YX1cclxuICAgICAgICAgICAgbGluaz17bWV0YXMubGlua31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5IdG1sSGVhZGVyVGFncy5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSHRtbEhlYWRlclRhZ3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlbG1ldFwiOiB7XG5cdFx0XCJ0aXRsZVwiOiBcIndlYi1yZWFjdFwiLFxuXHRcdFwibWV0YVwiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG5cdFx0XHRcdFwiY29udGVudFwiOiBcIldlYnBhY2sgTm9kZSBSZWFjdCBTdGFydGVyIEtpdFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJ2aWV3cG9ydFwiLFxuXHRcdFx0XHRcImNvbnRlbnRcIjogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRcImxpbmtcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInJlbFwiOiBcInNob3J0Y3V0IGljb25cIixcblx0XHRcdFx0XCJocmVmXCI6IFwiL2Zhdmljb24uaWNvXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImltYWdlL3gtaWNvblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInJlbFwiOiBcImljb25cIixcblx0XHRcdFx0XCJocmVmXCI6IFwiL2Zhdmljb24uaWNvXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImltYWdlL3gtaWNvblwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fzc2V0cy9jb25maWcuanNvblxuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogNzUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250OiAxMDAlIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXFxuaDEsIGgyLCBoMyB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcblxcbmRpdi5tYWluLWNvbnRlbnQge1xcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4OyB9XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiAjNTNDMURFO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzUzQzFERTsgfVxcblxcbmlucHV0IHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7IH1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogM3B4OyB9XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogIzUzQzFERTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1M0MxREU7IH1cXG5cXG5sYWJlbCB7XFxuICBsaW5lLWhlaWdodDogMjVweDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP2luZGVudGVkU3ludGF4IS4vX0FwcC5zYXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9fQXBwLnNhc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP2luZGVudGVkU3ludGF4IS4vX0FwcC5zYXNzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3NcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMSB7XFxuICBjb2xvcjogIzVhODg5NDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXI/aW5kZW50ZWRTeW50YXghLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zYXNzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS4vYXBwL2ltYWdlcy9mYXZpY29uLmljb1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbi8vIFRPRE86IGRvIGl0IGluIHN0b3JlIG1heWJlXHJcbmNvbnN0IG1ldGFzID0gcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy5qc29uJykuaGVsbWV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+Q09OVEFDVCBQQUdFPC9oMT5cclxuICAgICAgICA8SGVsbWV0IHRpdGxlPXttZXRhcy50aXRsZX0gdGl0bGVUZW1wbGF0ZT0nJXMgfCBDb250YWN0IHBhZ2UnIC8+XHJcbiAgICAgICAgPHA+dGVzdCB0aGUgNDA0IHBhZ2UgPGEgaHJlZj0nL21pZGRsZW9mbm93aGVyZSc+aGVyZTwvYT48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24vQ29udGFjdC5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XHJcbmltcG9ydCBBcHBTdG9yZURlcGVuZGluZyBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmVEZXBlbmRpbmcnO1xyXG5pbXBvcnQgSG9tZVNlY3Rpb25BY3Rpb25zIGZyb20gJy4vSG9tZVNlY3Rpb25BY3Rpb25zJztcclxuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgSG9tZVNlY3Rpb25TdWJQYXJ0T25lIGZyb20gJy4vSG9tZVNlY3Rpb25TdWJQYXJ0T25lJztcclxuaW1wb3J0IEhvbWVTZWN0aW9uU3ViUGFydFR3byBmcm9tICcuL0hvbWVTZWN0aW9uU3ViUGFydFR3byc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX0hvbWVTZWN0aW9uLnNjc3MnKTtcclxufVxyXG5cclxubGV0IGhvbWVTZWN0aW9uID0gY2xhc3MgSG9tZVNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIHJldHJpZXZlIGRhdGEgZnJvbSBzdG9yZVxyXG4gICAgbGV0IHN0b3JlUHJvcHMgPSBIb21lU2VjdGlvbi5nZXRQcm9wc0Zyb21TdG9yZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5IT01FIFBBR0U8L2gxPlxyXG4gICAgICAgIDxIb21lU2VjdGlvbkFjdGlvbnMgLz5cclxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0T25lIGFwaURhdGE9e3N0b3JlUHJvcHMuYXBpRGF0YX0gLz5cclxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGFwaURhdGE9e3N0b3JlUHJvcHMuYXBpRGF0YX0vPlxyXG4gICAgICAgIDxIb21lU2VjdGlvblN1YlBhcnRUd28gYXBpRGF0YT17c3RvcmVQcm9wcy5hcGlEYXRhRGVwZW5kaW5nfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTdG9yZXMoKSB7XHJcbiAgICByZXR1cm4gW0FwcFN0b3JlLCBBcHBTdG9yZURlcGVuZGluZ107XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXBpRGF0YTogQXBwU3RvcmUuZ2V0U3RhdGUoKS5nZXQoJ2RhdGFCeVJlc3RBcGknKS50b0pTKCksXHJcbiAgICAgIGFwaURhdGFEZXBlbmRpbmc6IEFwcFN0b3JlRGVwZW5kaW5nLmdldFN0YXRlKCkuZ2V0KCdkYXRhQnlSZXN0QXBpJykudG9KUygpXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmhvbWVTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXMoaG9tZVNlY3Rpb24pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbi5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IEltbXV0YWJsZSwge01hcH0gZnJvbSAnaW1tdXRhYmxlJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbi8vIERFUEVOREVOQ1lcclxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5pbXBvcnQgaW1tdXRhYmxlIGZyb20gJ2FsdC91dGlscy9JbW11dGFibGVVdGlsJztcclxuLy8gd2VicGFjayBob3QgcmVsb2FkXHJcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcclxuXHJcbmxldCBhcHBTdG9yZSA9IG1ha2VIb3QoYWx0LCBpbW11dGFibGUoY2xhc3MgQXBwU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBcHBBY3Rpb25zKTtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgTWFwKHtcclxuICAgICAgZGF0YUJ5UmVzdEFwaTogbmV3IE1hcCh7fSksXHJcbiAgICAgIGRhdGE6IG5ldyBNYXAoe30pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlKHRleHQpIHtcclxuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBoYW5kIHdhdmluZyBvZiBjb3Vyc2UuXHJcbiAgICBjb25zdCBpZCA9ICgrbmV3IERhdGUoKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkpLnRvU3RyaW5nKDM2KTtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmdldCgnZGF0YScpLnNldChpZCwgbmV3IE1hcCh7XHJcbiAgICAgIGlkOiBpZCxcclxuICAgICAgY29tcGxldGU6IGZhbHNlLFxyXG4gICAgICBlZGl0OiBmYWxzZSxcclxuICAgICAgdGV4dDogdGV4dFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGEnLCBuZXdEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZShpZCkge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuZ2V0KCdkYXRhJykuZGVsZXRlKGlkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGEnLCBuZXdEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZUFsbCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGEnLCBuZXcgTWFwKHt9KSkpO1xyXG4gIH1cclxuXHJcbiAgb25VcGRhdGVDb21wbGV0ZSh4KSB7XHJcbiAgICBsZXQgeyBpZCwgY29tcGxldGUgfSA9IHg7XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyBjb21wbGV0ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uVXBkYXRlQ29tcGxldGVBbGwoeCkge1xyXG4gICAgbGV0IHsgY29tcGxldGVkIH0gPSB4O1xyXG4gICAgLy8gdXBkYXRlIGFsbCBtYXAgaXRlbXNcclxuICAgIGxldCBhbGxUb2RvS2V5c0l0ID0gdGhpcy5zdGF0ZS5nZXQoJ2RhdGEnKS5rZXlzKCk7XHJcbiAgICBmb3IobGV0IHZhbHVlIG9mIGFsbFRvZG9LZXlzSXQpe1xyXG4gICAgICB0aGlzLnVwZGF0ZSh2YWx1ZSwge2NvbXBsZXRlOiBjb21wbGV0ZWR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVXBkYXRlVGV4dCh4KSB7XHJcbiAgICBsZXQgeyBpZCwgdGV4dCB9ID0geDtcclxuICAgIHRleHQgPSB0ZXh0ID8gdGV4dC50cmltKCkgOiAnJztcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyB0ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGlkLCB1cGRhdGVzKSB7XHJcbiAgICAvLyB1cGRhdGUgaXRlbSBieSBpZCBjaGVja1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuZ2V0KCdkYXRhJykudXBkYXRlKGlkLCAodG9kbykgPT4ge1xyXG4gICAgICBjb25zdCB1cGRhdGVLZXlzID0gT2JqZWN0LmtleXModXBkYXRlcyk7XHJcbiAgICAgIHVwZGF0ZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgdG9kbyA9IHRvZG8uc2V0KGtleSwgdXBkYXRlc1trZXldKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuc2V0KCdkYXRhJywgbmV3RGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWxsKHVwZGF0ZXMpIHtcclxuICAgIGZvciAodmFyIGlkIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZShpZCwgdXBkYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZldGNoKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnNldCgnZGF0YUJ5UmVzdEFwaScsIEltbXV0YWJsZS5mcm9tSlMoe2RhdGE6ICdoZWxsbyd9KSkpO1xyXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGFCeVJlc3RBcGknLCBJbW11dGFibGUuZnJvbUpTKHtkYXRhOiBqc29ufSkpKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uRGVzdHJveUNvbXBsZXRlZCgpIHtcclxuICAgIGZvciAobGV0IGlkIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhW2lkXS5jb21wbGV0ZSkge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95KGlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFyZUFsbENvbXBsZXRlKCkge1xyXG4gICAgbGV0IHsgZGF0YSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG4gICAgZm9yIChsZXQgaWQgaW4gZGF0YSkge1xyXG4gICAgICBpZiAoIWRhdGFbaWRdLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0pLCAnQXBwU3RvcmUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBwU3RvcmU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvQXBwU3RvcmUuanNcbiAqKi8iLCIvLyBERVBFTkRFTkNZXHJcbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuXHJcbmNsYXNzIEFwcEFjdGlvbnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXHJcbiAgICAgICdjcmVhdGUnLFxyXG4gICAgICAnZmV0Y2gnLFxyXG4gICAgICAncmVtb3ZlJyxcclxuICAgICAgJ3JlbW92ZUFsbCcsXHJcbiAgICAgICd1cGRhdGVDb21wbGV0ZScsXHJcbiAgICAgICd1cGRhdGVDb21wbGV0ZUFsbCcsXHJcbiAgICAgICd1cGRhdGVUZXh0J1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoQXBwQWN0aW9ucyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBJbW11dGFibGUsIHtNYXB9IGZyb20gJ2ltbXV0YWJsZSc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XHJcblxyXG4vLyBERVBFTkRFTkNZXHJcbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuaW1wb3J0IGltbXV0YWJsZSBmcm9tICdhbHQvdXRpbHMvSW1tdXRhYmxlVXRpbCc7XHJcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuL0FwcFN0b3JlJztcclxuLy8gd2VicGFjayBob3QgcmVsb2FkXHJcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcclxuXHJcbmxldCBkZXBlbmRpbmdTdG9yZSA9IG1ha2VIb3QoYWx0LCBpbW11dGFibGUoY2xhc3MgRGVwZW5kaW5nU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBcHBBY3Rpb25zKTtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgTWFwKHtcclxuICAgICAgZGF0YUJ5UmVzdEFwaTogbmV3IE1hcCh7fSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25GZXRjaCgpIHtcclxuICAgIHRoaXMud2FpdEZvcihbQXBwU3RvcmUuZGlzcGF0Y2hUb2tlbl0pOyAvLyBldmVudCBoYXMgdG8gYmUgY29uc3VtZWRcclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGFCeVJlc3RBcGknLCBJbW11dGFibGUuZnJvbUpTKHtkYXRhOiAnaGVyZSBpcyBkZXBlbmRlbmN5IHN0b3JlJ30pKSk7XHJcbiAgfVxyXG59KSwgJ0RlcGVuZGluZ1N0b3JlJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGVuZGluZ1N0b3JlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvc3RvcmVzL0FwcFN0b3JlRGVwZW5kaW5nLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVNlY3Rpb25BY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1zZWN0aW9uLWFjdGlvbnMnPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMpfT5GQUtFIEFQSSBDQUxMPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNsaWNrKCkge1xyXG4gICAgQXBwQWN0aW9ucy5mZXRjaCgpO1xyXG4gIH1cclxufVxyXG5cclxuSG9tZVNlY3Rpb25BY3Rpb25zLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbkFjdGlvbnMnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbkFjdGlvbnMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvblN1YlBhcnRPbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcclxuICAgICAgYXBpRGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGNvbnRlbnRNYXJrdXAgPSAnZGlzcGF0Y2hpbmcgem9uZSAxJztcclxuICAgIGlmICh0aGlzLnByb3BzLmFwaURhdGEuZGF0YSkge1xyXG4gICAgICBjb250ZW50TWFya3VwID0gbWFya2VkKCdgYGBqc29uXFxuJyArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhLCBudWxsLCAyKSArICdgYGAnLCB7YnJlYWtzOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtc2VjdGlvbi1zdWItcGFydC1vbmUnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50TWFya3VwfX0+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2soKSB7XHJcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lU2VjdGlvblN1YlBhcnRPbmUucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uU3ViUGFydE9uZSc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydE9uZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibWFya2VkXCJcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XHJcblxyXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XHJcbiAgICAgIGFwaURhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciBjb250ZW50TWFya3VwID0gJ2Rpc3BhdGNoaW5nIHpvbmUgMic7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hcGlEYXRhLmRhdGEpIHtcclxuICAgICAgY29udGVudE1hcmt1cCA9IG1hcmtlZCgnYGBganNvblxcbicgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmFwaURhdGEuZGF0YSwgbnVsbCwgMikgKyAnYGBgJywge2JyZWFrczogdHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXNlY3Rpb24tc3ViLXBhcnQtdHdvJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudE1hcmt1cH19PjwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNsaWNrKCkge1xyXG4gICAgQXBwQWN0aW9ucy5mZXRjaCgpO1xyXG4gIH1cclxufVxyXG5cclxuSG9tZVNlY3Rpb25TdWJQYXJ0VHdvLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvblN1YlBhcnRUd28nO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvblN1YlBhcnRUd28uanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5ob21lLXNlY3Rpb24tYWN0aW9ucyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRGNkZGO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblxcbmRpdi5ob21lLXNlY3Rpb24tc3ViLXBhcnQtb25lIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LmhvbWUtc2VjdGlvbi1zdWItcGFydC10d28ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4RUU3RkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+UEFHRSBOT1QgRk9VTkQ8L2gxPlxyXG4gICAgICAgIDxwPnllcyBpbmRlZWQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbk5vdEZvdW5kU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnTm90Rm91bmRTZWN0aW9uJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtJztcclxuaW1wb3J0IFRvZG9UZXh0SW5wdXQgZnJvbSAnLi9Ub2RvVGV4dElucHV0JztcclxuaW1wb3J0IFRvZG9TbmFwc2hvdHMgZnJvbSAnLi9Ub2RvU25hcHNob3RzJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XHJcbmltcG9ydCBTbmFwc2hvdFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9TbmFwc2hvdFN0b3JlJztcclxuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcclxuXHJcbmxldCB0b2RvU2VjdGlvbiA9IGNsYXNzIFRvZG9TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gcmV0cmlldmUgZGF0YSBmcm9tIHN0b3JlXHJcbiAgICBsZXQgc3RvcmVQcm9wcyA9IFRvZG9TZWN0aW9uLmdldFByb3BzRnJvbVN0b3JlcygpO1xyXG4gICAgLy8gYnVpbGQgd2l0aCBjdXJyZW50IGRhdGFcclxuICAgIGxldCBhbGxUb2RvcyA9IHN0b3JlUHJvcHMuYWxsRGF0YSxcclxuICAgICAgICB0b2RvcyA9IFtdO1xyXG4gICAgLy8gZ2VuZXJhdGUgdG9kbyBpdGVtIGxpc3RcclxuICAgIGZvciAodmFyIGtleSBpbiBhbGxUb2Rvcykge1xyXG4gICAgICB0b2Rvcy5wdXNoKDxUb2RvSXRlbSBrZXk9e2tleX0gdG9kbz17YWxsVG9kb3Nba2V5XX0gLz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlRPRE8gUEFHRTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8nPlxyXG4gICAgICAgICAgPHA+Rmlyc3QgYWRkIHNvbWUgdGFza3MgYnkgcHJlc3NpbmcgZW50ZXIga2V5PC9wPlxyXG4gICAgICAgICAgPFRvZG9UZXh0SW5wdXQgY2xhc3NOYW1lPSdlZGl0JyBpZD0nbmV3LXRvZG8nIHBsYWNlaG9sZGVyPSdXaGF0IG5lZWRzIHRvIGJlIGRvbmUgPycgb25TYXZlPXt0aGlzLl9vblNhdmUuYmluZCh0aGlzKX0gdmFsdWU9JycgLz5cclxuICAgICAgICAgIDx1bCBpZD0ndG9kby1saXN0Jz57dG9kb3N9PC91bD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjeCh7J2hpZGRlbic6ICF0b2Rvcy5sZW5ndGh9KX0gb25DbGljaz17dGhpcy5fb25DbGlja1RvZ2dsZUFsbC5iaW5kKHRoaXMpfT5UT0dHTEUgQUxMIFNUQVRFUzwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2N4KHsnaGlkZGVuJzogIXRvZG9zLmxlbmd0aH0pfSBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrUmVtb3ZlQWxsLmJpbmQodGhpcyl9ID5DTEVBUjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxUb2RvU25hcHNob3RzIHNuYXBzaG90cz17c3RvcmVQcm9wcy5zbmFwc2hvdHN9IHRvZG9MZW5ndGg9e3RvZG9zLmxlbmd0aH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DbGlja1JlbW92ZUFsbCgpIHtcclxuICAgIEFwcEFjdGlvbnMucmVtb3ZlQWxsKCk7XHJcbiAgfVxyXG5cclxuICBfb25DbGlja1RvZ2dsZUFsbCgpIHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZCA9ICF0aGlzLnN0YXRlLmNvbXBsZXRlZDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZFxyXG4gICAgfSk7XHJcbiAgICBBcHBBY3Rpb25zLnVwZGF0ZUNvbXBsZXRlQWxsKHtjb21wbGV0ZWQ6IGNvbXBsZXRlZH0pO1xyXG4gIH1cclxuXHJcbiAgX29uU2F2ZSh0ZXh0KSB7XHJcbiAgICBpZiAodGV4dC50cmltKCkpe1xyXG4gICAgICBBcHBBY3Rpb25zLmNyZWF0ZSh0ZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTdG9yZXMoKSB7XHJcbiAgICByZXR1cm4gW0FwcFN0b3JlLCBTbmFwc2hvdFN0b3JlXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhbGxEYXRhOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLmdldCgnZGF0YScpLnRvSlMoKSxcclxuICAgICAgYXJlQWxsQ29tcGxldGU6IEFwcFN0b3JlLmFyZUFsbENvbXBsZXRlKCksXHJcbiAgICAgIHNuYXBzaG90czogU25hcHNob3RTdG9yZS5nZXRTdGF0ZSgpLmdldCgnc25hcHNob3RzJykudG9BcnJheSgpXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbnRvZG9TZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXModG9kb1NlY3Rpb24pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgVG9kb1RleHRJbnB1dEVkaXQgZnJvbSAnLi9Ub2RvVGV4dElucHV0RWRpdCc7XHJcblxyXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Ub2RvSXRlbS5zY3NzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICB0b2RvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgICAgIGVkaXRpbmc6IGZhbHNlLFxyXG4gICAgICB0ZXh0OiB0aGlzLnByb3BzLnRvZG8udGV4dFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciB0b2RvID0gdGhpcy5wcm9wcy50b2RvO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9e2N4KHtcclxuICAgICAgICAgICdjb21wbGV0ZWQnOiB0b2RvLmNvbXBsZXRlLFxyXG4gICAgICAgICAgJ2VkaXRpbmcnOiB0aGlzLnN0YXRlLmVkaXRpbmdcclxuICAgICAgICB9KX1cclxuICAgICAgICBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCh7J2lubGluZSc6IHRoaXMuc3RhdGUuZWRpdGluZ30pfT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2xhc3NOYW1lPSd0b2dnbGUnIGRpc2FibGVkPXt0aGlzLnN0YXRlLmVkaXRpbmd9IGNoZWNrZWQ9e3RvZG8uY29tcGxldGV9IG9uQ2hhbmdlPXt0aGlzLl9vbkNsaWNrVG9nZ2xlQ29tcGxldGUuYmluZCh0aGlzKX0gdGl0bGU9J3RvZ2dsZSB0YXNrIHN0YXRlIChjb21wbGV0ZWQgPyknLz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2N4KHsnaGlkZGVuJzogdGhpcy5zdGF0ZS5lZGl0aW5nfSl9IG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tFZGl0LmJpbmQodGhpcyl9IHRpdGxlPSdFZGl0IG1lIGJ5IGEgY2xpY2snPnt0b2RvLnRleHR9PC9sYWJlbD5cclxuICAgICAgICAgIDxUb2RvVGV4dElucHV0RWRpdCBjbGFzc05hbWU9e2N4KHsnaGlkZGVuJzogIXRoaXMuc3RhdGUuZWRpdGluZ30pfSBvblVwZGF0ZT17dGhpcy5fb25VcGRhdGUuYmluZCh0aGlzKX0gb25DYW5jZWxVcGRhdGU9e3RoaXMuX29uQ2FuY2VsVXBkYXRlLmJpbmQodGhpcyl9IHRvZG89e3RvZG99IC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goeydoaWRkZW4nOiB0aGlzLnN0YXRlLmVkaXRpbmcsICdkZXN0cm95JzogdHJ1ZX0pfSBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrUmVtb3ZlLmJpbmQodGhpcyl9IHRpdGxlPSdyZW1vdmUgdGFzayc+JiMxMDAwNjs8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DbGlja0VkaXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZWRpdGluZzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfb25DbGlja1JlbW92ZSgpIHtcclxuICAgIEFwcEFjdGlvbnMucmVtb3ZlKHRoaXMucHJvcHMudG9kby5pZCk7XHJcbiAgfVxyXG5cclxuICBfb25DbGlja1RvZ2dsZUNvbXBsZXRlKCkge1xyXG4gICAgQXBwQWN0aW9ucy51cGRhdGVDb21wbGV0ZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLnRvZG8uaWQsXHJcbiAgICAgIGNvbXBsZXRlOiAhdGhpcy5wcm9wcy50b2RvLmNvbXBsZXRlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9vbkNhbmNlbFVwZGF0ZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmc6IGZhbHNlfSk7XHJcbiAgfVxyXG5cclxuICBfb25TYXZlKHRleHQpIHtcclxuICAgIGlmICh0ZXh0LnRyaW0oKSl7XHJcbiAgICAgIEFwcEFjdGlvbnMuY3JlYXRlKHRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uVXBkYXRlKHRvZG8pIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmc6IGZhbHNlfSk7XHJcbiAgICBBcHBBY3Rpb25zLnVwZGF0ZVRleHQoe1xyXG4gICAgICBpZDogdG9kby5pZCxcclxuICAgICAgdGV4dDogdG9kby50ZXh0XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblRvZG9JdGVtLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvSXRlbSc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9JdGVtLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmNvbnN0IEVOVEVSX0tFWV9DT0RFID0gMTM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvVGV4dElucHV0RWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcclxuICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBvbkNhbmNlbFVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRvZG86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnRvZG8udGV4dFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XHJcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLl9vbktleURvd24uYmluZCh0aGlzKX1cclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfSAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fb25DbGlja1VwZGF0ZS5iaW5kKHRoaXMpfT5VUERBVEU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tDYW5jZWwuYmluZCh0aGlzKX0+Q0FOQ0VMPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNsaWNrQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNhbmNlbFVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2tVcGRhdGUoKSB7XHJcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlKHRoaXMucHJvcHMudG9kbyk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2UoLypvYmplY3QqLyBldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy50b2RvLnRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBfb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcclxuICAgICAgdGhpcy5fb25DbGlja1VwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuVG9kb1RleHRJbnB1dEVkaXQucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9UZXh0SW5wdXRFZGl0JztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dEVkaXQuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ub2RvSXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9fVG9kb0l0ZW0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi50b2RvIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuICBkaXYudG9kbyBkaXYuaW5saW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIGRpdi50b2RvIGxhYmVsIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgZGl2LnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuZGl2LnRvZG8tc25hcHNob3Qge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5idXR0b24uZGVzdHJveSB7XFxuICB0b3A6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uYnV0dG9uLmRlc3Ryb3k6YWN0aXZlIHtcXG4gIHRvcDogMXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG5saS5jb21wbGV0ZWQgbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmNvbnN0IEVOVEVSX0tFWV9DT0RFID0gMTM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgb25TYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX0gLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tTYXZlLmJpbmQodGhpcyl9IHRpdGxlPSdhZGQgdGFzayc+QUREPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNsaWNrU2F2ZSgpIHtcclxuICAgIHRoaXMucHJvcHMub25TYXZlKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2UoLypvYmplY3QqLyBldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX29uS2V5RG93bihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XHJcbiAgICAgIHRoaXMuX29uQ2xpY2tTYXZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Ub2RvVGV4dElucHV0LnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvVGV4dElucHV0JztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dC5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgU25hcHNob3RBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgVG9kb1NuYXBzaG90c0l0ZW0gZnJvbSAnLi9Ub2RvU25hcHNob3RzSXRlbSc7XHJcblxyXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1NuYXBzaG90cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcclxuICAgICAgdG9kb0xlbmd0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGFsbFNuYXBzID0gdGhpcy5wcm9wcy5zbmFwc2hvdHMsXHJcbiAgICAgICAgaGFzVG9kb3MgPSB0aGlzLnByb3BzLnRvZG9MZW5ndGgsXHJcbiAgICAgICAgc25hcHNob3RzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFNuYXBzKSB7XHJcbiAgICAgIHNuYXBzaG90cy5wdXNoKDxUb2RvU25hcHNob3RzSXRlbSBrZXk9e2tleX0gc25hcHNob3Q9e2FsbFNuYXBzW2tleV19IC8+KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1zbmFwc2hvdCc+XHJcbiAgICAgICAgPHA+VGhlbiB0YWtlIGEgc25hcHNob3Qgb3IgbG9hZCBpdDwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goeydoaWRkZW4nOiAhaGFzVG9kb3N9KX0gb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMpfSA+VEFLRSBTTkFQU0hPVDwvYnV0dG9uPlxyXG4gICAgICAgIDx1bCBpZD0ndG9kby1zbmFwc2hvdC1saXN0Jz57c25hcHNob3RzfTwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNsaWNrKCkge1xyXG4gICAgU25hcHNob3RBY3Rpb25zLnRha2VTbmFwc2hvdCgpO1xyXG4gIH1cclxufVxyXG5cclxuVG9kb1NuYXBzaG90cy5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1NuYXBzaG90cyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TbmFwc2hvdHMuanNcbiAqKi8iLCIvLyBERVBFTkRFTkNZXHJcbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuXHJcbmNsYXNzIFNuYXBzaG90QWN0aW9ucyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcclxuICAgICAgJ3JlbW92ZVNuYXBzaG90JyxcclxuICAgICAgJ2Jvb3RzdHJhcFNuYXBzaG90JyxcclxuICAgICAgJ3Rha2VTbmFwc2hvdCdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFsdC5jcmVhdGVBY3Rpb25zKFNuYXBzaG90QWN0aW9ucyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IFNuYXBzaG90QWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucyc7XHJcblxyXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Ub2RvSXRlbS5zY3NzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TbmFwc2hvdHNJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBzbmFwc2hvdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHRvZG8gPSB0aGlzLnByb3BzLnNuYXBzaG90O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUnPlxyXG4gICAgICAgICAgPGxhYmVsPjxhIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2Jvb3RzdHJhcFNuYXBzaG90LmJpbmQodGhpcyl9Pnt0b2RvLmlkfTwvYT48L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Rlc3Ryb3knIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tSZW1vdmUuYmluZCh0aGlzKX0+JiMxMDAwNjs8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfYm9vdHN0cmFwU25hcHNob3QoKSB7XHJcbiAgICBTbmFwc2hvdEFjdGlvbnMuYm9vdHN0cmFwU25hcHNob3QodGhpcy5wcm9wcy5zbmFwc2hvdC5pZCk7XHJcbiAgfVxyXG5cclxuICBfb25DbGlja1JlbW92ZSgpIHtcclxuICAgIFNuYXBzaG90QWN0aW9ucy5yZW1vdmVTbmFwc2hvdCh0aGlzLnByb3BzLnNuYXBzaG90LmlkKTtcclxuICB9XHJcbn1cclxuXHJcblRvZG9TbmFwc2hvdHNJdGVtLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvU25hcHNob3RzSXRlbSc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TbmFwc2hvdHNJdGVtLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgSW1tdXRhYmxlLCB7TWFwLCBMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgU25hcHNob3RBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zJztcclxuXHJcbi8vIERFUEVOREVOQ1lcclxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5pbXBvcnQgaW1tdXRhYmxlIGZyb20gJ2FsdC91dGlscy9JbW11dGFibGVVdGlsJztcclxuLy8gd2VicGFjayBob3QgcmVsb2FkXHJcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcclxuXHJcbmxldCBzbmFwc2hvdFN0b3JlID0gbWFrZUhvdChhbHQsIGltbXV0YWJsZShjbGFzcyBTbmFwc2hvdFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoU25hcHNob3RBY3Rpb25zKTtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgTWFwKHtcclxuICAgICAgc25hcHNob3RzOiBuZXcgTGlzdChbXSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Cb290c3RyYXBTbmFwc2hvdChpZCkge1xyXG4gICAgY29uc3QgaWR4ID0gdGhpcy5zdGF0ZS5nZXQoJ3NuYXBzaG90cycpLmZpbmRJbmRleCgoc25hcHNob3QpID0+IHtcclxuICAgICAgcmV0dXJuIHNuYXBzaG90LmlkID09PSBpZDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAvLyBUT0RPXHJcbiAgICAgIC8vIGFsdC5wcmVwYXJlKEFwcFN0b3IpXHJcbiAgICAgIGxldCBzbmFwc2hvdCA9IHRoaXMuc3RhdGUuZ2V0KCdzbmFwc2hvdHMnKS5nZXQoaWR4KTtcclxuICAgICAgYWx0LmJvb3RzdHJhcChJbW11dGFibGUuZnJvbUpTKHNuYXBzaG90LmRhdGEpKTtcclxuICAgICAgLy8gYWx0LnJvbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRha2VTbmFwc2hvdCgpIHtcclxuICAgIGNvbnN0IHNuYXBzaG90ID0ge1xyXG4gICAgICBpZDogKCtuZXcgRGF0ZSgpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSkudG9TdHJpbmcoMzYpLFxyXG4gICAgICBkYXRhOiBhbHQudGFrZVNuYXBzaG90KCdBcHBTdG9yZScpXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IHRoaXMuc3RhdGUuZ2V0KCdzbmFwc2hvdHMnKS5wdXNoKHNuYXBzaG90KTtcclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ3NuYXBzaG90cycsIG5ld0xpc3QpKTtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlU25hcHNob3QoaWQpIHtcclxuICAgIC8vIGZpbmQgc25hcHNob3QgaW5kZXggaW4gbGlzdFxyXG4gICAgY29uc3QgaWR4ID0gdGhpcy5zdGF0ZS5nZXQoJ3NuYXBzaG90cycpLmZpbmRJbmRleCgoc25hcHNob3QpID0+IHtcclxuICAgICAgcmV0dXJuIHNuYXBzaG90LmlkID09PSBpZDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICBjb25zdCBuZXdMaXN0ID0gdGhpcy5zdGF0ZS5nZXQoJ3NuYXBzaG90cycpLmRlbGV0ZShpZHgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuc2V0KCdzbmFwc2hvdHMnLCBuZXdMaXN0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSwgJ1NuYXBzaG90U3RvcmUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc25hcHNob3RTdG9yZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3N0b3Jlcy9TbmFwc2hvdFN0b3JlLmpzXG4gKiovIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG4vKmVzbGludC1kaXNhYmxlIG5ldy1jYXAqL1xyXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuLyplc2xpbnQtZW5hYmxlIG5ldy1jYXAqL1xyXG5cclxubGV0IGFwaSA9IHJlcXVpcmUoJy4uL2FwaS9hcGknKTtcclxuXHJcbnJvdXRlci51c2UoJy9hcGkvKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGFwaS50b2RvKHJlcSwgcmVzLCBuZXh0KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxyXG4vL1xyXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuLi9hcGkvYXBpJ10sICgpID0+IHtcclxuICAgIGFwaSA9IHJlcXVpcmUoJy4uL2FwaS9hcGknKTtcclxuICB9KTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvcm91dGVzL2FwaS5qc1xuICoqLyIsImxldCBhcGkgPSB7XHJcbiAgdG9kbzogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgLy8gc2ltcGxlIGFwaSBmZXRjaCBleGFtcGxlLCBubyBvd24gREIgaGVyZSBzbyBleHRlcm5hbCBjYWxsIGlzIG1hZGUuXHJcblxyXG4gICAgICAvLyBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dpdGh1YlxyXG4gICAgIC8qIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dpdGh1YicpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChqc29uKTtcclxuICAgICAgfSk7XHJcbiAgICAgICovXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHt0ZXN0OiAndGVzdCd9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBuZXh0KGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBvdGhlcnRvZG86ICgpID0+IHtcclxuXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvYXBpL2FwaS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=