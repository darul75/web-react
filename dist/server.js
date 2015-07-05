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

	/* WEBPACK VAR INJECTION */(function(__dirname) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	var apiRoutes = __webpack_require__(74);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "server.js" + ": " + err.message); } }); } } })(); }
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "renderer.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _appAlt = __webpack_require__(50);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "renderer.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _componentsNotFoundSectionNotFoundSection = __webpack_require__(62);
	
	var _componentsNotFoundSectionNotFoundSection2 = _interopRequireDefault(_componentsNotFoundSectionNotFoundSection);
	
	var _componentsTodoSectionTodoSection = __webpack_require__(63);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HtmlHeaderTags.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.js" + ": " + err.message); } }); } } })(); }

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
	exports.push([module.id, "body {\n  width: 750px;\n  margin: auto;\n  font: 100% Helvetica, sans-serif;\n  color: #aaa; }\n\nh1, h2, h3 {\n  margin-top: 24px;\n  margin-bottom: 12px; }\n\ndiv.main-content {\n  -webkit-padding-start: 40px; }\n\nbutton {\n  margin-right: 5px;\n  font-size: 12px;\n  color: white;\n  text-align: center;\n  background: #3498db;\n  border: 0;\n  cursor: pointer; }\n\nbutton:focus {\n  outline: none;\n  border-color: #53C1DE;\n  box-shadow: 0 0 10px #53C1DE; }\n\ninput {\n  height: 20px;\n  border: 1px;\n  padding: 0px 10px; }\n\ninput[type='checkbox'] {\n  position: relative;\n  top: 3px; }\n\ninput:focus {\n  outline: none;\n  border-color: #53C1DE;\n  box-shadow: 0 0 10px #53C1DE; }\n\nlabel {\n  line-height: 25px; }\n", ""]);

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Contact.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _storesAppStoreDepending = __webpack_require__(55);
	
	var _storesAppStoreDepending2 = _interopRequireDefault(_storesAppStoreDepending);
	
	var _HomeSectionActions = __webpack_require__(56);
	
	var _HomeSectionActions2 = _interopRequireDefault(_HomeSectionActions);
	
	var _altUtilsConnectToStores = __webpack_require__(46);
	
	var _altUtilsConnectToStores2 = _interopRequireDefault(_altUtilsConnectToStores);
	
	// COMPONENT
	
	var _HomeSectionSubPartOne = __webpack_require__(57);
	
	var _HomeSectionSubPartOne2 = _interopRequireDefault(_HomeSectionSubPartOne);
	
	var _HomeSectionSubPartTwo = __webpack_require__(59);
	
	var _HomeSectionSubPartTwo2 = _interopRequireDefault(_HomeSectionSubPartTwo);
	
	if (process.env.BROWSER) {
	  __webpack_require__(60);
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSection.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _immutable = __webpack_require__(52);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(49);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(50);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _altUtilsImmutableUtil = __webpack_require__(53);
	
	var _altUtilsImmutableUtil2 = _interopRequireDefault(_altUtilsImmutableUtil);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(54);
	
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
	    key: 'onToggleCompleteAll',
	    value: function onToggleCompleteAll() {}
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
	
	/*var complete = !todoStore.areAllComplete();
	this.updateAll({ complete });*/

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(50);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var AppActions = function AppActions() {
	  _classCallCheck(this, AppActions);
	
	  this.generateActions('create', 'fetch', 'remove', 'removeAll', 'updateComplete', 'updateCompleteAll', 'updateText');
	};
	
	module.exports = _alt2['default'].createActions(AppActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alt = __webpack_require__(51);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	// create alt instance
	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("alt");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("immutable");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _immutable = __webpack_require__(52);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	function immutable(StoreModel) {
	  StoreModel.config = {
	    stateKey: 'state',
	
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
/* 54 */
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _immutable = __webpack_require__(52);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(49);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(50);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _altUtilsImmutableUtil = __webpack_require__(53);
	
	var _altUtilsImmutableUtil2 = _interopRequireDefault(_altUtilsImmutableUtil);
	
	var _AppStore = __webpack_require__(48);
	
	var _AppStore2 = _interopRequireDefault(_AppStore);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(54);
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStoreDepending.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _actionsAppActions = __webpack_require__(49);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _marked = __webpack_require__(58);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(49);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionSubPartOne.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("marked");

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _marked = __webpack_require__(58);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(49);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionSubPartTwo.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(61);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "div.home-section-actions {\n  padding: 10px;\n  margin: 10px 0;\n  background-color: #6DF6FF;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-one {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-two {\n  padding: 10px;\n  background-color: #8EE7FD;\n  border: 1px #eee solid; }\n", ""]);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NotFoundSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	// COMPONENT
	
	var _TodoItem = __webpack_require__(65);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	var _TodoTextInput = __webpack_require__(69);
	
	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);
	
	var _TodoSnapshots = __webpack_require__(70);
	
	var _TodoSnapshots2 = _interopRequireDefault(_TodoSnapshots);
	
	// FLUX
	
	var _actionsAppActions = __webpack_require__(49);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _storesAppStore = __webpack_require__(48);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _storesSnapshotStore = __webpack_require__(73);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("classnames");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _actionsAppActions = __webpack_require__(49);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	// COMPONENT
	
	var _TodoTextInputEdit = __webpack_require__(66);
	
	var _TodoTextInputEdit2 = _interopRequireDefault(_TodoTextInputEdit);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(67);
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoItem.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	        this._update();
	      }
	    }
	  }]);
	
	  return TodoTextInputEdit;
	})(_react2['default'].Component);
	
	exports['default'] = TodoTextInputEdit;
	
	TodoTextInputEdit.prototype.displayName = 'TodoTextInputEdit';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoTextInputEdit.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(68);
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, "div.todo {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n  div.todo div.inline {\n    display: inline-flex; }\n  div.todo label {\n    margin-right: 5px;\n    cursor: pointer; }\n  div.todo input[type='checkbox'] {\n    margin-right: 10px;\n    cursor: pointer; }\n\ndiv.todo-snapshot {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\nbutton.destroy {\n  top: 6px;\n  border-radius: 50%;\n  margin-left: 5px;\n  height: 15px;\n  padding: 3px;\n  margin-top: 0;\n  line-height: 10px;\n  border: 0;\n  cursor: pointer; }\n\n.button.destroy:active {\n  top: 1px;\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\nli.completed label {\n  text-decoration: line-through; }\n\n.hidden {\n  display: none; }\n", ""]);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	          { onClick: this._save.bind(this), title: 'add task' },
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoTextInput.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _actionsSnapshotActions = __webpack_require__(71);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	// COMPONENT
	
	var _TodoSnapshotsItem = __webpack_require__(72);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSnapshots.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(50);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var SnapshotActions = function SnapshotActions() {
	  _classCallCheck(this, SnapshotActions);
	
	  this.generateActions('removeSnapshot', 'bootstrapSnapshot', 'takeSnapshot');
	};
	
	module.exports = _alt2['default'].createActions(SnapshotActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var _actionsSnapshotActions = __webpack_require__(71);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(67);
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
	            { className: 'destroy', onClick: this._onDestroyClick.bind(this) },
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
	    key: '_onDestroyClick',
	    value: function _onDestroyClick() {
	      _actionsSnapshotActions2['default'].removeSnapshot(this.props.snapshot.id);
	    }
	  }]);
	
	  return TodoSnapshotsItem;
	})(_react2['default'].Component);
	
	exports['default'] = TodoSnapshotsItem;
	
	TodoSnapshotsItem.prototype.displayName = 'TodoSnapshotsItem';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSnapshotsItem.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// LIBRARY
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _immutable = __webpack_require__(52);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	// FLUX
	
	var _actionsSnapshotActions = __webpack_require__(71);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	// DEPENDENCY
	
	var _alt = __webpack_require__(50);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _altUtilsImmutableUtil = __webpack_require__(53);
	
	var _altUtilsImmutableUtil2 = _interopRequireDefault(_altUtilsImmutableUtil);
	
	// webpack hot reload
	
	var _altUtilsMakeHot = __webpack_require__(54);
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	var api = __webpack_require__(75);
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTE1NDc5MjZlZTU0NjQ2MGFiZDUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29uZmlnLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nIF5cXC5cXC8uKlxcLnN2ZyQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9iYWJlbC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9jc3MtMy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9leHByZXNzLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2ZsdXguc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvaGVyb2t1LnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2h0bWwtNS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9qYXZhc2NyaXB0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2xvZGFzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9tb2NoYS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9ub2RlanMuc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvcmVhY3Quc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvd2VicGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzcz8wZDMzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzPzQ1NzciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzPzJhM2QiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zYXNzP2VmYWMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2Zhdmljb24uaWNvIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzLmpzIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FsdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW11dGFibGVcIiIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9JbW11dGFibGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL21ha2VIb3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3Jlcy9BcHBTdG9yZURlcGVuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbkFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25TdWJQYXJ0T25lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzcz80MDBmIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9JdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9UZXh0SW5wdXRFZGl0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzPzlmYmMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmVzL1NuYXBzaG90U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwaS9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNDckNpQixDQUFNOzs7O2lDQUNOLENBQU07Ozs7OztvQ0FHSCxDQUFTOzs7O3lDQUNULENBQWU7Ozs7O0FBR25DLEtBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNO0tBQzdDLFVBQVUsR0FBRyxPQUFPLEtBQUssS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7O0FBRW5ELEtBQUksR0FBRyxHQUFHLDJCQUFTLENBQUM7O0FBRXBCLElBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzFDLElBQUcsQ0FBQyxHQUFHLENBQUMsOEJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLElBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQVEsa0JBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztBQU9wRSxLQUFJLFFBQVEsR0FBRyxtQkFBTyxDQUFDLENBQW1CLENBQUMsQ0FBQzs7QUFFNUMsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxFQUFjLENBQUMsQ0FBQzs7Ozs7QUFLeEMsU0FBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7QUFLdkIsSUFBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQixJQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFekIsbUJBQUssWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFlBQU07QUFDbkQsVUFBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDcEUsQ0FBQyxDQUFDOzs7OztBQUtILEtBQUcsS0FBVSxFQUFFOztBQUViLFNBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDLEVBQUUsWUFBTTtBQUM3RCxjQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLFFBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkIsYUFBUSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3hDLGFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDcERMLDJDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7Ozs7O0FDQUEsS0FBSSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyxDQUFtQixDQUFDLENBQUM7O0FBRTVDLEtBQUksT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFcEIsS0FBSSxjQUFjLEdBQUc7QUFDbkIsT0FBSSxFQUFFLGNBQUMsSUFBSSxFQUFLO0FBQ2QsWUFBTyxHQUFHLElBQUksQ0FBQztBQUNmLGFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckI7QUFDRCxTQUFNLEVBQUUsZ0JBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUs7QUFDMUIsYUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDO0VBQ0YsQ0FBQzs7Ozs7QUFLRixLQUFHLEtBQVUsRUFBRTtBQUNiLFNBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxZQUFNO0FBQzdDLGFBQVEsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN4QyxhQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNKOztzQkFFYyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkN2QmQsRUFBSTs7Ozs7O21DQUdMLENBQVE7Ozs7d0NBQ0gsRUFBYzs7OztnQ0FDakIsRUFBSzs7OztrQ0FDSCxDQUFPOzs7O3dDQUNOLEVBQWM7Ozs7OztzQ0FHZCxFQUFrQjs7OzttQ0FDckIsRUFBZTs7OztBQUUvQixLQUFJLElBQUksR0FBRyxFQUFFLENBQUM7O0FBRWQsS0FBSSxRQUFRLEdBQUc7QUFDYixPQUFJLEVBQUUsY0FBQyxJQUFJLEVBQUs7QUFDZCxTQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssR0FDbkIsZ0JBQUcsWUFBWSxDQUFDLHlCQUF5QixFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLEdBRTlELGdCQUFHLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ2pFO0FBQ0QsU0FBTSxFQUFFLGdCQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQzFCLFNBQUksTUFBTSxHQUFHLEVBQUU7U0FDYixHQUFHLEdBQUcsc0JBQVMsQ0FBQzs7QUFFbEIsU0FBTSxrQkFBa0IsR0FBRztBQUN6QixpQkFBVSxFQUFFO0FBQ1Ysd0JBQWUsRUFBRSxFQUFFO0FBQ25CLGVBQU0sRUFBRTtBQUNOLHFCQUFVLEVBQUU7QUFDVixpQkFBSSxFQUFFLFVBQVU7QUFDaEIsdUJBQVUsRUFBRSxLQUFLO0FBQ2pCLG1CQUFNLEVBQUUsUUFBUTtZQUNqQjtVQUNGO1FBQ0Y7TUFDRixDQUFDOzs7Ozs7Ozs7QUFTRix5QkFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7O0FBRXJFLFNBQUk7QUFDRixnQ0FBTyxHQUFHLHlCQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFLOztBQUUvQyxhQUFJLE9BQU8sR0FBRyxtQkFBTSxjQUFjLENBQUMsbUJBQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDakUsWUFBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsb0JBQUksS0FBSyxFQUFFLENBQUMsQ0FBQzs7QUFFOUIsWUFBRyxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQztBQUM1QyxhQUFJLFFBQVEsR0FBRyxvQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDOztBQUV4RCxhQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDMUIsY0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUNqQjs7O0FBR0QsYUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDOztBQUVqQyxhQUFJLElBQUksR0FBRyx5QkFBTyxNQUFNLEVBQUUsQ0FBQztBQUMzQixlQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7O0FBRW5JLFlBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDO01BQ0osQ0FDRCxPQUFPLENBQUMsRUFBRTtBQUNSLGNBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hCO0lBQ0Y7RUFDRixDQUFDOztzQkFFYSxRQUFROzs7Ozs7Ozs7QUM3RXZCLG1DOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxnQzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NFa0IsQ0FBTzs7Ozs7O3dDQUV3QixFQUFjOzs7OzZDQUd2QyxFQUFzQjs7Ozs0REFDMUIsRUFBcUM7Ozs7NkRBQ2pDLEVBQXNDOzs7O3FFQUNsQyxFQUE4Qzs7Ozs2REFDbEQsRUFBc0M7Ozs7c0JBRzVEO2dCQVZNLEtBQUs7S0FVSixJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTywrQkFBYztHQUM5Qyw4Q0FYSSxLQUFLLElBV0YsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLE9BQU8sK0NBQWMsR0FBRTtHQUN2RCw4Q0FaSSxLQUFLLElBWUYsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLE9BQU8sK0NBQWMsR0FBRTtHQUN2RCw4Q0FiSSxLQUFLLElBYUYsSUFBSSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sOENBQVUsR0FBRTtHQUN6RCw4Q0FkVyxZQUFZLElBY1QsT0FBTywrQ0FBYyxHQUFHO0dBQ3RDLDhDQWZ5QixhQUFhLElBZXZCLE9BQU8sdURBQWtCLEdBQUc7RUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDbkJRLENBQU87Ozs7d0NBQ0ksRUFBYzs7Ozt5Q0FHeEIsRUFBa0I7Ozs7eUNBQ2xCLEVBQWtCOzs7O21EQUNWLEVBQTRCOzs7O0FBRXZELEtBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDdkIsc0JBQU8sQ0FBQyxFQUFhLENBQUMsQ0FBQztBQUN2QixzQkFBTyxDQUFDLEVBQWEsQ0FBQyxDQUFDO0FBQ3ZCLHNCQUFPLENBQUMsRUFBZ0QsQ0FBQyxDQUFDO0VBQzNEOztLQUVvQixHQUFHO0FBQ1gsWUFEUSxHQUFHLEdBQ1I7MkJBREssR0FBRzs7QUFFcEIsZ0NBRmlCLEdBQUcsNkNBRVo7SUFDVDs7YUFIa0IsR0FBRzs7Z0JBQUgsR0FBRzs7WUFLaEIsa0JBQUc7QUFDUCxjQUNFOzs7U0FDRSwyRUFBa0I7U0FDbEIsaUVBQVU7U0FDVjs7YUFBSyxTQUFTLEVBQUMsY0FBYztXQUMzQiw4Q0F4QkQsWUFBWSxPQXdCSztVQUNaO1NBQ04saUVBQVU7UUFDTixDQUNOO01BQ0g7OztVQWhCa0IsR0FBRztJQUFTLG1CQUFNLFNBQVM7O3NCQUEzQixHQUFHOztBQW1CeEIsSUFBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2pDaEIsQ0FBTzs7Ozt3Q0FDTixFQUFjOzs7OztBQUdqQyxLQUFNLEtBQUssR0FBRyxtQkFBTyxDQUFDLEVBQTZCLENBQUMsQ0FBQyxNQUFNLENBQUM7O0tBRXZDLGNBQWM7QUFDdEIsWUFEUSxjQUFjLEdBQ25COzJCQURLLGNBQWM7O0FBRS9CLGdDQUZpQixjQUFjLDZDQUV2QjtJQUNUOzthQUhrQixjQUFjOztnQkFBZCxjQUFjOztZQUszQixrQkFBRzs7QUFFUCxjQUNFOzs7U0FDRTtBQUNFLGdCQUFLLEVBQUUsS0FBSyxDQUFDLEtBQU07QUFDakIsZUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFLO0FBQ2pCLGVBQUksRUFBRSxLQUFLLENBQUMsSUFBSztXQUNuQjtRQUNFLENBQ047TUFDSDs7O1VBaEJrQixjQUFjO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXRDLGNBQWM7O0FBbUJuQyxlQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FDMUJ4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDekJrQixDQUFPOzs7O3dDQUNKLEVBQWM7O0FBRW5DLEtBQU0sU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFM0ksS0FBSSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUV6QixVQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBSztBQUM5QixrQkFBZSxDQUFDLElBQUksQ0FBQywwQ0FBSyxHQUFHLEVBQUUsNEJBQWdDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBRSxFQUFDLEdBQUcsRUFBRSxHQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxHQUFFLENBQUMsQ0FBQztFQUN0SCxDQUFDLENBQUM7O0FBRUgsS0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtBQUN2QixzQkFBTyxDQUFDLEVBQWdCLENBQUMsQ0FBQztFQUMzQjs7S0FFb0IsTUFBTTtBQUNkLFlBRFEsTUFBTSxHQUNYOzJCQURLLE1BQU07O0FBRXZCLGdDQUZpQixNQUFNLDZDQUVmO0lBQ1Q7O2FBSGtCLE1BQU07O2dCQUFOLE1BQU07O1lBS25CLGtCQUFHO0FBQ1AsY0FDRTs7V0FBSyxTQUFTLEVBQUMsUUFBUTtTQUNyQjs7O1dBQU0sZUFBZTtVQUFPO1NBQ2hDOzs7V0FDQzs7O2FBQ087OztlQUFJOzhCQXpCUCxJQUFJO21CQXlCUyxFQUFFLEVBQUMsS0FBSzs7Z0JBQVk7Y0FBSzthQUNuQzs7O2VBQUk7OEJBMUJQLElBQUk7bUJBMEJTLEVBQUUsRUFBQyxNQUFNOztnQkFBWTtjQUFLO2FBQ3BDOzs7ZUFBSTs4QkEzQlAsSUFBSTttQkEyQlMsRUFBRSxFQUFDLFNBQVM7O2dCQUFlO2NBQUs7WUFDNUM7VUFDRztRQUNELENBQ047TUFDSDs7O1VBbEJrQixNQUFNO0lBQVMsbUJBQU0sU0FBUzs7c0JBQTlCLE1BQU07O0FBcUIzQixPQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Ozs7Ozs7OztBQ3JDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQSx1RDs7Ozs7O0FDQUEsc0NBQXFDLHd4Rzs7Ozs7O0FDQXJDLHVEOzs7Ozs7QUNBQSxzQ0FBcUMsd25GOzs7Ozs7QUNBckMsc0NBQXFDLHc1TTs7Ozs7O0FDQXJDLHNDQUFxQyw0ckg7Ozs7OztBQ0FyQyxzQ0FBcUMsZ3ZFOzs7Ozs7QUNBckMsc0NBQXFDLGdnRjs7Ozs7O0FDQXJDLHVEOzs7Ozs7QUNBQSxzQ0FBcUMsNHZaOzs7Ozs7QUNBckMsc0NBQXFDLHc3WDs7Ozs7O0FDQXJDLHNDQUFxQyw0eUQ7Ozs7OztBQ0FyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDakJBO0FBQ0EsdUNBQXNDLGdCQUFnQixzQkFBc0IsdUJBQXVCLEVBQUUsWUFBWSx1QkFBdUIscUNBQXFDLEVBQUUsUUFBUSwwQkFBMEIsRUFBRSxlQUFlLG9CQUFvQixpQkFBaUIsZ0NBQWdDLEVBQUUsVUFBVSxzQkFBc0IsOEJBQThCLDBCQUEwQixnQkFBZ0IsRUFBRSxTQUFTLG1CQUFtQixFQUFFLFU7Ozs7OztBQ0RqYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFNBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxrQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0EsaUNBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBLDhCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDeE5rQixDQUFPOzs7O0FBRXpCLEtBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDdkIsc0JBQU8sQ0FBQyxFQUFnQixDQUFDLENBQUM7RUFDM0I7O0tBRW9CLE1BQU07QUFDZCxZQURRLE1BQU0sR0FDWDsyQkFESyxNQUFNOztBQUV2QixnQ0FGaUIsTUFBTSw2Q0FFZjtJQUNUOzthQUhrQixNQUFNOztnQkFBTixNQUFNOztZQUtuQixrQkFBRztBQUNQLGNBQ0U7O1dBQUssU0FBUyxFQUFDLFFBQVE7U0FDckI7OztXQUNFLDZDQUFRLEdBQUcsRUFBQyx5RkFBeUYsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxHQUFVO1dBQ3pLLDZDQUFRLEdBQUcsRUFBQyx5RkFBeUYsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxHQUFVO1VBQ3JLO1FBQ0YsQ0FDTjtNQUNIOzs7VUFka0IsTUFBTTtJQUFTLG1CQUFNLFNBQVM7O3NCQUE5QixNQUFNOztBQWlCM0IsT0FBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDOzs7Ozs7Ozs7QUN4QnhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNqQkE7QUFDQSx1Q0FBc0MsZ0JBQWdCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHVCQUF1QixrQ0FBa0MsRUFBRSxVOzs7Ozs7QUNEN0s7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ2pCQTtBQUNBLGlDQUFnQyxpQkFBaUIsaUJBQWlCLHFDQUFxQyxnQkFBZ0IsRUFBRSxnQkFBZ0IscUJBQXFCLHdCQUF3QixFQUFFLHNCQUFzQixnQ0FBZ0MsRUFBRSxZQUFZLHNCQUFzQixvQkFBb0IsaUJBQWlCLHVCQUF1Qix3QkFBd0IsY0FBYyxvQkFBb0IsRUFBRSxrQkFBa0Isa0JBQWtCLDBCQUEwQixpQ0FBaUMsRUFBRSxXQUFXLGlCQUFpQixnQkFBZ0Isc0JBQXNCLEVBQUUsNEJBQTRCLHVCQUF1QixhQUFhLEVBQUUsaUJBQWlCLGtCQUFrQiwwQkFBMEIsaUNBQWlDLEVBQUUsV0FBVyxzQkFBc0IsRUFBRSxVOzs7Ozs7QUNEcHZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNqQkE7QUFDQSwrQkFBOEIsbUJBQW1CLEVBQUUsVTs7Ozs7O0FDRG5ELHVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0NrQixDQUFPOzs7O3dDQUNOLEVBQWM7Ozs7O0FBR2pDLEtBQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsRUFBNkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7S0FFdkMsT0FBTztBQUNmLFlBRFEsT0FBTyxHQUNaOzJCQURLLE9BQU87O0FBRXhCLGdDQUZpQixPQUFPLDZDQUVoQjtJQUNUOzthQUhrQixPQUFPOztnQkFBUCxPQUFPOztZQUtwQixrQkFBRztBQUNQLGNBQ0U7OztTQUNFOzs7O1VBQXFCO1NBQ3JCLDZEQUFRLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBTSxFQUFDLGFBQWEsRUFBQyxtQkFBbUIsR0FBRztTQUNoRTs7OztXQUFxQjs7ZUFBRyxJQUFJLEVBQUMsa0JBQWtCOztZQUFTO1VBQUk7UUFDeEQsQ0FDTjtNQUNIOzs7VUFia0IsT0FBTztJQUFTLG1CQUFNLFNBQVM7O3NCQUEvQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ05WLENBQU87Ozs7OzsyQ0FHSixFQUF1Qjs7OztvREFDZCxFQUFnQzs7OzsrQ0FDL0IsRUFBc0I7Ozs7b0RBQ3pCLEVBQTJCOzs7Ozs7a0RBR3JCLEVBQXlCOzs7O2tEQUN6QixFQUF5Qjs7OztBQUUzRCxLQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ3ZCLHNCQUFPLENBQUMsRUFBcUIsQ0FBQyxDQUFDO0VBQ2hDOztBQUVELEtBQUksV0FBVztBQUNGLFlBRFcsV0FBVyxHQUNuQjsyQkFEUSxXQUFXOztBQUUvQixnQ0FGb0IsV0FBVyw2Q0FFdkI7SUFDVDs7YUFIcUIsV0FBVzs7Z0JBQVgsV0FBVzs7WUFLM0Isa0JBQUc7O0FBRVAsV0FBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7O0FBRWxELGNBQ0U7OztTQUNFOzs7O1VBQWtCO1NBQ2xCLHVFQUFzQjtTQUN0Qix1RUFBdUIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFRLEdBQUc7U0FDdEQsdUVBQXVCLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBUSxHQUFFO1NBQ3JELHVFQUF1QixPQUFPLEVBQUUsVUFBVSxDQUFDLGdCQUFpQixHQUFFO1FBQzFELENBQ047TUFDSDs7O1lBRWUscUJBQUc7QUFDakIsY0FBTyxtRUFBNkIsQ0FBQztNQUN0Qzs7O1lBRXdCLDhCQUFHO0FBQzFCLGNBQU87QUFDTCxnQkFBTyxFQUFFLDRCQUFTLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDeEQseUJBQWdCLEVBQUUscUNBQWtCLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDM0UsQ0FBQztNQUNIOzs7VUE3QnFCLFdBQVc7SUFBUyxtQkFBTSxTQUFTLENBOEIxRCxDQUFDOztBQUVGLFlBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQzs7c0JBRW5DLDBDQUFnQixXQUFXLENBQUM7Ozs7Ozs7OztBQ25EM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsbUZBQWtGO0FBQ2xGO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQzlHQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0EsdUZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDN0I2QixFQUFXOzs7Ozs7OENBR2pCLEVBQXVCOzs7Ozs7Z0NBRzlCLEVBQVE7Ozs7a0RBQ0YsRUFBeUI7Ozs7Ozs0Q0FFM0IsRUFBbUI7Ozs7QUFFdkMsS0FBSSxRQUFRLEdBQUcsb0RBQWE7QUFDZixZQUQrQixRQUFRLEdBQ3BDOzJCQUQ0QixRQUFROztBQUVoRCxTQUFJLENBQUMsV0FBVyxnQ0FBWSxDQUFDO0FBQzdCLFNBQUksQ0FBQyxLQUFLLEdBQUcsZUFkRSxHQUFHLENBY0c7QUFDbkIsb0JBQWEsRUFBRSxlQWZGLEdBQUcsQ0FlTyxFQUFFLENBQUM7QUFDMUIsV0FBSSxFQUFFLGVBaEJPLEdBQUcsQ0FnQkYsRUFBRSxDQUFDO01BQ2xCLENBQUMsQ0FBQztJQUNKOztnQkFQeUMsUUFBUTs7WUFTMUMsa0JBQUMsSUFBSSxFQUFFO0FBQ2IsV0FBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuQixXQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7QUFDZixnQkFBTyxLQUFLLENBQUM7UUFDZDs7QUFFRCxXQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0UsV0FBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxlQTNCaEMsR0FBRyxDQTJCcUM7QUFDckQsV0FBRSxFQUFFLEVBQUU7QUFDTixpQkFBUSxFQUFFLEtBQUs7QUFDZixhQUFJLEVBQUUsS0FBSztBQUNYLGFBQUksRUFBRSxJQUFJO1FBQ1gsQ0FBQyxDQUFDLENBQUM7O0FBRUosV0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNoRDs7O1lBRU8sa0JBQUMsRUFBRSxFQUFFO0FBQ1gsV0FBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsRCxXQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2hEOzs7WUFFVSx1QkFBRztBQUNaLFdBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGVBM0N0QixHQUFHLENBMkMyQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEQ7OztZQUVlLDBCQUFDLENBQUMsRUFBRTtXQUNaLEVBQUUsR0FBZSxDQUFDLENBQWxCLEVBQUU7V0FBRSxRQUFRLEdBQUssQ0FBQyxDQUFkLFFBQVE7O0FBQ2xCLFdBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFSLFFBQVEsRUFBRSxDQUFDLENBQUM7TUFDL0I7OztZQUVrQiw2QkFBQyxDQUFDLEVBQUU7V0FDZixTQUFTLEdBQUssQ0FBQyxDQUFmLFNBQVM7OztBQUVmLFdBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzs7Ozs7QUFDbEQsOEJBQWlCLGFBQWEsOEhBQUM7ZUFBdkIsS0FBSzs7QUFDWCxlQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1VBQzNDOzs7Ozs7Ozs7Ozs7Ozs7TUFDRjs7O1lBRVcsc0JBQUMsQ0FBQyxFQUFFO1dBQ1IsRUFBRSxHQUFXLENBQUMsQ0FBZCxFQUFFO1dBQUUsSUFBSSxHQUFLLENBQUMsQ0FBVixJQUFJOztBQUNkLFdBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUMvQixXQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7QUFDZixnQkFBTyxLQUFLLENBQUM7UUFDZDtBQUNELFdBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBRSxDQUFDLENBQUM7TUFDM0I7OztZQUVLLGdCQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7O0FBRWxCLFdBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBQyxJQUFJLEVBQUs7QUFDMUQsYUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUMxQixlQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7VUFDcEMsQ0FBQyxDQUFDO0FBQ0gsZ0JBQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDO0FBQ0gsV0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNoRDs7O1lBRVEsbUJBQUMsT0FBTyxFQUFFO0FBQ2pCLFlBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUN4QixhQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQjtNQUNGOzs7WUFFTSxtQkFBRzs7O0FBQ1IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsdUJBQVUsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLFlBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUN6QyxJQUFJLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDbEIsZ0JBQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDaEIsZUFBSyxRQUFRLENBQUMsTUFBSyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx1QkFBVSxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsQ0FDRixDQUFDO01BQ0g7OztZQUVrQiwrQkFBRyxFQUdyQjs7O1lBRWlCLDhCQUFHO0FBQ25CLFlBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUN4QixhQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO0FBQzFCLGVBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDcEI7UUFDRjtNQUNGOzs7WUFFb0IsMEJBQUc7dUJBQ1AsSUFBSSxDQUFDLFFBQVEsRUFBRTs7V0FBeEIsSUFBSSxhQUFKLElBQUk7O0FBQ1YsWUFBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDbkIsYUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDdEIsa0JBQU8sS0FBSyxDQUFDO1VBQ2Q7UUFDRjtBQUNELGNBQU8sSUFBSSxDQUFDO01BQ2I7OztVQTVHeUMsUUFBUTtNQTZHbEQsRUFBRSxVQUFVLENBQUMsQ0FBQzs7QUFFaEIsT0FBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NDM0hWLEVBQVE7Ozs7S0FFbEIsVUFBVSxHQUNILFNBRFAsVUFBVSxHQUNBO3lCQURWLFVBQVU7O0FBRVosT0FBSSxDQUFDLGVBQWUsQ0FDbEIsUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsWUFBWSxDQUNiLENBQUM7RUFDSDs7QUFHSCxPQUFNLENBQUMsT0FBTyxHQUFHLGlCQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0NmOUIsRUFBSzs7Ozs7c0JBR04sc0JBQVM7Ozs7Ozs7OztBQ0p4QixpQzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0NsQjZCLEVBQVc7Ozs7Ozs4Q0FHakIsRUFBdUI7Ozs7OztnQ0FHOUIsRUFBUTs7OztrREFDRixFQUF5Qjs7OztxQ0FDMUIsRUFBWTs7Ozs7OzRDQUViLEVBQW1COzs7O0FBRXZDLEtBQUksY0FBYyxHQUFHLG9EQUFhO0FBQ3JCLFlBRHFDLGNBQWMsR0FDaEQ7MkJBRGtDLGNBQWM7O0FBRTVELFNBQUksQ0FBQyxXQUFXLGdDQUFZLENBQUM7QUFDN0IsU0FBSSxDQUFDLEtBQUssR0FBRyxlQWZFLEdBQUcsQ0FlRztBQUNuQixvQkFBYSxFQUFFLGVBaEJGLEdBQUcsQ0FnQk8sRUFBRSxDQUFDO01BQzNCLENBQUMsQ0FBQztJQUNKOztnQkFOK0MsY0FBYzs7WUFRdkQsbUJBQUc7QUFDUixXQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsc0JBQVMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUN2QyxXQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSx1QkFBVSxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN0Rzs7O1VBWCtDLGNBQWM7TUFZOUQsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOztBQUV0QixPQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQzFCYixDQUFPOzs7Ozs7OENBR0YsRUFBMEI7Ozs7S0FFNUIsa0JBQWtCO0FBQzFCLFlBRFEsa0JBQWtCLEdBQ3ZCOzJCQURLLGtCQUFrQjs7QUFFbkMsZ0NBRmlCLGtCQUFrQiw2Q0FFM0I7SUFDVDs7YUFIa0Isa0JBQWtCOztnQkFBbEIsa0JBQWtCOztZQUsvQixrQkFBRztBQUNQLGNBQ0U7O1dBQUssU0FBUyxFQUFDLHNCQUFzQjtTQUNuQzs7YUFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFOztVQUF1QjtRQUM3RCxDQUNOO01BQ0g7OztZQUVPLG9CQUFHO0FBQ1Qsc0NBQVcsS0FBSyxFQUFFLENBQUM7TUFDcEI7OztVQWZrQixrQkFBa0I7SUFBUyxtQkFBTSxTQUFTOztzQkFBMUMsa0JBQWtCOztBQWtCdkMsbUJBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0N2QjlDLENBQU87Ozs7bUNBQ04sRUFBUTs7Ozs7OzhDQUdKLEVBQTBCOzs7O0tBRTNDLFNBQVMsc0JBQVQsU0FBUzs7S0FFTSxxQkFBcUI7QUFDN0IsWUFEUSxxQkFBcUIsR0FDMUI7MkJBREsscUJBQXFCOztBQUV0QyxnQ0FGaUIscUJBQXFCLDZDQUU5QjtBQUNSLFNBQUksQ0FBQyxVQUFVLEdBQUc7QUFDaEIsY0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtNQUNyQyxDQUFDO0lBQ0g7O2FBTmtCLHFCQUFxQjs7Z0JBQXJCLHFCQUFxQjs7WUFRbEMsa0JBQUc7QUFDUCxXQUFJLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztBQUN6QyxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUMzQixzQkFBYSxHQUFHLHlCQUFPLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDaEg7O0FBRUQsY0FDRSwwQ0FBSyxTQUFTLEVBQUMsMkJBQTJCLEVBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQU8sQ0FDbkc7TUFDSDs7O1lBRU8sb0JBQUc7QUFDVCxzQ0FBVyxLQUFLLEVBQUUsQ0FBQztNQUNwQjs7O1VBckJrQixxQkFBcUI7SUFBUyxtQkFBTSxTQUFTOztzQkFBN0MscUJBQXFCOztBQXdCMUMsc0JBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FDakN0RSxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NDa0IsQ0FBTzs7OzttQ0FDTixFQUFROzs7Ozs7OENBR0osRUFBMEI7Ozs7S0FFM0MsU0FBUyxzQkFBVCxTQUFTOztLQUVNLHFCQUFxQjtBQUM3QixZQURRLHFCQUFxQixHQUMxQjsyQkFESyxxQkFBcUI7O0FBRXRDLGdDQUZpQixxQkFBcUIsNkNBRTlCO0FBQ1IsU0FBSSxDQUFDLFVBQVUsR0FBRztBQUNoQixjQUFPLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO01BQ3JDLENBQUM7SUFDSDs7YUFOa0IscUJBQXFCOztnQkFBckIscUJBQXFCOztZQVFsQyxrQkFBRztBQUNQLFdBQUksYUFBYSxHQUFHLG9CQUFvQixDQUFDO0FBQ3pDLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQzNCLHNCQUFhLEdBQUcseUJBQU8sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNoSDs7QUFFRCxjQUNFLDBDQUFLLFNBQVMsRUFBQywyQkFBMkIsRUFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBTyxDQUNuRztNQUNIOzs7WUFFTyxvQkFBRztBQUNULHNDQUFXLEtBQUssRUFBRSxDQUFDO01BQ3BCOzs7VUFyQmtCLHFCQUFxQjtJQUFTLG1CQUFNLFNBQVM7O3NCQUE3QyxxQkFBcUI7O0FBd0IxQyxzQkFBcUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDOzs7Ozs7Ozs7QUNqQ3RFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNqQkE7QUFDQSxxREFBb0Qsa0JBQWtCLG1CQUFtQiw4QkFBOEIsMkJBQTJCLEVBQUUsbUNBQW1DLG1CQUFtQixrQkFBa0IsOEJBQThCLDJCQUEyQixFQUFFLG1DQUFtQyxrQkFBa0IsOEJBQThCLDJCQUEyQixFQUFFLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDQXJYLENBQU87Ozs7S0FFSixlQUFlO0FBQ3ZCLFlBRFEsZUFBZSxHQUNwQjsyQkFESyxlQUFlOztBQUVoQyxnQ0FGaUIsZUFBZSw2Q0FFeEI7SUFDVDs7YUFIa0IsZUFBZTs7Z0JBQWYsZUFBZTs7WUFLNUIsa0JBQUc7QUFDUCxjQUNFOzs7U0FDRTs7OztVQUF1QjtTQUN2Qjs7OztVQUFpQjtRQUNiLENBQ047TUFDSDs7O1VBWmtCLGVBQWU7SUFBUyxtQkFBTSxTQUFTOztzQkFBdkMsZUFBZTs7QUFlcEMsZ0JBQWUsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2pCeEMsQ0FBTzs7Ozt1Q0FDVixFQUFZOzs7Ozs7cUNBR04sRUFBWTs7OzswQ0FDUCxFQUFpQjs7OzswQ0FDakIsRUFBaUI7Ozs7Ozs4Q0FHcEIsRUFBMEI7Ozs7MkNBQzVCLEVBQXVCOzs7O2dEQUNsQixFQUE0Qjs7OztvREFDMUIsRUFBMkI7Ozs7QUFFdkQsS0FBSSxXQUFXO0FBQ0YsWUFEVyxXQUFXLEdBQ25COzJCQURRLFdBQVc7O0FBRS9CLGdDQUZvQixXQUFXLDZDQUV2QjtBQUNSLFNBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxnQkFBUyxFQUFFLEtBQUs7TUFDakIsQ0FBQztJQUNIOzthQU5xQixXQUFXOztnQkFBWCxXQUFXOztZQVEzQixrQkFBRzs7QUFFUCxXQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs7QUFFbEQsV0FBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU87V0FDN0IsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFZixZQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtBQUN4QixjQUFLLENBQUMsSUFBSSxDQUFDLDBEQUFVLEdBQUcsRUFBRSxHQUFJLEVBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQ7O0FBRUQsY0FDRTs7O1NBQ0U7Ozs7VUFBa0I7U0FDbEI7O2FBQUssU0FBUyxFQUFDLE1BQU07V0FDbkI7Ozs7WUFBaUQ7V0FDakQsK0RBQWUsU0FBUyxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyx5QkFBeUIsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUUsR0FBRztXQUNoSTs7ZUFBSSxFQUFFLEVBQUMsV0FBVzthQUFFLEtBQUs7WUFBTTtXQUMvQjs7ZUFBUSxTQUFTLEVBQUUsNkJBQUcsRUFBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7O1lBQTJCO1dBQ3hIOztlQUFRLFNBQVMsRUFBRSw2QkFBRyxFQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7WUFBZ0I7VUFDekc7U0FDTiwrREFBZSxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBQVUsRUFBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLE1BQU8sR0FBRTtRQUN2RSxDQUNOO01BQ0g7OztZQUVnQiw2QkFBRztBQUNsQixzQ0FBVyxTQUFTLEVBQUUsQ0FBQztNQUN4Qjs7O1lBRWdCLDZCQUFHO0FBQ2xCLFdBQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDeEMsV0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGtCQUFTLEVBQUUsU0FBUztRQUNyQixDQUFDLENBQUM7QUFDSCxzQ0FBVyxpQkFBaUIsQ0FBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO01BQ3REOzs7WUFFTSxpQkFBQyxJQUFJLEVBQUU7QUFDWixXQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQztBQUNkLHdDQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QjtNQUNGOzs7WUFFZSxxQkFBRztBQUNqQixjQUFPLCtEQUF5QixDQUFDO01BQ2xDOzs7WUFFd0IsOEJBQUc7QUFDMUIsY0FBTztBQUNMLGdCQUFPLEVBQUUsNEJBQVMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRTtBQUMvQyx1QkFBYyxFQUFFLDRCQUFTLGNBQWMsRUFBRTtBQUN6QyxrQkFBUyxFQUFFLGlDQUFjLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDL0QsQ0FBQztNQUNIOzs7VUE5RHFCLFdBQVc7SUFBUyxtQkFBTSxTQUFTLENBK0QxRCxDQUFDOztBQUVGLFlBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQzs7c0JBRW5DLDBDQUFnQixXQUFXLENBQUM7Ozs7Ozs7OztBQ2xGM0Msd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDQ2tCLENBQU87Ozs7dUNBQ1YsRUFBWTs7Ozs7OzhDQUdKLEVBQTBCOzs7Ozs7OENBR25CLEVBQXFCOzs7O0tBRTdDLFNBQVMsc0JBQVQsU0FBUzs7QUFFZixLQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ3ZCLHNCQUFPLENBQUMsRUFBa0IsQ0FBQyxDQUFDO0VBQzdCOztLQUVvQixRQUFRO0FBQ2hCLFlBRFEsUUFBUSxDQUNmLEtBQUssRUFBRTsyQkFEQSxRQUFROztBQUV6QixnQ0FGaUIsUUFBUSw2Q0FFbkIsS0FBSyxFQUFFO0FBQ2IsU0FBSSxDQUFDLFVBQVUsR0FBRztBQUNoQixXQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO01BQ2xDLENBQUM7SUFDSDs7YUFOa0IsUUFBUTs7Z0JBQVIsUUFBUTs7WUFRVCw4QkFBRztBQUNuQixXQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsaUJBQVEsRUFBRSxLQUFLO0FBQ2YsZ0JBQU8sRUFBRSxLQUFLO0FBQ2QsYUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7UUFDM0IsQ0FBQztNQUNIOzs7WUFFSyxrQkFBRztBQUNQLFdBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUUzQixjQUNFOztXQUFJLFNBQVMsRUFBRSw2QkFBRztBQUNkLHdCQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVE7QUFDMUIsc0JBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDOUIsQ0FBRTtBQUNILGNBQUcsRUFBRSxJQUFJLENBQUMsRUFBRztTQUNiOzthQUFLLFNBQVMsRUFBRSw2QkFBRyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQyxDQUFFO1dBQ2pELDRDQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFRLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFTLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUMsS0FBSyxFQUFDLGlDQUFpQyxHQUFFO1dBQzNMOztlQUFPLFNBQVMsRUFBRSw2QkFBRyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQyxDQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFDLEtBQUssRUFBQyxvQkFBb0I7YUFBRSxJQUFJLENBQUMsSUFBSTtZQUFTO1dBQzNJLG1FQUFtQixTQUFTLEVBQUUsNkJBQUcsRUFBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQyxDQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSyxHQUFHO1dBQ3ZLOztlQUFRLFNBQVMsRUFBRSw2QkFBRyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEVBQUMsS0FBSyxFQUFDLGFBQWE7O1lBQWtCO1VBQ2xKO1FBQ0gsQ0FDTDtNQUNIOzs7WUFFVyx3QkFBRztBQUNiLFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixnQkFBTyxFQUFFLElBQUk7UUFDZCxDQUFDLENBQUM7TUFDSjs7O1lBRWEsMEJBQUc7QUFDZixzQ0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDdkM7OztZQUVxQixrQ0FBRztBQUN2QixzQ0FBVyxjQUFjLENBQUM7QUFDeEIsV0FBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDdEIsaUJBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFDcEMsQ0FBQyxDQUFDO01BQ0o7OztZQUVjLDJCQUFHO0FBQ2hCLFdBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztNQUNqQzs7O1lBRU0saUJBQUMsSUFBSSxFQUFFO0FBQ1osV0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUM7QUFDZCx3Q0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekI7TUFDRjs7O1lBRVEsbUJBQUMsSUFBSSxFQUFFO0FBQ2QsV0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBQ2hDLHNDQUFXLFVBQVUsQ0FBQztBQUNwQixXQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDWCxhQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDaEIsQ0FBQyxDQUFDO01BQ0o7OztVQXBFa0IsUUFBUTtJQUFTLG1CQUFNLFNBQVM7O3NCQUFoQyxRQUFROztBQXVFN0IsU0FBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ3RGMUIsQ0FBTzs7OztLQUVuQixTQUFTLHNCQUFULFNBQVM7O0FBRWYsS0FBTSxjQUFjLEdBQUcsRUFBRSxDQUFDOztLQUVMLGlCQUFpQjtBQUN6QixZQURRLGlCQUFpQixDQUN4QixLQUFLLEVBQUU7MkJBREEsaUJBQWlCOztBQUVsQyxnQ0FGaUIsaUJBQWlCLDZDQUU1QixLQUFLLEVBQUU7QUFDYixTQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2hCLGdCQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU07QUFDM0IscUJBQWMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7QUFDekMsZUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVTtBQUNuQyxXQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO01BQ2xDLENBQUM7QUFDRixTQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsWUFBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7TUFDNUIsQ0FBQztJQUNIOzthQVprQixpQkFBaUI7O2dCQUFqQixpQkFBaUI7O1lBYzlCLGtCQUFHO0FBQ1AsY0FDRTs7V0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFVO1NBQ25DLDRDQUFPLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDekMsb0JBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDdEMsZ0JBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU07QUFDeEIsb0JBQVMsRUFBRSxJQUFLLEdBQUc7U0FDckI7O2FBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7VUFBZ0I7U0FDaEU7O2FBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7VUFBZ0I7UUFDNUQsQ0FDTjtNQUNIOzs7WUFFYSwwQkFBRztBQUNmLFdBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7TUFDN0I7OztZQUVhLDBCQUFHO0FBQ2YsV0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUN0Qzs7O1lBRVEsOEJBQVksS0FBSyxFQUFFO0FBQzFCLFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixjQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzFCLENBQUMsQ0FBQztBQUNILFdBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztNQUMzQzs7O1lBRVMsb0JBQUMsS0FBSyxFQUFFO0FBQ2hCLFdBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxjQUFjLEVBQUU7QUFDcEMsYUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hCO01BQ0Y7OztVQTlDa0IsaUJBQWlCO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXpDLGlCQUFpQjs7QUFpRHRDLGtCQUFpQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUM7Ozs7Ozs7OztBQ3hEOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ2pCQTtBQUNBLHFDQUFvQyxtQkFBbUIsa0JBQWtCLDhCQUE4QiwyQkFBMkIsRUFBRSx5QkFBeUIsMkJBQTJCLEVBQUUsb0JBQW9CLHdCQUF3QixzQkFBc0IsRUFBRSxxQ0FBcUMseUJBQXlCLHNCQUFzQixFQUFFLHVCQUF1QixtQkFBbUIsa0JBQWtCLDhCQUE4QiwyQkFBMkIsRUFBRSxvQkFBb0IsYUFBYSx1QkFBdUIscUJBQXFCLGlCQUFpQixpQkFBaUIsa0JBQWtCLHNCQUFzQixjQUFjLG9CQUFvQixFQUFFLDRCQUE0QixhQUFhLGtCQUFrQiw2QkFBNkIscUJBQXFCLEVBQUUsd0JBQXdCLGtDQUFrQyxFQUFFLGFBQWEsa0JBQWtCLEVBQUUsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NBaDBCLENBQU87Ozs7S0FFbkIsU0FBUyxzQkFBVCxTQUFTOztBQUVmLEtBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQzs7S0FFTCxhQUFhO0FBQ3JCLFlBRFEsYUFBYSxDQUNwQixLQUFLLEVBQUU7MkJBREEsYUFBYTs7QUFFOUIsZ0NBRmlCLGFBQWEsNkNBRXhCLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxVQUFVLEdBQUc7QUFDaEIsZ0JBQVMsRUFBRSxTQUFTLENBQUMsTUFBTTtBQUMzQixTQUFFLEVBQUUsU0FBUyxDQUFDLE1BQU07QUFDcEIsa0JBQVcsRUFBRSxTQUFTLENBQUMsTUFBTTtBQUM3QixhQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVO0FBQ2pDLFlBQUssRUFBRSxTQUFTLENBQUMsTUFBTTtNQUN4QixDQUFDO0FBQ0YsU0FBSSxDQUFDLEtBQUssR0FBRztBQUNYLFlBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO01BQzlCLENBQUM7SUFDSDs7YUFia0IsYUFBYTs7Z0JBQWIsYUFBYTs7WUFlMUIsa0JBQUc7QUFDUCxjQUNFOzs7U0FDRSw0Q0FBTyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFVO0FBQ3JDLGFBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUc7QUFDbEIsc0JBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVk7QUFDcEMsbUJBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDcEMsb0JBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7QUFDdEMsZ0JBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU07QUFDeEIsb0JBQVMsRUFBRSxJQUFLLEdBQUc7U0FDckI7O2FBQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFDLEtBQUssRUFBQyxVQUFVOztVQUFhO1FBQ2pFLENBQ047TUFDSDs7O1lBRUksaUJBQUc7QUFDTixXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLFdBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixjQUFLLEVBQUUsRUFBRTtRQUNWLENBQUMsQ0FBQztNQUNKOzs7WUFFUSw4QkFBWSxLQUFLLEVBQUU7QUFDMUIsV0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGNBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDMUIsQ0FBQyxDQUFDO01BQ0o7OztZQUVTLG9CQUFDLEtBQUssRUFBRTtBQUNoQixXQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssY0FBYyxFQUFFO0FBQ3BDLGFBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkO01BQ0Y7OztVQS9Da0IsYUFBYTtJQUFTLG1CQUFNLFNBQVM7O3NCQUFyQyxhQUFhOztBQWtEbEMsY0FBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ3hEcEMsQ0FBTzs7Ozt1Q0FDVixFQUFZOzs7Ozs7bURBR0MsRUFBK0I7Ozs7Ozs4Q0FHN0IsRUFBcUI7Ozs7S0FFN0MsU0FBUyxzQkFBVCxTQUFTOztLQUVNLGFBQWE7QUFDckIsWUFEUSxhQUFhLENBQ3BCLEtBQUssRUFBRTsyQkFEQSxhQUFhOztBQUU5QixnQ0FGaUIsYUFBYSw2Q0FFeEIsS0FBSyxFQUFFO0FBQ2IsU0FBSSxDQUFDLFVBQVUsR0FBRztBQUNoQixpQkFBVSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtNQUN4QyxDQUFDO0lBQ0g7O2FBTmtCLGFBQWE7O2dCQUFiLGFBQWE7O1lBUTFCLGtCQUFHO0FBQ1AsV0FBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1dBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7V0FDaEMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkIsWUFBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7QUFDeEIsa0JBQVMsQ0FBQyxJQUFJLENBQUMsbUVBQW1CLEdBQUcsRUFBRSxHQUFJLEVBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUU7O0FBRUQsY0FDRTs7V0FBSyxTQUFTLEVBQUMsZUFBZTtTQUM1Qjs7OztVQUFzQztTQUN0Qzs7YUFBUSxTQUFTLEVBQUUsNkJBQUcsRUFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUMsQ0FBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUU7O1VBQXdCO1NBQ3hHOzthQUFJLEVBQUUsRUFBQyxvQkFBb0I7V0FBRSxTQUFTO1VBQU07UUFDeEMsQ0FDTjtNQUNIOzs7WUFFTyxvQkFBRztBQUNULDJDQUFnQixZQUFZLEVBQUUsQ0FBQztNQUNoQzs7O1VBNUJrQixhQUFhO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXJDLGFBQWE7O0FBK0JsQyxjQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQzNDdEMsRUFBUTs7OztLQUVsQixlQUFlLEdBQ1IsU0FEUCxlQUFlLEdBQ0w7eUJBRFYsZUFBZTs7QUFFakIsT0FBSSxDQUFDLGVBQWUsQ0FDbEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixjQUFjLENBQ2YsQ0FBQztFQUNIOztBQUdILE9BQU0sQ0FBQyxPQUFPLEdBQUcsaUJBQUksYUFBYSxDQUFDLGVBQWUsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDWGpDLENBQU87Ozs7OzttREFHRyxFQUErQjs7OztLQUVyRCxTQUFTLHNCQUFULFNBQVM7O0FBRWYsS0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtBQUN2QixzQkFBTyxDQUFDLEVBQWtCLENBQUMsQ0FBQztFQUM3Qjs7S0FFb0IsaUJBQWlCO0FBQ3pCLFlBRFEsaUJBQWlCLENBQ3hCLEtBQUssRUFBRTsyQkFEQSxpQkFBaUI7O0FBRWxDLGdDQUZpQixpQkFBaUIsNkNBRTVCLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxVQUFVLEdBQUc7QUFDaEIsZUFBUSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtNQUN0QyxDQUFDO0lBQ0g7O2FBTmtCLGlCQUFpQjs7Z0JBQWpCLGlCQUFpQjs7WUFROUIsa0JBQUc7QUFDUCxXQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7QUFFL0IsY0FDRTs7V0FBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUc7U0FDZjs7YUFBSyxTQUFTLEVBQUMsUUFBUTtXQUNyQjs7O2FBQU87O2lCQUFHLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFO2VBQUUsSUFBSSxDQUFDLEVBQUU7Y0FBSztZQUFRO1dBQ3JGOztlQUFRLFNBQVMsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRTs7WUFBa0I7VUFDbkY7UUFDSCxDQUNMO01BQ0g7OztZQUVpQiw4QkFBRztBQUNuQiwyQ0FBZ0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDM0Q7OztZQUVjLDJCQUFHO0FBQ2hCLDJDQUFnQixjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDeEQ7OztVQTNCa0IsaUJBQWlCO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXpDLGlCQUFpQjs7QUE4QnRDLGtCQUFpQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQ3pDM0IsRUFBVzs7Ozs7O21EQUdsQixFQUE0Qjs7Ozs7O2dDQUd4QyxFQUFROzs7O2tEQUNGLEVBQXlCOzs7Ozs7NENBRTNCLEVBQW1COzs7O0FBRXZDLEtBQUksYUFBYSxHQUFHLG9EQUFhO0FBQ3BCLFlBRG9DLGFBQWEsR0FDOUM7MkJBRGlDLGFBQWE7O0FBRTFELFNBQUksQ0FBQyxXQUFXLHFDQUFpQixDQUFDO0FBQ2xDLFNBQUksQ0FBQyxLQUFLLEdBQUcsZUFkRSxHQUFHLENBY0c7QUFDbkIsZ0JBQVMsRUFBRSxlQWZPLElBQUksQ0FlRixFQUFFLENBQUM7TUFDeEIsQ0FBQyxDQUFDO0lBQ0o7O2dCQU44QyxhQUFhOztZQVF6Qyw2QkFBQyxFQUFFLEVBQUU7QUFDdEIsV0FBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQzlELGdCQUFPLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQzs7QUFFSCxXQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7OztBQUdaLGFBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRCwwQkFBSSxTQUFTLENBQUMsdUJBQVUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUVoRDtNQUNGOzs7WUFFYSwwQkFBRztBQUNmLFdBQU0sUUFBUSxHQUFHO0FBQ2YsV0FBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDbkUsYUFBSSxFQUFFLGlCQUFJLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDbkMsQ0FBQztBQUNGLFdBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRCxXQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ3JEOzs7WUFFZSwwQkFBQyxFQUFFLEVBQUU7O0FBRW5CLFdBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUM5RCxnQkFBTyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7O0FBRUgsV0FBSSxHQUFHLElBQUksQ0FBQyxFQUFFO0FBQ1osYUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4RCxhQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JEO01BQ0Y7OztVQXpDOEMsYUFBYTtNQTBDNUQsRUFBRSxlQUFlLENBQUMsQ0FBQzs7QUFFckIsT0FBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0N4RFYsQ0FBUzs7Ozs7QUFHN0IsS0FBSSxNQUFNLEdBQUcscUJBQVEsTUFBTSxFQUFFLENBQUM7OztBQUc5QixLQUFJLEdBQUcsR0FBRyxtQkFBTyxDQUFDLEVBQVksQ0FBQyxDQUFDOztBQUVoQyxPQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3ZDLE1BQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUMxQixDQUFDLENBQUM7O3NCQUVZLE1BQU07Ozs7O0FBS3JCLEtBQUcsS0FBVSxFQUFFO0FBQ2IsU0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFNO0FBQ3RDLFFBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQsS0FBSSxHQUFHLEdBQUc7QUFDUixPQUFJLEVBQUUsY0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBSztBQUN4QixTQUFJO0FBQ0YsVUFBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWxELFVBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7TUFDdEMsQ0FBQyxPQUFPLEdBQUcsRUFBRTtBQUNaLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNYO0lBQ0Y7QUFDRCxZQUFTLEVBQUUscUJBQU0sRUFFaEI7RUFDRixDQUFDOztzQkFFYSxHQUFHIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDUxNTQ3OTI2ZWU1NDY0NjBhYmQ1XG4gKiovIiwiLy8gTk9ERVxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gRVhQUkVTU1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgZmF2aWNvbiBmcm9tICdzZXJ2ZS1mYXZpY29uJztcblxuLy8gUHJvZmlsZSBkZXYgb3IgcHJvZHVjdGlvblxubGV0IHByb2ZpbGUgPSBwcm9jZXNzLmVudi5ERVYgPyAnZGV2JyA6ICdwcm9kJyxcblx0cHVibGljUGF0aCA9IHByb2ZpbGUgPT09ICdkZXYnID8gJ2J1aWxkJyA6ICdkaXN0JztcblxubGV0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHB1YmxpY1BhdGgpKTtcbmFwcC51c2UoZmF2aWNvbihwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vYXBwL2ltYWdlcy9mYXZpY29uLmljbycpKSk7XG5cbi8vXG4vLyBSZWdpc3RlciBtaWRkbGV3YXJlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gcmVuZGVyZXJcbmxldCByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XG4vLyBhcGlzXG5sZXQgYXBpUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XG5cbi8vXG4vLyBDb25maWd1cmUgbWlkZGxld2FyZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5yZW5kZXJlci5pbml0KHByb2ZpbGUpO1xuXG4vL1xuLy8gQWN0aXZhdGUgbWlkZGxld2FyZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAudXNlKGFwaVJvdXRlcyk7XG5hcHAudXNlKHJlbmRlcmVyLnJlbmRlcik7XG5cbmh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJyArIGFwcC5nZXQoJ3BvcnQnKSk7XG59KTtcblxuLy9cbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYobW9kdWxlLmhvdCkge1xuICAvLyBhY2NlcHQgdXBkYXRlIG9mIGRlcGVuZGVuY3lcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuL3JvdXRlcy9hcGknLCAnLi9yb3V0ZXMvcmVuZGVyZXInXSwgKCkgPT4ge1xuICAgIGFwaVJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2FwaScpO1xuICAgIGFwcC51c2UoYXBpUm91dGVzKTtcbiAgICByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XG4gICAgcmVuZGVyZXIuaW5pdCgnZGV2Jyk7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zZXJ2ZXIvc2VydmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmUtZmF2aWNvblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwic2VydmUtZmF2aWNvblwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicGF0aFwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaHR0cFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibGV0IHJlbmRlcmVyID0gcmVxdWlyZSgnLi4vdXRpbHMvcmVuZGVyZXInKTtcblxubGV0IHByb2ZpbGUgPSAnZGV2JztcblxudmFyIHJvdXRlc1JlbmRlcmVyID0ge1xuICBpbml0OiAodHlwZSkgPT4ge1xuICAgIHByb2ZpbGUgPSB0eXBlO1xuICAgIHJlbmRlcmVyLmluaXQodHlwZSk7XG4gIH0sXG4gIHJlbmRlcjogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgcmVuZGVyZXIucmVuZGVyKHJlcSwgcmVzLCBuZXh0KTtcbiAgfVxufTtcblxuLy9cbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdChbJy4uL3V0aWxzL3JlbmRlcmVyJ10sICgpID0+IHtcbiAgICByZW5kZXJlciA9IHJlcXVpcmUoJy4uL3V0aWxzL3JlbmRlcmVyJyk7XG4gICAgcmVuZGVyZXIuaW5pdChwcm9maWxlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1JlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zZXJ2ZXIvcm91dGVzL3JlbmRlcmVyLmpzXG4gKiovIiwiLy8gTk9ERVxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuLy8gRVhURVJOQUxTXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IElzbyBmcm9tICdpc28nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLy8gQ09SRVxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi8uLi9hcHAvcm91dGVzJztcbmltcG9ydCBhbHQgZnJvbSAnLi4vLi4vYXBwL2FsdCc7XG5cbmxldCBodG1sID0gJyc7XG5cbnZhciByZW5kZXJlciA9IHtcbiAgaW5pdDogKHR5cGUpID0+IHtcbiAgICBodG1sID0gdHlwZSA9PT0gJ2RldicgP1xuICAgICAgZnMucmVhZEZpbGVTeW5jKCcuL2Fzc2V0cy9pbmRleC1kZXYuaHRtbCcsIHtlbmNvZGluZzogJ3V0ZjgnfSlcbiAgICAgIDpcbiAgICAgIGZzLnJlYWRGaWxlU3luYygnLi9kaXN0L2luZGV4LXByb2QuaHRtbCcsIHtlbmNvZGluZzogJ3V0ZjgnfSk7XG4gIH0sXG4gIHJlbmRlcjogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgbGV0IG1hcmt1cCA9ICcnLFxuICAgICAgaXNvID0gbmV3IElzbygpO1xuXG4gICAgY29uc3Qgb25lSXRlbUJvb3RzdHJhcGVkID0ge1xuICAgICAgJ0FwcFN0b3JlJzoge1xuICAgICAgICAnZGF0YUJ5UmVzdEFwaSc6IHt9LFxuICAgICAgICAnZGF0YSc6IHtcbiAgICAgICAgICAnaWFxcG9yN3AnOiB7XG4gICAgICAgICAgICAnaWQnOiAnaWFxcG9yN3AnLFxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogZmFsc2UsXG4gICAgICAgICAgICAndGV4dCc6ICdmc2ZzZGYnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qIFRoaXMgaXMgd2hlcmUgdGhlIG1hZ2ljIGhhcHBlbnMsIHdlIHRha2UgdGhlIGxvY2FscyBkYXRhIHdlIGhhdmUgYWxyZWFkeVxuICAgIGZldGNoZWQgYW5kIHNlZWQgb3VyIHN0b3JlcyB3aXRoIGRhdGEuXG4gICAgTmV4dCB3ZSB1c2UgcmVhY3Qtcm91dGVyIHRvIHJ1biB0aGUgVVJMIHRoYXQgaXMgcHJvdmlkZWQgaW4gcm91dGVzLmpzeFxuICAgIEZpbmFsbHkgd2UgdXNlIGlzbyBpbiBvcmRlciB0byByZW5kZXIgdGhpcyBjb250ZW50IHNvIGl0IHBpY2tzIGJhY2sgdXBcbiAgICBvbiB0aGUgY2xpZW50IHNpZGUgYW5kIGJvb3RzdHJhcHMgdGhlIHN0b3Jlcy5cbiAgICBpbml0IHNlcnZlciByZW5kZXJlclxuICAgICovXG4gICAgYWx0LmJvb3RzdHJhcChKU09OLnN0cmluZ2lmeShyZXMubG9jYWxzLmRhdGEgfHwgb25lSXRlbUJvb3RzdHJhcGVkKSk7XG5cbiAgICB0cnkge1xuICAgICAgUm91dGVyLnJ1bihyb3V0ZXMsIHJlcS5wYXRoLCAoSGFuZGxlciwgc3RhdGUpID0+IHtcblx0XHRcdFx0Ly8gYWx0IGZsdXggZmx1c2hcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBSZWFjdC5yZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KEhhbmRsZXIpKTtcbiAgICAgICAgaXNvLmFkZChjb250ZW50LCBhbHQuZmx1c2goKSk7XG5cbiAgICAgICAgcmVzLmNvbnRlbnRUeXBlID0gJ3RleHQvaHRtbDsgY2hhcnNldD11dGY4JztcbiAgICAgICAgbGV0IG5vdEZvdW5kID0gXy5maW5kKHN0YXRlLnJvdXRlcywge2lzTm90Rm91bmQ6IHRydWV9KTtcblxuICAgICAgICBpZiAobm90Rm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KTtcbiAgICAgICAgfVxuXG5cdFx0XHRcdC8vIFJFTkRFUklORyBiYWNrIHRvIGNsaWVudFxuICAgICAgICBsZXQgbWFya3VwQ29udGVudCA9IGlzby5yZW5kZXIoKTtcbiAgICAgICAgLy8gRE9NIDxoZWFkPiBpbnN0cnVtZW50YXRpb25cbiAgICAgICAgbGV0IGhlYWQgPSBIZWxtZXQucmV3aW5kKCk7XG4gICAgICAgIG1hcmt1cCA9IGh0bWwucmVwbGFjZSgnTUVUQScsIGhlYWQubWV0YSkucmVwbGFjZSgnVElUTEUnLCBoZWFkLnRpdGxlKS5yZXBsYWNlKCdMSU5LJywgaGVhZC5saW5rKS5yZXBsYWNlKCdDT05URU5UJywgbWFya3VwQ29udGVudCk7XG4gICAgICAgIC8vIFNFTkQgcmVzcG9uc2VcbiAgICAgICAgcmVzLnNlbmQobWFya3VwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5leHQoZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3V0aWxzL3JlbmRlcmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlzb1wiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmc1wiXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxyXG4vKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLyplc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzKi9cclxuaW1wb3J0IHtSb3V0ZSwgRGVmYXVsdFJvdXRlLCBOb3RGb3VuZFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuLy8gQ09NUE9ORU5UXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQXBwL0FwcCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0JztcclxuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbic7XHJcbmltcG9ydCBOb3RGb3VuZFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24nO1xyXG5pbXBvcnQgVG9kb1NlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICA8Um91dGUgbmFtZT0nYXBwJyBwYXRoPScvJyBoYW5kbGVyPXtBcHBsaWNhdGlvbn0+XHJcbiAgICA8Um91dGUgbmFtZT0naG9tZScgcGF0aD0nL2hvbWUnIGhhbmRsZXI9e0hvbWVTZWN0aW9ufS8+XHJcbiAgICA8Um91dGUgbmFtZT0ndG9kbycgcGF0aD0nL3RvZG8nIGhhbmRsZXI9e1RvZG9TZWN0aW9ufS8+XHJcbiAgICA8Um91dGUgbmFtZT0nY29udGFjdCcgcGF0aD1cIi9jb250YWN0XCIgaGFuZGxlcj17Q29udGFjdH0vPlxyXG4gICAgPERlZmF1bHRSb3V0ZSBoYW5kbGVyPXtIb21lU2VjdGlvbn0gLz5cclxuICAgIDxOb3RGb3VuZFJvdXRlIGhhbmRsZXI9e05vdEZvdW5kU2VjdGlvbn0gLz5cclxuICA8L1JvdXRlPlxyXG4pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9yb3V0ZXMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVIYW5kbGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLy8gQ09NUE9ORU5UXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBIdG1sSGVhZGVyVGFncyBmcm9tICcuLi9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncyc7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX0FwcC5zY3NzJyk7XG4gIHJlcXVpcmUoJy4vX0FwcC5zYXNzJyk7XG4gIHJlcXVpcmUoJ2ZpbGU/bmFtZT1mYXZpY29uLmljbyEuLi8uLi9pbWFnZXMvZmF2aWNvbi5pY28nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEh0bWxIZWFkZXJUYWdzIC8+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tY29udGVudCc+XG4gICAgICAgICAgPFJvdXRlSGFuZGxlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BcHAucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0FwcCc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0FwcC9BcHAuanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG4vLyBUT0RPOiBkbyBpdCBpbiBzdG9yZSBtYXliZVxuY29uc3QgbWV0YXMgPSByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvY29uZmlnLmpzb24nKS5oZWxtZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0bWxIZWFkZXJUYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBET00gPGhlYWQ+IGluc3RydW1lbnRhdGlvblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVsbWV0XG4gICAgICAgICAgdGl0bGU9e21ldGFzLnRpdGxlfVxuICAgICAgICAgICAgbWV0YT17bWV0YXMubWV0YX1cbiAgICAgICAgICAgIGxpbms9e21ldGFzLmxpbmt9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkh0bWxIZWFkZXJUYWdzLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIdG1sSGVhZGVyVGFncyc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0RvY3VtZW50L0h0bWxIZWFkZXJUYWdzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVsbWV0XCI6IHtcblx0XHRcInRpdGxlXCI6IFwid2ViLXJlYWN0XCIsXG5cdFx0XCJtZXRhXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIixcblx0XHRcdFx0XCJjb250ZW50XCI6IFwiV2VicGFjayBOb2RlIFJlYWN0IFN0YXJ0ZXIgS2l0XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwibmFtZVwiOiBcInZpZXdwb3J0XCIsXG5cdFx0XHRcdFwiY29udGVudFwiOiBcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcblx0XHRcdH1cblx0XHRdLFxuXHRcdFwibGlua1wiOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwicmVsXCI6IFwic2hvcnRjdXQgaWNvblwiLFxuXHRcdFx0XHRcImhyZWZcIjogXCIvZmF2aWNvbi5pY29cIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwiaW1hZ2UveC1pY29uXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwicmVsXCI6IFwiaWNvblwiLFxuXHRcdFx0XHRcImhyZWZcIjogXCIvZmF2aWNvbi5pY29cIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwiaW1hZ2UveC1pY29uXCJcblx0XHRcdH1cblx0XHRdXG5cdH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXNzZXRzL2NvbmZpZy5qc29uXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3QgYnJhbmRpbmdzID0gWydyZWFjdCcsICdmbHV4JywgJ3dlYnBhY2snLCAnbm9kZWpzJywgJ2JhYmVsJywgJ21vY2hhJywgJ2phdmFzY3JpcHQnLCAnaGVyb2t1JywgJ2h0bWwtNScsICdjc3MtMycsICdleHByZXNzJywgJ2xvZGFzaCddO1xuXG5sZXQgYnJhbmRpbmdzTWFya3VwID0gW107XG5cbmJyYW5kaW5ncy5mb3JFYWNoKChlbHQsIGlkeCkgPT4ge1xuICBicmFuZGluZ3NNYXJrdXAucHVzaCg8aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vaW1hZ2VzL2JyYW5kaW5nLycgKyBlbHQgKyAnLnN2ZycpfSBrZXk9e2lkeH0gd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIvPik7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fSGVhZGVyLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxkaXY+e2JyYW5kaW5nc01hcmt1cH08L2Rpdj5cblx0XHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0XHQ8dWw+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89J2FwcCc+SG9tZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSd0b2RvJz5Ub2RvPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89J2NvbnRhY3QnPkNvbnRhY3Q8L0xpbms+PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2hlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIZWFkZXInO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL2JhYmVsLnN2Z1wiOiAyMCxcblx0XCIuL2Nzcy0zLnN2Z1wiOiAyMSxcblx0XCIuL2V4cHJlc3Muc3ZnXCI6IDIyLFxuXHRcIi4vZmx1eC5zdmdcIjogMjMsXG5cdFwiLi9oZXJva3Uuc3ZnXCI6IDI0LFxuXHRcIi4vaHRtbC01LnN2Z1wiOiAyNSxcblx0XCIuL2phdmFzY3JpcHQuc3ZnXCI6IDI2LFxuXHRcIi4vbG9kYXNoLnN2Z1wiOiAyNyxcblx0XCIuL21vY2hhLnN2Z1wiOiAyOCxcblx0XCIuL25vZGVqcy5zdmdcIjogMjksXG5cdFwiLi9yZWFjdC5zdmdcIjogMzAsXG5cdFwiLi93ZWJwYWNrLnN2Z1wiOiAzMVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxOTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nIF5cXC5cXC8uKlxcLnN2ZyRcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM0JPR3NyVy5zdmdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2JhYmVsLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l6TmpGd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXpOakVpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4Wno0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1USTNMamcwTXpnMk9Dd3pOakF1TURnM09URXlJRXd5TXk0Mk5qRTNNVFF6TERNek1TNHhOall5TkRJZ1REQXVORFExTVRnMk9ERXpMRGN3TGpjMk5UY3hORE1nVERJMU5TNDFOVFE0TVRNc056QXVOelkxTnpFME15Qk1Nak15TGpNeE16WTNMRE16TVM0eE1qVTBOVEVnVERFeU55NDRORE00Tmpnc016WXdMakE0TnpreE1pQk1NVEkzTGpnME16ZzJPQ3d6TmpBdU1EZzNPVEV5SUZvaUlHWnBiR3c5SWlNeU5qUkVSVFFpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTWpFeUxqUXhOamN3TXl3ek1UUXVOVFEyTmpNM0lFd3lNekl1TWpjM09EQXlMRGt5TGpBMU56TXhPRGNnVERFeU9DdzVNaTR3TlRjek1UZzNJRXd4TWpnc016TTNMamsxTURJME1pQk1NakV5TGpReE5qY3dNeXd6TVRRdU5UUTJOak0zSUV3eU1USXVOREUyTnpBekxETXhOQzQxTkRZMk16Y2dXaUlnWm1sc2JEMGlJekk1TmpWR01TSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMDFNeTQyTmpnMU56RTBMREU0T0M0Mk16WXhNeklnVERVMkxqVXpNRGs0T1N3eU1qQXVOVGN5T0RNMUlFd3hNamdzTWpJd0xqVTNNamd6TlNCTU1USTRMREU0T0M0Mk16WXhNeklnVERVekxqWTJPRFUzTVRRc01UZzRMall6TmpFek1pQk1OVE11TmpZNE5UY3hOQ3d4T0RndU5qTTJNVE15SUZvaUlHWnBiR3c5SWlORlFrVkNSVUlpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTkRjdU9URTNNREV4TERFeU15NDVPVFEzTWpVZ1REVXdMamd5TURJeE9UZ3NNVFUxTGprek1qRXpNaUJNTVRJNExERTFOUzQ1TXpJeE16SWdUREV5T0N3eE1qTXVPVGswTnpJMUlFdzBOeTQ1TVRjd01URXNNVEl6TGprNU5EY3lOU0JNTkRjdU9URTNNREV4TERFeU15NDVPVFEzTWpVZ1dpSWdabWxzYkQwaUkwVkNSVUpGUWlJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qZ3NNamN4TGpVNE1ERXpNaUJNTVRJM0xqZzJNREEwTkN3eU56RXVOakUzTkRBM0lFdzVNaTR5T1RFMU1UWTFMREkyTWk0d01UTXhPRGNnVERrd0xqQXhOemMxT0RJc01qTTJMalUwTVRnNUlFdzFOeTQ1TlRjNU56Z3NNak0yTGpVME1UZzVJRXcyTWk0ME16SXpOVEUyTERJNE5pNDJPRGMyTkRnZ1RERXlOeTQ0TlRNd01URXNNekEwTGpnME9EZzNPU0JNTVRJNExETXdOQzQ0TURnd09EZ2dUREV5T0N3eU56RXVOVGd3TVRNeUlFd3hNamdzTWpjeExqVTRNREV6TWlCYUlpQm1hV3hzUFNJalJVSkZRa1ZDSWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRZd0xqUTRNelV4TmpVc01DQk1PVGt1TVRZME9ETTFNaXd3SUV3NU9TNHhOalE0TXpVeUxERTJMakUzTlRneU5ESWdURGMyTGpZMU9UTTBNRGNzTVRZdU1UYzFPREkwTWlCTU56WXVOalU1TXpRd055d3pNaTR6TlRFMk5EZzBJRXc1T1M0eE5qUTRNelV5TERNeUxqTTFNVFkwT0RRZ1REazVMakUyTkRnek5USXNORGd1TlRJM05EY3lOU0JNTmpBdU5EZ3pOVEUyTlN3ME9DNDFNamMwTnpJMUlFdzJNQzQwT0RNMU1UWTFMREFnVERZd0xqUTRNelV4TmpVc01DQmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXdOaTQ1TURFd09Ua3NNQ0JNTVRRMUxqVTRNalF4T0N3d0lFd3hORFV1TlRneU5ERTRMREUwTGpBMk5Ua3pOREVnVERFeU15NHdOelk1TWpNc01UUXVNRFkxT1RNME1TQk1NVEl6TGpBM05qa3lNeXd4Tmk0NE56a3hNakE1SUV3eE5EVXVOVGd5TkRFNExERTJMamczT1RFeU1Ea2dUREUwTlM0MU9ESTBNVGdzTkRrdU1qTXdOelk1TWlCTU1UQTJMamt3TVRBNU9TdzBPUzR5TXpBM05qa3lJRXd4TURZdU9UQXhNRGs1TERNMExqUTJNVFV6T0RVZ1RERXlPUzQwTURZMU9UTXNNelF1TkRZeE5UTTROU0JNTVRJNUxqUXdOalU1TXl3ek1TNDJORGd6TlRFMklFd3hNRFl1T1RBeE1EazVMRE14TGpZME9ETTFNVFlnVERFd05pNDVNREV3T1Rrc01DQk1NVEEyTGprd01UQTVPU3d3SUZvaUlHWnBiR3c5SWlNd01EQXdNREFpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTVRVekxqTXhPRFk0TVN3d0lFd3hPVElzTUNCTU1Ua3lMREUwTGpBMk5Ua3pOREVnVERFMk9TNDBPVFExTURVc01UUXVNRFkxT1RNME1TQk1NVFk1TGpRNU5EVXdOU3d4Tmk0NE56a3hNakE1SUV3eE9USXNNVFl1T0RjNU1USXdPU0JNTVRreUxEUTVMakl6TURjMk9USWdUREUxTXk0ek1UZzJPREVzTkRrdU1qTXdOelk1TWlCTU1UVXpMak14T0RZNE1Td3pOQzQwTmpFMU16ZzFJRXd4TnpVdU9ESTBNVGMyTERNMExqUTJNVFV6T0RVZ1RERTNOUzQ0TWpReE56WXNNekV1TmpRNE16VXhOaUJNTVRVekxqTXhPRFk0TVN3ek1TNDJORGd6TlRFMklFd3hOVE11TXpFNE5qZ3hMREFnVERFMU15NHpNVGcyT0RFc01DQmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUSXdNaTR4TWpZM05qa3NNVGc0TGpZek5qRXpNaUJNTWpBM0xqZzVNak01Tml3eE1qTXVPVGswTnpJMUlFd3hNamN1T0RnNU5UZ3lMREV5TXk0NU9UUTNNalVnVERFeU55NDRPRGsxT0RJc01UVTFMamt6TWpFek1pQk1NVGN5TGpnNU1qRXpNaXd4TlRVdU9UTXlNVE15SUV3eE5qa3VPVGcyTVRFc01UZzRMall6TmpFek1pQk1NVEkzTGpnNE9UVTRNaXd4T0RndU5qTTJNVE15SUV3eE1qY3VPRGc1TlRneUxESXlNQzQxTnpJNE16VWdUREUyTnk0eU1UWTFNamNzTWpJd0xqVTNNamd6TlNCTU1UWXpMalV3T1RRMU1Td3lOakV1T1RreU56a3hJRXd4TWpjdU9EZzVOVGd5TERJM01TNDJNRFk0TlRjZ1RERXlOeTQ0T0RrMU9ESXNNekEwTGpnek16UXdOeUJNTVRrekxqTTJNakk0Tml3eU9EWXVOamczTmpRNElFd3hPVE11T0RReU5qTTNMREk0TVM0eU9URTVOVFlnVERJd01TNHpORGMxTVRZc01UazNMakl4TWpFek1pQk1NakF5TGpFeU5qYzJPU3d4T0RndU5qTTJNVE15SUV3eU1ESXVNVEkyTnpZNUxERTRPQzQyTXpZeE16SWdXaUlnWm1sc2JEMGlJMFpHUmtaR1JpSStQQzl3WVhSb1Bnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvY3NzLTMuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhVmsycXMuc3ZnXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9leHByZXNzLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jZ2QybGtkR2c5SWpJMU5uQjRJaUJvWldsbmFIUTlJakV3TW5CNElpQjJhV1YzUW05NFBTSXdJREFnTWpVMklERXdNaUlnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCd2NtVnpaWEoyWlVGemNHVmpkRkpoZEdsdlBTSjRUV2x1V1UxcGJpQnRaV1YwSWo0S0lDQWdJRHhuUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweU1EVXVNRE16TXpBMkxEQWdRekU1TkM0NU9EVTBNakVzTUNBeE9EVXVOakkyT1RneUxESXVPVEl3TmprME1EZ2dNVGMzTGpjek1UYzVPU3czTGprek9EZ3hPRGc0SUV3eE1qY3VPVGs0TlRRMUxEUTBMalEyTkRrME9UTWdUREV3TVM0M09EVXdNalVzTWpVdU1qRTFOekV6TlNCRE1UQXdMakl3TlRRd055d3lOeTQzTnpnMU9UTTBJRGs0TGpZeE5ERTFNakVzTXpBdU16STJPVEk0TVNBNU55NHdPVEkzTVRRNUxETXlMamsyTlRRME16WWdRemsyTGpjeU5qRTNNellzTXpNdU5UazVOakU0TWlBNU5pNHpPRFU0TVRNNExETTBMakkwTWpVeUlEazJMakF5TlRBNU1EWXNNelF1T0RjMk5qazBOaUJNTVRFM0xqa3pOakV4TkN3MU1DNDVOalkyT1RNMklFdzNNUzQ1TlRnME5UVXNPRFF1TnpJNU1qRTVJRU0yTlM0Mk5UYzBNelUzTERnNExqWTFOalEwTnpFZ05UZ3VOREE0TURZek5TdzVNQzQzTXpNMU1UUTBJRFV3TGprMk16YzRORFVzT1RBdU56TXpOVEUwTkNCRE1qa3VNRE00TWpFMU5TdzVNQzQzTXpNMU1UUTBJREV4TGpFNU5qazJNemNzTnpJdU9EazFNVGN4TmlBeE1TNHhPVFk1TmpNM0xEVXdMamsyTmpZNU16WWdRekV4TGpFNU5qazJNemNzTWprdU1ETTRNakUxTlNBeU9TNHdNelV6TURZMExERXhMakU1T1RnM01qY2dOVEF1T1RZek56ZzBOU3d4TVM0eE9UazROekkzSUVNMU9DNDBNRGd3TmpNMUxERXhMakU1T1RnM01qY2dOalV1TmpZd016UTBPQ3d4TXk0eU56UXdNekVnTnpFdU9UVTRORFUxTERFM0xqSXdOREUyT0RFZ1REYzJMalV5T0RVNE5Ea3NNakF1TlRVNE16RXhPQ0JETnpndU5ERTJOVFl6TkN3eE55NHlPVFF6TkRnNUlEZ3dMak0zTkRNMU9UUXNNVFF1TVRBMk1ESXhOU0E0TWk0ek5EazJNRGszTERFd0xqazBNRGsyTmpZZ1REYzRMakkyTlRJNU1qUXNOeTQ1TkRFM01qYzVNeUJETnpBdU16Y3pNREU0TlN3eUxqa3lNRFk1TkRBNElEWXhMakF4TVRZM01ETXNNQzR3TURJNU1Ea3dOVGM0TlNBMU1DNDVOak0zT0RRMUxEQXVNREF5T1RBNU1EVTNPRFVnUXpJeUxqZ3hPRFkwT1Rnc01DNHdNREk1TURrd05UYzROU0F3TERJeUxqZ3lNVFUxT0RnZ01DdzFNQzQ1TmpZMk9UTTJJRU13TERjNUxqRXhNVGd5T0RNZ01qSXVPREUxTnpRd055d3hNREV1T1RNd05EYzRJRFV3TGprMk16YzRORFVzTVRBeExqa3pNRFEzT0NCRE5qRXVNREV4Tmpjd015d3hNREV1T1RNd05EYzRJRGN3TGpNM016QXhPRFVzT1RrdU1EQTVOemcwSURjNExqSTJOVEk1TWpRc09UTXVPVGt4TmpVNU1pQk1NVEkzTGprNU9EVTBOU3cxTnk0ME5qZzBNemM1SUV3eE5UUXVNekV6T0RnekxEYzJMamM1TXpNd09USWdRekUxTlM0NU1qVTFNREVzTnpRdU1UVXhPRGcwTmlBeE5UY3VOVE0wTWpFc056RXVOVEF4TnpNeU9TQXhOVGt1TVRJMU5EWTBMRFk0TGpjME1UQXpOeUJETVRVNUxqUXpPVFkwTXl3Mk9DNHhPVFF4TXpReUlERTFPUzQzTWpRM015dzJOeTQyTlRBeE5EQXpJREUyTUM0d016WXNOamN1TVRBek1qTTNOU0JNTVRNNExqQTJNemc0Tml3MU1DNDVOalkyT1RNMklFd3hPRFF1TURNNE5qTTJMREUzTGpJd05ERTJPREVnUXpFNU1DNHpNemsyTlRVc01UTXVNamMyT1RRZ01UazNMalU1TVRrek5pd3hNUzR4T1RrNE56STNJREl3TlM0d016TXpNRFlzTVRFdU1UazVPRGN5TnlCRE1qSTJMamsyTVRjNE5Td3hNUzR4T1RrNE56STNJREkwTkM0NE1EQXhNamNzTWprdU1ETTRNakUxTlNBeU5EUXVPREF3TVRJM0xEVXdMamsyTmpZNU16WWdRekkwTkM0NE1EQXhNamNzTnpJdU9EazFNVGN4TmlBeU1qWXVPVFl4TnpnMUxEa3dMamN6TXpVeE5EUWdNakExTGpBek16TXdOaXc1TUM0M016TTFNVFEwSUVNeE9UY3VOVGc1TURJM0xEa3dMamN6TXpVeE5EUWdNVGt3TGpNek9UWTFOU3c0T0M0Mk5Ua3pOVFl4SURFNE5DNHdNemcyTXpZc09EUXVOekk1TWpFNUlFd3hOemt1TlRNMU5ERTBMRGd4TGpReU1UWXlNRElnUXpFM055NDJNamN3TnpJc09EUXVOekUzTlRneU9DQXhOelV1TmprMU5EVTRMRGczTGpreU1EUTFOVFFnTVRjekxqYzFOVEV4Tml3NU1TNHdOamd3TlRZZ1RERTNOeTQzTXpRM01EZ3NPVE11T1RnNE56VXdNU0JETVRnMUxqWXlPVGc1TVN3NU9TNHdNRGszT0RRZ01UazBMams0T0RNekxERXdNUzQ1TWpjMU5qa2dNakExTGpBek5qSXhOU3d4TURFdU9USTNOVFk1SUVNeU16TXVNVGd4TXpVc01UQXhMamt5TnpVMk9TQXlOVFlzTnprdU1UQTRPVEU1TWlBeU5UWXNOVEF1T1RZek56ZzBOU0JETWpVMUxqazVOekE1TVN3eU1pNDRNVGcyTkRrNElESXpNeTR4T0RFek5Td3dJREl3TlM0d016TXpNRFlzTUNCTU1qQTFMakF6TXpNd05pd3dJRm9pSUdacGJHdzlJaU0wTkVJM05FRWlQand2Y0dGMGFENEtJQ0FnSUR3dlp6NEtQQzl6ZG1jK1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvZmx1eC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJME1EQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUEwTURBaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcGJsbE5hVzRnYldWbGRDSStDaUFnSUNBOFp6NEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5Namd1TURnek1EQTNNaXd6T1RndU1qZzROek0zSUV3eU9DNHdPRE13TURjeUxETTJNeTQxTVRBeU1ETWdRekk0TGpBNE16QXdOeklzTXpZeExqQTFPREkyTlNBeU5pNHlPRFUwTmpVeUxETTJNQzR3TURBME9EUWdNalF1TVRZMk16VTNOaXd6TmpBdU1EQXdORGcwSUVNeE9TNDVNVGd5TlRBM0xETTJNQzR3TURBME9EUWdNVFF1TmpFeU16WXlOU3d6TmpFdU1EVTRNalkxSURrdU56azFNVFk1TWpNc016WXpMakU0TVRRek15Qk1PUzQzT1RVeE5qa3lNeXd6T1RndU1qZzROemswSUV3d0xETTVPQzR5T0RnM09UUWdUREFzTXpNekxqY3hNamN6TWlCTU9TNDNPVFV4TmpreU15d3pNek11TnpFeU56TXlJRXc1TGpjNU5URTJPVEl6TERNMU5TNHdNVGN4TXpRZ1F6RTBMalExTURZMk5Ea3NNelV6TGpNd05EVWdNakF1TURBeE16STVOQ3d6TlRFdU9ETTJNVGcxSURJMUxqVTFNamt3T0Rjc016VXhMamd6TmpFNE5TQkRNelF1TkRVeE1UTTJOaXd6TlRFdU9ETTJNVGcxSURNM0xqYzVPRFk1T1Rrc016VTNMak13TmpBd01TQXpOeTQzT1RnMk9UazVMRE0yTkM0NE1UTXlNVGdnVERNM0xqYzVPRFk1T1Rrc016azRMakk0T0RjNU5DQk1Namd1TURnek1EQTNNaXd6T1RndU1qZzROemswSUV3eU9DNHdPRE13TURjeUxETTVPQzR5T0RnM016Y2dUREk0TGpBNE16QXdOeklzTXprNExqSTRPRGN6TnlCYUlFMDFOaTR3T0RJd01qQTVMRE0zTnk0eU1qWTBPREVnUXpVMkxqUXdPREV3TXpVc016ZzRMamt3TURRNU9TQTFPQzQyT1RVeE9UZ3lMRE01TVM0eE9EY3hNellnTmpVdU9EYzJNek15TlN3ek9URXVNVGczTVRNMklFTTNNUzQxTVRBd056VTNMRE01TVM0eE9EY3hNellnTnpjdU9EYzRNakExTVN3ek9Ea3VNekE0TXpRMUlEZ3lMamMzTnpZeE9UTXNNemczTGpReU9UazFOQ0JNT0RRdU5EQTVPRFl4Tnl3ek9UUXVOemMxT1RNeElFTTNPUzR4T0RRek5qUTRMRE01Tnk0eE5EWTFOaklnTnpJdU9ERTNNVFV3TkN3ek9Ua3VORE13TlRFeUlEWTFMakl5TmpnMU5EZ3NNems1TGpRek1EVXhNaUJETkRndU9EazJORGd6T1N3ek9Ua3VORE13TlRFeUlEUTJMak0yTkRVMU5UY3NNemt3TGpRMU1qYzFJRFEyTGpNMk5EVTFOVGNzTXpjMkxqRTJNek15TlNCRE5EWXVNelkwTlRVMU55d3pOamd1TXpJM056azJJRFEyTGprek9ERXdNVGtzTXpZeExqSXlNemsyTlNBME9DNDRNVFV4TWpBMkxETTFOQzQyT1RNeU1qUWdRelV6TGpjeE1qY3dOVElzTXpVeUxqZ3hORGd6TXlBMk1DNHlORFF6TmpFNExETTFNUzQ0TXpZeE1qZ2dOamd1TkRnM05qZ3dNU3d6TlRFdU9ETTJNVEk0SUVNNE1TNDRPREExTmpNMkxETTFNUzQ0TXpZeE1qZ2dPRFV1T1RZd056UXdOaXd6TlRrdU1qWTJNRFF4SURnMUxqazJNRGMwTURZc016Y3lMakkwTlRjMk1TQk1PRFV1T1RZd056UXdOaXd6TnpjdU1qSTJOREkwSUV3MU5pNHdPREl3TWpBNUxETTNOeTR5TWpZME1qUWdURFUyTGpBNE1qQXlNRGtzTXpjM0xqSXlOalE0TVNCTU5UWXVNRGd5TURJd09Td3pOemN1TWpJMk5EZ3hJRm9nVFRZNExqUTROemN6TnpJc016WXdMakF3TURRNE5DQkROalV1TlRVeU9UTTNNeXd6TmpBdU1EQXdORGcwSURZd0xqZzVOelEwTVRjc016WXdMakE0TVRjNUlEVTNMakEyTVRFNE16UXNNell3TGpneE16UTRPU0JETlRZdU5qVTBOekE1TkN3ek5qSXVOemN6TlRnM0lEVTJMakUyTWpReE1qTXNNelkxTGpRMk9EQTNJRFUxTGprNU9EazBNaklzTXpjd0xqUTBPRGM1SUV3M05pNDBNRGcxTnpVeUxETTNNQzQwTkRnM09TQkROell1TkRBNE5UYzFNaXd6TmpNdU5qY3dPVGcxSURjMUxqRTRNemN5TVRZc016WXdMakF3TURRNE5DQTJPQzQwT0RjM016Y3lMRE0yTUM0d01EQTBPRFFnVERZNExqUTROemN6TnpJc016WXdMakF3TURRNE5DQk1Oamd1TkRnM056TTNNaXd6TmpBdU1EQXdORGcwSUZvZ1RURXdOQzR6TWpVME1qVXNNell6TGpFNE1UUXpNeUJNTVRBMExqTXlOVFF5TlN3ek9UZ3VNamc0TnprMElFdzVOQzQxTWpnME1qWXhMRE01T0M0eU9EZzNPVFFnVERrMExqVXlPRFF5TmpFc016VTRMamMzTkRJMU9DQkRNVEF5TGpjM05EUTRPU3d6TlRRdU1qZzFNemM0SURFeE1TNDFNRGt4T0Rrc016VXlMamc1TmpVNU5pQXhNVGN1TWpJMk1EWTVMRE0xTWk0ME9EZzNOU0JNTVRFM0xqSXlOakEyT1N3ek5qQXVOalV6TURRNUlFTXhNVE11TWpJMU5ESTFMRE0yTUM0NU56a3hPRGtnTVRBNExqRTJNVFk0TXl3ek5qRXVORFk0TnpReUlERXdOQzR6TWpVME1qVXNNell6TGpFNE1UUXpNeUJNTVRBMExqTXlOVFF5TlN3ek5qTXVNVGd4TkRNeklFd3hNRFF1TXpJMU5ESTFMRE0yTXk0eE9ERTBNek1nV2lCTk1UUXpMakV3TXpJNE55d3pPVGt1TkRNd05URXlJRU14TWpndU5EZzNNekl6TERNNU9TNDBNekExTVRJZ01USXhMamczTlRJM05Td3pPVEl1TWpRM05qQTFJREV5TVM0NE56VXlOelVzTXpjMUxqZ3pOekkwTXlCRE1USXhMamczTlRJM05Td3pOVGd1TkRRNE1UYzJJREV6TUM0Mk1UQXdNeklzTXpVeExqZ3pOakV5T0NBeE5ETXVNVEF6TWpnM0xETTFNUzQ0TXpZeE1qZ2dRekUxTnk0M01UUTNPVElzTXpVeExqZ3pOakV5T0NBeE5qUXVNekk0TmpFekxETTFPUzR3TVRrd016VWdNVFkwTGpNeU9EWXhNeXd6TnpVdU5ESTVNemszSUVNeE5qUXVNekk0TmpFekxETTVNaTQ0TVRnMU1qRWdNVFUxTGpVNU1qQTRNaXd6T1RrdU5ETXdOVEV5SURFME15NHhNRE15T0Rjc016azVMalF6TURVeE1pQk1NVFF6TGpFd016STROeXd6T1RrdU5ETXdOVEV5SUV3eE5ETXVNVEF6TWpnM0xETTVPUzQwTXpBMU1USWdXaUJOTVRRekxqRXdNekk0Tnl3ek5qQXVNREF3TkRnMElFTXhNelV1TlRrd05qazJMRE0yTUM0d01EQTBPRFFnTVRNeExqUXlPRE0xTlN3ek5qUXVNekkxT0RNNElERXpNUzQwTWpnek5UVXNNemMxTGpnek56TWdRekV6TVM0ME1qZ3pOVFVzTXpnNExqUXhNVFF3TkNBeE16UXVPVE00TlRNeExETTVNUzR4T0RjeE9UTWdNVFF6TGpFd016STROeXd6T1RFdU1UZzNNVGt6SUVNeE5UQXVOakV5TWpjM0xETTVNUzR4T0RjeE9UTWdNVFUwTGpjM056TXdOU3d6T0RZdU9UUXdORFU1SURFMU5DNDNOemN6TURVc016YzFMalF5T1RRMU5DQkRNVFUwTGpjM056TXdOU3d6TmpJdU9EVTFNamt6SURFMU1TNHlOall5TnpFc016WXdMakF3TURRNE5DQXhORE11TVRBek1qZzNMRE0yTUM0d01EQTBPRFFnVERFME15NHhNRE15T0Rjc016WXdMakF3TURRNE5DQk1NVFF6TGpFd016STROeXd6TmpBdU1EQXdORGcwSUZvZ1RUSXhNUzQxT1RJNE5UUXNNems0TGpJNE9EY3pOeUJNTWpBd0xqQTRNVFEwT1N3ek9UZ3VNamc0TnpNM0lFTXhPVGN1TXpnNE56TTRMRE01TVM0eE1EVXpOeklnTVRrekxqWXpNVEUxTml3ek9ETXVOelUyTnpZMklERTROeTQ0TXpRM05ETXNNemMzTGpNNE9UUTVOQ0JNTVRneUxqWTVNVFEyTnl3ek56Y3VNemc1TkRrMElFd3hPREl1TmpreE5EWTNMRE01T0M0eU9EZzNNemNnVERFM01pNDRPVFV6T0RNc016azRMakk0T0Rjek55Qk1NVGN5TGpnNU5UTTRNeXd6TXpNdU56RXlOek15SUV3eE9ESXVOamt4TkRZM0xETXpNeTQzTVRJM016SWdUREU0TWk0Mk9URTBOamNzTXpjd0xqYzNORGd4TmlCTU1UZzNMakkyTXpnNE5Dd3pOekF1TnpjME9ERTJJRU14T1RJdU1qUXpOamtzTXpZMUxqWXpNVEE0TXlBeE9UWXVNRGM1T1RRNExETTFPUzR5TmpZd09UZ2dNVGs0TGpjM05USTRPU3d6TlRJdU9UYzNPVEF6SUV3eU1Ea3VOemsxTXpFeUxETTFNaTQ1TnpjNU1ETWdRekl3Tmk0d05ERXlOelVzTXpZd0xqVTNNVE0wTXlBeU1ERXVNakkwT1RNNUxETTJOeTR5TmpVd09UY2dNVGsxTGpnek5UazNNaXd6TnpJdU56TTBPVEV6SUVNeU1ESXVNamcyTXpJekxETTRNQzQ0T1RreU55QXlNRGN1TXpRM05ETTFMRE00T1M0MU5UTXhNakVnTWpFeExqVTVNamcxTkN3ek9UZ3VNamc0TnpNM0lFd3lNVEV1TlRreU9EVTBMRE01T0M0eU9EZzNNemNnVERJeE1TNDFPVEk0TlRRc016azRMakk0T0Rjek55QmFJRTB5TWprdU9UVTFOekE1TERNNU9TNDBNekExTVRJZ1F6SXlNUzR3TlRreU5UUXNNems1TGpRek1EVXhNaUF5TVRjdU56RXhOamtzTXprekxqazJNamt5TmlBeU1UY3VOekV4Tmprc016ZzJMalExTVRJME9TQk1NakUzTGpjeE1UWTVMRE0xTWk0NU56YzVNRE1nVERJeU55NDBNalUyTVN3ek5USXVPVGMzT1RBeklFd3lNamN1TkRJMU5qRXNNemczTGpZM05EY3pJRU15TWpjdU5ESTFOakVzTXprd0xqRXlOalkyTnlBeU1qa3VNakl3TkRZMUxETTVNUzR4T0RjeE16WWdNak14TGpNME16RTNOU3d6T1RFdU1UZzNNVE0ySUVNeU16VXVOVGc0TlRrMUxETTVNUzR4T0RjeE16WWdNalF4TGpNNE5EazFMRE01TUM0eE1qWTJOamNnTWpRMkxqSXdNemt4Tml3ek9EZ3VNREF6TlNCTU1qUTJMakl3TXpreE5pd3pOVEl1T1RjM09UQXpJRXd5TlRZc016VXlMamszTnprd015Qk1NalUyTERNNU1pNHpNamc1TVRFZ1F6STBOQzQwTURjeU9Ea3NNems0TGpZNU5qVTRNeUF5TXpVdU5UQTNNamc0TERNNU9TNDBNekExTVRJZ01qSTVMamsxTlRjd09Td3pPVGt1TkRNd05URXlJRXd5TWprdU9UVTFOekE1TERNNU9TNDBNekExTVRJZ1RESXlPUzQ1TlRVM01Ea3NNems1TGpRek1EVXhNaUJhSWlCbWFXeHNQU0lqTmpjMk1rRTJJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQR2MrQ2lBZ0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHlNalV1TmpJM05UVTNMRE14Tnk0eU5USTNPVEVnVERNd0xqSTFOekV6TmpNc016RTNMakkxTWpjNU1TQkRNVE11TlRRMU56STBPU3d6TVRjdU1qVXlOemt4SURBc016QXpMamN3T0RJeE1pQXdMREk0Tmk0NU9UZ3hNVEVnVERBc016QXVNalUxT1RnNU9DQkRNQ3d4TXk0MU5EVTNNalE1SURFekxqVTBOVGN5TkRrc01DQXpNQzR5TlRjeE16WXpMREFnVERJeU5TNDJNamMxTlRjc01DQkRNalF5TGpNek5qVXhNaXd3SURJMU5TNDRPRGN6TVRRc01UTXVOVFExTnpJME9TQXlOVFV1T0RnM016RTBMRE13TGpJMU5UazRPVGdnVERJMU5TNDRPRGN6TVRRc01qZzJMams1T0RFeE1TQkRNalUxTGpnNE56TXhOQ3d6TURNdU56QTRNakV5SURJME1pNHpNelkxTVRJc016RTNMakkxTWpjNU1TQXlNalV1TmpJM05UVTNMRE14Tnk0eU5USTNPVEVnVERJeU5TNDJNamMxTlRjc016RTNMakkxTWpjNU1TQk1NakkxTGpZeU56VTFOeXd6TVRjdU1qVXlOemt4SUZvaUlHWnBiR3c5SWlNMk56WXlRVFlpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURTJNQzR6TmpBNE1qUXNNamN6TGpZd01EYzNPQ0JNTVRZd0xqTTJNRGd5TkN3eE5EY3VOakE1TnprM0lFTXhOakF1TXpZd09ESTBMREUwTnk0Mk1EazNPVGNnTVRZNExqVTFOVEk0TVN3eE1UY3VORFl3TVRBMUlEVTVMalF4TmpVMk9ERXNNVFU1TGprME16Z3lNU0JETlRrdU1qRTJPVEV4TVN3eE5qQXVORGd5TlRFNElEVTVMakl4TmpreE1URXNORE11TkRNNU56UTBNU0ExT1M0eU1UWTVNVEV4TERRekxqUXpPVGMwTkRFZ1REazBMamczTmpVNE1Ea3NORE11TWpJd09USXpPU0JNT1RRdU9EYzJOVGd3T1N3eE1UZ3VNakV4TXprNUlFTTVOQzQ0TnpZMU9EQTVMREV4T0M0eU1URXpPVGtnTVRrMExqY3lNamsyT1N3M09DNDRPRFUyTnpFeElERTVOQzQzTWpJNU5qa3NNVFE0TGpBek5EZ3lOU0JNTVRrMExqY3lNamsyT1N3eU56TXVOakF4TVRBMklFd3hOakF1TXpZd09ESTBMREkzTXk0Mk1ERXhNRFlnVERFMk1DNHpOakE0TWpRc01qY3pMall3TURjM09DQk1NVFl3TGpNMk1EZ3lOQ3d5TnpNdU5qQXdOemM0SUZvZ1RURTRNQzQyT0RBNE1EUXNPRGd1TmpBMk5EWTBOU0JNTVRReUxqZzFOakF5Tml3NE9DNDJNRFkwTmpRMUlFTXhOVFl1TkRjd09EWTVMRGN4TGprMk1ESTBNRFlnTVRZNExqYzVOVGc0TlN3ME15NDBNemswTVRZMUlERTJPQzQzT1RVNE9EVXNORE11TkRNNU5ERTJOU0JNTWpBM0xqa3dOVEkwT1N3ME15NDBNemswTVRZMUlFTXlNRGN1T1RBMU1qUTVMRFF6TGpRek9UVTRNRE1nTWpBeExqSXhNRFF6TVN3Mk1pNHdNalUxTkRBMklERTRNQzQyT0RBNE1EUXNPRGd1TmpBMk5EWTBOU0JNTVRnd0xqWTRNRGd3TkN3NE9DNDJNRFkwTmpRMUlFd3hPREF1Tmpnd09EQTBMRGc0TGpZd05qUTJORFVnV2lCTk5Ua3VPRFkwTXpZek5Dd3lOek11TXpneE9UVTRJRXcxT1M0NE5qUXpOak0wTERJd01TNDJNek01T0RZZ1REazFMamMwTVRVME16SXNNak0zTGpVeE1URTJOaUJNTlRrdU9EWTBNell6TkN3eU56TXVNemd4T1RVNElFdzFPUzQ0TmpRek5qTTBMREkzTXk0ek9ERTVOVGdnV2lJZ1ptbHNiRDBpSTBaR1JrWkdSaUkrUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHd2Wno0S0lDQWdJRHd2Wno0S1BDOXpkbWMrQ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvaGVyb2t1LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l6TmpGd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXpOakVpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4Wno0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1qVTFMalUxTkRneE15dzNNQzQzTmpVM01UUXpJRXd5TXpJdU16RXpOamNzTXpNeExqRXlOVFExTVNCTU1USTNMamcwTXpnMk9Dd3pOakF1TURnM09URXlJRXd5TXk0Mk5qRTNNVFF6TERNek1TNHhOall5TkRJZ1REQXVORFExTVRnMk9ERXpMRGN3TGpjMk5UY3hORE1nVERJMU5TNDFOVFE0TVRNc056QXVOelkxTnpFME15Qk1NalUxTGpVMU5EZ3hNeXczTUM0M05qVTNNVFF6SUZvaUlHWnBiR3c5SWlORk5EUkVNallpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTVRJNExETXpOeTQ1TlRBeU5ESWdUREl4TWk0ME1UWTNNRE1zTXpFMExqVTBOall6TnlCTU1qTXlMakkzTnpnd01pdzVNaTR3TlRjek1UZzNJRXd4TWpnc09USXVNRFUzTXpFNE55Qk1NVEk0TERNek55NDVOVEF5TkRJZ1RERXlPQ3d6TXpjdU9UVXdNalF5SUZvaUlHWnBiR3c5SWlOR01UWTFNamtpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOT0RJdU9ESXdNakU1T0N3eE5UVXVPVE15TVRNeUlFd3hNamdzTVRVMUxqa3pNakV6TWlCTU1USTRMREV5TXk0NU9UUTNNalVnVERRM0xqa3hOekF4TVN3eE1qTXVPVGswTnpJMUlFdzBPQzQyT0RFME9UUTFMREV6TWk0MU5qSTVPRGtnVERVMkxqVXpNRGs0T1N3eU1qQXVOVGN5T0RNMUlFd3hNamdzTWpJd0xqVTNNamd6TlNCTU1USTRMREU0T0M0Mk16WXhNeklnVERnMUxqY3pPRGt3TVRFc01UZzRMall6TmpFek1pQk1PREl1T0RJd01qRTVPQ3d4TlRVdU9UTXlNVE15SUV3NE1pNDRNakF5TVRrNExERTFOUzQ1TXpJeE16SWdXaUlnWm1sc2JEMGlJMFZDUlVKRlFpSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMDVNQzR3TVRjM05UZ3lMREl6Tmk0MU5ERTRPU0JNTlRjdU9UVTNPVGM0TERJek5pNDFOREU0T1NCTU5qSXVORE15TXpVeE5pd3lPRFl1TmpnM05qUTRJRXd4TWpjdU9EVXpNREV4TERNd05DNDRORGc0TnprZ1RERXlPQ3d6TURRdU9EQTRNRGc0SUV3eE1qZ3NNamN4TGpVNE1ERXpNaUJNTVRJM0xqZzJNREEwTkN3eU56RXVOakUzTkRBM0lFdzVNaTR5T1RFMU1UWTFMREkyTWk0d01UTXhPRGNnVERrd0xqQXhOemMxT0RJc01qTTJMalUwTVRnNUlFdzVNQzR3TVRjM05UZ3lMREl6Tmk0MU5ERTRPU0JhSWlCbWFXeHNQU0lqUlVKRlFrVkNJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEkwTGpFNE1EYzBOek1zTUNCTU5EQXVOREV3TnpJMU15d3dJRXcwTUM0ME1UQTNNalV6TERFMkxqQXpOVEUyTkRnZ1REVTFMakkxTnpNeE9EY3NNVFl1TURNMU1UWTBPQ0JNTlRVdU1qVTNNekU0Tnl3d0lFdzNNUzQwT0Rnc01DQk1OekV1TkRnNExEUTRMalUxT0RReE56WWdURFUxTGpJMU9EQXlNaXcwT0M0MU5UZzBNVGMySUV3MU5TNHlOVGd3TWpJc016SXVNams0TVRrM09DQk1OREF1TkRFeE5ESTROaXd6TWk0eU9UZ3hPVGM0SUV3ME1DNDBNVEUwTWpnMkxEUTRMalUxT0RReE56WWdUREkwTGpFNE1UUTFNRFVzTkRndU5UVTROREUzTmlCTU1qUXVNVGd4TkRVd05Td3dJRXd5TkM0eE9EQTNORGN6TERBZ1RESTBMakU0TURjME56TXNNQ0JhSWlCbWFXeHNQU0lqTURBd01EQXdJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVGt5TGpnek1EazBOVEVzTVRZdU1UQXlOamd4TXlCTU56Z3VOVFF5TnpZNU1pd3hOaTR4TURJMk9ERXpJRXczT0M0MU5ESTNOamt5TERBZ1RERXlNeTR6TlRZNE16VXNNQ0JNTVRJekxqTTFOamd6TlN3eE5pNHhNREkyT0RFeklFd3hNRGt1TURZeU16TXNNVFl1TVRBeU5qZ3hNeUJNTVRBNUxqQTJNak16TERRNExqVTFPRFF4TnpZZ1REa3lMamd6TVRZME9EUXNORGd1TlRVNE5ERTNOaUJNT1RJdU9ETXhOalE0TkN3eE5pNHhNREkyT0RFeklFdzVNaTQ0TXpBNU5EVXhMREUyTGpFd01qWTRNVE1nVERreUxqZ3pNRGswTlRFc01UWXVNVEF5TmpneE15QmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXpNQzQwTmpreU56VXNNQ0JNTVRRM0xqTTVNamN3TXl3d0lFd3hOVGN1T0RBeU9UQXhMREUzTGpBMk1UazNPQ0JNTVRZNExqSXdNalUwT1N3d0lFd3hPRFV1TVRNeU16QTRMREFnVERFNE5TNHhNekl6TURnc05EZ3VOVFU0TkRFM05pQk1NVFk0TGprMk9URTBNeXcwT0M0MU5UZzBNVGMySUV3eE5qZ3VPVFk1TVRRekxESTBMalE1TURFNU56Z2dUREUxTnk0NE1ESTVNREVzTkRFdU56VTFOREk0TmlCTU1UVTNMalV5TXpZNU1pdzBNUzQzTlRVME1qZzJJRXd4TkRZdU16UTVOekUwTERJMExqUTVNREU1TnpnZ1RERTBOaTR6TkRrM01UUXNORGd1TlRVNE5ERTNOaUJNTVRNd0xqUTJPVEkzTlN3ME9DNDFOVGcwTVRjMklFd3hNekF1TkRZNU1qYzFMREFnVERFek1DNDBOamt5TnpVc01DQmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURTVNeTR5TURrMk55d3dJRXd5TURrdU5EUTBOVGN4TERBZ1RESXdPUzQwTkRRMU56RXNNekl1TlRBM056Z3dNaUJNTWpNeUxqSTJPRFkxT1N3ek1pNDFNRGMzT0RBeUlFd3lNekl1TWpZNE5qVTVMRFE0TGpVMU9EUXhOellnVERFNU15NHlNRGsyTnl3ME9DNDFOVGcwTVRjMklFd3hPVE11TWpBNU5qY3NNQ0JNTVRrekxqSXdPVFkzTERBZ1dpSWdabWxzYkQwaUl6QXdNREF3TUNJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qY3VPRGc1TlRneUxESXlNQzQxTnpJNE16VWdUREUyTnk0eU1UWTFNamNzTWpJd0xqVTNNamd6TlNCTU1UWXpMalV3T1RRMU1Td3lOakV1T1RreU56a3hJRXd4TWpjdU9EZzVOVGd5TERJM01TNDJNRFk0TlRjZ1RERXlOeTQ0T0RrMU9ESXNNekEwTGpnek16UXdOeUJNTVRrekxqTTJNakk0Tml3eU9EWXVOamczTmpRNElFd3hPVE11T0RReU5qTTNMREk0TVM0eU9URTVOVFlnVERJd01TNHpORGMxTVRZc01UazNMakl4TWpFek1pQk1NakF5TGpFeU5qYzJPU3d4T0RndU5qTTJNVE15SUV3eE1qY3VPRGc1TlRneUxERTRPQzQyTXpZeE16SWdUREV5Tnk0NE9EazFPRElzTWpJd0xqVTNNamd6TlNCTU1USTNMamc0T1RVNE1pd3lNakF1TlRjeU9ETTFJRm9pSUdacGJHdzlJaU5HUmtaR1JrWWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVEkzTGpnNE9UVTRNaXd4TlRVdU9EVTBNRFkySUV3eE1qY3VPRGc1TlRneUxERTFOUzQ1TXpJeE16SWdUREl3TlM0d016STNPVEVzTVRVMUxqa3pNakV6TWlCTU1qQTFMalkzTXpRNU5Td3hORGd1TnpVek5UZ3lJRXd5TURjdU1USTROakUxTERFek1pNDFOakk1T0RrZ1RESXdOeTQ0T1RJek9UWXNNVEl6TGprNU5EY3lOU0JNTVRJM0xqZzRPVFU0TWl3eE1qTXVPVGswTnpJMUlFd3hNamN1T0RnNU5UZ3lMREUxTlM0NE5UUXdOallnVERFeU55NDRPRGsxT0RJc01UVTFMamcxTkRBMk5pQmFJaUJtYVd4c1BTSWpSa1pHUmtaR0lqNDhMM0JoZEdnK0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvaHRtbC01LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l5TlRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXlOVFlpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4Wno0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1Dd3dJRXd5TlRZc01DQk1NalUyTERJMU5pQk1NQ3d5TlRZZ1REQXNNQ0JhSWlCbWFXeHNQU0lqUmpkRVJqRkZJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVFkzTGpNeE1UYzBOaXd5TVRNdU9UTXlNamt5SUV3NE5pNDVNREkyTlRRc01qQXlMakEzTmpJME1TQkRPVEF1TmpneU1UQTNPU3d5TURndU56YzNNelEySURrMExqRXlNREl5T0RZc01qRTBMalEwTnpFek55QXhNREl1TXpZM01EZzJMREl4TkM0ME5EY3hNemNnUXpFeE1DNHlOekl5TURNc01qRTBMalEwTnpFek55QXhNVFV1TWpVMk1EYzJMREl4TVM0ek5UUTRNVGtnTVRFMUxqSTFOakEzTml3eE9Ua3VNekkyT0RneklFd3hNVFV1TWpVMk1EYzJMREV4Tnk0MU1qZzNPRGNnVERFek9TNHpNVE0xTnpVc01URTNMalV5T0RjNE55Qk1NVE01TGpNeE16VTNOU3d4T1RrdU5qWTJPVGszSUVNeE16a3VNekV6TlRjMUxESXlOQzQxT0RRek15QXhNalF1TnpBM056VTVMREl6TlM0NU1qVTVORE1nTVRBekxqTTVPRFFzTWpNMUxqa3lOVGswTXlCRE9EUXVNVFV6TWprMU1pd3lNelV1T1RJMU9UUXpJRGN5TGprNE1UazBNamtzTWpJMUxqazFPRFl3TXlBMk55NHpNVEV6TXprM0xESXhNeTQ1TXpBeU5pSWdabWxzYkQwaUl6QXdNREF3TUNJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE5USXVNemd3T1RVeUxESXhNUzR6TlRRME1UTWdUREUzTVM0NU5qazBNaklzTWpBd0xqQXhNamdnUXpFM055NHhNalU1T1RRc01qQTRMalF6TXprNE1TQXhPRE11T0RJM09URXhMREl4TkM0Mk1UazRNelVnTVRrMUxqWTRORE0yT0N3eU1UUXVOakU1T0RNMUlFTXlNRFV1TmpVeU5USXhMREl4TkM0Mk1UazRNelVnTWpFeUxqQXdPVEEwTVN3eU1Ea3VOak0xT1RZeUlESXhNaTR3TURrd05ERXNNakF5TGpjMk1qRTFPU0JETWpFeUxqQXdPVEEwTVN3eE9UUXVOVEV6TmpjMklESXdOUzQwTnprME1UWXNNVGt4TGpVNU1qQXlOU0F4T1RRdU5EZ3hNVFk0TERFNE5pNDNPREl3TnlCTU1UZzRMalEyT0RReE9Td3hPRFF1TWpBeU5UWTFJRU14TnpFdU1URXhNakV6TERFM05pNDRNVFEzTXlBeE5Ua3VOVGszTXpBNExERTJOeTQxTXpVek5DQXhOVGt1TlRrM016QTRMREUwTnk0NU5EUTRNemdnUXpFMU9TNDFPVGN6TURnc01USTVMamt3TVRNd09DQXhOek11TXpRME5UQTRMREV4Tmk0eE5UTXlPVFVnTVRrMExqZ3lOVGMxTWl3eE1UWXVNVFV6TWprMUlFTXlNVEF1TVRFNU9USTBMREV4Tmk0eE5UTXlPVFVnTWpJeExqRXhOemMyTlN3eE1qRXVORGd3T1RRZ01qSTVMakF5TVRZMk15d3hNelV1TkRBd05ETXlJRXd5TVRBdU1qa3dOVGtzTVRRM0xqUXlPRGMzTlNCRE1qQTJMakUyTmpFME5pd3hOREF1TURRd01USTNJREl3TVM0Mk9UazFOVFlzTVRNM0xqRXhPVEk0T1NBeE9UUXVPREkyTVRVNUxERXpOeTR4TVRreU9Ea2dRekU0Tnk0M09EQTBOeXd4TXpjdU1URTVNamc1SURFNE15NHpNVEl5TlRRc01UUXhMalU0TnpBNU9DQXhPRE11TXpFeU1qVTBMREUwTnk0ME1qZzNOelVnUXpFNE15NHpNVEl5TlRRc01UVTBMalkwTmpNME9TQXhPRGN1Tnpnd05EY3NNVFUzTGpVMk9EUXdOaUF4T1RndU1EZzVPVFUyTERFMk1pNHdNelkyTWpJZ1RESXdOQzR4TURNNU1qUXNNVFkwTGpZeE5EQTVOU0JETWpJMExqVTFNelEwT0N3eE56TXVNemM0TmpReElESXpOaTR3Tmpjek5USXNNVGd5TGpNeE16UTBPQ0F5TXpZdU1EWTNNelV5TERJd01pNDBNVGd6T0RjZ1F6SXpOaTR3Tmpjek5USXNNakkwTGpBM01Ua3lOQ0F5TVRrdU1EVTFNVE0zTERJek5TNDVNamM1TnpVZ01UazJMakl3TURRek1pd3lNelV1T1RJM09UYzFJRU14TnpNdU9EWXdPVGM0TERJek5TNDVNamM1TnpVZ01UVTVMalF5TlRneU9Td3lNalV1TWpjME16RXhJREUxTWk0ek9ERXpOVGtzTWpFeExqTTFORFF4TXlJZ1ptbHNiRDBpSXpBd01EQXdNQ0krUEM5d1lYUm9QZ29nSUNBZ1BDOW5QZ284TDNOMlp6NEtcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2phdmFzY3JpcHQuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSXlNek53ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBeU16TWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThaeUJ6ZEhKdmEyVTlJbTV2Ym1VaUlITjBjbTlyWlMxM2FXUjBhRDBpTVNJZ1ptbHNiRDBpYm05dVpTSWdabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJajRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTUM0ek9EYzNPVFF5TURJc01DQk1NalF1TVRjNU9UQXpOQ3d3SUV3eU5DNHhOems1TURNMExERTFOeTQ0T1RNd05qSWdUREV4T0M0eU5qWTROaklzTVRVM0xqZzVNekEyTWlCTU1URTRMakkyTmpnMk1pd3hOemN1TXpVNU16SXhJRXd3TGpNNE56YzVOVE0zTml3eE56Y3VNelU1TXpJeElFd3dMak00TnpjNU5UTTNOaXd6TGpNek56VTVOVEkwWlMweE5DQk1NQzR6T0RjM09UUXlNRElzTUNCYUlpQm1hV3hzUFNJak1EQXdNREF3SWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFNE15NHhOVFEwTWpNc05EWXVOVEF5TnpRNU9TQkRNVGs1TGpNM05qTXlOaXcwTkM0ek16azRNamswSURJeE5pNDJOemsyTlRJc05EY3VOVGcwTWpBM09TQXlNamt1TmpVM01UZ3lMRFU0TGpNNU9EZ3dORFlnUXpJME15NDNNVFl4TXpRc05qZ3VNVE14T1RNNE5pQXlOVEV1TWpnMk16YzFMRGcxTGpRek5USTROak1nTWpVeUxqTTJOemd6TXl3eE1ERXVOalUzTVRjeklFTXlOVFF1TlRNd056UTVMREV5TVM0eE1qTTBOREVnTWpVeUxqTTJOemd6TXl3eE5EQXVOVGc1TnpBNUlESTBNUzQxTlRNeU1Ua3NNVFUyTGpneE1UWXdNeUJETWpNeExqZ3lNREE1T0N3eE5qa3VOemc1TVRFMklESXhOaTQyTnprMk5UTXNNVGM0TGpRME1EYzVOeUF4T1RrdU16YzJNekkyTERFM09TNDFNakl5TlRVZ1F6RTRNeTR4TlRRME1qTXNNVGd4TGpZNE5URTNJREUyTkM0M05qazJNRE1zTVRjNExqUTBNRGM1TnlBeE5UQXVOekV3TmpVeExERTJOeTQyTWpZeUlFTXhNemN1TnpNek1USXhMREUxTmk0NE1URTJNRE1nTVRNeExqSTBORE0zTkN3eE5EQXVOVGc1TnpBNUlERXlPUzR3T0RFME5UZ3NNVEkwTGpNMk56Z3lNeUJETVRJMkxqa3hPRFUwTWl3eE1EY3VNRFkwTkRjZ01USTVMakE0TVRRMU9DdzROeTQxT1RneU1ESXhJREV6T1M0NE9UWXdNemNzTnpJdU5EVTNOemN6T0NCRE1UUTRMalUwTnpjek5TdzFOeTR6TVRjek5ERTVJREUyTlM0NE5URXdOakVzTkRjdU5UZzBNakEzT1NBeE9ETXVNVFUwTkRJekxEUTJMalV3TWpjME9Ua2dUREU0TXk0eE5UUTBNak1zTkRZdU5UQXlOelE1T1NCYUlFMHhPRFl1TXprNE56azJMRFkwTGpnNE56VTJNVFFnUXpFNU55NHlNVE16TnpVc05qTXVPREEyTURrNE9DQXlNRGt1TVRBNU5EUTRMRFkzTGpBMU1EUTNOeklnTWpFM0xqYzJNVEV4TERjMExqWXlNRFk1TURnZ1F6SXlOUzR6TXpFek5TdzRNeTR5TnpJek56RTNJREl5T1M0Mk5UY3hPRElzT1RRdU1EZzJPVFU1SURJek1DNDNNemcyTkN3eE1EUXVPVEF4TlRVMklFTXlNekV1T0RJd01EazRMREV4Tmk0M09UYzJNU0F5TXpBdU56TTROalFzTVRJNUxqYzNOVEV5TWlBeU1qVXVNek14TXpVc01UUXdMalU0T1RjeElFTXlNVGt1T1RJME1EWXhMREUxTVM0ME1EUXlPVGtnTWpFd0xqRTVNRGt3TkN3eE5UZ3VPVGMwTlRJZ01UazRMakk1TkRnMk9Td3hOakV1TVRNM05ETTJJRU14T0RjdU5EZ3dNalUwTERFMk15NHpNREF6TlRJZ01UYzFMalU0TkRJeE55d3hOakF1TURVMU9UYzRJREUyT0M0d01UTTVOemNzTVRVekxqVTJOekl6TVNCRE1UVTVMak0yTWpNeE15d3hORGN1TURjNE5EWTJJREUxTXk0NU5UVXdNalVzTVRNM0xqTTBOVE16TmlBeE5URXVOemt5TURjekxERXlOeTQyTVRJeE9UZ2dRekUwT1M0Mk1qa3hOVGNzTVRFekxqVTFNekl5TnlBeE5UQXVOekV3TmpVeExEazVMalE1TkRJMU56a2dNVFUyTGpFeE56azBMRGcyTGpVeE5qYzBOVFFnUXpFMk1TNDFNalV5TWprc056UXVOakl3Tmprd09DQXhOek11TkRJeE16QXhMRFkxTGprMk9UQXhPVE1nTVRnMkxqTTVPRGM1TlN3Mk5DNDRPRGMxTmpFMElFd3hPRFl1TXprNE56azJMRFkwTGpnNE56VTJNVFFnV2lJZ1ptbHNiRDBpSXpBd01EQXdNQ0krUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB3TGpNNE56YzVOREl3TWl3eU1EVXVORGMzTWpnZ1RESTFOUzQyTVRJeU1EY3NNakExTGpRM056STRJRXd5TlRVdU5qRXlNakEzTERJek1pNDFNVE0zTmpFZ1REQXVNemczTnprME1qQXlMREl6TWk0MU1UTTNOakVnVERBdU16ZzNOemswTWpBeUxESXdOUzQwTnpjeU9DQk1NQzR6T0RjM09UUXlNRElzTWpBMUxqUTNOekk0SUZvaUlHWnBiR3c5SWlNek5Ea3lSa1lpUGp3dmNHRjBhRDRLSUNBZ0lEd3ZaejRLUEM5emRtYytDZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9sb2Rhc2guc3ZnXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNKVXN1a20uc3ZnXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9tb2NoYS5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJM01IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qVTJJRGN3SWlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIQnlaWE5sY25abFFYTndaV04wVW1GMGFXODlJbmhOYVc1WlRXbHVJRzFsWlhRaVBnb2dJQ0FnUEdjK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXlPUzR5T0RZMk56UXNNQzR4T0RFNU9EUTBPRFlnUXpFeU9TNHhNRGs1TURVc01DNHhPRFF4TkRNd01ESWdNVEk0TGprek1URXdOaXd3TGpJeU5qTXpNek0xTmlBeE1qZ3VOemN6TXpRNUxEQXVNekU0T0RZNE9UTTRJRU14TWpndU5EVTRNelkxTERBdU5UQXpOemszTmpNNUlERXlPQzR5TmpBd01Ua3NNQzQ0TkRNME1qSTROamNnTVRJNExqSTJNREF4T1N3eExqSXdPRFl6TlRFMElFd3hNamd1TWpZd01ERTVMREkzTGpNNE9ESXhOQ0JETVRJNExqSTJNREF4T1N3eU55NDJORFUwTkRnMklERXlPQzR4TkRBeU16a3NNamN1T0RjMU16QTVJREV5Tnk0NU1UYzRNRFFzTWpndU1EQTBNekUwT1NCRE1USTNMalk1TkRnd055d3lPQzR4TXpNMk5EUTFJREV5Tnk0ME1qSTJPRGdzTWpndU1UTXpOalEwTlNBeE1qY3VNVGs1TVRRM0xESTRMakF3TkRNeE5Ea2dUREV5TWk0NU1qRTBNekVzTWpVdU5UUXdNelEzTXlCRE1USXlMakk0TkRBNE5pd3lOUzR4TnpJNE16UWdNVEl4TGpVd05UWXhNaXd5TlM0eE56TXdOVFF5SURFeU1DNDROamd4TWpVc01qVXVOVFF3TXpRM015Qk1NVEF6TGpjNU1UUTNPU3d6TlM0ek9UWXlNRGt4SUVNeE1ETXVNVFV6TURNM0xETTFMamMyTkRRNU1EZ2dNVEF5TGpjMk5EZ3lOQ3d6Tmk0ME56TXdNVFVnTVRBeUxqYzJORGd5TkN3ek55NHlNRGs1TURZMUlFd3hNREl1TnpZME9ESTBMRFUyTGpreU1UWXpNRElnUXpFd01pNDNOalE0TWpRc05UY3VOalUzT1RZNU1TQXhNRE11TVRVek5UZzFMRFU0TGpNek1qSXlNRFFnTVRBekxqYzVNVFEzT1N3MU9DNDNNREV4TlRneklFd3hNakF1T0RZNE1USTFMRFk0TGpVMU56QXlNRElnUXpFeU1TNDFNRFkxTmpZc05qZ3VPVEkxTkRBNU9DQXhNakl1TWpneU9UZzVMRFk0TGpreU5UUXdPVGdnTVRJeUxqa3lNVFF6TVN3Mk9DNDFOVGN3TWpBeUlFd3hNemt1T1RrNE1EYzNMRFU0TGpjd01URTFPRE1nUXpFME1DNDJNelU1Tnl3MU9DNHpNekl5TWpBMElERTBNUzR3TWpRM016SXNOVGN1TmpVM09UWTVNU0F4TkRFdU1ESTBOek15TERVMkxqa3lNVFl6TURJZ1RERTBNUzR3TWpRM016SXNOeTQzTnpreU1EazNNU0JETVRReExqQXlORGN6TWl3M0xqQXpNVFkyTXpneElERTBNQzQyTVRZNE1EY3NOaTR6TXpBeE1qUTFNaUF4TXprdU9UWXpPRFUyTERVdU9UWTFORFUyTVRrZ1RERXlPUzQzT1RrNU9Ua3NNQzR5T0RRMk5EYzRNalVnUXpFeU9TNDJOREF6T1N3d0xqRTVOVFl4TnpZM015QXhNamt1TkRZek5EUTBMREF1TVRnd01EWTNOekl6SURFeU9TNHlPRFkyTnpRc01DNHhPREl3TkRBMk1EY2dUREV5T1M0eU9EWTJOelFzTUM0eE9ERTVPRFEwT0RZZ1dpQk5NVGt1TkRNME9EZzVOeXd5TkM0M09EY3pOakU1SUVNeE9TNHhNRGt5TXpnM0xESTBMamd3TURRNE5UY2dNVGd1T0RBek1qa3dOeXd5TkM0NE5UYzBORFEySURFNExqVXhNRGt3TWpRc01qVXVNREkyT1RZMU9DQk1NUzQwTXpReU5URTROeXd6TkM0NE9ESTRNamMzSUVNd0xqYzVOemswTnpJMU1Td3pOUzR5TlRBMk5qa2dNQzQwTURjMk1ERXlNVFFzTXpVdU9USXdOalV3T0NBd0xqUXdOell3TVRJeE5Dd3pOaTQyTmpJek5qQXhJRXd3TGpRME1UYzBPRGt6T0N3Mk15NHhNVFUzTURjNElFTXdMalEwTVRjME9Ea3pPQ3cyTXk0ME9ETTJOakUwSURBdU5qTXhOVGN6TVRVekxEWXpMamd5TlRNeU9EWWdNQzQ1TlRVd056ZzFPRE1zTmpRdU1EQTFOVGd4T1NCRE1TNHlOekl4TmpBeU55dzJOQzR4T1RVek5qTWdNUzQyTmpVM01UZ3hPQ3cyTkM0eE9UVXpOak1nTVM0NU9ERTNNamt5TkN3Mk5DNHdNRFUxT0RFNUlFd3hNaTR4TVRFek5qUXpMRFU0TGpFNE56YzNOamtnUXpFeUxqYzFNekF5TmpRc05UY3VPREEyTlRjME15QXhNeTR4TnpJeU16WXhMRFUzTGpFME16UTVOVFFnTVRNdU1UY3lNak0yTVN3MU5pNDBNRGd5TkRnNElFd3hNeTR4TnpJeU16WXhMRFEwTGpBMU5ESTFORE1nUXpFekxqRTNNakl6TmpFc05ETXVNekUzTXpZeU9DQXhNeTQxTlRrNE56azNMRFF5TGpZME1UQXpOU0F4TkM0eE9UZzRPVEV4TERReUxqSTNORGN5TVRrZ1RERTRMalV4TURneU9Td3pPUzQzTnpZMU9UTTJJRU14T0M0NE16STJOVFV4TERNNUxqVTVNRFV6TXpnZ01Ua3VNVGM0TVRZd01Td3pPUzQxTURJNE1UWXhJREU1TGpVek56UTNPVGNzTXprdU5UQXlPREUyTVNCRE1Ua3VPRGc1TkRJMU55d3pPUzQxTURJNE1UWXhJREl3TGpJMU1USXhNRE1zTXprdU5Ua3dOREkxT1NBeU1DNDFOalF4TXpRMkxETTVMamMzTmpVNU16WWdUREkwTGpnM05qQTNNallzTkRJdU1qYzBOekl4T1NCRE1qVXVOVEUxTURZeU5DdzBNaTQyTkRFd016VWdNalV1T1RBeU56SXpNaXcwTXk0ek1UY3pOakk0SURJMUxqa3dNamN5TXpJc05EUXVNRFUwTWpVME15Qk1NalV1T1RBeU56SXpNaXcxTmk0ME1EZ3lORGc0SUVNeU5TNDVNREkzTWpNeUxEVTNMakUwTXpRNU5UUWdNall1TXpJMk1USXdOU3cxTnk0NE1UQTRORGd5SURJMkxqazJNelU1T1RNc05UZ3VNVGczTnpjMk9TQk1NemN1TURrek1qTTBOQ3cyTkM0d01EVTFPREU1SUVNek55NDBNVEV6TmpBNExEWTBMakU1TlRNMk15QXpOeTQ0TURRek5qWXhMRFkwTGpFNU5UTTJNeUF6T0M0eE1UazRPRFV4TERZMExqQXdOVFU0TVRrZ1F6TTRMalF6TkRNeU1EUXNOak11T0RJMU16STROaUF6T0M0Mk16TXlNVEEwTERZekxqUTRNelkyTVRRZ016Z3VOak16TWpFd05DdzJNeTR4TVRVM01EYzRJRXd6T0M0Mk5qY3pOVGd4TERNMkxqWTJNak0yTURFZ1F6TTRMalkyTnpNMU9ERXNNelV1T1RJd05qVXdPQ0F6T0M0eU9ERXpNemMzTERNMUxqSTFNRFkyT1NBek55NDJOREEzTURjMUxETTBMamc0TWpneU56Y2dUREl3TGpVMk5EQTVOVGdzTWpVdU1ESTJPVFkxT0NCRE1qQXVNamMxTWpZME9Dd3lOQzQ0TlRjME5EUTJJREU1TGprMk56azJNVEVzTWpRdU9EQXdOekU0T0NBeE9TNDJOREF4TURnMUxESTBMamM0TnpNMk1Ua2dUREU1TGpRek5EYzNOelVzTWpRdU56ZzNNell4T1NCTU1Ua3VORE0wT0RnNU55d3lOQzQzT0Rjek5qRTVJRm9nVFRFM01pNDRPRFV4TnpFc01qVXVNREkyT1RZMU9DQkRNVGN5TGpVeU9EUXhNU3d5TlM0d01qWTFNelF4SURFM01pNHhOemc0TXpFc01qVXVNVEUyTnpZME5DQXhOekV1T0RVNE5URTJMREkxTGpNd01EY3pPU0JNTVRVMExqYzRNVGczTERNMUxqRTFOall3TURrZ1F6RTFOQzR4TkRNNU56WXNNelV1TlRJME9Ua3dOU0F4TlRNdU56VTFNakU1TERNMkxqRTVPVEkwTVRnZ01UVXpMamMxTlRJeE9Td3pOaTQ1TXpZeE16TXpJRXd4TlRNdU56VTFNakU1TERVMkxqWTBOemcxTWpjZ1F6RTFNeTQzTlRVeU1Ua3NOVGN1TXpnNU1ERXpOeUF4TlRRdU1UY3lOekl6TERVNExqQTJNVEEzTmpNZ01UVTBMamd4TmpBNU1TdzFPQzQwTWpjek9EVXhJRXd4TnpFdU56VTFPRFV5TERZNExqQTNOemt4TmlCRE1UY3lMak00TVRReU5TdzJPQzQwTXpVeE16YzBJREUzTXk0eE5EVXlOVFVzTmpndU5EWXhPRFUxTlNBeE56TXVOemMwT1RNekxEWTRMakV4TVRnME56Z2dUREU0TkM0d05ERTBOVFlzTmpJdU16azJOell5TWlCRE1UZzBMak0yTnpJME5pdzJNaTR5TVRZd05qZzFJREU0TkM0MU9EYzJNelFzTmpFdU9EYzROVFl6SURFNE5DNDFPRGt3TURNc05qRXVOVEEyT1RrMklFTXhPRFF1TlRreE1UWXhMRFl4TGpFek5UTXlNVEVnTVRnMExqTTVOek0yTVN3Mk1DNDRNREl4T1RNeElERTROQzR3TnpVMk56Z3NOakF1TmpFM01qSTVPQ0JNTVRZMkxqZzVOak0yTkN3MU1DNDNOakV6TmpnZ1F6RTJOaTQxTnpRMk9DdzFNQzQxTnpjNU5ERTJJREUyTmk0ek5EZzRNVGNzTlRBdU1qQTJNalkyTnlBeE5qWXVNelE0T0RFM0xEUTVMamd6TnpNeU9EZ2dUREUyTmk0ek5EZzRNVGNzTkRNdU5qYzNOREUyTXlCRE1UWTJMak0wT0RneE55dzBNeTR6TURreE16UTJJREUyTmk0MU56YzBNVGNzTkRJdU9UY3hOakkwTnlBeE5qWXVPRGsyTXpZMExEUXlMamM0TnpjMU9DQk1NVGN5TGpJek5EazFOeXd6T1M0M01EYzJPVE00SUVNeE56SXVOVFV5TlRNMUxETTVMalV5TXprek5TQXhOekl1T1RReU5qWXhMRE01TGpVeU16a3pOU0F4TnpNdU1qWXhOakEzTERNNUxqY3dOelk1TXpnZ1RERTNPQzQyTURBeUxEUXlMamM0TnpjMU9DQkRNVGM0TGpreE9URTBOeXcwTWk0NU56RTJNalEzSURFM09TNHhNVE0xTWpZc05ETXVNekE1TVRNME5pQXhOemt1TVRFek5USTJMRFF6TGpZM056UXhOak1nVERFM09TNHhNVE0xTWpZc05EZ3VOVE0zTURFeU9TQkRNVGM1TGpFeE16VXlOaXcwT0M0NU1EVTRNemcxSURFM09TNHpNRGM1TURRc05Ea3VNalF5T0RBd01TQXhOemt1TmpJMk9EVXhMRFE1TGpReU5qWTJOamdnUXpFM09TNDVORGN4TmpZc05Ea3VOakV4TURneE9DQXhPREF1TXpNME5UVTVMRFE1TGpZeE1UZzBOVGtnTVRnd0xqWTFNelV3Tml3ME9TNDBNalkyTmpZNElFd3hPVEF1T0RnMU9EQTBMRFF6TGpRM01qRTVNeklnUXpFNU1TNDFNakE1TmpFc05ETXVNVEF6TWpVMU15QXhPVEV1T1RFeU5EVTFMRFF5TGpReU56STFNVE1nTVRreExqa3hNalExTlN3ME1TNDJPVEkyTmpVeElFd3hPVEV1T1RFeU5EVTFMRE0yTGprek5UYzROemtnUXpFNU1TNDVNVEkwTlRVc016WXVNakF4TURnMU1pQXhPVEV1TlRJeU16STVMRE0xTGpVeU5URTVNelFnTVRrd0xqZzROVGd3TkN3ek5TNHhOVFl5TlRVMUlFd3hOek11T1RFeE9ESXhMREkxTGpNd01ETTVNemNnUXpFM015NDFPVEl4T0RRc01qVXVNVEUxTVRBMk5pQXhOek11TWpReE9UTXNNalV1TURJM01EWXdPQ0F4TnpJdU9EZzFNVGN4TERJMUxqQXlOall5TURRZ1RERTNNaTQ0T0RVeE56RXNNalV1TURJMk9UWTFPQ0JhSUUweE1qRXVPREkyTXpNekxETTVMamMwTWpNeE5qUWdRekV5TVM0NU1UVXpOalFzTXprdU56UXlNekUyTkNBeE1qSXVNREl3TVRZMExETTVMamMyTkRJd016Y2dNVEl5TGpFd01ERXdOeXd6T1M0NE1UQXlNVEF6SUV3eE1qY3VPVFV5TURJMUxEUXpMakU1T0RJeE56RWdRekV5T0M0eE1UQTRNVFFzTkRNdU1qa3dNakEwTkNBeE1qZ3VNakkxTnprNExEUXpMalExT1RZeE56Y2dNVEk0TGpJeU5UYzVPQ3cwTXk0Mk5ETXdORFFnVERFeU9DNHlNalUzT1Rnc05UQXVOREU0T1RRNU5pQkRNVEk0TGpJeU5UYzVPQ3cxTUM0Mk1ESTVNalF5SURFeU9DNHhNVEU1TVN3MU1DNDNOekkwTkRVMUlERXlOeTQ1TlRJd01qVXNOVEF1T0RZek9EZzRPQ0JNTVRJeUxqRXdNREV3Tnl3MU5DNHlOVEUzT0RNeklFTXhNakV1T1RRd056WTVMRFUwTGpNME1qWTNPRFFnTVRJeExqYzBOakV4T1N3MU5DNHpOREkyTnpnMElERXlNUzQxT0RZM09ERXNOVFF1TWpVeE56Z3pNeUJNTVRFMUxqY3pORGcyTXl3MU1DNDROak00T0RnNElFTXhNVFV1TlRjMU5USTJMRFV3TGpjM01Ua3dNVFVnTVRFMUxqUTJNVEE1TERVd0xqWXdNamt5TkRJZ01URTFMalEyTVRBNUxEVXdMalF4T0RrME9UWWdUREV4TlM0ME5qRXdPU3cwTXk0Mk5ETXdORFFnUXpFeE5TNDBOakV3T1N3ME15NDBOVGsyTVRjM0lERXhOUzQxTnpZd056UXNORE11TWprd05qUTBOeUF4TVRVdU56TTBPRFl6TERRekxqRTVPREl4TnpFZ1RERXlNUzQxT0RZM09ERXNNemt1T0RFd056VTROaUJETVRJeExqWTJOamN5TkN3ek9TNDNOalEzTmpRNUlERXlNUzQzTXpjeU9Td3pPUzQzTkRJNE5qUTJJREV5TVM0NE1qWXpNek1zTXprdU56UXlPRFkwTmlCTU1USXhMamd5TmpNek15d3pPUzQzTkRJek1UWTBJRm9pSUdacGJHdzlJaU0wTURReE16Y2lQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NakkwTGpBME5qWTNNU3d5TkM0MU5EYzROakUySUVNeU1qTXVORFUwTmpJNUxESTBMalUwTnpnMk1UWWdNakl5TGpnM09UQXlOeXd5TkM0Mk56QXlPVEkySURJeU1pNHpOams0TURjc01qUXVPVFU0TlRJek5pQk1NakEyTGpJMU1UTTJOU3d6TkM0eU5qWTRNelEzSUVNeU1EVXVNakE0TWpnNExETTBMamcyTnpNNE5UWWdNakEwTGpVM05EVXNNell1TURBeU5UWXlNaUF5TURRdU5UYzBOU3d6Tnk0eU1EazVNRFkxSUV3eU1EUXVOVGMwTlN3MU5TNDNPVEl6TmpNM0lFTXlNRFF1TlRjME5TdzFOaTQ1T1Rrd05URTVJREl3TlM0eU1EZ3lPRGdzTlRndU1UTXlPVEV4TnlBeU1EWXVNalV4TXpZMUxEVTRMamN6TlRNeU56WWdUREl4TUM0ME5qQTJNemtzTmpFdU1UWTFNVEkxT1NCRE1qRXlMalV3TlRjekxEWXlMakUzTXpBME9UTWdNakV6TGpJMU9UazRMRFl5TGpFMU56UTVPVFFnTWpFMExqRTVNRGd4TERZeUxqRTFOelE1T1RRZ1F6SXhOeTR5TVRnM05TdzJNaTR4TlRjME9UazBJREl4T0M0NU5EYzJNekVzTmpBdU16SXdNalUyT1NBeU1UZ3VPVFEzTmpNeExEVTNMakV5TmprMU5qa2dUREl4T0M0NU5EYzJNekVzTXpndU56ZzBNVEEzT1NCRE1qRTRMamswTnpZek1Td3pPQzQxTWpRM09EZ3hJREl4T0M0M01qTXhNellzTXpndU16TTVNVFk0TnlBeU1UZ3VORFk0TlRJMkxETTRMak16T1RFMk9EY2dUREl4Tmk0ME5EazBORFlzTXpndU16TTVNVFk0TnlCRE1qRTJMakU1TURjeU5pd3pPQzR6TXpreE5qZzNJREl4TlM0NU56QXpNemdzTXpndU5USTBOemc0TVNBeU1UVXVPVGN3TXpNNExETTRMamM0TkRFd056a2dUREl4TlM0NU56QXpNemdzTlRjdU1USTJPVFUyT1NCRE1qRTFMamszTURNek9DdzFPQzQxTkRJek5qa3lJREl4TkM0ME9UWXdOamNzTlRrdU9UWTFOemMyTnlBeU1USXVNVEF6TWpnekxEVTRMamMyT1RZd01EVWdUREl3Tnk0M01qSTVNRE1zTlRZdU1qQXpNREkxTnlCRE1qQTNMalUyT0RJeE9TdzFOaTR4TVRnM01EVTBJREl3Tnk0ME5Ea3hNalVzTlRVdU9UWTVPRGd3TVNBeU1EY3VORFE1TVRJMUxEVTFMamM1TWpNMk16Y2dUREl3Tnk0ME5Ea3hNalVzTXpjdU1qQTVPVEEyTlNCRE1qQTNMalEwT1RFeU5Td3pOeTR3TXpNME9EWTNJREl3Tnk0MU5qWTROVEVzTXpZdU9EVTBNekk1T0NBeU1EY3VOekl5T1RBekxETTJMamMyTlRBM09UVWdUREl5TXk0NE1EY3hNVGtzTWpjdU5Ea3dPVE16TkNCRE1qSXpMamsxTnpZNU15d3lOeTQwTURRME1qQXhJREl5TkM0eE16Y3dNVFFzTWpjdU5EQTBOREl3TVNBeU1qUXVNamcyTWpJMExESTNMalE1TURrek16UWdUREkwTUM0ek56QTBOQ3d6Tmk0M05qVXdOemsxSUVNeU5EQXVOVEl6TnpVMUxETTJMamcxTnpBMk5qZ2dNalF3TGpZME5ESXhNeXd6Tnk0d01qZ3hNakEySURJME1DNDJORFF5TVRNc016Y3VNakE1T1RBMk5TQk1NalF3TGpZME5ESXhNeXcxTlM0M09USXpOak0zSUVNeU5EQXVOalEwTWpFekxEVTFMamsyT1RnNE1ERWdNalF3TGpVMU5URTRNeXcxTmk0eE5URTJOallnTWpRd0xqUXdORFkyTVN3MU5pNHlNemN4T1RVZ1RESXlOQzR5T0RZeU1qUXNOalV1TlRFeE16UXhNU0JETWpJMExqRTBOemsyTml3Mk5TNDFPVE0wTnpJMklESXlNeTQ1TlRjMk9UTXNOalV1TlRrek5EY3lOaUF5TWpNdU9EQTNNVEU1TERZMUxqVXhNVE0wTVRFZ1RESXhPUzQyTmpZeU9EY3NOak11TURRM016Y3pOU0JETWpFNUxqVTBNekE0Tnl3Mk1pNDVOelV3T1RjM0lESXhPUzR6TnpRM01Ua3NOakl1T1Rnd05UY3hOeUF5TVRrdU1qVTFOakkxTERZekxqQTBOek0zTXpVZ1F6SXhPQzR4TVRJMk1qSXNOak11TmprMU16UXlOeUF5TVRjdU9EazNOekEzTERZekxqYzNNRFk0TXpZZ01qRTJMamd5TlRnNE15dzJOQzR4TkRJME56QTNJRU15TVRZdU5UWXhOamt6TERZMExqSXpORFExT0NBeU1UWXVNVFl3TmpFeExEWTBMak0zTnpVNE9USWdNakUyTGprMk1qYzNNaXcyTkM0NE1qWTVNRFU1SUV3eU1qSXVNelk1T0RBM0xEWTRMakF3T1RRM016Y2dRekl5TWk0NE9EUTFNREVzTmpndU16QTNNek0ySURJeU15NDBOVGd3TlRjc05qZ3VORFUwTXpBd055QXlNalF1TURRMk5qY3hMRFk0TGpRMU5ETXdNRGNnUXpJeU5DNDJORE0wT1Rjc05qZ3VORFUwTXpBd055QXlNalV1TWpBNE9EUXlMRFk0TGpNd056TXpOaUF5TWpVdU56SXpOVE0yTERZNExqQXdPVFEzTXpjZ1RESTBNUzQ0TkRFNU56UXNOVGd1TnpNMU16STNOaUJETWpReUxqZzROVEExTlN3MU9DNHhNamcyTkRJeUlESTBNeTQxTVRnNE16a3NOVFl1T1RrNU1EVXhPU0F5TkRNdU5URTRPRE01TERVMUxqYzVNak0yTXpjZ1RESTBNeTQxTVRnNE16a3NNemN1TWpBNU9UQTJOU0JETWpRekxqVXhPRGd6T1N3ek5pNHdNREkxTmpJeUlESTBNaTQ0T0RVd05UVXNNelF1T0RZNU9UQTJPQ0F5TkRFdU9EUXhPVGMwTERNMExqSTJOamd6TkRjZ1RESXlOUzQzTWpNMU16WXNNalF1T1RVNE5USXpOaUJETWpJMUxqSXhPRFF5TWl3eU5DNDJOekF5T1RJMklESXlOQzQyTXpnM01UUXNNalF1TlRRM09EWXhOaUF5TWpRdU1EUTJOamN4TERJMExqVTBOemcyTVRZZ1RESXlOQzR3TkRZMk56RXNNalF1TlRRM09EWXhOaUJhSUUwM01DNDNNek15TnpRNUxESTBMamt5TkRJME5qTWdRemN3TGpNM056UXpORGtzTWpRdU9USTBNalEyTXlBM01DNHdNalV5T1RnNUxESTFMakF4TkRBME5Ea2dOamt1TnpBMk5qSTBNaXd5TlM0eE9UZ3dNVGsySUV3MU1pNDJNams1Tnpnc016VXVNREU1TnpFMk5DQkROVEV1T1RreE5UTTJOU3d6TlM0ek9EYzJOalUzSURVeExqWXdNek15TXl3ek5pNHdPVGN4TnpnMUlEVXhMall3TXpNeU15d3pOaTQ0TXpNME1UTTRJRXcxTVM0Mk1ETXpNak1zTlRZdU5UUTFNVE16TWlCRE5URXVOakF6TXpJekxEVTNMakk0TWpJME5Ea2dOVEV1T1RreE9UVXdPU3cxTnk0NU5UVTVORGM1SURVeUxqWXlPVGszT0N3MU9DNHpNalEyTmpVMklFdzJPUzQzTURZMk1qUXlMRFk0TGpFNE1EVXlOelVnUXpjd0xqTTBOVEEyTlRnc05qZ3VOVFE1TWpRMU1pQTNNUzR4TWpFME9EZ3pMRFk0TGpVME9USTBOVElnTnpFdU56VTVPVEk1T0N3Mk9DNHhPREExTWpjMUlFdzRPQzQ0TXpZMU56WXhMRFU0TGpNeU5EWTJOVFlnUXpnNUxqUTNNemt5TVRFc05UY3VPVFUxT1RRM09TQTRPUzQ0TmpNeU16RXNOVGN1TWpneU1qUTBPU0E0T1M0NE5qTXlNekVzTlRZdU5UUTFNVE16TWlCTU9Ea3VPRFl6TWpNeExETTJMamd6TXpReE16Z2dRemc1TGpnMk16SXpNU3d6Tmk0d09UWXdPRFl6SURnNUxqUTNOVEF4TnpZc016VXVNemczTmpZMU55QTRPQzQ0TXpZMU56WXhMRE0xTGpBeE9UY3hOalFnVERjeExqYzFPVGt5T1Rnc01qVXVNVGs0TURFNU5pQkROekV1TkRReE1qVTFNaXd5TlM0d01UUXdORFE1SURjeExqQTRPVEV4TkRrc01qUXVPVEkwTWpRMk15QTNNQzQzTXpNeU56UTVMREkwTGpreU5ESTBOak1nVERjd0xqY3pNekkzTkRrc01qUXVPVEkwTWpRMk15QmFJRTB5TkRjdU9UWTNOalkxTERJMUxqQXlOekU0TmlCTU1qUTNMamsyTnpZMk5Td3lOUzQxTURZeU9UQXlJRXd5TkRrdU16QXlNekUxTERJMUxqVXdOakk1TURJZ1RESTBPUzR6TURJek1UVXNNamt1TURNeE1EY3pOU0JNTWpRNUxqZzBPVGcyTVN3eU9TNHdNekV3TnpNMUlFd3lORGt1T0RRNU9EWXhMREkxTGpVd05qSTVNRElnVERJMU1TNHlNVGczTXpJc01qVXVOVEEyTWprd01pQk1NalV4TGpJeE9EY3pNaXd5TlM0d01qY3hPRFlnVERJME55NDVOamMyTmpVc01qVXVNREkzTVRnMklFd3lORGN1T1RZM05qWTFMREkxTGpBeU56RTROaUJhSUUweU5URXVOamszT0RNMkxESTFMakF5TnpFNE5pQk1NalV4TGpZNU56Z3pOaXd5T1M0d016RXdOek0xSUV3eU5USXVNakV4TVRZeExESTVMakF6TVRBM016VWdUREkxTWk0eU1URXhOakVzTWpZdU5qWTVPREk1TmlCRE1qVXlMakl4TVRFMk1Td3lOaTQxTnpNME5qQTFJREkxTWk0eU1UVTFNakVzTWpZdU5ESTBOREU1TXlBeU5USXVNakV4TVRZeExESTJMakl5TlRBd01qWWdRekkxTWk0eU1EUTFPVGtzTWpZdU1ESXhPRFl3TkNBeU5USXVNakV4TVRZeExESTFMamcwTkRjNE5EUWdNalV5TGpJeE1URTJNU3d5TlM0M05EVTNPRFl5SUV3eU5USXVNakV4TVRZeExESTFMalkwTWpnMU1Ea2dUREkxTXk0ek5EQTBOemtzTWprdU1ETXdOelExTkNCTU1qVXpMamc0T0RBeU5pd3lPUzR3TXpBM05EVTBJRXd5TlRVdU1EVXhOVFkxTERJMUxqWTBNamcxTURrZ1F6STFOUzR3TlRFMU5qVXNNalV1T0RVNE16WTFOeUF5TlRVdU1ESXlOemN4TERJMkxqQTJOalF6TXpjZ01qVTFMakF4TnpReE9Dd3lOaTR5TlRnNE16azFJRU15TlRVdU1ERTFNalU1TERJMkxqUTBOakE1T1RRZ01qVTFMakF4TnpReE9Dd3lOaTQxT0RZM01UTTRJREkxTlM0d01UYzBNVGdzTWpZdU5qWTVOVEF4TlNCTU1qVTFMakF4TnpReE9Dd3lPUzR3TXpBM05EVTBJRXd5TlRVdU5UTXdOelF6TERJNUxqQXpNRGMwTlRRZ1RESTFOUzQxTXpBM05ETXNNalV1TURJMk9EVTNPU0JNTWpVMExqYzNOemcyTlN3eU5TNHdNalk0TlRjNUlFd3lOVE11TmpFME16STJMREk0TGpReE5EZzJORFlnVERJMU1pNDBPRFV3TURnc01qVXVNREkyT0RVM09TQk1NalV4TGpZNU56a3dPU3d5TlM0d01qWTROVGM1SUV3eU5URXVOamszT0RNMkxESTFMakF5TnpFNE5pQmFJRTB5TWpndU16VTROakE1TERNM0xqZ3lOakV4TlRNZ1F6SXlNeTQzTmpnM09EZ3NNemN1T0RJMk1URTFNeUF5TWpFdU1ETTFNVFUzTERNNUxqYzNPVFF6T0RVZ01qSXhMakF6TlRFMU55dzBNeTR3TWpjNE1UazFJRU15TWpFdU1ETTFNVFUzTERRMkxqVTFNVGN6TURjZ01qSXpMamMwT0RJMU55dzBOeTQxTVRrNU1ESTVJREl5T0M0eE5UTXlOemdzTkRjdU9UVTFOelV3TkNCRE1qTXpMalF5TXpReU9TdzBPQzQwTnpFMk5UTWdNak16TGpnek5EQTROeXcwT1M0eU5EVTBORFkxSURJek15NDRNelF3T0Rjc05UQXVNamd5T0RJNU15QkRNak16TGpnek5EQTROeXcxTWk0d09ESXhPREV5SURJek1pNHpPVGsxTVRFc05USXVPRFE1TkRBME1TQXlNamt1TURBNE9ESXpMRFV5TGpnME9UUXdOREVnUXpJeU5DNDNORGc1TURFc05USXVPRFE1TkRBME1TQXlNak11T0RFeU5Ua3pMRFV4TGpjNE5UazFPVFFnTWpJekxqUTVPVEV5TVN3ME9TNDJOalk0TkRBMklFTXlNak11TkRZeU1qRXNORGt1TkRNNU5qQTFJREl5TXk0eU9EWTVORGNzTkRrdU1qVTJNVGM0TmlBeU1qTXVNRFUwTWpReUxEUTVMakkxTmpFM09EWWdUREl5TUM0NU5qWTNNVFVzTkRrdU1qVTJNVGM0TmlCRE1qSXdMamN3T1RNMk9DdzBPUzR5TlRZeE56ZzJJREl5TUM0ME9EYzJNVEVzTkRrdU5EYzNORGsxTmlBeU1qQXVORGczTmpFeExEUTVMamN6TlRJNE1qZ2dRekl5TUM0ME9EYzJNVEVzTlRJdU5EUTNPRE16T0NBeU1qRXVPVFl6TWpVc05UVXVOalUxTmprNU5DQXlNamt1TURBNE9ESXpMRFUxTGpZMU5UWTVPVFFnUXpJek5DNHhNRGt5TXpNc05UVXVOalUxTmprNU5DQXlNemN1TURVd09UTXlMRFV6TGpZMU16WTBOVFlnTWpNM0xqQTFNRGt6TWl3MU1DNHhORFU1TkRRNElFTXlNemN1TURVd09UTXlMRFEyTGpZMk9EVTNOVFVnTWpNMExqWTNORFUzTkN3ME5TNDNNelV5TWpRMklESXlPUzQzTWpjME9DdzBOUzR3T0RFeE1qVXhJRU15TWpRdU56STRNelkxTERRMExqUXhPVFk0TmpjZ01qSTBMakkxTWpBd01pdzBOQzR3T1RVNU56ZzBJREl5TkM0eU5USXdNRElzTkRJdU9USTFNakV5TXlCRE1qSTBMakkxTWpBd01pdzBNUzQ1TlRnM09EZzFJREl5TkM0Mk5UVTRNVGdzTkRBdU5qWTJORFkzTnlBeU1qZ3VNelU0TmpBNUxEUXdMalkyTmpRMk56Y2dRekl6TVM0Mk5qVTNPVGNzTkRBdU5qWTJORFkzTnlBeU16SXVPRGc0TVRrNUxEUXhMak0zT1Rjd01Ua2dNak16TGpNNE9USXdOQ3cwTXk0Mk1EazJORGMxSUVNeU16TXVORE16TURBNUxEUXpMamd4T1RJME9DQXlNek11TmpFM09EQTRMRFF6TGprNE5qQXlOemtnTWpNekxqZ3pOREE0Tnl3ME15NDVPRFl3TWpjNUlFd3lNelV1T1RJeE5qRXpMRFF6TGprNE5qQXlOemtnUXpJek5pNHdOVEF5T0Rjc05ETXVPVGcyTURJM09TQXlNell1TVRjME9EVTFMRFF6TGprd056RTRNVGNnTWpNMkxqSTJNemd6TXl3ME15NDRNVFE0TmpZeUlFTXlNell1TXpVeE5ETTVMRFF6TGpjeE5qTXdPRFFnTWpNMkxqUXhNekF6T1N3ME15NDJNRFV5TmpVM0lESXpOaTQwTURBM01UZ3NORE11TkRjeU56VTROeUJETWpNMkxqQTNOelkyTml3ek9TNDJNekl6TmpVNUlESXpNeTQxTVRZMU1Ea3NNemN1T0RJMk1URTFNeUF5TWpndU16VTROakE1TERNM0xqZ3lOakV4TlRNZ1RESXlPQzR6TlRnMk1Ea3NNemN1T0RJMk1URTFNeUJhSUUweE56SXVPRFV3T1RVc05ESXVOVEUwTlRVd015QkRNVGN5TGpjNE1qY3lNeXcwTWk0MU1UUTFOVEF6SURFM01pNDNNRGN5TVRnc05ESXVOVEUwTlRVd015QXhOekl1TmpRMU5qRTVMRFF5TGpVME9EUTRNaklnVERFMk9TNHpOakF6TXpFc05EUXVORFkwT0RrNUlFTXhOamt1TWpNM01UTXlMRFEwTGpVek5EazROaUF4TmprdU1UVTFMRFEwTGpZMk5UUXdOemtnTVRZNUxqRTFOU3cwTkM0NE1EY3hNVFExSUV3eE5qa3VNVFUxTERRNExqVTNNVFV3TmlCRE1UWTVMakUxTlN3ME9DNDNNVE15TVRJMUlERTJPUzR5TXpjeE16SXNORGd1T0RRek1Ea3dOU0F4TmprdU16WXdNek14TERRNExqa3hNemN5TlRjZ1RERTNNaTQyTkRVMk1Ua3NOVEF1TnprMU9EWTFOQ0JETVRjeUxqYzJPRGd4TkN3MU1DNDROamN3TkRRMklERTNNaTQ1TURBeU1qa3NOVEF1T0RZM01EUTBOaUF4TnpNdU1ESXlNRFUxTERVd0xqYzVOVGcyTlRRZ1RERTNOaTR6TURjek5ESXNORGd1T1RFek56STFOeUJETVRjMkxqUXlPVEUzTXl3ME9DNDRORE0yTXpnM0lERTNOaTQxTVRJMk56TXNORGd1TnpFek1qRXlOU0F4TnpZdU5URXlOamN6TERRNExqVTNNVFV3TmlCTU1UYzJMalV4TWpZM015dzBOQzQ0TURjeE1UUTFJRU14TnpZdU5URXlOamN6TERRMExqWTJOVFF3TnprZ01UYzJMalF5T1RJekxEUTBMalV6TlRReU1qRWdNVGMyTGpNd056TTBNaXcwTkM0ME5qUTRPVGtnVERFM015NHdNakl3TlRVc05ESXVOVFE0TkRneU1pQkRNVGN5TGprMk1URTJPQ3cwTWk0MU1USXpORGcySURFM01pNDVNVGt5TWpnc05ESXVOVEUwTlRVd015QXhOekl1T0RVd09UVXNOREl1TlRFME5UVXdNeUJNTVRjeUxqZzFNRGsxTERReUxqVXhORFUxTURNZ1dpSWdabWxzYkQwaUl6Z3pRMFF5T1NJK1BDOXdZWFJvUGdvZ0lDQWdQQzluUGdvOEwzTjJaejRLXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9ub2RlanMuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSXlNekJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBeU16QWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThjR0YwYUNCa1BTSk5NQzQzTlRReE1qUXhNVElzTVRFMExqYzFNRE0wTVNCRE1DNDNOVFF4TWpReE1USXNNVE16TGprMk5EWTRNaUF4T1M0MU1UWTJNRE15TERFMU1TNDVNREl3TlNBME9TNHdPVGN5TERFMk1pNHdNVEkxTWpVZ1F6UXpMakU1TURJek1Ea3NNVGt4TGpjMU1ESXpJRFE0TGpBek9EVTJOeklzTWpFMUxqY3hPRFl4T0NBMk5DNHlNekkxTXprMUxESXlOUzR3TlRneE1EUWdRemd3TGpnM09ESTJOeXd5TXpRdU5qVTNNakExSURFd05TNDJOell5T1RZc01qSTRMakF4TWpZeUlERXlPUzR5TVRJNU9USXNNakEzTGpRek9EZ3hOaUJETVRVeUxqRTFOVGcyTlN3eU1qY3VNVGd5TURjMElERTNOUzR6TkRNM01qa3NNak0wTGprMU1qQXpNeUF4T1RFdU5USXlOakV5TERJeU5TNDFPRFl3TURVZ1F6SXdPQzR4TlRJd05qTXNNakUxTGprMU9UQXpOeUF5TVRNdU1qRXdNemd6TERFNU1DNHpOalV3TURNZ01qQTNMakUwTURBMU1pd3hOVGt1TmprNU1EazBJRU15TXpjdU9UUTVPREVzTVRRNUxqVXhNalkyTkNBeU5UVXVNVGd6T1RNM0xERXpOQzR5TVRjMk1EUWdNalUxTGpFNE16a3pOeXd4TVRRdU56VXdNelF4SUVNeU5UVXVNVGd6T1RNM0xEazFMams0TVRRMk5qVWdNak0yTGpNNE5qWTBOaXczT1M0M05ETTROaklnTWpBM0xqSXdOVEF5TkN3Mk9TNDJPVGM1T1RJeUlFTXlNVE11TnpNNU9UY3NNemN1TnpZME56RXhOeUF5TURndU1qQXlOeklzTVRRdU16YzNPVE0yTkNBeE9URXVNek00TkRFMkxEUXVOalV5TnpVMU1EVWdRekUzTlM0d056azBOVGtzTFRRdU56SXlPVEl4T1RjZ01UVXhMall5TWpReE9Td3pMalEwT0Rrek5qUXhJREV5T0M0ek5ESXhNallzTWpNdU56QTVNalU1TVNCRE1UQTBMakV5TWprek55d3lMakl3TkRVeU56WTBJRGd3TGpnNU56TTBOelFzTFRRdU16WXhNVE0yTnpVZ05qUXVNRFE1TXpreUxEVXVNemt5TXpnNU5UUWdRelEzTGpnd05qSXpOemNzTVRRdU56azBOek0xT0NBME15NHhOekV4TURrMkxETTVMakU1T0RZNU5qSWdORGt1TURrM01UazVPU3cyT1M0ME9EWTVOREExSUVNeU1DNDFNVFUwTWprMUxEYzVMalExTWpJd01qUWdNQzQzTlRReE1qUXhNVElzT1RZdU1EVTJOVEkxT1NBd0xqYzFOREV5TkRFeE1pd3hNVFF1TnpVd016UXhJRm9pSUdacGJHdzlJaU5HUmtaR1JrWWlQand2Y0dGMGFENEtJQ0FnSUR4d1lYUm9JR1E5SWsweU1ERXVNREkwTlRVekxEYzVMalkzTkRFeE56Z2dRekU1T0M0Mk9EQTFNelFzTnpndU9EWTNNekExTmlBeE9UWXVNalV4TmpVeExEYzRMakV3TXprek1EZ2dNVGt6TGpjMU1EYzNOQ3czTnk0ek9ERTVPREk0SUVNeE9UUXVNVFl4T0RJekxEYzFMamN3TkRRd09EVWdNVGswTGpVek9UQTROU3czTkM0d05EZzFOVE1nTVRrMExqZzNORFV5TERjeUxqUXlNRGcxTVRVZ1F6SXdNQzR6T0RBMk16SXNORFV1Tmprek5EZzJNaUF4T1RZdU56Z3dOVFEwTERJMExqRTJNVGN6TkRVZ01UZzBMalE0TnpNeE5Td3hOeTR3TnpJMU5qVTJJRU14TnpJdU5qazVOalV4TERFd0xqSTNORGs1TVRRZ01UVXpMalF5TVRneU5pd3hOeTR6TmpJMU5URTFJREV6TXk0NU5USXhOVEVzTXpRdU16QTJOREV6TWlCRE1UTXlMakEzT1RreE1pd3pOUzQ1TXpVM01qTTFJREV6TUM0eU1ESTBORFFzTXpjdU5qWXdOelUzTXlBeE1qZ3VNekkxTnpneUxETTVMalEyT0RZME5ERWdRekV5Tnk0d056VXpORE1zTXpndU1qY3lOVEF5TnlBeE1qVXVPREkyT1RFMkxETTNMakV4TmpVNE1UTWdNVEkwTGpVNE1UY3dOeXd6Tmk0d01UQTVNelE0SUVNeE1EUXVNVGMyT1RFNExERTNMamc1TXpRMU5EZ2dPRE11TnpJME1qWTNNU3d4TUM0eU5UZzFNREV5SURjeExqUTBNekV3TkRVc01UY3VNelk0TVRneU15QkROVGt1TmpZMk56QXlNaXd5TkM0eE9EVTBOalF6SURVMkxqRTNPVEl6TURJc05EUXVOREkzTXpZeU1TQTJNUzR4TXpVMU16VXNOamt1TnpVM01EZzBNU0JETmpFdU5qRTBNVFV5TkN3M01pNHlNRE0yTmpNNElEWXlMakUzTXpZeE1Ua3NOelF1TnpBeU1USTNNeUEyTWk0NE1EWXlOekU0TERjM0xqSTBNalF4T1RVZ1F6VTVMamt4TVRZME1UZ3NOemd1TURZME1URXpNU0ExTnk0eE1UY3hOVGsxTERjNExqazBNREV3TXpjZ05UUXVORFF6TXpNM0xEYzVMamczTWlCRE16QXVOVEl3T1RFeE1pdzRPQzR5TVRJME1URTJJREUxTGpJME1qazFPVGtzTVRBeExqSTRNemc1TmlBeE5TNHlOREk1TlRrNUxERXhOQzQ0TkRJME5EUWdRekUxTGpJME1qazFPVGtzTVRJNExqZzBOVGd5TmlBek1TNDJORE00TlRJekxERTBNaTQ0T1RFME16Z2dOVFl1TlRZd09URTNOU3d4TlRFdU5EQTRNREV5SUVNMU9DNDFNamN5TnpFc01UVXlMakE0TURBNE9DQTJNQzQxTmpjMk1qa3lMREUxTWk0M01UVTFOak1nTmpJdU5qY3dNekk0TkN3eE5UTXVNekU0T0RZeUlFTTJNUzQ1T0RjM09UVTRMREUxTmk0d05qWXlPRGdnTmpFdU16azBNVFE1TXl3eE5UZ3VOelU0TmpFeElEWXdMamc1TlRneU5Dd3hOakV1TXpnME5UY3lJRU0xTmk0eE5qazVOemsyTERFNE5pNHlOelEyT1NBMU9TNDROakExTmpJMExESXdOaTR3TXpnek56SWdOekV1TmpBMU5Ua3pNU3d5TVRJdU9ERXlOakU1SUVNNE15NDNNemN4TXpjMUxESXhPUzQ0TURnME56Z2dNVEEwTGpBNU56STRNaXd5TVRJdU5qRTNOVFV5SURFeU15NDVNakk1TURNc01UazFMakk0TnpVM09TQkRNVEkxTGpRNE9UZzNNeXd4T1RNdU9URTNOamczSURFeU55NHdOakkwTnpNc01Ua3lMalEyTkRrME15QXhNamd1TmpNM09EZzRMREU1TUM0NU5ESXlNVFlnUXpFek1DNDJOems0TlRZc01Ua3lMamt3T0RVMk9TQXhNekl1TnpFNE5qQTBMREU1TkM0M05qazFORFlnTVRNMExqYzBOalE1TlN3eE9UWXVOVEUxTURreUlFTXhOVE11T1RRNU9URTBMREl4TXk0d05EQXlOalFnTVRjeUxqa3hOalF6Tnl3eU1Ua3VOekV6TVRVM0lERTROQzQyTlRBMk1EZ3NNakV5TGpreU1EQXdOeUJETVRrMkxqYzNNREE0Tml3eU1EVXVPVEEwTURNM0lESXdNQzQzTURnNE1qY3NNVGcwTGpZM016RXpNU0F4T1RVdU5UazFNall4TERFMU9DNDROREl5TmprZ1F6RTVOUzR5TURRM01qVXNNVFUyTGpnMk9UUTRJREU1TkM0M05UQXlOQ3d4TlRRdU9EVTBNRFU0SURFNU5DNHlNems0TkRrc01UVXlMamd3TWpnME1TQkRNVGsxTGpZMk9UWTJPQ3d4TlRJdU16Z3dNVEk0SURFNU55NHdOek16TkRVc01UVXhMamswTXpjME1pQXhPVGd1TkRReU1ETXNNVFV4TGpRNU1EQTJNU0JETWpJMExqTTBOVFk1TVN3eE5ESXVPVEEzTlRJMklESTBNUzR4T1RrME5Ua3NNVEk1TGpBek1qZzBPQ0F5TkRFdU1UazVORFU1TERFeE5DNDROREkwTkRRZ1F6STBNUzR4T1RrME5Ua3NNVEF4TGpJek5EZ3lPQ0F5TWpVdU5ESTRPREV6TERnNExqQTNOVEkyTVRZZ01qQXhMakF5TkRVMU15dzNPUzQyTnpReE1UYzRJRXd5TURFdU1ESTBOVFV6TERjNUxqWTNOREV4TnpnZ1RESXdNUzR3TWpRMU5UTXNOemt1TmpjME1URTNPQ0JhSWlCbWFXeHNQU0lqTlRORE1VUkZJajQ4TDNCaGRHZytDaUFnSUNBOGNHRjBhQ0JrUFNKTk1UazFMalF3TmpJeU9Dd3hOREl1TXpJM05UVTBJRU14T1RRdU1UY3dOamN4TERFME1pNDNNelkxT1NBeE9USXVPVEF5T1RNNExERTBNeTR4TXpFNU5UTWdNVGt4TGpZeE1UQTNNeXd4TkRNdU5URTFNalE1SUVNeE9EZ3VOelV4TkRNMUxERXpOQzQwTmpJeE5DQXhPRFF1T0RreE9USTRMREV5TkM0NE16VTBPVFFnTVRnd0xqRTJPRGc1T1N3eE1UUXVPRGc1TlRBeUlFTXhPRFF1TmpjMU9UUTNMREV3TlM0eE9EQTBNRFVnTVRnNExqTTROakl6Tnl3NU5TNDJOelk0TXpJM0lERTVNUzR4TmpVNE16Z3NPRFl1TmpneU5EUTBOaUJETVRrekxqUTNOekkzT1N3NE55NHpOVEV6TURJMElERTVOUzQzTWpBM05EZ3NPRGd1TURVMk56WXdOU0F4T1RjdU9EZ3lOVGN4TERnNExqZ3dNVEl6TVRnZ1F6SXhPQzQzT1RJeE1Ua3NPVFV1T1RrNU16azJOeUF5TXpFdU5UUTJOamN4TERFd05pNDJOREU1T1RnZ01qTXhMalUwTmpZM01Td3hNVFF1T0RReU5EUTBJRU15TXpFdU5UUTJOamN4TERFeU15NDFOemMwTVRRZ01qRTNMamMzTWpFME1pd3hNelF1T1RFMk5qSTFJREU1TlM0ME1EWXlNamdzTVRReUxqTXlOelUxTkNCTU1UazFMalF3TmpJeU9Dd3hOREl1TXpJM05UVTBJRXd4T1RVdU5EQTJNakk0TERFME1pNHpNamMxTlRRZ1dpQk5NVGcyTGpFeU5UZzNOaXd4TmpBdU56RTJPVElnUXpFNE9DNHpPRGN3TkRFc01UY3lMakV6T0RrNE5TQXhPRGd1TnpFd01EQTNMREU0TWk0ME5qVTROaUF4T0RjdU1qRXlNakUyTERFNU1DNDFNemc0TURrZ1F6RTROUzQ0TmpZME5UY3NNVGszTGpjNU1qZzRJREU0TXk0eE5qQXdOVFlzTWpBeUxqWXlPVE15T1NBeE56a3VPREV6TnpVMkxESXdOQzQxTmpZek1qSWdRekUzTWk0Mk9USTRNVE1zTWpBNExqWTRPREEyTXlBeE5UY3VORFkwTnpNMkxESXdNeTR6TXpBek5qTWdNVFF4TGpBME1UY3lNaXd4T0RrdU1UazNPRGMySUVNeE16a3VNVFU1TURJMkxERTROeTQxTnpjNE1UWWdNVE0zTGpJMk1qWTFOU3d4T0RVdU9EUTNPVFUySURFek5TNHpOakF5TlRFc01UZzBMakF4TnpFME15QkRNVFF4TGpjeU56QTNMREUzTnk0d05UTTROak1nTVRRNExqQTVNREkyT1N3eE5qZ3VPVFU0TnprMElERTFOQzR6TURBMk16SXNNVFU1TGprMk9EUXlOeUJETVRZMUxqSXlNemsyT0N3eE5UZ3VPVGs1TVRJM0lERTNOUzQxTkRRd01EY3NNVFUzTGpReE5EUTJJREU0TkM0NU1ESTNPRGNzTVRVMUxqSTFNVEF5T1NCRE1UZzFMak0yTXpjd09Dd3hOVGN1TVRFd016azNJREU0TlM0M056TXhORGNzTVRVNExqa3pNemszSURFNE5pNHhNalU0TnpZc01UWXdMamN4TmpreUlFd3hPRFl1TVRJMU9EYzJMREUyTUM0M01UWTVNaUJNTVRnMkxqRXlOVGczTml3eE5qQXVOekUyT1RJZ1dpQk5PVEl1TWpjMk5qTTNPU3d5TURNdU9EVTBNREkzSUVNNE5TNHpNVGt6T1RBMExESXdOaTR6TVRFd05qUWdOemt1TnpjNE1qZzNOU3d5TURZdU16Z3hORFE1SURjMkxqUXlPRGMyT1Rnc01qQTBMalExTURBNE5pQkROamt1TXpBeE16a3lMREl3TUM0ek16a3lNRFVnTmpZdU16TTRNemc0TVN3eE9EUXVORGN3T0RJMUlEY3dMak00TURBNU1URXNNVFl6TGpFNE5EZ3hOeUJETnpBdU9EUXpNREl5T0N3eE5qQXVOelEzTURnMUlEY3hMak01TkRBek5qSXNNVFU0TGpJME1qazVNaUEzTWk0d01qa3hNRGt5TERFMU5TNDJPRE16T1RRZ1F6Z3hMakk0TlRNeU9URXNNVFUzTGpjek1ERTROeUE1TVM0MU1qazNOVE16TERFMU9TNHlNRE13TkRFZ01UQXlMalEzT1RJek15d3hOakF1TURrd05qazJJRU14TURndU56TXhOREkxTERFMk9DNDRPRGd3TURjZ01URTFMakkzT0RReU9Td3hOell1T1RjME1qSTRJREV5TVM0NE56WXhNU3d4T0RRdU1EVTBOVFE0SUVNeE1qQXVORE0wTmpJM0xERTROUzQwTkRZeE5UZ2dNVEU0TGprNU9EYzNOQ3d4T0RZdU56Y3hNREEwSURFeE55NDFOekE1TmpZc01UZzRMakF4T1RRek1TQkRNVEE0TGpnd05ESXlNeXd4T1RVdU5qZ3lOVE01SURFd01DNHdNVGc1Tnprc01qQXhMakV4T1RRM01pQTVNaTR5TnpZMk16YzVMREl3TXk0NE5UUXdNamNnVERreUxqSTNOall6Tnprc01qQXpMamcxTkRBeU55Qk1PVEl1TWpjMk5qTTNPU3d5TURNdU9EVTBNREkzSUZvZ1RUVTVMalk0TWpjNU1ETXNNVFF5TGpJM05EQTJNU0JETkRndU5qWTBPVE0yTkN3eE16Z3VOVEE0TWpZM0lETTVMalUyTlRrM05qVXNNVE16TGpZeE16a3dNU0F6TXk0ek1qa3dOamd6TERFeU9DNHlOek13T1RRZ1F6STNMamN5TkRneU1ESXNNVEl6TGpRM016WTBOeUF5TkM0NE9UVXpORFkwTERFeE9DNDNNRGczT0RrZ01qUXVPRGsxTXpRMk5Dd3hNVFF1T0RReU5EUTBJRU15TkM0NE9UVXpORFkwTERFd05pNDJNVFEyTkRrZ016Y3VNVFl5TURJNU9TdzVOaTR4TWpBd05UWTFJRFUzTGpZeU1EY3hNek1zT0RndU9UZzNNRFEzT1NCRE5qQXVNVEF6TURnNE9DdzRPQzR4TWpFMU1UUTFJRFl5TGpjd01UWTVPVGtzT0RjdU16QTFPRFV6T1NBMk5TNHpPVGcwTkRjNExEZzJMalV6T1RZMk16Z2dRelk0TGpJeU5Ua3hNRFFzT1RVdU56TTNNVFl5TmlBM01TNDVNelE1T1RRMUxERXdOUzR6TlRNek5URWdOell1TkRFeE1EY3pNU3d4TVRVdU1EYzNNekk1SUVNM01TNDROemN3TnpjNExERXlOQzQ1TkRVMk9UWWdOamd1TVRFMU16QTFOaXd4TXpRdU56RTFNVEkwSURZMUxqSTJNREE1TVRFc01UUTBMakF5TURReE1TQkROak11TXpNM05UYzNOQ3d4TkRNdU5EWTNOemc1SURZeExqUTNORGs1TVRRc01UUXlMamc0TmpJd09TQTFPUzQyT0RJM09UQXpMREUwTWk0eU56UXdOakVnVERVNUxqWTRNamM1TURNc01UUXlMakkzTkRBMk1TQk1OVGt1TmpneU56a3dNeXd4TkRJdU1qYzBNRFl4SUZvZ1RUY3dMall3T0RVME1EVXNOamN1T1RBek16UTJOQ0JETmpZdU16WXlNVEUzT0N3ME5pNHlNREUwTmpReklEWTVMakU0TWpNME1Td3lPUzQ0TXpBek16UTNJRGMyTGpJM09URTFNVFlzTWpVdU56SXlNalk0TnlCRE9ETXVPRE00TkRreE9Dd3lNUzR6TkRVNU16VTJJREV3TUM0MU5UUXpNRFlzTWpjdU5UZzFOalU1SURFeE9DNHhOekl5TlRVc05ETXVNakk1TWpBNU55QkRNVEU1TGpJNU9EUXhNeXcwTkM0eU1qa3dOemM0SURFeU1DNDBNamc1T1RZc05EVXVNamMxTmpBd09TQXhNakV1TlRZeU56azNMRFEyTGpNMU9ETXlNakVnUXpFeE5DNDVPVGMyT1RRc05UTXVOREEzTmpjek1pQXhNRGd1TlRFd05qRTRMRFl4TGpRek16RTJNallnTVRBeUxqTXhNemt6TERjd0xqRTNPRFU0T1RFZ1F6a3hMalk0TnpBeE16TXNOekV1TVRZek5UYzFPQ0E0TVM0MU1UUTFPREk0TERjeUxqYzBOVGd5T0RnZ056SXVNVFl4T0RNMU1TdzNOQzQ0TmpRMk1UVTRJRU0zTVM0MU56TTRNVGt6TERjeUxqUTVPVEk0TURRZ056RXVNRFV5T1Rjd09TdzNNQzR4TnpVek56RTJJRGN3TGpZd09EVTBNRFVzTmpjdU9UQXpNelEyTkNCTU56QXVOakE0TlRRd05TdzJOeTQ1TURNek5EWTBJRXczTUM0Mk1EZzFOREExTERZM0xqa3dNek0wTmpRZ1dpQk5NVFk0TGpBM05UazJOU3c1TVM0NU56QTFOalFnUXpFMk5TNDROREF4TXprc09EZ3VNVEE0TmpRME1TQXhOak11TlRRME56ZzFMRGcwTGpNek9EQXlNelVnTVRZeExqSXdORGM0T1N3NE1DNDJOekF6TmpZeElFTXhOamd1TkRFME1qRTJMRGd4TGpVNE1UYzFNRElnTVRjMUxqTXlNVFU0T1N3NE1pNDNPVEUxTmpZMElERTRNUzQ0TURneU5qUXNPRFF1TWpjeU1EWXlPU0JETVRjNUxqZzJNRGd4TXl3NU1DNDFNVE16T1RVeElERTNOeTQwTXpNMU5DdzVOeTR3TXprd09ESTFJREUzTkM0MU56WXpNVFFzTVRBekxqY3lPRGcyTnlCRE1UY3lMalV5Tmpjd05pdzVPUzQ0TXpjMU9EWTRJREUzTUM0ek5UZzROU3c1TlM0NU1UUXhNekEwSURFMk9DNHdOelU1TmpVc09URXVPVGN3TlRZMElFd3hOamd1TURjMU9UWTFMRGt4TGprM01EVTJOQ0JNTVRZNExqQTNOVGsyTlN3NU1TNDVOekExTmpRZ1dpQk5NVEk0TGpNeU9EazVPU3cxTXk0eU5UWTRORGcwSUVNeE16SXVOemd4TXpRNExEVTRMakE0TURReU56UWdNVE0zTGpJME1ERXpNaXcyTXk0ME5qVTROemtnTVRReExqWXlOVGN4Tml3Mk9TNHpNRGt3TXpNM0lFTXhNemN1TWpBMk16UTNMRFk1TGpFd01ESTVNaklnTVRNeUxqY3pNakkzT1N3Mk9DNDVPVEUyT1RneklERXlPQzR5TWpFeU1TdzJPQzQ1T1RFMk9UZ3pJRU14TWpNdU56VXlOemN6TERZNExqazVNVFk1T0RNZ01URTVMak14TVRZNE5pdzJPUzR3T1RjNE56a2dNVEUwTGpreE9UWTJOeXcyT1M0ek1ETXdNREEzSUVNeE1Ua3VNekE1TmpjMUxEWXpMalV4TkRFME1qa2dNVEl6TGpnd056QTNMRFU0TGpFek5Ua3pNRGdnTVRJNExqTXlPRGs1T1N3MU15NHlOVFk0TkRnMElFd3hNamd1TXpJNE9UazVMRFV6TGpJMU5qZzBPRFFnVERFeU9DNHpNamc1T1Rrc05UTXVNalUyT0RRNE5DQmFJRTA0T0M0ek1qYzBOREEzTERreUxqQXpOek15T1RFZ1F6ZzJMakE1TkRBeU5qY3NPVFV1T1RFd01UQTROQ0E0TXk0NU5qWXpPVEV5TERrNUxqZ3hNakkwT0RNZ09ERXVPVFE0T1RVNE5Dd3hNRE11TnpJeE5qSTRJRU0zT1M0eE16YzVPRFU0TERrM0xqQTFOVEUzTURVZ056WXVOek16TWpNME9TdzVNQzQwT1RrM01qQXpJRGMwTGpjMk9EZzVNalFzT0RRdU1UWTVPVEEwTVNCRE9ERXVNakUxTnpRNE5pdzRNaTQzTWpjeU1UUTBJRGc0TGpBNU1EVTBOVElzT0RFdU5UUTNOVFl6TXlBNU5TNHlOVFF4TWpFc09EQXVOalV6TkRjek55QkRPVEl1T0RneE1UUXpPQ3c0TkM0ek5UUTVNVFU1SURrd0xqVTJOamc0TnpZc09EZ3VNVFV6TWpnNE15QTRPQzR6TWpjME5EQTNMRGt5TGpBek5qVXlORGNnVERnNExqTXlOelEwTURjc09USXVNRE0zTXpJNU1TQk1PRGd1TXpJM05EUXdOeXc1TWk0d016Y3pNamt4SUZvZ1RUazFMalEyTURRME9UTXNNVFE1TGpjeE9UazRNU0JET0RndU1EVTVNVGN6Tml3eE5EZ3VPRGswTWpZMUlEZ3hMakE0TVRBeE1UZ3NNVFEzTGpjM05UTTBOeUEzTkM0Mk16VTNOalF6TERFME5pNHpOekkwTnpRZ1F6YzJMall6TVRRM09EUXNNVE01TGpreU9UWTBJRGM1TGpBNE9UTXhPVGNzTVRNekxqSXpOREl5TlNBNE1TNDVOVGs0TVRjM0xERXlOaTQwTWpReE9ESWdRemd6TGprNE1qUTNPVElzTVRNd0xqTXpNRGMwTmlBNE5pNHhNVGcxTmpBNUxERXpOQzR5TXpRME9UVWdPRGd1TXpZMU5qUTVOeXd4TXpndU1URTFOekl4SUV3NE9DNHpOall3TlRFNExERXpPQzR4TVRVM01qRWdRemt3TGpZMU5EazJPVFFzTVRReUxqQTJPVGMwTkNBNU15NHdNall6TXpjNExERTBOUzQ1TkRJNU1qVWdPVFV1TkRZd05EUTVNeXd4TkRrdU56RTVPVGd4SUV3NU5TNDBOakEwTkRrekxERTBPUzQzTVRrNU9ERWdURGsxTGpRMk1EUTBPVE1zTVRRNUxqY3hPVGs0TVNCYUlFMHhNamd1TlRrMk1EWXNNVGMzTGpFd09EVTJNaUJETVRJMExqQXlNVEEwTERFM01pNHhOekl6TmpjZ01URTVMalExTnpZNE5Dd3hOall1TnpFeU1UQTNJREV4TlM0d01EQTVNVEVzTVRZd0xqZ3pPRGM0TnlCRE1URTVMak15TnpNM01Td3hOakV1TURBNE5URTFJREV5TXk0M016Z3lPVE1zTVRZeExqQTVOVE01TVNBeE1qZ3VNakl4TWpFc01UWXhMakE1TlRNNU1TQkRNVE15TGpneU5qYzVOeXd4TmpFdU1EazFNemt4SURFek55NHpOemsyT1RVc01UWXdMams1TVRZeU15QXhOREV1T0RZeE1EQXpMREUyTUM0M09USXhNeklnUXpFek55NDBOakE1TXprc01UWTJMamMzTVRJek1TQXhNek11TURFNE1qUTBMREUzTWk0eU16azVNemNnTVRJNExqVTVOakEyTERFM055NHhNRGcxTmpJZ1RERXlPQzQxT1RZd05pd3hOemN1TVRBNE5UWXlJRXd4TWpndU5UazJNRFlzTVRjM0xqRXdPRFUyTWlCYUlFMHhOelF1TmpZNE5ERTRMREV5Tmk0d056Y3dPRFFnUXpFM055NDJPRGcxTXpRc01UTXlMamsyTURjeU9TQXhPREF1TWpNME5EVTNMREV6T1M0Mk1qRXhOVE1nTVRneUxqSTFOVGt4TWl3eE5EVXVPVFUwTVRnM0lFTXhOelV1TnpBME5EZzBMREUwTnk0ME5EZzNOaUF4TmpndU5qTXhNREF4TERFME9DNDJOVEkxTkRRZ01UWXhMakUzT0RJME5Dd3hORGt1TlRRM01ETTJJRU14TmpNdU5USXpPRGN5TERFME5TNDRNams1TURjZ01UWTFMamd6T1RNek5Dd3hOREV1T1RrME5UTXlJREUyT0M0eE1UUTFOellzTVRNNExqQTBPVE0xTnlCRE1UY3dMalF4TmpNMk5Td3hNelF1TURVM09UTWdNVGN5TGpZd01Ua3hOeXd4TXpBdU1EWXdORFk1SURFM05DNDJOamcwTVRnc01USTJMakEzTnpBNE5DQk1NVGMwTGpZMk9EUXhPQ3d4TWpZdU1EYzNNRGcwSUV3eE56UXVOalk0TkRFNExERXlOaTR3Tnpjd09EUWdXaUJOTVRVNUxqYzFNekkxTERFek15NHlNalk1T0RVZ1F6RTFOaTR5TWpFeE16UXNNVE01TGpNMU1USTNOeUF4TlRJdU5UazBPVEF6TERFME5TNHhPVGMyTkRrZ01UUTRMamt4TXpVM01Td3hOVEF1TnpFMk1qTWdRekUwTWk0eU1EZzFNRElzTVRVeExqRTVOVFkxTVNBeE16VXVNamd4TkRJc01UVXhMalEwTWpZd01pQXhNamd1TWpJeE1qRXNNVFV4TGpRME1qWXdNaUJETVRJeExqRTRPVFUxTml3eE5URXVORFF5TmpBeUlERXhOQzR6TkRrM05Td3hOVEV1TWpJME1qQTNJREV3Tnk0M05qTXpNekVzTVRVd0xqYzVOalkyT1NCRE1UQXpMamt6TXpVNE55d3hORFV1TWpBMU5qazBJREV3TUM0eU1qZzFNalVzTVRNNUxqTTBNakF5TnlBNU5pNDNNVGc1TXpFM0xERXpNeTR5TnprMk56TWdURGsyTGpjeE9UY3pOakVzTVRNekxqSTNPVFkzTXlCRE9UTXVNakU1TXprek5Td3hNamN1TWpNek9ERWdPRGt1T1RrM056YzFOQ3d4TWpFdU1UTTJPRFkzSURnM0xqQTNPRFl4TVRJc01URTFMakEzTkRFeE1pQkRPRGt1T1RrMk9UY3dPU3d4TURndU9UazNNamM1SURrekxqSXhNREUwTWprc01UQXlMamc1TXpRNU9TQTVOaTQyT1RBek56VTFMRGsyTGpnMU9EUTVORGtnVERrMkxqWTRPVFUzTVRFc09UWXVPRFU1TnpBeE5TQkRNVEF3TGpFM09UQTFOQ3c1TUM0NE1EZzJNRGsySURFd015NDROVEUxTXpnc09EUXVPVGN6TkRrNE9DQXhNRGN1TmpRMU9EZzRMRGM1TGpReE56VXhORFVnUXpFeE5DNHpOalU0TXpnc056Z3VPVEE1TlRNMk5pQXhNakV1TWpVMk56SXpMRGM0TGpZME5EUTROekVnTVRJNExqSXlNRGd3T0N3M09DNDJORFEwT0RjeElFd3hNamd1TWpJeE1qRXNOemd1TmpRME5EZzNNU0JETVRNMUxqSXhOalkyTml3M09DNDJORFEwT0RjeElERTBNaTR4TVRZek9Ua3NOemd1T1RFeE5UUTNOU0F4TkRndU9ETTBNek0zTERjNUxqUXlNemswT1RnZ1F6RTFNaTQxTnpBM056RXNPRFF1T1RNNU16RXhPU0F4TlRZdU1qRTRNekU1TERrd0xqYzFOVFV4T1RJZ01UVTVMamN5TVRRM055dzVOaTQ0TURjME1UVTJJRU14TmpNdU1qWTBORFV6TERFd01pNDVNamN5T0RRZ01UWTJMalV4T1RBMU1Td3hNRGd1T1Rrd05EUXhJREUyT1M0ME5qSXpORGNzTVRFMExqa3pOamsyTWlCRE1UWTJMalV5Tnprc01USXdMams0TlRZMElERTJNeTR5T0RBMU5ERXNNVEkzTGpFd09Ua3pNeUF4TlRrdU56VXpNalVzTVRNekxqSXlOams0TlNCTU1UVTVMamMxTXpJMUxERXpNeTR5TWpZNU9EVWdUREUxT1M0M05UTXlOU3d4TXpNdU1qSTJPVGcxSUZvZ1RURTNPUzQyTmpVM05EY3NNalV1TkRNMU1EazRNaUJETVRnM0xqSXpNak15Tnl3eU9TNDNPVGcxTmpBNUlERTVNQzR4TnpRNE1UZ3NORGN1TXprMk16azVNU0F4T0RVdU5ESXdPRElzTnpBdU5EY3lOVGszSUVNeE9EVXVNVEUzTlRZeExEY3hMamswTlRBME9UVWdNVGcwTGpjM05qQTVOU3czTXk0ME5EUTROVEUxSURFNE5DNDBNRFV5TmpZc056UXVPVFkwTnpZek5TQkRNVGMxTGpBek1EYzVPU3czTWk0NE1ERTNNelExSURFMk5DNDROVEV4TWprc056RXVNVGt5TVRNeUlERTFOQzR4T1RNeU5EVXNOekF1TVRreU1qWXpPU0JETVRRM0xqazRORFE1TERZeExqTTFNRGN4TVRjZ01UUXhMalUxTURVd05DdzFNeTR6TVRJM05UUXhJREV6TlM0d09USXpPRFlzTkRZdU16VXpPRGszT0NCRE1UTTJMamd5T0RZNE1pdzBOQzQyT0RNMU5qTXpJREV6T0M0MU5qSTFOalFzTkRNdU1Ea3dPRFV6TVNBeE5EQXVNamc1TWpBMkxEUXhMalU0Tnpnek16VWdRekUxTmk0NU56QTRNelFzTWpjdU1EY3dORFF4TlNBeE56SXVOVFl5TURrNUxESXhMak16T0RZNU5pQXhOemt1TmpZMU56UTNMREkxTGpRek5UQTVPRElnVERFM09TNDJOalUzTkRjc01qVXVORE0xTURrNE1pQk1NVGM1TGpZMk5UYzBOeXd5TlM0ME16VXdPVGd5SUZvaUlHWnBiR3c5SWlOR1JrWkdSa1lpUGp3dmNHRjBhRDRLSUNBZ0lEeHdZWFJvSUdROUlrMHhNamd1TWpJeE1qRXNPVFF1TmpZMU16QXdPQ0JETVRNNUxqTTJORFUxTERrMExqWTJOVE13TURnZ01UUTRMak01T0RNMU15d3hNRE11TmprNE56QXlJREUwT0M0ek9UZ3pOVE1zTVRFMExqZzBNalEwTkNCRE1UUTRMak01T0RNMU15d3hNalV1T1RnMU56ZzBJREV6T1M0ek5qUTFOU3d4TXpVdU1ERTVOVGc1SURFeU9DNHlNakV5TVN3eE16VXVNREU1TlRnNUlFTXhNVGN1TURjM09EY3NNVE0xTGpBeE9UVTRPU0F4TURndU1EUTBNRFkyTERFeU5TNDVPRFUzT0RRZ01UQTRMakEwTkRBMk5pd3hNVFF1T0RReU5EUTBJRU14TURndU1EUTBNRFkyTERFd015NDJPVGczTURJZ01URTNMakEzTnpnM0xEazBMalkyTlRNd01EZ2dNVEk0TGpJeU1USXhMRGswTGpZMk5UTXdNRGdpSUdacGJHdzlJaU0xTTBNeFJFVWlQand2Y0dGMGFENEtQQzl6ZG1jK0NnPT1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL3JlYWN0LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0l5T1Rad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQXlPVFlpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4WkdWbWN6NEtJQ0FnSUNBZ0lDQThjbUZrYVdGc1IzSmhaR2xsYm5RZ1kzZzlJalV3SlNJZ1kzazlJalV3SlNJZ1puZzlJalV3SlNJZ1puazlJalV3SlNJZ2NqMGlOVEFsSWlCcFpEMGljbUZrYVdGc1IzSmhaR2xsYm5RdE1TSStDaUFnSUNBZ0lDQWdJQ0FnSUR4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNNU0wSTBSVGNpSUc5bVpuTmxkRDBpTUNVaVBqd3ZjM1J2Y0Q0S0lDQWdJQ0FnSUNBZ0lDQWdQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJMEk1UkRGR09DSWdiMlptYzJWMFBTSTFPUzR5TnpNek5UYzRKU0krUEM5emRHOXdQZ29nSUNBZ0lDQWdJQ0FnSUNBOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak9VTkNOa1V3SWlCdlptWnpaWFE5SWpFd01DVWlQand2YzNSdmNENEtJQ0FnSUNBZ0lDQThMM0poWkdsaGJFZHlZV1JwWlc1MFBnb2dJQ0FnUEM5a1pXWnpQZ29nSUNBZ1BHYytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEV5T0M0d016SXpORElzTUM0ME5UVTFNVFl3TVRRZ1REQXVNamszT1RBM05EY3pMRGMwTGpJd016RXdNeklnVERBdU1qazNPVEEzTkRjekxESXlNUzQyT1RneU56Z2dUREV5T0M0d016SXpORElzTWprMUxqUTBOak15SUV3eU5UVXVOelkzTWpNeExESXlNUzQyT1RneU56Z2dUREkxTlM0M05qY3lNekVzTnpRdU1qQXpNVEF6TWlCTU1USTRMakF6TWpNME1pd3dMalExTlRVeE5qQXhOQ0JhSWlCbWFXeHNQU0oxY213b0kzSmhaR2xoYkVkeVlXUnBaVzUwTFRFcElqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXlPQzR3TXpNM01EZ3NOelV1TWpZeU5qTXpOU0JNTmpRdU5qa3dNVEEyT0N3eE1URXVPRE0wTVRreUlFdzJOQzQyT1RBeE1EWTRMREU0TkM0NU56YzNOalVnVERFeU9DNHdNek0zTURnc01qSXhMalUwT1RjM09TQk1NVGt4TGpNM09ESXlNU3d4T0RRdU9UYzNOelkxSUV3eE9URXVNemM0TWpJeExERXhNUzQ0TXpReE9USWdUREV5T0M0d016TTNNRGdzTnpVdU1qWXlOak16TlNCYUlpQm1hV3hzUFNJak5rWTVOVVJDSWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEdjZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWm1sc2JDMXZjR0ZqYVhSNVBTSXdMakVpUGdvZ0lDQWdJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVEk0TERBZ1REQXNOelF1TWpRNU1URXdNeUJNTVRJNExERTBNeTQ1TkRNd05pQk1NalUyTERjMExqY3dORFl5TmpNZ1RERXlPQ3d3SUZvaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBZ0lDQWdQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01DNHdNREF3TURBc0lERTFNeTQxTURnNE9UY3BJaUJtYVd4c1BTSWpSa1pHUmtaR0lpQm1hV3hzTFc5d1lXTnBkSGs5SWpBdU1TSStDaUFnSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweE1qZ3NNQ0JNTUN3Mk55NDROekU0T0RZeElFd3hNamdzTVRReExqWTJOVFE0SUV3eU5UVXVOVFEwTkRnMExEWTNMalF4TmpNM01ERWdUREV5T0N3d0lGb2lQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThMMmMrQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZ289XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy93ZWJwYWNrLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjRmNGY0OyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuXFxuaGVhZGVyIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTsgfVxcblxcbmxpIGEge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM4ODg7IH1cXG5cXG5pbWcge1xcbiAgbWFyZ2luOiAwIDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG4vLyBcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fRm9vdGVyLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2hidG5zLmNvbS9naXRodWItYnRuLmh0bWw/dXNlcj1kYXJ1bDc1JnJlcG89d2ViLXJlYWN0JnR5cGU9c3RhciZjb3VudD10cnVlJnY9MicgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nMCcgd2lkdGg9JzE3MHB4JyBoZWlnaHQ9JzIwcHgnPjwvaWZyYW1lPlxuICAgICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2doYnRucy5jb20vZ2l0aHViLWJ0bi5odG1sP3VzZXI9ZGFydWw3NSZyZXBvPXdlYi1yZWFjdCZ0eXBlPWZvcmsmY291bnQ9dHJ1ZSZ2PTInIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9JzAnIHdpZHRoPScxNzBweCcgaGVpZ2h0PScyMHB4Jz48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkZvb3Rlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnRm9vdGVyJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fRm9vdGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0Zvb3Rlci5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNGY0ZjQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogNzUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250OiAxMDAlIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXFxuaDEsIGgyLCBoMyB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcblxcbmRpdi5tYWluLWNvbnRlbnQge1xcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4OyB9XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiAjNTNDMURFO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzUzQzFERTsgfVxcblxcbmlucHV0IHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7IH1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogM3B4OyB9XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogIzUzQzFERTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1M0MxREU7IH1cXG5cXG5sYWJlbCB7XFxuICBsaW5lLWhlaWdodDogMjVweDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP2luZGVudGVkU3ludGF4IS4vX0FwcC5zYXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9fQXBwLnNhc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP2luZGVudGVkU3ludGF4IS4vX0FwcC5zYXNzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3NcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMSB7XFxuICBjb2xvcjogIzVhODg5NDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXI/aW5kZW50ZWRTeW50YXghLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zYXNzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS4vYXBwL2ltYWdlcy9mYXZpY29uLmljb1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG4vLyBUT0RPOiBkbyBpdCBpbiBzdG9yZSBtYXliZVxuY29uc3QgbWV0YXMgPSByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvY29uZmlnLmpzb24nKS5oZWxtZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q09OVEFDVCBQQUdFPC9oMT5cbiAgICAgICAgPEhlbG1ldCB0aXRsZT17bWV0YXMudGl0bGV9IHRpdGxlVGVtcGxhdGU9JyVzIHwgQ29udGFjdCBwYWdlJyAvPlxuICAgICAgICA8cD50ZXN0IHRoZSA0MDQgcGFnZSA8YSBocmVmPScvbWlkZGxlb2Zub3doZXJlJz5oZXJlPC9hPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24vQ29udGFjdC5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEZMVVhcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xuaW1wb3J0IEFwcFN0b3JlRGVwZW5kaW5nIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZURlcGVuZGluZyc7XG5pbXBvcnQgSG9tZVNlY3Rpb25BY3Rpb25zIGZyb20gJy4vSG9tZVNlY3Rpb25BY3Rpb25zJztcbmltcG9ydCBjb25uZWN0VG9TdG9yZXMgZnJvbSAnYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcyc7XG5cbi8vIENPTVBPTkVOVFxuaW1wb3J0IEhvbWVTZWN0aW9uU3ViUGFydE9uZSBmcm9tICcuL0hvbWVTZWN0aW9uU3ViUGFydE9uZSc7XG5pbXBvcnQgSG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGZyb20gJy4vSG9tZVNlY3Rpb25TdWJQYXJ0VHdvJztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fSG9tZVNlY3Rpb24uc2NzcycpO1xufVxuXG5sZXQgaG9tZVNlY3Rpb24gPSBjbGFzcyBIb21lU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gcmV0cmlldmUgZGF0YSBmcm9tIHN0b3JlXG4gICAgbGV0IHN0b3JlUHJvcHMgPSBIb21lU2VjdGlvbi5nZXRQcm9wc0Zyb21TdG9yZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SE9NRSBQQUdFPC9oMT5cbiAgICAgICAgPEhvbWVTZWN0aW9uQWN0aW9ucyAvPlxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0T25lIGFwaURhdGE9e3N0b3JlUHJvcHMuYXBpRGF0YX0gLz5cbiAgICAgICAgPEhvbWVTZWN0aW9uU3ViUGFydFR3byBhcGlEYXRhPXtzdG9yZVByb3BzLmFwaURhdGF9Lz5cbiAgICAgICAgPEhvbWVTZWN0aW9uU3ViUGFydFR3byBhcGlEYXRhPXtzdG9yZVByb3BzLmFwaURhdGFEZXBlbmRpbmd9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xuICAgIHJldHVybiBbQXBwU3RvcmUsIEFwcFN0b3JlRGVwZW5kaW5nXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaURhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZ2V0KCdkYXRhQnlSZXN0QXBpJykudG9KUygpLFxuICAgICAgYXBpRGF0YURlcGVuZGluZzogQXBwU3RvcmVEZXBlbmRpbmcuZ2V0U3RhdGUoKS5nZXQoJ2RhdGFCeVJlc3RBcGknKS50b0pTKClcbiAgICB9O1xuICB9XG59O1xuXG5ob21lU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSG9tZVNlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXMoaG9tZVNlY3Rpb24pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbi5qc1xuICoqLyIsIi8qKlxuICogJ0hpZ2hlciBPcmRlciBDb21wb25lbnQnIHRoYXQgY29udHJvbHMgdGhlIHByb3BzIG9mIGEgd3JhcHBlZFxuICogY29tcG9uZW50IHZpYSBzdG9yZXMuXG4gKlxuICogRXhwZWN0cyB0aGUgQ29tcG9uZW50IHRvIGhhdmUgdHdvIHN0YXRpYyBtZXRob2RzOlxuICogICAtIGdldFN0b3JlcygpOiBTaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mIHN0b3Jlcy5cbiAqICAgLSBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpOiBTaG91bGQgcmV0dXJuIHRoZSBwcm9wcyBmcm9tIHRoZSBzdG9yZXMuXG4gKlxuICogRXhhbXBsZSB1c2luZyBvbGQgUmVhY3QuY3JlYXRlQ2xhc3MoKSBzdHlsZTpcbiAqXG4gKiAgICBjb25zdCBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICAgc3RhdGljczoge1xuICogICAgICAgIGdldFN0b3Jlcyhwcm9wcykge1xuICogICAgICAgICAgcmV0dXJuIFtteVN0b3JlXVxuICogICAgICAgIH0sXG4gKiAgICAgICAgZ2V0UHJvcHNGcm9tU3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgICByZXR1cm4gbXlTdG9yZS5nZXRTdGF0ZSgpXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgLy8gVXNlIHRoaXMucHJvcHMgbGlrZSBub3JtYWwgLi4uXG4gKiAgICAgIH1cbiAqICAgIH0pXG4gKiAgICBNeUNvbXBvbmVudCA9IGNvbm5lY3RUb1N0b3JlcyhNeUNvbXBvbmVudClcbiAqXG4gKlxuICogRXhhbXBsZSB1c2luZyBFUzYgQ2xhc3M6XG4gKlxuICogICAgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICogICAgICBzdGF0aWMgZ2V0U3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgcmV0dXJuIFtteVN0b3JlXVxuICogICAgICB9XG4gKiAgICAgIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICByZXR1cm4gbXlTdG9yZS5nZXRTdGF0ZSgpXG4gKiAgICAgIH1cbiAqICAgICAgcmVuZGVyKCkge1xuICogICAgICAgIC8vIFVzZSB0aGlzLnByb3BzIGxpa2Ugbm9ybWFsIC4uLlxuICogICAgICB9XG4gKiAgICB9XG4gKiAgICBNeUNvbXBvbmVudCA9IGNvbm5lY3RUb1N0b3JlcyhNeUNvbXBvbmVudClcbiAqXG4gKiBBIGdyZWF0IGV4cGxhbmF0aW9uIG9mIHRoZSBtZXJpdHMgb2YgaGlnaGVyIG9yZGVyIGNvbXBvbmVudHMgY2FuIGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vYml0Lmx5LzFhYlBrclBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9mdW5jdGlvbnMgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBjb25uZWN0VG9TdG9yZXMoQ29tcG9uZW50KSB7XG4gIC8vIENoZWNrIGZvciByZXF1aXJlZCBzdGF0aWMgbWV0aG9kcy5cbiAgaWYgKCEoMCwgX2Z1bmN0aW9ucy5pc0Z1bmN0aW9uKShDb21wb25lbnQuZ2V0U3RvcmVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdFRvU3RvcmVzKCkgZXhwZWN0cyB0aGUgd3JhcHBlZCBjb21wb25lbnQgdG8gaGF2ZSBhIHN0YXRpYyBnZXRTdG9yZXMoKSBtZXRob2QnKTtcbiAgfVxuICBpZiAoISgwLCBfZnVuY3Rpb25zLmlzRnVuY3Rpb24pKENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0VG9TdG9yZXMoKSBleHBlY3RzIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB0byBoYXZlIGEgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIG1ldGhvZCcpO1xuICB9XG5cbiAgLy8gV3JhcHBlciBDb21wb25lbnQuXG4gIHZhciBTdG9yZUNvbm5lY3Rpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnU3RvcmVDb25uZWN0aW9uJyxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHN0b3JlcyA9IENvbXBvbmVudC5nZXRTdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICBzdG9yZS5saXN0ZW4oX3RoaXMub25DaGFuZ2UpO1xuICAgICAgfSk7XG4gICAgICBpZiAoQ29tcG9uZW50LmNvbXBvbmVudERpZENvbm5lY3QpIHtcbiAgICAgICAgQ29tcG9uZW50LmNvbXBvbmVudERpZENvbm5lY3QodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzdG9yZXMgPSBDb21wb25lbnQuZ2V0U3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICBzdG9yZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgc3RvcmUudW5saXN0ZW4oX3RoaXMyLm9uQ2hhbmdlKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbXBvbmVudC5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9mdW5jdGlvbnMuYXNzaWduKSh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFN0b3JlQ29ubmVjdGlvbjtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29ubmVjdFRvU3RvcmVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lYWNoT2JqZWN0ID0gZWFjaE9iamVjdDtcbmV4cG9ydHMuYXNzaWduID0gYXNzaWduO1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufTtcblxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gZWFjaE9iamVjdChmLCBvKSB7XG4gIG8uZm9yRWFjaChmdW5jdGlvbiAoZnJvbSkge1xuICAgIE9iamVjdC5rZXlzKE9iamVjdChmcm9tKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmKGtleSwgZnJvbVtrZXldKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNvdXJjZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzb3VyY2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZWFjaE9iamVjdChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICB9LCBzb3VyY2UpO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9mdW5jdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IEltbXV0YWJsZSwge01hcH0gZnJvbSAnaW1tdXRhYmxlJztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcblxuLy8gREVQRU5ERU5DWVxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IGltbXV0YWJsZSBmcm9tICdhbHQvdXRpbHMvSW1tdXRhYmxlVXRpbCc7XG4vLyB3ZWJwYWNrIGhvdCByZWxvYWRcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcblxubGV0IGFwcFN0b3JlID0gbWFrZUhvdChhbHQsIGltbXV0YWJsZShjbGFzcyBBcHBTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoQXBwQWN0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBNYXAoe1xuICAgICAgZGF0YUJ5UmVzdEFwaTogbmV3IE1hcCh7fSksXG4gICAgICBkYXRhOiBuZXcgTWFwKHt9KVxuICAgIH0pO1xuICB9XG5cbiAgb25DcmVhdGUodGV4dCkge1xuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgICBpZiAodGV4dCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gaGFuZCB3YXZpbmcgb2YgY291cnNlLlxuICAgIGNvbnN0IGlkID0gKCtuZXcgRGF0ZSgpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSkudG9TdHJpbmcoMzYpO1xuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmdldCgnZGF0YScpLnNldChpZCwgbmV3IE1hcCh7XG4gICAgICBpZDogaWQsXG4gICAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgICBlZGl0OiBmYWxzZSxcbiAgICAgIHRleHQ6IHRleHRcbiAgICB9KSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuc2V0KCdkYXRhJywgbmV3RGF0YSkpO1xuICB9XG5cbiAgb25SZW1vdmUoaWQpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5nZXQoJ2RhdGEnKS5kZWxldGUoaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGEnLCBuZXdEYXRhKSk7XG4gIH1cblxuICBvblJlbW92ZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuc2V0KCdkYXRhJywgbmV3IE1hcCh7fSkpKTtcbiAgfVxuXG4gIG9uVXBkYXRlQ29tcGxldGUoeCkge1xuICAgIGxldCB7IGlkLCBjb21wbGV0ZSB9ID0geDtcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyBjb21wbGV0ZSB9KTtcbiAgfVxuXG4gIG9uVXBkYXRlQ29tcGxldGVBbGwoeCkge1xuICAgIGxldCB7IGNvbXBsZXRlZCB9ID0geDtcbiAgICAvLyB1cGRhdGUgYWxsIG1hcCBpdGVtc1xuICAgIGxldCBhbGxUb2RvS2V5c0l0ID0gdGhpcy5zdGF0ZS5nZXQoJ2RhdGEnKS5rZXlzKCk7XG4gICAgZm9yKGxldCB2YWx1ZSBvZiBhbGxUb2RvS2V5c0l0KXtcbiAgICAgIHRoaXMudXBkYXRlKHZhbHVlLCB7Y29tcGxldGU6IGNvbXBsZXRlZH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVXBkYXRlVGV4dCh4KSB7XG4gICAgbGV0IHsgaWQsIHRleHQgfSA9IHg7XG4gICAgdGV4dCA9IHRleHQgPyB0ZXh0LnRyaW0oKSA6ICcnO1xuICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZShpZCwgeyB0ZXh0IH0pO1xuICB9XG5cbiAgdXBkYXRlKGlkLCB1cGRhdGVzKSB7XG4gICAgLy8gdXBkYXRlIGl0ZW0gYnkgaWQgY2hlY2tcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5nZXQoJ2RhdGEnKS51cGRhdGUoaWQsICh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVLZXlzID0gT2JqZWN0LmtleXModXBkYXRlcyk7XG4gICAgICB1cGRhdGVLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0b2RvID0gdG9kby5zZXQoa2V5LCB1cGRhdGVzW2tleV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG9kbztcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuc2V0KCdkYXRhJywgbmV3RGF0YSkpO1xuICB9XG5cbiAgdXBkYXRlQWxsKHVwZGF0ZXMpIHtcbiAgICBmb3IgKHZhciBpZCBpbiB0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudXBkYXRlKGlkLCB1cGRhdGVzKTtcbiAgICB9XG4gIH1cblxuICBvbkZldGNoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGFCeVJlc3RBcGknLCBJbW11dGFibGUuZnJvbUpTKHtkYXRhOiAnaGVsbG8nfSkpKTtcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWInKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGFCeVJlc3RBcGknLCBJbW11dGFibGUuZnJvbUpTKHtkYXRhOiBqc29ufSkpKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb25Ub2dnbGVDb21wbGV0ZUFsbCgpIHtcbiAgICAvKnZhciBjb21wbGV0ZSA9ICF0b2RvU3RvcmUuYXJlQWxsQ29tcGxldGUoKTtcbiAgICB0aGlzLnVwZGF0ZUFsbCh7IGNvbXBsZXRlIH0pOyovXG4gIH1cblxuICBvbkRlc3Ryb3lDb21wbGV0ZWQoKSB7XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW2lkXS5jb21wbGV0ZSkge1xuICAgICAgICB0aGlzLm9uRGVzdHJveShpZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFyZUFsbENvbXBsZXRlKCkge1xuICAgIGxldCB7IGRhdGEgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7XG4gICAgICBpZiAoIWRhdGFbaWRdLmNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pLCAnQXBwU3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3N0b3Jlcy9BcHBTdG9yZS5qc1xuICoqLyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgQXBwQWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2NyZWF0ZScsXG4gICAgICAnZmV0Y2gnLFxuICAgICAgJ3JlbW92ZScsXG4gICAgICAncmVtb3ZlQWxsJyxcbiAgICAgICd1cGRhdGVDb21wbGV0ZScsXG4gICAgICAndXBkYXRlQ29tcGxldGVBbGwnLFxuICAgICAgJ3VwZGF0ZVRleHQnXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFsdC5jcmVhdGVBY3Rpb25zKEFwcEFjdGlvbnMpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgQWx0IGZyb20gJ2FsdCc7XHJcblxyXG4vLyBjcmVhdGUgYWx0IGluc3RhbmNlXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBbHQoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvYWx0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbHRcIlxuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImltbXV0YWJsZVwiXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbW11dGFibGUgPSByZXF1aXJlKCdpbW11dGFibGUnKTtcblxudmFyIF9pbW11dGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1tdXRhYmxlKTtcblxuZnVuY3Rpb24gaW1tdXRhYmxlKFN0b3JlTW9kZWwpIHtcbiAgU3RvcmVNb2RlbC5jb25maWcgPSB7XG4gICAgc3RhdGVLZXk6ICdzdGF0ZScsXG5cbiAgICBzZXRTdGF0ZTogZnVuY3Rpb24gc2V0U3RhdGUoY3VycmVudFN0YXRlLCBuZXh0U3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9LFxuXG4gICAgZ2V0U3RhdGU6IGZ1bmN0aW9uIGdldFN0YXRlKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgICB9LFxuXG4gICAgb25TZXJpYWxpemU6IGZ1bmN0aW9uIG9uU2VyaWFsaXplKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUudG9KUygpO1xuICAgIH0sXG5cbiAgICBvbkRlc2VyaWFsaXplOiBmdW5jdGlvbiBvbkRlc2VyaWFsaXplKGRhdGEpIHtcbiAgICAgIHJldHVybiBfaW1tdXRhYmxlMlsnZGVmYXVsdCddLmZyb21KUyhkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN0b3JlTW9kZWw7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGltbXV0YWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9JbW11dGFibGVVdGlsLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZnVuY3Rpb24gbWFrZUhvdChhbHQsIFN0b3JlKSB7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBTdG9yZS5kaXNwbGF5TmFtZSA6IGFyZ3VtZW50c1syXTtcbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBhbHQuc3RvcmVzW25hbWVdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsdC5jcmVhdGVTdG9yZShTdG9yZSwgbmFtZSk7XG4gIH0pKCk7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbWFrZUhvdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL21ha2VIb3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IEltbXV0YWJsZSwge01hcH0gZnJvbSAnaW1tdXRhYmxlJztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcblxuLy8gREVQRU5ERU5DWVxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IGltbXV0YWJsZSBmcm9tICdhbHQvdXRpbHMvSW1tdXRhYmxlVXRpbCc7XG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi9BcHBTdG9yZSc7XG4vLyB3ZWJwYWNrIGhvdCByZWxvYWRcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcblxubGV0IGRlcGVuZGluZ1N0b3JlID0gbWFrZUhvdChhbHQsIGltbXV0YWJsZShjbGFzcyBEZXBlbmRpbmdTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoQXBwQWN0aW9ucyk7XG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBNYXAoe1xuICAgICAgZGF0YUJ5UmVzdEFwaTogbmV3IE1hcCh7fSlcbiAgICB9KTtcbiAgfVxuXG4gIG9uRmV0Y2goKSB7XG4gICAgdGhpcy53YWl0Rm9yKFtBcHBTdG9yZS5kaXNwYXRjaFRva2VuXSk7IC8vIGV2ZW50IGhhcyB0byBiZSBjb25zdW1lZFxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGFCeVJlc3RBcGknLCBJbW11dGFibGUuZnJvbUpTKHtkYXRhOiAnaGVyZSBpcyBkZXBlbmRlbmN5IHN0b3JlJ30pKSk7XG4gIH1cbn0pLCAnRGVwZW5kaW5nU3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZXBlbmRpbmdTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3N0b3Jlcy9BcHBTdG9yZURlcGVuZGluZy5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEZMVVhcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVTZWN0aW9uQWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXNlY3Rpb24tYWN0aW9ucyc+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMpfT5GQUtFIEFQSSBDQUxMPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX29uQ2xpY2soKSB7XG4gICAgQXBwQWN0aW9ucy5mZXRjaCgpO1xuICB9XG59XG5cbkhvbWVTZWN0aW9uQWN0aW9ucy5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSG9tZVNlY3Rpb25BY3Rpb25zJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25BY3Rpb25zLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVNlY3Rpb25TdWJQYXJ0T25lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XG4gICAgICBhcGlEYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBjb250ZW50TWFya3VwID0gJ2Rpc3BhdGNoaW5nIHpvbmUgMSc7XG4gICAgaWYgKHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhKSB7XG4gICAgICBjb250ZW50TWFya3VwID0gbWFya2VkKCdgYGBqc29uXFxuJyArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhLCBudWxsLCAyKSArICdgYGAnLCB7YnJlYWtzOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXNlY3Rpb24tc3ViLXBhcnQtb25lJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudE1hcmt1cH19PjwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XG4gIH1cbn1cblxuSG9tZVNlY3Rpb25TdWJQYXJ0T25lLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvblN1YlBhcnRPbmUnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvblN1YlBhcnRPbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZWRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1hcmtlZFwiXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5cbi8vIEZMVVhcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XG5cbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVTZWN0aW9uU3ViUGFydFR3byBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xuICAgICAgYXBpRGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgY29udGVudE1hcmt1cCA9ICdkaXNwYXRjaGluZyB6b25lIDInO1xuICAgIGlmICh0aGlzLnByb3BzLmFwaURhdGEuZGF0YSkge1xuICAgICAgY29udGVudE1hcmt1cCA9IG1hcmtlZCgnYGBganNvblxcbicgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmFwaURhdGEuZGF0YSwgbnVsbCwgMikgKyAnYGBgJywge2JyZWFrczogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LXR3bycgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnRNYXJrdXB9fT48L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX29uQ2xpY2soKSB7XG4gICAgQXBwQWN0aW9ucy5mZXRjaCgpO1xuICB9XG59XG5cbkhvbWVTZWN0aW9uU3ViUGFydFR3by5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSG9tZVNlY3Rpb25TdWJQYXJ0VHdvJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25TdWJQYXJ0VHdvLmpzXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hvbWVTZWN0aW9uLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hvbWVTZWN0aW9uLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuaG9tZS1zZWN0aW9uLWFjdGlvbnMge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZERjZGRjtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5kaXYuaG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LW9uZSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFGMUZEO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblxcbmRpdi5ob21lLXNlY3Rpb24tc3ViLXBhcnQtdHdvIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVFN0ZEO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UEFHRSBOT1QgRk9VTkQ8L2gxPlxuICAgICAgICA8cD55ZXMgaW5kZWVkPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ob3RGb3VuZFNlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ05vdEZvdW5kU2VjdGlvbic7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBDT01QT05FTlRcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtJztcbmltcG9ydCBUb2RvVGV4dElucHV0IGZyb20gJy4vVG9kb1RleHRJbnB1dCc7XG5pbXBvcnQgVG9kb1NuYXBzaG90cyBmcm9tICcuL1RvZG9TbmFwc2hvdHMnO1xuXG4vLyBGTFVYXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgU25hcHNob3RTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvU25hcHNob3RTdG9yZSc7XG5pbXBvcnQgY29ubmVjdFRvU3RvcmVzIGZyb20gJ2FsdC91dGlscy9jb25uZWN0VG9TdG9yZXMnO1xuXG5sZXQgdG9kb1NlY3Rpb24gPSBjbGFzcyBUb2RvU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHJldHJpZXZlIGRhdGEgZnJvbSBzdG9yZVxuICAgIGxldCBzdG9yZVByb3BzID0gVG9kb1NlY3Rpb24uZ2V0UHJvcHNGcm9tU3RvcmVzKCk7XG4gICAgLy8gYnVpbGQgd2l0aCBjdXJyZW50IGRhdGFcbiAgICBsZXQgYWxsVG9kb3MgPSBzdG9yZVByb3BzLmFsbERhdGEsXG4gICAgICAgIHRvZG9zID0gW107XG4gICAgLy8gZ2VuZXJhdGUgdG9kbyBpdGVtIGxpc3RcbiAgICBmb3IgKHZhciBrZXkgaW4gYWxsVG9kb3MpIHtcbiAgICAgIHRvZG9zLnB1c2goPFRvZG9JdGVtIGtleT17a2V5fSB0b2RvPXthbGxUb2Rvc1trZXldfSAvPik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5UT0RPIFBBR0U8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kbyc+XG4gICAgICAgICAgPHA+Rmlyc3QgYWRkIHNvbWUgdGFza3MgYnkgcHJlc3NpbmcgZW50ZXIga2V5PC9wPlxuICAgICAgICAgIDxUb2RvVGV4dElucHV0IGNsYXNzTmFtZT0nZWRpdCcgaWQ9J25ldy10b2RvJyBwbGFjZWhvbGRlcj0nV2hhdCBuZWVkcyB0byBiZSBkb25lID8nIG9uU2F2ZT17dGhpcy5fb25TYXZlLmJpbmQodGhpcyl9IHZhbHVlPScnIC8+XG4gICAgICAgICAgPHVsIGlkPSd0b2RvLWxpc3QnPnt0b2Rvc308L3VsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjeCh7J2hpZGRlbic6ICF0b2Rvcy5sZW5ndGh9KX0gb25DbGljaz17dGhpcy5fb25DbGlja1RvZ2dsZUFsbC5iaW5kKHRoaXMpfT5UT0dHTEUgQUxMIFNUQVRFUzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjeCh7J2hpZGRlbic6ICF0b2Rvcy5sZW5ndGh9KX0gb25DbGljaz17dGhpcy5fb25DbGlja1JlbW92ZUFsbC5iaW5kKHRoaXMpfSA+Q0xFQVI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUb2RvU25hcHNob3RzIHNuYXBzaG90cz17c3RvcmVQcm9wcy5zbmFwc2hvdHN9IHRvZG9MZW5ndGg9e3RvZG9zLmxlbmd0aH0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrUmVtb3ZlQWxsKCkge1xuICAgIEFwcEFjdGlvbnMucmVtb3ZlQWxsKCk7XG4gIH1cblxuICBfb25DbGlja1RvZ2dsZUFsbCgpIHtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSAhdGhpcy5zdGF0ZS5jb21wbGV0ZWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZFxuICAgIH0pO1xuICAgIEFwcEFjdGlvbnMudXBkYXRlQ29tcGxldGVBbGwoe2NvbXBsZXRlZDogY29tcGxldGVkfSk7XG4gIH1cblxuICBfb25TYXZlKHRleHQpIHtcbiAgICBpZiAodGV4dC50cmltKCkpe1xuICAgICAgQXBwQWN0aW9ucy5jcmVhdGUodGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFN0b3JlcygpIHtcbiAgICByZXR1cm4gW0FwcFN0b3JlLCBTbmFwc2hvdFN0b3JlXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbERhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZ2V0KCdkYXRhJykudG9KUygpLFxuICAgICAgYXJlQWxsQ29tcGxldGU6IEFwcFN0b3JlLmFyZUFsbENvbXBsZXRlKCksXG4gICAgICBzbmFwc2hvdHM6IFNuYXBzaG90U3RvcmUuZ2V0U3RhdGUoKS5nZXQoJ3NuYXBzaG90cycpLnRvQXJyYXkoKVxuICAgIH07XG4gIH1cbn07XG5cbnRvZG9TZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1N0b3Jlcyh0b2RvU2VjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiY2xhc3NuYW1lc1wiXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIEZMVVhcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XG5cbi8vIENPTVBPTkVOVFxuaW1wb3J0IFRvZG9UZXh0SW5wdXRFZGl0IGZyb20gJy4vVG9kb1RleHRJbnB1dEVkaXQnO1xuXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL19Ub2RvSXRlbS5zY3NzJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xuICAgICAgdG9kbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgZWRpdGluZzogZmFsc2UsXG4gICAgICB0ZXh0OiB0aGlzLnByb3BzLnRvZG8udGV4dFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHRvZG8gPSB0aGlzLnByb3BzLnRvZG87XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17Y3goe1xuICAgICAgICAgICdjb21wbGV0ZWQnOiB0b2RvLmNvbXBsZXRlLFxuICAgICAgICAgICdlZGl0aW5nJzogdGhpcy5zdGF0ZS5lZGl0aW5nXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e3RvZG8uaWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goeydpbmxpbmUnOiB0aGlzLnN0YXRlLmVkaXRpbmd9KX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjbGFzc05hbWU9J3RvZ2dsZScgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZWRpdGluZ30gY2hlY2tlZD17dG9kby5jb21wbGV0ZX0gb25DaGFuZ2U9e3RoaXMuX29uQ2xpY2tUb2dnbGVDb21wbGV0ZS5iaW5kKHRoaXMpfSB0aXRsZT0ndG9nZ2xlIHRhc2sgc3RhdGUgKGNvbXBsZXRlZCA/KScvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2N4KHsnaGlkZGVuJzogdGhpcy5zdGF0ZS5lZGl0aW5nfSl9IG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tFZGl0LmJpbmQodGhpcyl9IHRpdGxlPSdFZGl0IG1lIGJ5IGEgY2xpY2snPnt0b2RvLnRleHR9PC9sYWJlbD5cbiAgICAgICAgICA8VG9kb1RleHRJbnB1dEVkaXQgY2xhc3NOYW1lPXtjeCh7J2hpZGRlbic6ICF0aGlzLnN0YXRlLmVkaXRpbmd9KX0gb25VcGRhdGU9e3RoaXMuX29uVXBkYXRlLmJpbmQodGhpcyl9IG9uQ2FuY2VsVXBkYXRlPXt0aGlzLl9vbkNhbmNlbFVwZGF0ZS5iaW5kKHRoaXMpfSB0b2RvPXt0b2RvfSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjeCh7J2hpZGRlbic6IHRoaXMuc3RhdGUuZWRpdGluZywgJ2Rlc3Ryb3knOiB0cnVlfSl9IG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tSZW1vdmUuYmluZCh0aGlzKX0gdGl0bGU9J3JlbW92ZSB0YXNrJz4mIzEwMDA2OzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrRWRpdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRpbmc6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIF9vbkNsaWNrUmVtb3ZlKCkge1xuICAgIEFwcEFjdGlvbnMucmVtb3ZlKHRoaXMucHJvcHMudG9kby5pZCk7XG4gIH1cblxuICBfb25DbGlja1RvZ2dsZUNvbXBsZXRlKCkge1xuICAgIEFwcEFjdGlvbnMudXBkYXRlQ29tcGxldGUoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMudG9kby5pZCxcbiAgICAgIGNvbXBsZXRlOiAhdGhpcy5wcm9wcy50b2RvLmNvbXBsZXRlXG4gICAgfSk7XG4gIH1cblxuICBfb25DYW5jZWxVcGRhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZzogZmFsc2V9KTtcbiAgfVxuXG4gIF9vblNhdmUodGV4dCkge1xuICAgIGlmICh0ZXh0LnRyaW0oKSl7XG4gICAgICBBcHBBY3Rpb25zLmNyZWF0ZSh0ZXh0KTtcbiAgICB9XG4gIH1cblxuICBfb25VcGRhdGUodG9kbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmc6IGZhbHNlfSk7XG4gICAgQXBwQWN0aW9ucy51cGRhdGVUZXh0KHtcbiAgICAgIGlkOiB0b2RvLmlkLFxuICAgICAgdGV4dDogdG9kby50ZXh0XG4gICAgfSk7XG4gIH1cbn1cblxuVG9kb0l0ZW0ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9JdGVtJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb0l0ZW0uanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xuXG5jb25zdCBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvVGV4dElucHV0RWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG9uQ2FuY2VsVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB0b2RvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy50b2RvLnRleHRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLl9vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fb25DbGlja1VwZGF0ZS5iaW5kKHRoaXMpfT5VUERBVEU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrQ2FuY2VsLmJpbmQodGhpcyl9PkNBTkNFTDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrQ2FuY2VsKCkge1xuICAgIHRoaXMucHJvcHMub25DYW5jZWxVcGRhdGUoKTtcbiAgfVxuXG4gIF9vbkNsaWNrVXBkYXRlKCkge1xuICAgIHRoaXMucHJvcHMub25VcGRhdGUodGhpcy5wcm9wcy50b2RvKTtcbiAgfVxuXG4gIF9vbkNoYW5nZSgvKm9iamVjdCovIGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy50b2RvLnRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cblxuICBfb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICB9XG4gIH1cbn1cblxuVG9kb1RleHRJbnB1dEVkaXQucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9UZXh0SW5wdXRFZGl0JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dEVkaXQuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ub2RvSXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9fVG9kb0l0ZW0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi50b2RvIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuICBkaXYudG9kbyBkaXYuaW5saW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIGRpdi50b2RvIGxhYmVsIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgZGl2LnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuZGl2LnRvZG8tc25hcHNob3Qge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5idXR0b24uZGVzdHJveSB7XFxuICB0b3A6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uYnV0dG9uLmRlc3Ryb3k6YWN0aXZlIHtcXG4gIHRvcDogMXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG5saS5jb21wbGV0ZWQgbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1RleHRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBvblNhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH07XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLl9vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fc2F2ZS5iaW5kKHRoaXMpfSB0aXRsZT0nYWRkIHRhc2snPkFERDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9zYXZlKCkge1xuICAgIHRoaXMucHJvcHMub25TYXZlKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6ICcnXG4gICAgfSk7XG4gIH1cblxuICBfb25DaGFuZ2UoLypvYmplY3QqLyBldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgX29uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUl9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5fc2F2ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5Ub2RvVGV4dElucHV0LnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvVGV4dElucHV0JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dC5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIEZMVVhcbmltcG9ydCBTbmFwc2hvdEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMnO1xuXG4vLyBDT01QT05FTlRcbmltcG9ydCBUb2RvU25hcHNob3RzSXRlbSBmcm9tICcuL1RvZG9TbmFwc2hvdHNJdGVtJztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1NuYXBzaG90cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIHRvZG9MZW5ndGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFsbFNuYXBzID0gdGhpcy5wcm9wcy5zbmFwc2hvdHMsXG4gICAgICAgIGhhc1RvZG9zID0gdGhpcy5wcm9wcy50b2RvTGVuZ3RoLFxuICAgICAgICBzbmFwc2hvdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhbGxTbmFwcykge1xuICAgICAgc25hcHNob3RzLnB1c2goPFRvZG9TbmFwc2hvdHNJdGVtIGtleT17a2V5fSBzbmFwc2hvdD17YWxsU25hcHNba2V5XX0gLz4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1zbmFwc2hvdCc+XG4gICAgICAgIDxwPlRoZW4gdGFrZSBhIHNuYXBzaG90IG9yIGxvYWQgaXQ8L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjeCh7J2hpZGRlbic6ICFoYXNUb2Rvc30pfSBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9ID5UQUtFIFNOQVBTSE9UPC9idXR0b24+XG4gICAgICAgIDx1bCBpZD0ndG9kby1zbmFwc2hvdC1saXN0Jz57c25hcHNob3RzfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX29uQ2xpY2soKSB7XG4gICAgU25hcHNob3RBY3Rpb25zLnRha2VTbmFwc2hvdCgpO1xuICB9XG59XG5cblRvZG9TbmFwc2hvdHMucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9TbmFwc2hvdHMnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzLmpzXG4gKiovIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBTbmFwc2hvdEFjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICdyZW1vdmVTbmFwc2hvdCcsXG4gICAgICAnYm9vdHN0cmFwU25hcHNob3QnLFxuICAgICAgJ3Rha2VTbmFwc2hvdCdcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoU25hcHNob3RBY3Rpb25zKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gRkxVWFxuaW1wb3J0IFNuYXBzaG90QWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucyc7XG5cbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX1RvZG9JdGVtLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1NuYXBzaG90c0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XG4gICAgICBzbmFwc2hvdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdG9kbyA9IHRoaXMucHJvcHMuc25hcHNob3Q7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmxpbmUnPlxuICAgICAgICAgIDxsYWJlbD48YSBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9ib290c3RyYXBTbmFwc2hvdC5iaW5kKHRoaXMpfT57dG9kby5pZH08L2E+PC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGVzdHJveScgb25DbGljaz17dGhpcy5fb25EZXN0cm95Q2xpY2suYmluZCh0aGlzKX0+JiMxMDAwNjs8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxuICBfYm9vdHN0cmFwU25hcHNob3QoKSB7XG4gICAgU25hcHNob3RBY3Rpb25zLmJvb3RzdHJhcFNuYXBzaG90KHRoaXMucHJvcHMuc25hcHNob3QuaWQpO1xuICB9XG5cbiAgX29uRGVzdHJveUNsaWNrKCkge1xuICAgIFNuYXBzaG90QWN0aW9ucy5yZW1vdmVTbmFwc2hvdCh0aGlzLnByb3BzLnNuYXBzaG90LmlkKTtcbiAgfVxufVxuXG5Ub2RvU25hcHNob3RzSXRlbS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1NuYXBzaG90c0l0ZW0nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzSXRlbS5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBJbW11dGFibGUsIHtNYXAsIExpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbi8vIEZMVVhcbmltcG9ydCBTbmFwc2hvdEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMnO1xuXG4vLyBERVBFTkRFTkNZXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgaW1tdXRhYmxlIGZyb20gJ2FsdC91dGlscy9JbW11dGFibGVVdGlsJztcbi8vIHdlYnBhY2sgaG90IHJlbG9hZFxuaW1wb3J0IG1ha2VIb3QgZnJvbSAnYWx0L3V0aWxzL21ha2VIb3QnO1xuXG5sZXQgc25hcHNob3RTdG9yZSA9IG1ha2VIb3QoYWx0LCBpbW11dGFibGUoY2xhc3MgU25hcHNob3RTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoU25hcHNob3RBY3Rpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gbmV3IE1hcCh7XG4gICAgICBzbmFwc2hvdHM6IG5ldyBMaXN0KFtdKVxuICAgIH0pO1xuICB9XG5cbiAgb25Cb290c3RyYXBTbmFwc2hvdChpZCkge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc3RhdGUuZ2V0KCdzbmFwc2hvdHMnKS5maW5kSW5kZXgoKHNuYXBzaG90KSA9PiB7XG4gICAgICByZXR1cm4gc25hcHNob3QuaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAvLyBUT0RPXG4gICAgICAvLyBhbHQucHJlcGFyZShBcHBTdG9yKVxuICAgICAgbGV0IHNuYXBzaG90ID0gdGhpcy5zdGF0ZS5nZXQoJ3NuYXBzaG90cycpLmdldChpZHgpO1xuICAgICAgYWx0LmJvb3RzdHJhcChJbW11dGFibGUuZnJvbUpTKHNuYXBzaG90LmRhdGEpKTtcbiAgICAgIC8vIGFsdC5yb2xsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uVGFrZVNuYXBzaG90KCkge1xuICAgIGNvbnN0IHNuYXBzaG90ID0ge1xuICAgICAgaWQ6ICgrbmV3IERhdGUoKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkpLnRvU3RyaW5nKDM2KSxcbiAgICAgIGRhdGE6IGFsdC50YWtlU25hcHNob3QoJ0FwcFN0b3JlJylcbiAgICB9O1xuICAgIGNvbnN0IG5ld0xpc3QgPSB0aGlzLnN0YXRlLmdldCgnc25hcHNob3RzJykucHVzaChzbmFwc2hvdCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnNldCgnc25hcHNob3RzJywgbmV3TGlzdCkpO1xuICB9XG5cbiAgb25SZW1vdmVTbmFwc2hvdChpZCkge1xuICAgIC8vIGZpbmQgc25hcHNob3QgaW5kZXggaW4gbGlzdFxuICAgIGNvbnN0IGlkeCA9IHRoaXMuc3RhdGUuZ2V0KCdzbmFwc2hvdHMnKS5maW5kSW5kZXgoKHNuYXBzaG90KSA9PiB7XG4gICAgICByZXR1cm4gc25hcHNob3QuaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gdGhpcy5zdGF0ZS5nZXQoJ3NuYXBzaG90cycpLmRlbGV0ZShpZHgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnNldCgnc25hcHNob3RzJywgbmV3TGlzdCkpO1xuICAgIH1cbiAgfVxufSksICdTbmFwc2hvdFN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc25hcHNob3RTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3N0b3Jlcy9TbmFwc2hvdFN0b3JlLmpzXG4gKiovIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbi8qZXNsaW50LWRpc2FibGUgbmV3LWNhcCovXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbi8qZXNsaW50LWVuYWJsZSBuZXctY2FwKi9cblxubGV0IGFwaSA9IHJlcXVpcmUoJy4uL2FwaS9hcGknKTtcblxucm91dGVyLnVzZSgnL2FwaS8qJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGFwaS50b2RvKHJlcSwgcmVzLCBuZXh0KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cbi8vXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuLi9hcGkvYXBpJ10sICgpID0+IHtcbiAgICBhcGkgPSByZXF1aXJlKCcuLi9hcGkvYXBpJyk7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zZXJ2ZXIvcm91dGVzL2FwaS5qc1xuICoqLyIsImxldCBhcGkgPSB7XG4gIHRvZG86IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAvLyBzaW1wbGUgYXBpIGZldGNoIGV4YW1wbGUsIG5vIG93biBEQiBoZXJlIHNvIGV4dGVybmFsIGNhbGwgaXMgbWFkZS5cblxuICAgICAgLy8gaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWJcbiAgICAgLyogZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChqc29uKTtcbiAgICAgIH0pO1xuICAgICAgKi9cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHt0ZXN0OiAndGVzdCd9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIG5leHQoZXJyKTtcbiAgICB9XG4gIH0sXG4gIG90aGVydG9kbzogKCkgPT4ge1xuXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL2FwaS9hcGkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9