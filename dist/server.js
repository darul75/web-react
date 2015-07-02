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
	var apiRoutes = __webpack_require__(72);
	
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
	
	var _appAlt = __webpack_require__(51);
	
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
	
	var _componentsContactSectionContact = __webpack_require__(44);
	
	var _componentsContactSectionContact2 = _interopRequireDefault(_componentsContactSectionContact);
	
	var _componentsHomeSectionHomeSection = __webpack_require__(45);
	
	var _componentsHomeSectionHomeSection2 = _interopRequireDefault(_componentsHomeSectionHomeSection);
	
	var _componentsNotFoundSectionNotFoundSection = __webpack_require__(61);
	
	var _componentsNotFoundSectionNotFoundSection2 = _interopRequireDefault(_componentsNotFoundSectionNotFoundSection);
	
	var _componentsTodoSectionTodoSection = __webpack_require__(62);
	
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
	
	var _HeaderHeader = __webpack_require__(18);
	
	var _HeaderHeader2 = _interopRequireDefault(_HeaderHeader);
	
	var _FooterFooter = __webpack_require__(36);
	
	var _FooterFooter2 = _interopRequireDefault(_FooterFooter);
	
	var _DocumentHtmlHeaderTags = __webpack_require__(16);
	
	var _DocumentHtmlHeaderTags2 = _interopRequireDefault(_DocumentHtmlHeaderTags);
	
	if (process.env.BROWSER) {
	  __webpack_require__(39);
	  __webpack_require__(41);
	  __webpack_require__(43);
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
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	// TODO: do it in store maybe
	var metas = __webpack_require__(17).helmet;
	
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
/* 17 */
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
/* 18 */
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
	  brandingsMarkup.push(_react2['default'].createElement('img', { src: __webpack_require__(19)("./" + elt + '.svg'), key: idx, width: '40', height: '40' }));
	});
	
	if (process.env.BROWSER) {
	  __webpack_require__(32);
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./babel.svg": 20,
		"./css-3.svg": 21,
		"./express.svg": 22,
		"./flux.svg": 23,
		"./heroku.svg": 24,
		"./html-5.svg": 25,
		"./javascript.svg": 26,
		"./lodash.svg": 27,
		"./mocha.svg": 28,
		"./nodejs.svg": 29,
		"./react.svg": 30,
		"./webpack.svg": 31
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
	webpackContext.id = 19;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3BOGsrW.svg"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIzNjFweCIgdmlld0JveD0iMCAwIDI1NiAzNjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljg0Mzg2OCwzNjAuMDg3OTEyIEwyMy42NjE3MTQzLDMzMS4xNjYyNDIgTDAuNDQ1MTg2ODEzLDcwLjc2NTcxNDMgTDI1NS41NTQ4MTMsNzAuNzY1NzE0MyBMMjMyLjMxMzY3LDMzMS4xMjU0NTEgTDEyNy44NDM4NjgsMzYwLjA4NzkxMiBMMTI3Ljg0Mzg2OCwzNjAuMDg3OTEyIFoiIGZpbGw9IiMyNjRERTQiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjEyLjQxNjcwMywzMTQuNTQ2NjM3IEwyMzIuMjc3ODAyLDkyLjA1NzMxODcgTDEyOCw5Mi4wNTczMTg3IEwxMjgsMzM3Ljk1MDI0MiBMMjEyLjQxNjcwMywzMTQuNTQ2NjM3IEwyMTIuNDE2NzAzLDMxNC41NDY2MzcgWiIgZmlsbD0iIzI5NjVGMSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik01My42Njg1NzE0LDE4OC42MzYxMzIgTDU2LjUzMDk4OSwyMjAuNTcyODM1IEwxMjgsMjIwLjU3MjgzNSBMMTI4LDE4OC42MzYxMzIgTDUzLjY2ODU3MTQsMTg4LjYzNjEzMiBMNTMuNjY4NTcxNCwxODguNjM2MTMyIFoiIGZpbGw9IiNFQkVCRUIiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNNDcuOTE3MDExLDEyMy45OTQ3MjUgTDUwLjgyMDIxOTgsMTU1LjkzMjEzMiBMMTI4LDE1NS45MzIxMzIgTDEyOCwxMjMuOTk0NzI1IEw0Ny45MTcwMTEsMTIzLjk5NDcyNSBMNDcuOTE3MDExLDEyMy45OTQ3MjUgWiIgZmlsbD0iI0VCRUJFQiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjgsMjcxLjU4MDEzMiBMMTI3Ljg2MDA0NCwyNzEuNjE3NDA3IEw5Mi4yOTE1MTY1LDI2Mi4wMTMxODcgTDkwLjAxNzc1ODIsMjM2LjU0MTg5IEw1Ny45NTc5NzgsMjM2LjU0MTg5IEw2Mi40MzIzNTE2LDI4Ni42ODc2NDggTDEyNy44NTMwMTEsMzA0Ljg0ODg3OSBMMTI4LDMwNC44MDgwODggTDEyOCwyNzEuNTgwMTMyIEwxMjgsMjcxLjU4MDEzMiBaIiBmaWxsPSIjRUJFQkVCIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTYwLjQ4MzUxNjUsMCBMOTkuMTY0ODM1MiwwIEw5OS4xNjQ4MzUyLDE2LjE3NTgyNDIgTDc2LjY1OTM0MDcsMTYuMTc1ODI0MiBMNzYuNjU5MzQwNywzMi4zNTE2NDg0IEw5OS4xNjQ4MzUyLDMyLjM1MTY0ODQgTDk5LjE2NDgzNTIsNDguNTI3NDcyNSBMNjAuNDgzNTE2NSw0OC41Mjc0NzI1IEw2MC40ODM1MTY1LDAgTDYwLjQ4MzUxNjUsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEwNi45MDEwOTksMCBMMTQ1LjU4MjQxOCwwIEwxNDUuNTgyNDE4LDE0LjA2NTkzNDEgTDEyMy4wNzY5MjMsMTQuMDY1OTM0MSBMMTIzLjA3NjkyMywxNi44NzkxMjA5IEwxNDUuNTgyNDE4LDE2Ljg3OTEyMDkgTDE0NS41ODI0MTgsNDkuMjMwNzY5MiBMMTA2LjkwMTA5OSw0OS4yMzA3NjkyIEwxMDYuOTAxMDk5LDM0LjQ2MTUzODUgTDEyOS40MDY1OTMsMzQuNDYxNTM4NSBMMTI5LjQwNjU5MywzMS42NDgzNTE2IEwxMDYuOTAxMDk5LDMxLjY0ODM1MTYgTDEwNi45MDEwOTksMCBMMTA2LjkwMTA5OSwwIFoiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTUzLjMxODY4MSwwIEwxOTIsMCBMMTkyLDE0LjA2NTkzNDEgTDE2OS40OTQ1MDUsMTQuMDY1OTM0MSBMMTY5LjQ5NDUwNSwxNi44NzkxMjA5IEwxOTIsMTYuODc5MTIwOSBMMTkyLDQ5LjIzMDc2OTIgTDE1My4zMTg2ODEsNDkuMjMwNzY5MiBMMTUzLjMxODY4MSwzNC40NjE1Mzg1IEwxNzUuODI0MTc2LDM0LjQ2MTUzODUgTDE3NS44MjQxNzYsMzEuNjQ4MzUxNiBMMTUzLjMxODY4MSwzMS42NDgzNTE2IEwxNTMuMzE4NjgxLDAgTDE1My4zMTg2ODEsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTIwMi4xMjY3NjksMTg4LjYzNjEzMiBMMjA3Ljg5MjM5NiwxMjMuOTk0NzI1IEwxMjcuODg5NTgyLDEyMy45OTQ3MjUgTDEyNy44ODk1ODIsMTU1LjkzMjEzMiBMMTcyLjg5MjEzMiwxNTUuOTMyMTMyIEwxNjkuOTg2MTEsMTg4LjYzNjEzMiBMMTI3Ljg4OTU4MiwxODguNjM2MTMyIEwxMjcuODg5NTgyLDIyMC41NzI4MzUgTDE2Ny4yMTY1MjcsMjIwLjU3MjgzNSBMMTYzLjUwOTQ1MSwyNjEuOTkyNzkxIEwxMjcuODg5NTgyLDI3MS42MDY4NTcgTDEyNy44ODk1ODIsMzA0LjgzMzQwNyBMMTkzLjM2MjI4NiwyODYuNjg3NjQ4IEwxOTMuODQyNjM3LDI4MS4yOTE5NTYgTDIwMS4zNDc1MTYsMTk3LjIxMjEzMiBMMjAyLjEyNjc2OSwxODguNjM2MTMyIEwyMDIuMTI2NzY5LDE4OC42MzYxMzIgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "haVk2qs.svg"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjEwMnB4IiB2aWV3Qm94PSIwIDAgMjU2IDEwMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0yMDUuMDMzMzA2LDAgQzE5NC45ODU0MjEsMCAxODUuNjI2OTgyLDIuOTIwNjk0MDggMTc3LjczMTc5OSw3LjkzODgxODg4IEwxMjcuOTk4NTQ1LDQ0LjQ2NDk0OTMgTDEwMS43ODUwMjUsMjUuMjE1NzEzNSBDMTAwLjIwNTQwNywyNy43Nzg1OTM0IDk4LjYxNDE1MjEsMzAuMzI2OTI4MSA5Ny4wOTI3MTQ5LDMyLjk2NTQ0MzYgQzk2LjcyNjE3MzYsMzMuNTk5NjE4MiA5Ni4zODU4MTM4LDM0LjI0MjUyIDk2LjAyNTA5MDYsMzQuODc2Njk0NiBMMTE3LjkzNjExNCw1MC45NjY2OTM2IEw3MS45NTg0NTUsODQuNzI5MjE5IEM2NS42NTc0MzU3LDg4LjY1NjQ0NzEgNTguNDA4MDYzNSw5MC43MzM1MTQ0IDUwLjk2Mzc4NDUsOTAuNzMzNTE0NCBDMjkuMDM4MjE1NSw5MC43MzM1MTQ0IDExLjE5Njk2MzcsNzIuODk1MTcxNiAxMS4xOTY5NjM3LDUwLjk2NjY5MzYgQzExLjE5Njk2MzcsMjkuMDM4MjE1NSAyOS4wMzUzMDY0LDExLjE5OTg3MjcgNTAuOTYzNzg0NSwxMS4xOTk4NzI3IEM1OC40MDgwNjM1LDExLjE5OTg3MjcgNjUuNjYwMzQ0OCwxMy4yNzQwMzEgNzEuOTU4NDU1LDE3LjIwNDE2ODEgTDc2LjUyODU4NDksMjAuNTU4MzExOCBDNzguNDE2NTYzNCwxNy4yOTQzNDg5IDgwLjM3NDM1OTQsMTQuMTA2MDIxNSA4Mi4zNDk2MDk3LDEwLjk0MDk2NjYgTDc4LjI2NTI5MjQsNy45NDE3Mjc5MyBDNzAuMzczMDE4NSwyLjkyMDY5NDA4IDYxLjAxMTY3MDMsMC4wMDI5MDkwNTc4NSA1MC45NjM3ODQ1LDAuMDAyOTA5MDU3ODUgQzIyLjgxODY0OTgsMC4wMDI5MDkwNTc4NSAwLDIyLjgyMTU1ODggMCw1MC45NjY2OTM2IEMwLDc5LjExMTgyODMgMjIuODE1NzQwNywxMDEuOTMwNDc4IDUwLjk2Mzc4NDUsMTAxLjkzMDQ3OCBDNjEuMDExNjcwMywxMDEuOTMwNDc4IDcwLjM3MzAxODUsOTkuMDA5Nzg0IDc4LjI2NTI5MjQsOTMuOTkxNjU5MiBMMTI3Ljk5ODU0NSw1Ny40Njg0Mzc5IEwxNTQuMzEzODgzLDc2Ljc5MzMwOTIgQzE1NS45MjU1MDEsNzQuMTUxODg0NiAxNTcuNTM0MjEsNzEuNTAxNzMyOSAxNTkuMTI1NDY0LDY4Ljc0MTAzNyBDMTU5LjQzOTY0Myw2OC4xOTQxMzQyIDE1OS43MjQ3Myw2Ny42NTAxNDAzIDE2MC4wMzYsNjcuMTAzMjM3NSBMMTM4LjA2Mzg4Niw1MC45NjY2OTM2IEwxODQuMDM4NjM2LDE3LjIwNDE2ODEgQzE5MC4zMzk2NTUsMTMuMjc2OTQgMTk3LjU5MTkzNiwxMS4xOTk4NzI3IDIwNS4wMzMzMDYsMTEuMTk5ODcyNyBDMjI2Ljk2MTc4NSwxMS4xOTk4NzI3IDI0NC44MDAxMjcsMjkuMDM4MjE1NSAyNDQuODAwMTI3LDUwLjk2NjY5MzYgQzI0NC44MDAxMjcsNzIuODk1MTcxNiAyMjYuOTYxNzg1LDkwLjczMzUxNDQgMjA1LjAzMzMwNiw5MC43MzM1MTQ0IEMxOTcuNTg5MDI3LDkwLjczMzUxNDQgMTkwLjMzOTY1NSw4OC42NTkzNTYxIDE4NC4wMzg2MzYsODQuNzI5MjE5IEwxNzkuNTM1NDE0LDgxLjQyMTYyMDIgQzE3Ny42MjcwNzIsODQuNzE3NTgyOCAxNzUuNjk1NDU4LDg3LjkyMDQ1NTQgMTczLjc1NTExNiw5MS4wNjgwNTYgTDE3Ny43MzQ3MDgsOTMuOTg4NzUwMSBDMTg1LjYyOTg5MSw5OS4wMDk3ODQgMTk0Ljk4ODMzLDEwMS45Mjc1NjkgMjA1LjAzNjIxNSwxMDEuOTI3NTY5IEMyMzMuMTgxMzUsMTAxLjkyNzU2OSAyNTYsNzkuMTA4OTE5MiAyNTYsNTAuOTYzNzg0NSBDMjU1Ljk5NzA5MSwyMi44MTg2NDk4IDIzMy4xODEzNSwwIDIwNS4wMzMzMDYsMCBMMjA1LjAzMzMwNiwwIFoiIGZpbGw9IiM0NEI3NEEiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSI0MDBweCIgdmlld0JveD0iMCAwIDI1NiA0MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjguMDgzMDA3MiwzOTguMjg4NzM3IEwyOC4wODMwMDcyLDM2My41MTAyMDMgQzI4LjA4MzAwNzIsMzYxLjA1ODI2NSAyNi4yODU0NjUyLDM2MC4wMDA0ODQgMjQuMTY2MzU3NiwzNjAuMDAwNDg0IEMxOS45MTgyNTA3LDM2MC4wMDA0ODQgMTQuNjEyMzYyNSwzNjEuMDU4MjY1IDkuNzk1MTY5MjMsMzYzLjE4MTQzMyBMOS43OTUxNjkyMywzOTguMjg4Nzk0IEwwLDM5OC4yODg3OTQgTDAsMzMzLjcxMjczMiBMOS43OTUxNjkyMywzMzMuNzEyNzMyIEw5Ljc5NTE2OTIzLDM1NS4wMTcxMzQgQzE0LjQ1MDY2NDksMzUzLjMwNDUgMjAuMDAxMzI5NCwzNTEuODM2MTg1IDI1LjU1MjkwODcsMzUxLjgzNjE4NSBDMzQuNDUxMTM2NiwzNTEuODM2MTg1IDM3Ljc5ODY5OTksMzU3LjMwNjAwMSAzNy43OTg2OTk5LDM2NC44MTMyMTggTDM3Ljc5ODY5OTksMzk4LjI4ODc5NCBMMjguMDgzMDA3MiwzOTguMjg4Nzk0IEwyOC4wODMwMDcyLDM5OC4yODg3MzcgTDI4LjA4MzAwNzIsMzk4LjI4ODczNyBaIE01Ni4wODIwMjA5LDM3Ny4yMjY0ODEgQzU2LjQwODEwMzUsMzg4LjkwMDQ5OSA1OC42OTUxOTgyLDM5MS4xODcxMzYgNjUuODc2MzMyNSwzOTEuMTg3MTM2IEM3MS41MTAwNzU3LDM5MS4xODcxMzYgNzcuODc4MjA1MSwzODkuMzA4MzQ1IDgyLjc3NzYxOTMsMzg3LjQyOTk1NCBMODQuNDA5ODYxNywzOTQuNzc1OTMxIEM3OS4xODQzNjQ4LDM5Ny4xNDY1NjIgNzIuODE3MTUwNCwzOTkuNDMwNTEyIDY1LjIyNjg1NDgsMzk5LjQzMDUxMiBDNDguODk2NDgzOSwzOTkuNDMwNTEyIDQ2LjM2NDU1NTcsMzkwLjQ1Mjc1IDQ2LjM2NDU1NTcsMzc2LjE2MzMyNSBDNDYuMzY0NTU1NywzNjguMzI3Nzk2IDQ2LjkzODEwMTksMzYxLjIyMzk2NSA0OC44MTUxMjA2LDM1NC42OTMyMjQgQzUzLjcxMjcwNTIsMzUyLjgxNDgzMyA2MC4yNDQzNjE4LDM1MS44MzYxMjggNjguNDg3NjgwMSwzNTEuODM2MTI4IEM4MS44ODA1NjM2LDM1MS44MzYxMjggODUuOTYwNzQwNiwzNTkuMjY2MDQxIDg1Ljk2MDc0MDYsMzcyLjI0NTc2MSBMODUuOTYwNzQwNiwzNzcuMjI2NDI0IEw1Ni4wODIwMjA5LDM3Ny4yMjY0MjQgTDU2LjA4MjAyMDksMzc3LjIyNjQ4MSBMNTYuMDgyMDIwOSwzNzcuMjI2NDgxIFogTTY4LjQ4NzczNzIsMzYwLjAwMDQ4NCBDNjUuNTUyOTM3MywzNjAuMDAwNDg0IDYwLjg5NzQ0MTcsMzYwLjA4MTc5IDU3LjA2MTE4MzQsMzYwLjgxMzQ4OSBDNTYuNjU0NzA5NCwzNjIuNzczNTg3IDU2LjE2MjQxMjMsMzY1LjQ2ODA3IDU1Ljk5ODk0MjIsMzcwLjQ0ODc5IEw3Ni40MDg1NzUyLDM3MC40NDg3OSBDNzYuNDA4NTc1MiwzNjMuNjcwOTg1IDc1LjE4MzcyMTYsMzYwLjAwMDQ4NCA2OC40ODc3MzcyLDM2MC4wMDA0ODQgTDY4LjQ4NzczNzIsMzYwLjAwMDQ4NCBMNjguNDg3NzM3MiwzNjAuMDAwNDg0IFogTTEwNC4zMjU0MjUsMzYzLjE4MTQzMyBMMTA0LjMyNTQyNSwzOTguMjg4Nzk0IEw5NC41Mjg0MjYxLDM5OC4yODg3OTQgTDk0LjUyODQyNjEsMzU4Ljc3NDI1OCBDMTAyLjc3NDQ4OSwzNTQuMjg1Mzc4IDExMS41MDkxODksMzUyLjg5NjU5NiAxMTcuMjI2MDY5LDM1Mi40ODg3NSBMMTE3LjIyNjA2OSwzNjAuNjUzMDQ5IEMxMTMuMjI1NDI1LDM2MC45NzkxODkgMTA4LjE2MTY4MywzNjEuNDY4NzQyIDEwNC4zMjU0MjUsMzYzLjE4MTQzMyBMMTA0LjMyNTQyNSwzNjMuMTgxNDMzIEwxMDQuMzI1NDI1LDM2My4xODE0MzMgWiBNMTQzLjEwMzI4NywzOTkuNDMwNTEyIEMxMjguNDg3MzIzLDM5OS40MzA1MTIgMTIxLjg3NTI3NSwzOTIuMjQ3NjA1IDEyMS44NzUyNzUsMzc1LjgzNzI0MyBDMTIxLjg3NTI3NSwzNTguNDQ4MTc2IDEzMC42MTAwMzIsMzUxLjgzNjEyOCAxNDMuMTAzMjg3LDM1MS44MzYxMjggQzE1Ny43MTQ3OTIsMzUxLjgzNjEyOCAxNjQuMzI4NjEzLDM1OS4wMTkwMzUgMTY0LjMyODYxMywzNzUuNDI5Mzk3IEMxNjQuMzI4NjEzLDM5Mi44MTg1MjEgMTU1LjU5MjA4MiwzOTkuNDMwNTEyIDE0My4xMDMyODcsMzk5LjQzMDUxMiBMMTQzLjEwMzI4NywzOTkuNDMwNTEyIEwxNDMuMTAzMjg3LDM5OS40MzA1MTIgWiBNMTQzLjEwMzI4NywzNjAuMDAwNDg0IEMxMzUuNTkwNjk2LDM2MC4wMDA0ODQgMTMxLjQyODM1NSwzNjQuMzI1ODM4IDEzMS40MjgzNTUsMzc1LjgzNzMgQzEzMS40MjgzNTUsMzg4LjQxMTQwNCAxMzQuOTM4NTMxLDM5MS4xODcxOTMgMTQzLjEwMzI4NywzOTEuMTg3MTkzIEMxNTAuNjEyMjc3LDM5MS4xODcxOTMgMTU0Ljc3NzMwNSwzODYuOTQwNDU5IDE1NC43NzczMDUsMzc1LjQyOTQ1NCBDMTU0Ljc3NzMwNSwzNjIuODU1MjkzIDE1MS4yNjYyNzEsMzYwLjAwMDQ4NCAxNDMuMTAzMjg3LDM2MC4wMDA0ODQgTDE0My4xMDMyODcsMzYwLjAwMDQ4NCBMMTQzLjEwMzI4NywzNjAuMDAwNDg0IFogTTIxMS41OTI4NTQsMzk4LjI4ODczNyBMMjAwLjA4MTQ0OSwzOTguMjg4NzM3IEMxOTcuMzg4NzM4LDM5MS4xMDUzNzIgMTkzLjYzMTE1NiwzODMuNzU2NzY2IDE4Ny44MzQ3NDMsMzc3LjM4OTQ5NCBMMTgyLjY5MTQ2NywzNzcuMzg5NDk0IEwxODIuNjkxNDY3LDM5OC4yODg3MzcgTDE3Mi44OTUzODMsMzk4LjI4ODczNyBMMTcyLjg5NTM4MywzMzMuNzEyNzMyIEwxODIuNjkxNDY3LDMzMy43MTI3MzIgTDE4Mi42OTE0NjcsMzcwLjc3NDgxNiBMMTg3LjI2Mzg4NCwzNzAuNzc0ODE2IEMxOTIuMjQzNjksMzY1LjYzMTA4MyAxOTYuMDc5OTQ4LDM1OS4yNjYwOTggMTk4Ljc3NTI4OSwzNTIuOTc3OTAzIEwyMDkuNzk1MzEyLDM1Mi45Nzc5MDMgQzIwNi4wNDEyNzUsMzYwLjU3MTM0MyAyMDEuMjI0OTM5LDM2Ny4yNjUwOTcgMTk1LjgzNTk3MiwzNzIuNzM0OTEzIEMyMDIuMjg2MzIzLDM4MC44OTkyNyAyMDcuMzQ3NDM1LDM4OS41NTMxMjEgMjExLjU5Mjg1NCwzOTguMjg4NzM3IEwyMTEuNTkyODU0LDM5OC4yODg3MzcgTDIxMS41OTI4NTQsMzk4LjI4ODczNyBaIE0yMjkuOTU1NzA5LDM5OS40MzA1MTIgQzIyMS4wNTkyNTQsMzk5LjQzMDUxMiAyMTcuNzExNjksMzkzLjk2MjkyNiAyMTcuNzExNjksMzg2LjQ1MTI0OSBMMjE3LjcxMTY5LDM1Mi45Nzc5MDMgTDIyNy40MjU2MSwzNTIuOTc3OTAzIEwyMjcuNDI1NjEsMzg3LjY3NDczIEMyMjcuNDI1NjEsMzkwLjEyNjY2NyAyMjkuMjIwNDY1LDM5MS4xODcxMzYgMjMxLjM0MzE3NSwzOTEuMTg3MTM2IEMyMzUuNTg4NTk1LDM5MS4xODcxMzYgMjQxLjM4NDk1LDM5MC4xMjY2NjcgMjQ2LjIwMzkxNiwzODguMDAzNSBMMjQ2LjIwMzkxNiwzNTIuOTc3OTAzIEwyNTYsMzUyLjk3NzkwMyBMMjU2LDM5Mi4zMjg5MTEgQzI0NC40MDcyODksMzk4LjY5NjU4MyAyMzUuNTA3Mjg4LDM5OS40MzA1MTIgMjI5Ljk1NTcwOSwzOTkuNDMwNTEyIEwyMjkuOTU1NzA5LDM5OS40MzA1MTIgTDIyOS45NTU3MDksMzk5LjQzMDUxMiBaIiBmaWxsPSIjNjc2MkE2Ij48L3BhdGg+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMjUuNjI3NTU3LDMxNy4yNTI3OTEgTDMwLjI1NzEzNjMsMzE3LjI1Mjc5MSBDMTMuNTQ1NzI0OSwzMTcuMjUyNzkxIDAsMzAzLjcwODIxMiAwLDI4Ni45OTgxMTEgTDAsMzAuMjU1OTg5OCBDMCwxMy41NDU3MjQ5IDEzLjU0NTcyNDksMCAzMC4yNTcxMzYzLDAgTDIyNS42Mjc1NTcsMCBDMjQyLjMzNjUxMiwwIDI1NS44ODczMTQsMTMuNTQ1NzI0OSAyNTUuODg3MzE0LDMwLjI1NTk4OTggTDI1NS44ODczMTQsMjg2Ljk5ODExMSBDMjU1Ljg4NzMxNCwzMDMuNzA4MjEyIDI0Mi4zMzY1MTIsMzE3LjI1Mjc5MSAyMjUuNjI3NTU3LDMxNy4yNTI3OTEgTDIyNS42Mjc1NTcsMzE3LjI1Mjc5MSBMMjI1LjYyNzU1NywzMTcuMjUyNzkxIFoiIGZpbGw9IiM2NzYyQTYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE2MC4zNjA4MjQsMjczLjYwMDc3OCBMMTYwLjM2MDgyNCwxNDcuNjA5Nzk3IEMxNjAuMzYwODI0LDE0Ny42MDk3OTcgMTY4LjU1NTI4MSwxMTcuNDYwMTA1IDU5LjQxNjU2ODEsMTU5Ljk0MzgyMSBDNTkuMjE2OTExMSwxNjAuNDgyNTE4IDU5LjIxNjkxMTEsNDMuNDM5NzQ0MSA1OS4yMTY5MTExLDQzLjQzOTc0NDEgTDk0Ljg3NjU4MDksNDMuMjIwOTIzOSBMOTQuODc2NTgwOSwxMTguMjExMzk5IEM5NC44NzY1ODA5LDExOC4yMTEzOTkgMTk0LjcyMjk2OSw3OC44ODU2NzExIDE5NC43MjI5NjksMTQ4LjAzNDgyNSBMMTk0LjcyMjk2OSwyNzMuNjAxMTA2IEwxNjAuMzYwODI0LDI3My42MDExMDYgTDE2MC4zNjA4MjQsMjczLjYwMDc3OCBMMTYwLjM2MDgyNCwyNzMuNjAwNzc4IFogTTE4MC42ODA4MDQsODguNjA2NDY0NSBMMTQyLjg1NjAyNiw4OC42MDY0NjQ1IEMxNTYuNDcwODY5LDcxLjk2MDI0MDYgMTY4Ljc5NTg4NSw0My40Mzk0MTY1IDE2OC43OTU4ODUsNDMuNDM5NDE2NSBMMjA3LjkwNTI0OSw0My40Mzk0MTY1IEMyMDcuOTA1MjQ5LDQzLjQzOTU4MDMgMjAxLjIxMDQzMSw2Mi4wMjU1NDA2IDE4MC42ODA4MDQsODguNjA2NDY0NSBMMTgwLjY4MDgwNCw4OC42MDY0NjQ1IEwxODAuNjgwODA0LDg4LjYwNjQ2NDUgWiBNNTkuODY0MzYzNCwyNzMuMzgxOTU4IEw1OS44NjQzNjM0LDIwMS42MzM5ODYgTDk1Ljc0MTU0MzIsMjM3LjUxMTE2NiBMNTkuODY0MzYzNCwyNzMuMzgxOTU4IEw1OS44NjQzNjM0LDI3My4zODE5NTggWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIzNjFweCIgdmlld0JveD0iMCAwIDI1NiAzNjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjU1LjU1NDgxMyw3MC43NjU3MTQzIEwyMzIuMzEzNjcsMzMxLjEyNTQ1MSBMMTI3Ljg0Mzg2OCwzNjAuMDg3OTEyIEwyMy42NjE3MTQzLDMzMS4xNjYyNDIgTDAuNDQ1MTg2ODEzLDcwLjc2NTcxNDMgTDI1NS41NTQ4MTMsNzAuNzY1NzE0MyBMMjU1LjU1NDgxMyw3MC43NjU3MTQzIFoiIGZpbGw9IiNFNDREMjYiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTI4LDMzNy45NTAyNDIgTDIxMi40MTY3MDMsMzE0LjU0NjYzNyBMMjMyLjI3NzgwMiw5Mi4wNTczMTg3IEwxMjgsOTIuMDU3MzE4NyBMMTI4LDMzNy45NTAyNDIgTDEyOCwzMzcuOTUwMjQyIFoiIGZpbGw9IiNGMTY1MjkiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNODIuODIwMjE5OCwxNTUuOTMyMTMyIEwxMjgsMTU1LjkzMjEzMiBMMTI4LDEyMy45OTQ3MjUgTDQ3LjkxNzAxMSwxMjMuOTk0NzI1IEw0OC42ODE0OTQ1LDEzMi41NjI5ODkgTDU2LjUzMDk4OSwyMjAuNTcyODM1IEwxMjgsMjIwLjU3MjgzNSBMMTI4LDE4OC42MzYxMzIgTDg1LjczODkwMTEsMTg4LjYzNjEzMiBMODIuODIwMjE5OCwxNTUuOTMyMTMyIEw4Mi44MjAyMTk4LDE1NS45MzIxMzIgWiIgZmlsbD0iI0VCRUJFQiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik05MC4wMTc3NTgyLDIzNi41NDE4OSBMNTcuOTU3OTc4LDIzNi41NDE4OSBMNjIuNDMyMzUxNiwyODYuNjg3NjQ4IEwxMjcuODUzMDExLDMwNC44NDg4NzkgTDEyOCwzMDQuODA4MDg4IEwxMjgsMjcxLjU4MDEzMiBMMTI3Ljg2MDA0NCwyNzEuNjE3NDA3IEw5Mi4yOTE1MTY1LDI2Mi4wMTMxODcgTDkwLjAxNzc1ODIsMjM2LjU0MTg5IEw5MC4wMTc3NTgyLDIzNi41NDE4OSBaIiBmaWxsPSIjRUJFQkVCIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTI0LjE4MDc0NzMsMCBMNDAuNDEwNzI1MywwIEw0MC40MTA3MjUzLDE2LjAzNTE2NDggTDU1LjI1NzMxODcsMTYuMDM1MTY0OCBMNTUuMjU3MzE4NywwIEw3MS40ODgsMCBMNzEuNDg4LDQ4LjU1ODQxNzYgTDU1LjI1ODAyMiw0OC41NTg0MTc2IEw1NS4yNTgwMjIsMzIuMjk4MTk3OCBMNDAuNDExNDI4NiwzMi4yOTgxOTc4IEw0MC40MTE0Mjg2LDQ4LjU1ODQxNzYgTDI0LjE4MTQ1MDUsNDguNTU4NDE3NiBMMjQuMTgxNDUwNSwwIEwyNC4xODA3NDczLDAgTDI0LjE4MDc0NzMsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTkyLjgzMDk0NTEsMTYuMTAyNjgxMyBMNzguNTQyNzY5MiwxNi4xMDI2ODEzIEw3OC41NDI3NjkyLDAgTDEyMy4zNTY4MzUsMCBMMTIzLjM1NjgzNSwxNi4xMDI2ODEzIEwxMDkuMDYyMzMsMTYuMTAyNjgxMyBMMTA5LjA2MjMzLDQ4LjU1ODQxNzYgTDkyLjgzMTY0ODQsNDguNTU4NDE3NiBMOTIuODMxNjQ4NCwxNi4xMDI2ODEzIEw5Mi44MzA5NDUxLDE2LjEwMjY4MTMgTDkyLjgzMDk0NTEsMTYuMTAyNjgxMyBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEzMC40NjkyNzUsMCBMMTQ3LjM5MjcwMywwIEwxNTcuODAyOTAxLDE3LjA2MTk3OCBMMTY4LjIwMjU0OSwwIEwxODUuMTMyMzA4LDAgTDE4NS4xMzIzMDgsNDguNTU4NDE3NiBMMTY4Ljk2OTE0Myw0OC41NTg0MTc2IEwxNjguOTY5MTQzLDI0LjQ5MDE5NzggTDE1Ny44MDI5MDEsNDEuNzU1NDI4NiBMMTU3LjUyMzY5Miw0MS43NTU0Mjg2IEwxNDYuMzQ5NzE0LDI0LjQ5MDE5NzggTDE0Ni4zNDk3MTQsNDguNTU4NDE3NiBMMTMwLjQ2OTI3NSw0OC41NTg0MTc2IEwxMzAuNDY5Mjc1LDAgTDEzMC40NjkyNzUsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTE5My4yMDk2NywwIEwyMDkuNDQ0NTcxLDAgTDIwOS40NDQ1NzEsMzIuNTA3NzgwMiBMMjMyLjI2ODY1OSwzMi41MDc3ODAyIEwyMzIuMjY4NjU5LDQ4LjU1ODQxNzYgTDE5My4yMDk2Nyw0OC41NTg0MTc2IEwxOTMuMjA5NjcsMCBMMTkzLjIwOTY3LDAgWiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMjcuODg5NTgyLDIyMC41NzI4MzUgTDE2Ny4yMTY1MjcsMjIwLjU3MjgzNSBMMTYzLjUwOTQ1MSwyNjEuOTkyNzkxIEwxMjcuODg5NTgyLDI3MS42MDY4NTcgTDEyNy44ODk1ODIsMzA0LjgzMzQwNyBMMTkzLjM2MjI4NiwyODYuNjg3NjQ4IEwxOTMuODQyNjM3LDI4MS4yOTE5NTYgTDIwMS4zNDc1MTYsMTk3LjIxMjEzMiBMMjAyLjEyNjc2OSwxODguNjM2MTMyIEwxMjcuODg5NTgyLDE4OC42MzYxMzIgTDEyNy44ODk1ODIsMjIwLjU3MjgzNSBMMTI3Ljg4OTU4MiwyMjAuNTcyODM1IFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljg4OTU4MiwxNTUuODU0MDY2IEwxMjcuODg5NTgyLDE1NS45MzIxMzIgTDIwNS4wMzI3OTEsMTU1LjkzMjEzMiBMMjA1LjY3MzQ5NSwxNDguNzUzNTgyIEwyMDcuMTI4NjE1LDEzMi41NjI5ODkgTDIwNy44OTIzOTYsMTIzLjk5NDcyNSBMMTI3Ljg4OTU4MiwxMjMuOTk0NzI1IEwxMjcuODg5NTgyLDE1NS44NTQwNjYgTDEyNy44ODk1ODIsMTU1Ljg1NDA2NiBaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyNTZweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMCwwIEwyNTYsMCBMMjU2LDI1NiBMMCwyNTYgTDAsMCBaIiBmaWxsPSIjRjdERjFFIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTY3LjMxMTc0NiwyMTMuOTMyMjkyIEw4Ni45MDI2NTQsMjAyLjA3NjI0MSBDOTAuNjgyMTA3OSwyMDguNzc3MzQ2IDk0LjEyMDIyODYsMjE0LjQ0NzEzNyAxMDIuMzY3MDg2LDIxNC40NDcxMzcgQzExMC4yNzIyMDMsMjE0LjQ0NzEzNyAxMTUuMjU2MDc2LDIxMS4zNTQ4MTkgMTE1LjI1NjA3NiwxOTkuMzI2ODgzIEwxMTUuMjU2MDc2LDExNy41Mjg3ODcgTDEzOS4zMTM1NzUsMTE3LjUyODc4NyBMMTM5LjMxMzU3NSwxOTkuNjY2OTk3IEMxMzkuMzEzNTc1LDIyNC41ODQzMyAxMjQuNzA3NzU5LDIzNS45MjU5NDMgMTAzLjM5ODQsMjM1LjkyNTk0MyBDODQuMTUzMjk1MiwyMzUuOTI1OTQzIDcyLjk4MTk0MjksMjI1Ljk1ODYwMyA2Ny4zMTEzMzk3LDIxMy45MzAyNiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xNTIuMzgwOTUyLDIxMS4zNTQ0MTMgTDE3MS45Njk0MjIsMjAwLjAxMjggQzE3Ny4xMjU5OTQsMjA4LjQzMzk4MSAxODMuODI3OTExLDIxNC42MTk4MzUgMTk1LjY4NDM2OCwyMTQuNjE5ODM1IEMyMDUuNjUyNTIxLDIxNC42MTk4MzUgMjEyLjAwOTA0MSwyMDkuNjM1OTYyIDIxMi4wMDkwNDEsMjAyLjc2MjE1OSBDMjEyLjAwOTA0MSwxOTQuNTEzNjc2IDIwNS40Nzk0MTYsMTkxLjU5MjAyNSAxOTQuNDgxMTY4LDE4Ni43ODIwNyBMMTg4LjQ2ODQxOSwxODQuMjAyNTY1IEMxNzEuMTExMjEzLDE3Ni44MTQ3MyAxNTkuNTk3MzA4LDE2Ny41MzUzNCAxNTkuNTk3MzA4LDE0Ny45NDQ4MzggQzE1OS41OTczMDgsMTI5LjkwMTMwOCAxNzMuMzQ0NTA4LDExNi4xNTMyOTUgMTk0LjgyNTc1MiwxMTYuMTUzMjk1IEMyMTAuMTE5OTI0LDExNi4xNTMyOTUgMjIxLjExNzc2NSwxMjEuNDgwOTQgMjI5LjAyMTY2MywxMzUuNDAwNDMyIEwyMTAuMjkwNTksMTQ3LjQyODc3NSBDMjA2LjE2NjE0NiwxNDAuMDQwMTI3IDIwMS42OTk1NTYsMTM3LjExOTI4OSAxOTQuODI2MTU5LDEzNy4xMTkyODkgQzE4Ny43ODA0NywxMzcuMTE5Mjg5IDE4My4zMTIyNTQsMTQxLjU4NzA5OCAxODMuMzEyMjU0LDE0Ny40Mjg3NzUgQzE4My4zMTIyNTQsMTU0LjY0NjM0OSAxODcuNzgwNDcsMTU3LjU2ODQwNiAxOTguMDg5OTU2LDE2Mi4wMzY2MjIgTDIwNC4xMDM5MjQsMTY0LjYxNDA5NSBDMjI0LjU1MzQ0OCwxNzMuMzc4NjQxIDIzNi4wNjczNTIsMTgyLjMxMzQ0OCAyMzYuMDY3MzUyLDIwMi40MTgzODcgQzIzNi4wNjczNTIsMjI0LjA3MTkyNCAyMTkuMDU1MTM3LDIzNS45Mjc5NzUgMTk2LjIwMDQzMiwyMzUuOTI3OTc1IEMxNzMuODYwOTc4LDIzNS45Mjc5NzUgMTU5LjQyNTgyOSwyMjUuMjc0MzExIDE1Mi4zODEzNTksMjExLjM1NDQxMyIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyMzNweCIgdmlld0JveD0iMCAwIDI1NiAyMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMC4zODc3OTQyMDIsMCBMMjQuMTc5OTAzNCwwIEwyNC4xNzk5MDM0LDE1Ny44OTMwNjIgTDExOC4yNjY4NjIsMTU3Ljg5MzA2MiBMMTE4LjI2Njg2MiwxNzcuMzU5MzIxIEwwLjM4Nzc5NTM3NiwxNzcuMzU5MzIxIEwwLjM4Nzc5NTM3NiwzLjMzNzU5NTI0ZS0xNCBMMC4zODc3OTQyMDIsMCBaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTE4My4xNTQ0MjMsNDYuNTAyNzQ5OSBDMTk5LjM3NjMyNiw0NC4zMzk4Mjk0IDIxNi42Nzk2NTIsNDcuNTg0MjA3OSAyMjkuNjU3MTgyLDU4LjM5ODgwNDYgQzI0My43MTYxMzQsNjguMTMxOTM4NiAyNTEuMjg2Mzc1LDg1LjQzNTI4NjMgMjUyLjM2NzgzMywxMDEuNjU3MTczIEMyNTQuNTMwNzQ5LDEyMS4xMjM0NDEgMjUyLjM2NzgzMywxNDAuNTg5NzA5IDI0MS41NTMyMTksMTU2LjgxMTYwMyBDMjMxLjgyMDA5OCwxNjkuNzg5MTE2IDIxNi42Nzk2NTMsMTc4LjQ0MDc5NyAxOTkuMzc2MzI2LDE3OS41MjIyNTUgQzE4My4xNTQ0MjMsMTgxLjY4NTE3IDE2NC43Njk2MDMsMTc4LjQ0MDc5NyAxNTAuNzEwNjUxLDE2Ny42MjYyIEMxMzcuNzMzMTIxLDE1Ni44MTE2MDMgMTMxLjI0NDM3NCwxNDAuNTg5NzA5IDEyOS4wODE0NTgsMTI0LjM2NzgyMyBDMTI2LjkxODU0MiwxMDcuMDY0NDcgMTI5LjA4MTQ1OCw4Ny41OTgyMDIxIDEzOS44OTYwMzcsNzIuNDU3NzczOCBDMTQ4LjU0NzczNSw1Ny4zMTczNDE5IDE2NS44NTEwNjEsNDcuNTg0MjA3OSAxODMuMTU0NDIzLDQ2LjUwMjc0OTkgTDE4My4xNTQ0MjMsNDYuNTAyNzQ5OSBaIE0xODYuMzk4Nzk2LDY0Ljg4NzU2MTQgQzE5Ny4yMTMzNzUsNjMuODA2MDk4OCAyMDkuMTA5NDQ4LDY3LjA1MDQ3NzIgMjE3Ljc2MTExLDc0LjYyMDY5MDggQzIyNS4zMzEzNSw4My4yNzIzNzE3IDIyOS42NTcxODIsOTQuMDg2OTU5IDIzMC43Mzg2NCwxMDQuOTAxNTU2IEMyMzEuODIwMDk4LDExNi43OTc2MSAyMzAuNzM4NjQsMTI5Ljc3NTEyMiAyMjUuMzMxMzUsMTQwLjU4OTcxIEMyMTkuOTI0MDYxLDE1MS40MDQyOTkgMjEwLjE5MDkwNCwxNTguOTc0NTIgMTk4LjI5NDg2OSwxNjEuMTM3NDM2IEMxODcuNDgwMjU0LDE2My4zMDAzNTIgMTc1LjU4NDIxNywxNjAuMDU1OTc4IDE2OC4wMTM5NzcsMTUzLjU2NzIzMSBDMTU5LjM2MjMxMywxNDcuMDc4NDY2IDE1My45NTUwMjUsMTM3LjM0NTMzNiAxNTEuNzkyMDczLDEyNy42MTIxOTggQzE0OS42MjkxNTcsMTEzLjU1MzIyNyAxNTAuNzEwNjUxLDk5LjQ5NDI1NzkgMTU2LjExNzk0LDg2LjUxNjc0NTQgQzE2MS41MjUyMjksNzQuNjIwNjkwOCAxNzMuNDIxMzAxLDY1Ljk2OTAxOTMgMTg2LjM5ODc5NSw2NC44ODc1NjE0IEwxODYuMzk4Nzk2LDY0Ljg4NzU2MTQgWiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0wLjM4Nzc5NDIwMiwyMDUuNDc3MjggTDI1NS42MTIyMDcsMjA1LjQ3NzI4IEwyNTUuNjEyMjA3LDIzMi41MTM3NjEgTDAuMzg3Nzk0MjAyLDIzMi41MTM3NjEgTDAuMzg3Nzk0MjAyLDIwNS40NzcyOCBMMC4zODc3OTQyMDIsMjA1LjQ3NzI4IFoiIGZpbGw9IiMzNDkyRkYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3JUsukm.svg"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSI3MHB4IiB2aWV3Qm94PSIwIDAgMjU2IDcwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTEyOS4yODY2NzQsMC4xODE5ODQ0ODYgQzEyOS4xMDk5MDUsMC4xODQxNDMwMDIgMTI4LjkzMTEwNiwwLjIyNjMzMzM1NiAxMjguNzczMzQ5LDAuMzE4ODY4OTM4IEMxMjguNDU4MzY1LDAuNTAzNzk3NjM5IDEyOC4yNjAwMTksMC44NDM0MjI4NjcgMTI4LjI2MDAxOSwxLjIwODYzNTE0IEwxMjguMjYwMDE5LDI3LjM4ODIxNCBDMTI4LjI2MDAxOSwyNy42NDU0NDg2IDEyOC4xNDAyMzksMjcuODc1MzA5IDEyNy45MTc4MDQsMjguMDA0MzE0OSBDMTI3LjY5NDgwNywyOC4xMzM2NDQ1IDEyNy40MjI2ODgsMjguMTMzNjQ0NSAxMjcuMTk5MTQ3LDI4LjAwNDMxNDkgTDEyMi45MjE0MzEsMjUuNTQwMzQ3MyBDMTIyLjI4NDA4NiwyNS4xNzI4MzQgMTIxLjUwNTYxMiwyNS4xNzMwNTQyIDEyMC44NjgxMjUsMjUuNTQwMzQ3MyBMMTAzLjc5MTQ3OSwzNS4zOTYyMDkxIEMxMDMuMTUzMDM3LDM1Ljc2NDQ5MDggMTAyLjc2NDgyNCwzNi40NzMwMTUgMTAyLjc2NDgyNCwzNy4yMDk5MDY1IEwxMDIuNzY0ODI0LDU2LjkyMTYzMDIgQzEwMi43NjQ4MjQsNTcuNjU3OTY5MSAxMDMuMTUzNTg1LDU4LjMzMjIyMDQgMTAzLjc5MTQ3OSw1OC43MDExNTgzIEwxMjAuODY4MTI1LDY4LjU1NzAyMDIgQzEyMS41MDY1NjYsNjguOTI1NDA5OCAxMjIuMjgyOTg5LDY4LjkyNTQwOTggMTIyLjkyMTQzMSw2OC41NTcwMjAyIEwxMzkuOTk4MDc3LDU4LjcwMTE1ODMgQzE0MC42MzU5Nyw1OC4zMzIyMjA0IDE0MS4wMjQ3MzIsNTcuNjU3OTY5MSAxNDEuMDI0NzMyLDU2LjkyMTYzMDIgTDE0MS4wMjQ3MzIsNy43NzkyMDk3MSBDMTQxLjAyNDczMiw3LjAzMTY2MzgxIDE0MC42MTY4MDcsNi4zMzAxMjQ1MiAxMzkuOTYzODU2LDUuOTY1NDU2MTkgTDEyOS43OTk5OTksMC4yODQ2NDc4MjUgQzEyOS42NDAzOSwwLjE5NTYxNzY3MyAxMjkuNDYzNDQ0LDAuMTgwMDY3NzIzIDEyOS4yODY2NzQsMC4xODIwNDA2MDcgTDEyOS4yODY2NzQsMC4xODE5ODQ0ODYgWiBNMTkuNDM0ODg5NywyNC43ODczNjE5IEMxOS4xMDkyMzg3LDI0LjgwMDQ4NTcgMTguODAzMjkwNywyNC44NTc0NDQ2IDE4LjUxMDkwMjQsMjUuMDI2OTY1OCBMMS40MzQyNTE4NywzNC44ODI4Mjc3IEMwLjc5Nzk0NzI1MSwzNS4yNTA2NjkgMC40MDc2MDEyMTQsMzUuOTIwNjUwOCAwLjQwNzYwMTIxNCwzNi42NjIzNjAxIEwwLjQ0MTc0ODkzOCw2My4xMTU3MDc4IEMwLjQ0MTc0ODkzOCw2My40ODM2NjE0IDAuNjMxNTczMTUzLDYzLjgyNTMyODYgMC45NTUwNzg1ODMsNjQuMDA1NTgxOSBDMS4yNzIxNjAyNyw2NC4xOTUzNjMgMS42NjU3MTgxOCw2NC4xOTUzNjMgMS45ODE3MjkyNCw2NC4wMDU1ODE5IEwxMi4xMTEzNjQzLDU4LjE4Nzc3NjkgQzEyLjc1MzAyNjQsNTcuODA2NTc0MyAxMy4xNzIyMzYxLDU3LjE0MzQ5NTQgMTMuMTcyMjM2MSw1Ni40MDgyNDg4IEwxMy4xNzIyMzYxLDQ0LjA1NDI1NDMgQzEzLjE3MjIzNjEsNDMuMzE3MzYyOCAxMy41NTk4Nzk3LDQyLjY0MTAzNSAxNC4xOTg4OTExLDQyLjI3NDcyMTkgTDE4LjUxMDgyOSwzOS43NzY1OTM2IEMxOC44MzI2NTUxLDM5LjU5MDUzMzggMTkuMTc4MTYwMSwzOS41MDI4MTYxIDE5LjUzNzQ3OTcsMzkuNTAyODE2MSBDMTkuODg5NDI1NywzOS41MDI4MTYxIDIwLjI1MTIxMDMsMzkuNTkwNDI1OSAyMC41NjQxMzQ2LDM5Ljc3NjU5MzYgTDI0Ljg3NjA3MjYsNDIuMjc0NzIxOSBDMjUuNTE1MDYyNCw0Mi42NDEwMzUgMjUuOTAyNzIzMiw0My4zMTczNjI4IDI1LjkwMjcyMzIsNDQuMDU0MjU0MyBMMjUuOTAyNzIzMiw1Ni40MDgyNDg4IEMyNS45MDI3MjMyLDU3LjE0MzQ5NTQgMjYuMzI2MTIwNSw1Ny44MTA4NDgyIDI2Ljk2MzU5OTMsNTguMTg3Nzc2OSBMMzcuMDkzMjM0NCw2NC4wMDU1ODE5IEMzNy40MTEzNjA4LDY0LjE5NTM2MyAzNy44MDQzNjYxLDY0LjE5NTM2MyAzOC4xMTk4ODUxLDY0LjAwNTU4MTkgQzM4LjQzNDMyMDQsNjMuODI1MzI4NiAzOC42MzMyMTA0LDYzLjQ4MzY2MTQgMzguNjMzMjEwNCw2My4xMTU3MDc4IEwzOC42NjczNTgxLDM2LjY2MjM2MDEgQzM4LjY2NzM1ODEsMzUuOTIwNjUwOCAzOC4yODEzMzc3LDM1LjI1MDY2OSAzNy42NDA3MDc1LDM0Ljg4MjgyNzcgTDIwLjU2NDA5NTgsMjUuMDI2OTY1OCBDMjAuMjc1MjY0OCwyNC44NTc0NDQ2IDE5Ljk2Nzk2MTEsMjQuODAwNzE4OCAxOS42NDAxMDg1LDI0Ljc4NzM2MTkgTDE5LjQzNDc3NzUsMjQuNzg3MzYxOSBMMTkuNDM0ODg5NywyNC43ODczNjE5IFogTTE3Mi44ODUxNzEsMjUuMDI2OTY1OCBDMTcyLjUyODQxMSwyNS4wMjY1MzQxIDE3Mi4xNzg4MzEsMjUuMTE2NzY0NCAxNzEuODU4NTE2LDI1LjMwMDczOSBMMTU0Ljc4MTg3LDM1LjE1NjYwMDkgQzE1NC4xNDM5NzYsMzUuNTI0OTkwNSAxNTMuNzU1MjE5LDM2LjE5OTI0MTggMTUzLjc1NTIxOSwzNi45MzYxMzMzIEwxNTMuNzU1MjE5LDU2LjY0Nzg1MjcgQzE1My43NTUyMTksNTcuMzg5MDEzNyAxNTQuMTcyNzIzLDU4LjA2MTA3NjMgMTU0LjgxNjA5MSw1OC40MjczODUxIEwxNzEuNzU1ODUyLDY4LjA3NzkxNiBDMTcyLjM4MTQyNSw2OC40MzUxMzc0IDE3My4xNDUyNTUsNjguNDYxODU1NSAxNzMuNzc0OTMzLDY4LjExMTg0NzggTDE4NC4wNDE0NTYsNjIuMzk2NzYyMiBDMTg0LjM2NzI0Niw2Mi4yMTYwNjg1IDE4NC41ODc2MzQsNjEuODc4NTYzIDE4NC41ODkwMDMsNjEuNTA2OTk2IEMxODQuNTkxMTYxLDYxLjEzNTMyMTEgMTg0LjM5NzM2MSw2MC44MDIxOTMxIDE4NC4wNzU2NzgsNjAuNjE3MjI5OCBMMTY2Ljg5NjM2NCw1MC43NjEzNjggQzE2Ni41NzQ2OCw1MC41Nzc5NDE2IDE2Ni4zNDg4MTcsNTAuMjA2MjY2NyAxNjYuMzQ4ODE3LDQ5LjgzNzMyODggTDE2Ni4zNDg4MTcsNDMuNjc3NDE2MyBDMTY2LjM0ODgxNyw0My4zMDkxMzQ2IDE2Ni41Nzc0MTcsNDIuOTcxNjI0NyAxNjYuODk2MzY0LDQyLjc4Nzc1OCBMMTcyLjIzNDk1NywzOS43MDc2OTM4IEMxNzIuNTUyNTM1LDM5LjUyMzkzNSAxNzIuOTQyNjYxLDM5LjUyMzkzNSAxNzMuMjYxNjA3LDM5LjcwNzY5MzggTDE3OC42MDAyLDQyLjc4Nzc1OCBDMTc4LjkxOTE0Nyw0Mi45NzE2MjQ3IDE3OS4xMTM1MjYsNDMuMzA5MTM0NiAxNzkuMTEzNTI2LDQzLjY3NzQxNjMgTDE3OS4xMTM1MjYsNDguNTM3MDEyOSBDMTc5LjExMzUyNiw0OC45MDU4Mzg1IDE3OS4zMDc5MDQsNDkuMjQyODAwMSAxNzkuNjI2ODUxLDQ5LjQyNjY2NjggQzE3OS45NDcxNjYsNDkuNjExMDgxOCAxODAuMzM0NTU5LDQ5LjYxMTg0NTkgMTgwLjY1MzUwNiw0OS40MjY2NjY4IEwxOTAuODg1ODA0LDQzLjQ3MjE5MzIgQzE5MS41MjA5NjEsNDMuMTAzMjU1MyAxOTEuOTEyNDU1LDQyLjQyNzI1MTMgMTkxLjkxMjQ1NSw0MS42OTI2NjUxIEwxOTEuOTEyNDU1LDM2LjkzNTc4NzkgQzE5MS45MTI0NTUsMzYuMjAxMDg1MiAxOTEuNTIyMzI5LDM1LjUyNTE5MzQgMTkwLjg4NTgwNCwzNS4xNTYyNTU1IEwxNzMuOTExODIxLDI1LjMwMDM5MzcgQzE3My41OTIxODQsMjUuMTE1MTA2NiAxNzMuMjQxOTMsMjUuMDI3MDYwOCAxNzIuODg1MTcxLDI1LjAyNjYyMDQgTDE3Mi44ODUxNzEsMjUuMDI2OTY1OCBaIE0xMjEuODI2MzMzLDM5Ljc0MjMxNjQgQzEyMS45MTUzNjQsMzkuNzQyMzE2NCAxMjIuMDIwMTY0LDM5Ljc2NDIwMzcgMTIyLjEwMDEwNywzOS44MTAyMTAzIEwxMjcuOTUyMDI1LDQzLjE5ODIxNzEgQzEyOC4xMTA4MTQsNDMuMjkwMjA0NCAxMjguMjI1Nzk4LDQzLjQ1OTYxNzcgMTI4LjIyNTc5OCw0My42NDMwNDQgTDEyOC4yMjU3OTgsNTAuNDE4OTQ5NiBDMTI4LjIyNTc5OCw1MC42MDI5MjQyIDEyOC4xMTE5MSw1MC43NzI0NDU1IDEyNy45NTIwMjUsNTAuODYzODg4OCBMMTIyLjEwMDEwNyw1NC4yNTE3ODMzIEMxMjEuOTQwNzY5LDU0LjM0MjY3ODQgMTIxLjc0NjExOSw1NC4zNDI2Nzg0IDEyMS41ODY3ODEsNTQuMjUxNzgzMyBMMTE1LjczNDg2Myw1MC44NjM4ODg4IEMxMTUuNTc1NTI2LDUwLjc3MTkwMTUgMTE1LjQ2MTA5LDUwLjYwMjkyNDIgMTE1LjQ2MTA5LDUwLjQxODk0OTYgTDExNS40NjEwOSw0My42NDMwNDQgQzExNS40NjEwOSw0My40NTk2MTc3IDExNS41NzYwNzQsNDMuMjkwNjQ0NyAxMTUuNzM0ODYzLDQzLjE5ODIxNzEgTDEyMS41ODY3ODEsMzkuODEwNzU4NiBDMTIxLjY2NjcyNCwzOS43NjQ3NjQ5IDEyMS43MzcyOSwzOS43NDI4NjQ2IDEyMS44MjYzMzMsMzkuNzQyODY0NiBMMTIxLjgyNjMzMywzOS43NDIzMTY0IFoiIGZpbGw9IiM0MDQxMzciPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMjI0LjA0NjY3MSwyNC41NDc4NjE2IEMyMjMuNDU0NjI5LDI0LjU0Nzg2MTYgMjIyLjg3OTAyNywyNC42NzAyOTI2IDIyMi4zNjk4MDcsMjQuOTU4NTIzNiBMMjA2LjI1MTM2NSwzNC4yNjY4MzQ3IEMyMDUuMjA4Mjg4LDM0Ljg2NzM4NTYgMjA0LjU3NDUsMzYuMDAyNTYyMiAyMDQuNTc0NSwzNy4yMDk5MDY1IEwyMDQuNTc0NSw1NS43OTIzNjM3IEMyMDQuNTc0NSw1Ni45OTkwNTE5IDIwNS4yMDgyODgsNTguMTMyOTExNyAyMDYuMjUxMzY1LDU4LjczNTMyNzYgTDIxMC40NjA2MzksNjEuMTY1MTI1OSBDMjEyLjUwNTczLDYyLjE3MzA0OTMgMjEzLjI1OTk4LDYyLjE1NzQ5OTQgMjE0LjE5MDgxLDYyLjE1NzQ5OTQgQzIxNy4yMTg3NSw2Mi4xNTc0OTk0IDIxOC45NDc2MzEsNjAuMzIwMjU2OSAyMTguOTQ3NjMxLDU3LjEyNjk1NjkgTDIxOC45NDc2MzEsMzguNzg0MTA3OSBDMjE4Ljk0NzYzMSwzOC41MjQ3ODgxIDIxOC43MjMxMzYsMzguMzM5MTY4NyAyMTguNDY4NTI2LDM4LjMzOTE2ODcgTDIxNi40NDk0NDYsMzguMzM5MTY4NyBDMjE2LjE5MDcyNiwzOC4zMzkxNjg3IDIxNS45NzAzMzgsMzguNTI0Nzg4MSAyMTUuOTcwMzM4LDM4Ljc4NDEwNzkgTDIxNS45NzAzMzgsNTcuMTI2OTU2OSBDMjE1Ljk3MDMzOCw1OC41NDIzNjkyIDIxNC40OTYwNjcsNTkuOTY1Nzc2NyAyMTIuMTAzMjgzLDU4Ljc2OTYwMDUgTDIwNy43MjI5MDMsNTYuMjAzMDI1NyBDMjA3LjU2ODIxOSw1Ni4xMTg3MDU0IDIwNy40NDkxMjUsNTUuOTY5ODgwMSAyMDcuNDQ5MTI1LDU1Ljc5MjM2MzcgTDIwNy40NDkxMjUsMzcuMjA5OTA2NSBDMjA3LjQ0OTEyNSwzNy4wMzM0ODY3IDIwNy41NjY4NTEsMzYuODU0MzI5OCAyMDcuNzIyOTAzLDM2Ljc2NTA3OTUgTDIyMy44MDcxMTksMjcuNDkwOTMzNCBDMjIzLjk1NzY5MywyNy40MDQ0MjAxIDIyNC4xMzcwMTQsMjcuNDA0NDIwMSAyMjQuMjg2MjI0LDI3LjQ5MDkzMzQgTDI0MC4zNzA0NCwzNi43NjUwNzk1IEMyNDAuNTIzNzU1LDM2Ljg1NzA2NjggMjQwLjY0NDIxMywzNy4wMjgxMjA2IDI0MC42NDQyMTMsMzcuMjA5OTA2NSBMMjQwLjY0NDIxMyw1NS43OTIzNjM3IEMyNDAuNjQ0MjEzLDU1Ljk2OTg4MDEgMjQwLjU1NTE4Myw1Ni4xNTE2NjYgMjQwLjQwNDY2MSw1Ni4yMzcxOTUgTDIyNC4yODYyMjQsNjUuNTExMzQxMSBDMjI0LjE0Nzk2Niw2NS41OTM0NzI2IDIyMy45NTc2OTMsNjUuNTkzNDcyNiAyMjMuODA3MTE5LDY1LjUxMTM0MTEgTDIxOS42NjYyODcsNjMuMDQ3MzczNSBDMjE5LjU0MzA4Nyw2Mi45NzUwOTc3IDIxOS4zNzQ3MTksNjIuOTgwNTcxNyAyMTkuMjU1NjI1LDYzLjA0NzM3MzUgQzIxOC4xMTI2MjIsNjMuNjk1MzQyNyAyMTcuODk3NzA3LDYzLjc3MDY4MzYgMjE2LjgyNTg4Myw2NC4xNDI0NzA3IEMyMTYuNTYxNjkzLDY0LjIzNDQ1OCAyMTYuMTYwNjExLDY0LjM3NzU4OTIgMjE2Ljk2Mjc3Miw2NC44MjY5MDU5IEwyMjIuMzY5ODA3LDY4LjAwOTQ3MzcgQzIyMi44ODQ1MDEsNjguMzA3MzM2IDIyMy40NTgwNTcsNjguNDU0MzAwNyAyMjQuMDQ2NjcxLDY4LjQ1NDMwMDcgQzIyNC42NDM0OTcsNjguNDU0MzAwNyAyMjUuMjA4ODQyLDY4LjMwNzMzNiAyMjUuNzIzNTM2LDY4LjAwOTQ3MzcgTDI0MS44NDE5NzQsNTguNzM1MzI3NiBDMjQyLjg4NTA1NSw1OC4xMjg2NDIyIDI0My41MTg4MzksNTYuOTk5MDUxOSAyNDMuNTE4ODM5LDU1Ljc5MjM2MzcgTDI0My41MTg4MzksMzcuMjA5OTA2NSBDMjQzLjUxODgzOSwzNi4wMDI1NjIyIDI0Mi44ODUwNTUsMzQuODY5OTA2OCAyNDEuODQxOTc0LDM0LjI2NjgzNDcgTDIyNS43MjM1MzYsMjQuOTU4NTIzNiBDMjI1LjIxODQyMiwyNC42NzAyOTI2IDIyNC42Mzg3MTQsMjQuNTQ3ODYxNiAyMjQuMDQ2NjcxLDI0LjU0Nzg2MTYgTDIyNC4wNDY2NzEsMjQuNTQ3ODYxNiBaIE03MC43MzMyNzQ5LDI0LjkyNDI0NjMgQzcwLjM3NzQzNDksMjQuOTI0MjQ2MyA3MC4wMjUyOTg5LDI1LjAxNDA0NDkgNjkuNzA2NjI0MiwyNS4xOTgwMTk2IEw1Mi42Mjk5NzgsMzUuMDE5NzE2NCBDNTEuOTkxNTM2NSwzNS4zODc2NjU3IDUxLjYwMzMyMywzNi4wOTcxNzg1IDUxLjYwMzMyMywzNi44MzM0MTM4IEw1MS42MDMzMjMsNTYuNTQ1MTMzMiBDNTEuNjAzMzIzLDU3LjI4MjI0NDkgNTEuOTkxOTUwOSw1Ny45NTU5NDc5IDUyLjYyOTk3OCw1OC4zMjQ2NjU2IEw2OS43MDY2MjQyLDY4LjE4MDUyNzUgQzcwLjM0NTA2NTgsNjguNTQ5MjQ1MiA3MS4xMjE0ODgzLDY4LjU0OTI0NTIgNzEuNzU5OTI5OCw2OC4xODA1Mjc1IEw4OC44MzY1NzYxLDU4LjMyNDY2NTYgQzg5LjQ3MzkyMTEsNTcuOTU1OTQ3OSA4OS44NjMyMzEsNTcuMjgyMjQ0OSA4OS44NjMyMzEsNTYuNTQ1MTMzMiBMODkuODYzMjMxLDM2LjgzMzQxMzggQzg5Ljg2MzIzMSwzNi4wOTYwODYzIDg5LjQ3NTAxNzYsMzUuMzg3NjY1NyA4OC44MzY1NzYxLDM1LjAxOTcxNjQgTDcxLjc1OTkyOTgsMjUuMTk4MDE5NiBDNzEuNDQxMjU1MiwyNS4wMTQwNDQ5IDcxLjA4OTExNDksMjQuOTI0MjQ2MyA3MC43MzMyNzQ5LDI0LjkyNDI0NjMgTDcwLjczMzI3NDksMjQuOTI0MjQ2MyBaIE0yNDcuOTY3NjY1LDI1LjAyNzE4NiBMMjQ3Ljk2NzY2NSwyNS41MDYyOTAyIEwyNDkuMzAyMzE1LDI1LjUwNjI5MDIgTDI0OS4zMDIzMTUsMjkuMDMxMDczNSBMMjQ5Ljg0OTg2MSwyOS4wMzEwNzM1IEwyNDkuODQ5ODYxLDI1LjUwNjI5MDIgTDI1MS4yMTg3MzIsMjUuNTA2MjkwMiBMMjUxLjIxODczMiwyNS4wMjcxODYgTDI0Ny45Njc2NjUsMjUuMDI3MTg2IEwyNDcuOTY3NjY1LDI1LjAyNzE4NiBaIE0yNTEuNjk3ODM2LDI1LjAyNzE4NiBMMjUxLjY5NzgzNiwyOS4wMzEwNzM1IEwyNTIuMjExMTYxLDI5LjAzMTA3MzUgTDI1Mi4yMTExNjEsMjYuNjY5ODI5NiBDMjUyLjIxMTE2MSwyNi41NzM0NjA1IDI1Mi4yMTU1MjEsMjYuNDI0NDE5MyAyNTIuMjExMTYxLDI2LjIyNTAwMjYgQzI1Mi4yMDQ1OTksMjYuMDIxODYwNCAyNTIuMjExMTYxLDI1Ljg0NDc4NDQgMjUyLjIxMTE2MSwyNS43NDU3ODYyIEwyNTIuMjExMTYxLDI1LjY0Mjg1MDkgTDI1My4zNDA0NzksMjkuMDMwNzQ1NCBMMjUzLjg4ODAyNiwyOS4wMzA3NDU0IEwyNTUuMDUxNTY1LDI1LjY0Mjg1MDkgQzI1NS4wNTE1NjUsMjUuODU4MzY1NyAyNTUuMDIyNzcxLDI2LjA2NjQzMzcgMjU1LjAxNzQxOCwyNi4yNTg4Mzk1IEMyNTUuMDE1MjU5LDI2LjQ0NjA5OTQgMjU1LjAxNzQxOCwyNi41ODY3MTM4IDI1NS4wMTc0MTgsMjYuNjY5NTAxNSBMMjU1LjAxNzQxOCwyOS4wMzA3NDU0IEwyNTUuNTMwNzQzLDI5LjAzMDc0NTQgTDI1NS41MzA3NDMsMjUuMDI2ODU3OSBMMjU0Ljc3Nzg2NSwyNS4wMjY4NTc5IEwyNTMuNjE0MzI2LDI4LjQxNDg2NDYgTDI1Mi40ODUwMDgsMjUuMDI2ODU3OSBMMjUxLjY5NzkwOSwyNS4wMjY4NTc5IEwyNTEuNjk3ODM2LDI1LjAyNzE4NiBaIE0yMjguMzU4NjA5LDM3LjgyNjExNTMgQzIyMy43Njg3ODgsMzcuODI2MTE1MyAyMjEuMDM1MTU3LDM5Ljc3OTQzODUgMjIxLjAzNTE1Nyw0My4wMjc4MTk1IEMyMjEuMDM1MTU3LDQ2LjU1MTczMDcgMjIzLjc0ODI1Nyw0Ny41MTk5MDI5IDIyOC4xNTMyNzgsNDcuOTU1NzUwNCBDMjMzLjQyMzQyOSw0OC40NzE2NTMgMjMzLjgzNDA4Nyw0OS4yNDU0NDY1IDIzMy44MzQwODcsNTAuMjgyODI5MyBDMjMzLjgzNDA4Nyw1Mi4wODIxODEyIDIzMi4zOTk1MTEsNTIuODQ5NDA0MSAyMjkuMDA4ODIzLDUyLjg0OTQwNDEgQzIyNC43NDg5MDEsNTIuODQ5NDA0MSAyMjMuODEyNTkzLDUxLjc4NTk1OTQgMjIzLjQ5OTEyMSw0OS42NjY4NDA2IEMyMjMuNDYyMjEsNDkuNDM5NjA1IDIyMy4yODY5NDcsNDkuMjU2MTc4NiAyMjMuMDU0MjQyLDQ5LjI1NjE3ODYgTDIyMC45NjY3MTUsNDkuMjU2MTc4NiBDMjIwLjcwOTM2OCw0OS4yNTYxNzg2IDIyMC40ODc2MTEsNDkuNDc3NDk1NiAyMjAuNDg3NjExLDQ5LjczNTI4MjggQzIyMC40ODc2MTEsNTIuNDQ3ODMzOCAyMjEuOTYzMjUsNTUuNjU1Njk5NCAyMjkuMDA4ODIzLDU1LjY1NTY5OTQgQzIzNC4xMDkyMzMsNTUuNjU1Njk5NCAyMzcuMDUwOTMyLDUzLjY1MzY0NTYgMjM3LjA1MDkzMiw1MC4xNDU5NDQ4IEMyMzcuMDUwOTMyLDQ2LjY2ODU3NTUgMjM0LjY3NDU3NCw0NS43MzUyMjQ2IDIyOS43Mjc0OCw0NS4wODExMjUxIEMyMjQuNzI4MzY1LDQ0LjQxOTY4NjcgMjI0LjI1MjAwMiw0NC4wOTU5Nzg0IDIyNC4yNTIwMDIsNDIuOTI1MjEyMyBDMjI0LjI1MjAwMiw0MS45NTg3ODg1IDIyNC42NTU4MTgsNDAuNjY2NDY3NyAyMjguMzU4NjA5LDQwLjY2NjQ2NzcgQzIzMS42NjU3OTcsNDAuNjY2NDY3NyAyMzIuODg4MTk5LDQxLjM3OTcwMTkgMjMzLjM4OTIwNCw0My42MDk2NDc1IEMyMzMuNDMzMDA5LDQzLjgxOTI0OCAyMzMuNjE3ODA4LDQzLjk4NjAyNzkgMjMzLjgzNDA4Nyw0My45ODYwMjc5IEwyMzUuOTIxNjEzLDQzLjk4NjAyNzkgQzIzNi4wNTAyODcsNDMuOTg2MDI3OSAyMzYuMTc0ODU1LDQzLjkwNzE4MTcgMjM2LjI2MzgzMyw0My44MTQ4NjYyIEMyMzYuMzUxNDM5LDQzLjcxNjMwODQgMjM2LjQxMzAzOSw0My42MDUyNjU3IDIzNi40MDA3MTgsNDMuNDcyNzU4NyBDMjM2LjA3NzY2NiwzOS42MzIzNjU5IDIzMy41MTY1MDksMzcuODI2MTE1MyAyMjguMzU4NjA5LDM3LjgyNjExNTMgTDIyOC4zNTg2MDksMzcuODI2MTE1MyBaIE0xNzIuODUwOTUsNDIuNTE0NTUwMyBDMTcyLjc4MjcyMyw0Mi41MTQ1NTAzIDE3Mi43MDcyMTgsNDIuNTE0NTUwMyAxNzIuNjQ1NjE5LDQyLjU0ODQ4MjIgTDE2OS4zNjAzMzEsNDQuNDY0ODk5IEMxNjkuMjM3MTMyLDQ0LjUzNDk4NiAxNjkuMTU1LDQ0LjY2NTQwNzkgMTY5LjE1NSw0NC44MDcxMTQ1IEwxNjkuMTU1LDQ4LjU3MTUwNiBDMTY5LjE1NSw0OC43MTMyMTI1IDE2OS4yMzcxMzIsNDguODQzMDkwNSAxNjkuMzYwMzMxLDQ4LjkxMzcyNTcgTDE3Mi42NDU2MTksNTAuNzk1ODY1NCBDMTcyLjc2ODgxNCw1MC44NjcwNDQ2IDE3Mi45MDAyMjksNTAuODY3MDQ0NiAxNzMuMDIyMDU1LDUwLjc5NTg2NTQgTDE3Ni4zMDczNDIsNDguOTEzNzI1NyBDMTc2LjQyOTE3Myw0OC44NDM2Mzg3IDE3Ni41MTI2NzMsNDguNzEzMjEyNSAxNzYuNTEyNjczLDQ4LjU3MTUwNiBMMTc2LjUxMjY3Myw0NC44MDcxMTQ1IEMxNzYuNTEyNjczLDQ0LjY2NTQwNzkgMTc2LjQyOTIzLDQ0LjUzNTQyMjEgMTc2LjMwNzM0Miw0NC40NjQ4OTkgTDE3My4wMjIwNTUsNDIuNTQ4NDgyMiBDMTcyLjk2MTE2OCw0Mi41MTIzNDg2IDE3Mi45MTkyMjgsNDIuNTE0NTUwMyAxNzIuODUwOTUsNDIuNTE0NTUwMyBMMTcyLjg1MDk1LDQyLjUxNDU1MDMgWiIgZmlsbD0iIzgzQ0QyOSI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyMzBweCIgdmlld0JveD0iMCAwIDI1NiAyMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8cGF0aCBkPSJNMC43NTQxMjQxMTIsMTE0Ljc1MDM0MSBDMC43NTQxMjQxMTIsMTMzLjk2NDY4MiAxOS41MTY2MDMyLDE1MS45MDIwNSA0OS4wOTcyLDE2Mi4wMTI1MjUgQzQzLjE5MDIzMDksMTkxLjc1MDIzIDQ4LjAzODU2NzIsMjE1LjcxODYxOCA2NC4yMzI1Mzk1LDIyNS4wNTgxMDQgQzgwLjg3ODI2NywyMzQuNjU3MjA1IDEwNS42NzYyOTYsMjI4LjAxMjYyIDEyOS4yMTI5OTIsMjA3LjQzODgxNiBDMTUyLjE1NTg2NSwyMjcuMTgyMDc0IDE3NS4zNDM3MjksMjM0Ljk1MjAzMyAxOTEuNTIyNjEyLDIyNS41ODYwMDUgQzIwOC4xNTIwNjMsMjE1Ljk1OTAzNyAyMTMuMjEwMzgzLDE5MC4zNjUwMDMgMjA3LjE0MDA1MiwxNTkuNjk5MDk0IEMyMzcuOTQ5ODEsMTQ5LjUxMjY2NCAyNTUuMTgzOTM3LDEzNC4yMTc2MDQgMjU1LjE4MzkzNywxMTQuNzUwMzQxIEMyNTUuMTgzOTM3LDk1Ljk4MTQ2NjUgMjM2LjM4NjY0Niw3OS43NDM4NjIgMjA3LjIwNTAyNCw2OS42OTc5OTIyIEMyMTMuNzM5OTcsMzcuNzY0NzExNyAyMDguMjAyNzIsMTQuMzc3OTM2NCAxOTEuMzM4NDE2LDQuNjUyNzU1MDUgQzE3NS4wNzk0NTksLTQuNzIyOTIxOTcgMTUxLjYyMjQxOSwzLjQ0ODkzNjQxIDEyOC4zNDIxMjYsMjMuNzA5MjU5MSBDMTA0LjEyMjkzNywyLjIwNDUyNzY0IDgwLjg5NzM0NzQsLTQuMzYxMTM2NzUgNjQuMDQ5MzkyLDUuMzkyMzg5NTQgQzQ3LjgwNjIzNzcsMTQuNzk0NzM1OCA0My4xNzExMDk2LDM5LjE5ODY5NjIgNDkuMDk3MTk5OSw2OS40ODY5NDA1IEMyMC41MTU0Mjk1LDc5LjQ1MjIwMjQgMC43NTQxMjQxMTIsOTYuMDU2NTI1OSAwLjc1NDEyNDExMiwxMTQuNzUwMzQxIFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0yMDEuMDI0NTUzLDc5LjY3NDExNzggQzE5OC42ODA1MzQsNzguODY3MzA1NiAxOTYuMjUxNjUxLDc4LjEwMzkzMDggMTkzLjc1MDc3NCw3Ny4zODE5ODI4IEMxOTQuMTYxODIzLDc1LjcwNDQwODUgMTk0LjUzOTA4NSw3NC4wNDg1NTMgMTk0Ljg3NDUyLDcyLjQyMDg1MTUgQzIwMC4zODA2MzIsNDUuNjkzNDg2MiAxOTYuNzgwNTQ0LDI0LjE2MTczNDUgMTg0LjQ4NzMxNSwxNy4wNzI1NjU2IEMxNzIuNjk5NjUxLDEwLjI3NDk5MTQgMTUzLjQyMTgyNiwxNy4zNjI1NTE1IDEzMy45NTIxNTEsMzQuMzA2NDEzMiBDMTMyLjA3OTkxMiwzNS45MzU3MjM1IDEzMC4yMDI0NDQsMzcuNjYwNzU3MyAxMjguMzI1NzgyLDM5LjQ2ODY0NDEgQzEyNy4wNzUzNDMsMzguMjcyNTAyNyAxMjUuODI2OTE2LDM3LjExNjU4MTMgMTI0LjU4MTcwNywzNi4wMTA5MzQ4IEMxMDQuMTc2OTE4LDE3Ljg5MzQ1NDggODMuNzI0MjY3MSwxMC4yNTg1MDEyIDcxLjQ0MzEwNDUsMTcuMzY4MTgyMyBDNTkuNjY2NzAyMiwyNC4xODU0NjQzIDU2LjE3OTIzMDIsNDQuNDI3MzYyMSA2MS4xMzU1MzUsNjkuNzU3MDg0MSBDNjEuNjE0MTUyNCw3Mi4yMDM2NjM4IDYyLjE3MzYxMTksNzQuNzAyMTI3MyA2Mi44MDYyNzE4LDc3LjI0MjQxOTUgQzU5LjkxMTY0MTgsNzguMDY0MTEzMSA1Ny4xMTcxNTk1LDc4Ljk0MDEwMzcgNTQuNDQzMzM3LDc5Ljg3MiBDMzAuNTIwOTExMiw4OC4yMTI0MTE2IDE1LjI0Mjk1OTksMTAxLjI4Mzg5NiAxNS4yNDI5NTk5LDExNC44NDI0NDQgQzE1LjI0Mjk1OTksMTI4Ljg0NTgyNiAzMS42NDM4NTIzLDE0Mi44OTE0MzggNTYuNTYwOTE3NSwxNTEuNDA4MDEyIEM1OC41MjcyNzEsMTUyLjA4MDA4OCA2MC41Njc2MjkyLDE1Mi43MTU1NjMgNjIuNjcwMzI4NCwxNTMuMzE4ODYyIEM2MS45ODc3OTU4LDE1Ni4wNjYyODggNjEuMzk0MTQ5MywxNTguNzU4NjExIDYwLjg5NTgyNCwxNjEuMzg0NTcyIEM1Ni4xNjk5Nzk2LDE4Ni4yNzQ2OSA1OS44NjA1NjI0LDIwNi4wMzgzNzIgNzEuNjA1NTkzMSwyMTIuODEyNjE5IEM4My43MzcxMzc1LDIxOS44MDg0NzggMTA0LjA5NzI4MiwyMTIuNjE3NTUyIDEyMy45MjI5MDMsMTk1LjI4NzU3OSBDMTI1LjQ4OTg3MywxOTMuOTE3Njg3IDEyNy4wNjI0NzMsMTkyLjQ2NDk0MyAxMjguNjM3ODg4LDE5MC45NDIyMTYgQzEzMC42Nzk4NTYsMTkyLjkwODU2OSAxMzIuNzE4NjA0LDE5NC43Njk1NDYgMTM0Ljc0NjQ5NSwxOTYuNTE1MDkyIEMxNTMuOTQ5OTE0LDIxMy4wNDAyNjQgMTcyLjkxNjQzNywyMTkuNzEzMTU3IDE4NC42NTA2MDgsMjEyLjkyMDAwNyBDMTk2Ljc3MDA4NiwyMDUuOTA0MDM3IDIwMC43MDg4MjcsMTg0LjY3MzEzMSAxOTUuNTk1MjYxLDE1OC44NDIyNjkgQzE5NS4yMDQ3MjUsMTU2Ljg2OTQ4IDE5NC43NTAyNCwxNTQuODU0MDU4IDE5NC4yMzk4NDksMTUyLjgwMjg0MSBDMTk1LjY2OTY2OCwxNTIuMzgwMTI4IDE5Ny4wNzMzNDUsMTUxLjk0Mzc0MiAxOTguNDQyMDMsMTUxLjQ5MDA2MSBDMjI0LjM0NTY5MSwxNDIuOTA3NTI2IDI0MS4xOTk0NTksMTI5LjAzMjg0OCAyNDEuMTk5NDU5LDExNC44NDI0NDQgQzI0MS4xOTk0NTksMTAxLjIzNDgyOCAyMjUuNDI4ODEzLDg4LjA3NTI2MTYgMjAxLjAyNDU1Myw3OS42NzQxMTc4IEwyMDEuMDI0NTUzLDc5LjY3NDExNzggTDIwMS4wMjQ1NTMsNzkuNjc0MTE3OCBaIiBmaWxsPSIjNTNDMURFIj48L3BhdGg+CiAgICA8cGF0aCBkPSJNMTk1LjQwNjIyOCwxNDIuMzI3NTU0IEMxOTQuMTcwNjcxLDE0Mi43MzY1OSAxOTIuOTAyOTM4LDE0My4xMzE5NTMgMTkxLjYxMTA3MywxNDMuNTE1MjQ5IEMxODguNzUxNDM1LDEzNC40NjIxNCAxODQuODkxOTI4LDEyNC44MzU0OTQgMTgwLjE2ODg5OSwxMTQuODg5NTAyIEMxODQuNjc1OTQ3LDEwNS4xODA0MDUgMTg4LjM4NjIzNyw5NS42NzY4MzI3IDE5MS4xNjU4MzgsODYuNjgyNDQ0NiBDMTkzLjQ3NzI3OSw4Ny4zNTEzMDI0IDE5NS43MjA3NDgsODguMDU2NzYwNSAxOTcuODgyNTcxLDg4LjgwMTIzMTggQzIxOC43OTIxMTksOTUuOTk5Mzk2NyAyMzEuNTQ2NjcxLDEwNi42NDE5OTggMjMxLjU0NjY3MSwxMTQuODQyNDQ0IEMyMzEuNTQ2NjcxLDEyMy41Nzc0MTQgMjE3Ljc3MjE0MiwxMzQuOTE2NjI1IDE5NS40MDYyMjgsMTQyLjMyNzU1NCBMMTk1LjQwNjIyOCwxNDIuMzI3NTU0IEwxOTUuNDA2MjI4LDE0Mi4zMjc1NTQgWiBNMTg2LjEyNTg3NiwxNjAuNzE2OTIgQzE4OC4zODcwNDEsMTcyLjEzODk4NSAxODguNzEwMDA3LDE4Mi40NjU4NiAxODcuMjEyMjE2LDE5MC41Mzg4MDkgQzE4NS44NjY0NTcsMTk3Ljc5Mjg4IDE4My4xNjAwNTYsMjAyLjYyOTMyOSAxNzkuODEzNzU2LDIwNC41NjYzMjIgQzE3Mi42OTI4MTMsMjA4LjY4ODA2MyAxNTcuNDY0NzM2LDIwMy4zMzAzNjMgMTQxLjA0MTcyMiwxODkuMTk3ODc2IEMxMzkuMTU5MDI2LDE4Ny41Nzc4MTYgMTM3LjI2MjY1NSwxODUuODQ3OTU2IDEzNS4zNjAyNTEsMTg0LjAxNzE0MyBDMTQxLjcyNzA3LDE3Ny4wNTM4NjMgMTQ4LjA5MDI2OSwxNjguOTU4Nzk0IDE1NC4zMDA2MzIsMTU5Ljk2ODQyNyBDMTY1LjIyMzk2OCwxNTguOTk5MTI3IDE3NS41NDQwMDcsMTU3LjQxNDQ2IDE4NC45MDI3ODcsMTU1LjI1MTAyOSBDMTg1LjM2MzcwOCwxNTcuMTEwMzk3IDE4NS43NzMxNDcsMTU4LjkzMzk3IDE4Ni4xMjU4NzYsMTYwLjcxNjkyIEwxODYuMTI1ODc2LDE2MC43MTY5MiBMMTg2LjEyNTg3NiwxNjAuNzE2OTIgWiBNOTIuMjc2NjM3OSwyMDMuODU0MDI3IEM4NS4zMTkzOTA0LDIwNi4zMTEwNjQgNzkuNzc4Mjg3NSwyMDYuMzgxNDQ5IDc2LjQyODc2OTgsMjA0LjQ1MDA4NiBDNjkuMzAxMzkyLDIwMC4zMzkyMDUgNjYuMzM4Mzg4MSwxODQuNDcwODI1IDcwLjM4MDA5MTEsMTYzLjE4NDgxNyBDNzAuODQzMDIyOCwxNjAuNzQ3MDg1IDcxLjM5NDAzNjIsMTU4LjI0Mjk5MiA3Mi4wMjkxMDkyLDE1NS42ODMzOTQgQzgxLjI4NTMyOTEsMTU3LjczMDE4NyA5MS41Mjk3NTMzLDE1OS4yMDMwNDEgMTAyLjQ3OTIzMywxNjAuMDkwNjk2IEMxMDguNzMxNDI1LDE2OC44ODgwMDcgMTE1LjI3ODQyOSwxNzYuOTc0MjI4IDEyMS44NzYxMSwxODQuMDU0NTQ4IEMxMjAuNDM0NjI3LDE4NS40NDYxNTggMTE4Ljk5ODc3NCwxODYuNzcxMDA0IDExNy41NzA5NjYsMTg4LjAxOTQzMSBDMTA4LjgwNDIyMywxOTUuNjgyNTM5IDEwMC4wMTg5NzksMjAxLjExOTQ3MiA5Mi4yNzY2Mzc5LDIwMy44NTQwMjcgTDkyLjI3NjYzNzksMjAzLjg1NDAyNyBMOTIuMjc2NjM3OSwyMDMuODU0MDI3IFogTTU5LjY4Mjc5MDMsMTQyLjI3NDA2MSBDNDguNjY0OTM2NCwxMzguNTA4MjY3IDM5LjU2NTk3NjUsMTMzLjYxMzkwMSAzMy4zMjkwNjgzLDEyOC4yNzMwOTQgQzI3LjcyNDgyMDIsMTIzLjQ3MzY0NyAyNC44OTUzNDY0LDExOC43MDg3ODkgMjQuODk1MzQ2NCwxMTQuODQyNDQ0IEMyNC44OTUzNDY0LDEwNi42MTQ2NDkgMzcuMTYyMDI5OSw5Ni4xMjAwNTY1IDU3LjYyMDcxMzMsODguOTg3MDQ3OSBDNjAuMTAzMDg4OCw4OC4xMjE1MTQ1IDYyLjcwMTY5OTksODcuMzA1ODUzOSA2NS4zOTg0NDc4LDg2LjUzOTY2MzggQzY4LjIyNTkxMDQsOTUuNzM3MTYyNiA3MS45MzQ5OTQ1LDEwNS4zNTMzNTEgNzYuNDExMDczMSwxMTUuMDc3MzI5IEM3MS44NzcwNzc4LDEyNC45NDU2OTYgNjguMTE1MzA1NiwxMzQuNzE1MTI0IDY1LjI2MDA5MTEsMTQ0LjAyMDQxMSBDNjMuMzM3NTc3NCwxNDMuNDY3Nzg5IDYxLjQ3NDk5MTQsMTQyLjg4NjIwOSA1OS42ODI3OTAzLDE0Mi4yNzQwNjEgTDU5LjY4Mjc5MDMsMTQyLjI3NDA2MSBMNTkuNjgyNzkwMywxNDIuMjc0MDYxIFogTTcwLjYwODU0MDUsNjcuOTAzMzQ2NCBDNjYuMzYyMTE3OCw0Ni4yMDE0NjQzIDY5LjE4MjM0MSwyOS44MzAzMzQ3IDc2LjI3OTE1MTYsMjUuNzIyMjY4NyBDODMuODM4NDkxOCwyMS4zNDU5MzU2IDEwMC41NTQzMDYsMjcuNTg1NjU5IDExOC4xNzIyNTUsNDMuMjI5MjA5NyBDMTE5LjI5ODQxMyw0NC4yMjkwNzc4IDEyMC40Mjg5OTYsNDUuMjc1NjAwOSAxMjEuNTYyNzk3LDQ2LjM1ODMyMjEgQzExNC45OTc2OTQsNTMuNDA3NjczMiAxMDguNTEwNjE4LDYxLjQzMzE2MjYgMTAyLjMxMzkzLDcwLjE3ODU4OTEgQzkxLjY4NzAxMzMsNzEuMTYzNTc1OCA4MS41MTQ1ODI4LDcyLjc0NTgyODggNzIuMTYxODM1MSw3NC44NjQ2MTU4IEM3MS41NzM4MTkzLDcyLjQ5OTI4MDQgNzEuMDUyOTcwOSw3MC4xNzUzNzE2IDcwLjYwODU0MDUsNjcuOTAzMzQ2NCBMNzAuNjA4NTQwNSw2Ny45MDMzNDY0IEw3MC42MDg1NDA1LDY3LjkwMzM0NjQgWiBNMTY4LjA3NTk2NSw5MS45NzA1NjQgQzE2NS44NDAxMzksODguMTA4NjQ0MSAxNjMuNTQ0Nzg1LDg0LjMzODAyMzUgMTYxLjIwNDc4OSw4MC42NzAzNjYxIEMxNjguNDE0MjE2LDgxLjU4MTc1MDIgMTc1LjMyMTU4OSw4Mi43OTE1NjY0IDE4MS44MDgyNjQsODQuMjcyMDYyOSBDMTc5Ljg2MDgxMyw5MC41MTMzOTUxIDE3Ny40MzM1NCw5Ny4wMzkwODI1IDE3NC41NzYzMTQsMTAzLjcyODg2NyBDMTcyLjUyNjcwNiw5OS44Mzc1ODY4IDE3MC4zNTg4NSw5NS45MTQxMzA0IDE2OC4wNzU5NjUsOTEuOTcwNTY0IEwxNjguMDc1OTY1LDkxLjk3MDU2NCBMMTY4LjA3NTk2NSw5MS45NzA1NjQgWiBNMTI4LjMyODk5OSw1My4yNTY4NDg0IEMxMzIuNzgxMzQ4LDU4LjA4MDQyNzQgMTM3LjI0MDEzMiw2My40NjU4NzkgMTQxLjYyNTcxNiw2OS4zMDkwMzM3IEMxMzcuMjA2MzQ3LDY5LjEwMDI5MjIgMTMyLjczMjI3OSw2OC45OTE2OTgzIDEyOC4yMjEyMSw2OC45OTE2OTgzIEMxMjMuNzUyNzczLDY4Ljk5MTY5ODMgMTE5LjMxMTY4Niw2OS4wOTc4NzkgMTE0LjkxOTY2Nyw2OS4zMDMwMDA3IEMxMTkuMzA5Njc1LDYzLjUxNDE0MjkgMTIzLjgwNzA3LDU4LjEzNTkzMDggMTI4LjMyODk5OSw1My4yNTY4NDg0IEwxMjguMzI4OTk5LDUzLjI1Njg0ODQgTDEyOC4zMjg5OTksNTMuMjU2ODQ4NCBaIE04OC4zMjc0NDA3LDkyLjAzNzMyOTEgQzg2LjA5NDAyNjcsOTUuOTEwMTA4NCA4My45NjYzOTEyLDk5LjgxMjI0ODMgODEuOTQ4OTU4NCwxMDMuNzIxNjI4IEM3OS4xMzc5ODU4LDk3LjA1NTE3MDUgNzYuNzMzMjM0OSw5MC40OTk3MjAzIDc0Ljc2ODg5MjQsODQuMTY5OTA0MSBDODEuMjE1NzQ4Niw4Mi43MjcyMTQ0IDg4LjA5MDU0NTIsODEuNTQ3NTYzMyA5NS4yNTQxMjEsODAuNjUzNDczNyBDOTIuODgxMTQzOCw4NC4zNTQ5MTU5IDkwLjU2Njg4NzYsODguMTUzMjg4MyA4OC4zMjc0NDA3LDkyLjAzNjUyNDcgTDg4LjMyNzQ0MDcsOTIuMDM3MzI5MSBMODguMzI3NDQwNyw5Mi4wMzczMjkxIFogTTk1LjQ2MDQ0OTMsMTQ5LjcxOTk4MSBDODguMDU5MTczNiwxNDguODk0MjY1IDgxLjA4MTAxMTgsMTQ3Ljc3NTM0NyA3NC42MzU3NjQzLDE0Ni4zNzI0NzQgQzc2LjYzMTQ3ODQsMTM5LjkyOTY0IDc5LjA4OTMxOTcsMTMzLjIzNDIyNSA4MS45NTk4MTc3LDEyNi40MjQxODIgQzgzLjk4MjQ3OTIsMTMwLjMzMDc0NiA4Ni4xMTg1NjA5LDEzNC4yMzQ0OTUgODguMzY1NjQ5NywxMzguMTE1NzIxIEw4OC4zNjYwNTE4LDEzOC4xMTU3MjEgQzkwLjY1NDk2OTQsMTQyLjA2OTc0NCA5My4wMjYzMzc4LDE0NS45NDI5MjUgOTUuNDYwNDQ5MywxNDkuNzE5OTgxIEw5NS40NjA0NDkzLDE0OS43MTk5ODEgTDk1LjQ2MDQ0OTMsMTQ5LjcxOTk4MSBaIE0xMjguNTk2MDYsMTc3LjEwODU2MiBDMTI0LjAyMTA0LDE3Mi4xNzIzNjcgMTE5LjQ1NzY4NCwxNjYuNzEyMTA3IDExNS4wMDA5MTEsMTYwLjgzODc4NyBDMTE5LjMyNzM3MSwxNjEuMDA4NTE1IDEyMy43MzgyOTMsMTYxLjA5NTM5MSAxMjguMjIxMjEsMTYxLjA5NTM5MSBDMTMyLjgyNjc5NywxNjEuMDk1MzkxIDEzNy4zNzk2OTUsMTYwLjk5MTYyMyAxNDEuODYxMDAzLDE2MC43OTIxMzIgQzEzNy40NjA5MzksMTY2Ljc3MTIzMSAxMzMuMDE4MjQ0LDE3Mi4yMzk5MzcgMTI4LjU5NjA2LDE3Ny4xMDg1NjIgTDEyOC41OTYwNiwxNzcuMTA4NTYyIEwxMjguNTk2MDYsMTc3LjEwODU2MiBaIE0xNzQuNjY4NDE4LDEyNi4wNzcwODQgQzE3Ny42ODg1MzQsMTMyLjk2MDcyOSAxODAuMjM0NDU3LDEzOS42MjExNTMgMTgyLjI1NTkxMiwxNDUuOTU0MTg3IEMxNzUuNzA0NDg0LDE0Ny40NDg3NiAxNjguNjMxMDAxLDE0OC42NTI1NDQgMTYxLjE3ODI0NCwxNDkuNTQ3MDM2IEMxNjMuNTIzODcyLDE0NS44Mjk5MDcgMTY1LjgzOTMzNCwxNDEuOTk0NTMyIDE2OC4xMTQ1NzYsMTM4LjA0OTM1NyBDMTcwLjQxNjM2NSwxMzQuMDU3OTMgMTcyLjYwMTkxNywxMzAuMDYwNDY5IDE3NC42Njg0MTgsMTI2LjA3NzA4NCBMMTc0LjY2ODQxOCwxMjYuMDc3MDg0IEwxNzQuNjY4NDE4LDEyNi4wNzcwODQgWiBNMTU5Ljc1MzI1LDEzMy4yMjY5ODUgQzE1Ni4yMjExMzQsMTM5LjM1MTI3NyAxNTIuNTk0OTAzLDE0NS4xOTc2NDkgMTQ4LjkxMzU3MSwxNTAuNzE2MjMgQzE0Mi4yMDg1MDIsMTUxLjE5NTY1MSAxMzUuMjgxNDIsMTUxLjQ0MjYwMiAxMjguMjIxMjEsMTUxLjQ0MjYwMiBDMTIxLjE4OTU1NiwxNTEuNDQyNjAyIDExNC4zNDk3NSwxNTEuMjI0MjA3IDEwNy43NjMzMzEsMTUwLjc5NjY2OSBDMTAzLjkzMzU4NywxNDUuMjA1Njk0IDEwMC4yMjg1MjUsMTM5LjM0MjAyNyA5Ni43MTg5MzE3LDEzMy4yNzk2NzMgTDk2LjcxOTczNjEsMTMzLjI3OTY3MyBDOTMuMjE5MzkzNSwxMjcuMjMzODEgODkuOTk3Nzc1NCwxMjEuMTM2ODY3IDg3LjA3ODYxMTIsMTE1LjA3NDExMiBDODkuOTk2OTcwOSwxMDguOTk3Mjc5IDkzLjIxMDE0MjksMTAyLjg5MzQ5OSA5Ni42OTAzNzU1LDk2Ljg1ODQ5NDkgTDk2LjY4OTU3MTEsOTYuODU5NzAxNSBDMTAwLjE3OTA1NCw5MC44MDg2MDk2IDEwMy44NTE1MzgsODQuOTczNDk4OCAxMDcuNjQ1ODg4LDc5LjQxNzUxNDUgQzExNC4zNjU4MzgsNzguOTA5NTM2NiAxMjEuMjU2NzIzLDc4LjY0NDQ4NzEgMTI4LjIyMDgwOCw3OC42NDQ0ODcxIEwxMjguMjIxMjEsNzguNjQ0NDg3MSBDMTM1LjIxNjY2Niw3OC42NDQ0ODcxIDE0Mi4xMTYzOTksNzguOTExNTQ3NSAxNDguODM0MzM3LDc5LjQyMzk0OTggQzE1Mi41NzA3NzEsODQuOTM5MzExOSAxNTYuMjE4MzE5LDkwLjc1NTUxOTIgMTU5LjcyMTQ3Nyw5Ni44MDc0MTU2IEMxNjMuMjY0NDUzLDEwMi45MjcyODQgMTY2LjUxOTA1MSwxMDguOTkwNDQxIDE2OS40NjIzNDcsMTE0LjkzNjk2MiBDMTY2LjUyNzksMTIwLjk4NTY0IDE2My4yODA1NDEsMTI3LjEwOTkzMyAxNTkuNzUzMjUsMTMzLjIyNjk4NSBMMTU5Ljc1MzI1LDEzMy4yMjY5ODUgTDE1OS43NTMyNSwxMzMuMjI2OTg1IFogTTE3OS42NjU3NDcsMjUuNDM1MDk4MiBDMTg3LjIzMjMyNywyOS43OTg1NjA5IDE5MC4xNzQ4MTgsNDcuMzk2Mzk5MSAxODUuNDIwODIsNzAuNDcyNTk3IEMxODUuMTE3NTYxLDcxLjk0NTA0OTUgMTg0Ljc3NjA5NSw3My40NDQ4NTE1IDE4NC40MDUyNjYsNzQuOTY0NzYzNSBDMTc1LjAzMDc5OSw3Mi44MDE3MzQ1IDE2NC44NTExMjksNzEuMTkyMTMyIDE1NC4xOTMyNDUsNzAuMTkyMjYzOSBDMTQ3Ljk4NDQ5LDYxLjM1MDcxMTcgMTQxLjU1MDUwNCw1My4zMTI3NTQxIDEzNS4wOTIzODYsNDYuMzUzODk3OCBDMTM2LjgyODY4Miw0NC42ODM1NjMzIDEzOC41NjI1NjQsNDMuMDkwODUzMSAxNDAuMjg5MjA2LDQxLjU4NzgzMzUgQzE1Ni45NzA4MzQsMjcuMDcwNDQxNSAxNzIuNTYyMDk5LDIxLjMzODY5NiAxNzkuNjY1NzQ3LDI1LjQzNTA5ODIgTDE3OS42NjU3NDcsMjUuNDM1MDk4MiBMMTc5LjY2NTc0NywyNS40MzUwOTgyIFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0xMjguMjIxMjEsOTQuNjY1MzAwOCBDMTM5LjM2NDU1LDk0LjY2NTMwMDggMTQ4LjM5ODM1MywxMDMuNjk4NzAyIDE0OC4zOTgzNTMsMTE0Ljg0MjQ0NCBDMTQ4LjM5ODM1MywxMjUuOTg1Nzg0IDEzOS4zNjQ1NSwxMzUuMDE5NTg5IDEyOC4yMjEyMSwxMzUuMDE5NTg5IEMxMTcuMDc3ODcsMTM1LjAxOTU4OSAxMDguMDQ0MDY2LDEyNS45ODU3ODQgMTA4LjA0NDA2NiwxMTQuODQyNDQ0IEMxMDguMDQ0MDY2LDEwMy42OTg3MDIgMTE3LjA3Nzg3LDk0LjY2NTMwMDggMTI4LjIyMTIxLDk0LjY2NTMwMDgiIGZpbGw9IiM1M0MxREUiPjwvcGF0aD4KPC9zdmc+Cg=="

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIyOTZweCIgdmlld0JveD0iMCAwIDI1NiAyOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjUwJSIgY3k9IjUwJSIgZng9IjUwJSIgZnk9IjUwJSIgcj0iNTAlIiBpZD0icmFkaWFsR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5M0I0RTciIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0I5RDFGOCIgb2Zmc2V0PSI1OS4yNzMzNTc4JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUNCNkUwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTEyOC4wMzIzNDIsMC40NTU1MTYwMTQgTDAuMjk3OTA3NDczLDc0LjIwMzEwMzIgTDAuMjk3OTA3NDczLDIyMS42OTgyNzggTDEyOC4wMzIzNDIsMjk1LjQ0NjMyIEwyNTUuNzY3MjMxLDIyMS42OTgyNzggTDI1NS43NjcyMzEsNzQuMjAzMTAzMiBMMTI4LjAzMjM0MiwwLjQ1NTUxNjAxNCBaIiBmaWxsPSJ1cmwoI3JhZGlhbEdyYWRpZW50LTEpIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEyOC4wMzM3MDgsNzUuMjYyNjMzNSBMNjQuNjkwMTA2OCwxMTEuODM0MTkyIEw2NC42OTAxMDY4LDE4NC45Nzc3NjUgTDEyOC4wMzM3MDgsMjIxLjU0OTc3OSBMMTkxLjM3ODIyMSwxODQuOTc3NzY1IEwxOTEuMzc4MjIxLDExMS44MzQxOTIgTDEyOC4wMzM3MDgsNzUuMjYyNjMzNSBaIiBmaWxsPSIjNkY5NURCIj48L3BhdGg+CiAgICAgICAgPGcgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTI4LDAgTDAsNzQuMjQ5MTEwMyBMMTI4LDE0My45NDMwNiBMMjU2LDc0LjcwNDYyNjMgTDEyOCwwIFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE1My41MDg4OTcpIiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjgsMCBMMCw2Ny44NzE4ODYxIEwxMjgsMTQxLjY2NTQ4IEwyNTUuNTQ0NDg0LDY3LjQxNjM3MDEgTDEyOCwwIFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "div.header {\n  width: 100%;\n  margin: 10px auto;\n  text-align: center; }\n\nheader {\n  text-align: center;\n  border-bottom: 2px solid #f4f4f4; }\n\nul {\n  list-style-type: none; }\n\nheader li {\n  display: inline;\n  padding: 5px;\n  border-left: 1px solid #eee; }\n\nli a {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #888; }\n\nimg {\n  margin: 0 10px; }\n", ""]);

/***/ },
/* 34 */
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
/* 35 */
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
/* 36 */
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
	  __webpack_require__(37);
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "div.footer {\n  width: 100%;\n  margin: 50px 0;\n  padding: 10px;\n  text-align: center;\n  text-align: center;\n  border-top: 2px solid #f4f4f4; }\n", ""]);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "body {\n  width: 750px;\n  margin: auto;\n  font: 100% Helvetica, sans-serif;\n  color: #aaa; }\n\nh1, h2, h3 {\n  margin-top: 24px;\n  margin-bottom: 12px; }\n\ndiv.main-content {\n  -webkit-padding-start: 40px; }\n\n/* http://cssdeck.com/labs/beautiful-flat-buttons */\nbutton {\n  margin-left: 10px;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  background: #3498db;\n  border: 0;\n  border-bottom: 2px solid #BFCAD2;\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 -2px #2a8bcc; }\n", ""]);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "h1 {\n  color: #5a8894; }\n", ""]);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico"

/***/ },
/* 44 */
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
	var metas = __webpack_require__(17).helmet;
	
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
/* 45 */
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
	
	var _storesAppStore = __webpack_require__(48);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _storesAppStoreDepending = __webpack_require__(54);
	
	var _storesAppStoreDepending2 = _interopRequireDefault(_storesAppStoreDepending);
	
	var _HomeSectionActions = __webpack_require__(55);
	
	var _HomeSectionActions2 = _interopRequireDefault(_HomeSectionActions);
	
	var _altUtilsConnectToStores = __webpack_require__(46);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	// COMPONENT
	
	var _HomeSectionSubPartOne = __webpack_require__(56);
	
	var _HomeSectionSubPartOne2 = _interopRequireDefault(_HomeSectionSubPartOne);
	
	var _HomeSectionSubPartTwo = __webpack_require__(58);
	
	var _HomeSectionSubPartTwo2 = _interopRequireDefault(_HomeSectionSubPartTwo);
	
	if (process.env.BROWSER) {
	  __webpack_require__(59);
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
	        apiData: _storesAppStore2['default'].getState().dataByRestApi,
	        apiDataDepending: _storesAppStoreDepending2['default'].getState().dataByRestApi
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
	
	function connectToStores(Component) {
	  // Check for required static methods.
	  if (!(0, _functions.isFunction)(Component.getStores)) {
	    throw new Error('connectToStores() expects the wrapped component to have a static getStores() method');
	  }
	  if (!(0, _functions.isFunction)(Component.getPropsFromStores)) {
	    throw new Error('connectToStores() expects the wrapped component to have a static getPropsFromStores() method');
	  }
	
	  // Wrapper Component.
	  var StoreConnection = _react2['default'].createClass({
	    displayName: 'StoreConnection',
	
	    getInitialState: function getInitialState() {
	      return Component.getPropsFromStores(this.props, this.context);
	    },
	
	    componentDidMount: function componentDidMount() {
	      var _this = this;
	
	      var stores = Component.getStores(this.props, this.context);
	      stores.forEach(function (store) {
	        store.listen(_this.onChange);
	      });
	      if (Component.componentDidConnect) {
	        Component.componentDidConnect(this.props, this.context);
	      }
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	      var _this2 = this;
	
	      var stores = Component.getStores(this.props, this.context);
	      stores.forEach(function (store) {
	        store.unlisten(_this2.onChange);
	      });
	    },
	
	    onChange: function onChange() {
	      this.setState(Component.getPropsFromStores(this.props, this.context));
	    },
	
	    render: function render() {
	      return _react2['default'].createElement(Component, (0, _functions.assign)({}, this.props, this.state));
	    }
	  });
	
	  return StoreConnection;
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
	exports.eachObject = eachObject;
	exports.assign = assign;
	var isFunction = function isFunction(x) {
	  return typeof x === 'function';
	};
	
	exports.isFunction = isFunction;
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _objectAssign = __webpack_require__(49);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(50);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(51);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(53);
	
	var _altUtilsMakeHot2 = _interopRequireDefault(_altUtilsMakeHot);
	
	var appStore = (0, _altUtilsMakeHot2['default'])(_alt2['default'], (function () {
	  function AppStore() {
	    _classCallCheck(this, AppStore);
	
	    this.bindActions(_actionsAppActions2['default']);
	    this.dataByRestApi = {};
	    this.data = {};
	  }
	
	  _createClass(AppStore, [{
	    key: 'update',
	    value: function update(id, updates) {
	      if (this.data[id] && updates) {
	        this.data[id] = (0, _objectAssign2['default'])(this.data[id], updates);
	      }
	    }
	  }, {
	    key: 'updateAll',
	    value: function updateAll(updates) {
	      for (var id in this.data) {
	        this.update(id, updates);
	      }
	    }
	  }, {
	    key: 'onCreate',
	    value: function onCreate(text) {
	      text = text.trim();
	      if (text === '') {
	        return false;
	      }
	      // hand waving of course.
	      var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	      this.data[id] = {
	        id: id,
	        complete: false,
	        text: text
	      };
	    }
	  }, {
	    key: 'onFetch',
	    value: function onFetch() {
	      var _this = this;
	
	      this.dataByRestApi = { data: 'hello' };
	      fetch('https://api.github.com/users/github').then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        _this.dataByRestApi = { data: json };
	        _this.emitChange();
	      });
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
	    key: 'onToggleComplete',
	    value: function onToggleComplete(id) {
	      var complete = !this.data[id].complete;
	      this.update(id, { complete: complete });
	    }
	  }, {
	    key: 'onToggleCompleteAll',
	    value: function onToggleCompleteAll() {}
	  }, {
	    key: 'onDestroy',
	    value: function onDestroy(id) {
	      delete this.data[id];
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
	})(), 'AppStore');
	
	module.exports = appStore;
	
	/*var complete = !todoStore.areAllComplete();
	this.updateAll({ complete });*/

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("object-assign");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(51);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var AppActions = function AppActions() {
	  _classCallCheck(this, AppActions);
	
	  this.generateActions('create', 'destroy', 'toggleComplete', 'fetch');
	};
	
	module.exports = _alt2['default'].createActions(AppActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alt = __webpack_require__(52);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// create alt instance
	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("alt");

/***/ },
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// FLUX
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _actionsAppActions = __webpack_require__(50);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(51);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _AppStore = __webpack_require__(48);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(53);
	
	var _altUtilsMakeHot2 = _interopRequireDefault(_altUtilsMakeHot);
	
	var dependingStore = (0, _altUtilsMakeHot2['default'])(_alt2['default'], (function () {
	  function DependingStore() {
	    _classCallCheck(this, DependingStore);
	
	    this.bindActions(_actionsAppActions2['default']);
	    this.dataByRestApi = {};
	  }
	
	  _createClass(DependingStore, [{
	    key: 'onFetch',
	    value: function onFetch() {
	      this.waitFor([_AppStore2['default'].dispatchToken]); // event has to be consumed
	      this.dataByRestApi = { data: 'here is dependency store' };
	    }
	  }]);
	
	  return DependingStore;
	})(), 'DependingStore');
	
	module.exports = dependingStore;
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStoreDepending.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 55 */
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
	
	var _actionsAppActions = __webpack_require__(50);
	
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
/* 56 */
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
	
	var _marked = __webpack_require__(57);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(50);
	
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("marked");

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
	
	var _marked = __webpack_require__(57);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(50);
	
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "div.home-section-actions {\n  padding: 10px;\n  margin: 10px 0;\n  background-color: #6DF6FF;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-one {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-two {\n  padding: 10px;\n  background-color: #8EE7FD;\n  border: 1px #eee solid; }\n", ""]);

/***/ },
/* 61 */
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
/* 62 */
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
	
	// COMPONENT
	
	var _TodoItem = __webpack_require__(63);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	var _TodoTextInput = __webpack_require__(67);
	
	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);
	
	var _TodoSnapshots = __webpack_require__(68);
	
	var _TodoSnapshots2 = _interopRequireDefault(_TodoSnapshots);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(50);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _storesAppStore = __webpack_require__(48);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _storesSnapshotStore = __webpack_require__(71);
	
	var _storesSnapshotStore2 = _interopRequireDefault(_storesSnapshotStore);
	
	var _altUtilsConnectToStores = __webpack_require__(46);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	var todoSection = (function (_React$Component) {
	  function TodoSection() {
	    _classCallCheck(this, TodoSection);
	
	    _get(Object.getPrototypeOf(TodoSection.prototype), 'constructor', this).call(this);
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
	          )
	        ),
	        _react2['default'].createElement(_TodoSnapshots2['default'], { snapshots: storeProps.snapshots })
	      );
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
	        allData: _storesAppStore2['default'].getState().data,
	        areAllComplete: _storesAppStore2['default'].areAllComplete(),
	        snapshots: _storesSnapshotStore2['default'].getState().snapshots
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
	
	var _classnames = __webpack_require__(64);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(50);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(65);
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
	        isEditing: false
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
	            'editing': this.state.isEditing
	          }),
	          key: todo.id },
	        _react2['default'].createElement('input', { className: 'toggle', type: 'checkbox', checked: todo.complete, onChange: this._onToggleComplete.bind(this) }),
	        _react2['default'].createElement(
	          'label',
	          null,
	          todo.text
	        ),
	        _react2['default'].createElement(
	          'button',
	          { className: 'destroy', onClick: this._onDestroyClick.bind(this) },
	          '✖'
	        )
	      );
	    }
	  }, {
	    key: '_onToggleComplete',
	    value: function _onToggleComplete() {
	      _actionsAppActions2['default'].toggleComplete(this.props.todo.id);
	    }
	  }, {
	    key: '_onDestroyClick',
	    value: function _onDestroyClick() {
	      _actionsAppActions2['default'].destroy(this.props.todo.id);
	    }
	  }]);
	
	  return TodoItem;
	})(_react2['default'].Component);
	
	exports['default'] = TodoItem;
	
	TodoItem.prototype.displayName = 'TodoItem';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoItem.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("classnames");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "div.todo {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.todo-snapshot {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\nbutton.destroy {\n  border-radius: 50%;\n  margin-left: 10px;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  background: #3498db;\n  border: 0;\n  border-bottom: 2px solid #BFCAD2;\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 -2px #2a8bcc; }\n\n.button.destroy:active {\n  top: 1px;\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\nli.completed {\n  text-decoration: line-through; }\n", ""]);

/***/ },
/* 67 */
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
	          { onClick: this._save.bind(this) },
	          'ADD'
	        )
	      );
	    }
	  }, {
	    key: '_save',
	    value: function _save() {
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
	        this._save();
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
/* 68 */
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
	
	var _actionsSnapshotActions = __webpack_require__(69);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	// COMPONENT
	
	var _TodoSnapshotsItem = __webpack_require__(70);
	
	var _TodoSnapshotsItem2 = _interopRequireDefault(_TodoSnapshotsItem);
	
	var TodoSnapshots = (function (_React$Component) {
	  function TodoSnapshots(props) {
	    _classCallCheck(this, TodoSnapshots);
	
	    _get(Object.getPrototypeOf(TodoSnapshots.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      snapshots: this.props.snapshots
	    };
	  }
	
	  _inherits(TodoSnapshots, _React$Component);
	
	  _createClass(TodoSnapshots, [{
	    key: 'render',
	    value: function render() {
	      var allSnaps = this.state.snapshots,
	          snapshots = [];
	
	      for (var key in allSnaps) {
	        snapshots.push(_react2['default'].createElement(_TodoSnapshotsItem2['default'], { key: key, snapshot: allSnaps[key] }));
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'todo-snapshot' },
	        _react2['default'].createElement(
	          'button',
	          { onClick: this._onClick.bind(this) },
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(51);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var SnapshotActions = function SnapshotActions() {
	  _classCallCheck(this, SnapshotActions);
	
	  this.generateActions('destroySnapshot', 'bootstrapSnapshot', 'takeSnapshot');
	};
	
	module.exports = _alt2['default'].createActions(SnapshotActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotActions.js" + ": " + err.message); } }); } } })(); }

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
	
	// FLUX
	
	var _actionsSnapshotActions = __webpack_require__(69);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(65);
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
	          { className: 'destroy', onClick: this._onDestroyClick.bind(this) },
	          '✖'
	        )
	      );
	    }
	  }, {
	    key: '_bootstrapSnapshot',
	    value: function _bootstrapSnapshot() {
	      _actionsSnapshotActions2['default'].bootstrapSnapshot(this.props.snapshot.id);
	    }
	  }, {
	    key: '_onDestroyClick',
	    value: function _onDestroyClick() {
	      _actionsSnapshotActions2['default'].destroySnapshot(this.props.snapshot.id);
	    }
	  }]);
	
	  return TodoSnapshotsItem;
	})(_react2['default'].Component);
	
	exports['default'] = TodoSnapshotsItem;
	
	TodoSnapshotsItem.prototype.displayName = 'TodoSnapshotsItem';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSnapshotsItem.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	// FLUX
	
	var _actionsSnapshotActions = __webpack_require__(69);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(51);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(53);
	
	var _altUtilsMakeHot2 = _interopRequireDefault(_altUtilsMakeHot);
	
	var snapshotStore = (0, _altUtilsMakeHot2['default'])(_alt2['default'], (function () {
	  function SnapshotStore() {
	    _classCallCheck(this, SnapshotStore);
	
	    this.bindActions(_actionsSnapshotActions2['default']);
	    this.snapshots = [];
	  }
	
	  _createClass(SnapshotStore, [{
	    key: 'onBootstrapSnapshot',
	    value: function onBootstrapSnapshot(id) {
	      var elt = _lodash2['default'].find(this.snapshots, function (snap) {
	        return snap.id === id;
	      });
	
	      if (elt) {
	        // TODO
	        // alt.prepare(AppStor)
	        _alt2['default'].bootstrap(elt.data);
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
	      this.snapshots.push(snapshot);
	    }
	  }, {
	    key: 'onDestroySnapshot',
	    value: function onDestroySnapshot(id) {
	      console.log(id);
	      //this.snapshots
	    }
	  }]);
	
	  return SnapshotStore;
	})(), 'SnapshotStore');
	
	module.exports = snapshotStore;
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 72 */
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
	
	var api = __webpack_require__(73);
	
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
/* 73 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjc5YjIwNTNiYzk5ODY1YzQ3MmYiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZlLWZhdmljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9yb3V0ZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29uZmlnLmpzb24iLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcgXlxcLlxcLy4qXFwuc3ZnJCIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2JhYmVsLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2Nzcy0zLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2V4cHJlc3Muc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvZmx1eC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9oZXJva3Uuc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvaHRtbC01LnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2phdmFzY3JpcHQuc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvbG9kYXNoLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL21vY2hhLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL25vZGVqcy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9yZWFjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy93ZWJwYWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzPzBkMzMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzcz80NTc3Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzcz8yYTNkIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Fzcz9lZmFjIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9jb25uZWN0VG9TdG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHQvdXRpbHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCIiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2FsdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbHRcIiIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9tYWtlSG90LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3N0b3Jlcy9BcHBTdG9yZURlcGVuZGluZy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydE9uZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzcz80MDBmIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzPzlmYmMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvVGV4dElucHV0LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NuYXBzaG90cy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TbmFwc2hvdHNJdGVtLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3N0b3Jlcy9TbmFwc2hvdFN0b3JlLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvc2VydmVyL3JvdXRlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvYXBpL2FwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NyQ2lCLENBQU07Ozs7aUNBQ04sQ0FBTTs7Ozs7O29DQUdILENBQVM7Ozs7eUNBQ1QsQ0FBZTs7Ozs7QUFHbkMsS0FBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLE1BQU07S0FDN0MsVUFBVSxHQUFHLE9BQU8sS0FBSyxLQUFLLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7QUFFbkQsS0FBSSxHQUFHLEdB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NUNWLENBQVM7Ozs7O0FBRzdCLEtBQUksTUFBTSxHQUFHLHFCQUFRLE1BQU0sRUFBRSxDQUFDOzs7QUFHOUIsS0FBSSxHQUFHLEdBQUcsbUJBQU8sQ0FBQyxFQUFZLENBQUMsQ0FBQzs7QUFFaEMsT0FBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBSztBQUN2QyxNQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDOztzQkFFWSxNQUFNOzs7OztBQUtyQixLQUFHLEtBQVUsRUFBRTtBQUNiLFNBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsWUFBTTtBQUN0QyxRQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQztFQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJELEtBQUksR0FBRyxHQUFHO0FBQ1IsT0FBSSxFQUFFLGNBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUs7QUFDeEIsU0FBSTtBQUNGLFVBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQVlsRCxVQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO01BQ3RDLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDWixXQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDWDtJQUNGO0FBQ0QsWUFBUyxFQUFFLHFCQUFNLEVBRWhCO0VBQ0YsQ0FBQzs7c0JBRWEsR0FBRyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiNzliMjA1M2JjOTk4NjVjNDcyZlxuICoqLyIsIi8vIE5PREVcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuLy8gRVhQUkVTU1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGZhdmljb24gZnJvbSAnc2VydmUtZmF2aWNvbic7XHJcblxyXG4vLyBQcm9maWxlIGRldiBvciBwcm9kdWN0aW9uXHJcbmxldCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuREVWID8gJ2RldicgOiAncHJvZCcsXHJcblx0cHVibGljUGF0aCA9IHByb2ZpbGUgPT09ICdkZXYnID8gJ2J1aWxkJyA6ICdkaXN0JztcclxuXHJcbmxldCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAuc2V0KCdwb3J0JywgcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwdWJsaWNQYXRoKSk7XHJcbmFwcC51c2UoZmF2aWNvbihwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vYXBwL2ltYWdlcy9mYXZpY29uLmljbycpKSk7XHJcblxyXG4vL1xyXG4vLyBSZWdpc3RlciBtaWRkbGV3YXJlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gcmVuZGVyZXJcclxubGV0IHJlbmRlcmVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvcmVuZGVyZXInKTtcclxuLy8gYXBpc1xyXG5sZXQgYXBpUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XHJcblxyXG4vL1xyXG4vLyBDb25maWd1cmUgbWlkZGxld2FyZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxucmVuZGVyZXIuaW5pdChwcm9maWxlKTtcclxuXHJcbi8vXHJcbi8vIEFjdGl2YXRlIG1pZGRsZXdhcmVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmFwcC51c2UoYXBpUm91dGVzKTtcclxuYXBwLnVzZShyZW5kZXJlci5yZW5kZXIpO1xyXG5cclxuaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKS5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0V4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBhcHAuZ2V0KCdwb3J0JykpO1xyXG59KTtcclxuXHJcbi8vXHJcbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICAvLyBhY2NlcHQgdXBkYXRlIG9mIGRlcGVuZGVuY3lcclxuICBtb2R1bGUuaG90LmFjY2VwdChbJy4vcm91dGVzL2FwaScsICcuL3JvdXRlcy9yZW5kZXJlciddLCAoKSA9PiB7XHJcbiAgICBhcGlSb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9hcGknKTtcclxuICAgIGFwcC51c2UoYXBpUm91dGVzKTtcclxuICAgIHJlbmRlcmVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvcmVuZGVyZXInKTtcclxuICAgIHJlbmRlcmVyLmluaXQoJ2RldicpO1xyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9zZXJ2ZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2ZS1mYXZpY29uXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwYXRoXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJleHByZXNzXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJodHRwXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJsZXQgcmVuZGVyZXIgPSByZXF1aXJlKCcuLi91dGlscy9yZW5kZXJlcicpO1xyXG5cclxubGV0IHByb2ZpbGUgPSAnZGV2JztcclxuXHJcbnZhciByb3V0ZXNSZW5kZXJlciA9IHtcclxuICBpbml0OiAodHlwZSkgPT4ge1xyXG4gICAgcHJvZmlsZSA9IHR5cGU7XHJcbiAgICByZW5kZXJlci5pbml0KHR5cGUpO1xyXG4gIH0sXHJcbiAgcmVuZGVyOiAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihyZXEsIHJlcywgbmV4dCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy9cclxuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaWYobW9kdWxlLmhvdCkge1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi4vdXRpbHMvcmVuZGVyZXInXSwgKCkgPT4ge1xyXG4gICAgcmVuZGVyZXIgPSByZXF1aXJlKCcuLi91dGlscy9yZW5kZXJlcicpO1xyXG4gICAgcmVuZGVyZXIuaW5pdChwcm9maWxlKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzUmVuZGVyZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9yb3V0ZXMvcmVuZGVyZXIuanNcbiAqKi8iLCIvLyBOT0RFXHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcblxyXG4vLyBFWFRFUk5BTFNcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgSXNvIGZyb20gJ2lzbyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIENPUkVcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi8uLi9hcHAvcm91dGVzJztcclxuaW1wb3J0IGFsdCBmcm9tICcuLi8uLi9hcHAvYWx0JztcclxuXHJcbmxldCBodG1sID0gJyc7XHJcblxyXG52YXIgcmVuZGVyZXIgPSB7XHJcbiAgaW5pdDogKHR5cGUpID0+IHtcclxuICAgIGh0bWwgPSB0eXBlID09PSAnZGV2JyA/XHJcbiAgICAgIGZzLnJlYWRGaWxlU3luYygnLi9hc3NldHMvaW5kZXgtZGV2Lmh0bWwnLCB7ZW5jb2Rpbmc6ICd1dGY4J30pXHJcbiAgICAgIDpcclxuICAgICAgZnMucmVhZEZpbGVTeW5jKCcuL2Rpc3QvaW5kZXgtcHJvZC5odG1sJywge2VuY29kaW5nOiAndXRmOCd9KTtcclxuICB9LFxyXG4gIHJlbmRlcjogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBsZXQgbWFya3VwID0gJycsXHJcbiAgICAgIGlzbyA9IG5ldyBJc28oKTtcclxuXHJcbiAgICBjb25zdCBvbmVJdGVtQm9vdHN0cmFwZWQgPSB7XHJcbiAgICAgICdBcHBTdG9yZSc6IHtcclxuICAgICAgICAnZGF0YUJ5UmVzdEFwaSc6IHt9LFxyXG4gICAgICAgICdkYXRhJzoge1xyXG4gICAgICAgICAgJ2lhcXBvcjdwJzoge1xyXG4gICAgICAgICAgICAnaWQnOiAnaWFxcG9yN3AnLFxyXG4gICAgICAgICAgICAnY29tcGxldGUnOiBmYWxzZSxcclxuICAgICAgICAgICAgJ3RleHQnOiAnZnNmc2RmJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKiBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zLCB3ZSB0YWtlIHRoZSBsb2NhbHMgZGF0YSB3ZSBoYXZlIGFscmVhZHlcclxuICAgIGZldGNoZWQgYW5kIHNlZWQgb3VyIHN0b3JlcyB3aXRoIGRhdGEuXHJcbiAgICBOZXh0IHdlIHVzZSByZWFjdC1yb3V0ZXIgdG8gcnVuIHRoZSBVUkwgdGhhdCBpcyBwcm92aWRlZCBpbiByb3V0ZXMuanN4XHJcbiAgICBGaW5hbGx5IHdlIHVzZSBpc28gaW4gb3JkZXIgdG8gcmVuZGVyIHRoaXMgY29udGVudCBzbyBpdCBwaWNrcyBiYWNrIHVwXHJcbiAgICBvbiB0aGUgY2xpZW50IHNpZGUgYW5kIGJvb3RzdHJhcHMgdGhlIHN0b3Jlcy5cclxuICAgIGluaXQgc2VydmVyIHJlbmRlcmVyXHJcbiAgICAqL1xyXG4gICAgYWx0LmJvb3RzdHJhcChKU09OLnN0cmluZ2lmeShyZXMubG9jYWxzLmRhdGEgfHwgb25lSXRlbUJvb3RzdHJhcGVkKSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgUm91dGVyLnJ1bihyb3V0ZXMsIHJlcS5wYXRoLCAoSGFuZGxlciwgc3RhdGUpID0+IHtcclxuXHRcdFx0XHQvLyBhbHQgZmx1eCBmbHVzaFxyXG4gICAgICAgIGxldCBjb250ZW50ID0gUmVhY3QucmVuZGVyVG9TdHJpbmcoUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGVyKSk7XHJcbiAgICAgICAgaXNvLmFkZChjb250ZW50LCBhbHQuZmx1c2goKSk7XHJcblxyXG4gICAgICAgIHJlcy5jb250ZW50VHlwZSA9ICd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmOCc7XHJcbiAgICAgICAgbGV0IG5vdEZvdW5kID0gXy5maW5kKHN0YXRlLnJvdXRlcywge2lzTm90Rm91bmQ6IHRydWV9KTtcclxuXHJcbiAgICAgICAgaWYgKG5vdEZvdW5kICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0XHRcdC8vIFJFTkRFUklORyBiYWNrIHRvIGNsaWVudFxyXG4gICAgICAgIGxldCBtYXJrdXBDb250ZW50ID0gaXNvLnJlbmRlcigpO1xyXG4gICAgICAgIC8vIERPTSA8aGVhZD4gaW5zdHJ1bWVudGF0aW9uXHJcbiAgICAgICAgbGV0IGhlYWQgPSBIZWxtZXQucmV3aW5kKCk7XHJcbiAgICAgICAgbWFya3VwID0gaHRtbC5yZXBsYWNlKCdNRVRBJywgaGVhZC5tZXRhKS5yZXBsYWNlKCdUSVRMRScsIGhlYWQudGl0bGUpLnJlcGxhY2UoJ0xJTksnLCBoZWFkLmxpbmspLnJlcGxhY2UoJ0NPTlRFTlQnLCBtYXJrdXBDb250ZW50KTtcclxuICAgICAgICAvLyBTRU5EIHJlc3BvbnNlXHJcbiAgICAgICAgcmVzLnNlbmQobWFya3VwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvc2VydmVyL3V0aWxzL3JlbmRlcmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlzb1wiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmc1wiXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLyplc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzKi9cclxuaW1wb3J0IHtSb3V0ZSwgRGVmYXVsdFJvdXRlLCBOb3RGb3VuZFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQXBwL0FwcCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0JztcclxuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbic7XHJcbmltcG9ydCBOb3RGb3VuZFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24nO1xyXG5pbXBvcnQgVG9kb1NlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICA8Um91dGUgbmFtZT0nYXBwJyBwYXRoPScvJyBoYW5kbGVyPXtBcHBsaWNhdGlvbn0+XHJcbiAgICA8Um91dGUgbmFtZT0naG9tZScgcGF0aD0nL2hvbWUnIGhhbmRsZXI9e0hvbWVTZWN0aW9ufS8+XHJcbiAgICA8Um91dGUgbmFtZT0ndG9kbycgcGF0aD0nL3RvZG8nIGhhbmRsZXI9e1RvZG9TZWN0aW9ufS8+XHJcbiAgICA8Um91dGUgbmFtZT0nY29udGFjdCcgcGF0aD1cIi9jb250YWN0XCIgaGFuZGxlcj17Q29udGFjdH0vPlxyXG4gICAgPERlZmF1bHRSb3V0ZSBoYW5kbGVyPXtIb21lU2VjdGlvbn0gLz5cclxuICAgIDxOb3RGb3VuZFJvdXRlIGhhbmRsZXI9e05vdEZvdW5kU2VjdGlvbn0gLz5cclxuICA8L1JvdXRlPlxyXG4pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvcm91dGVzLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUhhbmRsZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBIdG1sSGVhZGVyVGFncyBmcm9tICcuLi9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncyc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xyXG4gIHJlcXVpcmUoJy4vX0FwcC5zY3NzJyk7XHJcbiAgcmVxdWlyZSgnLi9fQXBwLnNhc3MnKTtcclxuICByZXF1aXJlKCdmaWxlP25hbWU9ZmF2aWNvbi5pY28hLi4vLi4vaW1hZ2VzL2Zhdmljb24uaWNvJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SHRtbEhlYWRlclRhZ3MgLz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tY29udGVudCc+XHJcbiAgICAgICAgICA8Um91dGVIYW5kbGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BcHAucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0FwcCc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0FwcC9BcHAuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbi8vIFRPRE86IGRvIGl0IGluIHN0b3JlIG1heWJlXHJcbmNvbnN0IG1ldGFzID0gcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NvbmZpZy5qc29uJykuaGVsbWV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbEhlYWRlclRhZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIERPTSA8aGVhZD4gaW5zdHJ1bWVudGF0aW9uXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWxtZXRcclxuICAgICAgICAgIHRpdGxlPXttZXRhcy50aXRsZX1cclxuICAgICAgICAgICAgbWV0YT17bWV0YXMubWV0YX1cclxuICAgICAgICAgICAgbGluaz17bWV0YXMubGlua31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5IdG1sSGVhZGVyVGFncy5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSHRtbEhlYWRlclRhZ3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlbG1ldFwiOiB7XG5cdFx0XCJ0aXRsZVwiOiBcIndlYi1yZWFjdFwiLFxuXHRcdFwibWV0YVwiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG5cdFx0XHRcdFwiY29udGVudFwiOiBcIldlYnBhY2sgTm9kZSBSZWFjdCBTdGFydGVyIEtpdFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJ2aWV3cG9ydFwiLFxuXHRcdFx0XHRcImNvbnRlbnRcIjogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRcImxpbmtcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcInJlbFwiOiBcInNob3J0Y3V0IGljb25cIixcblx0XHRcdFx0XCJocmVmXCI6IFwiL2Zhdmljb24uaWNvXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImltYWdlL3gtaWNvblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInJlbFwiOiBcImljb25cIixcblx0XHRcdFx0XCJocmVmXCI6IFwiL2Zhdmljb24uaWNvXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImltYWdlL3gtaWNvblwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fzc2V0cy9jb25maWcuanNvblxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuY29uc3QgYnJhbmRpbmdzID0gWydyZWFjdCcsICdmbHV4JywgJ3dlYnBhY2snLCAnbm9kZWpzJywgJ2JhYmVsJywgJ21vY2hhJywgJ2phdmFzY3JpcHQnLCAnaGVyb2t1JywgJ2h0bWwtNScsICdjc3MtMycsICdleHByZXNzJywgJ2xvZGFzaCddO1xyXG5cclxubGV0IGJyYW5kaW5nc01hcmt1cCA9IFtdO1xyXG5cclxuYnJhbmRpbmdzLmZvckVhY2goKGVsdCwgaWR4KSA9PiB7XHJcbiAgYnJhbmRpbmdzTWFya3VwLnB1c2goPGltZyBzcmM9e3JlcXVpcmUoJy4uLy4uL2ltYWdlcy9icmFuZGluZy8nICsgZWx0ICsgJy5zdmcnKX0ga2V5PXtpZHh9IHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiLz4pO1xyXG59KTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fSGVhZGVyLnNjc3MnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICA8ZGl2PnticmFuZGluZ3NNYXJrdXB9PC9kaXY+XHJcblx0XHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHRcdDx1bD5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSdhcHAnPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSd0b2RvJz5Ub2RvPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayB0bz0nY29udGFjdCc+Q29udGFjdDwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSGVhZGVyLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIZWFkZXInO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2JhYmVsLnN2Z1wiOiAyMCxcblx0XCIuL2Nzcy0zLnN2Z1wiOiAyMSxcblx0XCIuL2V4cHJlc3Muc3ZnXCI6IDIyLFxuXHRcIi4vZmx1eC5zdmdcIjogMjMsXG5cdFwiLi9oZXJva3Uuc3ZnXCI6IDI0LFxuXHRcIi4vaHRtbC01LnN2Z1wiOiAyNSxcblx0XCIuL2phdmFzY3JpcHQuc3ZnXCI6IDI2LFxuXHRcIi4vbG9kYXNoLnN2Z1wiOiAyNyxcblx0XCIuL21vY2hhLnN2Z1wiOiAyOCxcblx0XCIuL25vZGVqcy5zdmdcIjogMjksXG5cdFwiLi9yZWFjdC5zdmdcIjogMzAsXG5cdFwiLi93ZWJwYWNrLnN2Z1wiOiAzMVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxOTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nIF5cXC5cXC8uKlxcLnN2ZyRcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM0JPR3NyVy5zdmdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2JhYmVsLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l6TmpGd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXpOakVpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4Wno0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1USTNMamcwTXpnMk9Dd3pOakF1TURnM09URXlJRXd5TXk0Mk5qRTNNVFF6TERNek1TNHhOall5TkRJZ1REQXVORFExTVRnMk9ERXpMRGN3TGpjMk5UY3hORE1nVERJMU5TNDFOVFE0TVRNc056QXVOelkxTnpFME15Qk1Nak15TGpNeE16WTNMRE16TVM0eE1qVTBOVEVnVERFeU55NDRORE00Tmpnc016WXdMakE0TnpreE1pQk1NVEkzTGpnME16ZzJPQ3d6TmpBdU1EZzNPVEV5SUZvaUlHWnBiR3c5SWlNeU5qUkVSVFFpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTWpFeUxqUXhOamN3TXl3ek1UUXVOVFEyTmpNM0lFd3lNekl1TWpjM09EQXlMRGt5TGpBMU56TXhPRGNnVERFeU9DdzVNaTR3TlRjek1UZzNJRXd4TWpnc016TTNMamsxTURJME1pQk1NakV5TGpReE5qY3dNeXd6TVRRdU5UUTJOak0zSUV3eU1USXVOREUyTnpBekxETXhOQzQxTkRZMk16Y2dXaUlnWm1sc2JEMGlJekk1TmpWR01TSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMDFNeTQyTmpnMU56RTBMREU0T0M0Mk16WXhNeklnVERVMkxqVXpNRGs0T1N3eU1qQXVOVGN5T0RNMUlFd3hNamdzTWpJd0xqVTNNamd6TlNCTU1USTRMREU0T0M0Mk16WXhNeklnVERVekxqWTJPRFUzTVRRc01UZzRMall6TmpFek1pQk1OVE11TmpZNE5UY3hOQ3d4T0RndU5qTTJNVE15SUZvaUlHWnBiR3c5SWlORlFrVkNSVUlpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTkRjdU9URTNNREV4TERFeU15NDVPVFEzTWpVZ1REVXdMamd5TURJeE9UZ3NNVFUxTGprek1qRXpNaUJNTVRJNExERTFOUzQ1TXpJeE16SWdUREV5T0N3eE1qTXVPVGswTnpJMUlFdzBOeTQ1TVRjd01URXNNVEl6TGprNU5EY3lOU0JNTkRjdU9URTNNREV4TERFeU15NDVPVFEzTWpVZ1dpSWdabWxzYkQwaUkwVkNSVUpGUWlJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qZ3NNamN4TGpVNE1ERXpNaUJNTVRJM0xqZzJNREEwTkN3eU56RXVOakUzTkRBM0lFdzVNaTR5T1RFMU1UWTFMREkyTWk0d01UTXhPRGNnVERrd0xqQXhOemMxT0RJc01qTTJMalUwTVRnNUlFdzFOeTQ1TlRjNU56Z3NNak0yTGpVME1UZzVJRXcyTWk0ME16SXpOVEUyTERJNE5pNDJPRGMyTkRnZ1RERXlOeTQ0TlRNd01URXNNekEwTGpnME9EZzNPU0JNTVRJNExETXdOQzQ0TURnd09EZ2dUREV5T0N3eU56RXVOVGd3TVRNeUlFd3hNamdzTWpjeExqVTRNREV6TWlCYUlpQm1hV3hzUFNJalJVSkZRa1ZDSWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRZd0xqUTRNelV4TmpVc01DQk1PVGt1TVRZME9ETTFNaXd3SUV3NU9TNHhOalE0TXpVeUxERTJMakUzTlRneU5ESWdURGMyTGpZMU9UTTBNRGNzTVRZdU1UYzFPREkwTWlCTU56WXVOalU1TXpRd055d3pNaTR6TlRFMk5EZzBJRXc1T1M0eE5qUTRNelV5TERNeUxqTTFNVFkwT0RRZ1REazVMakUyTkRnek5USXNORGd1TlRJM05EY3lOU0JNTmpBdU5EZ3pOVEUyTlN3ME9DNDFNamMwTnpJMUlFdzJNQzQwT0RNMU1UWTFMREFnVERZd0xqUTRNelV4TmpVc01DQmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXdOaTQ1TURFd09Ua3NNQ0JNTVRRMUxqVTRNalF4T0N3d0lFd3hORFV1TlRneU5ERTRMREUwTGpBMk5Ua3pOREVnVERFeU15NHdOelk1TWpNc01UUXVNRFkxT1RNME1TQk1NVEl6TGpBM05qa3lNeXd4Tmk0NE56a3hNakE1SUV3eE5EVXVOVGd5TkRFNExERTJMamczT1RFeU1Ea2dUREUwTlM0MU9ESTBNVGdzTkRrdU1qTXdOelk1TWlCTU1UQTJMamt3TVRBNU9TdzBPUzR5TXpBM05qa3lJRXd4TURZdU9UQXhNRGs1TERNMExqUTJNVFV6T0RVZ1RERXlPUzQwTURZMU9UTXNNelF1TkRZeE5UTTROU0JNTVRJNUxqUXdOalU1TXl3ek1TNDJORGd6TlRFMklFd3hNRFl1T1RBeE1EazVMRE14TGpZME9ETTFNVFlnVERFd05pNDVNREV3T1Rrc01DQk1NVEEyTGprd01UQTVPU3d3SUZvaUlHWnBiR3c5SWlNd01EQXdNREFpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTVRVekxqTXhPRFk0TVN3d0lFd3hPVElzTUNCTU1Ua3lMREUwTGpBMk5Ua3pOREVnVERFMk9TNDBPVFExTURVc01UUXVNRFkxT1RNME1TQk1NVFk1TGpRNU5EVXdOU3d4Tmk0NE56a3hNakE1SUV3eE9USXNNVFl1T0RjNU1USXdPU0JNTVRreUxEUTVMakl6TURjMk9USWdUREUxTXk0ek1UZzJPREVzTkRrdU1qTXdOelk1TWlCTU1UVXpMak14T0RZNE1Td3pOQzQwTmpFMU16ZzFJRXd4TnpVdU9ESTBNVGMyTERNMExqUTJNVFV6T0RVZ1RERTNOUzQ0TWpReE56WXNNekV1TmpRNE16VXhOaUJNTVRVekxqTXhPRFk0TVN3ek1TNDJORGd6TlRFMklFd3hOVE11TXpFNE5qZ3hMREFnVERFMU15NHpNVGcyT0RFc01DQmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUSXdNaTR4TWpZM05qa3NNVGc0TGpZek5qRXpNaUJNTWpBM0xqZzVNak01Tml3eE1qTXVPVGswTnpJMUlFd3hNamN1T0RnNU5UZ3lMREV5TXk0NU9UUTNNalVnVERFeU55NDRPRGsxT0RJc01UVTFMamt6TWpFek1pQk1NVGN5TGpnNU1qRXpNaXd4TlRVdU9UTXlNVE15SUV3eE5qa3VPVGcyTVRFc01UZzRMall6TmpFek1pQk1NVEkzTGpnNE9UVTRNaXd4T0RndU5qTTJNVE15SUV3eE1qY3VPRGc1TlRneUxESXlNQzQxTnpJNE16VWdUREUyTnk0eU1UWTFNamNzTWpJd0xqVTNNamd6TlNCTU1UWXpMalV3T1RRMU1Td3lOakV1T1RreU56a3hJRXd4TWpjdU9EZzVOVGd5TERJM01TNDJNRFk0TlRjZ1RERXlOeTQ0T0RrMU9ESXNNekEwTGpnek16UXdOeUJNTVRrekxqTTJNakk0Tml3eU9EWXVOamczTmpRNElFd3hPVE11T0RReU5qTTNMREk0TVM0eU9URTVOVFlnVERJd01TNHpORGMxTVRZc01UazNMakl4TWpFek1pQk1NakF5TGpFeU5qYzJPU3d4T0RndU5qTTJNVE15SUV3eU1ESXVNVEkyTnpZNUxERTRPQzQyTXpZeE16SWdXaUlnWm1sc2JEMGlJMFpHUmtaR1JpSStQQzl3WVhSb1Bnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvY3NzLTMuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhVmsycXMuc3ZnXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9leHByZXNzLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jZ2QybGtkR2c5SWpJMU5uQjRJaUJvWldsbmFIUTlJakV3TW5CNElpQjJhV1YzUW05NFBTSXdJREFnTWpVMklERXdNaUlnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCd2NtVnpaWEoyWlVGemNHVmpkRkpoZEdsdlBTSjRUV2x1V1UxcGJpQnRaV1YwSWo0S0lDQWdJRHhuUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweU1EVXVNRE16TXpBMkxEQWdRekU1TkM0NU9EVTBNakVzTUNBeE9EVXVOakkyT1RneUxESXVPVEl3TmprME1EZ2dNVGMzTGpjek1UYzVPU3czTGprek9EZ3hPRGc0SUV3eE1qY3VPVGs0TlRRMUxEUTBMalEyTkRrME9UTWdUREV3TVM0M09EVXdNalVzTWpVdU1qRTFOekV6TlNCRE1UQXdMakl3TlRRd055d3lOeTQzTnpnMU9UTTBJRGs0TGpZeE5ERTFNakVzTXpBdU16STJPVEk0TVNBNU55NHdPVEkzTVRRNUxETXlMamsyTlRRME16WWdRemsyTGpjeU5qRTNNellzTXpNdU5UazVOakU0TWlBNU5pNHpPRFU0TVRNNExETTBMakkwTWpVeUlEazJMakF5TlRBNU1EWXNNelF1T0RjMk5qazBOaUJNTVRFM0xqa3pOakV4TkN3MU1DNDVOalkyT1RNMklFdzNNUzQ1TlRnME5UVXNPRFF1TnpJNU1qRTVJRU0yTlM0Mk5UYzBNelUzTERnNExqWTFOalEwTnpFZ05UZ3VOREE0TURZek5TdzVNQzQzTXpNMU1UUTBJRFV3TGprMk16YzRORFVzT1RBdU56TXpOVEUwTkNCRE1qa3VNRE00TWpFMU5TdzVNQzQzTXpNMU1UUTBJREV4TGpFNU5qazJNemNzTnpJdU9EazFNVGN4TmlBeE1TNHhPVFk1TmpNM0xEVXdMamsyTmpZNU16WWdRekV4TGpFNU5qazJNemNzTWprdU1ETTRNakUxTlNBeU9TNHdNelV6TURZMExERXhMakU1T1RnM01qY2dOVEF1T1RZek56ZzBOU3d4TVM0eE9UazROekkzSUVNMU9DNDBNRGd3TmpNMUxERXhMakU1T1RnM01qY2dOalV1TmpZd016UTBPQ3d4TXk0eU56UXdNekVnTnpFdU9UVTRORFUxTERFM0xqSXdOREUyT0RFZ1REYzJMalV5T0RVNE5Ea3NNakF1TlRVNE16RXhPQ0JETnpndU5ERTJOVFl6TkN3eE55NHlPVFF6TkRnNUlEZ3dMak0zTkRNMU9UUXNNVFF1TVRBMk1ESXhOU0E0TWk0ek5EazJNRGszTERFd0xqazBNRGsyTmpZZ1REYzRMakkyTlRJNU1qUXNOeTQ1TkRFM01qYzVNeUJETnpBdU16Y3pNREU0TlN3eUxqa3lNRFk1TkRBNElEWXhMakF4TVRZM01ETXNNQzR3TURJNU1Ea3dOVGM0TlNBMU1DNDVOak0zT0RRMUxEQXVNREF5T1RBNU1EVTNPRFVnUXpJeUxqZ3hPRFkwT1Rnc01DNHdNREk1TURrd05UYzROU0F3TERJeUxqZ3lNVFUxT0RnZ01DdzFNQzQ1TmpZMk9UTTJJRU13TERjNUxqRXhNVGd5T0RNZ01qSXVPREUxTnpRd055d3hNREV1T1RNd05EYzRJRFV3TGprMk16YzRORFVzTVRBeExqa3pNRFEzT0NCRE5qRXVNREV4Tmpjd015d3hNREV1T1RNd05EYzRJRGN3TGpNM016QXhPRFVzT1RrdU1EQTVOemcwSURjNExqSTJOVEk1TWpRc09UTXVPVGt4TmpVNU1pQk1NVEkzTGprNU9EVTBOU3cxTnk0ME5qZzBNemM1SUV3eE5UUXVNekV6T0RnekxEYzJMamM1TXpNd09USWdRekUxTlM0NU1qVTFNREVzTnpRdU1UVXhPRGcwTmlBeE5UY3VOVE0wTWpFc056RXVOVEF4TnpNeU9TQXhOVGt1TVRJMU5EWTBMRFk0TGpjME1UQXpOeUJETVRVNUxqUXpPVFkwTXl3Mk9DNHhPVFF4TXpReUlERTFPUzQzTWpRM015dzJOeTQyTlRBeE5EQXpJREUyTUM0d016WXNOamN1TVRBek1qTTNOU0JNTVRNNExqQTJNemc0Tml3MU1DNDVOalkyT1RNMklFd3hPRFF1TURNNE5qTTJMREUzTGpJd05ERTJPREVnUXpFNU1DNHpNemsyTlRVc01UTXVNamMyT1RRZ01UazNMalU1TVRrek5pd3hNUzR4T1RrNE56STNJREl3TlM0d016TXpNRFlzTVRFdU1UazVPRGN5TnlCRE1qSTJMamsyTVRjNE5Td3hNUzR4T1RrNE56STNJREkwTkM0NE1EQXhNamNzTWprdU1ETTRNakUxTlNBeU5EUXVPREF3TVRJM0xEVXdMamsyTmpZNU16WWdRekkwTkM0NE1EQXhNamNzTnpJdU9EazFNVGN4TmlBeU1qWXVPVFl4TnpnMUxEa3dMamN6TXpVeE5EUWdNakExTGpBek16TXdOaXc1TUM0M016TTFNVFEwSUVNeE9UY3VOVGc1TURJM0xEa3dMamN6TXpVeE5EUWdNVGt3TGpNek9UWTFOU3c0T0M0Mk5Ua3pOVFl4SURFNE5DNHdNemcyTXpZc09EUXVOekk1TWpFNUlFd3hOemt1TlRNMU5ERTBMRGd4TGpReU1UWXlNRElnUXpFM055NDJNamN3TnpJc09EUXVOekUzTlRneU9DQXhOelV1TmprMU5EVTRMRGczTGpreU1EUTFOVFFnTVRjekxqYzFOVEV4Tml3NU1TNHdOamd3TlRZZ1RERTNOeTQzTXpRM01EZ3NPVE11T1RnNE56VXdNU0JETVRnMUxqWXlPVGc1TVN3NU9TNHdNRGszT0RRZ01UazBMams0T0RNekxERXdNUzQ1TWpjMU5qa2dNakExTGpBek5qSXhOU3d4TURFdU9USTNOVFk1SUVNeU16TXVNVGd4TXpVc01UQXhMamt5TnpVMk9TQXlOVFlzTnprdU1UQTRPVEU1TWlBeU5UWXNOVEF1T1RZek56ZzBOU0JETWpVMUxqazVOekE1TVN3eU1pNDRNVGcyTkRrNElESXpNeTR4T0RFek5Td3dJREl3TlM0d016TXpNRFlzTUNCTU1qQTFMakF6TXpNd05pd3dJRm9pSUdacGJHdzlJaU0wTkVJM05FRWlQand2Y0dGMGFENEtJQ0FnSUR3dlp6NEtQQzl6ZG1jK1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvZmx1eC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJME1EQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUEwTURBaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcGJsbE5hVzRnYldWbGRDSStDaUFnSUNBOFp6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5Namd1TURnek1EQTNNaXd6T1RndU1qZzROek0zSUV3eU9DNHdPRE13TURjeUxETTJNeTQxTVRBeU1ETWdRekk0TGpBNE16QXdOeklzTXpZeExqQTFPREkyTlNBeU5pNHlPRFUwTmpVeUxETTJNQzR3TURBME9EUWdNalF1TVRZMk16VTNOaXd6TmpBdU1EQXdORGcwSUVNeE9TNDVNVGd5TlRBM0xETTJNQzR3TURBME9EUWdNVFF1TmpFeU16WXlOU3d6TmpFdU1EVTRNalkxSURrdU56azFNVFk1TWpNc016WXpMakU0TVRRek15Qk1PUzQzT1RVeE5qa3lNeXd6T1RndU1qZzROemswSUV3d0xETTVPQzR5T0RnM09UUWdUREFzTXpNekxqY3hNamN6TWlCTU9TNDNPVFV4TmpreU15d3pNek11TnpFeU56TXlJRXc1TGpjNU5URTJPVEl6TERNMU5TNHdNVGN4TXpRZ1F6RTBMalExTURZMk5Ea3NNelV6TGpNd05EVWdNakF1TURBeE16STVOQ3d6TlRFdU9ETTJNVGcxSURJMUxqVTFNamt3T0Rjc016VXhMamd6TmpFNE5TQkRNelF1TkRVeE1UTTJOaXd6TlRFdU9ETTJNVGcxSURNM0xqYzVPRFk1T1Rrc016VTNMak13TmpBd01TQXpOeTQzT1RnMk9UazVMRE0yTkM0NE1UTXlNVGdnVERNM0xqYzVPRFk1T1Rrc016azRMakk0T0RjNU5DQk1Namd1TURnek1EQTNNaXd6T1RndU1qZzROemswSUV3eU9DNHdPRE13TURjeUxETTVPQzR5T0RnM016Y2dUREk0TGpBNE16QXdOeklzTXprNExqSTRPRGN6TnlCYUlFMDFOaTR3T0RJd01qQTVMRE0zTnk0eU1qWTBPREVnUXpVMkxqUXdPREV3TXpVc016ZzRMamt3TURRNU9TQTFPQzQyT1RVeE9UZ3lMRE01TVM0eE9EY3hNellnTmpVdU9EYzJNek15TlN3ek9URXVNVGczTVRNMklFTTNNUzQxTVRBd056VTNMRE01TVM0eE9EY3hNellnTnpjdU9EYzRNakExTVN3ek9Ea3VNekE0TXpRMUlEZ3lMamMzTnpZeE9UTXNNemczTGpReU9UazFOQ0JNT0RRdU5EQTVPRFl4Tnl3ek9UUXVOemMxT1RNeElFTTNPUzR4T0RRek5qUTRMRE01Tnk0eE5EWTFOaklnTnpJdU9ERTNNVFV3TkN3ek9Ua3VORE13TlRFeUlEWTFMakl5TmpnMU5EZ3NNems1TGpRek1EVXhNaUJETkRndU9EazJORGd6T1N3ek9Ua3VORE13TlRFeUlEUTJMak0yTkRVMU5UY3NNemt3TGpRMU1qYzFJRFEyTGpNMk5EVTFOVGNzTXpjMkxqRTJNek15TlNCRE5EWXVNelkwTlRVMU55d3pOamd1TXpJM056azJJRFEyTGprek9ERXdNVGtzTXpZeExqSXlNemsyTlNBME9DNDRNVFV4TWpBMkxETTFOQzQyT1RNeU1qUWdRelV6TGpjeE1qY3dOVElzTXpVeUxqZ3hORGd6TXlBMk1DNHlORFF6TmpFNExETTFNUzQ0TXpZeE1qZ2dOamd1TkRnM05qZ3dNU3d6TlRFdU9ETTJNVEk0SUVNNE1TNDRPREExTmpNMkxETTFNUzQ0TXpZeE1qZ2dPRFV1T1RZd056UXdOaXd6TlRrdU1qWTJNRFF4SURnMUxqazJNRGMwTURZc016Y3lMakkwTlRjMk1TQk1PRFV1T1RZd056UXdOaXd6TnpjdU1qSTJOREkwSUV3MU5pNHdPREl3TWpBNUxETTNOeTR5TWpZME1qUWdURFUyTGpBNE1qQXlNRGtzTXpjM0xqSXlOalE0TVNCTU5UWXVNRGd5TURJd09Td3pOemN1TWpJMk5EZ3hJRm9nVFRZNExqUTROemN6TnpJc016WXdMakF3TURRNE5DQkROalV1TlRVeU9UTTNNeXd6TmpBdU1EQXdORGcwSURZd0xqZzVOelEwTVRjc016WXdMakE0TVRjNUlEVTNMakEyTVRFNE16UXNNell3TGpneE16UTRPU0JETlRZdU5qVTBOekE1TkN3ek5qSXVOemN6TlRnM0lEVTJMakUyTWpReE1qTXNNelkxTGpRMk9EQTNJRFUxTGprNU9EazBNaklzTXpjd0xqUTBPRGM1SUV3M05pNDBNRGcxTnpVeUxETTNNQzQwTkRnM09TQkROell1TkRBNE5UYzFNaXd6TmpNdU5qY3dPVGcxSURjMUxqRTRNemN5TVRZc016WXdMakF3TURRNE5DQTJPQzQwT0RjM016Y3lMRE0yTUM0d01EQTBPRFFnVERZNExqUTROemN6TnpJc016WXdMakF3TURRNE5DQk1Oamd1TkRnM056TTNNaXd6TmpBdU1EQXdORGcwSUZvZ1RURXdOQzR6TWpVME1qVXNNell6TGpFNE1UUXpNeUJNTVRBMExqTXlOVFF5TlN3ek9UZ3VNamc0TnprMElFdzVOQzQxTWpnME1qWXhMRE01T0M0eU9EZzNPVFFnVERrMExqVXlPRFF5TmpFc016VTRMamMzTkRJMU9DQkRNVEF5TGpjM05EUTRPU3d6TlRRdU1qZzFNemM0SURFeE1TNDFNRGt4T0Rrc016VXlMamc1TmpVNU5pQXhNVGN1TWpJMk1EWTVMRE0xTWk0ME9EZzNOU0JNTVRFM0xqSXlOakEyT1N3ek5qQXVOalV6TURRNUlFTXhNVE11TWpJMU5ESTFMRE0yTUM0NU56a3hPRGtnTVRBNExqRTJNVFk0TXl3ek5qRXVORFk0TnpReUlERXdOQzR6TWpVME1qVXNNell6TGpFNE1UUXpNeUJNTVRBMExqTXlOVFF5TlN3ek5qTXVNVGd4TkRNeklFd3hNRFF1TXpJMU5ESTFMRE0yTXk0eE9ERTBNek1nV2lCTk1UUXpMakV3TXpJNE55d3pPVGt1TkRNd05URXlJRU14TWpndU5EZzNNekl6TERNNU9TNDBNekExTVRJZ01USXhMamczTlRJM05Td3pPVEl1TWpRM05qQTFJREV5TVM0NE56VXlOelVzTXpjMUxqZ3pOekkwTXlCRE1USXhMamczTlRJM05Td3pOVGd1TkRRNE1UYzJJREV6TUM0Mk1UQXdNeklzTXpVeExqZ3pOakV5T0NBeE5ETXVNVEF6TWpnM0xETTFNUzQ0TXpZeE1qZ2dRekUxTnk0M01UUTNPVElzTXpVeExqZ3pOakV5T0NBeE5qUXVNekk0TmpFekxETTFPUzR3TVRrd016VWdNVFkwTGpNeU9EWXhNeXd6TnpVdU5ESTVNemszSUVNeE5qUXVNekk0TmpFekxETTVNaTQ0TVRnMU1qRWdNVFUxTGpVNU1qQTRNaXd6T1RrdU5ETXdOVEV5SURFME15NHhNRE15T0Rjc016azVMalF6TURVeE1pQk1NVFF6TGpFd016STROeXd6T1RrdU5ETXdOVEV5SUV3eE5ETXVNVEF6TWpnM0xETTVPUzQwTXpBMU1USWdXaUJOTVRRekxqRXdNekk0Tnl3ek5qQXVNREF3TkRnMElFTXhNelV1TlRrd05qazJMRE0yTUM0d01EQTBPRFFnTVRNeExqUXlPRE0xTlN3ek5qUXVNekkxT0RNNElERXpNUzQwTWpnek5UVXNNemMxTGpnek56TWdRekV6TVM0ME1qZ3pOVFVzTXpnNExqUXhNVFF3TkNBeE16UXVPVE00TlRNeExETTVNUzR4T0RjeE9UTWdNVFF6TGpFd016STROeXd6T1RFdU1UZzNNVGt6SUVNeE5UQXVOakV5TWpjM0xETTVNUzR4T0RjeE9UTWdNVFUwTGpjM056TXdOU3d6T0RZdU9UUXdORFU1SURFMU5DNDNOemN6TURVc016YzFMalF5T1RRMU5DQkRNVFUwTGpjM056TXdOU3d6TmpJdU9EVTFNamt6SURFMU1TNHlOall5TnpFc016WXdMakF3TURRNE5DQXhORE11TVRBek1qZzNMRE0yTUM0d01EQTBPRFFnVERFME15NHhNRE15T0Rjc016WXdMakF3TURRNE5DQk1NVFF6TGpFd016STROeXd6TmpBdU1EQXdORGcwSUZvZ1RUSXhNUzQxT1RJNE5UUXNNems0TGpJNE9EY3pOeUJNTWpBd0xqQTRNVFEwT1N3ek9UZ3VNamc0TnpNM0lFTXhPVGN1TXpnNE56TTRMRE01TVM0eE1EVXpOeklnTVRrekxqWXpNVEUxTml3ek9ETXVOelUyTnpZMklERTROeTQ0TXpRM05ETXNNemMzTGpNNE9UUTVOQ0JNTVRneUxqWTVNVFEyTnl3ek56Y3VNemc1TkRrMElFd3hPREl1TmpreE5EWTNMRE01T0M0eU9EZzNNemNnVERFM01pNDRPVFV6T0RNc016azRMakk0T0Rjek55Qk1NVGN5TGpnNU5UTTRNeXd6TXpNdU56RXlOek15SUV3eE9ESXVOamt4TkRZM0xETXpNeTQzTVRJM016SWdUREU0TWk0Mk9URTBOamNzTXpjd0xqYzNORGd4TmlCTU1UZzNMakkyTXpnNE5Dd3pOekF1TnpjME9ERTJJRU14T1RJdU1qUXpOamtzTXpZMUxqWXpNVEE0TXlBeE9UWXVNRGM1T1RRNExETTFPUzR5TmpZd09UZ2dNVGs0TGpjM05USTRPU3d6TlRJdU9UYzNPVEF6SUV3eU1Ea3VOemsxTXpFeUxETTFNaTQ1TnpjNU1ETWdRekl3Tmk0d05ERXlOelVzTXpZd0xqVTNNVE0wTXlBeU1ERXVNakkwT1RNNUxETTJOeTR5TmpVd09UY2dNVGsxTGpnek5UazNNaXd6TnpJdU56TTBPVEV6SUVNeU1ESXVNamcyTXpJekxETTRNQzQ0T1RreU55QXlNRGN1TXpRM05ETTFMRE00T1M0MU5UTXhNakVnTWpFeExqVTVNamcxTkN3ek9UZ3VNamc0TnpNM0lFd3lNVEV1TlRreU9EVTBMRE01T0M0eU9EZzNNemNnVERJeE1TNDFPVEk0TlRRc016azRMakk0T0Rjek55QmFJRTB5TWprdU9UVTFOekE1TERNNU9TNDBNekExTVRJZ1F6SXlNUzR3TlRreU5UUXNNems1TGpRek1EVXhNaUF5TVRjdU56RXhOamtzTXprekxqazJNamt5TmlBeU1UY3VOekV4Tmprc016ZzJMalExTVRJME9TQk1NakUzTGpjeE1UWTVMRE0xTWk0NU56YzVNRE1nVERJeU55NDBNalUyTVN3ek5USXVPVGMzT1RBeklFd3lNamN1TkRJMU5qRXNNemczTGpZM05EY3pJRU15TWpjdU5ESTFOakVzTXprd0xqRXlOalkyTnlBeU1qa3VNakl3TkRZMUxETTVNUzR4T0RjeE16WWdNak14TGpNME16RTNOU3d6T1RFdU1UZzNNVE0ySUVNeU16VXVOVGc0TlRrMUxETTVNUzR4T0RjeE16WWdNalF4TGpNNE5EazFMRE01TUM0eE1qWTJOamNnTWpRMkxqSXdNemt4Tml3ek9EZ3VNREF6TlNCTU1qUTJMakl3TXpreE5pd3pOVEl1T1RjM09UQXpJRXd5TlRZc016VXlMamszTnprd015Qk1NalUyTERNNU1pNHpNamc1TVRFZ1F6STBOQzQwTURjeU9Ea3NNems0TGpZNU5qVTRNeUF5TXpVdU5UQTNNamc0TERNNU9TNDBNekExTVRJZ01qSTVMamsxTlRjd09Td3pPVGt1TkRNd05URXlJRXd5TWprdU9UVTFOekE1TERNNU9TNDBNekExTVRJZ1RESXlPUzQ1TlRVM01Ea3NNems1TGpRek1EVXhNaUJhSWlCbWFXeHNQU0lqTmpjMk1rRTJJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQR2MrQ2lBZ0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHlNalV1TmpJM05UVTNMRE14Tnk0eU5USTNPVEVnVERNd0xqSTFOekV6TmpNc016RTNMakkxTWpjNU1TQkRNVE11TlRRMU56STBPU3d6TVRjdU1qVXlOemt4SURBc016QXpMamN3T0RJeE1pQXdMREk0Tmk0NU9UZ3hNVEVnVERBc016QXVNalUxT1RnNU9DQkRNQ3d4TXk0MU5EVTNNalE1SURFekxqVTBOVGN5TkRrc01DQXpNQzR5TlRjeE16WXpMREFnVERJeU5TNDJNamMxTlRjc01DQkRNalF5TGpNek5qVXhNaXd3SURJMU5TNDRPRGN6TVRRc01UTXVOVFExTnpJME9TQXlOVFV1T0RnM016RTBMRE13TGpJMU5UazRPVGdnVERJMU5TNDRPRGN6TVRRc01qZzJMams1T0RFeE1TQkRNalUxTGpnNE56TXhOQ3d6TURNdU56QTRNakV5SURJME1pNHpNelkxTVRJc016RTNMakkxTWpjNU1TQXlNalV1TmpJM05UVTNMRE14Tnk0eU5USTNPVEVnVERJeU5TNDJNamMxTlRjc016RTNMakkxTWpjNU1TQk1NakkxTGpZeU56VTFOeXd6TVRjdU1qVXlOemt4SUZvaUlHWnBiR3c5SWlNMk56WXlRVFlpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURTJNQzR6TmpBNE1qUXNNamN6TGpZd01EYzNPQ0JNTVRZd0xqTTJNRGd5TkN3eE5EY3VOakE1TnprM0lFTXhOakF1TXpZd09ESTBMREUwTnk0Mk1EazNPVGNnTVRZNExqVTFOVEk0TVN3eE1UY3VORFl3TVRBMUlEVTVMalF4TmpVMk9ERXNNVFU1TGprME16Z3lNU0JETlRrdU1qRTJPVEV4TVN3eE5qQXVORGd5TlRFNElEVTVMakl4TmpreE1URXNORE11TkRNNU56UTBNU0ExT1M0eU1UWTVNVEV4TERRekxqUXpPVGMwTkRFZ1REazBMamczTmpVNE1Ea3NORE11TWpJd09USXpPU0JNT1RRdU9EYzJOVGd3T1N3eE1UZ3VNakV4TXprNUlFTTVOQzQ0TnpZMU9EQTVMREV4T0M0eU1URXpPVGtnTVRrMExqY3lNamsyT1N3M09DNDRPRFUyTnpFeElERTVOQzQzTWpJNU5qa3NNVFE0TGpBek5EZ3lOU0JNTVRrMExqY3lNamsyT1N3eU56TXVOakF4TVRBMklFd3hOakF1TXpZd09ESTBMREkzTXk0Mk1ERXhNRFlnVERFMk1DNHpOakE0TWpRc01qY3pMall3TURjM09DQk1NVFl3TGpNMk1EZ3lOQ3d5TnpNdU5qQXdOemM0SUZvZ1RURTRNQzQyT0RBNE1EUXNPRGd1TmpBMk5EWTBOU0JNTVRReUxqZzFOakF5Tml3NE9DNDJNRFkwTmpRMUlFTXhOVFl1TkRjd09EWTVMRGN4TGprMk1ESTBNRFlnTVRZNExqYzVOVGc0TlN3ME15NDBNemswTVRZMUlERTJPQzQzT1RVNE9EVXNORE11TkRNNU5ERTJOU0JNTWpBM0xqa3dOVEkwT1N3ME15NDBNemswTVRZMUlFTXlNRGN1T1RBMU1qUTVMRFF6TGpRek9UVTRNRE1nTWpBeExqSXhNRFF6TVN3Mk1pNHdNalUxTkRBMklERTRNQzQyT0RBNE1EUXNPRGd1TmpBMk5EWTBOU0JNTVRnd0xqWTRNRGd3TkN3NE9DNDJNRFkwTmpRMUlFd3hPREF1Tmpnd09EQTBMRGc0TGpZd05qUTJORFVnV2lCTk5Ua3VPRFkwTXpZek5Dd3lOek11TXpneE9UVTRJRXcxT1M0NE5qUXpOak0wTERJd01TNDJNek01T0RZZ1REazFMamMwTVRVME16SXNNak0zTGpVeE1URTJOaUJNTlRrdU9EWTBNell6TkN3eU56TXVNemd4T1RVNElFdzFPUzQ0TmpRek5qTTBMREkzTXk0ek9ERTVOVGdnV2lJZ1ptbHNiRDBpSTBaR1JrWkdSaUkrUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHd2Wno0S0lDQWdJRHd2Wno0S1BDOXpkbWMrQ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvaGVyb2t1LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l6TmpGd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXpOakVpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4Wno0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1qVTFMalUxTkRneE15dzNNQzQzTmpVM01UUXpJRXd5TXpJdU16RXpOamNzTXpNeExqRXlOVFExTVNCTU1USTNMamcwTXpnMk9Dd3pOakF1TURnM09URXlJRXd5TXk0Mk5qRTNNVFF6TERNek1TNHhOall5TkRJZ1REQXVORFExTVRnMk9ERXpMRGN3TGpjMk5UY3hORE1nVERJMU5TNDFOVFE0TVRNc056QXVOelkxTnpFME15Qk1NalUxTGpVMU5EZ3hNeXczTUM0M05qVTNNVFF6SUZvaUlHWnBiR3c5SWlORk5EUkVNallpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTVRJNExETXpOeTQ1TlRBeU5ESWdUREl4TWk0ME1UWTNNRE1zTXpFMExqVTBOall6TnlCTU1qTXlMakkzTnpnd01pdzVNaTR3TlRjek1UZzNJRXd4TWpnc09USXVNRFUzTXpFNE55Qk1NVEk0TERNek55NDVOVEF5TkRJZ1RERXlPQ3d6TXpjdU9UVXdNalF5SUZvaUlHWnBiR3c5SWlOR01UWTFNamtpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOT0RJdU9ESXdNakU1T0N3eE5UVXVPVE15TVRNeUlFd3hNamdzTVRVMUxqa3pNakV6TWlCTU1USTRMREV5TXk0NU9UUTNNalVnVERRM0xqa3hOekF4TVN3eE1qTXVPVGswTnpJMUlFdzBPQzQyT0RFME9UUTFMREV6TWk0MU5qSTVPRGtnVERVMkxqVXpNRGs0T1N3eU1qQXVOVGN5T0RNMUlFd3hNamdzTWpJd0xqVTNNamd6TlNCTU1USTRMREU0T0M0Mk16WXhNeklnVERnMUxqY3pPRGt3TVRFc01UZzRMall6TmpFek1pQk1PREl1T0RJd01qRTVPQ3d4TlRVdU9UTXlNVE15SUV3NE1pNDRNakF5TVRrNExERTFOUzQ1TXpJeE16SWdXaUlnWm1sc2JEMGlJMFZDUlVKRlFpSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMDVNQzR3TVRjM05UZ3lMREl6Tmk0MU5ERTRPU0JNTlRjdU9UVTNPVGM0TERJek5pNDFOREU0T1NCTU5qSXVORE15TXpVeE5pd3lPRFl1TmpnM05qUTRJRXd4TWpjdU9EVXpNREV4TERNd05DNDRORGc0TnprZ1RERXlPQ3d6TURRdU9EQTRNRGc0SUV3eE1qZ3NNamN4TGpVNE1ERXpNaUJNTVRJM0xqZzJNREEwTkN3eU56RXVOakUzTkRBM0lFdzVNaTR5T1RFMU1UWTFMREkyTWk0d01UTXhPRGNnVERrd0xqQXhOemMxT0RJc01qTTJMalUwTVRnNUlFdzVNQzR3TVRjM05UZ3lMREl6Tmk0MU5ERTRPU0JhSWlCbWFXeHNQU0lqUlVKRlFrVkNJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEkwTGpFNE1EYzBOek1zTUNCTU5EQXVOREV3TnpJMU15d3dJRXcwTUM0ME1UQTNNalV6TERFMkxqQXpOVEUyTkRnZ1REVTFMakkxTnpNeE9EY3NNVFl1TURNMU1UWTBPQ0JNTlRVdU1qVTNNekU0Tnl3d0lFdzNNUzQwT0Rnc01DQk1OekV1TkRnNExEUTRMalUxT0RReE56WWdURFUxTGpJMU9EQXlNaXcwT0M0MU5UZzBNVGMySUV3MU5TNHlOVGd3TWpJc016SXVNams0TVRrM09DQk1OREF1TkRFeE5ESTROaXd6TWk0eU9UZ3hPVGM0SUV3ME1DNDBNVEUwTWpnMkxEUTRMalUxT0RReE56WWdUREkwTGpFNE1UUTFNRFVzTkRndU5UVTROREUzTmlCTU1qUXVNVGd4TkRVd05Td3dJRXd5TkM0eE9EQTNORGN6TERBZ1RESTBMakU0TURjME56TXNNQ0JhSWlCbWFXeHNQU0lqTURBd01EQXdJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVGt5TGpnek1EazBOVEVzTVRZdU1UQXlOamd4TXlCTU56Z3VOVFF5TnpZNU1pd3hOaTR4TURJMk9ERXpJRXczT0M0MU5ESTNOamt5TERBZ1RERXlNeTR6TlRZNE16VXNNQ0JNTVRJekxqTTFOamd6TlN3eE5pNHhNREkyT0RFeklFd3hNRGt1TURZeU16TXNNVFl1TVRBeU5qZ3hNeUJNTVRBNUxqQTJNak16TERRNExqVTFPRFF4TnpZZ1REa3lMamd6TVRZME9EUXNORGd1TlRVNE5ERTNOaUJNT1RJdU9ETXhOalE0TkN3eE5pNHhNREkyT0RFeklFdzVNaTQ0TXpBNU5EVXhMREUyTGpFd01qWTRNVE1nVERreUxqZ3pNRGswTlRFc01UWXVNVEF5TmpneE15QmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXpNQzQwTmpreU56VXNNQ0JNTVRRM0xqTTVNamN3TXl3d0lFd3hOVGN1T0RBeU9UQXhMREUzTGpBMk1UazNPQ0JNTVRZNExqSXdNalUwT1N3d0lFd3hPRFV1TVRNeU16QTRMREFnVERFNE5TNHhNekl6TURnc05EZ3VOVFU0TkRFM05pQk1NVFk0TGprMk9URTBNeXcwT0M0MU5UZzBNVGMySUV3eE5qZ3VPVFk1TVRRekxESTBMalE1TURFNU56Z2dUREUxTnk0NE1ESTVNREVzTkRFdU56VTFOREk0TmlCTU1UVTNMalV5TXpZNU1pdzBNUzQzTlRVME1qZzJJRXd4TkRZdU16UTVOekUwTERJMExqUTVNREU1TnpnZ1RERTBOaTR6TkRrM01UUXNORGd1TlRVNE5ERTNOaUJNTVRNd0xqUTJPVEkzTlN3ME9DNDFOVGcwTVRjMklFd3hNekF1TkRZNU1qYzFMREFnVERFek1DNDBOamt5TnpVc01DQmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURTVNeTR5TURrMk55d3dJRXd5TURrdU5EUTBOVGN4TERBZ1RESXdPUzQwTkRRMU56RXNNekl1TlRBM056Z3dNaUJNTWpNeUxqSTJPRFkxT1N3ek1pNDFNRGMzT0RBeUlFd3lNekl1TWpZNE5qVTVMRFE0TGpVMU9EUXhOellnVERFNU15NHlNRGsyTnl3ME9DNDFOVGcwTVRjMklFd3hPVE11TWpBNU5qY3NNQ0JNTVRrekxqSXdPVFkzTERBZ1dpSWdabWxzYkQwaUl6QXdNREF3TUNJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qY3VPRGc1TlRneUxESXlNQzQxTnpJNE16VWdUREUyTnk0eU1UWTFNamNzTWpJd0xqVTNNamd6TlNCTU1UWXpMalV3T1RRMU1Td3lOakV1T1RreU56a3hJRXd4TWpjdU9EZzVOVGd5TERJM01TNDJNRFk0TlRjZ1RERXlOeTQ0T0RrMU9ESXNNekEwTGpnek16UXdOeUJNTVRrekxqTTJNakk0Tml3eU9EWXVOamczTmpRNElFd3hPVE11T0RReU5qTTNMREk0TVM0eU9URTVOVFlnVERJd01TNHpORGMxTVRZc01UazNMakl4TWpFek1pQk1NakF5TGpFeU5qYzJPU3d4T0RndU5qTTJNVE15SUV3eE1qY3VPRGc1TlRneUxERTRPQzQyTXpZeE16SWdUREV5Tnk0NE9EazFPRElzTWpJd0xqVTNNamd6TlNCTU1USTNMamc0T1RVNE1pd3lNakF1TlRjeU9ETTFJRm9pSUdacGJHdzlJaU5HUmtaR1JrWWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVEkzTGpnNE9UVTRNaXd4TlRVdU9EVTBNRFkySUV3eE1qY3VPRGc1TlRneUxERTFOUzQ1TXpJeE16SWdUREl3TlM0d016STNPVEVzTVRVMUxqa3pNakV6TWlCTU1qQTFMalkzTXpRNU5Td3hORGd1TnpVek5UZ3lJRXd5TURjdU1USTROakUxTERFek1pNDFOakk1T0RrZ1RESXdOeTQ0T1RJek9UWXNNVEl6TGprNU5EY3lOU0JNTVRJM0xqZzRPVFU0TWl3eE1qTXVPVGswTnpJMUlFd3hNamN1T0RnNU5UZ3lMREUxTlM0NE5UUXdOallnVERFeU55NDRPRGsxT0RJc01UVTFMamcxTkRBMk5pQmFJaUJtYVd4c1BTSWpSa1pHUmtaR0lqNDhMM0JoZEdnK0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvaHRtbC01LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l5TlRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXlOVFlpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4Wno0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1Dd3dJRXd5TlRZc01DQk1NalUyTERJMU5pQk1NQ3d5TlRZZ1REQXNNQ0JhSWlCbWFXeHNQU0lqUmpkRVJqRkZJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVFkzTGpNeE1UYzBOaXd5TVRNdU9UTXlNamt5SUV3NE5pNDVNREkyTlRRc01qQXlMakEzTmpJME1TQkRPVEF1TmpneU1UQTNPU3d5TURndU56YzNNelEySURrMExqRXlNREl5T0RZc01qRTBMalEwTnpFek55QXhNREl1TXpZM01EZzJMREl4TkM0ME5EY3hNemNnUXpFeE1DNHlOekl5TURNc01qRTBMalEwTnpFek55QXhNVFV1TWpVMk1EYzJMREl4TVM0ek5UUTRNVGtnTVRFMUxqSTFOakEzTml3eE9Ua3VNekkyT0RneklFd3hNVFV1TWpVMk1EYzJMREV4Tnk0MU1qZzNPRGNnVERFek9TNHpNVE0xTnpVc01URTNMalV5T0RjNE55Qk1NVE01TGpNeE16VTNOU3d4T1RrdU5qWTJPVGszSUVNeE16a3VNekV6TlRjMUxESXlOQzQxT0RRek15QXhNalF1TnpBM056VTVMREl6TlM0NU1qVTVORE1nTVRBekxqTTVPRFFzTWpNMUxqa3lOVGswTXlCRE9EUXVNVFV6TWprMU1pd3lNelV1T1RJMU9UUXpJRGN5TGprNE1UazBNamtzTWpJMUxqazFPRFl3TXlBMk55NHpNVEV6TXprM0xESXhNeTQ1TXpBeU5pSWdabWxzYkQwaUl6QXdNREF3TUNJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE5USXVNemd3T1RVeUxESXhNUzR6TlRRME1UTWdUREUzTVM0NU5qazBNaklzTWpBd0xqQXhNamdnUXpFM055NHhNalU1T1RRc01qQTRMalF6TXprNE1TQXhPRE11T0RJM09URXhMREl4TkM0Mk1UazRNelVnTVRrMUxqWTRORE0yT0N3eU1UUXVOakU1T0RNMUlFTXlNRFV1TmpVeU5USXhMREl4TkM0Mk1UazRNelVnTWpFeUxqQXdPVEEwTVN3eU1Ea3VOak0xT1RZeUlESXhNaTR3TURrd05ERXNNakF5TGpjMk1qRTFPU0JETWpFeUxqQXdPVEEwTVN3eE9UUXVOVEV6TmpjMklESXdOUzQwTnprME1UWXNNVGt4TGpVNU1qQXlOU0F4T1RRdU5EZ3hNVFk0TERFNE5pNDNPREl3TnlCTU1UZzRMalEyT0RReE9Td3hPRFF1TWpBeU5UWTFJRU14TnpFdU1URXhNakV6TERFM05pNDRNVFEzTXlBeE5Ua3VOVGszTXpBNExERTJOeTQxTXpVek5DQXhOVGt1TlRrM016QTRMREUwTnk0NU5EUTRNemdnUXpFMU9TNDFPVGN6TURnc01USTVMamt3TVRNd09DQXhOek11TXpRME5UQTRMREV4Tmk0eE5UTXlPVFVnTVRrMExqZ3lOVGMxTWl3eE1UWXVNVFV6TWprMUlFTXlNVEF1TVRFNU9USTBMREV4Tmk0eE5UTXlPVFVnTWpJeExqRXhOemMyTlN3eE1qRXVORGd3T1RRZ01qSTVMakF5TVRZMk15d3hNelV1TkRBd05ETXlJRXd5TVRBdU1qa3dOVGtzTVRRM0xqUXlPRGMzTlNCRE1qQTJMakUyTmpFME5pd3hOREF1TURRd01USTNJREl3TVM0Mk9UazFOVFlzTVRNM0xqRXhPVEk0T1NBeE9UUXVPREkyTVRVNUxERXpOeTR4TVRreU9Ea2dRekU0Tnk0M09EQTBOeXd4TXpjdU1URTVNamc1SURFNE15NHpNVEl5TlRRc01UUXhMalU0TnpBNU9DQXhPRE11TXpFeU1qVTBMREUwTnk0ME1qZzNOelVnUXpFNE15NHpNVEl5TlRRc01UVTBMalkwTmpNME9TQXhPRGN1Tnpnd05EY3NNVFUzTGpVMk9EUXdOaUF4T1RndU1EZzVPVFUyTERFMk1pNHdNelkyTWpJZ1RESXdOQzR4TURNNU1qUXNNVFkwTGpZeE5EQTVOU0JETWpJMExqVTFNelEwT0N3eE56TXVNemM0TmpReElESXpOaTR3Tmpjek5USXNNVGd5TGpNeE16UTBPQ0F5TXpZdU1EWTNNelV5TERJd01pNDBNVGd6T0RjZ1F6SXpOaTR3Tmpjek5USXNNakkwTGpBM01Ua3lOQ0F5TVRrdU1EVTFNVE0zTERJek5TNDVNamM1TnpVZ01UazJMakl3TURRek1pd3lNelV1T1RJM09UYzFJRU14TnpNdU9EWXdPVGM0TERJek5TNDVNamM1TnpVZ01UVTVMalF5TlRneU9Td3lNalV1TWpjME16RXhJREUxTWk0ek9ERXpOVGtzTWpFeExqTTFORFF4TXlJZ1ptbHNiRDBpSXpBd01EQXdNQ0krUEM5d1lYUm9QZ29nSUNBZ1BDOW5QZ284TDNOMlp6NEtcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2phdmFzY3JpcHQuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSXlNek53ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBeU16TWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThaeUJ6ZEhKdmEyVTlJbTV2Ym1VaUlITjBjbTlyWlMxM2FXUjBhRDBpTVNJZ1ptbHNiRDBpYm05dVpTSWdabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJajRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTUM0ek9EYzNPVFF5TURJc01DQk1NalF1TVRjNU9UQXpOQ3d3SUV3eU5DNHhOems1TURNMExERTFOeTQ0T1RNd05qSWdUREV4T0M0eU5qWTROaklzTVRVM0xqZzVNekEyTWlCTU1URTRMakkyTmpnMk1pd3hOemN1TXpVNU16SXhJRXd3TGpNNE56YzVOVE0zTml3eE56Y3VNelU1TXpJeElFd3dMak00TnpjNU5UTTNOaXd6TGpNek56VTVOVEkwWlMweE5DQk1NQzR6T0RjM09UUXlNRElzTUNCYUlpQm1hV3hzUFNJak1EQXdNREF3SWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFNE15NHhOVFEwTWpNc05EWXVOVEF5TnpRNU9TQkRNVGs1TGpNM05qTXlOaXcwTkM0ek16azRNamswSURJeE5pNDJOemsyTlRJc05EY3VOVGcwTWpBM09TQXlNamt1TmpVM01UZ3lMRFU0TGpNNU9EZ3dORFlnUXpJME15NDNNVFl4TXpRc05qZ3VNVE14T1RNNE5pQXlOVEV1TWpnMk16YzFMRGcxTGpRek5USTROak1nTWpVeUxqTTJOemd6TXl3eE1ERXVOalUzTVRjeklFTXlOVFF1TlRNd056UTVMREV5TVM0eE1qTTBOREVnTWpVeUxqTTJOemd6TXl3eE5EQXVOVGc1TnpBNUlESTBNUzQxTlRNeU1Ua3NNVFUyTGpneE1UWXdNeUJETWpNeExqZ3lNREE1T0N3eE5qa3VOemc1TVRFMklESXhOaTQyTnprMk5UTXNNVGM0TGpRME1EYzVOeUF4T1RrdU16YzJNekkyTERFM09TNDFNakl5TlRVZ1F6RTRNeTR4TlRRME1qTXNNVGd4TGpZNE5URTNJREUyTkM0M05qazJNRE1zTVRjNExqUTBNRGM1TnlBeE5UQXVOekV3TmpVeExERTJOeTQyTWpZeUlFTXhNemN1TnpNek1USXhMREUxTmk0NE1URTJNRE1nTVRNeExqSTBORE0zTkN3eE5EQXVOVGc1TnpBNUlERXlPUzR3T0RFME5UZ3NNVEkwTGpNMk56Z3lNeUJETVRJMkxqa3hPRFUwTWl3eE1EY3VNRFkwTkRjZ01USTVMakE0TVRRMU9DdzROeTQxT1RneU1ESXhJREV6T1M0NE9UWXdNemNzTnpJdU5EVTNOemN6T0NCRE1UUTRMalUwTnpjek5TdzFOeTR6TVRjek5ERTVJREUyTlM0NE5URXdOakVzTkRjdU5UZzBNakEzT1NBeE9ETXVNVFUwTkRJekxEUTJMalV3TWpjME9Ua2dUREU0TXk0eE5UUTBNak1zTkRZdU5UQXlOelE1T1NCYUlFMHhPRFl1TXprNE56azJMRFkwTGpnNE56VTJNVFFnUXpFNU55NHlNVE16TnpVc05qTXVPREEyTURrNE9DQXlNRGt1TVRBNU5EUTRMRFkzTGpBMU1EUTNOeklnTWpFM0xqYzJNVEV4TERjMExqWXlNRFk1TURnZ1F6SXlOUzR6TXpFek5TdzRNeTR5TnpJek56RTNJREl5T1M0Mk5UY3hPRElzT1RRdU1EZzJPVFU1SURJek1DNDNNemcyTkN3eE1EUXVPVEF4TlRVMklFTXlNekV1T0RJd01EazRMREV4Tmk0M09UYzJNU0F5TXpBdU56TTROalFzTVRJNUxqYzNOVEV5TWlBeU1qVXVNek14TXpVc01UUXdMalU0T1RjeElFTXlNVGt1T1RJME1EWXhMREUxTVM0ME1EUXlPVGtnTWpFd0xqRTVNRGt3TkN3eE5UZ3VPVGMwTlRJZ01UazRMakk1TkRnMk9Td3hOakV1TVRNM05ETTJJRU14T0RjdU5EZ3dNalUwTERFMk15NHpNREF6TlRJZ01UYzFMalU0TkRJeE55d3hOakF1TURVMU9UYzRJREUyT0M0d01UTTVOemNzTVRVekxqVTJOekl6TVNCRE1UVTVMak0yTWpNeE15d3hORGN1TURjNE5EWTJJREUxTXk0NU5UVXdNalVzTVRNM0xqTTBOVE16TmlBeE5URXVOemt5TURjekxERXlOeTQyTVRJeE9UZ2dRekUwT1M0Mk1qa3hOVGNzTVRFekxqVTFNekl5TnlBeE5UQXVOekV3TmpVeExEazVMalE1TkRJMU56a2dNVFUyTGpFeE56azBMRGcyTGpVeE5qYzBOVFFnUXpFMk1TNDFNalV5TWprc056UXVOakl3Tmprd09DQXhOek11TkRJeE16QXhMRFkxTGprMk9UQXhPVE1nTVRnMkxqTTVPRGM1TlN3Mk5DNDRPRGMxTmpFMElFd3hPRFl1TXprNE56azJMRFkwTGpnNE56VTJNVFFnV2lJZ1ptbHNiRDBpSXpBd01EQXdNQ0krUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB3TGpNNE56YzVOREl3TWl3eU1EVXVORGMzTWpnZ1RESTFOUzQyTVRJeU1EY3NNakExTGpRM056STRJRXd5TlRVdU5qRXlNakEzTERJek1pNDFNVE0zTmpFZ1REQXVNemczTnprME1qQXlMREl6TWk0MU1UTTNOakVnVERBdU16ZzNOemswTWpBeUxESXdOUzQwTnpjeU9DQk1NQzR6T0RjM09UUXlNRElzTWpBMUxqUTNOekk0SUZvaUlHWnBiR3c5SWlNek5Ea3lSa1lpUGp3dmNHRjBhRDRLSUNBZ0lEd3ZaejRLUEM5emRtYytDZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9sb2Rhc2guc3ZnXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNKVXN1a20uc3ZnXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9tb2NoYS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJM01IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qVTJJRGN3SWlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIQnlaWE5sY25abFFYTndaV04wVW1GMGFXODlJbmhOYVc1WlRXbHVJRzFsWlhRaVBnb2dJQ0FnUEdjK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXlPUzR5T0RZMk56UXNNQzR4T0RFNU9EUTBPRFlnUXpFeU9TNHhNRGs1TURVc01DNHhPRFF4TkRNd01ESWdNVEk0TGprek1URXdOaXd3TGpJeU5qTXpNek0xTmlBeE1qZ3VOemN6TXpRNUxEQXVNekU0T0RZNE9UTTRJRU14TWpndU5EVTRNelkxTERBdU5UQXpOemszTmpNNUlERXlPQzR5TmpBd01Ua3NNQzQ0TkRNME1qSTROamNnTVRJNExqSTJNREF4T1N3eExqSXdPRFl6TlRFMElFd3hNamd1TWpZd01ERTVMREkzTGpNNE9ESXhOQ0JETVRJNExqSTJNREF4T1N3eU55NDJORFUwTkRnMklERXlPQzR4TkRBeU16a3NNamN1T0RjMU16QTVJREV5Tnk0NU1UYzRNRFFzTWpndU1EQTBNekUwT1NCRE1USTNMalk1TkRnd055d3lPQzR4TXpNMk5EUTFJREV5Tnk0ME1qSTJPRGdzTWpndU1UTXpOalEwTlNBeE1qY3VNVGs1TVRRM0xESTRMakF3TkRNeE5Ea2dUREV5TWk0NU1qRTBNekVzTWpVdU5UUXdNelEzTXlCRE1USXlMakk0TkRBNE5pd3lOUzR4TnpJNE16UWdNVEl4TGpVd05UWXhNaXd5TlM0eE56TXdOVFF5SURFeU1DNDROamd4TWpVc01qVXVOVFF3TXpRM015Qk1NVEF6TGpjNU1UUTNPU3d6TlM0ek9UWXlNRGt4SUVNeE1ETXVNVFV6TURNM0xETTFMamMyTkRRNU1EZ2dNVEF5TGpjMk5EZ3lOQ3d6Tmk0ME56TXdNVFVnTVRBeUxqYzJORGd5TkN3ek55NHlNRGs1TURZMUlFd3hNREl1TnpZME9ESTBMRFUyTGpreU1UWXpNRElnUXpFd01pNDNOalE0TWpRc05UY3VOalUzT1RZNU1TQXhNRE11TVRVek5UZzFMRFU0TGpNek1qSXlNRFFnTVRBekxqYzVNVFEzT1N3MU9DNDNNREV4TlRneklFd3hNakF1T0RZNE1USTFMRFk0TGpVMU56QXlNRElnUXpFeU1TNDFNRFkxTmpZc05qZ3VPVEkxTkRBNU9DQXhNakl1TWpneU9UZzVMRFk0TGpreU5UUXdPVGdnTVRJeUxqa3lNVFF6TVN3Mk9DNDFOVGN3TWpBeUlFd3hNemt1T1RrNE1EYzNMRFU0TGpjd01URTFPRE1nUXpFME1DNDJNelU1Tnl3MU9DNHpNekl5TWpBMElERTBNUzR3TWpRM016SXNOVGN1TmpVM09UWTVNU0F4TkRFdU1ESTBOek15TERVMkxqa3lNVFl6TURJZ1RERTBNUzR3TWpRM016SXNOeTQzTnpreU1EazNNU0JETVRReExqQXlORGN6TWl3M0xqQXpNVFkyTXpneElERTBNQzQyTVRZNE1EY3NOaTR6TXpBeE1qUTFNaUF4TXprdU9UWXpPRFUyTERVdU9UWTFORFUyTVRrZ1RERXlPUzQzT1RrNU9Ua3NNQzR5T0RRMk5EYzRNalVnUXpFeU9TNDJOREF6T1N3d0xqRTVOVFl4TnpZM015QXhNamt1TkRZek5EUTBMREF1TVRnd01EWTNOekl6SURFeU9TNHlPRFkyTnpRc01DNHhPREl3TkRBMk1EY2dUREV5T1M0eU9EWTJOelFzTUM0eE9ERTVPRFEwT0RZZ1dpQk5NVGt1TkRNME9EZzVOeXd5TkM0M09EY3pOakU1SUVNeE9TNHhNRGt5TXpnM0xESTBMamd3TURRNE5UY2dNVGd1T0RBek1qa3dOeXd5TkM0NE5UYzBORFEySURFNExqVXhNRGt3TWpRc01qVXVNREkyT1RZMU9DQk1NUzQwTXpReU5URTROeXd6TkM0NE9ESTRNamMzSUVNd0xqYzVOemswTnpJMU1Td3pOUzR5TlRBMk5qa2dNQzQwTURjMk1ERXlNVFFzTXpVdU9USXdOalV3T0NBd0xqUXdOell3TVRJeE5Dd3pOaTQyTmpJek5qQXhJRXd3TGpRME1UYzBPRGt6T0N3Mk15NHhNVFUzTURjNElFTXdMalEwTVRjME9Ea3pPQ3cyTXk0ME9ETTJOakUwSURBdU5qTXhOVGN6TVRVekxEWXpMamd5TlRNeU9EWWdNQzQ1TlRVd056ZzFPRE1zTmpRdU1EQTFOVGd4T1NCRE1TNHlOekl4TmpBeU55dzJOQzR4T1RVek5qTWdNUzQyTmpVM01UZ3hPQ3cyTkM0eE9UVXpOak1nTVM0NU9ERTNNamt5TkN3Mk5DNHdNRFUxT0RFNUlFd3hNaTR4TVRFek5qUXpMRFU0TGpFNE56YzNOamtnUXpFeUxqYzFNekF5TmpRc05UY3VPREEyTlRjME15QXhNeTR4TnpJeU16WXhMRFUzTGpFME16UTVOVFFnTVRNdU1UY3lNak0yTVN3MU5pNDBNRGd5TkRnNElFd3hNeTR4TnpJeU16WXhMRFEwTGpBMU5ESTFORE1nUXpFekxqRTNNakl6TmpFc05ETXVNekUzTXpZeU9DQXhNeTQxTlRrNE56azNMRFF5TGpZME1UQXpOU0F4TkM0eE9UZzRPVEV4TERReUxqSTNORGN5TVRrZ1RERTRMalV4TURneU9Td3pPUzQzTnpZMU9UTTJJRU14T0M0NE16STJOVFV4TERNNUxqVTVNRFV6TXpnZ01Ua3VNVGM0TVRZd01Td3pPUzQxTURJNE1UWXhJREU1TGpVek56UTNPVGNzTXprdU5UQXlPREUyTVNCRE1Ua3VPRGc1TkRJMU55d3pPUzQxTURJNE1UWXhJREl3TGpJMU1USXhNRE1zTXprdU5Ua3dOREkxT1NBeU1DNDFOalF4TXpRMkxETTVMamMzTmpVNU16WWdUREkwTGpnM05qQTNNallzTkRJdU1qYzBOekl4T1NCRE1qVXVOVEUxTURZeU5DdzBNaTQyTkRFd016VWdNalV1T1RBeU56SXpNaXcwTXk0ek1UY3pOakk0SURJMUxqa3dNamN5TXpJc05EUXVNRFUwTWpVME15Qk1NalV1T1RBeU56SXpNaXcxTmk0ME1EZ3lORGc0SUVNeU5TNDVNREkzTWpNeUxEVTNMakUwTXpRNU5UUWdNall1TXpJMk1USXdOU3cxTnk0NE1UQTRORGd5SURJMkxqazJNelU1T1RNc05UZ3VNVGczTnpjMk9TQk1NemN1TURrek1qTTBOQ3cyTkM0d01EVTFPREU1SUVNek55NDBNVEV6TmpBNExEWTBMakU1TlRNMk15QXpOeTQ0TURRek5qWXhMRFkwTGpFNU5UTTJNeUF6T0M0eE1UazRPRFV4TERZMExqQXdOVFU0TVRrZ1F6TTRMalF6TkRNeU1EUXNOak11T0RJMU16STROaUF6T0M0Mk16TXlNVEEwTERZekxqUTRNelkyTVRRZ016Z3VOak16TWpFd05DdzJNeTR4TVRVM01EYzRJRXd6T0M0Mk5qY3pOVGd4TERNMkxqWTJNak0yTURFZ1F6TTRMalkyTnpNMU9ERXNNelV1T1RJd05qVXdPQ0F6T0M0eU9ERXpNemMzTERNMUxqSTFNRFkyT1NBek55NDJOREEzTURjMUxETTBMamc0TWpneU56Y2dUREl3TGpVMk5EQTVOVGdzTWpVdU1ESTJPVFkxT0NCRE1qQXVNamMxTWpZME9Dd3lOQzQ0TlRjME5EUTJJREU1TGprMk56azJNVEVzTWpRdU9EQXdOekU0T0NBeE9TNDJOREF4TURnMUxESTBMamM0TnpNMk1Ua2dUREU1TGpRek5EYzNOelVzTWpRdU56ZzNNell4T1NCTU1Ua3VORE0wT0RnNU55d3lOQzQzT0Rjek5qRTVJRm9nVFRFM01pNDRPRFV4TnpFc01qVXVNREkyT1RZMU9DQkRNVGN5TGpVeU9EUXhNU3d5TlM0d01qWTFNelF4SURFM01pNHhOemc0TXpFc01qVXVNVEUyTnpZME5DQXhOekV1T0RVNE5URTJMREkxTGpNd01EY3pPU0JNTVRVMExqYzRNVGczTERNMUxqRTFOall3TURrZ1F6RTFOQzR4TkRNNU56WXNNelV1TlRJME9Ua3dOU0F4TlRNdU56VTFNakU1TERNMkxqRTVPVEkwTVRnZ01UVXpMamMxTlRJeE9Td3pOaTQ1TXpZeE16TXpJRXd4TlRNdU56VTFNakU1TERVMkxqWTBOemcxTWpjZ1F6RTFNeTQzTlRVeU1Ua3NOVGN1TXpnNU1ERXpOeUF4TlRRdU1UY3lOekl6TERVNExqQTJNVEEzTmpNZ01UVTBMamd4TmpBNU1TdzFPQzQwTWpjek9EVXhJRXd4TnpFdU56VTFPRFV5TERZNExqQTNOemt4TmlCRE1UY3lMak00TVRReU5TdzJPQzQwTXpVeE16YzBJREUzTXk0eE5EVXlOVFVzTmpndU5EWXhPRFUxTlNBeE56TXVOemMwT1RNekxEWTRMakV4TVRnME56Z2dUREU0TkM0d05ERTBOVFlzTmpJdU16azJOell5TWlCRE1UZzBMak0yTnpJME5pdzJNaTR5TVRZd05qZzFJREU0TkM0MU9EYzJNelFzTmpFdU9EYzROVFl6SURFNE5DNDFPRGt3TURNc05qRXVOVEEyT1RrMklFTXhPRFF1TlRreE1UWXhMRFl4TGpFek5UTXlNVEVnTVRnMExqTTVOek0yTVN3Mk1DNDRNREl4T1RNeElERTROQzR3TnpVMk56Z3NOakF1TmpFM01qSTVPQ0JNTVRZMkxqZzVOak0yTkN3MU1DNDNOakV6TmpnZ1F6RTJOaTQxTnpRMk9DdzFNQzQxTnpjNU5ERTJJREUyTmk0ek5EZzRNVGNzTlRBdU1qQTJNalkyTnlBeE5qWXVNelE0T0RFM0xEUTVMamd6TnpNeU9EZ2dUREUyTmk0ek5EZzRNVGNzTkRNdU5qYzNOREUyTXlCRE1UWTJMak0wT0RneE55dzBNeTR6TURreE16UTJJREUyTmk0MU56YzBNVGNzTkRJdU9UY3hOakkwTnlBeE5qWXVPRGsyTXpZMExEUXlMamM0TnpjMU9DQk1NVGN5TGpJek5EazFOeXd6T1M0M01EYzJPVE00SUVNeE56SXVOVFV5TlRNMUxETTVMalV5TXprek5TQXhOekl1T1RReU5qWXhMRE01TGpVeU16a3pOU0F4TnpNdU1qWXhOakEzTERNNUxqY3dOelk1TXpnZ1RERTNPQzQyTURBeUxEUXlMamM0TnpjMU9DQkRNVGM0TGpreE9URTBOeXcwTWk0NU56RTJNalEzSURFM09TNHhNVE0xTWpZc05ETXVNekE1TVRNME5pQXhOemt1TVRFek5USTJMRFF6TGpZM056UXhOak1nVERFM09TNHhNVE0xTWpZc05EZ3VOVE0zTURFeU9TQkRNVGM1TGpFeE16VXlOaXcwT0M0NU1EVTRNemcxSURFM09TNHpNRGM1TURRc05Ea3VNalF5T0RBd01TQXhOemt1TmpJMk9EVXhMRFE1TGpReU5qWTJOamdnUXpFM09TNDVORGN4TmpZc05Ea3VOakV4TURneE9DQXhPREF1TXpNME5UVTVMRFE1TGpZeE1UZzBOVGtnTVRnd0xqWTFNelV3Tml3ME9TNDBNalkyTmpZNElFd3hPVEF1T0RnMU9EQTBMRFF6TGpRM01qRTVNeklnUXpFNU1TNDFNakE1TmpFc05ETXVNVEF6TWpVMU15QXhPVEV1T1RFeU5EVTFMRFF5TGpReU56STFNVE1nTVRreExqa3hNalExTlN3ME1TNDJPVEkyTmpVeElFd3hPVEV1T1RFeU5EVTFMRE0yTGprek5UYzROemtnUXpFNU1TNDVNVEkwTlRVc016WXVNakF4TURnMU1pQXhPVEV1TlRJeU16STVMRE0xTGpVeU5URTVNelFnTVRrd0xqZzROVGd3TkN3ek5TNHhOVFl5TlRVMUlFd3hOek11T1RFeE9ESXhMREkxTGpNd01ETTVNemNnUXpFM015NDFPVEl4T0RRc01qVXVNVEUxTVRBMk5pQXhOek11TWpReE9UTXNNalV1TURJM01EWXdPQ0F4TnpJdU9EZzFNVGN4TERJMUxqQXlOall5TURRZ1RERTNNaTQ0T0RVeE56RXNNalV1TURJMk9UWTFPQ0JhSUUweE1qRXVPREkyTXpNekxETTVMamMwTWpNeE5qUWdRekV5TVM0NU1UVXpOalFzTXprdU56UXlNekUyTkNBeE1qSXVNREl3TVRZMExETTVMamMyTkRJd016Y2dNVEl5TGpFd01ERXdOeXd6T1M0NE1UQXlNVEF6SUV3eE1qY3VPVFV5TURJMUxEUXpMakU1T0RJeE56RWdRekV5T0M0eE1UQTRNVFFzTkRNdU1qa3dNakEwTkNBeE1qZ3VNakkxTnprNExEUXpMalExT1RZeE56Y2dNVEk0TGpJeU5UYzVPQ3cwTXk0Mk5ETXdORFFnVERFeU9DNHlNalUzT1Rnc05UQXVOREU0T1RRNU5pQkRNVEk0TGpJeU5UYzVPQ3cxTUM0Mk1ESTVNalF5SURFeU9DNHhNVEU1TVN3MU1DNDNOekkwTkRVMUlERXlOeTQ1TlRJd01qVXNOVEF1T0RZek9EZzRPQ0JNTVRJeUxqRXdNREV3Tnl3MU5DNHlOVEUzT0RNeklFTXhNakV1T1RRd056WTVMRFUwTGpNME1qWTNPRFFnTVRJeExqYzBOakV4T1N3MU5DNHpOREkyTnpnMElERXlNUzQxT0RZM09ERXNOVFF1TWpVeE56Z3pNeUJNTVRFMUxqY3pORGcyTXl3MU1DNDROak00T0RnNElFTXhNVFV1TlRjMU5USTJMRFV3TGpjM01Ua3dNVFVnTVRFMUxqUTJNVEE1TERVd0xqWXdNamt5TkRJZ01URTFMalEyTVRBNUxEVXdMalF4T0RrME9UWWdUREV4TlM0ME5qRXdPU3cwTXk0Mk5ETXdORFFnUXpFeE5TNDBOakV3T1N3ME15NDBOVGsyTVRjM0lERXhOUzQxTnpZd056UXNORE11TWprd05qUTBOeUF4TVRVdU56TTBPRFl6TERRekxqRTVPREl4TnpFZ1RERXlNUzQxT0RZM09ERXNNemt1T0RFd056VTROaUJETVRJeExqWTJOamN5TkN3ek9TNDNOalEzTmpRNUlERXlNUzQzTXpjeU9Td3pPUzQzTkRJNE5qUTJJREV5TVM0NE1qWXpNek1zTXprdU56UXlPRFkwTmlCTU1USXhMamd5TmpNek15d3pPUzQzTkRJek1UWTBJRm9pSUdacGJHdzlJaU0wTURReE16Y2lQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NakkwTGpBME5qWTNNU3d5TkM0MU5EYzROakUySUVNeU1qTXVORFUwTmpJNUxESTBMalUwTnpnMk1UWWdNakl5TGpnM09UQXlOeXd5TkM0Mk56QXlPVEkySURJeU1pNHpOams0TURjc01qUXVPVFU0TlRJek5pQk1NakEyTGpJMU1UTTJOU3d6TkM0eU5qWTRNelEzSUVNeU1EVXVNakE0TWpnNExETTBMamcyTnpNNE5UWWdNakEwTGpVM05EVXNNell1TURBeU5UWXlNaUF5TURRdU5UYzBOU3d6Tnk0eU1EazVNRFkxSUV3eU1EUXVOVGMwTlN3MU5TNDNPVEl6TmpNM0lFTXlNRFF1TlRjME5TdzFOaTQ1T1Rrd05URTVJREl3TlM0eU1EZ3lPRGdzTlRndU1UTXlPVEV4TnlBeU1EWXVNalV4TXpZMUxEVTRMamN6TlRNeU56WWdUREl4TUM0ME5qQTJNemtzTmpFdU1UWTFNVEkxT1NCRE1qRXlMalV3TlRjekxEWXlMakUzTXpBME9UTWdNakV6TGpJMU9UazRMRFl5TGpFMU56UTVPVFFnTWpFMExqRTVNRGd4TERZeUxqRTFOelE1T1RRZ1F6SXhOeTR5TVRnM05TdzJNaTR4TlRjME9UazBJREl4T0M0NU5EYzJNekVzTmpBdU16SXdNalUyT1NBeU1UZ3VPVFEzTmpNeExEVTNMakV5TmprMU5qa2dUREl4T0M0NU5EYzJNekVzTXpndU56ZzBNVEEzT1NCRE1qRTRMamswTnpZek1Td3pPQzQxTWpRM09EZ3hJREl4T0M0M01qTXhNellzTXpndU16TTVNVFk0TnlBeU1UZ3VORFk0TlRJMkxETTRMak16T1RFMk9EY2dUREl4Tmk0ME5EazBORFlzTXpndU16TTVNVFk0TnlCRE1qRTJMakU1TURjeU5pd3pPQzR6TXpreE5qZzNJREl4TlM0NU56QXpNemdzTXpndU5USTBOemc0TVNBeU1UVXVPVGN3TXpNNExETTRMamM0TkRFd056a2dUREl4TlM0NU56QXpNemdzTlRjdU1USTJPVFUyT1NCRE1qRTFMamszTURNek9DdzFPQzQxTkRJek5qa3lJREl4TkM0ME9UWXdOamNzTlRrdU9UWTFOemMyTnlBeU1USXVNVEF6TWpnekxEVTRMamMyT1RZd01EVWdUREl3Tnk0M01qSTVNRE1zTlRZdU1qQXpNREkxTnlCRE1qQTNMalUyT0RJeE9TdzFOaTR4TVRnM01EVTBJREl3Tnk0ME5Ea3hNalVzTlRVdU9UWTVPRGd3TVNBeU1EY3VORFE1TVRJMUxEVTFMamM1TWpNMk16Y2dUREl3Tnk0ME5Ea3hNalVzTXpjdU1qQTVPVEEyTlNCRE1qQTNMalEwT1RFeU5Td3pOeTR3TXpNME9EWTNJREl3Tnk0MU5qWTROVEVzTXpZdU9EVTBNekk1T0NBeU1EY3VOekl5T1RBekxETTJMamMyTlRBM09UVWdUREl5TXk0NE1EY3hNVGtzTWpjdU5Ea3dPVE16TkNCRE1qSXpMamsxTnpZNU15d3lOeTQwTURRME1qQXhJREl5TkM0eE16Y3dNVFFzTWpjdU5EQTBOREl3TVNBeU1qUXVNamcyTWpJMExESTNMalE1TURrek16UWdUREkwTUM0ek56QTBOQ3d6Tmk0M05qVXdOemsxSUVNeU5EQXVOVEl6TnpVMUxETTJMamcxTnpBMk5qZ2dNalF3TGpZME5ESXhNeXd6Tnk0d01qZ3hNakEySURJME1DNDJORFF5TVRNc016Y3VNakE1T1RBMk5TQk1NalF3TGpZME5ESXhNeXcxTlM0M09USXpOak0zSUVNeU5EQXVOalEwTWpFekxEVTFMamsyT1RnNE1ERWdNalF3TGpVMU5URTRNeXcxTmk0eE5URTJOallnTWpRd0xqUXdORFkyTVN3MU5pNHlNemN4T1RVZ1RESXlOQzR5T0RZeU1qUXNOalV1TlRFeE16UXhNU0JETWpJMExqRTBOemsyTml3Mk5TNDFPVE0wTnpJMklESXlNeTQ1TlRjMk9UTXNOalV1TlRrek5EY3lOaUF5TWpNdU9EQTNNVEU1TERZMUxqVXhNVE0wTVRFZ1RESXhPUzQyTmpZeU9EY3NOak11TURRM016Y3pOU0JETWpFNUxqVTBNekE0Tnl3Mk1pNDVOelV3T1RjM0lESXhPUzR6TnpRM01Ua3NOakl1T1Rnd05UY3hOeUF5TVRrdU1qVTFOakkxTERZekxqQTBOek0zTXpVZ1F6SXhPQzR4TVRJMk1qSXNOak11TmprMU16UXlOeUF5TVRjdU9EazNOekEzTERZekxqYzNNRFk0TXpZZ01qRTJMamd5TlRnNE15dzJOQzR4TkRJME56QTNJRU15TVRZdU5UWXhOamt6TERZMExqSXpORFExT0NBeU1UWXVNVFl3TmpFeExEWTBMak0zTnpVNE9USWdNakUyTGprMk1qYzNNaXcyTkM0NE1qWTVNRFU1SUV3eU1qSXVNelk1T0RBM0xEWTRMakF3T1RRM016Y2dRekl5TWk0NE9EUTFNREVzTmpndU16QTNNek0ySURJeU15NDBOVGd3TlRjc05qZ3VORFUwTXpBd055QXlNalF1TURRMk5qY3hMRFk0TGpRMU5ETXdNRGNnUXpJeU5DNDJORE0wT1Rjc05qZ3VORFUwTXpBd055QXlNalV1TWpBNE9EUXlMRFk0TGpNd056TXpOaUF5TWpVdU56SXpOVE0yTERZNExqQXdPVFEzTXpjZ1RESTBNUzQ0TkRFNU56UXNOVGd1TnpNMU16STNOaUJETWpReUxqZzROVEExTlN3MU9DNHhNamcyTkRJeUlESTBNeTQxTVRnNE16a3NOVFl1T1RrNU1EVXhPU0F5TkRNdU5URTRPRE01TERVMUxqYzVNak0yTXpjZ1RESTBNeTQxTVRnNE16a3NNemN1TWpBNU9UQTJOU0JETWpRekxqVXhPRGd6T1N3ek5pNHdNREkxTmpJeUlESTBNaTQ0T0RVd05UVXNNelF1T0RZNU9UQTJPQ0F5TkRFdU9EUXhPVGMwTERNMExqSTJOamd6TkRjZ1RESXlOUzQzTWpNMU16WXNNalF1T1RVNE5USXpOaUJETWpJMUxqSXhPRFF5TWl3eU5DNDJOekF5T1RJMklESXlOQzQyTXpnM01UUXNNalF1TlRRM09EWXhOaUF5TWpRdU1EUTJOamN4TERJMExqVTBOemcyTVRZZ1RESXlOQzR3TkRZMk56RXNNalF1TlRRM09EWXhOaUJhSUUwM01DNDNNek15TnpRNUxESTBMamt5TkRJME5qTWdRemN3TGpNM056UXpORGtzTWpRdU9USTBNalEyTXlBM01DNHdNalV5T1RnNUxESTFMakF4TkRBME5Ea2dOamt1TnpBMk5qSTBNaXd5TlM0eE9UZ3dNVGsySUV3MU1pNDJNams1Tnpnc016VXVNREU1TnpFMk5DQkROVEV1T1RreE5UTTJOU3d6TlM0ek9EYzJOalUzSURVeExqWXdNek15TXl3ek5pNHdPVGN4TnpnMUlEVXhMall3TXpNeU15d3pOaTQ0TXpNME1UTTRJRXcxTVM0Mk1ETXpNak1zTlRZdU5UUTFNVE16TWlCRE5URXVOakF6TXpJekxEVTNMakk0TWpJME5Ea2dOVEV1T1RreE9UVXdPU3cxTnk0NU5UVTVORGM1SURVeUxqWXlPVGszT0N3MU9DNHpNalEyTmpVMklFdzJPUzQzTURZMk1qUXlMRFk0TGpFNE1EVXlOelVnUXpjd0xqTTBOVEEyTlRnc05qZ3VOVFE1TWpRMU1pQTNNUzR4TWpFME9EZ3pMRFk0TGpVME9USTBOVElnTnpFdU56VTVPVEk1T0N3Mk9DNHhPREExTWpjMUlFdzRPQzQ0TXpZMU56WXhMRFU0TGpNeU5EWTJOVFlnUXpnNUxqUTNNemt5TVRFc05UY3VPVFUxT1RRM09TQTRPUzQ0TmpNeU16RXNOVGN1TWpneU1qUTBPU0E0T1M0NE5qTXlNekVzTlRZdU5UUTFNVE16TWlCTU9Ea3VPRFl6TWpNeExETTJMamd6TXpReE16Z2dRemc1TGpnMk16SXpNU3d6Tmk0d09UWXdPRFl6SURnNUxqUTNOVEF4TnpZc016VXVNemczTmpZMU55QTRPQzQ0TXpZMU56WXhMRE0xTGpBeE9UY3hOalFnVERjeExqYzFPVGt5T1Rnc01qVXVNVGs0TURFNU5pQkROekV1TkRReE1qVTFNaXd5TlM0d01UUXdORFE1SURjeExqQTRPVEV4TkRrc01qUXVPVEkwTWpRMk15QTNNQzQzTXpNeU56UTVMREkwTGpreU5ESTBOak1nVERjd0xqY3pNekkzTkRrc01qUXVPVEkwTWpRMk15QmFJRTB5TkRjdU9UWTNOalkxTERJMUxqQXlOekU0TmlCTU1qUTNMamsyTnpZMk5Td3lOUzQxTURZeU9UQXlJRXd5TkRrdU16QXlNekUxTERJMUxqVXdOakk1TURJZ1RESTBPUzR6TURJek1UVXNNamt1TURNeE1EY3pOU0JNTWpRNUxqZzBPVGcyTVN3eU9TNHdNekV3TnpNMUlFd3lORGt1T0RRNU9EWXhMREkxTGpVd05qSTVNRElnVERJMU1TNHlNVGczTXpJc01qVXVOVEEyTWprd01pQk1NalV4TGpJeE9EY3pNaXd5TlM0d01qY3hPRFlnVERJME55NDVOamMyTmpVc01qVXVNREkzTVRnMklFd3lORGN1T1RZM05qWTFMREkxTGpBeU56RTROaUJhSUUweU5URXVOamszT0RNMkxESTFMakF5TnpFNE5pQk1NalV4TGpZNU56Z3pOaXd5T1M0d016RXdOek0xSUV3eU5USXVNakV4TVRZeExESTVMakF6TVRBM016VWdUREkxTWk0eU1URXhOakVzTWpZdU5qWTVPREk1TmlCRE1qVXlMakl4TVRFMk1Td3lOaTQxTnpNME5qQTFJREkxTWk0eU1UVTFNakVzTWpZdU5ESTBOREU1TXlBeU5USXVNakV4TVRZeExESTJMakl5TlRBd01qWWdRekkxTWk0eU1EUTFPVGtzTWpZdU1ESXhPRFl3TkNBeU5USXVNakV4TVRZeExESTFMamcwTkRjNE5EUWdNalV5TGpJeE1URTJNU3d5TlM0M05EVTNPRFl5SUV3eU5USXVNakV4TVRZeExESTFMalkwTWpnMU1Ea2dUREkxTXk0ek5EQTBOemtzTWprdU1ETXdOelExTkNCTU1qVXpMamc0T0RBeU5pd3lPUzR3TXpBM05EVTBJRXd5TlRVdU1EVXhOVFkxTERJMUxqWTBNamcxTURrZ1F6STFOUzR3TlRFMU5qVXNNalV1T0RVNE16WTFOeUF5TlRVdU1ESXlOemN4TERJMkxqQTJOalF6TXpjZ01qVTFMakF4TnpReE9Dd3lOaTR5TlRnNE16azFJRU15TlRVdU1ERTFNalU1TERJMkxqUTBOakE1T1RRZ01qVTFMakF4TnpReE9Dd3lOaTQxT0RZM01UTTRJREkxTlM0d01UYzBNVGdzTWpZdU5qWTVOVEF4TlNCTU1qVTFMakF4TnpReE9Dd3lPUzR3TXpBM05EVTBJRXd5TlRVdU5UTXdOelF6TERJNUxqQXpNRGMwTlRRZ1RESTFOUzQxTXpBM05ETXNNalV1TURJMk9EVTNPU0JNTWpVMExqYzNOemcyTlN3eU5TNHdNalk0TlRjNUlFd3lOVE11TmpFME16STJMREk0TGpReE5EZzJORFlnVERJMU1pNDBPRFV3TURnc01qVXVNREkyT0RVM09TQk1NalV4TGpZNU56a3dPU3d5TlM0d01qWTROVGM1SUV3eU5URXVOamszT0RNMkxESTFMakF5TnpFNE5pQmFJRTB5TWpndU16VTROakE1TERNM0xqZ3lOakV4TlRNZ1F6SXlNeTQzTmpnM09EZ3NNemN1T0RJMk1URTFNeUF5TWpFdU1ETTFNVFUzTERNNUxqYzNPVFF6T0RVZ01qSXhMakF6TlRFMU55dzBNeTR3TWpjNE1UazFJRU15TWpFdU1ETTFNVFUzTERRMkxqVTFNVGN6TURjZ01qSXpMamMwT0RJMU55dzBOeTQxTVRrNU1ESTVJREl5T0M0eE5UTXlOemdzTkRjdU9UVTFOelV3TkNCRE1qTXpMalF5TXpReU9TdzBPQzQwTnpFMk5UTWdNak16TGpnek5EQTROeXcwT1M0eU5EVTBORFkxSURJek15NDRNelF3T0Rjc05UQXVNamd5T0RJNU15QkRNak16TGpnek5EQTROeXcxTWk0d09ESXhPREV5SURJek1pNHpPVGsxTVRFc05USXVPRFE1TkRBME1TQXlNamt1TURBNE9ESXpMRFV5TGpnME9UUXdOREVnUXpJeU5DNDNORGc1TURFc05USXVPRFE1TkRBME1TQXlNak11T0RFeU5Ua3pMRFV4TGpjNE5UazFPVFFnTWpJekxqUTVPVEV5TVN3ME9TNDJOalk0TkRBMklFTXlNak11TkRZeU1qRXNORGt1TkRNNU5qQTFJREl5TXk0eU9EWTVORGNzTkRrdU1qVTJNVGM0TmlBeU1qTXVNRFUwTWpReUxEUTVMakkxTmpFM09EWWdUREl5TUM0NU5qWTNNVFVzTkRrdU1qVTJNVGM0TmlCRE1qSXdMamN3T1RNMk9DdzBPUzR5TlRZeE56ZzJJREl5TUM0ME9EYzJNVEVzTkRrdU5EYzNORGsxTmlBeU1qQXVORGczTmpFeExEUTVMamN6TlRJNE1qZ2dRekl5TUM0ME9EYzJNVEVzTlRJdU5EUTNPRE16T0NBeU1qRXVPVFl6TWpVc05UVXVOalUxTmprNU5DQXlNamt1TURBNE9ESXpMRFUxTGpZMU5UWTVPVFFnUXpJek5DNHhNRGt5TXpNc05UVXVOalUxTmprNU5DQXlNemN1TURVd09UTXlMRFV6TGpZMU16WTBOVFlnTWpNM0xqQTFNRGt6TWl3MU1DNHhORFU1TkRRNElFTXlNemN1TURVd09UTXlMRFEyTGpZMk9EVTNOVFVnTWpNMExqWTNORFUzTkN3ME5TNDNNelV5TWpRMklESXlPUzQzTWpjME9DdzBOUzR3T0RFeE1qVXhJRU15TWpRdU56STRNelkxTERRMExqUXhPVFk0TmpjZ01qSTBMakkxTWpBd01pdzBOQzR3T1RVNU56ZzBJREl5TkM0eU5USXdNRElzTkRJdU9USTFNakV5TXlCRE1qSTBMakkxTWpBd01pdzBNUzQ1TlRnM09EZzFJREl5TkM0Mk5UVTRNVGdzTkRBdU5qWTJORFkzTnlBeU1qZ3VNelU0TmpBNUxEUXdMalkyTmpRMk56Y2dRekl6TVM0Mk5qVTNPVGNzTkRBdU5qWTJORFkzTnlBeU16SXVPRGc0TVRrNUxEUXhMak0zT1Rjd01Ua2dNak16TGpNNE9USXdOQ3cwTXk0Mk1EazJORGMxSUVNeU16TXVORE16TURBNUxEUXpMamd4T1RJME9DQXlNek11TmpFM09EQTRMRFF6TGprNE5qQXlOemtnTWpNekxqZ3pOREE0Tnl3ME15NDVPRFl3TWpjNUlFd3lNelV1T1RJeE5qRXpMRFF6TGprNE5qQXlOemtnUXpJek5pNHdOVEF5T0Rjc05ETXVPVGcyTURJM09TQXlNell1TVRjME9EVTFMRFF6TGprd056RTRNVGNnTWpNMkxqSTJNemd6TXl3ME15NDRNVFE0TmpZeUlFTXlNell1TXpVeE5ETTVMRFF6TGpjeE5qTXdPRFFnTWpNMkxqUXhNekF6T1N3ME15NDJNRFV5TmpVM0lESXpOaTQwTURBM01UZ3NORE11TkRjeU56VTROeUJETWpNMkxqQTNOelkyTml3ek9TNDJNekl6TmpVNUlESXpNeTQxTVRZMU1Ea3NNemN1T0RJMk1URTFNeUF5TWpndU16VTROakE1TERNM0xqZ3lOakV4TlRNZ1RESXlPQzR6TlRnMk1Ea3NNemN1T0RJMk1URTFNeUJhSUUweE56SXVPRFV3T1RVc05ESXVOVEUwTlRVd015QkRNVGN5TGpjNE1qY3lNeXcwTWk0MU1UUTFOVEF6SURFM01pNDNNRGN5TVRnc05ESXVOVEUwTlRVd015QXhOekl1TmpRMU5qRTVMRFF5TGpVME9EUTRNaklnVERFMk9TNHpOakF6TXpFc05EUXVORFkwT0RrNUlFTXhOamt1TWpNM01UTXlMRFEwTGpVek5EazROaUF4TmprdU1UVTFMRFEwTGpZMk5UUXdOemtnTVRZNUxqRTFOU3cwTkM0NE1EY3hNVFExSUV3eE5qa3VNVFUxTERRNExqVTNNVFV3TmlCRE1UWTVMakUxTlN3ME9DNDNNVE15TVRJMUlERTJPUzR5TXpjeE16SXNORGd1T0RRek1Ea3dOU0F4TmprdU16WXdNek14TERRNExqa3hNemN5TlRjZ1RERTNNaTQyTkRVMk1Ua3NOVEF1TnprMU9EWTFOQ0JETVRjeUxqYzJPRGd4TkN3MU1DNDROamN3TkRRMklERTNNaTQ1TURBeU1qa3NOVEF1T0RZM01EUTBOaUF4TnpNdU1ESXlNRFUxTERVd0xqYzVOVGcyTlRRZ1RERTNOaTR6TURjek5ESXNORGd1T1RFek56STFOeUJETVRjMkxqUXlPVEUzTXl3ME9DNDRORE0yTXpnM0lERTNOaTQxTVRJMk56TXNORGd1TnpFek1qRXlOU0F4TnpZdU5URXlOamN6TERRNExqVTNNVFV3TmlCTU1UYzJMalV4TWpZM015dzBOQzQ0TURjeE1UUTFJRU14TnpZdU5URXlOamN6TERRMExqWTJOVFF3TnprZ01UYzJMalF5T1RJekxEUTBMalV6TlRReU1qRWdNVGMyTGpNd056TTBNaXcwTkM0ME5qUTRPVGtnVERFM015NHdNakl3TlRVc05ESXVOVFE0TkRneU1pQkRNVGN5TGprMk1URTJPQ3cwTWk0MU1USXpORGcySURFM01pNDVNVGt5TWpnc05ESXVOVEUwTlRVd015QXhOekl1T0RVd09UVXNOREl1TlRFME5UVXdNeUJNTVRjeUxqZzFNRGsxTERReUxqVXhORFUxTURNZ1dpSWdabWxzYkQwaUl6Z3pRMFF5T1NJK1BDOXdZWFJvUGdvZ0lDQWdQQzluUGdvOEwzTjJaejRLXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9ub2RlanMuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSXlNekJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBeU16QWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThjR0YwYUNCa1BTSk5NQzQzTlRReE1qUXhNVElzTVRFMExqYzFNRE0wTVNCRE1DNDNOVFF4TWpReE1USXNNVE16TGprMk5EWTRNaUF4T1M0MU1UWTJNRE15TERFMU1TNDVNREl3TlNBME9TNHdPVGN5TERFMk1pNHdNVEkxTWpVZ1F6UXpMakU1TURJek1Ea3NNVGt4TGpjMU1ESXpJRFE0TGpBek9EVTJOeklzTWpFMUxqY3hPRFl4T0NBMk5DNHlNekkxTXprMUxESXlOUzR3TlRneE1EUWdRemd3TGpnM09ESTJOeXd5TXpRdU5qVTNNakExSURFd05TNDJOell5T1RZc01qSTRMakF4TWpZeUlERXlPUzR5TVRJNU9USXNNakEzTGpRek9EZ3hOaUJETVRVeUxqRTFOVGcyTlN3eU1qY3VNVGd5TURjMElERTNOUzR6TkRNM01qa3NNak0wTGprMU1qQXpNeUF4T1RFdU5USXlOakV5TERJeU5TNDFPRFl3TURVZ1F6SXdPQzR4TlRJd05qTXNNakUxTGprMU9UQXpOeUF5TVRNdU1qRXdNemd6TERFNU1DNHpOalV3TURNZ01qQTNMakUwTURBMU1pd3hOVGt1TmprNU1EazBJRU15TXpjdU9UUTVPREVzTVRRNUxqVXhNalkyTkNBeU5UVXVNVGd6T1RNM0xERXpOQzR5TVRjMk1EUWdNalUxTGpFNE16a3pOeXd4TVRRdU56VXdNelF4SUVNeU5UVXVNVGd6T1RNM0xEazFMams0TVRRMk5qVWdNak0yTGpNNE5qWTBOaXczT1M0M05ETTROaklnTWpBM0xqSXdOVEF5TkN3Mk9TNDJPVGM1T1RJeUlFTXlNVE11TnpNNU9UY3NNemN1TnpZME56RXhOeUF5TURndU1qQXlOeklzTVRRdU16YzNPVE0yTkNBeE9URXVNek00TkRFMkxEUXVOalV5TnpVMU1EVWdRekUzTlM0d056azBOVGtzTFRRdU56SXlPVEl4T1RjZ01UVXhMall5TWpReE9Td3pMalEwT0Rrek5qUXhJREV5T0M0ek5ESXhNallzTWpNdU56QTVNalU1TVNCRE1UQTBMakV5TWprek55d3lMakl3TkRVeU56WTBJRGd3TGpnNU56TTBOelFzTFRRdU16WXhNVE0yTnpVZ05qUXVNRFE1TXpreUxEVXVNemt5TXpnNU5UUWdRelEzTGpnd05qSXpOemNzTVRRdU56azBOek0xT0NBME15NHhOekV4TURrMkxETTVMakU1T0RZNU5qSWdORGt1TURrM01UazVPU3cyT1M0ME9EWTVOREExSUVNeU1DNDFNVFUwTWprMUxEYzVMalExTWpJd01qUWdNQzQzTlRReE1qUXhNVElzT1RZdU1EVTJOVEkxT1NBd0xqYzFOREV5TkRFeE1pd3hNVFF1TnpVd016UXhJRm9pSUdacGJHdzlJaU5HUmtaR1JrWWlQand2Y0dGMGFENEtJQ0FnSUR4d1lYUm9JR1E5SWsweU1ERXVNREkwTlRVekxEYzVMalkzTkRFeE56Z2dRekU1T0M0Mk9EQTFNelFzTnpndU9EWTNNekExTmlBeE9UWXVNalV4TmpVeExEYzRMakV3TXprek1EZ2dNVGt6TGpjMU1EYzNOQ3czTnk0ek9ERTVPREk0SUVNeE9UUXVNVFl4T0RJekxEYzFMamN3TkRRd09EVWdNVGswTGpVek9UQTROU3czTkM0d05EZzFOVE1nTVRrMExqZzNORFV5TERjeUxqUXlNRGcxTVRVZ1F6SXdNQzR6T0RBMk16SXNORFV1Tmprek5EZzJNaUF4T1RZdU56Z3dOVFEwTERJMExqRTJNVGN6TkRVZ01UZzBMalE0TnpNeE5Td3hOeTR3TnpJMU5qVTJJRU14TnpJdU5qazVOalV4TERFd0xqSTNORGs1TVRRZ01UVXpMalF5TVRneU5pd3hOeTR6TmpJMU5URTFJREV6TXk0NU5USXhOVEVzTXpRdU16QTJOREV6TWlCRE1UTXlMakEzT1RreE1pd3pOUzQ1TXpVM01qTTFJREV6TUM0eU1ESTBORFFzTXpjdU5qWXdOelUzTXlBeE1qZ3VNekkxTnpneUxETTVMalEyT0RZME5ERWdRekV5Tnk0d056VXpORE1zTXpndU1qY3lOVEF5TnlBeE1qVXVPREkyT1RFMkxETTNMakV4TmpVNE1UTWdNVEkwTGpVNE1UY3dOeXd6Tmk0d01UQTVNelE0SUVNeE1EUXVNVGMyT1RFNExERTNMamc1TXpRMU5EZ2dPRE11TnpJME1qWTNNU3d4TUM0eU5UZzFNREV5SURjeExqUTBNekV3TkRVc01UY3VNelk0TVRneU15QkROVGt1TmpZMk56QXlNaXd5TkM0eE9EVTBOalF6SURVMkxqRTNPVEl6TURJc05EUXVOREkzTXpZeU1TQTJNUzR4TXpVMU16VXNOamt1TnpVM01EZzBNU0JETmpFdU5qRTBNVFV5TkN3M01pNHlNRE0yTmpNNElEWXlMakUzTXpZeE1Ua3NOelF1TnpBeU1USTNNeUEyTWk0NE1EWXlOekU0TERjM0xqSTBNalF4T1RVZ1F6VTVMamt4TVRZME1UZ3NOemd1TURZME1URXpNU0ExTnk0eE1UY3hOVGsxTERjNExqazBNREV3TXpjZ05UUXVORFF6TXpNM0xEYzVMamczTWlCRE16QXVOVEl3T1RFeE1pdzRPQzR5TVRJME1URTJJREUxTGpJME1qazFPVGtzTVRBeExqSTRNemc1TmlBeE5TNHlOREk1TlRrNUxERXhOQzQ0TkRJME5EUWdRekUxTGpJME1qazFPVGtzTVRJNExqZzBOVGd5TmlBek1TNDJORE00TlRJekxERTBNaTQ0T1RFME16Z2dOVFl1TlRZd09URTNOU3d4TlRFdU5EQTRNREV5SUVNMU9DNDFNamN5TnpFc01UVXlMakE0TURBNE9DQTJNQzQxTmpjMk1qa3lMREUxTWk0M01UVTFOak1nTmpJdU5qY3dNekk0TkN3eE5UTXVNekU0T0RZeUlFTTJNUzQ1T0RjM09UVTRMREUxTmk0d05qWXlPRGdnTmpFdU16azBNVFE1TXl3eE5UZ3VOelU0TmpFeElEWXdMamc1TlRneU5Dd3hOakV1TXpnME5UY3lJRU0xTmk0eE5qazVOemsyTERFNE5pNHlOelEyT1NBMU9TNDROakExTmpJMExESXdOaTR3TXpnek56SWdOekV1TmpBMU5Ua3pNU3d5TVRJdU9ERXlOakU1SUVNNE15NDNNemN4TXpjMUxESXhPUzQ0TURnME56Z2dNVEEwTGpBNU56STRNaXd5TVRJdU5qRTNOVFV5SURFeU15NDVNakk1TURNc01UazFMakk0TnpVM09TQkRNVEkxTGpRNE9UZzNNeXd4T1RNdU9URTNOamczSURFeU55NHdOakkwTnpNc01Ua3lMalEyTkRrME15QXhNamd1TmpNM09EZzRMREU1TUM0NU5ESXlNVFlnUXpFek1DNDJOems0TlRZc01Ua3lMamt3T0RVMk9TQXhNekl1TnpFNE5qQTBMREU1TkM0M05qazFORFlnTVRNMExqYzBOalE1TlN3eE9UWXVOVEUxTURreUlFTXhOVE11T1RRNU9URTBMREl4TXk0d05EQXlOalFnTVRjeUxqa3hOalF6Tnl3eU1Ua3VOekV6TVRVM0lERTROQzQyTlRBMk1EZ3NNakV5TGpreU1EQXdOeUJETVRrMkxqYzNNREE0Tml3eU1EVXVPVEEwTURNM0lESXdNQzQzTURnNE1qY3NNVGcwTGpZM016RXpNU0F4T1RVdU5UazFNall4TERFMU9DNDROREl5TmprZ1F6RTVOUzR5TURRM01qVXNNVFUyTGpnMk9UUTRJREU1TkM0M05UQXlOQ3d4TlRRdU9EVTBNRFU0SURFNU5DNHlNems0TkRrc01UVXlMamd3TWpnME1TQkRNVGsxTGpZMk9UWTJPQ3d4TlRJdU16Z3dNVEk0SURFNU55NHdOek16TkRVc01UVXhMamswTXpjME1pQXhPVGd1TkRReU1ETXNNVFV4TGpRNU1EQTJNU0JETWpJMExqTTBOVFk1TVN3eE5ESXVPVEEzTlRJMklESTBNUzR4T1RrME5Ua3NNVEk1TGpBek1qZzBPQ0F5TkRFdU1UazVORFU1TERFeE5DNDROREkwTkRRZ1F6STBNUzR4T1RrME5Ua3NNVEF4TGpJek5EZ3lPQ0F5TWpVdU5ESTRPREV6TERnNExqQTNOVEkyTVRZZ01qQXhMakF5TkRVMU15dzNPUzQyTnpReE1UYzRJRXd5TURFdU1ESTBOVFV6TERjNUxqWTNOREV4TnpnZ1RESXdNUzR3TWpRMU5UTXNOemt1TmpjME1URTNPQ0JhSWlCbWFXeHNQU0lqTlRORE1VUkZJajQ4TDNCaGRHZytDaUFnSUNBOGNHRjBhQ0JrUFNKTk1UazFMalF3TmpJeU9Dd3hOREl1TXpJM05UVTBJRU14T1RRdU1UY3dOamN4TERFME1pNDNNelkxT1NBeE9USXVPVEF5T1RNNExERTBNeTR4TXpFNU5UTWdNVGt4TGpZeE1UQTNNeXd4TkRNdU5URTFNalE1SUVNeE9EZ3VOelV4TkRNMUxERXpOQzQwTmpJeE5DQXhPRFF1T0RreE9USTRMREV5TkM0NE16VTBPVFFnTVRnd0xqRTJPRGc1T1N3eE1UUXVPRGc1TlRBeUlFTXhPRFF1TmpjMU9UUTNMREV3TlM0eE9EQTBNRFVnTVRnNExqTTROakl6Tnl3NU5TNDJOelk0TXpJM0lERTVNUzR4TmpVNE16Z3NPRFl1TmpneU5EUTBOaUJETVRrekxqUTNOekkzT1N3NE55NHpOVEV6TURJMElERTVOUzQzTWpBM05EZ3NPRGd1TURVMk56WXdOU0F4T1RjdU9EZ3lOVGN4TERnNExqZ3dNVEl6TVRnZ1F6SXhPQzQzT1RJeE1Ua3NPVFV1T1RrNU16azJOeUF5TXpFdU5UUTJOamN4TERFd05pNDJOREU1T1RnZ01qTXhMalUwTmpZM01Td3hNVFF1T0RReU5EUTBJRU15TXpFdU5UUTJOamN4TERFeU15NDFOemMwTVRRZ01qRTNMamMzTWpFME1pd3hNelF1T1RFMk5qSTFJREU1TlM0ME1EWXlNamdzTVRReUxqTXlOelUxTkNCTU1UazFMalF3TmpJeU9Dd3hOREl1TXpJM05UVTBJRXd4T1RVdU5EQTJNakk0TERFME1pNHpNamMxTlRRZ1dpQk5NVGcyTGpFeU5UZzNOaXd4TmpBdU56RTJPVElnUXpFNE9DNHpPRGN3TkRFc01UY3lMakV6T0RrNE5TQXhPRGd1TnpFd01EQTNMREU0TWk0ME5qVTROaUF4T0RjdU1qRXlNakUyTERFNU1DNDFNemc0TURrZ1F6RTROUzQ0TmpZME5UY3NNVGszTGpjNU1qZzRJREU0TXk0eE5qQXdOVFlzTWpBeUxqWXlPVE15T1NBeE56a3VPREV6TnpVMkxESXdOQzQxTmpZek1qSWdRekUzTWk0Mk9USTRNVE1zTWpBNExqWTRPREEyTXlBeE5UY3VORFkwTnpNMkxESXdNeTR6TXpBek5qTWdNVFF4TGpBME1UY3lNaXd4T0RrdU1UazNPRGMySUVNeE16a3VNVFU1TURJMkxERTROeTQxTnpjNE1UWWdNVE0zTGpJMk1qWTFOU3d4T0RVdU9EUTNPVFUySURFek5TNHpOakF5TlRFc01UZzBMakF4TnpFME15QkRNVFF4TGpjeU56QTNMREUzTnk0d05UTTROak1nTVRRNExqQTVNREkyT1N3eE5qZ3VPVFU0TnprMElERTFOQzR6TURBMk16SXNNVFU1TGprMk9EUXlOeUJETVRZMUxqSXlNemsyT0N3eE5UZ3VPVGs1TVRJM0lERTNOUzQxTkRRd01EY3NNVFUzTGpReE5EUTJJREU0TkM0NU1ESTNPRGNzTVRVMUxqSTFNVEF5T1NCRE1UZzFMak0yTXpjd09Dd3hOVGN1TVRFd016azNJREU0TlM0M056TXhORGNzTVRVNExqa3pNemszSURFNE5pNHhNalU0TnpZc01UWXdMamN4TmpreUlFd3hPRFl1TVRJMU9EYzJMREUyTUM0M01UWTVNaUJNTVRnMkxqRXlOVGczTml3eE5qQXVOekUyT1RJZ1dpQk5PVEl1TWpjMk5qTTNPU3d5TURNdU9EVTBNREkzSUVNNE5TNHpNVGt6T1RBMExESXdOaTR6TVRFd05qUWdOemt1TnpjNE1qZzNOU3d5TURZdU16Z3hORFE1SURjMkxqUXlPRGMyT1Rnc01qQTBMalExTURBNE5pQkROamt1TXpBeE16a3lMREl3TUM0ek16a3lNRFVnTmpZdU16TTRNemc0TVN3eE9EUXVORGN3T0RJMUlEY3dMak00TURBNU1URXNNVFl6TGpFNE5EZ3hOeUJETnpBdU9EUXpNREl5T0N3eE5qQXVOelEzTURnMUlEY3hMak01TkRBek5qSXNNVFU0TGpJME1qazVNaUEzTWk0d01qa3hNRGt5TERFMU5TNDJPRE16T1RRZ1F6Z3hMakk0TlRNeU9URXNNVFUzTGpjek1ERTROeUE1TVM0MU1qazNOVE16TERFMU9TNHlNRE13TkRFZ01UQXlMalEzT1RJek15d3hOakF1TURrd05qazJJRU14TURndU56TXhOREkxTERFMk9DNDRPRGd3TURjZ01URTFMakkzT0RReU9Td3hOell1T1RjME1qSTRJREV5TVM0NE56WXhNU3d4T0RRdU1EVTBOVFE0SUVNeE1qQXVORE0wTmpJM0xERTROUzQwTkRZeE5UZ2dNVEU0TGprNU9EYzNOQ3d4T0RZdU56Y3hNREEwSURFeE55NDFOekE1TmpZc01UZzRMakF4T1RRek1TQkRNVEE0TGpnd05ESXlNeXd4T1RVdU5qZ3lOVE01SURFd01DNHdNVGc1Tnprc01qQXhMakV4T1RRM01pQTVNaTR5TnpZMk16YzVMREl3TXk0NE5UUXdNamNnVERreUxqSTNOall6Tnprc01qQXpMamcxTkRBeU55Qk1PVEl1TWpjMk5qTTNPU3d5TURNdU9EVTBNREkzSUZvZ1RUVTVMalk0TWpjNU1ETXNNVFF5TGpJM05EQTJNU0JETkRndU5qWTBPVE0yTkN3eE16Z3VOVEE0TWpZM0lETTVMalUyTlRrM05qVXNNVE16TGpZeE16a3dNU0F6TXk0ek1qa3dOamd6TERFeU9DNHlOek13T1RRZ1F6STNMamN5TkRneU1ESXNNVEl6TGpRM016WTBOeUF5TkM0NE9UVXpORFkwTERFeE9DNDNNRGczT0RrZ01qUXVPRGsxTXpRMk5Dd3hNVFF1T0RReU5EUTBJRU15TkM0NE9UVXpORFkwTERFd05pNDJNVFEyTkRrZ016Y3VNVFl5TURJNU9TdzVOaTR4TWpBd05UWTFJRFUzTGpZeU1EY3hNek1zT0RndU9UZzNNRFEzT1NCRE5qQXVNVEF6TURnNE9DdzRPQzR4TWpFMU1UUTFJRFl5TGpjd01UWTVPVGtzT0RjdU16QTFPRFV6T1NBMk5TNHpPVGcwTkRjNExEZzJMalV6T1RZMk16Z2dRelk0TGpJeU5Ua3hNRFFzT1RVdU56TTNNVFl5TmlBM01TNDVNelE1T1RRMUxERXdOUzR6TlRNek5URWdOell1TkRFeE1EY3pNU3d4TVRVdU1EYzNNekk1SUVNM01TNDROemN3TnpjNExERXlOQzQ1TkRVMk9UWWdOamd1TVRFMU16QTFOaXd4TXpRdU56RTFNVEkwSURZMUxqSTJNREE1TVRFc01UUTBMakF5TURReE1TQkROak11TXpNM05UYzNOQ3d4TkRNdU5EWTNOemc1SURZeExqUTNORGs1TVRRc01UUXlMamc0TmpJd09TQTFPUzQyT0RJM09UQXpMREUwTWk0eU56UXdOakVnVERVNUxqWTRNamM1TURNc01UUXlMakkzTkRBMk1TQk1OVGt1TmpneU56a3dNeXd4TkRJdU1qYzBNRFl4SUZvZ1RUY3dMall3T0RVME1EVXNOamN1T1RBek16UTJOQ0JETmpZdU16WXlNVEUzT0N3ME5pNHlNREUwTmpReklEWTVMakU0TWpNME1Td3lPUzQ0TXpBek16UTNJRGMyTGpJM09URTFNVFlzTWpVdU56SXlNalk0TnlCRE9ETXVPRE00TkRreE9Dd3lNUzR6TkRVNU16VTJJREV3TUM0MU5UUXpNRFlzTWpjdU5UZzFOalU1SURFeE9DNHhOekl5TlRVc05ETXVNakk1TWpBNU55QkRNVEU1TGpJNU9EUXhNeXcwTkM0eU1qa3dOemM0SURFeU1DNDBNamc1T1RZc05EVXVNamMxTmpBd09TQXhNakV1TlRZeU56azNMRFEyTGpNMU9ETXlNakVnUXpFeE5DNDVPVGMyT1RRc05UTXVOREEzTmpjek1pQXhNRGd1TlRFd05qRTRMRFl4TGpRek16RTJNallnTVRBeUxqTXhNemt6TERjd0xqRTNPRFU0T1RFZ1F6a3hMalk0TnpBeE16TXNOekV1TVRZek5UYzFPQ0E0TVM0MU1UUTFPREk0TERjeUxqYzBOVGd5T0RnZ056SXVNVFl4T0RNMU1TdzNOQzQ0TmpRMk1UVTRJRU0zTVM0MU56TTRNVGt6TERjeUxqUTVPVEk0TURRZ056RXVNRFV5T1Rjd09TdzNNQzR4TnpVek56RTJJRGN3TGpZd09EVTBNRFVzTmpjdU9UQXpNelEyTkNCTU56QXVOakE0TlRRd05TdzJOeTQ1TURNek5EWTBJRXczTUM0Mk1EZzFOREExTERZM0xqa3dNek0wTmpRZ1dpQk5NVFk0TGpBM05UazJOU3c1TVM0NU56QTFOalFnUXpFMk5TNDROREF4TXprc09EZ3VNVEE0TmpRME1TQXhOak11TlRRME56ZzFMRGcwTGpNek9EQXlNelVnTVRZeExqSXdORGM0T1N3NE1DNDJOekF6TmpZeElFTXhOamd1TkRFME1qRTJMRGd4TGpVNE1UYzFNRElnTVRjMUxqTXlNVFU0T1N3NE1pNDNPVEUxTmpZMElERTRNUzQ0TURneU5qUXNPRFF1TWpjeU1EWXlPU0JETVRjNUxqZzJNRGd4TXl3NU1DNDFNVE16T1RVeElERTNOeTQwTXpNMU5DdzVOeTR3TXprd09ESTFJREUzTkM0MU56WXpNVFFzTVRBekxqY3lPRGcyTnlCRE1UY3lMalV5Tmpjd05pdzVPUzQ0TXpjMU9EWTRJREUzTUM0ek5UZzROU3c1TlM0NU1UUXhNekEwSURFMk9DNHdOelU1TmpVc09URXVPVGN3TlRZMElFd3hOamd1TURjMU9UWTFMRGt4TGprM01EVTJOQ0JNTVRZNExqQTNOVGsyTlN3NU1TNDVOekExTmpRZ1dpQk5NVEk0TGpNeU9EazVPU3cxTXk0eU5UWTRORGcwSUVNeE16SXVOemd4TXpRNExEVTRMakE0TURReU56UWdNVE0zTGpJME1ERXpNaXcyTXk0ME5qVTROemtnTVRReExqWXlOVGN4Tml3Mk9TNHpNRGt3TXpNM0lFTXhNemN1TWpBMk16UTNMRFk1TGpFd01ESTVNaklnTVRNeUxqY3pNakkzT1N3Mk9DNDVPVEUyT1RneklERXlPQzR5TWpFeU1TdzJPQzQ1T1RFMk9UZ3pJRU14TWpNdU56VXlOemN6TERZNExqazVNVFk1T0RNZ01URTVMak14TVRZNE5pdzJPUzR3T1RjNE56a2dNVEUwTGpreE9UWTJOeXcyT1M0ek1ETXdNREEzSUVNeE1Ua3VNekE1TmpjMUxEWXpMalV4TkRFME1qa2dNVEl6TGpnd056QTNMRFU0TGpFek5Ua3pNRGdnTVRJNExqTXlPRGs1T1N3MU15NHlOVFk0TkRnMElFd3hNamd1TXpJNE9UazVMRFV6TGpJMU5qZzBPRFFnVERFeU9DNHpNamc1T1Rrc05UTXVNalUyT0RRNE5DQmFJRTA0T0M0ek1qYzBOREEzTERreUxqQXpOek15T1RFZ1F6ZzJMakE1TkRBeU5qY3NPVFV1T1RFd01UQTROQ0E0TXk0NU5qWXpPVEV5TERrNUxqZ3hNakkwT0RNZ09ERXVPVFE0T1RVNE5Dd3hNRE11TnpJeE5qSTRJRU0zT1M0eE16YzVPRFU0TERrM0xqQTFOVEUzTURVZ056WXVOek16TWpNME9TdzVNQzQwT1RrM01qQXpJRGMwTGpjMk9EZzVNalFzT0RRdU1UWTVPVEEwTVNCRE9ERXVNakUxTnpRNE5pdzRNaTQzTWpjeU1UUTBJRGc0TGpBNU1EVTBOVElzT0RFdU5UUTNOVFl6TXlBNU5TNHlOVFF4TWpFc09EQXVOalV6TkRjek55QkRPVEl1T0RneE1UUXpPQ3c0TkM0ek5UUTVNVFU1SURrd0xqVTJOamc0TnpZc09EZ3VNVFV6TWpnNE15QTRPQzR6TWpjME5EQTNMRGt5TGpBek5qVXlORGNnVERnNExqTXlOelEwTURjc09USXVNRE0zTXpJNU1TQk1PRGd1TXpJM05EUXdOeXc1TWk0d016Y3pNamt4SUZvZ1RUazFMalEyTURRME9UTXNNVFE1TGpjeE9UazRNU0JET0RndU1EVTVNVGN6Tml3eE5EZ3VPRGswTWpZMUlEZ3hMakE0TVRBeE1UZ3NNVFEzTGpjM05UTTBOeUEzTkM0Mk16VTNOalF6TERFME5pNHpOekkwTnpRZ1F6YzJMall6TVRRM09EUXNNVE01TGpreU9UWTBJRGM1TGpBNE9UTXhPVGNzTVRNekxqSXpOREl5TlNBNE1TNDVOVGs0TVRjM0xERXlOaTQwTWpReE9ESWdRemd6TGprNE1qUTNPVElzTVRNd0xqTXpNRGMwTmlBNE5pNHhNVGcxTmpBNUxERXpOQzR5TXpRME9UVWdPRGd1TXpZMU5qUTVOeXd4TXpndU1URTFOekl4SUV3NE9DNHpOall3TlRFNExERXpPQzR4TVRVM01qRWdRemt3TGpZMU5EazJPVFFzTVRReUxqQTJPVGMwTkNBNU15NHdNall6TXpjNExERTBOUzQ1TkRJNU1qVWdPVFV1TkRZd05EUTVNeXd4TkRrdU56RTVPVGd4SUV3NU5TNDBOakEwTkRrekxERTBPUzQzTVRrNU9ERWdURGsxTGpRMk1EUTBPVE1zTVRRNUxqY3hPVGs0TVNCYUlFMHhNamd1TlRrMk1EWXNNVGMzTGpFd09EVTJNaUJETVRJMExqQXlNVEEwTERFM01pNHhOekl6TmpjZ01URTVMalExTnpZNE5Dd3hOall1TnpFeU1UQTNJREV4TlM0d01EQTVNVEVzTVRZd0xqZ3pPRGM0TnlCRE1URTVMak15TnpNM01Td3hOakV1TURBNE5URTFJREV5TXk0M016Z3lPVE1zTVRZeExqQTVOVE01TVNBeE1qZ3VNakl4TWpFc01UWXhMakE1TlRNNU1TQkRNVE15TGpneU5qYzVOeXd4TmpFdU1EazFNemt4SURFek55NHpOemsyT1RVc01UWXdMams1TVRZeU15QXhOREV1T0RZeE1EQXpMREUyTUM0M09USXhNeklnUXpFek55NDBOakE1TXprc01UWTJMamMzTVRJek1TQXhNek11TURFNE1qUTBMREUzTWk0eU16azVNemNnTVRJNExqVTVOakEyTERFM055NHhNRGcxTmpJZ1RERXlPQzQxT1RZd05pd3hOemN1TVRBNE5UWXlJRXd4TWpndU5UazJNRFlzTVRjM0xqRXdPRFUyTWlCYUlFMHhOelF1TmpZNE5ERTRMREV5Tmk0d056Y3dPRFFnUXpFM055NDJPRGcxTXpRc01UTXlMamsyTURjeU9TQXhPREF1TWpNME5EVTNMREV6T1M0Mk1qRXhOVE1nTVRneUxqSTFOVGt4TWl3eE5EVXVPVFUwTVRnM0lFTXhOelV1TnpBME5EZzBMREUwTnk0ME5EZzNOaUF4TmpndU5qTXhNREF4TERFME9DNDJOVEkxTkRRZ01UWXhMakUzT0RJME5Dd3hORGt1TlRRM01ETTJJRU14TmpNdU5USXpPRGN5TERFME5TNDRNams1TURjZ01UWTFMamd6T1RNek5Dd3hOREV1T1RrME5UTXlJREUyT0M0eE1UUTFOellzTVRNNExqQTBPVE0xTnlCRE1UY3dMalF4TmpNMk5Td3hNelF1TURVM09UTWdNVGN5TGpZd01Ua3hOeXd4TXpBdU1EWXdORFk1SURFM05DNDJOamcwTVRnc01USTJMakEzTnpBNE5DQk1NVGMwTGpZMk9EUXhPQ3d4TWpZdU1EYzNNRGcwSUV3eE56UXVOalk0TkRFNExERXlOaTR3Tnpjd09EUWdXaUJOTVRVNUxqYzFNekkxTERFek15NHlNalk1T0RVZ1F6RTFOaTR5TWpFeE16UXNNVE01TGpNMU1USTNOeUF4TlRJdU5UazBPVEF6TERFME5TNHhPVGMyTkRrZ01UUTRMamt4TXpVM01Td3hOVEF1TnpFMk1qTWdRekUwTWk0eU1EZzFNRElzTVRVeExqRTVOVFkxTVNBeE16VXVNamd4TkRJc01UVXhMalEwTWpZd01pQXhNamd1TWpJeE1qRXNNVFV4TGpRME1qWXdNaUJETVRJeExqRTRPVFUxTml3eE5URXVORFF5TmpBeUlERXhOQzR6TkRrM05Td3hOVEV1TWpJME1qQTNJREV3Tnk0M05qTXpNekVzTVRVd0xqYzVOalkyT1NCRE1UQXpMamt6TXpVNE55d3hORFV1TWpBMU5qazBJREV3TUM0eU1qZzFNalVzTVRNNUxqTTBNakF5TnlBNU5pNDNNVGc1TXpFM0xERXpNeTR5TnprMk56TWdURGsyTGpjeE9UY3pOakVzTVRNekxqSTNPVFkzTXlCRE9UTXVNakU1TXprek5Td3hNamN1TWpNek9ERWdPRGt1T1RrM056YzFOQ3d4TWpFdU1UTTJPRFkzSURnM0xqQTNPRFl4TVRJc01URTFMakEzTkRFeE1pQkRPRGt1T1RrMk9UY3dPU3d4TURndU9UazNNamM1SURrekxqSXhNREUwTWprc01UQXlMamc1TXpRNU9TQTVOaTQyT1RBek56VTFMRGsyTGpnMU9EUTVORGtnVERrMkxqWTRPVFUzTVRFc09UWXVPRFU1TnpBeE5TQkRNVEF3TGpFM09UQTFOQ3c1TUM0NE1EZzJNRGsySURFd015NDROVEUxTXpnc09EUXVPVGN6TkRrNE9DQXhNRGN1TmpRMU9EZzRMRGM1TGpReE56VXhORFVnUXpFeE5DNHpOalU0TXpnc056Z3VPVEE1TlRNMk5pQXhNakV1TWpVMk56SXpMRGM0TGpZME5EUTROekVnTVRJNExqSXlNRGd3T0N3M09DNDJORFEwT0RjeElFd3hNamd1TWpJeE1qRXNOemd1TmpRME5EZzNNU0JETVRNMUxqSXhOalkyTml3M09DNDJORFEwT0RjeElERTBNaTR4TVRZek9Ua3NOemd1T1RFeE5UUTNOU0F4TkRndU9ETTBNek0zTERjNUxqUXlNemswT1RnZ1F6RTFNaTQxTnpBM056RXNPRFF1T1RNNU16RXhPU0F4TlRZdU1qRTRNekU1TERrd0xqYzFOVFV4T1RJZ01UVTVMamN5TVRRM055dzVOaTQ0TURjME1UVTJJRU14TmpNdU1qWTBORFV6TERFd01pNDVNamN5T0RRZ01UWTJMalV4T1RBMU1Td3hNRGd1T1Rrd05EUXhJREUyT1M0ME5qSXpORGNzTVRFMExqa3pOamsyTWlCRE1UWTJMalV5Tnprc01USXdMams0TlRZMElERTJNeTR5T0RBMU5ERXNNVEkzTGpFd09Ua3pNeUF4TlRrdU56VXpNalVzTVRNekxqSXlOams0TlNCTU1UVTVMamMxTXpJMUxERXpNeTR5TWpZNU9EVWdUREUxT1M0M05UTXlOU3d4TXpNdU1qSTJPVGcxSUZvZ1RURTNPUzQyTmpVM05EY3NNalV1TkRNMU1EazRNaUJETVRnM0xqSXpNak15Tnl3eU9TNDNPVGcxTmpBNUlERTVNQzR4TnpRNE1UZ3NORGN1TXprMk16azVNU0F4T0RVdU5ESXdPRElzTnpBdU5EY3lOVGszSUVNeE9EVXVNVEUzTlRZeExEY3hMamswTlRBME9UVWdNVGcwTGpjM05qQTVOU3czTXk0ME5EUTROVEUxSURFNE5DNDBNRFV5TmpZc056UXVPVFkwTnpZek5TQkRNVGMxTGpBek1EYzVPU3czTWk0NE1ERTNNelExSURFMk5DNDROVEV4TWprc056RXVNVGt5TVRNeUlERTFOQzR4T1RNeU5EVXNOekF1TVRreU1qWXpPU0JETVRRM0xqazRORFE1TERZeExqTTFNRGN4TVRjZ01UUXhMalUxTURVd05DdzFNeTR6TVRJM05UUXhJREV6TlM0d09USXpPRFlzTkRZdU16VXpPRGszT0NCRE1UTTJMamd5T0RZNE1pdzBOQzQyT0RNMU5qTXpJREV6T0M0MU5qSTFOalFzTkRNdU1Ea3dPRFV6TVNBeE5EQXVNamc1TWpBMkxEUXhMalU0Tnpnek16VWdRekUxTmk0NU56QTRNelFzTWpjdU1EY3dORFF4TlNBeE56SXVOVFl5TURrNUxESXhMak16T0RZNU5pQXhOemt1TmpZMU56UTNMREkxTGpRek5UQTVPRElnVERFM09TNDJOalUzTkRjc01qVXVORE0xTURrNE1pQk1NVGM1TGpZMk5UYzBOeXd5TlM0ME16VXdPVGd5SUZvaUlHWnBiR3c5SWlOR1JrWkdSa1lpUGp3dmNHRjBhRDRLSUNBZ0lEeHdZWFJvSUdROUlrMHhNamd1TWpJeE1qRXNPVFF1TmpZMU16QXdPQ0JETVRNNUxqTTJORFUxTERrMExqWTJOVE13TURnZ01UUTRMak01T0RNMU15d3hNRE11TmprNE56QXlJREUwT0M0ek9UZ3pOVE1zTVRFMExqZzBNalEwTkNCRE1UUTRMak01T0RNMU15d3hNalV1T1RnMU56ZzBJREV6T1M0ek5qUTFOU3d4TXpVdU1ERTVOVGc1SURFeU9DNHlNakV5TVN3eE16VXVNREU1TlRnNUlFTXhNVGN1TURjM09EY3NNVE0xTGpBeE9UVTRPU0F4TURndU1EUTBNRFkyTERFeU5TNDVPRFUzT0RRZ01UQTRMakEwTkRBMk5pd3hNVFF1T0RReU5EUTBJRU14TURndU1EUTBNRFkyTERFd015NDJPVGczTURJZ01URTNMakEzTnpnM0xEazBMalkyTlRNd01EZ2dNVEk0TGpJeU1USXhMRGswTGpZMk5UTXdNRGdpSUdacGJHdzlJaU0xTTBNeFJFVWlQand2Y0dGMGFENEtQQzl6ZG1jK0NnPT1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL3JlYWN0LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l5T1Rad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXlPVFlpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4WkdWbWN6NEtJQ0FnSUNBZ0lDQThjbUZrYVdGc1IzSmhaR2xsYm5RZ1kzZzlJalV3SlNJZ1kzazlJalV3SlNJZ1puZzlJalV3SlNJZ1puazlJalV3SlNJZ2NqMGlOVEFsSWlCcFpEMGljbUZrYVdGc1IzSmhaR2xsYm5RdE1TSStDaUFnSUNBZ0lDQWdJQ0FnSUR4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNNU0wSTBSVGNpSUc5bVpuTmxkRDBpTUNVaVBqd3ZjM1J2Y0Q0S0lDQWdJQ0FnSUNBZ0lDQWdQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJMEk1UkRGR09DSWdiMlptYzJWMFBTSTFPUzR5TnpNek5UYzRKU0krUEM5emRHOXdQZ29nSUNBZ0lDQWdJQ0FnSUNBOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak9VTkNOa1V3SWlCdlptWnpaWFE5SWpFd01DVWlQand2YzNSdmNENEtJQ0FnSUNBZ0lDQThMM0poWkdsaGJFZHlZV1JwWlc1MFBnb2dJQ0FnUEM5a1pXWnpQZ29nSUNBZ1BHYytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEV5T0M0d016SXpORElzTUM0ME5UVTFNVFl3TVRRZ1REQXVNamszT1RBM05EY3pMRGMwTGpJd016RXdNeklnVERBdU1qazNPVEEzTkRjekxESXlNUzQyT1RneU56Z2dUREV5T0M0d016SXpORElzTWprMUxqUTBOak15SUV3eU5UVXVOelkzTWpNeExESXlNUzQyT1RneU56Z2dUREkxTlM0M05qY3lNekVzTnpRdU1qQXpNVEF6TWlCTU1USTRMakF6TWpNME1pd3dMalExTlRVeE5qQXhOQ0JhSWlCbWFXeHNQU0oxY213b0kzSmhaR2xoYkVkeVlXUnBaVzUwTFRFcElqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXlPQzR3TXpNM01EZ3NOelV1TWpZeU5qTXpOU0JNTmpRdU5qa3dNVEEyT0N3eE1URXVPRE0wTVRreUlFdzJOQzQyT1RBeE1EWTRMREU0TkM0NU56YzNOalVnVERFeU9DNHdNek0zTURnc01qSXhMalUwT1RjM09TQk1NVGt4TGpNM09ESXlNU3d4T0RRdU9UYzNOelkxSUV3eE9URXVNemM0TWpJeExERXhNUzQ0TXpReE9USWdUREV5T0M0d016TTNNRGdzTnpVdU1qWXlOak16TlNCYUlpQm1hV3hzUFNJak5rWTVOVVJDSWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEdjZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWm1sc2JDMXZjR0ZqYVhSNVBTSXdMakVpUGdvZ0lDQWdJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVEk0TERBZ1REQXNOelF1TWpRNU1URXdNeUJNTVRJNExERTBNeTQ1TkRNd05pQk1NalUyTERjMExqY3dORFl5TmpNZ1RERXlPQ3d3SUZvaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBZ0lDQWdQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01DNHdNREF3TURBc0lERTFNeTQxTURnNE9UY3BJaUJtYVd4c1BTSWpSa1pHUmtaR0lpQm1hV3hzTFc5d1lXTnBkSGs5SWpBdU1TSStDaUFnSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qZ3NNQ0JNTUN3Mk55NDROekU0T0RZeElFd3hNamdzTVRReExqWTJOVFE0SUV3eU5UVXVOVFEwTkRnMExEWTNMalF4TmpNM01ERWdUREV5T0N3d0lGb2lQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThMMmMrQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZ289XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy93ZWJwYWNrLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjRmNGY0OyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuXFxuaGVhZGVyIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTsgfVxcblxcbmxpIGEge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM4ODg7IH1cXG5cXG5pbWcge1xcbiAgbWFyZ2luOiAwIDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG4vLyBcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Gb290ZXIuc2NzcycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9naGJ0bnMuY29tL2dpdGh1Yi1idG4uaHRtbD91c2VyPWRhcnVsNzUmcmVwbz13ZWItcmVhY3QmdHlwZT1zdGFyJmNvdW50PXRydWUmdj0yJyBmcmFtZUJvcmRlcj0nMCcgc2Nyb2xsaW5nPScwJyB3aWR0aD0nMTcwcHgnIGhlaWdodD0nMjBweCc+PC9pZnJhbWU+XHJcbiAgICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9naGJ0bnMuY29tL2dpdGh1Yi1idG4uaHRtbD91c2VyPWRhcnVsNzUmcmVwbz13ZWItcmVhY3QmdHlwZT1mb3JrJmNvdW50PXRydWUmdj0yJyBmcmFtZUJvcmRlcj0nMCcgc2Nyb2xsaW5nPScwJyB3aWR0aD0nMTcwcHgnIGhlaWdodD0nMjBweCc+PC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkZvb3Rlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnRm9vdGVyJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fRm9vdGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNGY0ZjQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogNzUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250OiAxMDAlIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXFxuaDEsIGgyLCBoMyB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcblxcbmRpdi5tYWluLWNvbnRlbnQge1xcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4OyB9XFxuXFxuLyogaHR0cDovL2Nzc2RlY2suY29tL2xhYnMvYmVhdXRpZnVsLWZsYXQtYnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0JGQ0FEMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4ICMyYThiY2M7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9pbmRlbnRlZFN5bnRheCEuL19BcHAuc2Fzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP2luZGVudGVkU3ludGF4IS4vX0FwcC5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9pbmRlbnRlZFN5bnRheCEuL19BcHAuc2Fzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zYXNzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaDEge1xcbiAgY29sb3I6ICM1YTg4OTQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyP2luZGVudGVkU3ludGF4IS4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Fzc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29uLmljb1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmlsZS1sb2FkZXI/bmFtZT1mYXZpY29uLmljbyEuL2FwcC9pbWFnZXMvZmF2aWNvbi5pY29cbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG4vLyBUT0RPOiBkbyBpdCBpbiBzdG9yZSBtYXliZVxyXG5jb25zdCBtZXRhcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jb25maWcuanNvbicpLmhlbG1ldDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkNPTlRBQ1QgUEFHRTwvaDE+XHJcbiAgICAgICAgPEhlbG1ldCB0aXRsZT17bWV0YXMudGl0bGV9IHRpdGxlVGVtcGxhdGU9JyVzIHwgQ29udGFjdCBwYWdlJyAvPlxyXG4gICAgICAgIDxwPnRlc3QgdGhlIDQwNCBwYWdlIDxhIGhyZWY9Jy9taWRkbGVvZm5vd2hlcmUnPmhlcmU8L2E+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xyXG5pbXBvcnQgQXBwU3RvcmVEZXBlbmRpbmcgZnJvbSAnLi4vLi4vc3RvcmVzL0FwcFN0b3JlRGVwZW5kaW5nJztcclxuaW1wb3J0IEhvbWVTZWN0aW9uQWN0aW9ucyBmcm9tICcuL0hvbWVTZWN0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBjb25uZWN0VG9TdG9yZXMgZnJvbSAnYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcyc7XHJcblxyXG4vLyBDT01QT05FTlRcclxuaW1wb3J0IEhvbWVTZWN0aW9uU3ViUGFydE9uZSBmcm9tICcuL0hvbWVTZWN0aW9uU3ViUGFydE9uZSc7XHJcbmltcG9ydCBIb21lU2VjdGlvblN1YlBhcnRUd28gZnJvbSAnLi9Ib21lU2VjdGlvblN1YlBhcnRUd28nO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Ib21lU2VjdGlvbi5zY3NzJyk7XHJcbn1cclxuXHJcbmxldCBob21lU2VjdGlvbiA9IGNsYXNzIEhvbWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyByZXRyaWV2ZSBkYXRhIGZyb20gc3RvcmVcclxuICAgIGxldCBzdG9yZVByb3BzID0gSG9tZVNlY3Rpb24uZ2V0UHJvcHNGcm9tU3RvcmVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+SE9NRSBQQUdFPC9oMT5cclxuICAgICAgICA8SG9tZVNlY3Rpb25BY3Rpb25zIC8+XHJcbiAgICAgICAgPEhvbWVTZWN0aW9uU3ViUGFydE9uZSBhcGlEYXRhPXtzdG9yZVByb3BzLmFwaURhdGF9IC8+XHJcbiAgICAgICAgPEhvbWVTZWN0aW9uU3ViUGFydFR3byBhcGlEYXRhPXtzdG9yZVByb3BzLmFwaURhdGF9Lz5cclxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGFwaURhdGE9e3N0b3JlUHJvcHMuYXBpRGF0YURlcGVuZGluZ30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIFtBcHBTdG9yZSwgQXBwU3RvcmVEZXBlbmRpbmddO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFwaURhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZGF0YUJ5UmVzdEFwaSxcclxuICAgICAgYXBpRGF0YURlcGVuZGluZzogQXBwU3RvcmVEZXBlbmRpbmcuZ2V0U3RhdGUoKS5kYXRhQnlSZXN0QXBpXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmhvbWVTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXMoaG9tZVNlY3Rpb24pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbi5qc1xuICoqLyIsIi8qKlxuICogJ0hpZ2hlciBPcmRlciBDb21wb25lbnQnIHRoYXQgY29udHJvbHMgdGhlIHByb3BzIG9mIGEgd3JhcHBlZFxuICogY29tcG9uZW50IHZpYSBzdG9yZXMuXG4gKlxuICogRXhwZWN0cyB0aGUgQ29tcG9uZW50IHRvIGhhdmUgdHdvIHN0YXRpYyBtZXRob2RzOlxuICogICAtIGdldFN0b3JlcygpOiBTaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mIHN0b3Jlcy5cbiAqICAgLSBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpOiBTaG91bGQgcmV0dXJuIHRoZSBwcm9wcyBmcm9tIHRoZSBzdG9yZXMuXG4gKlxuICogRXhhbXBsZSB1c2luZyBvbGQgUmVhY3QuY3JlYXRlQ2xhc3MoKSBzdHlsZTpcbiAqXG4gKiAgICBjb25zdCBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICAgc3RhdGljczoge1xuICogICAgICAgIGdldFN0b3Jlcyhwcm9wcykge1xuICogICAgICAgICAgcmV0dXJuIFtteVN0b3JlXVxuICogICAgICAgIH0sXG4gKiAgICAgICAgZ2V0UHJvcHNGcm9tU3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgICByZXR1cm4gbXlTdG9yZS5nZXRTdGF0ZSgpXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgLy8gVXNlIHRoaXMucHJvcHMgbGlrZSBub3JtYWwgLi4uXG4gKiAgICAgIH1cbiAqICAgIH0pXG4gKiAgICBNeUNvbXBvbmVudCA9IGNvbm5lY3RUb1N0b3JlcyhNeUNvbXBvbmVudClcbiAqXG4gKlxuICogRXhhbXBsZSB1c2luZyBFUzYgQ2xhc3M6XG4gKlxuICogICAgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICogICAgICBzdGF0aWMgZ2V0U3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgcmV0dXJuIFtteVN0b3JlXVxuICogICAgICB9XG4gKiAgICAgIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICByZXR1cm4gbXlTdG9yZS5nZXRTdGF0ZSgpXG4gKiAgICAgIH1cbiAqICAgICAgcmVuZGVyKCkge1xuICogICAgICAgIC8vIFVzZSB0aGlzLnByb3BzIGxpa2Ugbm9ybWFsIC4uLlxuICogICAgICB9XG4gKiAgICB9XG4gKiAgICBNeUNvbXBvbmVudCA9IGNvbm5lY3RUb1N0b3JlcyhNeUNvbXBvbmVudClcbiAqXG4gKiBBIGdyZWF0IGV4cGxhbmF0aW9uIG9mIHRoZSBtZXJpdHMgb2YgaGlnaGVyIG9yZGVyIGNvbXBvbmVudHMgY2FuIGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vYml0Lmx5LzFhYlBrclBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9mdW5jdGlvbnMgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBjb25uZWN0VG9TdG9yZXMoQ29tcG9uZW50KSB7XG4gIC8vIENoZWNrIGZvciByZXF1aXJlZCBzdGF0aWMgbWV0aG9kcy5cbiAgaWYgKCEoMCwgX2Z1bmN0aW9ucy5pc0Z1bmN0aW9uKShDb21wb25lbnQuZ2V0U3RvcmVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdFRvU3RvcmVzKCkgZXhwZWN0cyB0aGUgd3JhcHBlZCBjb21wb25lbnQgdG8gaGF2ZSBhIHN0YXRpYyBnZXRTdG9yZXMoKSBtZXRob2QnKTtcbiAgfVxuICBpZiAoISgwLCBfZnVuY3Rpb25zLmlzRnVuY3Rpb24pKENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0VG9TdG9yZXMoKSBleHBlY3RzIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB0byBoYXZlIGEgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIG1ldGhvZCcpO1xuICB9XG5cbiAgLy8gV3JhcHBlciBDb21wb25lbnQuXG4gIHZhciBTdG9yZUNvbm5lY3Rpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnU3RvcmVDb25uZWN0aW9uJyxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHN0b3JlcyA9IENvbXBvbmVudC5nZXRTdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICBzdG9yZS5saXN0ZW4oX3RoaXMub25DaGFuZ2UpO1xuICAgICAgfSk7XG4gICAgICBpZiAoQ29tcG9uZW50LmNvbXBvbmVudERpZENvbm5lY3QpIHtcbiAgICAgICAgQ29tcG9uZW50LmNvbXBvbmVudERpZENvbm5lY3QodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzdG9yZXMgPSBDb21wb25lbnQuZ2V0U3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICBzdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgc3RvcmUudW5saXN0ZW4oX3RoaXMyLm9uQ2hhbmdlKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9mdW5jdGlvbnMuYXNzaWduKSh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFN0b3JlQ29ubmVjdGlvbjtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29ubmVjdFRvU3RvcmVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lYWNoT2JqZWN0ID0gZWFjaE9iamVjdDtcbmV4cG9ydHMuYXNzaWduID0gYXNzaWduO1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufTtcblxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gZWFjaE9iamVjdChmLCBvKSB7XG4gIG8uZm9yRWFjaChmdW5jdGlvbiAoZnJvbSkge1xuICAgIE9iamVjdC5rZXlzKE9iamVjdChmcm9tKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmKGtleSwgZnJvbVtrZXldKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNvdXJjZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzb3VyY2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZWFjaE9iamVjdChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICB9LCBzb3VyY2UpO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9mdW5jdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgbWVyZ2UgZnJvbSAnb2JqZWN0LWFzc2lnbic7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XHJcblxyXG4vLyBERVBFTkRFTkNZXHJcbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuLy8gd2VicGFjayBob3QgcmVsb2FkXHJcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcclxuXHJcbmxldCBhcHBTdG9yZSA9IG1ha2VIb3QoYWx0LCBjbGFzcyBBcHBTdG9yZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJpbmRBY3Rpb25zKEFwcEFjdGlvbnMpO1xyXG4gICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge307XHJcbiAgICB0aGlzLmRhdGEgPSB7fTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShpZCwgdXBkYXRlcykge1xyXG4gICAgaWYodGhpcy5kYXRhW2lkXSAmJiB1cGRhdGVzKXtcclxuICAgICAgdGhpcy5kYXRhW2lkXSA9IG1lcmdlKHRoaXMuZGF0YVtpZF0sIHVwZGF0ZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWxsKHVwZGF0ZXMpIHtcclxuICAgIGZvciAodmFyIGlkIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZShpZCwgdXBkYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZSh0ZXh0KSB7XHJcbiAgICB0ZXh0ID0gdGV4dC50cmltKCk7XHJcbiAgICBpZiAodGV4dCA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gaGFuZCB3YXZpbmcgb2YgY291cnNlLlxyXG4gICAgdmFyIGlkID0gKCtuZXcgRGF0ZSgpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSkudG9TdHJpbmcoMzYpO1xyXG4gICAgdGhpcy5kYXRhW2lkXSA9IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgICAgIHRleHQ6IHRleHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkZldGNoKCkge1xyXG4gICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge2RhdGE6ICdoZWxsbyd9O1xyXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YUJ5UmVzdEFwaSA9IHtkYXRhOiBqc29ufTtcclxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uVXBkYXRlVGV4dCh4KSB7XHJcbiAgICBsZXQgeyBpZCwgdGV4dCB9ID0geDtcclxuICAgIHRleHQgPSB0ZXh0ID8gdGV4dC50cmltKCkgOiAnJztcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyB0ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVDb21wbGV0ZShpZCkge1xyXG4gICAgbGV0IGNvbXBsZXRlID0gIXRoaXMuZGF0YVtpZF0uY29tcGxldGU7XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyBjb21wbGV0ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlQ29tcGxldGVBbGwoKSB7XHJcbiAgICAvKnZhciBjb21wbGV0ZSA9ICF0b2RvU3RvcmUuYXJlQWxsQ29tcGxldGUoKTtcclxuICAgIHRoaXMudXBkYXRlQWxsKHsgY29tcGxldGUgfSk7Ki9cclxuICB9XHJcblxyXG4gIG9uRGVzdHJveShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMuZGF0YVtpZF07XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3lDb21wbGV0ZWQoKSB7XHJcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YVtpZF0uY29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveShpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhcmVBbGxDb21wbGV0ZSgpIHtcclxuICAgIGxldCB7IGRhdGEgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcclxuICAgICAgaWYgKCFkYXRhW2lkXS5jb21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59LCAnQXBwU3RvcmUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBwU3RvcmU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvQXBwU3RvcmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCJcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5cclxuY2xhc3MgQXBwQWN0aW9ucyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcclxuICAgICAgJ2NyZWF0ZScsXHJcbiAgICAgICdkZXN0cm95JyxcclxuICAgICAgJ3RvZ2dsZUNvbXBsZXRlJyxcclxuICAgICAgJ2ZldGNoJ1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoQXBwQWN0aW9ucyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBBbHQgZnJvbSAnYWx0JztcclxuXHJcbi8vIGNyZWF0ZSBhbHQgaW5zdGFuY2VcclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsdCgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvYWx0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbHRcIlxuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIG1ha2VIb3QoYWx0LCBTdG9yZSkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gU3RvcmUuZGlzcGxheU5hbWUgOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgYWx0LnN0b3Jlc1tuYW1lXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhbHQuY3JlYXRlU3RvcmUoU3RvcmUsIG5hbWUpO1xuICB9KSgpO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1ha2VIb3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9tYWtlSG90LmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbi8vIERFUEVOREVOQ1lcclxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi9BcHBTdG9yZSc7XHJcbi8vIHdlYnBhY2sgaG90IHJlbG9hZFxyXG5pbXBvcnQgbWFrZUhvdCBmcm9tICdhbHQvdXRpbHMvbWFrZUhvdCc7XHJcblxyXG5sZXQgZGVwZW5kaW5nU3RvcmUgPSBtYWtlSG90KGFsdCwgY2xhc3MgRGVwZW5kaW5nU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBcHBBY3Rpb25zKTtcclxuICAgIHRoaXMuZGF0YUJ5UmVzdEFwaSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgb25GZXRjaCgpIHtcclxuICAgIHRoaXMud2FpdEZvcihbQXBwU3RvcmUuZGlzcGF0Y2hUb2tlbl0pOyAvLyBldmVudCBoYXMgdG8gYmUgY29uc3VtZWRcclxuICAgIHRoaXMuZGF0YUJ5UmVzdEFwaSA9IHtkYXRhOiAnaGVyZSBpcyBkZXBlbmRlbmN5IHN0b3JlJ307XHJcbiAgfVxyXG59LCAnRGVwZW5kaW5nU3RvcmUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVwZW5kaW5nU3RvcmU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvQXBwU3RvcmVEZXBlbmRpbmcuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvbkFjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXNlY3Rpb24tYWN0aW9ucyc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PkZBS0UgQVBJIENBTEw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2soKSB7XHJcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lU2VjdGlvbkFjdGlvbnMucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uQWN0aW9ucyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uQWN0aW9ucy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVTZWN0aW9uU3ViUGFydE9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBhcGlEYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgY29udGVudE1hcmt1cCA9ICdkaXNwYXRjaGluZyB6b25lIDEnO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhKSB7XHJcbiAgICAgIGNvbnRlbnRNYXJrdXAgPSBtYXJrZWQoJ2BgYGpzb25cXG4nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5hcGlEYXRhLmRhdGEsIG51bGwsIDIpICsgJ2BgYCcsIHticmVha3M6IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LW9uZScgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnRNYXJrdXB9fT48L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DbGljaygpIHtcclxuICAgIEFwcEFjdGlvbnMuZmV0Y2goKTtcclxuICB9XHJcbn1cclxuXHJcbkhvbWVTZWN0aW9uU3ViUGFydE9uZS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSG9tZVNlY3Rpb25TdWJQYXJ0T25lJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25TdWJQYXJ0T25lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtYXJrZWRcIlxuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvblN1YlBhcnRUd28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcclxuICAgICAgYXBpRGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGNvbnRlbnRNYXJrdXAgPSAnZGlzcGF0Y2hpbmcgem9uZSAyJztcclxuICAgIGlmICh0aGlzLnByb3BzLmFwaURhdGEuZGF0YSkge1xyXG4gICAgICBjb250ZW50TWFya3VwID0gbWFya2VkKCdgYGBqc29uXFxuJyArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhLCBudWxsLCAyKSArICdgYGAnLCB7YnJlYWtzOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtc2VjdGlvbi1zdWItcGFydC10d28nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50TWFya3VwfX0+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2soKSB7XHJcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lU2VjdGlvblN1YlBhcnRUd28ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uU3ViUGFydFR3byc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hvbWVTZWN0aW9uLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhvbWUtc2VjdGlvbi1hY3Rpb25zIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2REY2RkY7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LmhvbWUtc2VjdGlvbi1zdWItcGFydC1vbmUge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5kaXYuaG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LXR3byB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhFRTdGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5QQUdFIE5PVCBGT1VORDwvaDE+XHJcbiAgICAgICAgPHA+eWVzIGluZGVlZDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTm90Rm91bmRTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdOb3RGb3VuZFNlY3Rpb24nO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ob3RGb3VuZFNlY3Rpb24vTm90Rm91bmRTZWN0aW9uLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtJztcclxuaW1wb3J0IFRvZG9UZXh0SW5wdXQgZnJvbSAnLi9Ub2RvVGV4dElucHV0JztcclxuaW1wb3J0IFRvZG9TbmFwc2hvdHMgZnJvbSAnLi9Ub2RvU25hcHNob3RzJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XHJcbmltcG9ydCBTbmFwc2hvdFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9TbmFwc2hvdFN0b3JlJztcclxuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcclxuXHJcbmxldCB0b2RvU2VjdGlvbiA9IGNsYXNzIFRvZG9TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyByZXRyaWV2ZSBkYXRhIGZyb20gc3RvcmVcclxuICAgIGxldCBzdG9yZVByb3BzID0gVG9kb1NlY3Rpb24uZ2V0UHJvcHNGcm9tU3RvcmVzKCk7XHJcbiAgICAvLyBidWlsZCB3aXRoIGN1cnJlbnQgZGF0YVxyXG4gICAgbGV0IGFsbFRvZG9zID0gc3RvcmVQcm9wcy5hbGxEYXRhLFxyXG4gICAgICAgIHRvZG9zID0gW107XHJcbiAgICAvLyBnZW5lcmF0ZSB0b2RvIGl0ZW0gbGlzdFxyXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFRvZG9zKSB7XHJcbiAgICAgIHRvZG9zLnB1c2goPFRvZG9JdGVtIGtleT17a2V5fSB0b2RvPXthbGxUb2Rvc1trZXldfSAvPik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+VE9ETyBQQUdFPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kbyc+XHJcbiAgICAgICAgICA8cD5GaXJzdCBhZGQgc29tZSB0YXNrcyBieSBwcmVzc2luZyBlbnRlciBrZXk8L3A+XHJcbiAgICAgICAgICA8VG9kb1RleHRJbnB1dCBjbGFzc05hbWU9J2VkaXQnIGlkPSduZXctdG9kbycgcGxhY2Vob2xkZXI9J1doYXQgbmVlZHMgdG8gYmUgZG9uZSA/JyBvblNhdmU9e3RoaXMuX29uU2F2ZS5iaW5kKHRoaXMpfSB2YWx1ZT0nJyAvPlxyXG4gICAgICAgICAgPHVsIGlkPSd0b2RvLWxpc3QnPnt0b2Rvc308L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxUb2RvU25hcHNob3RzIHNuYXBzaG90cz17c3RvcmVQcm9wcy5zbmFwc2hvdHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblNhdmUodGV4dCkge1xyXG4gICAgaWYgKHRleHQudHJpbSgpKXtcclxuICAgICAgQXBwQWN0aW9ucy5jcmVhdGUodGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIFtBcHBTdG9yZSwgU25hcHNob3RTdG9yZV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWxsRGF0YTogQXBwU3RvcmUuZ2V0U3RhdGUoKS5kYXRhLFxyXG4gICAgICBhcmVBbGxDb21wbGV0ZTogQXBwU3RvcmUuYXJlQWxsQ29tcGxldGUoKSxcclxuICAgICAgc25hcHNob3RzOiBTbmFwc2hvdFN0b3JlLmdldFN0YXRlKCkuc25hcHNob3RzXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbnRvZG9TZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXModG9kb1NlY3Rpb24pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbi5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fVG9kb0l0ZW0uc2NzcycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcclxuICAgICAgdG9kbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciB0b2RvID0gdGhpcy5wcm9wcy50b2RvO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9e2N4KHtcclxuICAgICAgICAgICdjb21wbGV0ZWQnOiB0b2RvLmNvbXBsZXRlLFxyXG4gICAgICAgICAgJ2VkaXRpbmcnOiB0aGlzLnN0YXRlLmlzRWRpdGluZ1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RvZG8uY29tcGxldGV9IG9uQ2hhbmdlPXt0aGlzLl9vblRvZ2dsZUNvbXBsZXRlLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgPGxhYmVsPnt0b2RvLnRleHR9PC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlc3Ryb3lcIiBvbkNsaWNrPXt0aGlzLl9vbkRlc3Ryb3lDbGljay5iaW5kKHRoaXMpfT4mIzEwMDA2OzwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblRvZ2dsZUNvbXBsZXRlKCkge1xyXG4gICAgQXBwQWN0aW9ucy50b2dnbGVDb21wbGV0ZSh0aGlzLnByb3BzLnRvZG8uaWQpO1xyXG4gIH1cclxuXHJcbiAgX29uRGVzdHJveUNsaWNrKCkge1xyXG4gICAgQXBwQWN0aW9ucy5kZXN0cm95KHRoaXMucHJvcHMudG9kby5pZCk7XHJcbiAgfVxyXG59XHJcblxyXG5Ub2RvSXRlbS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb0l0ZW0nO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvSXRlbS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ub2RvSXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9fVG9kb0l0ZW0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi50b2RvIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LnRvZG8tc25hcHNob3Qge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5idXR0b24uZGVzdHJveSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0JGQ0FEMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4ICMyYThiY2M7IH1cXG5cXG4uYnV0dG9uLmRlc3Ryb3k6YWN0aXZlIHtcXG4gIHRvcDogMXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG5saS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmNvbnN0IEVOVEVSX0tFWV9DT0RFID0gMTM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgb25TYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX0gLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX3NhdmUuYmluZCh0aGlzKX0+QUREPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9zYXZlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vblNhdmUodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZSgvKm9iamVjdCovIGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcclxuICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuVG9kb1RleHRJbnB1dC5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1RleHRJbnB1dCc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9UZXh0SW5wdXQuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBTbmFwc2hvdEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMnO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBUb2RvU25hcHNob3RzSXRlbSBmcm9tICcuL1RvZG9TbmFwc2hvdHNJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TbmFwc2hvdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzbmFwc2hvdHM6IHRoaXMucHJvcHMuc25hcHNob3RzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGFsbFNuYXBzID0gdGhpcy5zdGF0ZS5zbmFwc2hvdHMsXHJcbiAgICAgICAgc25hcHNob3RzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFNuYXBzKSB7XHJcbiAgICAgIHNuYXBzaG90cy5wdXNoKDxUb2RvU25hcHNob3RzSXRlbSBrZXk9e2tleX0gc25hcHNob3Q9e2FsbFNuYXBzW2tleV19IC8+KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1zbmFwc2hvdCc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PlRBS0UgU05BUFNIT1Q8L2J1dHRvbj5cclxuICAgICAgICA8dWwgaWQ9J3RvZG8tc25hcHNob3QtbGlzdCc+e3NuYXBzaG90c308L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DbGljaygpIHtcclxuICAgIFNuYXBzaG90QWN0aW9ucy50YWtlU25hcHNob3QoKTtcclxuICB9XHJcbn1cclxuXHJcblRvZG9TbmFwc2hvdHMucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9TbmFwc2hvdHMnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzLmpzXG4gKiovIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5cclxuY2xhc3MgU25hcHNob3RBY3Rpb25zIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxyXG4gICAgICAnZGVzdHJveVNuYXBzaG90JyxcclxuICAgICAgJ2Jvb3RzdHJhcFNuYXBzaG90JyxcclxuICAgICAgJ3Rha2VTbmFwc2hvdCdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFsdC5jcmVhdGVBY3Rpb25zKFNuYXBzaG90QWN0aW9ucyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IFNuYXBzaG90QWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucyc7XHJcblxyXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Ub2RvSXRlbS5zY3NzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TbmFwc2hvdHNJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBzbmFwc2hvdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIHRvZG8gPSB0aGlzLnByb3BzLnNuYXBzaG90O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgIDxsYWJlbD48YSBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9ib290c3RyYXBTbmFwc2hvdC5iaW5kKHRoaXMpfT57dG9kby5pZH08L2E+PC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGVzdHJveScgb25DbGljaz17dGhpcy5fb25EZXN0cm95Q2xpY2suYmluZCh0aGlzKX0+JiMxMDAwNjs8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfYm9vdHN0cmFwU25hcHNob3QoKSB7XHJcbiAgICBTbmFwc2hvdEFjdGlvbnMuYm9vdHN0cmFwU25hcHNob3QodGhpcy5wcm9wcy5zbmFwc2hvdC5pZCk7XHJcbiAgfVxyXG5cclxuICBfb25EZXN0cm95Q2xpY2soKSB7XHJcbiAgICBTbmFwc2hvdEFjdGlvbnMuZGVzdHJveVNuYXBzaG90KHRoaXMucHJvcHMuc25hcHNob3QuaWQpO1xyXG4gIH1cclxufVxyXG5cclxuVG9kb1NuYXBzaG90c0l0ZW0ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9TbmFwc2hvdHNJdGVtJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NuYXBzaG90c0l0ZW0uanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBTbmFwc2hvdEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMnO1xyXG5cclxuLy8gREVQRU5ERU5DWVxyXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbi8vIHdlYnBhY2sgaG90IHJlbG9hZFxyXG5pbXBvcnQgbWFrZUhvdCBmcm9tICdhbHQvdXRpbHMvbWFrZUhvdCc7XHJcblxyXG5sZXQgc25hcHNob3RTdG9yZSA9IG1ha2VIb3QoYWx0LCBjbGFzcyBTbmFwc2hvdFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoU25hcHNob3RBY3Rpb25zKTtcclxuICAgIHRoaXMuc25hcHNob3RzID0gW107XHJcbiAgfVxyXG5cclxuICBvbkJvb3RzdHJhcFNuYXBzaG90KGlkKSB7XHJcbiAgICB2YXIgZWx0ID0gXy5maW5kKHRoaXMuc25hcHNob3RzLCAoc25hcCkgPT4ge1xyXG4gICAgICByZXR1cm4gc25hcC5pZCA9PT0gaWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWx0KSB7XHJcbiAgICAgIC8vIFRPRE9cclxuICAgICAgLy8gYWx0LnByZXBhcmUoQXBwU3RvcilcclxuICAgICAgYWx0LmJvb3RzdHJhcChlbHQuZGF0YSk7XHJcbiAgICAgIC8vIGFsdC5yb2xsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25UYWtlU25hcHNob3QoKSB7XHJcbiAgICB2YXIgc25hcHNob3QgPSB7XHJcbiAgICAgIGlkOiAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpKS50b1N0cmluZygzNiksXHJcbiAgICAgIGRhdGE6IGFsdC50YWtlU25hcHNob3QoJ0FwcFN0b3JlJylcclxuICAgIH07XHJcbiAgICB0aGlzLnNuYXBzaG90cy5wdXNoKHNuYXBzaG90KTtcclxuICB9XHJcblxyXG4gIG9uRGVzdHJveVNuYXBzaG90KGlkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAvL3RoaXMuc25hcHNob3RzXHJcbiAgfVxyXG59LCAnU25hcHNob3RTdG9yZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzbmFwc2hvdFN0b3JlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvc3RvcmVzL1NuYXBzaG90U3RvcmUuanNcbiAqKi8iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbi8qZXNsaW50LWRpc2FibGUgbmV3LWNhcCovXHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG4vKmVzbGludC1lbmFibGUgbmV3LWNhcCovXHJcblxyXG5sZXQgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xyXG5cclxucm91dGVyLnVzZSgnL2FwaS8qJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgYXBpLnRvZG8ocmVxLCByZXMsIG5leHQpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXHJcbi8vXHJcbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICBtb2R1bGUuaG90LmFjY2VwdChbJy4uL2FwaS9hcGknXSwgKCkgPT4ge1xyXG4gICAgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9yb3V0ZXMvYXBpLmpzXG4gKiovIiwibGV0IGFwaSA9IHtcclxuICB0b2RvOiAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAvLyBzaW1wbGUgYXBpIGZldGNoIGV4YW1wbGUsIG5vIG93biBEQiBoZXJlIHNvIGV4dGVybmFsIGNhbGwgaXMgbWFkZS5cclxuXHJcbiAgICAgIC8vIGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViXHJcbiAgICAgLyogZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGpzb24pO1xyXG4gICAgICB9KTtcclxuICAgICAgKi9cclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe3Rlc3Q6ICd0ZXN0J30pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIG5leHQoZXJyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG90aGVydG9kbzogKCkgPT4ge1xyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9hcGkvYXBpLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==