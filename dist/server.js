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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.js" + ": " + err.message); } }); } } })(); }

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
/* 33 */
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSection.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("object-assign");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStoreDepending.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 43 */
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionActions.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionSubPartOne.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("marked");

/***/ },
/* 46 */
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionSubPartTwo.js" + ": " + err.message); } }); } } })(); }

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
/* 50 */
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 51 */
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoItem.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoTextInput.js" + ": " + err.message); } }); } } })(); }

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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSnapshots.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 58 */
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSnapshotsItem.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 60 */
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

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 61 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDYxNjZmZDg3ZmEzYTY2YmIxYzAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29uZmlnLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW1hZ2VzL3JlYWN0LWxvZ28ucG5nIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3M/MGQzMyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzcz80NTc3Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9fRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzcz8yYTNkIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Fzcz9lZmFjIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3Jlcy9BcHBTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWx0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFsdFwiIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL21ha2VIb3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3Jlcy9BcHBTdG9yZURlcGVuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbkFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25TdWJQYXJ0T25lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzcz80MDBmIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzPzlmYmMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmVzL1NuYXBzaG90U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwaS9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNDckNpQixDQUFNOzs7O2lDQUNOLENBQU07Ozs7OztvQ0FHSCxDQUFTOzs7O3lDQUNULENBQWU7Ozs7O0FBR25DLEtBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNO0tBQzdDLFVBQVUsR0FBRyxPQUFPLEtBQUssS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7O0FBRW5ELEtBQUksR0FBRyxHQUFHLDJCQUFTLENBQUM7O0FBRXBCLElBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzFDLElBQUcsQ0FBQyxHQUFHLENBQUMsOEJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLElBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQVEsa0JBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztBQU9wRSxLQUFJLFFBQVEsR0FBRyxtQkFBTyxDQUFDLENBQW1CLENBQUMsQ0FBQzs7QUFFNUMsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxFQUFjLENBQUMsQ0FBQzs7Ozs7QUFL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QUFDdkMsTUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzFCLENBQUMsQ0FBQzs7c0JBRVksTUFBTTs7Ozs7QUFLckIsS0FBRyxLQUFVLEVBQUU7QUFDYixTQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLFlBQU07QUFDdEMsUUFBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7RUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRCxLQUFJLEdBQUcsR0FBRztBQUNSLE9BQUksRUFBRSxjQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3hCLFNBQUk7QUFDRixVQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFZbEQsVUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztNQUN0QyxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ1osV0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ1g7SUFDRjtBQUNELFlBQVMsRUFBRSxxQkFBTSxFQUVoQjtFQUNGLENBQUM7O3NCQUVhLEdBQUciLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDYxNjZmZDg3ZmEzYTY2YmIxYzBcbiAqKi8iLCIvLyBOT0RFXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBFWFBSRVNTXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBmYXZpY29uIGZyb20gJ3NlcnZlLWZhdmljb24nO1xuXG4vLyBQcm9maWxlIGRldiBvciBwcm9kdWN0aW9uXG5sZXQgcHJvZmlsZSA9IHByb2Nlc3MuZW52LkRFViA/ICdkZXYnIDogJ3Byb2QnLFxuXHRwdWJsaWNQYXRoID0gcHJvZmlsZSA9PT0gJ2RldicgPyAnYnVpbGQnIDogJ2Rpc3QnO1xuXG5sZXQgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAuc2V0KCdwb3J0JywgcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocHVibGljUGF0aCkpO1xuYXBwLnVzZShmYXZpY29uKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9hcHAvaW1hZ2VzL2Zhdmljb24uaWNvJykpKTtcblxuLy9cbi8vIFJlZ2lzdGVyIG1pZGRsZXdhcmVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyByZW5kZXJlclxubGV0IHJlbmRlcmVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvcmVuZGVyZXInKTtcbi8vIGFwaXNcbmxldCBhcGlSb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9hcGknKTtcblxuLy9cbi8vIENvbmZpZ3VyZSBtaWRkbGV3YXJlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnJlbmRlcmVyLmluaXQocHJvZmlsZSk7XG5cbi8vXG4vLyBBY3RpdmF0ZSBtaWRkbGV3YXJlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFwcC51c2UoYXBpUm91dGVzKTtcbmFwcC51c2UocmVuZGVyZXIucmVuZGVyKTtcblxuaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKS5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAnICsgYXBwLmdldCgncG9ydCcpKTtcbn0pO1xuXG4vL1xuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZihtb2R1bGUuaG90KSB7XG4gIC8vIGFjY2VwdCB1cGRhdGUgb2YgZGVwZW5kZW5jeVxuICBtb2R1bGUuaG90LmFjY2VwdChbJy4vcm91dGVzL2FwaScsICcuL3JvdXRlcy9yZW5kZXJlciddLCAoKSA9PiB7XG4gICAgYXBpUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XG4gICAgYXBwLnVzZShhcGlSb3V0ZXMpO1xuICAgIHJlbmRlcmVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvcmVuZGVyZXInKTtcbiAgICByZW5kZXJlci5pbml0KCdkZXYnKTtcbiAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NlcnZlci9zZXJ2ZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2ZS1mYXZpY29uXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwYXRoXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJleHByZXNzXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJodHRwXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJsZXQgcmVuZGVyZXIgPSByZXF1aXJlKCcuLi91dGlscy9yZW5kZXJlcicpO1xuXG5sZXQgcHJvZmlsZSA9ICdkZXYnO1xuXG52YXIgcm91dGVzUmVuZGVyZXIgPSB7XG4gIGluaXQ6ICh0eXBlKSA9PiB7XG4gICAgcHJvZmlsZSA9IHR5cGU7XG4gICAgcmVuZGVyZXIuaW5pdCh0eXBlKTtcbiAgfSxcbiAgcmVuZGVyOiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICByZW5kZXJlci5yZW5kZXIocmVxLCByZXMsIG5leHQpO1xuICB9XG59O1xuXG4vL1xuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZihtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi4vdXRpbHMvcmVuZGVyZXInXSwgKCkgPT4ge1xuICAgIHJlbmRlcmVyID0gcmVxdWlyZSgnLi4vdXRpbHMvcmVuZGVyZXInKTtcbiAgICByZW5kZXJlci5pbml0KHByb2ZpbGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzUmVuZGVyZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NlcnZlci9yb3V0ZXMvcmVuZGVyZXIuanNcbiAqKi8iLCIvLyBOT0RFXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG4vLyBFWFRFUk5BTFNcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgSXNvIGZyb20gJ2lzbyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vLyBDT1JFXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uLy4uL2FwcC9yb3V0ZXMnO1xuaW1wb3J0IGFsdCBmcm9tICcuLi8uLi9hcHAvYWx0JztcblxubGV0IGh0bWwgPSAnJztcblxudmFyIHJlbmRlcmVyID0ge1xuICBpbml0OiAodHlwZSkgPT4ge1xuICAgIGh0bWwgPSB0eXBlID09PSAnZGV2JyA/XG4gICAgICBmcy5yZWFkRmlsZVN5bmMoJy4vYXNzZXRzL2luZGV4LWRldi5odG1sJywge2VuY29kaW5nOiAndXRmOCd9KVxuICAgICAgOlxuICAgICAgZnMucmVhZEZpbGVTeW5jKCcuL2Rpc3QvaW5kZXgtcHJvZC5odG1sJywge2VuY29kaW5nOiAndXRmOCd9KTtcbiAgfSxcbiAgcmVuZGVyOiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBsZXQgbWFya3VwID0gJycsXG4gICAgICBpc28gPSBuZXcgSXNvKCk7XG5cbiAgICBjb25zdCBvbmVJdGVtQm9vdHN0cmFwZWQgPSB7XG4gICAgICAnQXBwU3RvcmUnOiB7XG4gICAgICAgICdkYXRhQnlSZXN0QXBpJzoge30sXG4gICAgICAgICdkYXRhJzoge1xuICAgICAgICAgICdpYXFwb3I3cCc6IHtcbiAgICAgICAgICAgICdpZCc6ICdpYXFwb3I3cCcsXG4gICAgICAgICAgICAnY29tcGxldGUnOiBmYWxzZSxcbiAgICAgICAgICAgICd0ZXh0JzogJ2ZzZnNkZidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVucywgd2UgdGFrZSB0aGUgbG9jYWxzIGRhdGEgd2UgaGF2ZSBhbHJlYWR5XG4gICAgZmV0Y2hlZCBhbmQgc2VlZCBvdXIgc3RvcmVzIHdpdGggZGF0YS5cbiAgICBOZXh0IHdlIHVzZSByZWFjdC1yb3V0ZXIgdG8gcnVuIHRoZSBVUkwgdGhhdCBpcyBwcm92aWRlZCBpbiByb3V0ZXMuanN4XG4gICAgRmluYWxseSB3ZSB1c2UgaXNvIGluIG9yZGVyIHRvIHJlbmRlciB0aGlzIGNvbnRlbnQgc28gaXQgcGlja3MgYmFjayB1cFxuICAgIG9uIHRoZSBjbGllbnQgc2lkZSBhbmQgYm9vdHN0cmFwcyB0aGUgc3RvcmVzLlxuICAgIGluaXQgc2VydmVyIHJlbmRlcmVyXG4gICAgKi9cbiAgICBhbHQuYm9vdHN0cmFwKEpTT04uc3RyaW5naWZ5KHJlcy5sb2NhbHMuZGF0YSB8fCBvbmVJdGVtQm9vdHN0cmFwZWQpKTtcblxuICAgIHRyeSB7XG4gICAgICBSb3V0ZXIucnVuKHJvdXRlcywgcmVxLnBhdGgsIChIYW5kbGVyLCBzdGF0ZSkgPT4ge1xuXHRcdFx0XHQvLyBhbHQgZmx1eCBmbHVzaFxuICAgICAgICBsZXQgY29udGVudCA9IFJlYWN0LnJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGFuZGxlcikpO1xuICAgICAgICBpc28uYWRkKGNvbnRlbnQsIGFsdC5mbHVzaCgpKTtcblxuICAgICAgICByZXMuY29udGVudFR5cGUgPSAndGV4dC9odG1sOyBjaGFyc2V0PXV0ZjgnO1xuICAgICAgICBsZXQgbm90Rm91bmQgPSBfLmZpbmQoc3RhdGUucm91dGVzLCB7aXNOb3RGb3VuZDogdHJ1ZX0pO1xuXG4gICAgICAgIGlmIChub3RGb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgICAgICB9XG5cblx0XHRcdFx0Ly8gUkVOREVSSU5HIGJhY2sgdG8gY2xpZW50XG4gICAgICAgIGxldCBtYXJrdXBDb250ZW50ID0gaXNvLnJlbmRlcigpO1xuICAgICAgICAvLyBET00gPGhlYWQ+IGluc3RydW1lbnRhdGlvblxuICAgICAgICBsZXQgaGVhZCA9IEhlbG1ldC5yZXdpbmQoKTtcbiAgICAgICAgbWFya3VwID0gaHRtbC5yZXBsYWNlKCdNRVRBJywgaGVhZC5tZXRhKS5yZXBsYWNlKCdUSVRMRScsIGhlYWQudGl0bGUpLnJlcGxhY2UoJ0xJTksnLCBoZWFkLmxpbmspLnJlcGxhY2UoJ0NPTlRFTlQnLCBtYXJrdXBDb250ZW50KTtcbiAgICAgICAgLy8gU0VORCByZXNwb25zZVxuICAgICAgICByZXMuc2VuZChtYXJrdXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibG9kYXNoXCJcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaXNvXCJcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZzXCJcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vKmVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMqL1xyXG5pbXBvcnQge1JvdXRlLCBEZWZhdWx0Um91dGUsIE5vdEZvdW5kUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG4vLyBDT01QT05FTlRcclxuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9BcHAvQXBwJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QnO1xyXG5pbXBvcnQgSG9tZVNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uJztcclxuaW1wb3J0IE5vdEZvdW5kU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbic7XHJcbmltcG9ydCBUb2RvU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NlY3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIDxSb3V0ZSBuYW1lPSdhcHAnIHBhdGg9Jy8nIGhhbmRsZXI9e0FwcGxpY2F0aW9ufT5cclxuICAgIDxSb3V0ZSBuYW1lPSdob21lJyBwYXRoPScvaG9tZScgaGFuZGxlcj17SG9tZVNlY3Rpb259Lz5cclxuICAgIDxSb3V0ZSBuYW1lPSd0b2RvJyBwYXRoPScvdG9kbycgaGFuZGxlcj17VG9kb1NlY3Rpb259Lz5cclxuICAgIDxSb3V0ZSBuYW1lPSdjb250YWN0JyBwYXRoPVwiL2NvbnRhY3RcIiBoYW5kbGVyPXtDb250YWN0fS8+XHJcbiAgICA8RGVmYXVsdFJvdXRlIGhhbmRsZXI9e0hvbWVTZWN0aW9ufSAvPlxyXG4gICAgPE5vdEZvdW5kUm91dGUgaGFuZGxlcj17Tm90Rm91bmRTZWN0aW9ufSAvPlxyXG4gIDwvUm91dGU+XHJcbik7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3JvdXRlcy5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZUhhbmRsZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vLyBDT01QT05FTlRcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEh0bWxIZWFkZXJUYWdzIGZyb20gJy4uL0RvY3VtZW50L0h0bWxIZWFkZXJUYWdzJztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fQXBwLnNjc3MnKTtcbiAgcmVxdWlyZSgnLi9fQXBwLnNhc3MnKTtcbiAgcmVxdWlyZSgnZmlsZT9uYW1lPWZhdmljb24uaWNvIS4uLy4uL2ltYWdlcy9mYXZpY29uLmljbycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SHRtbEhlYWRlclRhZ3MgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50Jz5cbiAgICAgICAgICA8Um91dGVIYW5kbGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnQXBwJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbi8vIFRPRE86IGRvIGl0IGluIHN0b3JlIG1heWJlXG5jb25zdCBtZXRhcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jb25maWcuanNvbicpLmhlbG1ldDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbEhlYWRlclRhZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIERPTSA8aGVhZD4gaW5zdHJ1bWVudGF0aW9uXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWxtZXRcbiAgICAgICAgICB0aXRsZT17bWV0YXMudGl0bGV9XG4gICAgICAgICAgICBtZXRhPXttZXRhcy5tZXRhfVxuICAgICAgICAgICAgbGluaz17bWV0YXMubGlua31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSHRtbEhlYWRlclRhZ3MucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0h0bWxIZWFkZXJUYWdzJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWxtZXRcIjoge1xuXHRcdFwidGl0bGVcIjogXCJ3ZWItcmVhY3RcIixcblx0XHRcIm1ldGFcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuXHRcdFx0XHRcImNvbnRlbnRcIjogXCJXZWJwYWNrIE5vZGUgUmVhY3QgU3RhcnRlciBLaXRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwidmlld3BvcnRcIixcblx0XHRcdFx0XCJjb250ZW50XCI6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0XCJsaW5rXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJyZWxcIjogXCJzaG9ydGN1dCBpY29uXCIsXG5cdFx0XHRcdFwiaHJlZlwiOiBcIi9mYXZpY29uLmljb1wiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbWFnZS94LWljb25cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJyZWxcIjogXCJpY29uXCIsXG5cdFx0XHRcdFwiaHJlZlwiOiBcIi9mYXZpY29uLmljb1wiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbWFnZS94LWljb25cIlxuXHRcdFx0fVxuXHRcdF1cblx0fVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hc3NldHMvY29uZmlnLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5sZXQgcmVhY3RMb2dvID0gcmVxdWlyZSgnLi9pbWFnZXMvcmVhY3QtbG9nby5wbmcnKTtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fSGVhZGVyLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxpbWcgc3JjPXtyZWFjdExvZ299IGhlaWdodD0nNjAnIC8+XG5cdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0PHVsPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSdhcHAnPkhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz0ndG9kbyc+VG9kbzwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSdjb250YWN0Jz5Db250YWN0PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9oZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSGVhZGVyJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIlYyZC11Y18ucG5nXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2ltYWdlcy9yZWFjdC1sb2dvLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0ZjRmNDsgfVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbmhlYWRlciBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7IH1cXG5cXG5saSBhIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjODg4OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxuLy8gXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KCkge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCgpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX0Zvb3Rlci5zY3NzJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPlxuICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9naGJ0bnMuY29tL2dpdGh1Yi1idG4uaHRtbD91c2VyPWRhcnVsNzUmcmVwbz13ZWItcmVhY3QmdHlwZT1zdGFyJmNvdW50PXRydWUmdj0yJyBmcmFtZUJvcmRlcj0nMCcgc2Nyb2xsaW5nPScwJyB3aWR0aD0nMTcwcHgnIGhlaWdodD0nMjBweCc+PC9pZnJhbWU+XG4gICAgICAgIDxpZnJhbWUgc3JjPSdodHRwczovL2doYnRucy5jb20vZ2l0aHViLWJ0bi5odG1sP3VzZXI9ZGFydWw3NSZyZXBvPXdlYi1yZWFjdCZ0eXBlPWZvcmsmY291bnQ9dHJ1ZSZ2PTInIGZyYW1lQm9yZGVyPScwJyBzY3JvbGxpbmc9JzAnIHdpZHRoPScxNzBweCcgaGVpZ2h0PScyMHB4Jz48L2lmcmFtZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRm9vdGVyLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdGb290ZXInO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fRm9vdGVyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fRm9vdGVyLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDUwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2Y0ZjRmNDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHdpZHRoOiA3NTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQ6IDEwMCUgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNhYWE7IH1cXG5cXG5oMSwgaDIsIGgzIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XFxuXFxuZGl2Lm1haW4tY29udGVudCB7XFxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDQwcHg7IH1cXG5cXG4vKiBodHRwOi8vY3NzZGVjay5jb20vbGFicy9iZWF1dGlmdWwtZmxhdC1idXR0b25zICovXFxuYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQkZDQUQyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0ycHggIzJhOGJjYzsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP2luZGVudGVkU3ludGF4IS4vX0FwcC5zYXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9fQXBwLnNhc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP2luZGVudGVkU3ludGF4IS4vX0FwcC5zYXNzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3NcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMSB7XFxuICBjb2xvcjogIzVhODg5NDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXI/aW5kZW50ZWRTeW50YXghLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zYXNzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maWxlLWxvYWRlcj9uYW1lPWZhdmljb24uaWNvIS4vYXBwL2ltYWdlcy9mYXZpY29uLmljb1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG4vLyBUT0RPOiBkbyBpdCBpbiBzdG9yZSBtYXliZVxuY29uc3QgbWV0YXMgPSByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvY29uZmlnLmpzb24nKS5oZWxtZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q09OVEFDVCBQQUdFPC9oMT5cbiAgICAgICAgPEhlbG1ldCB0aXRsZT17bWV0YXMudGl0bGV9IHRpdGxlVGVtcGxhdGU9JyVzIHwgQ29udGFjdCBwYWdlJyAvPlxuICAgICAgICA8cD50ZXN0IHRoZSA0MDQgcGFnZSA8YSBocmVmPScvbWlkZGxlb2Zub3doZXJlJz5oZXJlPC9hPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24vQ29udGFjdC5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEZMVVhcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xuaW1wb3J0IEFwcFN0b3JlRGVwZW5kaW5nIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZURlcGVuZGluZyc7XG5pbXBvcnQgSG9tZVNlY3Rpb25BY3Rpb25zIGZyb20gJy4vSG9tZVNlY3Rpb25BY3Rpb25zJztcbmltcG9ydCBjb25uZWN0VG9TdG9yZXMgZnJvbSAnYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcyc7XG5cbi8vIENPTVBPTkVOVFxuaW1wb3J0IEhvbWVTZWN0aW9uU3ViUGFydE9uZSBmcm9tICcuL0hvbWVTZWN0aW9uU3ViUGFydE9uZSc7XG5pbXBvcnQgSG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGZyb20gJy4vSG9tZVNlY3Rpb25TdWJQYXJ0VHdvJztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fSG9tZVNlY3Rpb24uc2NzcycpO1xufVxuXG5sZXQgaG9tZVNlY3Rpb24gPSBjbGFzcyBIb21lU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gcmV0cmlldmUgZGF0YSBmcm9tIHN0b3JlXG4gICAgbGV0IHN0b3JlUHJvcHMgPSBIb21lU2VjdGlvbi5nZXRQcm9wc0Zyb21TdG9yZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SE9NRSBQQUdFPC9oMT5cbiAgICAgICAgPEhvbWVTZWN0aW9uQWN0aW9ucyAvPlxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0T25lIGFwaURhdGE9e3N0b3JlUHJvcHMuYXBpRGF0YX0gLz5cbiAgICAgICAgPEhvbWVTZWN0aW9uU3ViUGFydFR3byBhcGlEYXRhPXtzdG9yZVByb3BzLmFwaURhdGF9Lz5cbiAgICAgICAgPEhvbWVTZWN0aW9uU3ViUGFydFR3byBhcGlEYXRhPXtzdG9yZVByb3BzLmFwaURhdGFEZXBlbmRpbmd9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xuICAgIHJldHVybiBbQXBwU3RvcmUsIEFwcFN0b3JlRGVwZW5kaW5nXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9wc0Zyb21TdG9yZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaURhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZGF0YUJ5UmVzdEFwaSxcbiAgICAgIGFwaURhdGFEZXBlbmRpbmc6IEFwcFN0b3JlRGVwZW5kaW5nLmdldFN0YXRlKCkuZGF0YUJ5UmVzdEFwaVxuICAgIH07XG4gIH1cbn07XG5cbmhvbWVTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1N0b3Jlcyhob21lU2VjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzXG4gKiovIiwiLyoqXG4gKiAnSGlnaGVyIE9yZGVyIENvbXBvbmVudCcgdGhhdCBjb250cm9scyB0aGUgcHJvcHMgb2YgYSB3cmFwcGVkXG4gKiBjb21wb25lbnQgdmlhIHN0b3Jlcy5cbiAqXG4gKiBFeHBlY3RzIHRoZSBDb21wb25lbnQgdG8gaGF2ZSB0d28gc3RhdGljIG1ldGhvZHM6XG4gKiAgIC0gZ2V0U3RvcmVzKCk6IFNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2Ygc3RvcmVzLlxuICogICAtIGdldFByb3BzRnJvbVN0b3Jlcyhwcm9wcyk6IFNob3VsZCByZXR1cm4gdGhlIHByb3BzIGZyb20gdGhlIHN0b3Jlcy5cbiAqXG4gKiBFeGFtcGxlIHVzaW5nIG9sZCBSZWFjdC5jcmVhdGVDbGFzcygpIHN0eWxlOlxuICpcbiAqICAgIGNvbnN0IE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgICBzdGF0aWNzOiB7XG4gKiAgICAgICAgZ2V0U3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgICByZXR1cm4gW215U3RvcmVdXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICAgIHJldHVybiBteVN0b3JlLmdldFN0YXRlKClcbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHJlbmRlcigpIHtcbiAqICAgICAgICAvLyBVc2UgdGhpcy5wcm9wcyBsaWtlIG5vcm1hbCAuLi5cbiAqICAgICAgfVxuICogICAgfSlcbiAqICAgIE15Q29tcG9uZW50ID0gY29ubmVjdFRvU3RvcmVzKE15Q29tcG9uZW50KVxuICpcbiAqXG4gKiBFeGFtcGxlIHVzaW5nIEVTNiBDbGFzczpcbiAqXG4gKiAgICBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gKiAgICAgIHN0YXRpYyBnZXRTdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICByZXR1cm4gW215U3RvcmVdXG4gKiAgICAgIH1cbiAqICAgICAgc3RhdGljIGdldFByb3BzRnJvbVN0b3Jlcyhwcm9wcykge1xuICogICAgICAgIHJldHVybiBteVN0b3JlLmdldFN0YXRlKClcbiAqICAgICAgfVxuICogICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgLy8gVXNlIHRoaXMucHJvcHMgbGlrZSBub3JtYWwgLi4uXG4gKiAgICAgIH1cbiAqICAgIH1cbiAqICAgIE15Q29tcG9uZW50ID0gY29ubmVjdFRvU3RvcmVzKE15Q29tcG9uZW50KVxuICpcbiAqIEEgZ3JlYXQgZXhwbGFuYXRpb24gb2YgdGhlIG1lcml0cyBvZiBoaWdoZXIgb3JkZXIgY29tcG9uZW50cyBjYW4gYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9iaXQubHkvMWFiUGtyUFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Z1bmN0aW9ucyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIGNvbm5lY3RUb1N0b3JlcyhDb21wb25lbnQpIHtcbiAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIHN0YXRpYyBtZXRob2RzLlxuICBpZiAoISgwLCBfZnVuY3Rpb25zLmlzRnVuY3Rpb24pKENvbXBvbmVudC5nZXRTdG9yZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0VG9TdG9yZXMoKSBleHBlY3RzIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB0byBoYXZlIGEgc3RhdGljIGdldFN0b3JlcygpIG1ldGhvZCcpO1xuICB9XG4gIGlmICghKDAsIF9mdW5jdGlvbnMuaXNGdW5jdGlvbikoQ29tcG9uZW50LmdldFByb3BzRnJvbVN0b3JlcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3RUb1N0b3JlcygpIGV4cGVjdHMgdGhlIHdyYXBwZWQgY29tcG9uZW50IHRvIGhhdmUgYSBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkgbWV0aG9kJyk7XG4gIH1cblxuICAvLyBXcmFwcGVyIENvbXBvbmVudC5cbiAgdmFyIFN0b3JlQ29ubmVjdGlvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTdG9yZUNvbm5lY3Rpb24nLFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50LmdldFByb3BzRnJvbVN0b3Jlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgc3RvcmVzID0gQ29tcG9uZW50LmdldFN0b3Jlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgc3RvcmVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHN0b3JlLmxpc3RlbihfdGhpcy5vbkNoYW5nZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChDb21wb25lbnQuY29tcG9uZW50RGlkQ29ubmVjdCkge1xuICAgICAgICBDb21wb25lbnQuY29tcG9uZW50RGlkQ29ubmVjdCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHN0b3JlcyA9IENvbXBvbmVudC5nZXRTdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHN0b3Jlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICBzdG9yZS51bmxpc3RlbihfdGhpczIub25DaGFuZ2UpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29tcG9uZW50LmdldFByb3BzRnJvbVN0b3Jlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2Z1bmN0aW9ucy5hc3NpZ24pKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gU3RvcmVDb25uZWN0aW9uO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjb25uZWN0VG9TdG9yZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVhY2hPYmplY3QgPSBlYWNoT2JqZWN0O1xuZXhwb3J0cy5hc3NpZ24gPSBhc3NpZ247XG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59O1xuXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBlYWNoT2JqZWN0KGYsIG8pIHtcbiAgby5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tKSB7XG4gICAgT2JqZWN0LmtleXMoT2JqZWN0KGZyb20pKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGYoa2V5LCBmcm9tW2tleV0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc291cmNlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHNvdXJjZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBlYWNoT2JqZWN0KGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH0sIHNvdXJjZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL2Z1bmN0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXHJcbmltcG9ydCBtZXJnZSBmcm9tICdvYmplY3QtYXNzaWduJztcclxuXHJcbi8vIEZMVVhcclxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcclxuXHJcbi8vIERFUEVOREVOQ1lcclxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG4vLyB3ZWJwYWNrIGhvdCByZWxvYWRcclxuaW1wb3J0IG1ha2VIb3QgZnJvbSAnYWx0L3V0aWxzL21ha2VIb3QnO1xyXG5cclxubGV0IGFwcFN0b3JlID0gbWFrZUhvdChhbHQsIGNsYXNzIEFwcFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoQXBwQWN0aW9ucyk7XHJcbiAgICB0aGlzLmRhdGFCeVJlc3RBcGkgPSB7fTtcclxuICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGlkLCB1cGRhdGVzKSB7XHJcbiAgICBpZih0aGlzLmRhdGFbaWRdICYmIHVwZGF0ZXMpe1xyXG4gICAgICB0aGlzLmRhdGFbaWRdID0gbWVyZ2UodGhpcy5kYXRhW2lkXSwgdXBkYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbGwodXBkYXRlcykge1xyXG4gICAgZm9yICh2YXIgaWQgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKGlkLCB1cGRhdGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlKHRleHQpIHtcclxuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBoYW5kIHdhdmluZyBvZiBjb3Vyc2UuXHJcbiAgICB2YXIgaWQgPSAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpKS50b1N0cmluZygzNik7XHJcbiAgICB0aGlzLmRhdGFbaWRdID0ge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgdGV4dDogdGV4dFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uRmV0Y2goKSB7XHJcbiAgICB0aGlzLmRhdGFCeVJlc3RBcGkgPSB7ZGF0YTogJ2hlbGxvJ307XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWInKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge2RhdGE6IGpzb259O1xyXG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25VcGRhdGVUZXh0KHgpIHtcclxuICAgIGxldCB7IGlkLCB0ZXh0IH0gPSB4O1xyXG4gICAgdGV4dCA9IHRleHQgPyB0ZXh0LnRyaW0oKSA6ICcnO1xyXG4gICAgaWYgKHRleHQgPT09ICcnKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlKGlkLCB7IHRleHQgfSk7XHJcbiAgfVxyXG5cclxuICBvblRvZ2dsZUNvbXBsZXRlKGlkKSB7XHJcbiAgICBsZXQgY29tcGxldGUgPSAhdGhpcy5kYXRhW2lkXS5jb21wbGV0ZTtcclxuICAgIHRoaXMudXBkYXRlKGlkLCB7IGNvbXBsZXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVDb21wbGV0ZUFsbCgpIHtcclxuICAgIC8qdmFyIGNvbXBsZXRlID0gIXRvZG9TdG9yZS5hcmVBbGxDb21wbGV0ZSgpO1xyXG4gICAgdGhpcy51cGRhdGVBbGwoeyBjb21wbGV0ZSB9KTsqL1xyXG4gIH1cclxuXHJcbiAgb25EZXN0cm95KGlkKSB7XHJcbiAgICBkZWxldGUgdGhpcy5kYXRhW2lkXTtcclxuICB9XHJcblxyXG4gIG9uRGVzdHJveUNvbXBsZXRlZCgpIHtcclxuICAgIGZvciAobGV0IGlkIGluIHRoaXMuZGF0YSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhW2lkXS5jb21wbGV0ZSkge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95KGlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFyZUFsbENvbXBsZXRlKCkge1xyXG4gICAgbGV0IHsgZGF0YSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG4gICAgZm9yIChsZXQgaWQgaW4gZGF0YSkge1xyXG4gICAgICBpZiAoIWRhdGFbaWRdLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0sICdBcHBTdG9yZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcHBTdG9yZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgQXBwQWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2NyZWF0ZScsXG4gICAgICAnZGVzdHJveScsXG4gICAgICAndG9nZ2xlQ29tcGxldGUnLFxuICAgICAgJ2ZldGNoJ1xuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbHQuY3JlYXRlQWN0aW9ucyhBcHBBY3Rpb25zKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qc1xuICoqLyIsIi8vIExJQlJBUllcclxuaW1wb3J0IEFsdCBmcm9tICdhbHQnO1xyXG5cclxuLy8gY3JlYXRlIGFsdCBpbnN0YW5jZVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQWx0KCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2FsdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFsdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYWx0XCJcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiBtYWtlSG90KGFsdCwgU3RvcmUpIHtcbiAgdmFyIG5hbWUgPSBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFN0b3JlLmRpc3BsYXlOYW1lIDogYXJndW1lbnRzWzJdO1xuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIGFsdC5zdG9yZXNbbmFtZV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWx0LmNyZWF0ZVN0b3JlKFN0b3JlLCBuYW1lKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtYWtlSG90O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvbWFrZUhvdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBGTFVYXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG4vLyBERVBFTkRFTkNZXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi9BcHBTdG9yZSc7XG4vLyB3ZWJwYWNrIGhvdCByZWxvYWRcbmltcG9ydCBtYWtlSG90IGZyb20gJ2FsdC91dGlscy9tYWtlSG90JztcblxubGV0IGRlcGVuZGluZ1N0b3JlID0gbWFrZUhvdChhbHQsIGNsYXNzIERlcGVuZGluZ1N0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBcHBBY3Rpb25zKTtcbiAgICB0aGlzLmRhdGFCeVJlc3RBcGkgPSB7fTtcbiAgfVxuXG4gIG9uRmV0Y2goKSB7XG4gICAgdGhpcy53YWl0Rm9yKFtBcHBTdG9yZS5kaXNwYXRjaFRva2VuXSk7IC8vIGV2ZW50IGhhcyB0byBiZSBjb25zdW1lZFxuICAgIHRoaXMuZGF0YUJ5UmVzdEFwaSA9IHtkYXRhOiAnaGVyZSBpcyBkZXBlbmRlbmN5IHN0b3JlJ307XG4gIH1cbn0sICdEZXBlbmRpbmdTdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGVuZGluZ1N0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvc3RvcmVzL0FwcFN0b3JlRGVwZW5kaW5nLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVNlY3Rpb25BY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtc2VjdGlvbi1hY3Rpb25zJz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PkZBS0UgQVBJIENBTEw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XG4gIH1cbn1cblxuSG9tZVNlY3Rpb25BY3Rpb25zLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbkFjdGlvbnMnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbkFjdGlvbnMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuXG4vLyBGTFVYXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvblN1YlBhcnRPbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIGFwaURhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNvbnRlbnRNYXJrdXAgPSAnZGlzcGF0Y2hpbmcgem9uZSAxJztcbiAgICBpZiAodGhpcy5wcm9wcy5hcGlEYXRhLmRhdGEpIHtcbiAgICAgIGNvbnRlbnRNYXJrdXAgPSBtYXJrZWQoJ2BgYGpzb25cXG4nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5hcGlEYXRhLmRhdGEsIG51bGwsIDIpICsgJ2BgYCcsIHticmVha3M6IHRydWV9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtc2VjdGlvbi1zdWItcGFydC1vbmUnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50TWFya3VwfX0+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIEFwcEFjdGlvbnMuZmV0Y2goKTtcbiAgfVxufVxuXG5Ib21lU2VjdGlvblN1YlBhcnRPbmUucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uU3ViUGFydE9uZSc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydE9uZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibWFya2VkXCJcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XG4gICAgICBhcGlEYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBjb250ZW50TWFya3VwID0gJ2Rpc3BhdGNoaW5nIHpvbmUgMic7XG4gICAgaWYgKHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhKSB7XG4gICAgICBjb250ZW50TWFya3VwID0gbWFya2VkKCdgYGBqc29uXFxuJyArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuYXBpRGF0YS5kYXRhLCBudWxsLCAyKSArICdgYGAnLCB7YnJlYWtzOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXNlY3Rpb24tc3ViLXBhcnQtdHdvJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudE1hcmt1cH19PjwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XG4gIH1cbn1cblxuSG9tZVNlY3Rpb25TdWJQYXJ0VHdvLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvblN1YlBhcnRUd28nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvblN1YlBhcnRUd28uanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5ob21lLXNlY3Rpb24tYWN0aW9ucyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRGNkZGO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblxcbmRpdi5ob21lLXNlY3Rpb24tc3ViLXBhcnQtb25lIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LmhvbWUtc2VjdGlvbi1zdWItcGFydC10d28ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4RUU3RkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5QQUdFIE5PVCBGT1VORDwvaDE+XG4gICAgICAgIDxwPnllcyBpbmRlZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk5vdEZvdW5kU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnTm90Rm91bmRTZWN0aW9uJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIENPTVBPTkVOVFxuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vVG9kb0l0ZW0nO1xuaW1wb3J0IFRvZG9UZXh0SW5wdXQgZnJvbSAnLi9Ub2RvVGV4dElucHV0JztcbmltcG9ydCBUb2RvU25hcHNob3RzIGZyb20gJy4vVG9kb1NuYXBzaG90cyc7XG5cbi8vIEZMVVhcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL0FwcFN0b3JlJztcbmltcG9ydCBTbmFwc2hvdFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9TbmFwc2hvdFN0b3JlJztcbmltcG9ydCBjb25uZWN0VG9TdG9yZXMgZnJvbSAnYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcyc7XG5cbmxldCB0b2RvU2VjdGlvbiA9IGNsYXNzIFRvZG9TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyByZXRyaWV2ZSBkYXRhIGZyb20gc3RvcmVcbiAgICBsZXQgc3RvcmVQcm9wcyA9IFRvZG9TZWN0aW9uLmdldFByb3BzRnJvbVN0b3JlcygpO1xuICAgIC8vIGJ1aWxkIHdpdGggY3VycmVudCBkYXRhXG4gICAgbGV0IGFsbFRvZG9zID0gc3RvcmVQcm9wcy5hbGxEYXRhLFxuICAgICAgICB0b2RvcyA9IFtdO1xuICAgIC8vIGdlbmVyYXRlIHRvZG8gaXRlbSBsaXN0XG4gICAgZm9yICh2YXIga2V5IGluIGFsbFRvZG9zKSB7XG4gICAgICB0b2Rvcy5wdXNoKDxUb2RvSXRlbSBrZXk9e2tleX0gdG9kbz17YWxsVG9kb3Nba2V5XX0gLz4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VE9ETyBQQUdFPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8nPlxuICAgICAgICAgIDxwPkZpcnN0IGFkZCBzb21lIHRhc2tzIGJ5IHByZXNzaW5nIGVudGVyIGtleTwvcD5cbiAgICAgICAgICA8VG9kb1RleHRJbnB1dCBjbGFzc05hbWU9J2VkaXQnIGlkPSduZXctdG9kbycgcGxhY2Vob2xkZXI9J1doYXQgbmVlZHMgdG8gYmUgZG9uZSA/JyBvblNhdmU9e3RoaXMuX29uU2F2ZS5iaW5kKHRoaXMpfSB2YWx1ZT0nJyAvPlxuICAgICAgICAgIDx1bCBpZD0ndG9kby1saXN0Jz57dG9kb3N9PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUb2RvU25hcHNob3RzIHNuYXBzaG90cz17c3RvcmVQcm9wcy5zbmFwc2hvdHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX29uU2F2ZSh0ZXh0KSB7XG4gICAgaWYgKHRleHQudHJpbSgpKXtcbiAgICAgIEFwcEFjdGlvbnMuY3JlYXRlKHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRTdG9yZXMoKSB7XG4gICAgcmV0dXJuIFtBcHBTdG9yZSwgU25hcHNob3RTdG9yZV07XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxEYXRhOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLmRhdGEsXG4gICAgICBhcmVBbGxDb21wbGV0ZTogQXBwU3RvcmUuYXJlQWxsQ29tcGxldGUoKSxcbiAgICAgIHNuYXBzaG90czogU25hcHNob3RTdG9yZS5nZXRTdGF0ZSgpLnNuYXBzaG90c1xuICAgIH07XG4gIH1cbn07XG5cbnRvZG9TZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1N0b3Jlcyh0b2RvU2VjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fVG9kb0l0ZW0uc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIHRvZG86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRWRpdGluZzogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB0b2RvID0gdGhpcy5wcm9wcy50b2RvO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAnY29tcGxldGVkJzogdG9kby5jb21wbGV0ZSxcbiAgICAgICAgICAnZWRpdGluZyc6IHRoaXMuc3RhdGUuaXNFZGl0aW5nXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e3RvZG8uaWR9PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dG9kby5jb21wbGV0ZX0gb25DaGFuZ2U9e3RoaXMuX29uVG9nZ2xlQ29tcGxldGUuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPGxhYmVsPnt0b2RvLnRleHR9PC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZXN0cm95XCIgb25DbGljaz17dGhpcy5fb25EZXN0cm95Q2xpY2suYmluZCh0aGlzKX0+JiMxMDAwNjs8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIF9vblRvZ2dsZUNvbXBsZXRlKCkge1xuICAgIEFwcEFjdGlvbnMudG9nZ2xlQ29tcGxldGUodGhpcy5wcm9wcy50b2RvLmlkKTtcbiAgfVxuXG4gIF9vbkRlc3Ryb3lDbGljaygpIHtcbiAgICBBcHBBY3Rpb25zLmRlc3Ryb3kodGhpcy5wcm9wcy50b2RvLmlkKTtcbiAgfVxufVxuXG5Ub2RvSXRlbS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb0l0ZW0nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvSXRlbS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ub2RvSXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9fVG9kb0l0ZW0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi50b2RvIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LnRvZG8tc25hcHNob3Qge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5idXR0b24uZGVzdHJveSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0JGQ0FEMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4ICMyYThiY2M7IH1cXG5cXG4uYnV0dG9uLmRlc3Ryb3k6YWN0aXZlIHtcXG4gIHRvcDogMXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG5saS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1RleHRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBvblNhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH07XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLl9vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fc2F2ZS5iaW5kKHRoaXMpfT5BREQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfc2F2ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgX29uQ2hhbmdlKC8qb2JqZWN0Ki8gZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIF9vbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuX3NhdmUoKTtcbiAgICB9XG4gIH1cbn1cblxuVG9kb1RleHRJbnB1dC5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1RleHRJbnB1dCc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9UZXh0SW5wdXQuanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBGTFVYXG5pbXBvcnQgU25hcHNob3RBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zJztcblxuLy8gQ09NUE9ORU5UXG5pbXBvcnQgVG9kb1NuYXBzaG90c0l0ZW0gZnJvbSAnLi9Ub2RvU25hcHNob3RzSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TbmFwc2hvdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc25hcHNob3RzOiB0aGlzLnByb3BzLnNuYXBzaG90c1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFsbFNuYXBzID0gdGhpcy5zdGF0ZS5zbmFwc2hvdHMsXG4gICAgICAgIHNuYXBzaG90cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFNuYXBzKSB7XG4gICAgICBzbmFwc2hvdHMucHVzaCg8VG9kb1NuYXBzaG90c0l0ZW0ga2V5PXtrZXl9IHNuYXBzaG90PXthbGxTbmFwc1trZXldfSAvPik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLXNuYXBzaG90Jz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PlRBS0UgU05BUFNIT1Q8L2J1dHRvbj5cbiAgICAgICAgPHVsIGlkPSd0b2RvLXNuYXBzaG90LWxpc3QnPntzbmFwc2hvdHN9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBTbmFwc2hvdEFjdGlvbnMudGFrZVNuYXBzaG90KCk7XG4gIH1cbn1cblxuVG9kb1NuYXBzaG90cy5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1NuYXBzaG90cyc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TbmFwc2hvdHMuanNcbiAqKi8iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIFNuYXBzaG90QWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2Rlc3Ryb3lTbmFwc2hvdCcsXG4gICAgICAnYm9vdHN0cmFwU25hcHNob3QnLFxuICAgICAgJ3Rha2VTbmFwc2hvdCdcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoU25hcHNob3RBY3Rpb25zKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gRkxVWFxuaW1wb3J0IFNuYXBzaG90QWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucyc7XG5cbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX1RvZG9JdGVtLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1NuYXBzaG90c0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XG4gICAgICBzbmFwc2hvdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdG9kbyA9IHRoaXMucHJvcHMuc25hcHNob3Q7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgIDxsYWJlbD48YSBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9ib290c3RyYXBTbmFwc2hvdC5iaW5kKHRoaXMpfT57dG9kby5pZH08L2E+PC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Rlc3Ryb3knIG9uQ2xpY2s9e3RoaXMuX29uRGVzdHJveUNsaWNrLmJpbmQodGhpcyl9PiYjMTAwMDY7PC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxuICBfYm9vdHN0cmFwU25hcHNob3QoKSB7XG4gICAgU25hcHNob3RBY3Rpb25zLmJvb3RzdHJhcFNuYXBzaG90KHRoaXMucHJvcHMuc25hcHNob3QuaWQpO1xuICB9XG5cbiAgX29uRGVzdHJveUNsaWNrKCkge1xuICAgIFNuYXBzaG90QWN0aW9ucy5kZXN0cm95U25hcHNob3QodGhpcy5wcm9wcy5zbmFwc2hvdC5pZCk7XG4gIH1cbn1cblxuVG9kb1NuYXBzaG90c0l0ZW0ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9TbmFwc2hvdHNJdGVtJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NuYXBzaG90c0l0ZW0uanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG4vLyBGTFVYXG5pbXBvcnQgU25hcHNob3RBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zJztcblxuLy8gREVQRU5ERU5DWVxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuLy8gd2VicGFjayBob3QgcmVsb2FkXG5pbXBvcnQgbWFrZUhvdCBmcm9tICdhbHQvdXRpbHMvbWFrZUhvdCc7XG5cbmxldCBzbmFwc2hvdFN0b3JlID0gbWFrZUhvdChhbHQsIGNsYXNzIFNuYXBzaG90U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKFNuYXBzaG90QWN0aW9ucyk7XG4gICAgdGhpcy5zbmFwc2hvdHMgPSBbXTtcbiAgfVxuXG4gIG9uQm9vdHN0cmFwU25hcHNob3QoaWQpIHtcbiAgICB2YXIgZWx0ID0gXy5maW5kKHRoaXMuc25hcHNob3RzLCAoc25hcCkgPT4ge1xuICAgICAgcmV0dXJuIHNuYXAuaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgaWYgKGVsdCkge1xuICAgICAgLy8gVE9ET1xuICAgICAgLy8gYWx0LnByZXBhcmUoQXBwU3RvcilcbiAgICAgIGFsdC5ib290c3RyYXAoZWx0LmRhdGEpO1xuICAgICAgLy8gYWx0LnJvbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25UYWtlU25hcHNob3QoKSB7XG4gICAgdmFyIHNuYXBzaG90ID0ge1xuICAgICAgaWQ6ICgrbmV3IERhdGUoKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkpLnRvU3RyaW5nKDM2KSxcbiAgICAgIGRhdGE6IGFsdC50YWtlU25hcHNob3QoJ0FwcFN0b3JlJylcbiAgICB9O1xuICAgIHRoaXMuc25hcHNob3RzLnB1c2goc25hcHNob3QpO1xuICB9XG5cbiAgb25EZXN0cm95U25hcHNob3QoaWQpIHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgLy90aGlzLnNuYXBzaG90c1xuICB9XG59LCAnU25hcHNob3RTdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNuYXBzaG90U3RvcmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9zdG9yZXMvU25hcHNob3RTdG9yZS5qc1xuICoqLyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG4vKmVzbGludC1kaXNhYmxlIG5ldy1jYXAqL1xubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4vKmVzbGludC1lbmFibGUgbmV3LWNhcCovXG5cbmxldCBhcGkgPSByZXF1aXJlKCcuLi9hcGkvYXBpJyk7XG5cbnJvdXRlci51c2UoJy9hcGkvKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBhcGkudG9kbyhyZXEsIHJlcywgbmV4dCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG4vL1xuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZihtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi4vYXBpL2FwaSddLCAoKSA9PiB7XG4gICAgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xuICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3JvdXRlcy9hcGkuanNcbiAqKi8iLCJsZXQgYXBpID0ge1xuICB0b2RvOiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgLy8gc2ltcGxlIGFwaSBmZXRjaCBleGFtcGxlLCBubyBvd24gREIgaGVyZSBzbyBleHRlcm5hbCBjYWxsIGlzIG1hZGUuXG5cbiAgICAgIC8vIGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViXG4gICAgIC8qIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dpdGh1YicpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoanNvbik7XG4gICAgICB9KTtcbiAgICAgICovXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7dGVzdDogJ3Rlc3QnfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBuZXh0KGVycik7XG4gICAgfVxuICB9LFxuICBvdGhlcnRvZG86ICgpID0+IHtcblxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NlcnZlci9hcGkvYXBpLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==