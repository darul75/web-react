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
	var apiRoutes = __webpack_require__(60);
	
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
	
	var _componentsContactSectionContact = __webpack_require__(32);
	
	var _componentsContactSectionContact2 = _interopRequireDefault(_componentsContactSectionContact);
	
	var _componentsHomeSectionHomeSection = __webpack_require__(33);
	
	var _componentsHomeSectionHomeSection2 = _interopRequireDefault(_componentsHomeSectionHomeSection);
	
	var _componentsNotFoundSectionNotFoundSection = __webpack_require__(49);
	
	var _componentsNotFoundSectionNotFoundSection2 = _interopRequireDefault(_componentsNotFoundSectionNotFoundSection);
	
	var _componentsTodoSectionTodoSection = __webpack_require__(50);
	
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
	
	var _FooterFooter = __webpack_require__(24);
	
	var _FooterFooter2 = _interopRequireDefault(_FooterFooter);
	
	var _DocumentHtmlHeaderTags = __webpack_require__(16);
	
	var _DocumentHtmlHeaderTags2 = _interopRequireDefault(_DocumentHtmlHeaderTags);
	
	if (process.env.BROWSER) {
	  __webpack_require__(27);
	  __webpack_require__(29);
	  __webpack_require__(31);
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
	
	var reactLogo = __webpack_require__(19);
	
	if (process.env.BROWSER) {
	  __webpack_require__(20);
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
	        _react2['default'].createElement('img', { src: reactLogo, height: '60' }),
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

	module.exports = __webpack_require__.p + "V2d-uc_.png"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	exports.push([module.id, "div.header {\n  width: 100%;\n  margin: auto;\n  text-align: center; }\n\nheader {\n  text-align: center;\n  border-bottom: 2px solid #f4f4f4; }\n\nul {\n  list-style-type: none; }\n\nheader li {\n  display: inline;\n  padding: 5px;\n  border-left: 1px solid #eee; }\n\nli a {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #888; }\n", ""]);

/***/ },
/* 22 */
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
/* 23 */
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
/* 24 */
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
	  __webpack_require__(25);
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
	        _react2['default'].createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=star&count=true&v=2', frameBorder: '0', scrolling: '0', width: '170px', height: '20px' }),
	        _react2['default'].createElement('iframe', { src: 'https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=fork&count=true&v=2', frameBorder: '0', scrolling: '0', width: '170px', height: '20px' })
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	exports.push([module.id, "div.footer {\n  width: 100%;\n  margin: 50px 0;\n  padding: 10px;\n  text-align: center;\n  text-align: center;\n  border-top: 2px solid #f4f4f4; }\n", ""]);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	exports.push([module.id, "body {\n  width: 750px;\n  margin: auto;\n  font: 100% Helvetica, sans-serif;\n  color: #aaa; }\n\nh1, h2, h3 {\n  margin-top: 24px;\n  margin-bottom: 12px; }\n\ndiv.main-content {\n  -webkit-padding-start: 40px; }\n\n/* http://cssdeck.com/labs/beautiful-flat-buttons */\nbutton {\n  margin-left: 10px;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  background: #3498db;\n  border: 0;\n  border-bottom: 2px solid #BFCAD2;\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 -2px #2a8bcc; }\n", ""]);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	exports.push([module.id, "h1 {\n  color: #5a8894; }\n", ""]);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico"

/***/ },
/* 32 */
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
/* 33 */
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
	
	var _storesAppStore = __webpack_require__(36);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _storesAppStoreDepending = __webpack_require__(42);
	
	var _storesAppStoreDepending2 = _interopRequireDefault(_storesAppStoreDepending);
	
	var _HomeSectionActions = __webpack_require__(43);
	
	var _HomeSectionActions2 = _interopRequireDefault(_HomeSectionActions);
	
	var _altUtilsConnectToStores = __webpack_require__(34);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	// COMPONENT
	
	var _HomeSectionSubPartOne = __webpack_require__(44);
	
	var _HomeSectionSubPartOne2 = _interopRequireDefault(_HomeSectionSubPartOne);
	
	var _HomeSectionSubPartTwo = __webpack_require__(46);
	
	var _HomeSectionSubPartTwo2 = _interopRequireDefault(_HomeSectionSubPartTwo);
	
	if (process.env.BROWSER) {
	  __webpack_require__(47);
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
/* 34 */
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
	
	var _functions = __webpack_require__(35);
	
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _objectAssign = __webpack_require__(37);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(38);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(41);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("object-assign");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var AppActions = function AppActions() {
	  _classCallCheck(this, AppActions);
	
	  this.generateActions('create', 'destroy', 'toggleComplete', 'fetch');
	};
	
	module.exports = _alt2['default'].createActions(AppActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// FLUX
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _actionsAppActions = __webpack_require__(38);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _AppStore = __webpack_require__(36);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(41);
	
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
/* 43 */
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
	
	var _actionsAppActions = __webpack_require__(38);
	
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
	
	var _marked = __webpack_require__(45);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(38);
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("marked");

/***/ },
/* 46 */
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
	
	var _marked = __webpack_require__(45);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(38);
	
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	exports.push([module.id, "div.home-section-actions {\n  padding: 10px;\n  margin: 10px 0;\n  background-color: #6DF6FF;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-one {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-two {\n  padding: 10px;\n  background-color: #8EE7FD;\n  border: 1px #eee solid; }\n", ""]);

/***/ },
/* 49 */
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
/* 50 */
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
	
	var _TodoItem = __webpack_require__(51);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	var _TodoTextInput = __webpack_require__(55);
	
	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);
	
	var _TodoSnapshots = __webpack_require__(56);
	
	var _TodoSnapshots2 = _interopRequireDefault(_TodoSnapshots);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(38);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _storesAppStore = __webpack_require__(36);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _storesSnapshotStore = __webpack_require__(59);
	
	var _storesSnapshotStore2 = _interopRequireDefault(_storesSnapshotStore);
	
	var _altUtilsConnectToStores = __webpack_require__(34);
	
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
	
	var _classnames = __webpack_require__(52);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(38);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(53);
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("classnames");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(23)(content, {});
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	exports.push([module.id, "div.todo {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.todo-snapshot {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\nbutton.destroy {\n  border-radius: 50%;\n  margin-left: 10px;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  background: #3498db;\n  border: 0;\n  border-bottom: 2px solid #BFCAD2;\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 -2px #2a8bcc; }\n\n.button.destroy:active {\n  top: 1px;\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\nli.completed {\n  text-decoration: line-through; }\n", ""]);

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
	
	// FLUX
	
	var _actionsSnapshotActions = __webpack_require__(57);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	// COMPONENT
	
	var _TodoSnapshotsItem = __webpack_require__(58);
	
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var SnapshotActions = function SnapshotActions() {
	  _classCallCheck(this, SnapshotActions);
	
	  this.generateActions('destroySnapshot', 'bootstrapSnapshot', 'takeSnapshot');
	};
	
	module.exports = _alt2['default'].createActions(SnapshotActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\JUL\\DEV\\github\\web-react\\node_modules\\react-hot-loader\\makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotActions.js" + ": " + err.message); } }); } } })(); }

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
	
	// FLUX
	
	var _actionsSnapshotActions = __webpack_require__(57);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(53);
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
/* 59 */
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
	
	var _actionsSnapshotActions = __webpack_require__(57);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(39);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(41);
	
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
/* 60 */
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
	
	var api = __webpack_require__(61);
	
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
/* 61 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTRiNmEzMDllOWU1NjllMWM0ZjEiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZlLWZhdmljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9yb3V0ZXMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29uZmlnLmpzb24iLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9pbWFnZXMvcmVhY3QtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzcz8wZDMzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3M/NDU3NyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3M/MmEzZCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3M/ZWZhYyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zYXNzIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvZmF2aWNvbi5pY28iLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzLmpzIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvQXBwU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hbHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWx0XCIiLCJ3ZWJwYWNrOi8vLy4vfi9hbHQvdXRpbHMvbWFrZUhvdC5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvQXBwU3RvcmVEZXBlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbkFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvblN1YlBhcnRPbmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWFya2VkXCIiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvblN1YlBhcnRUd28uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3M/NDAwZiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2NzcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9JdGVtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9fVG9kb0l0ZW0uc2Nzcz85ZmJjIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dC5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TbmFwc2hvdHMuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzSXRlbS5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvU25hcHNob3RTdG9yZS5qcyIsIndlYnBhY2s6Ly8vQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9yb3V0ZXMvYXBpLmpzIiwid2VicGFjazovLy9DOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvc2VydmVyL2FwaS9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7RUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRCxLQUFJLEdBQUcsR0FBRztBQUNSLE9BQUksRUFBRSxjQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3hCLFNBQUk7QUFDRixVQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFZbEQsVUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztNQUN0QyxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ1osV0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ1g7SUFDRjtBQUNELFlBQVMsRUFBRSxxQkFBTSxFQUVoQjtFQUNGLENBQUM7O3NCQUVhLEdBQUciLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYTRiNmEzMDllOWU1NjllMWM0ZjFcbiAqKi8iLCIvLyBOT0RFXHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbi8vIEVYUFJFU1NcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBmYXZpY29uIGZyb20gJ3NlcnZlLWZhdmljb24nO1xyXG5cclxuLy8gUHJvZmlsZSBkZXYgb3IgcHJvZHVjdGlvblxyXG5sZXQgcHJvZmlsZSA9IHByb2Nlc3MuZW52LkRFViA/ICdkZXYnIDogJ3Byb2QnLFxyXG5cdHB1YmxpY1BhdGggPSBwcm9maWxlID09PSAnZGV2JyA/ICdidWlsZCcgOiAnZGlzdCc7XHJcblxyXG5sZXQgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocHVibGljUGF0aCkpO1xyXG5hcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2FwcC9pbWFnZXMvZmF2aWNvbi5pY28nKSkpO1xyXG5cclxuLy9cclxuLy8gUmVnaXN0ZXIgbWlkZGxld2FyZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIHJlbmRlcmVyXHJcbmxldCByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XHJcbi8vIGFwaXNcclxubGV0IGFwaVJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2FwaScpO1xyXG5cclxuLy9cclxuLy8gQ29uZmlndXJlIG1pZGRsZXdhcmVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnJlbmRlcmVyLmluaXQocHJvZmlsZSk7XHJcblxyXG4vL1xyXG4vLyBBY3RpdmF0ZSBtaWRkbGV3YXJlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hcHAudXNlKGFwaVJvdXRlcyk7XHJcbmFwcC51c2UocmVuZGVyZXIucmVuZGVyKTtcclxuXHJcbmh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAnICsgYXBwLmdldCgncG9ydCcpKTtcclxufSk7XHJcblxyXG4vL1xyXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgLy8gYWNjZXB0IHVwZGF0ZSBvZiBkZXBlbmRlbmN5XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuL3JvdXRlcy9hcGknLCAnLi9yb3V0ZXMvcmVuZGVyZXInXSwgKCkgPT4ge1xyXG4gICAgYXBpUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XHJcbiAgICBhcHAudXNlKGFwaVJvdXRlcyk7XHJcbiAgICByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XHJcbiAgICByZW5kZXJlci5pbml0KCdkZXYnKTtcclxuICB9KTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvc2VydmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmUtZmF2aWNvblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwic2VydmUtZmF2aWNvblwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicGF0aFwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaHR0cFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibGV0IHJlbmRlcmVyID0gcmVxdWlyZSgnLi4vdXRpbHMvcmVuZGVyZXInKTtcclxuXHJcbmxldCBwcm9maWxlID0gJ2Rldic7XHJcblxyXG52YXIgcm91dGVzUmVuZGVyZXIgPSB7XHJcbiAgaW5pdDogKHR5cGUpID0+IHtcclxuICAgIHByb2ZpbGUgPSB0eXBlO1xyXG4gICAgcmVuZGVyZXIuaW5pdCh0eXBlKTtcclxuICB9LFxyXG4gIHJlbmRlcjogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICByZW5kZXJlci5yZW5kZXIocmVxLCByZXMsIG5leHQpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vXHJcbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICBtb2R1bGUuaG90LmFjY2VwdChbJy4uL3V0aWxzL3JlbmRlcmVyJ10sICgpID0+IHtcclxuICAgIHJlbmRlcmVyID0gcmVxdWlyZSgnLi4vdXRpbHMvcmVuZGVyZXInKTtcclxuICAgIHJlbmRlcmVyLmluaXQocHJvZmlsZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1JlbmRlcmVyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9zZXJ2ZXIvcm91dGVzL3JlbmRlcmVyLmpzXG4gKiovIiwiLy8gTk9ERVxyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5cclxuLy8gRVhURVJOQUxTXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IElzbyBmcm9tICdpc28nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG4vLyBDT1JFXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vLi4vYXBwL3JvdXRlcyc7XHJcbmltcG9ydCBhbHQgZnJvbSAnLi4vLi4vYXBwL2FsdCc7XHJcblxyXG5sZXQgaHRtbCA9ICcnO1xyXG5cclxudmFyIHJlbmRlcmVyID0ge1xyXG4gIGluaXQ6ICh0eXBlKSA9PiB7XHJcbiAgICBodG1sID0gdHlwZSA9PT0gJ2RldicgP1xyXG4gICAgICBmcy5yZWFkRmlsZVN5bmMoJy4vYXNzZXRzL2luZGV4LWRldi5odG1sJywge2VuY29kaW5nOiAndXRmOCd9KVxyXG4gICAgICA6XHJcbiAgICAgIGZzLnJlYWRGaWxlU3luYygnLi9kaXN0L2luZGV4LXByb2QuaHRtbCcsIHtlbmNvZGluZzogJ3V0ZjgnfSk7XHJcbiAgfSxcclxuICByZW5kZXI6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgbGV0IG1hcmt1cCA9ICcnLFxyXG4gICAgICBpc28gPSBuZXcgSXNvKCk7XHJcblxyXG4gICAgY29uc3Qgb25lSXRlbUJvb3RzdHJhcGVkID0ge1xyXG4gICAgICAnQXBwU3RvcmUnOiB7XHJcbiAgICAgICAgJ2RhdGFCeVJlc3RBcGknOiB7fSxcclxuICAgICAgICAnZGF0YSc6IHtcclxuICAgICAgICAgICdpYXFwb3I3cCc6IHtcclxuICAgICAgICAgICAgJ2lkJzogJ2lhcXBvcjdwJyxcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogZmFsc2UsXHJcbiAgICAgICAgICAgICd0ZXh0JzogJ2ZzZnNkZidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyogVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVucywgd2UgdGFrZSB0aGUgbG9jYWxzIGRhdGEgd2UgaGF2ZSBhbHJlYWR5XHJcbiAgICBmZXRjaGVkIGFuZCBzZWVkIG91ciBzdG9yZXMgd2l0aCBkYXRhLlxyXG4gICAgTmV4dCB3ZSB1c2UgcmVhY3Qtcm91dGVyIHRvIHJ1biB0aGUgVVJMIHRoYXQgaXMgcHJvdmlkZWQgaW4gcm91dGVzLmpzeFxyXG4gICAgRmluYWxseSB3ZSB1c2UgaXNvIGluIG9yZGVyIHRvIHJlbmRlciB0aGlzIGNvbnRlbnQgc28gaXQgcGlja3MgYmFjayB1cFxyXG4gICAgb24gdGhlIGNsaWVudCBzaWRlIGFuZCBib290c3RyYXBzIHRoZSBzdG9yZXMuXHJcbiAgICBpbml0IHNlcnZlciByZW5kZXJlclxyXG4gICAgKi9cclxuICAgIGFsdC5ib290c3RyYXAoSlNPTi5zdHJpbmdpZnkocmVzLmxvY2Fscy5kYXRhIHx8IG9uZUl0ZW1Cb290c3RyYXBlZCkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIFJvdXRlci5ydW4ocm91dGVzLCByZXEucGF0aCwgKEhhbmRsZXIsIHN0YXRlKSA9PiB7XHJcblx0XHRcdFx0Ly8gYWx0IGZsdXggZmx1c2hcclxuICAgICAgICBsZXQgY29udGVudCA9IFJlYWN0LnJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGFuZGxlcikpO1xyXG4gICAgICAgIGlzby5hZGQoY29udGVudCwgYWx0LmZsdXNoKCkpO1xyXG5cclxuICAgICAgICByZXMuY29udGVudFR5cGUgPSAndGV4dC9odG1sOyBjaGFyc2V0PXV0ZjgnO1xyXG4gICAgICAgIGxldCBub3RGb3VuZCA9IF8uZmluZChzdGF0ZS5yb3V0ZXMsIHtpc05vdEZvdW5kOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIGlmIChub3RGb3VuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdFx0XHQvLyBSRU5ERVJJTkcgYmFjayB0byBjbGllbnRcclxuICAgICAgICBsZXQgbWFya3VwQ29udGVudCA9IGlzby5yZW5kZXIoKTtcclxuICAgICAgICAvLyBET00gPGhlYWQ+IGluc3RydW1lbnRhdGlvblxyXG4gICAgICAgIGxldCBoZWFkID0gSGVsbWV0LnJld2luZCgpO1xyXG4gICAgICAgIG1hcmt1cCA9IGh0bWwucmVwbGFjZSgnTUVUQScsIGhlYWQubWV0YSkucmVwbGFjZSgnVElUTEUnLCBoZWFkLnRpdGxlKS5yZXBsYWNlKCdMSU5LJywgaGVhZC5saW5rKS5yZXBsYWNlKCdDT05URU5UJywgbWFya3VwQ29udGVudCk7XHJcbiAgICAgICAgLy8gU0VORCByZXNwb25zZVxyXG4gICAgICAgIHJlcy5zZW5kKG1hcmt1cCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci91dGlscy9yZW5kZXJlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3QtaGVsbWV0XCJcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpc29cIlxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZnNcIlxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcclxuLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8qZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCB7Um91dGUsIERlZmF1bHRSb3V0ZSwgTm90Rm91bmRSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0FwcC9BcHAnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24vQ29udGFjdCc7XHJcbmltcG9ydCBIb21lU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24nO1xyXG5pbXBvcnQgTm90Rm91bmRTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZFNlY3Rpb24vTm90Rm91bmRTZWN0aW9uJztcclxuaW1wb3J0IFRvZG9TZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgPFJvdXRlIG5hbWU9J2FwcCcgcGF0aD0nLycgaGFuZGxlcj17QXBwbGljYXRpb259PlxyXG4gICAgPFJvdXRlIG5hbWU9J2hvbWUnIHBhdGg9Jy9ob21lJyBoYW5kbGVyPXtIb21lU2VjdGlvbn0vPlxyXG4gICAgPFJvdXRlIG5hbWU9J3RvZG8nIHBhdGg9Jy90b2RvJyBoYW5kbGVyPXtUb2RvU2VjdGlvbn0vPlxyXG4gICAgPFJvdXRlIG5hbWU9J2NvbnRhY3QnIHBhdGg9XCIvY29udGFjdFwiIGhhbmRsZXI9e0NvbnRhY3R9Lz5cclxuICAgIDxEZWZhdWx0Um91dGUgaGFuZGxlcj17SG9tZVNlY3Rpb259IC8+XHJcbiAgICA8Tm90Rm91bmRSb3V0ZSBoYW5kbGVyPXtOb3RGb3VuZFNlY3Rpb259IC8+XHJcbiAgPC9Sb3V0ZT5cclxuKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL3JvdXRlcy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVIYW5kbGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgSHRtbEhlYWRlclRhZ3MgZnJvbSAnLi4vRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19BcHAuc2NzcycpO1xyXG4gIHJlcXVpcmUoJy4vX0FwcC5zYXNzJyk7XHJcbiAgcmVxdWlyZSgnZmlsZT9uYW1lPWZhdmljb24uaWNvIS4uLy4uL2ltYWdlcy9mYXZpY29uLmljbycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEh0bWxIZWFkZXJUYWdzIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWNvbnRlbnQnPlxyXG4gICAgICAgICAgPFJvdXRlSGFuZGxlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdBcHAnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9BcHAvQXBwLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG4vLyBUT0RPOiBkbyBpdCBpbiBzdG9yZSBtYXliZVxyXG5jb25zdCBtZXRhcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jb25maWcuanNvbicpLmhlbG1ldDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxIZWFkZXJUYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBET00gPGhlYWQ+IGluc3RydW1lbnRhdGlvblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVsbWV0XHJcbiAgICAgICAgICB0aXRsZT17bWV0YXMudGl0bGV9XHJcbiAgICAgICAgICAgIG1ldGE9e21ldGFzLm1ldGF9XHJcbiAgICAgICAgICAgIGxpbms9e21ldGFzLmxpbmt9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSHRtbEhlYWRlclRhZ3MucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0h0bWxIZWFkZXJUYWdzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWxtZXRcIjoge1xuXHRcdFwidGl0bGVcIjogXCJ3ZWItcmVhY3RcIixcblx0XHRcIm1ldGFcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuXHRcdFx0XHRcImNvbnRlbnRcIjogXCJXZWJwYWNrIE5vZGUgUmVhY3QgU3RhcnRlciBLaXRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwidmlld3BvcnRcIixcblx0XHRcdFx0XCJjb250ZW50XCI6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0XCJsaW5rXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJyZWxcIjogXCJzaG9ydGN1dCBpY29uXCIsXG5cdFx0XHRcdFwiaHJlZlwiOiBcIi9mYXZpY29uLmljb1wiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbWFnZS94LWljb25cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJyZWxcIjogXCJpY29uXCIsXG5cdFx0XHRcdFwiaHJlZlwiOiBcIi9mYXZpY29uLmljb1wiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbWFnZS94LWljb25cIlxuXHRcdFx0fVxuXHRcdF1cblx0fVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hc3NldHMvY29uZmlnLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmxldCByZWFjdExvZ28gPSByZXF1aXJlKCcuL2ltYWdlcy9yZWFjdC1sb2dvLnBuZycpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19IZWFkZXIuc2NzcycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxpbWcgc3JjPXtyZWFjdExvZ299IGhlaWdodD0nNjAnIC8+XHJcblx0XHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHRcdDx1bD5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSdhcHAnPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSd0b2RvJz5Ub2RvPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayB0bz0nY29udGFjdCc+Q29udGFjdDwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSGVhZGVyLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIZWFkZXInO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiVjJkLXVjXy5wbmdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW1hZ2VzL3JlYWN0LWxvZ28ucG5nXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjRmNGY0OyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuXFxuaGVhZGVyIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTsgfVxcblxcbmxpIGEge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM4ODg7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG4vLyBcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Gb290ZXIuc2NzcycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPlxyXG4gICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2doYnRucy5jb20vZ2l0aHViLWJ0bi5odG1sP3VzZXI9ZGFydWw3NSZyZXBvPXdlYi1yZWFjdCZ0eXBlPXN0YXImY291bnQ9dHJ1ZSZ2PTInIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9JzAnIHdpZHRoPScxNzBweCcgaGVpZ2h0PScyMHB4Jz48L2lmcmFtZT5cclxuICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9naGJ0bnMuY29tL2dpdGh1Yi1idG4uaHRtbD91c2VyPWRhcnVsNzUmcmVwbz13ZWItcmVhY3QmdHlwZT1mb3JrJmNvdW50PXRydWUmdj0yJyBmcmFtZUJvcmRlcj0nMCcgc2Nyb2xsaW5nPScwJyB3aWR0aD0nMTcwcHgnIGhlaWdodD0nMjBweCc+PC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkZvb3Rlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnRm9vdGVyJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fRm9vdGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNGY0ZjQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogNzUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250OiAxMDAlIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXFxuaDEsIGgyLCBoMyB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcblxcbmRpdi5tYWluLWNvbnRlbnQge1xcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4OyB9XFxuXFxuLyogaHR0cDovL2Nzc2RlY2suY29tL2xhYnMvYmVhdXRpZnVsLWZsYXQtYnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0JGQ0FEMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4ICMyYThiY2M7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9pbmRlbnRlZFN5bnRheCEuL19BcHAuc2Fzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP2luZGVudGVkU3ludGF4IS4vX0FwcC5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9pbmRlbnRlZFN5bnRheCEuL19BcHAuc2Fzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zYXNzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaDEge1xcbiAgY29sb3I6ICM1YTg4OTQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyP2luZGVudGVkU3ludGF4IS4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Fzc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYXZpY29uLmljb1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZmlsZS1sb2FkZXI/bmFtZT1mYXZpY29uLmljbyEuL2FwcC9pbWFnZXMvZmF2aWNvbi5pY29cbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG4vLyBUT0RPOiBkbyBpdCBpbiBzdG9yZSBtYXliZVxyXG5jb25zdCBtZXRhcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jb25maWcuanNvbicpLmhlbG1ldDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkNPTlRBQ1QgUEFHRTwvaDE+XHJcbiAgICAgICAgPEhlbG1ldCB0aXRsZT17bWV0YXMudGl0bGV9IHRpdGxlVGVtcGxhdGU9JyVzIHwgQ29udGFjdCBwYWdlJyAvPlxyXG4gICAgICAgIDxwPnRlc3QgdGhlIDQwNCBwYWdlIDxhIGhyZWY9Jy9taWRkbGVvZm5vd2hlcmUnPmhlcmU8L2E+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xyXG5pbXBvcnQgQXBwU3RvcmVEZXBlbmRpbmcgZnJvbSAnLi4vLi4vc3RvcmVzL0FwcFN0b3JlRGVwZW5kaW5nJztcclxuaW1wb3J0IEhvbWVTZWN0aW9uQWN0aW9ucyBmcm9tICcuL0hvbWVTZWN0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBjb25uZWN0VG9TdG9yZXMgZnJvbSAnYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcyc7XHJcblxyXG4vLyBDT01QT05FTlRcclxuaW1wb3J0IEhvbWVTZWN0aW9uU3ViUGFydE9uZSBmcm9tICcuL0hvbWVTZWN0aW9uU3ViUGFydE9uZSc7XHJcbmltcG9ydCBIb21lU2VjdGlvblN1YlBhcnRUd28gZnJvbSAnLi9Ib21lU2VjdGlvblN1YlBhcnRUd28nO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Ib21lU2VjdGlvbi5zY3NzJyk7XHJcbn1cclxuXHJcbmxldCBob21lU2VjdGlvbiA9IGNsYXNzIEhvbWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyByZXRyaWV2ZSBkYXRhIGZyb20gc3RvcmVcclxuICAgIGxldCBzdG9yZVByb3BzID0gSG9tZVNlY3Rpb24uZ2V0UHJvcHNGcm9tU3RvcmVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+SE9NRSBQQUdFPC9oMT5cclxuICAgICAgICA8SG9tZVNlY3Rpb25BY3Rpb25zIC8+XHJcbiAgICAgICAgPEhvbWVTZWN0aW9uU3ViUGFydE9uZSBhcGlEYXRhPXtzdG9yZVByb3BzLmFwaURhdGF9IC8+XHJcbiAgICAgICAgPEhvbWVTZWN0aW9uU3ViUGFydFR3byBhcGlEYXRhPXtzdG9yZVByb3BzLmFwaURhdGF9Lz5cclxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGFwaURhdGE9e3N0b3JlUHJvcHMuYXBpRGF0YURlcGVuZGluZ30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIFtBcHBTdG9yZSwgQXBwU3RvcmVEZXBlbmRpbmddO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFwaURhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZGF0YUJ5UmVzdEFwaSxcclxuICAgICAgYXBpRGF0YURlcGVuZGluZzogQXBwU3RvcmVEZXBlbmRpbmcuZ2V0U3RhdGUoKS5kYXRhQnlSZXN0QXBpXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmhvbWVTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXMoaG9tZVNlY3Rpb24pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbi5qc1xuICoqLyIsIi8qKlxuICogJ0hpZ2hlciBPcmRlciBDb21wb25lbnQnIHRoYXQgY29udHJvbHMgdGhlIHByb3BzIG9mIGEgd3JhcHBlZFxuICogY29tcG9uZW50IHZpYSBzdG9yZXMuXG4gKlxuICogRXhwZWN0cyB0aGUgQ29tcG9uZW50IHRvIGhhdmUgdHdvIHN0YXRpYyBtZXRob2RzOlxuICogICAtIGdldFN0b3JlcygpOiBTaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mIHN0b3Jlcy5cbiAqICAgLSBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpOiBTaG91bGQgcmV0dXJuIHRoZSBwcm9wcyBmcm9tIHRoZSBzdG9yZXMuXG4gKlxuICogRXhhbXBsZSB1c2luZyBvbGQgUmVhY3QuY3JlYXRlQ2xhc3MoKSBzdHlsZTpcbiAqXG4gKiAgICBjb25zdCBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICAgc3RhdGljczoge1xuICogICAgICAgIGdldFN0b3Jlcyhwcm9wcykge1xuICogICAgICAgICAgcmV0dXJuIFtteVN0b3JlXVxuICogICAgICAgIH0sXG4gKiAgICAgICAgZ2V0UHJvcHNGcm9tU3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgICByZXR1cm4gbXlTdG9yZS5nZXRTdGF0ZSgpXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgLy8gVXNlIHRoaXMucHJvcHMgbGlrZSBub3JtYWwgLi4uXG4gKiAgICAgIH1cbiAqICAgIH0pXG4gKiAgICBNeUNvbXBvbmVudCA9IGNvbm5lY3RUb1N0b3JlcyhNeUNvbXBvbmVudClcbiAqXG4gKlxuICogRXhhbXBsZSB1c2luZyBFUzYgQ2xhc3M6XG4gKlxuICogICAgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICogICAgICBzdGF0aWMgZ2V0U3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgcmV0dXJuIFtteVN0b3JlXVxuICogICAgICB9XG4gKiAgICAgIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICByZXR1cm4gbXlTdG9yZS5nZXRTdGF0ZSgpXG4gKiAgICAgIH1cbiAqICAgICAgcmVuZGVyKCkge1xuICogICAgICAgIC8vIFVzZSB0aGlzLnByb3BzIGxpa2Ugbm9ybWFsIC4uLlxuICogICAgICB9XG4gKiAgICB9XG4gKiAgICBNeUNvbXBvbmVudCA9IGNvbm5lY3RUb1N0b3JlcyhNeUNvbXBvbmVudClcbiAqXG4gKiBBIGdyZWF0IGV4cGxhbmF0aW9uIG9mIHRoZSBtZXJpdHMgb2YgaGlnaGVyIG9yZGVyIGNvbXBvbmVudHMgY2FuIGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vYml0Lmx5LzFhYlBrclBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9mdW5jdGlvbnMgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBjb25uZWN0VG9TdG9yZXMoQ29tcG9uZW50KSB7XG4gIC8vIENoZWNrIGZvciByZXF1aXJlZCBzdGF0aWMgbWV0aG9kcy5cbiAgaWYgKCEoMCwgX2Z1bmN0aW9ucy5pc0Z1bmN0aW9uKShDb21wb25lbnQuZ2V0U3RvcmVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdFRvU3RvcmVzKCkgZXhwZWN0cyB0aGUgd3JhcHBlZCBjb21wb25lbnQgdG8gaGF2ZSBhIHN0YXRpYyBnZXRTdG9yZXMoKSBtZXRob2QnKTtcbiAgfVxuICBpZiAoISgwLCBfZnVuY3Rpb25zLmlzRnVuY3Rpb24pKENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0VG9TdG9yZXMoKSBleHBlY3RzIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB0byBoYXZlIGEgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIG1ldGhvZCcpO1xuICB9XG5cbiAgLy8gV3JhcHBlciBDb21wb25lbnQuXG4gIHZhciBTdG9yZUNvbm5lY3Rpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnU3RvcmVDb25uZWN0aW9uJyxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHN0b3JlcyA9IENvbXBvbmVudC5nZXRTdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICBzdG9yZS5saXN0ZW4oX3RoaXMub25DaGFuZ2UpO1xuICAgICAgfSk7XG4gICAgICBpZiAoQ29tcG9uZW50LmNvbXBvbmVudERpZENvbm5lY3QpIHtcbiAgICAgICAgQ29tcG9uZW50LmNvbXBvbmVudERpZENvbm5lY3QodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzdG9yZXMgPSBDb21wb25lbnQuZ2V0U3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICBzdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgc3RvcmUudW5saXN0ZW4oX3RoaXMyLm9uQ2hhbmdlKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9mdW5jdGlvbnMuYXNzaWduKSh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFN0b3JlQ29ubmVjdGlvbjtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29ubmVjdFRvU3RvcmVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lYWNoT2JqZWN0ID0gZWFjaE9iamVjdDtcbmV4cG9ydHMuYXNzaWduID0gYXNzaWduO1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufTtcblxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gZWFjaE9iamVjdChmLCBvKSB7XG4gIG8uZm9yRWFjaChmdW5jdGlvbiAoZnJvbSkge1xuICAgIE9iamVjdC5rZXlzKE9iamVjdChmcm9tKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmKGtleSwgZnJvbVtrZXldKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNvdXJjZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzb3VyY2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZWFjaE9iamVjdChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICB9LCBzb3VyY2UpO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9mdW5jdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgbWVyZ2UgZnJvbSAnb2JqZWN0LWFzc2lnbic7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XHJcblxyXG4vLyBERVBFTkRFTkNZXHJcbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuLy8gd2VicGFjayBob3QgcmVsb2FkXHJcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcclxuXHJcbmxldCBhcHBTdG9yZSA9IG1ha2VIb3QoYWx0LCBjbGFzcyBBcHBTdG9yZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJpbmRBY3Rpb25zKEFwcEFjdGlvbnMpO1xyXG4gICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge307XHJcbiAgICB0aGlzLmRhdGEgPSB7fTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShpZCwgdXBkYXRlcykge1xyXG4gICAgaWYodGhpcy5kYXRhW2lkXSAmJiB1cGRhdGVzKXtcclxuICAgICAgdGhpcy5kYXRhW2lkXSA9IG1lcmdlKHRoaXMuZGF0YVtpZF0sIHVwZGF0ZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWxsKHVwZGF0ZXMpIHtcclxuICAgIGZvciAodmFyIGlkIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZShpZCwgdXBkYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNyZWF0ZSh0ZXh0KSB7XHJcbiAgICB0ZXh0ID0gdGV4dC50cmltKCk7XHJcbiAgICBpZiAodGV4dCA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gaGFuZCB3YXZpbmcgb2YgY291cnNlLlxyXG4gICAgdmFyIGlkID0gKCtuZXcgRGF0ZSgpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSkudG9TdHJpbmcoMzYpO1xyXG4gICAgdGhpcy5kYXRhW2lkXSA9IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgICAgIHRleHQ6IHRleHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkZldGNoKCkge1xyXG4gICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge2RhdGE6ICdoZWxsbyd9O1xyXG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YUJ5UmVzdEFwaSA9IHtkYXRhOiBqc29ufTtcclxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uVXBkYXRlVGV4dCh4KSB7XHJcbiAgICBsZXQgeyBpZCwgdGV4dCB9ID0geDtcclxuICAgIHRleHQgPSB0ZXh0ID8gdGV4dC50cmltKCkgOiAnJztcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyB0ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVDb21wbGV0ZShpZCkge1xyXG4gICAgbGV0IGNvbXBsZXRlID0gIXRoaXMuZGF0YVtpZF0uY29tcGxldGU7XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyBjb21wbGV0ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlQ29tcGxldGVBbGwoKSB7XHJcbiAgICAvKnZhciBjb21wbGV0ZSA9ICF0b2RvU3RvcmUuYXJlQWxsQ29tcGxldGUoKTtcclxuICAgIHRoaXMudXBkYXRlQWxsKHsgY29tcGxldGUgfSk7Ki9cclxuICB9XHJcblxyXG4gIG9uRGVzdHJveShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMuZGF0YVtpZF07XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3lDb21wbGV0ZWQoKSB7XHJcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YVtpZF0uY29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveShpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhcmVBbGxDb21wbGV0ZSgpIHtcclxuICAgIGxldCB7IGRhdGEgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcclxuICAgICAgaWYgKCFkYXRhW2lkXS5jb21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59LCAnQXBwU3RvcmUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBwU3RvcmU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvQXBwU3RvcmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCJcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5cclxuY2xhc3MgQXBwQWN0aW9ucyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcclxuICAgICAgJ2NyZWF0ZScsXHJcbiAgICAgICdkZXN0cm95JyxcclxuICAgICAgJ3RvZ2dsZUNvbXBsZXRlJyxcclxuICAgICAgJ2ZldGNoJ1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoQXBwQWN0aW9ucyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBBbHQgZnJvbSAnYWx0JztcclxuXHJcbi8vIGNyZWF0ZSBhbHQgaW5zdGFuY2VcclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsdCgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvYWx0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbHRcIlxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIG1ha2VIb3QoYWx0LCBTdG9yZSkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gU3RvcmUuZGlzcGxheU5hbWUgOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgYWx0LnN0b3Jlc1tuYW1lXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhbHQuY3JlYXRlU3RvcmUoU3RvcmUsIG5hbWUpO1xuICB9KSgpO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1ha2VIb3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9tYWtlSG90LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbi8vIERFUEVOREVOQ1lcclxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi9BcHBTdG9yZSc7XHJcbi8vIHdlYnBhY2sgaG90IHJlbG9hZFxyXG5pbXBvcnQgbWFrZUhvdCBmcm9tICdhbHQvdXRpbHMvbWFrZUhvdCc7XHJcblxyXG5sZXQgZGVwZW5kaW5nU3RvcmUgPSBtYWtlSG90KGFsdCwgY2xhc3MgRGVwZW5kaW5nU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBcHBBY3Rpb25zKTtcclxuICAgIHRoaXMuZGF0YUJ5UmVzdEFwaSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgb25GZXRjaCgpIHtcclxuICAgIHRoaXMud2FpdEZvcihbQXBwU3RvcmUuZGlzcGF0Y2hUb2tlbl0pOyAvLyBldmVudCBoYXMgdG8gYmUgY29uc3VtZWRcclxuICAgIHRoaXMuZGF0YUJ5UmVzdEFwaSA9IHtkYXRhOiAnaGVyZSBpcyBkZXBlbmRlbmN5IHN0b3JlJ307XHJcbiAgfVxyXG59LCAnRGVwZW5kaW5nU3RvcmUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVwZW5kaW5nU3RvcmU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9zdG9yZXMvQXBwU3RvcmVEZXBlbmRpbmcuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvbkFjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXNlY3Rpb24tYWN0aW9ucyc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PkZBS0UgQVBJIENBTEw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2soKSB7XHJcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lU2VjdGlvbkFjdGlvbnMucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uQWN0aW9ucyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uQWN0aW9ucy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVTZWN0aW9uU3ViUGFydE9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBhcGlEYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgY29udGVudE1hcmt1cCA9ICdkaXNwYXRjaGluZyB6b25lIDEnO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhKSB7XHJcbiAgICAgIGNvbnRlbnRNYXJrdXAgPSBtYXJrZWQoJ2BgYGpzb25cXG4nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5hcGlEYXRhLmRhdGEsIG51bGwsIDIpICsgJ2BgYCcsIHticmVha3M6IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LW9uZScgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnRNYXJrdXB9fT48L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DbGljaygpIHtcclxuICAgIEFwcEFjdGlvbnMuZmV0Y2goKTtcclxuICB9XHJcbn1cclxuXHJcbkhvbWVTZWN0aW9uU3ViUGFydE9uZS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSG9tZVNlY3Rpb25TdWJQYXJ0T25lJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25TdWJQYXJ0T25lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtYXJrZWRcIlxuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvblN1YlBhcnRUd28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcclxuICAgICAgYXBpRGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGNvbnRlbnRNYXJrdXAgPSAnZGlzcGF0Y2hpbmcgem9uZSAyJztcclxuICAgIGlmICh0aGlzLnByb3BzLmFwaURhdGEuZGF0YSkge1xyXG4gICAgICBjb250ZW50TWFya3VwID0gbWFya2VkKCdgYGBqc29uXFxuJyArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhLCBudWxsLCAyKSArICdgYGAnLCB7YnJlYWtzOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtc2VjdGlvbi1zdWItcGFydC10d28nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50TWFya3VwfX0+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2xpY2soKSB7XHJcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lU2VjdGlvblN1YlBhcnRUd28ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uU3ViUGFydFR3byc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hvbWVTZWN0aW9uLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhvbWUtc2VjdGlvbi1hY3Rpb25zIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2REY2RkY7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LmhvbWUtc2VjdGlvbi1zdWItcGFydC1vbmUge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5kaXYuaG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LXR3byB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhFRTdGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5QQUdFIE5PVCBGT1VORDwvaDE+XHJcbiAgICAgICAgPHA+eWVzIGluZGVlZDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTm90Rm91bmRTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdOb3RGb3VuZFNlY3Rpb24nO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ob3RGb3VuZFNlY3Rpb24vTm90Rm91bmRTZWN0aW9uLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtJztcclxuaW1wb3J0IFRvZG9UZXh0SW5wdXQgZnJvbSAnLi9Ub2RvVGV4dElucHV0JztcclxuaW1wb3J0IFRvZG9TbmFwc2hvdHMgZnJvbSAnLi9Ub2RvU25hcHNob3RzJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XHJcbmltcG9ydCBTbmFwc2hvdFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9TbmFwc2hvdFN0b3JlJztcclxuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcclxuXHJcbmxldCB0b2RvU2VjdGlvbiA9IGNsYXNzIFRvZG9TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyByZXRyaWV2ZSBkYXRhIGZyb20gc3RvcmVcclxuICAgIGxldCBzdG9yZVByb3BzID0gVG9kb1NlY3Rpb24uZ2V0UHJvcHNGcm9tU3RvcmVzKCk7XHJcbiAgICAvLyBidWlsZCB3aXRoIGN1cnJlbnQgZGF0YVxyXG4gICAgbGV0IGFsbFRvZG9zID0gc3RvcmVQcm9wcy5hbGxEYXRhLFxyXG4gICAgICAgIHRvZG9zID0gW107XHJcbiAgICAvLyBnZW5lcmF0ZSB0b2RvIGl0ZW0gbGlzdFxyXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFRvZG9zKSB7XHJcbiAgICAgIHRvZG9zLnB1c2goPFRvZG9JdGVtIGtleT17a2V5fSB0b2RvPXthbGxUb2Rvc1trZXldfSAvPik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+VE9ETyBQQUdFPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kbyc+XHJcbiAgICAgICAgICA8cD5GaXJzdCBhZGQgc29tZSB0YXNrcyBieSBwcmVzc2luZyBlbnRlciBrZXk8L3A+XHJcbiAgICAgICAgICA8VG9kb1RleHRJbnB1dCBjbGFzc05hbWU9J2VkaXQnIGlkPSduZXctdG9kbycgcGxhY2Vob2xkZXI9J1doYXQgbmVlZHMgdG8gYmUgZG9uZSA/JyBvblNhdmU9e3RoaXMuX29uU2F2ZS5iaW5kKHRoaXMpfSB2YWx1ZT0nJyAvPlxyXG4gICAgICAgICAgPHVsIGlkPSd0b2RvLWxpc3QnPnt0b2Rvc308L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxUb2RvU25hcHNob3RzIHNuYXBzaG90cz17c3RvcmVQcm9wcy5zbmFwc2hvdHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblNhdmUodGV4dCkge1xyXG4gICAgaWYgKHRleHQudHJpbSgpKXtcclxuICAgICAgQXBwQWN0aW9ucy5jcmVhdGUodGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIFtBcHBTdG9yZSwgU25hcHNob3RTdG9yZV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWxsRGF0YTogQXBwU3RvcmUuZ2V0U3RhdGUoKS5kYXRhLFxyXG4gICAgICBhcmVBbGxDb21wbGV0ZTogQXBwU3RvcmUuYXJlQWxsQ29tcGxldGUoKSxcclxuICAgICAgc25hcHNob3RzOiBTbmFwc2hvdFN0b3JlLmdldFN0YXRlKCkuc25hcHNob3RzXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbnRvZG9TZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXModG9kb1NlY3Rpb24pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbi5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuLy8gRkxVWFxyXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XHJcbiAgcmVxdWlyZSgnLi9fVG9kb0l0ZW0uc2NzcycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcclxuICAgICAgdG9kbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciB0b2RvID0gdGhpcy5wcm9wcy50b2RvO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9e2N4KHtcclxuICAgICAgICAgICdjb21wbGV0ZWQnOiB0b2RvLmNvbXBsZXRlLFxyXG4gICAgICAgICAgJ2VkaXRpbmcnOiB0aGlzLnN0YXRlLmlzRWRpdGluZ1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RvZG8uY29tcGxldGV9IG9uQ2hhbmdlPXt0aGlzLl9vblRvZ2dsZUNvbXBsZXRlLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgPGxhYmVsPnt0b2RvLnRleHR9PC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlc3Ryb3lcIiBvbkNsaWNrPXt0aGlzLl9vbkRlc3Ryb3lDbGljay5iaW5kKHRoaXMpfT4mIzEwMDA2OzwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblRvZ2dsZUNvbXBsZXRlKCkge1xyXG4gICAgQXBwQWN0aW9ucy50b2dnbGVDb21wbGV0ZSh0aGlzLnByb3BzLnRvZG8uaWQpO1xyXG4gIH1cclxuXHJcbiAgX29uRGVzdHJveUNsaWNrKCkge1xyXG4gICAgQXBwQWN0aW9ucy5kZXN0cm95KHRoaXMucHJvcHMudG9kby5pZCk7XHJcbiAgfVxyXG59XHJcblxyXG5Ub2RvSXRlbS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb0l0ZW0nO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvSXRlbS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ub2RvSXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9fVG9kb0l0ZW0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi50b2RvIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LnRvZG8tc25hcHNob3Qge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5idXR0b24uZGVzdHJveSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0JGQ0FEMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4ICMyYThiY2M7IH1cXG5cXG4uYnV0dG9uLmRlc3Ryb3k6YWN0aXZlIHtcXG4gIHRvcDogMXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG5saS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcclxuXHJcbmNvbnN0IEVOVEVSX0tFWV9DT0RFID0gMTM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgb25TYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX0gLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX3NhdmUuYmluZCh0aGlzKX0+QUREPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9zYXZlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vblNhdmUodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZSgvKm9iamVjdCovIGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcclxuICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuVG9kb1RleHRJbnB1dC5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1RleHRJbnB1dCc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9UZXh0SW5wdXQuanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBTbmFwc2hvdEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMnO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBUb2RvU25hcHNob3RzSXRlbSBmcm9tICcuL1RvZG9TbmFwc2hvdHNJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TbmFwc2hvdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzbmFwc2hvdHM6IHRoaXMucHJvcHMuc25hcHNob3RzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGFsbFNuYXBzID0gdGhpcy5zdGF0ZS5zbmFwc2hvdHMsXHJcbiAgICAgICAgc25hcHNob3RzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFNuYXBzKSB7XHJcbiAgICAgIHNuYXBzaG90cy5wdXNoKDxUb2RvU25hcHNob3RzSXRlbSBrZXk9e2tleX0gc25hcHNob3Q9e2FsbFNuYXBzW2tleV19IC8+KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1zbmFwc2hvdCc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PlRBS0UgU05BUFNIT1Q8L2J1dHRvbj5cclxuICAgICAgICA8dWwgaWQ9J3RvZG8tc25hcHNob3QtbGlzdCc+e3NuYXBzaG90c308L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DbGljaygpIHtcclxuICAgIFNuYXBzaG90QWN0aW9ucy50YWtlU25hcHNob3QoKTtcclxuICB9XHJcbn1cclxuXHJcblRvZG9TbmFwc2hvdHMucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9TbmFwc2hvdHMnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzLmpzXG4gKiovIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5cclxuY2xhc3MgU25hcHNob3RBY3Rpb25zIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxyXG4gICAgICAnZGVzdHJveVNuYXBzaG90JyxcclxuICAgICAgJ2Jvb3RzdHJhcFNuYXBzaG90JyxcclxuICAgICAgJ3Rha2VTbmFwc2hvdCdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFsdC5jcmVhdGVBY3Rpb25zKFNuYXBzaG90QWN0aW9ucyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L2FwcC9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IFNuYXBzaG90QWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucyc7XHJcblxyXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcclxuICByZXF1aXJlKCcuL19Ub2RvSXRlbS5zY3NzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TbmFwc2hvdHNJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xyXG4gICAgICBzbmFwc2hvdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIHRvZG8gPSB0aGlzLnByb3BzLnNuYXBzaG90O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgIDxsYWJlbD48YSBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9ib290c3RyYXBTbmFwc2hvdC5iaW5kKHRoaXMpfT57dG9kby5pZH08L2E+PC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGVzdHJveScgb25DbGljaz17dGhpcy5fb25EZXN0cm95Q2xpY2suYmluZCh0aGlzKX0+JiMxMDAwNjs8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfYm9vdHN0cmFwU25hcHNob3QoKSB7XHJcbiAgICBTbmFwc2hvdEFjdGlvbnMuYm9vdHN0cmFwU25hcHNob3QodGhpcy5wcm9wcy5zbmFwc2hvdC5pZCk7XHJcbiAgfVxyXG5cclxuICBfb25EZXN0cm95Q2xpY2soKSB7XHJcbiAgICBTbmFwc2hvdEFjdGlvbnMuZGVzdHJveVNuYXBzaG90KHRoaXMucHJvcHMuc25hcHNob3QuaWQpO1xyXG4gIH1cclxufVxyXG5cclxuVG9kb1NuYXBzaG90c0l0ZW0ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9TbmFwc2hvdHNJdGVtJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L34vZXNsaW50LWxvYWRlciFDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3QvYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NuYXBzaG90c0l0ZW0uanNcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vLyBGTFVYXHJcbmltcG9ydCBTbmFwc2hvdEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMnO1xyXG5cclxuLy8gREVQRU5ERU5DWVxyXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbi8vIHdlYnBhY2sgaG90IHJlbG9hZFxyXG5pbXBvcnQgbWFrZUhvdCBmcm9tICdhbHQvdXRpbHMvbWFrZUhvdCc7XHJcblxyXG5sZXQgc25hcHNob3RTdG9yZSA9IG1ha2VIb3QoYWx0LCBjbGFzcyBTbmFwc2hvdFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoU25hcHNob3RBY3Rpb25zKTtcclxuICAgIHRoaXMuc25hcHNob3RzID0gW107XHJcbiAgfVxyXG5cclxuICBvbkJvb3RzdHJhcFNuYXBzaG90KGlkKSB7XHJcbiAgICB2YXIgZWx0ID0gXy5maW5kKHRoaXMuc25hcHNob3RzLCAoc25hcCkgPT4ge1xyXG4gICAgICByZXR1cm4gc25hcC5pZCA9PT0gaWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZWx0KSB7XHJcbiAgICAgIC8vIFRPRE9cclxuICAgICAgLy8gYWx0LnByZXBhcmUoQXBwU3RvcilcclxuICAgICAgYWx0LmJvb3RzdHJhcChlbHQuZGF0YSk7XHJcbiAgICAgIC8vIGFsdC5yb2xsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25UYWtlU25hcHNob3QoKSB7XHJcbiAgICB2YXIgc25hcHNob3QgPSB7XHJcbiAgICAgIGlkOiAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpKS50b1N0cmluZygzNiksXHJcbiAgICAgIGRhdGE6IGFsdC50YWtlU25hcHNob3QoJ0FwcFN0b3JlJylcclxuICAgIH07XHJcbiAgICB0aGlzLnNuYXBzaG90cy5wdXNoKHNuYXBzaG90KTtcclxuICB9XHJcblxyXG4gIG9uRGVzdHJveVNuYXBzaG90KGlkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAvL3RoaXMuc25hcHNob3RzXHJcbiAgfVxyXG59LCAnU25hcHNob3RTdG9yZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzbmFwc2hvdFN0b3JlO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9KVUwvREVWL2dpdGh1Yi93ZWItcmVhY3Qvfi9lc2xpbnQtbG9hZGVyIUM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9hcHAvc3RvcmVzL1NuYXBzaG90U3RvcmUuanNcbiAqKi8iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbi8qZXNsaW50LWRpc2FibGUgbmV3LWNhcCovXHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG4vKmVzbGludC1lbmFibGUgbmV3LWNhcCovXHJcblxyXG5sZXQgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xyXG5cclxucm91dGVyLnVzZSgnL2FwaS8qJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgYXBpLnRvZG8ocmVxLCByZXMsIG5leHQpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXHJcbi8vXHJcbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICBtb2R1bGUuaG90LmFjY2VwdChbJy4uL2FwaS9hcGknXSwgKCkgPT4ge1xyXG4gICAgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xyXG4gIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9yb3V0ZXMvYXBpLmpzXG4gKiovIiwibGV0IGFwaSA9IHtcclxuICB0b2RvOiAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAvLyBzaW1wbGUgYXBpIGZldGNoIGV4YW1wbGUsIG5vIG93biBEQiBoZXJlIHNvIGV4dGVybmFsIGNhbGwgaXMgbWFkZS5cclxuXHJcbiAgICAgIC8vIGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViXHJcbiAgICAgLyogZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGpzb24pO1xyXG4gICAgICB9KTtcclxuICAgICAgKi9cclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe3Rlc3Q6ICd0ZXN0J30pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIG5leHQoZXJyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG90aGVydG9kbzogKCkgPT4ge1xyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L0pVTC9ERVYvZ2l0aHViL3dlYi1yZWFjdC9+L2VzbGludC1sb2FkZXIhQzovSlVML0RFVi9naXRodWIvd2ViLXJlYWN0L3NlcnZlci9hcGkvYXBpLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==