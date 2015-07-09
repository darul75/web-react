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
	
	// import Recorder from '../Recorder/Recorder';
	
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
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	// DEPENDENCY
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
	        this._onClickUpdate();
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
	
	// DEPENDENCY
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTAzNzQxOGY0MTZhNGQzODYyMDEiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Eb2N1bWVudC9IdG1sSGVhZGVyVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29uZmlnLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nIF5cXC5cXC8uKlxcLnN2ZyQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9iYWJlbC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9jc3MtMy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9leHByZXNzLnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2ZsdXguc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvaGVyb2t1LnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2h0bWwtNS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9qYXZhc2NyaXB0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2xvZGFzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9tb2NoYS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9icmFuZGluZy9ub2RlanMuc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvcmVhY3Quc3ZnIiwid2VicGFjazovLy8uL2FwcC9pbWFnZXMvYnJhbmRpbmcvd2VicGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzcz8wZDMzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzPzQ1NzciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzPzJhM2QiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zYXNzP2VmYWMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2VzL2Zhdmljb24uaWNvIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzLmpzIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FsdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW11dGFibGVcIiIsIndlYnBhY2s6Ly8vLi9+L2FsdC91dGlscy9JbW11dGFibGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vYWx0L3V0aWxzL21ha2VIb3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3Jlcy9BcHBTdG9yZURlcGVuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbkFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25TdWJQYXJ0T25lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzcz80MDBmIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9JdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9UZXh0SW5wdXRFZGl0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzPzlmYmMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmVzL1NuYXBzaG90U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwaS9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFF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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5MDM3NDE4ZjQxNmE0ZDM4NjIwMVxuICoqLyIsIi8vIE5PREVcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIEVYUFJFU1NcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGZhdmljb24gZnJvbSAnc2VydmUtZmF2aWNvbic7XG5cbi8vIFByb2ZpbGUgZGV2IG9yIHByb2R1Y3Rpb25cbmxldCBwcm9maWxlID0gcHJvY2Vzcy5lbnYuREVWID8gJ2RldicgOiAncHJvZCcsXG5cdHB1YmxpY1BhdGggPSBwcm9maWxlID09PSAnZGV2JyA/ICdidWlsZCcgOiAnZGlzdCc7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC5zZXQoJ3BvcnQnLCBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwdWJsaWNQYXRoKSk7XG5hcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2FwcC9pbWFnZXMvZmF2aWNvbi5pY28nKSkpO1xuXG4vL1xuLy8gUmVnaXN0ZXIgbWlkZGxld2FyZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIHJlbmRlcmVyXG5sZXQgcmVuZGVyZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9yZW5kZXJlcicpO1xuLy8gYXBpc1xubGV0IGFwaVJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2FwaScpO1xuXG4vL1xuLy8gQ29uZmlndXJlIG1pZGRsZXdhcmVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxucmVuZGVyZXIuaW5pdChwcm9maWxlKTtcblxuLy9cbi8vIEFjdGl2YXRlIG1pZGRsZXdhcmVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLnVzZShhcGlSb3V0ZXMpO1xuYXBwLnVzZShyZW5kZXJlci5yZW5kZXIpO1xuXG5odHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3RlbihhcHAuZ2V0KCdwb3J0JyksICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0V4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICcgKyBhcHAuZ2V0KCdwb3J0JykpO1xufSk7XG5cbi8vXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmKG1vZHVsZS5ob3QpIHtcbiAgLy8gYWNjZXB0IHVwZGF0ZSBvZiBkZXBlbmRlbmN5XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi9yb3V0ZXMvYXBpJywgJy4vcm91dGVzL3JlbmRlcmVyJ10sICgpID0+IHtcbiAgICBhcGlSb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9hcGknKTtcbiAgICBhcHAudXNlKGFwaVJvdXRlcyk7XG4gICAgcmVuZGVyZXIgPSByZXF1aXJlKCcuL3JvdXRlcy9yZW5kZXJlcicpO1xuICAgIHJlbmRlcmVyLmluaXQoJ2RldicpO1xuICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3NlcnZlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInNlcnZlLWZhdmljb25cIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImh0dHBcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImxldCByZW5kZXJlciA9IHJlcXVpcmUoJy4uL3V0aWxzL3JlbmRlcmVyJyk7XG5cbmxldCBwcm9maWxlID0gJ2Rldic7XG5cbnZhciByb3V0ZXNSZW5kZXJlciA9IHtcbiAgaW5pdDogKHR5cGUpID0+IHtcbiAgICBwcm9maWxlID0gdHlwZTtcbiAgICByZW5kZXJlci5pbml0KHR5cGUpO1xuICB9LFxuICByZW5kZXI6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHJlbmRlcmVyLnJlbmRlcihyZXEsIHJlcywgbmV4dCk7XG4gIH1cbn07XG5cbi8vXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuLi91dGlscy9yZW5kZXJlciddLCAoKSA9PiB7XG4gICAgcmVuZGVyZXIgPSByZXF1aXJlKCcuLi91dGlscy9yZW5kZXJlcicpO1xuICAgIHJlbmRlcmVyLmluaXQocHJvZmlsZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qc1xuICoqLyIsIi8vIE5PREVcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbi8vIEVYVEVSTkFMU1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBJc28gZnJvbSAnaXNvJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8vIENPUkVcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vLi4vYXBwL3JvdXRlcyc7XG5pbXBvcnQgYWx0IGZyb20gJy4uLy4uL2FwcC9hbHQnO1xuXG5sZXQgaHRtbCA9ICcnO1xuXG52YXIgcmVuZGVyZXIgPSB7XG4gIGluaXQ6ICh0eXBlKSA9PiB7XG4gICAgaHRtbCA9IHR5cGUgPT09ICdkZXYnID9cbiAgICAgIGZzLnJlYWRGaWxlU3luYygnLi9hc3NldHMvaW5kZXgtZGV2Lmh0bWwnLCB7ZW5jb2Rpbmc6ICd1dGY4J30pXG4gICAgICA6XG4gICAgICBmcy5yZWFkRmlsZVN5bmMoJy4vZGlzdC9pbmRleC1wcm9kLmh0bWwnLCB7ZW5jb2Rpbmc6ICd1dGY4J30pO1xuICB9LFxuICByZW5kZXI6IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGxldCBtYXJrdXAgPSAnJyxcbiAgICAgIGlzbyA9IG5ldyBJc28oKTtcblxuICAgIGNvbnN0IG9uZUl0ZW1Cb290c3RyYXBlZCA9IHtcbiAgICAgICdBcHBTdG9yZSc6IHtcbiAgICAgICAgJ2RhdGFCeVJlc3RBcGknOiB7fSxcbiAgICAgICAgJ2RhdGEnOiB7XG4gICAgICAgICAgJ2lhcXBvcjdwJzoge1xuICAgICAgICAgICAgJ2lkJzogJ2lhcXBvcjdwJyxcbiAgICAgICAgICAgICdjb21wbGV0ZSc6IGZhbHNlLFxuICAgICAgICAgICAgJ3RleHQnOiAnZnNmc2RmJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBUaGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zLCB3ZSB0YWtlIHRoZSBsb2NhbHMgZGF0YSB3ZSBoYXZlIGFscmVhZHlcbiAgICBmZXRjaGVkIGFuZCBzZWVkIG91ciBzdG9yZXMgd2l0aCBkYXRhLlxuICAgIE5leHQgd2UgdXNlIHJlYWN0LXJvdXRlciB0byBydW4gdGhlIFVSTCB0aGF0IGlzIHByb3ZpZGVkIGluIHJvdXRlcy5qc3hcbiAgICBGaW5hbGx5IHdlIHVzZSBpc28gaW4gb3JkZXIgdG8gcmVuZGVyIHRoaXMgY29udGVudCBzbyBpdCBwaWNrcyBiYWNrIHVwXG4gICAgb24gdGhlIGNsaWVudCBzaWRlIGFuZCBib290c3RyYXBzIHRoZSBzdG9yZXMuXG4gICAgaW5pdCBzZXJ2ZXIgcmVuZGVyZXJcbiAgICAqL1xuICAgIGFsdC5ib290c3RyYXAoSlNPTi5zdHJpbmdpZnkocmVzLmxvY2Fscy5kYXRhIHx8IG9uZUl0ZW1Cb290c3RyYXBlZCkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIFJvdXRlci5ydW4ocm91dGVzLCByZXEucGF0aCwgKEhhbmRsZXIsIHN0YXRlKSA9PiB7XG5cdFx0XHRcdC8vIGFsdCBmbHV4IGZsdXNoXG4gICAgICAgIGxldCBjb250ZW50ID0gUmVhY3QucmVuZGVyVG9TdHJpbmcoUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGVyKSk7XG4gICAgICAgIGlzby5hZGQoY29udGVudCwgYWx0LmZsdXNoKCkpO1xuXG4gICAgICAgIHJlcy5jb250ZW50VHlwZSA9ICd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmOCc7XG4gICAgICAgIGxldCBub3RGb3VuZCA9IF8uZmluZChzdGF0ZS5yb3V0ZXMsIHtpc05vdEZvdW5kOiB0cnVlfSk7XG5cbiAgICAgICAgaWYgKG5vdEZvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgICAgIH1cblxuXHRcdFx0XHQvLyBSRU5ERVJJTkcgYmFjayB0byBjbGllbnRcbiAgICAgICAgbGV0IG1hcmt1cENvbnRlbnQgPSBpc28ucmVuZGVyKCk7XG4gICAgICAgIC8vIERPTSA8aGVhZD4gaW5zdHJ1bWVudGF0aW9uXG4gICAgICAgIGxldCBoZWFkID0gSGVsbWV0LnJld2luZCgpO1xuICAgICAgICBtYXJrdXAgPSBodG1sLnJlcGxhY2UoJ01FVEEnLCBoZWFkLm1ldGEpLnJlcGxhY2UoJ1RJVExFJywgaGVhZC50aXRsZSkucmVwbGFjZSgnTElOSycsIGhlYWQubGluaykucmVwbGFjZSgnQ09OVEVOVCcsIG1hcmt1cENvbnRlbnQpO1xuICAgICAgICAvLyBTRU5EIHJlc3BvbnNlXG4gICAgICAgIHJlcy5zZW5kKG1hcmt1cCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBuZXh0KGUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NlcnZlci91dGlscy9yZW5kZXJlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3QtaGVsbWV0XCJcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpc29cIlxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZnNcIlxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcclxuLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8qZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCB7Um91dGUsIERlZmF1bHRSb3V0ZSwgTm90Rm91bmRSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0FwcC9BcHAnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24vQ29udGFjdCc7XHJcbmltcG9ydCBIb21lU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb24nO1xyXG5pbXBvcnQgTm90Rm91bmRTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZFNlY3Rpb24vTm90Rm91bmRTZWN0aW9uJztcclxuaW1wb3J0IFRvZG9TZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgPFJvdXRlIG5hbWU9J2FwcCcgcGF0aD0nLycgaGFuZGxlcj17QXBwbGljYXRpb259PlxyXG4gICAgPFJvdXRlIG5hbWU9J2hvbWUnIHBhdGg9Jy9ob21lJyBoYW5kbGVyPXtIb21lU2VjdGlvbn0vPlxyXG4gICAgPFJvdXRlIG5hbWU9J3RvZG8nIHBhdGg9Jy90b2RvJyBoYW5kbGVyPXtUb2RvU2VjdGlvbn0vPlxyXG4gICAgPFJvdXRlIG5hbWU9J2NvbnRhY3QnIHBhdGg9XCIvY29udGFjdFwiIGhhbmRsZXI9e0NvbnRhY3R9Lz5cclxuICAgIDxEZWZhdWx0Um91dGUgaGFuZGxlcj17SG9tZVNlY3Rpb259IC8+XHJcbiAgICA8Tm90Rm91bmRSb3V0ZSBoYW5kbGVyPXtOb3RGb3VuZFNlY3Rpb259IC8+XHJcbiAgPC9Sb3V0ZT5cclxuKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvcm91dGVzLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlSGFuZGxlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8vIENPTVBPTkVOVFxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlcic7XG4vLyBpbXBvcnQgUmVjb3JkZXIgZnJvbSAnLi4vUmVjb3JkZXIvUmVjb3JkZXInO1xuaW1wb3J0IEh0bWxIZWFkZXJUYWdzIGZyb20gJy4uL0RvY3VtZW50L0h0bWxIZWFkZXJUYWdzJztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fQXBwLnNjc3MnKTtcbiAgcmVxdWlyZSgnLi9fQXBwLnNhc3MnKTtcbiAgcmVxdWlyZSgnZmlsZT9uYW1lPWZhdmljb24uaWNvIS4uLy4uL2ltYWdlcy9mYXZpY29uLmljbycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SHRtbEhlYWRlclRhZ3MgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50Jz5cbiAgICAgICAgICA8Um91dGVIYW5kbGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnQXBwJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbi8vIFRPRE86IGRvIGl0IGluIHN0b3JlIG1heWJlXG5jb25zdCBtZXRhcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jb25maWcuanNvbicpLmhlbG1ldDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbEhlYWRlclRhZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIERPTSA8aGVhZD4gaW5zdHJ1bWVudGF0aW9uXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWxtZXRcbiAgICAgICAgICB0aXRsZT17bWV0YXMudGl0bGV9XG4gICAgICAgICAgICBtZXRhPXttZXRhcy5tZXRhfVxuICAgICAgICAgICAgbGluaz17bWV0YXMubGlua31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSHRtbEhlYWRlclRhZ3MucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0h0bWxIZWFkZXJUYWdzJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvRG9jdW1lbnQvSHRtbEhlYWRlclRhZ3MuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWxtZXRcIjoge1xuXHRcdFwidGl0bGVcIjogXCJ3ZWItcmVhY3RcIixcblx0XHRcIm1ldGFcIjogW1xuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuXHRcdFx0XHRcImNvbnRlbnRcIjogXCJXZWJwYWNrIE5vZGUgUmVhY3QgU3RhcnRlciBLaXRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwidmlld3BvcnRcIixcblx0XHRcdFx0XCJjb250ZW50XCI6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0XCJsaW5rXCI6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJyZWxcIjogXCJzaG9ydGN1dCBpY29uXCIsXG5cdFx0XHRcdFwiaHJlZlwiOiBcIi9mYXZpY29uLmljb1wiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbWFnZS94LWljb25cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJyZWxcIjogXCJpY29uXCIsXG5cdFx0XHRcdFwiaHJlZlwiOiBcIi9mYXZpY29uLmljb1wiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbWFnZS94LWljb25cIlxuXHRcdFx0fVxuXHRcdF1cblx0fVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hc3NldHMvY29uZmlnLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5jb25zdCBicmFuZGluZ3MgPSBbJ3JlYWN0JywgJ2ZsdXgnLCAnd2VicGFjaycsICdub2RlanMnLCAnYmFiZWwnLCAnbW9jaGEnLCAnamF2YXNjcmlwdCcsICdoZXJva3UnLCAnaHRtbC01JywgJ2Nzcy0zJywgJ2V4cHJlc3MnLCAnbG9kYXNoJ107XG5cbmxldCBicmFuZGluZ3NNYXJrdXAgPSBbXTtcblxuYnJhbmRpbmdzLmZvckVhY2goKGVsdCwgaWR4KSA9PiB7XG4gIGJyYW5kaW5nc01hcmt1cC5wdXNoKDxpbWcgc3JjPXtyZXF1aXJlKCcuLi8uLi9pbWFnZXMvYnJhbmRpbmcvJyArIGVsdCArICcuc3ZnJyl9IGtleT17aWR4fSB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIi8+KTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL19IZWFkZXIuc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgPGRpdj57YnJhbmRpbmdzTWFya3VwfTwvZGl2PlxuXHRcdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHRcdDx1bD5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz0nYXBwJz5Ib21lPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89J3RvZG8nPlRvZG88L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz0nY29udGFjdCc+Q29udGFjdDwvTGluaz48L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvaGVhZGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5IZWFkZXIucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hlYWRlcic7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanNcbiAqKi8iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmFiZWwuc3ZnXCI6IDIwLFxuXHRcIi4vY3NzLTMuc3ZnXCI6IDIxLFxuXHRcIi4vZXhwcmVzcy5zdmdcIjogMjIsXG5cdFwiLi9mbHV4LnN2Z1wiOiAyMyxcblx0XCIuL2hlcm9rdS5zdmdcIjogMjQsXG5cdFwiLi9odG1sLTUuc3ZnXCI6IDI1LFxuXHRcIi4vamF2YXNjcmlwdC5zdmdcIjogMjYsXG5cdFwiLi9sb2Rhc2guc3ZnXCI6IDI3LFxuXHRcIi4vbW9jaGEuc3ZnXCI6IDI4LFxuXHRcIi4vbm9kZWpzLnN2Z1wiOiAyOSxcblx0XCIuL3JlYWN0LnN2Z1wiOiAzMCxcblx0XCIuL3dlYnBhY2suc3ZnXCI6IDMxXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcgXlxcLlxcLy4qXFwuc3ZnJFxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzQk9Hc3JXLnN2Z1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvYmFiZWwuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSXpOakZ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBek5qRWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThaejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTVRJM0xqZzBNemcyT0N3ek5qQXVNRGczT1RFeUlFd3lNeTQyTmpFM01UUXpMRE16TVM0eE5qWXlORElnVERBdU5EUTFNVGcyT0RFekxEY3dMamMyTlRjeE5ETWdUREkxTlM0MU5UUTRNVE1zTnpBdU56WTFOekUwTXlCTU1qTXlMak14TXpZM0xETXpNUzR4TWpVME5URWdUREV5Tnk0NE5ETTROamdzTXpZd0xqQTROemt4TWlCTU1USTNMamcwTXpnMk9Dd3pOakF1TURnM09URXlJRm9pSUdacGJHdzlJaU15TmpSRVJUUWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NakV5TGpReE5qY3dNeXd6TVRRdU5UUTJOak0zSUV3eU16SXVNamMzT0RBeUxEa3lMakExTnpNeE9EY2dUREV5T0N3NU1pNHdOVGN6TVRnM0lFd3hNamdzTXpNM0xqazFNREkwTWlCTU1qRXlMalF4Tmpjd015d3pNVFF1TlRRMk5qTTNJRXd5TVRJdU5ERTJOekF6TERNeE5DNDFORFkyTXpjZ1dpSWdabWxzYkQwaUl6STVOalZHTVNJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWswMU15NDJOamcxTnpFMExERTRPQzQyTXpZeE16SWdURFUyTGpVek1EazRPU3d5TWpBdU5UY3lPRE0xSUV3eE1qZ3NNakl3TGpVM01qZ3pOU0JNTVRJNExERTRPQzQyTXpZeE16SWdURFV6TGpZMk9EVTNNVFFzTVRnNExqWXpOakV6TWlCTU5UTXVOalk0TlRjeE5Dd3hPRGd1TmpNMk1UTXlJRm9pSUdacGJHdzlJaU5GUWtWQ1JVSWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5ORGN1T1RFM01ERXhMREV5TXk0NU9UUTNNalVnVERVd0xqZ3lNREl4T1Rnc01UVTFMamt6TWpFek1pQk1NVEk0TERFMU5TNDVNekl4TXpJZ1RERXlPQ3d4TWpNdU9UazBOekkxSUV3ME55NDVNVGN3TVRFc01USXpMams1TkRjeU5TQk1ORGN1T1RFM01ERXhMREV5TXk0NU9UUTNNalVnV2lJZ1ptbHNiRDBpSTBWQ1JVSkZRaUkrUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB4TWpnc01qY3hMalU0TURFek1pQk1NVEkzTGpnMk1EQTBOQ3d5TnpFdU5qRTNOREEzSUV3NU1pNHlPVEUxTVRZMUxESTJNaTR3TVRNeE9EY2dURGt3TGpBeE56YzFPRElzTWpNMkxqVTBNVGc1SUV3MU55NDVOVGM1Tnpnc01qTTJMalUwTVRnNUlFdzJNaTQwTXpJek5URTJMREk0Tmk0Mk9EYzJORGdnVERFeU55NDROVE13TVRFc016QTBMamcwT0RnM09TQk1NVEk0TERNd05DNDRNRGd3T0RnZ1RERXlPQ3d5TnpFdU5UZ3dNVE15SUV3eE1qZ3NNamN4TGpVNE1ERXpNaUJhSWlCbWFXeHNQU0lqUlVKRlFrVkNJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVFl3TGpRNE16VXhOalVzTUNCTU9Ua3VNVFkwT0RNMU1pd3dJRXc1T1M0eE5qUTRNelV5TERFMkxqRTNOVGd5TkRJZ1REYzJMalkxT1RNME1EY3NNVFl1TVRjMU9ESTBNaUJNTnpZdU5qVTVNelF3Tnl3ek1pNHpOVEUyTkRnMElFdzVPUzR4TmpRNE16VXlMRE15TGpNMU1UWTBPRFFnVERrNUxqRTJORGd6TlRJc05EZ3VOVEkzTkRjeU5TQk1OakF1TkRnek5URTJOU3cwT0M0MU1qYzBOekkxSUV3Mk1DNDBPRE0xTVRZMUxEQWdURFl3TGpRNE16VXhOalVzTUNCYUlpQm1hV3hzUFNJak1EQXdNREF3SWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFd05pNDVNREV3T1Rrc01DQk1NVFExTGpVNE1qUXhPQ3d3SUV3eE5EVXVOVGd5TkRFNExERTBMakEyTlRrek5ERWdUREV5TXk0d056WTVNak1zTVRRdU1EWTFPVE0wTVNCTU1USXpMakEzTmpreU15d3hOaTQ0TnpreE1qQTVJRXd4TkRVdU5UZ3lOREU0TERFMkxqZzNPVEV5TURrZ1RERTBOUzQxT0RJME1UZ3NORGt1TWpNd056WTVNaUJNTVRBMkxqa3dNVEE1T1N3ME9TNHlNekEzTmpreUlFd3hNRFl1T1RBeE1EazVMRE0wTGpRMk1UVXpPRFVnVERFeU9TNDBNRFkxT1RNc016UXVORFl4TlRNNE5TQk1NVEk1TGpRd05qVTVNeXd6TVM0Mk5EZ3pOVEUySUV3eE1EWXVPVEF4TURrNUxETXhMalkwT0RNMU1UWWdUREV3Tmk0NU1ERXdPVGtzTUNCTU1UQTJMamt3TVRBNU9Td3dJRm9pSUdacGJHdzlJaU13TURBd01EQWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVFV6TGpNeE9EWTRNU3d3SUV3eE9USXNNQ0JNTVRreUxERTBMakEyTlRrek5ERWdUREUyT1M0ME9UUTFNRFVzTVRRdU1EWTFPVE0wTVNCTU1UWTVMalE1TkRVd05Td3hOaTQ0TnpreE1qQTVJRXd4T1RJc01UWXVPRGM1TVRJd09TQk1NVGt5TERRNUxqSXpNRGMyT1RJZ1RERTFNeTR6TVRnMk9ERXNORGt1TWpNd056WTVNaUJNTVRVekxqTXhPRFk0TVN3ek5DNDBOakUxTXpnMUlFd3hOelV1T0RJME1UYzJMRE0wTGpRMk1UVXpPRFVnVERFM05TNDRNalF4TnpZc016RXVOalE0TXpVeE5pQk1NVFV6TGpNeE9EWTRNU3d6TVM0Mk5EZ3pOVEUySUV3eE5UTXVNekU0TmpneExEQWdUREUxTXk0ek1UZzJPREVzTUNCYUlpQm1hV3hzUFNJak1EQXdNREF3SWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRJd01pNHhNalkzTmprc01UZzRMall6TmpFek1pQk1NakEzTGpnNU1qTTVOaXd4TWpNdU9UazBOekkxSUV3eE1qY3VPRGc1TlRneUxERXlNeTQ1T1RRM01qVWdUREV5Tnk0NE9EazFPRElzTVRVMUxqa3pNakV6TWlCTU1UY3lMamc1TWpFek1pd3hOVFV1T1RNeU1UTXlJRXd4TmprdU9UZzJNVEVzTVRnNExqWXpOakV6TWlCTU1USTNMamc0T1RVNE1pd3hPRGd1TmpNMk1UTXlJRXd4TWpjdU9EZzVOVGd5TERJeU1DNDFOekk0TXpVZ1RERTJOeTR5TVRZMU1qY3NNakl3TGpVM01qZ3pOU0JNTVRZekxqVXdPVFExTVN3eU5qRXVPVGt5TnpreElFd3hNamN1T0RnNU5UZ3lMREkzTVM0Mk1EWTROVGNnVERFeU55NDRPRGsxT0RJc016QTBMamd6TXpRd055Qk1NVGt6TGpNMk1qSTROaXd5T0RZdU5qZzNOalE0SUV3eE9UTXVPRFF5TmpNM0xESTRNUzR5T1RFNU5UWWdUREl3TVM0ek5EYzFNVFlzTVRrM0xqSXhNakV6TWlCTU1qQXlMakV5TmpjMk9Td3hPRGd1TmpNMk1UTXlJRXd5TURJdU1USTJOelk1TERFNE9DNDJNell4TXpJZ1dpSWdabWxzYkQwaUkwWkdSa1pHUmlJK1BDOXdZWFJvUGdvZ0lDQWdQQzluUGdvOEwzTjJaejRLXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9jc3MtMy5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaGFWazJxcy5zdmdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2V4cHJlc3Muc3ZnXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0NqeHpkbWNnZDJsa2RHZzlJakkxTm5CNElpQm9aV2xuYUhROUlqRXdNbkI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNalUySURFd01pSWdkbVZ5YzJsdmJqMGlNUzR4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUJ3Y21WelpYSjJaVUZ6Y0dWamRGSmhkR2x2UFNKNFRXbHVXVTFwYmlCdFpXVjBJajRLSUNBZ0lEeG5QZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB5TURVdU1ETXpNekEyTERBZ1F6RTVOQzQ1T0RVME1qRXNNQ0F4T0RVdU5qSTJPVGd5TERJdU9USXdOamswTURnZ01UYzNMamN6TVRjNU9TdzNMamt6T0RneE9EZzRJRXd4TWpjdU9UazROVFExTERRMExqUTJORGswT1RNZ1RERXdNUzQzT0RVd01qVXNNalV1TWpFMU56RXpOU0JETVRBd0xqSXdOVFF3Tnl3eU55NDNOemcxT1RNMElEazRMall4TkRFMU1qRXNNekF1TXpJMk9USTRNU0E1Tnk0d09USTNNVFE1TERNeUxqazJOVFEwTXpZZ1F6azJMamN5TmpFM016WXNNek11TlRrNU5qRTRNaUE1Tmk0ek9EVTRNVE00TERNMExqSTBNalV5SURrMkxqQXlOVEE1TURZc016UXVPRGMyTmprME5pQk1NVEUzTGprek5qRXhOQ3cxTUM0NU5qWTJPVE0ySUV3M01TNDVOVGcwTlRVc09EUXVOekk1TWpFNUlFTTJOUzQyTlRjME16VTNMRGc0TGpZMU5qUTBOekVnTlRndU5EQTRNRFl6TlN3NU1DNDNNek0xTVRRMElEVXdMamsyTXpjNE5EVXNPVEF1TnpNek5URTBOQ0JETWprdU1ETTRNakUxTlN3NU1DNDNNek0xTVRRMElERXhMakU1TmprMk16Y3NOekl1T0RrMU1UY3hOaUF4TVM0eE9UWTVOak0zTERVd0xqazJOalk1TXpZZ1F6RXhMakU1TmprMk16Y3NNamt1TURNNE1qRTFOU0F5T1M0d016VXpNRFkwTERFeExqRTVPVGczTWpjZ05UQXVPVFl6TnpnME5Td3hNUzR4T1RrNE56STNJRU0xT0M0ME1EZ3dOak0xTERFeExqRTVPVGczTWpjZ05qVXVOall3TXpRME9Dd3hNeTR5TnpRd016RWdOekV1T1RVNE5EVTFMREUzTGpJd05ERTJPREVnVERjMkxqVXlPRFU0TkRrc01qQXVOVFU0TXpFeE9DQkROemd1TkRFMk5UWXpOQ3d4Tnk0eU9UUXpORGc1SURnd0xqTTNORE0xT1RRc01UUXVNVEEyTURJeE5TQTRNaTR6TkRrMk1EazNMREV3TGprME1EazJOallnVERjNExqSTJOVEk1TWpRc055NDVOREUzTWpjNU15QkROekF1TXpjek1ERTROU3d5TGpreU1EWTVOREE0SURZeExqQXhNVFkzTURNc01DNHdNREk1TURrd05UYzROU0ExTUM0NU5qTTNPRFExTERBdU1EQXlPVEE1TURVM09EVWdRekl5TGpneE9EWTBPVGdzTUM0d01ESTVNRGt3TlRjNE5TQXdMREl5TGpneU1UVTFPRGdnTUN3MU1DNDVOalkyT1RNMklFTXdMRGM1TGpFeE1UZ3lPRE1nTWpJdU9ERTFOelF3Tnl3eE1ERXVPVE13TkRjNElEVXdMamsyTXpjNE5EVXNNVEF4TGprek1EUTNPQ0JETmpFdU1ERXhOamN3TXl3eE1ERXVPVE13TkRjNElEY3dMak0zTXpBeE9EVXNPVGt1TURBNU56ZzBJRGM0TGpJMk5USTVNalFzT1RNdU9Ua3hOalU1TWlCTU1USTNMams1T0RVME5TdzFOeTQwTmpnME16YzVJRXd4TlRRdU16RXpPRGd6TERjMkxqYzVNek13T1RJZ1F6RTFOUzQ1TWpVMU1ERXNOelF1TVRVeE9EZzBOaUF4TlRjdU5UTTBNakVzTnpFdU5UQXhOek15T1NBeE5Ua3VNVEkxTkRZMExEWTRMamMwTVRBek55QkRNVFU1TGpRek9UWTBNeXcyT0M0eE9UUXhNelF5SURFMU9TNDNNalEzTXl3Mk55NDJOVEF4TkRBeklERTJNQzR3TXpZc05qY3VNVEF6TWpNM05TQk1NVE00TGpBMk16ZzROaXcxTUM0NU5qWTJPVE0ySUV3eE9EUXVNRE00TmpNMkxERTNMakl3TkRFMk9ERWdRekU1TUM0ek16azJOVFVzTVRNdU1qYzJPVFFnTVRrM0xqVTVNVGt6Tml3eE1TNHhPVGs0TnpJM0lESXdOUzR3TXpNek1EWXNNVEV1TVRrNU9EY3lOeUJETWpJMkxqazJNVGM0TlN3eE1TNHhPVGs0TnpJM0lESTBOQzQ0TURBeE1qY3NNamt1TURNNE1qRTFOU0F5TkRRdU9EQXdNVEkzTERVd0xqazJOalk1TXpZZ1F6STBOQzQ0TURBeE1qY3NOekl1T0RrMU1UY3hOaUF5TWpZdU9UWXhOemcxTERrd0xqY3pNelV4TkRRZ01qQTFMakF6TXpNd05pdzVNQzQzTXpNMU1UUTBJRU14T1RjdU5UZzVNREkzTERrd0xqY3pNelV4TkRRZ01Ua3dMak16T1RZMU5TdzRPQzQyTlRrek5UWXhJREU0TkM0d016ZzJNellzT0RRdU56STVNakU1SUV3eE56a3VOVE0xTkRFMExEZ3hMalF5TVRZeU1ESWdRekUzTnk0Mk1qY3dOeklzT0RRdU56RTNOVGd5T0NBeE56VXVOamsxTkRVNExEZzNMamt5TURRMU5UUWdNVGN6TGpjMU5URXhOaXc1TVM0d05qZ3dOVFlnVERFM055NDNNelEzTURnc09UTXVPVGc0TnpVd01TQkRNVGcxTGpZeU9UZzVNU3c1T1M0d01EazNPRFFnTVRrMExqazRPRE16TERFd01TNDVNamMxTmprZ01qQTFMakF6TmpJeE5Td3hNREV1T1RJM05UWTVJRU15TXpNdU1UZ3hNelVzTVRBeExqa3lOelUyT1NBeU5UWXNOemt1TVRBNE9URTVNaUF5TlRZc05UQXVPVFl6TnpnME5TQkRNalUxTGprNU56QTVNU3d5TWk0NE1UZzJORGs0SURJek15NHhPREV6TlN3d0lESXdOUzR3TXpNek1EWXNNQ0JNTWpBMUxqQXpNek13Tml3d0lGb2lJR1pwYkd3OUlpTTBORUkzTkVFaVBqd3ZjR0YwYUQ0S0lDQWdJRHd2Wno0S1BDOXpkbWMrXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9mbHV4LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0kwTURCd2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5pQTBNREFpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwYmxsTmFXNGdiV1ZsZENJK0NpQWdJQ0E4Wno0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1qZ3VNRGd6TURBM01pd3pPVGd1TWpnNE56TTNJRXd5T0M0d09ETXdNRGN5TERNMk15NDFNVEF5TURNZ1F6STRMakE0TXpBd056SXNNell4TGpBMU9ESTJOU0F5Tmk0eU9EVTBOalV5TERNMk1DNHdNREEwT0RRZ01qUXVNVFkyTXpVM05pd3pOakF1TURBd05EZzBJRU14T1M0NU1UZ3lOVEEzTERNMk1DNHdNREEwT0RRZ01UUXVOakV5TXpZeU5Td3pOakV1TURVNE1qWTFJRGt1TnprMU1UWTVNak1zTXpZekxqRTRNVFF6TXlCTU9TNDNPVFV4TmpreU15d3pPVGd1TWpnNE56azBJRXd3TERNNU9DNHlPRGczT1RRZ1REQXNNek16TGpjeE1qY3pNaUJNT1M0M09UVXhOamt5TXl3ek16TXVOekV5TnpNeUlFdzVMamM1TlRFMk9USXpMRE0xTlM0d01UY3hNelFnUXpFMExqUTFNRFkyTkRrc016VXpMak13TkRVZ01qQXVNREF4TXpJNU5Dd3pOVEV1T0RNMk1UZzFJREkxTGpVMU1qa3dPRGNzTXpVeExqZ3pOakU0TlNCRE16UXVORFV4TVRNMk5pd3pOVEV1T0RNMk1UZzFJRE0zTGpjNU9EWTVPVGtzTXpVM0xqTXdOakF3TVNBek55NDNPVGcyT1RrNUxETTJOQzQ0TVRNeU1UZ2dURE0zTGpjNU9EWTVPVGtzTXprNExqSTRPRGM1TkNCTU1qZ3VNRGd6TURBM01pd3pPVGd1TWpnNE56azBJRXd5T0M0d09ETXdNRGN5TERNNU9DNHlPRGczTXpjZ1RESTRMakE0TXpBd056SXNNems0TGpJNE9EY3pOeUJhSUUwMU5pNHdPREl3TWpBNUxETTNOeTR5TWpZME9ERWdRelUyTGpRd09ERXdNelVzTXpnNExqa3dNRFE1T1NBMU9DNDJPVFV4T1RneUxETTVNUzR4T0RjeE16WWdOalV1T0RjMk16TXlOU3d6T1RFdU1UZzNNVE0ySUVNM01TNDFNVEF3TnpVM0xETTVNUzR4T0RjeE16WWdOemN1T0RjNE1qQTFNU3d6T0RrdU16QTRNelExSURneUxqYzNOell4T1RNc016ZzNMalF5T1RrMU5DQk1PRFF1TkRBNU9EWXhOeXd6T1RRdU56YzFPVE14SUVNM09TNHhPRFF6TmpRNExETTVOeTR4TkRZMU5qSWdOekl1T0RFM01UVXdOQ3d6T1RrdU5ETXdOVEV5SURZMUxqSXlOamcxTkRnc016azVMalF6TURVeE1pQkRORGd1T0RrMk5EZ3pPU3d6T1RrdU5ETXdOVEV5SURRMkxqTTJORFUxTlRjc016a3dMalExTWpjMUlEUTJMak0yTkRVMU5UY3NNemMyTGpFMk16TXlOU0JETkRZdU16WTBOVFUxTnl3ek5qZ3VNekkzTnprMklEUTJMamt6T0RFd01Ua3NNell4TGpJeU16azJOU0EwT0M0NE1UVXhNakEyTERNMU5DNDJPVE15TWpRZ1F6VXpMamN4TWpjd05USXNNelV5TGpneE5EZ3pNeUEyTUM0eU5EUXpOakU0TERNMU1TNDRNell4TWpnZ05qZ3VORGczTmpnd01Td3pOVEV1T0RNMk1USTRJRU00TVM0NE9EQTFOak0yTERNMU1TNDRNell4TWpnZ09EVXVPVFl3TnpRd05pd3pOVGt1TWpZMk1EUXhJRGcxTGprMk1EYzBNRFlzTXpjeUxqSTBOVGMyTVNCTU9EVXVPVFl3TnpRd05pd3pOemN1TWpJMk5ESTBJRXcxTmk0d09ESXdNakE1TERNM055NHlNalkwTWpRZ1REVTJMakE0TWpBeU1Ea3NNemMzTGpJeU5qUTRNU0JNTlRZdU1EZ3lNREl3T1N3ek56Y3VNakkyTkRneElGb2dUVFk0TGpRNE56Y3pOeklzTXpZd0xqQXdNRFE0TkNCRE5qVXVOVFV5T1RNM015d3pOakF1TURBd05EZzBJRFl3TGpnNU56UTBNVGNzTXpZd0xqQTRNVGM1SURVM0xqQTJNVEU0TXpRc016WXdMamd4TXpRNE9TQkROVFl1TmpVME56QTVOQ3d6TmpJdU56Y3pOVGczSURVMkxqRTJNalF4TWpNc016WTFMalEyT0RBM0lEVTFMams1T0RrME1qSXNNemN3TGpRME9EYzVJRXczTmk0ME1EZzFOelV5TERNM01DNDBORGczT1NCRE56WXVOREE0TlRjMU1pd3pOak11Tmpjd09UZzFJRGMxTGpFNE16Y3lNVFlzTXpZd0xqQXdNRFE0TkNBMk9DNDBPRGMzTXpjeUxETTJNQzR3TURBME9EUWdURFk0TGpRNE56Y3pOeklzTXpZd0xqQXdNRFE0TkNCTU5qZ3VORGczTnpNM01pd3pOakF1TURBd05EZzBJRm9nVFRFd05DNHpNalUwTWpVc016WXpMakU0TVRRek15Qk1NVEEwTGpNeU5UUXlOU3d6T1RndU1qZzROemswSUV3NU5DNDFNamcwTWpZeExETTVPQzR5T0RnM09UUWdURGswTGpVeU9EUXlOakVzTXpVNExqYzNOREkxT0NCRE1UQXlMamMzTkRRNE9Td3pOVFF1TWpnMU16YzRJREV4TVM0MU1Ea3hPRGtzTXpVeUxqZzVOalU1TmlBeE1UY3VNakkyTURZNUxETTFNaTQwT0RnM05TQk1NVEUzTGpJeU5qQTJPU3d6TmpBdU5qVXpNRFE1SUVNeE1UTXVNakkxTkRJMUxETTJNQzQ1TnpreE9Ea2dNVEE0TGpFMk1UWTRNeXd6TmpFdU5EWTROelF5SURFd05DNHpNalUwTWpVc016WXpMakU0TVRRek15Qk1NVEEwTGpNeU5UUXlOU3d6TmpNdU1UZ3hORE16SUV3eE1EUXVNekkxTkRJMUxETTJNeTR4T0RFME16TWdXaUJOTVRRekxqRXdNekk0Tnl3ek9Ua3VORE13TlRFeUlFTXhNamd1TkRnM016SXpMRE01T1M0ME16QTFNVElnTVRJeExqZzNOVEkzTlN3ek9USXVNalEzTmpBMUlERXlNUzQ0TnpVeU56VXNNemMxTGpnek56STBNeUJETVRJeExqZzNOVEkzTlN3ek5UZ3VORFE0TVRjMklERXpNQzQyTVRBd016SXNNelV4TGpnek5qRXlPQ0F4TkRNdU1UQXpNamczTERNMU1TNDRNell4TWpnZ1F6RTFOeTQzTVRRM09USXNNelV4TGpnek5qRXlPQ0F4TmpRdU16STROakV6TERNMU9TNHdNVGt3TXpVZ01UWTBMak15T0RZeE15d3pOelV1TkRJNU16azNJRU14TmpRdU16STROakV6TERNNU1pNDRNVGcxTWpFZ01UVTFMalU1TWpBNE1pd3pPVGt1TkRNd05URXlJREUwTXk0eE1ETXlPRGNzTXprNUxqUXpNRFV4TWlCTU1UUXpMakV3TXpJNE55d3pPVGt1TkRNd05URXlJRXd4TkRNdU1UQXpNamczTERNNU9TNDBNekExTVRJZ1dpQk5NVFF6TGpFd016STROeXd6TmpBdU1EQXdORGcwSUVNeE16VXVOVGt3TmprMkxETTJNQzR3TURBME9EUWdNVE14TGpReU9ETTFOU3d6TmpRdU16STFPRE00SURFek1TNDBNamd6TlRVc016YzFMamd6TnpNZ1F6RXpNUzQwTWpnek5UVXNNemc0TGpReE1UUXdOQ0F4TXpRdU9UTTROVE14TERNNU1TNHhPRGN4T1RNZ01UUXpMakV3TXpJNE55d3pPVEV1TVRnM01Ua3pJRU14TlRBdU5qRXlNamMzTERNNU1TNHhPRGN4T1RNZ01UVTBMamMzTnpNd05Td3pPRFl1T1RRd05EVTVJREUxTkM0M056Y3pNRFVzTXpjMUxqUXlPVFExTkNCRE1UVTBMamMzTnpNd05Td3pOakl1T0RVMU1qa3pJREUxTVM0eU5qWXlOekVzTXpZd0xqQXdNRFE0TkNBeE5ETXVNVEF6TWpnM0xETTJNQzR3TURBME9EUWdUREUwTXk0eE1ETXlPRGNzTXpZd0xqQXdNRFE0TkNCTU1UUXpMakV3TXpJNE55d3pOakF1TURBd05EZzBJRm9nVFRJeE1TNDFPVEk0TlRRc016azRMakk0T0Rjek55Qk1NakF3TGpBNE1UUTBPU3d6T1RndU1qZzROek0zSUVNeE9UY3VNemc0TnpNNExETTVNUzR4TURVek56SWdNVGt6TGpZek1URTFOaXd6T0RNdU56VTJOelkySURFNE55NDRNelEzTkRNc016YzNMak00T1RRNU5DQk1NVGd5TGpZNU1UUTJOeXd6TnpjdU16ZzVORGswSUV3eE9ESXVOamt4TkRZM0xETTVPQzR5T0RnM016Y2dUREUzTWk0NE9UVXpPRE1zTXprNExqSTRPRGN6TnlCTU1UY3lMamc1TlRNNE15d3pNek11TnpFeU56TXlJRXd4T0RJdU5qa3hORFkzTERNek15NDNNVEkzTXpJZ1RERTRNaTQyT1RFME5qY3NNemN3TGpjM05EZ3hOaUJNTVRnM0xqSTJNemc0TkN3ek56QXVOemMwT0RFMklFTXhPVEl1TWpRek5qa3NNelkxTGpZek1UQTRNeUF4T1RZdU1EYzVPVFE0TERNMU9TNHlOall3T1RnZ01UazRMamMzTlRJNE9Td3pOVEl1T1RjM09UQXpJRXd5TURrdU56azFNekV5TERNMU1pNDVOemM1TURNZ1F6SXdOaTR3TkRFeU56VXNNell3TGpVM01UTTBNeUF5TURFdU1qSTBPVE01TERNMk55NHlOalV3T1RjZ01UazFMamd6TlRrM01pd3pOekl1TnpNME9URXpJRU15TURJdU1qZzJNekl6TERNNE1DNDRPVGt5TnlBeU1EY3VNelEzTkRNMUxETTRPUzQxTlRNeE1qRWdNakV4TGpVNU1qZzFOQ3d6T1RndU1qZzROek0zSUV3eU1URXVOVGt5T0RVMExETTVPQzR5T0RnM016Y2dUREl4TVM0MU9USTROVFFzTXprNExqSTRPRGN6TnlCYUlFMHlNamt1T1RVMU56QTVMRE01T1M0ME16QTFNVElnUXpJeU1TNHdOVGt5TlRRc016azVMalF6TURVeE1pQXlNVGN1TnpFeE5qa3NNemt6TGprMk1qa3lOaUF5TVRjdU56RXhOamtzTXpnMkxqUTFNVEkwT1NCTU1qRTNMamN4TVRZNUxETTFNaTQ1TnpjNU1ETWdUREl5Tnk0ME1qVTJNU3d6TlRJdU9UYzNPVEF6SUV3eU1qY3VOREkxTmpFc016ZzNMalkzTkRjeklFTXlNamN1TkRJMU5qRXNNemt3TGpFeU5qWTJOeUF5TWprdU1qSXdORFkxTERNNU1TNHhPRGN4TXpZZ01qTXhMak0wTXpFM05Td3pPVEV1TVRnM01UTTJJRU15TXpVdU5UZzROVGsxTERNNU1TNHhPRGN4TXpZZ01qUXhMak00TkRrMUxETTVNQzR4TWpZMk5qY2dNalEyTGpJd016a3hOaXd6T0RndU1EQXpOU0JNTWpRMkxqSXdNemt4Tml3ek5USXVPVGMzT1RBeklFd3lOVFlzTXpVeUxqazNOemt3TXlCTU1qVTJMRE01TWk0ek1qZzVNVEVnUXpJME5DNDBNRGN5T0Rrc016azRMalk1TmpVNE15QXlNelV1TlRBM01qZzRMRE01T1M0ME16QTFNVElnTWpJNUxqazFOVGN3T1N3ek9Ua3VORE13TlRFeUlFd3lNamt1T1RVMU56QTVMRE01T1M0ME16QTFNVElnVERJeU9TNDVOVFUzTURrc016azVMalF6TURVeE1pQmFJaUJtYVd4c1BTSWpOamMyTWtFMklqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BHYytDaUFnSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweU1qVXVOakkzTlRVM0xETXhOeTR5TlRJM09URWdURE13TGpJMU56RXpOak1zTXpFM0xqSTFNamM1TVNCRE1UTXVOVFExTnpJME9Td3pNVGN1TWpVeU56a3hJREFzTXpBekxqY3dPREl4TWlBd0xESTROaTQ1T1RneE1URWdUREFzTXpBdU1qVTFPVGc1T0NCRE1Dd3hNeTQxTkRVM01qUTVJREV6TGpVME5UY3lORGtzTUNBek1DNHlOVGN4TXpZekxEQWdUREl5TlM0Mk1qYzFOVGNzTUNCRE1qUXlMak16TmpVeE1pd3dJREkxTlM0NE9EY3pNVFFzTVRNdU5UUTFOekkwT1NBeU5UVXVPRGczTXpFMExETXdMakkxTlRrNE9UZ2dUREkxTlM0NE9EY3pNVFFzTWpnMkxqazVPREV4TVNCRE1qVTFMamc0TnpNeE5Dd3pNRE11TnpBNE1qRXlJREkwTWk0ek16WTFNVElzTXpFM0xqSTFNamM1TVNBeU1qVXVOakkzTlRVM0xETXhOeTR5TlRJM09URWdUREl5TlM0Mk1qYzFOVGNzTXpFM0xqSTFNamM1TVNCTU1qSTFMall5TnpVMU55d3pNVGN1TWpVeU56a3hJRm9pSUdacGJHdzlJaU0yTnpZeVFUWWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFMk1DNHpOakE0TWpRc01qY3pMall3TURjM09DQk1NVFl3TGpNMk1EZ3lOQ3d4TkRjdU5qQTVOemszSUVNeE5qQXVNell3T0RJMExERTBOeTQyTURrM09UY2dNVFk0TGpVMU5USTRNU3d4TVRjdU5EWXdNVEExSURVNUxqUXhOalUyT0RFc01UVTVMamswTXpneU1TQkROVGt1TWpFMk9URXhNU3d4TmpBdU5EZ3lOVEU0SURVNUxqSXhOamt4TVRFc05ETXVORE01TnpRME1TQTFPUzR5TVRZNU1URXhMRFF6TGpRek9UYzBOREVnVERrMExqZzNOalU0TURrc05ETXVNakl3T1RJek9TQk1PVFF1T0RjMk5UZ3dPU3d4TVRndU1qRXhNems1SUVNNU5DNDROelkxT0RBNUxERXhPQzR5TVRFek9Ua2dNVGswTGpjeU1qazJPU3czT0M0NE9EVTJOekV4SURFNU5DNDNNakk1Tmprc01UUTRMakF6TkRneU5TQk1NVGswTGpjeU1qazJPU3d5TnpNdU5qQXhNVEEySUV3eE5qQXVNell3T0RJMExESTNNeTQyTURFeE1EWWdUREUyTUM0ek5qQTRNalFzTWpjekxqWXdNRGMzT0NCTU1UWXdMak0yTURneU5Dd3lOek11TmpBd056YzRJRm9nVFRFNE1DNDJPREE0TURRc09EZ3VOakEyTkRZME5TQk1NVFF5TGpnMU5qQXlOaXc0T0M0Mk1EWTBOalExSUVNeE5UWXVORGN3T0RZNUxEY3hMamsyTURJME1EWWdNVFk0TGpjNU5UZzROU3cwTXk0ME16azBNVFkxSURFMk9DNDNPVFU0T0RVc05ETXVORE01TkRFMk5TQk1NakEzTGprd05USTBPU3cwTXk0ME16azBNVFkxSUVNeU1EY3VPVEExTWpRNUxEUXpMalF6T1RVNE1ETWdNakF4TGpJeE1EUXpNU3cyTWk0d01qVTFOREEySURFNE1DNDJPREE0TURRc09EZ3VOakEyTkRZME5TQk1NVGd3TGpZNE1EZ3dOQ3c0T0M0Mk1EWTBOalExSUV3eE9EQXVOamd3T0RBMExEZzRMall3TmpRMk5EVWdXaUJOTlRrdU9EWTBNell6TkN3eU56TXVNemd4T1RVNElFdzFPUzQ0TmpRek5qTTBMREl3TVM0Mk16TTVPRFlnVERrMUxqYzBNVFUwTXpJc01qTTNMalV4TVRFMk5pQk1OVGt1T0RZME16WXpOQ3d5TnpNdU16Z3hPVFU0SUV3MU9TNDROalF6TmpNMExESTNNeTR6T0RFNU5UZ2dXaUlnWm1sc2JEMGlJMFpHUmtaR1JpSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lEd3ZaejRLUEM5emRtYytDZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9oZXJva3Uuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSXpOakZ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBek5qRWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThaejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTWpVMUxqVTFORGd4TXl3M01DNDNOalUzTVRReklFd3lNekl1TXpFek5qY3NNek14TGpFeU5UUTFNU0JNTVRJM0xqZzBNemcyT0N3ek5qQXVNRGczT1RFeUlFd3lNeTQyTmpFM01UUXpMRE16TVM0eE5qWXlORElnVERBdU5EUTFNVGcyT0RFekxEY3dMamMyTlRjeE5ETWdUREkxTlM0MU5UUTRNVE1zTnpBdU56WTFOekUwTXlCTU1qVTFMalUxTkRneE15dzNNQzQzTmpVM01UUXpJRm9pSUdacGJHdzlJaU5GTkRSRU1qWWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NVEk0TERNek55NDVOVEF5TkRJZ1RESXhNaTQwTVRZM01ETXNNekUwTGpVME5qWXpOeUJNTWpNeUxqSTNOemd3TWl3NU1pNHdOVGN6TVRnM0lFd3hNamdzT1RJdU1EVTNNekU0TnlCTU1USTRMRE16Tnk0NU5UQXlORElnVERFeU9Dd3pNemN1T1RVd01qUXlJRm9pSUdacGJHdzlJaU5HTVRZMU1qa2lQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5PREl1T0RJd01qRTVPQ3d4TlRVdU9UTXlNVE15SUV3eE1qZ3NNVFUxTGprek1qRXpNaUJNTVRJNExERXlNeTQ1T1RRM01qVWdURFEzTGpreE56QXhNU3d4TWpNdU9UazBOekkxSUV3ME9DNDJPREUwT1RRMUxERXpNaTQxTmpJNU9Ea2dURFUyTGpVek1EazRPU3d5TWpBdU5UY3lPRE0xSUV3eE1qZ3NNakl3TGpVM01qZ3pOU0JNTVRJNExERTRPQzQyTXpZeE16SWdURGcxTGpjek9Ea3dNVEVzTVRnNExqWXpOakV6TWlCTU9ESXVPREl3TWpFNU9Dd3hOVFV1T1RNeU1UTXlJRXc0TWk0NE1qQXlNVGs0TERFMU5TNDVNekl4TXpJZ1dpSWdabWxzYkQwaUkwVkNSVUpGUWlJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWswNU1DNHdNVGMzTlRneUxESXpOaTQxTkRFNE9TQk1OVGN1T1RVM09UYzRMREl6Tmk0MU5ERTRPU0JNTmpJdU5ETXlNelV4Tml3eU9EWXVOamczTmpRNElFd3hNamN1T0RVek1ERXhMRE13TkM0NE5EZzROemtnVERFeU9Dd3pNRFF1T0RBNE1EZzRJRXd4TWpnc01qY3hMalU0TURFek1pQk1NVEkzTGpnMk1EQTBOQ3d5TnpFdU5qRTNOREEzSUV3NU1pNHlPVEUxTVRZMUxESTJNaTR3TVRNeE9EY2dURGt3TGpBeE56YzFPRElzTWpNMkxqVTBNVGc1SUV3NU1DNHdNVGMzTlRneUxESXpOaTQxTkRFNE9TQmFJaUJtYVd4c1BTSWpSVUpGUWtWQ0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUSTBMakU0TURjME56TXNNQ0JNTkRBdU5ERXdOekkxTXl3d0lFdzBNQzQwTVRBM01qVXpMREUyTGpBek5URTJORGdnVERVMUxqSTFOek14T0Rjc01UWXVNRE0xTVRZME9DQk1OVFV1TWpVM016RTROeXd3SUV3M01TNDBPRGdzTUNCTU56RXVORGc0TERRNExqVTFPRFF4TnpZZ1REVTFMakkxT0RBeU1pdzBPQzQxTlRnME1UYzJJRXcxTlM0eU5UZ3dNaklzTXpJdU1qazRNVGszT0NCTU5EQXVOREV4TkRJNE5pd3pNaTR5T1RneE9UYzRJRXcwTUM0ME1URTBNamcyTERRNExqVTFPRFF4TnpZZ1RESTBMakU0TVRRMU1EVXNORGd1TlRVNE5ERTNOaUJNTWpRdU1UZ3hORFV3TlN3d0lFd3lOQzR4T0RBM05EY3pMREFnVERJMExqRTRNRGMwTnpNc01DQmFJaUJtYVd4c1BTSWpNREF3TURBd0lqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUa3lMamd6TURrME5URXNNVFl1TVRBeU5qZ3hNeUJNTnpndU5UUXlOelk1TWl3eE5pNHhNREkyT0RFeklFdzNPQzQxTkRJM05qa3lMREFnVERFeU15NHpOVFk0TXpVc01DQk1NVEl6TGpNMU5qZ3pOU3d4Tmk0eE1ESTJPREV6SUV3eE1Ea3VNRFl5TXpNc01UWXVNVEF5TmpneE15Qk1NVEE1TGpBMk1qTXpMRFE0TGpVMU9EUXhOellnVERreUxqZ3pNVFkwT0RRc05EZ3VOVFU0TkRFM05pQk1PVEl1T0RNeE5qUTROQ3d4Tmk0eE1ESTJPREV6SUV3NU1pNDRNekE1TkRVeExERTJMakV3TWpZNE1UTWdURGt5TGpnek1EazBOVEVzTVRZdU1UQXlOamd4TXlCYUlpQm1hV3hzUFNJak1EQXdNREF3SWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFek1DNDBOamt5TnpVc01DQk1NVFEzTGpNNU1qY3dNeXd3SUV3eE5UY3VPREF5T1RBeExERTNMakEyTVRrM09DQk1NVFk0TGpJd01qVTBPU3d3SUV3eE9EVXVNVE15TXpBNExEQWdUREU0TlM0eE16SXpNRGdzTkRndU5UVTROREUzTmlCTU1UWTRMamsyT1RFME15dzBPQzQxTlRnME1UYzJJRXd4TmpndU9UWTVNVFF6TERJMExqUTVNREU1TnpnZ1RERTFOeTQ0TURJNU1ERXNOREV1TnpVMU5ESTROaUJNTVRVM0xqVXlNelk1TWl3ME1TNDNOVFUwTWpnMklFd3hORFl1TXpRNU56RTBMREkwTGpRNU1ERTVOemdnVERFME5pNHpORGszTVRRc05EZ3VOVFU0TkRFM05pQk1NVE13TGpRMk9USTNOU3cwT0M0MU5UZzBNVGMySUV3eE16QXVORFk1TWpjMUxEQWdUREV6TUM0ME5qa3lOelVzTUNCYUlpQm1hV3hzUFNJak1EQXdNREF3SWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFNU15NHlNRGsyTnl3d0lFd3lNRGt1TkRRME5UY3hMREFnVERJd09TNDBORFExTnpFc016SXVOVEEzTnpnd01pQk1Nak15TGpJMk9EWTFPU3d6TWk0MU1EYzNPREF5SUV3eU16SXVNalk0TmpVNUxEUTRMalUxT0RReE56WWdUREU1TXk0eU1EazJOeXcwT0M0MU5UZzBNVGMySUV3eE9UTXVNakE1Tmpjc01DQk1NVGt6TGpJd09UWTNMREFnV2lJZ1ptbHNiRDBpSXpBd01EQXdNQ0krUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB4TWpjdU9EZzVOVGd5TERJeU1DNDFOekk0TXpVZ1RERTJOeTR5TVRZMU1qY3NNakl3TGpVM01qZ3pOU0JNTVRZekxqVXdPVFExTVN3eU5qRXVPVGt5TnpreElFd3hNamN1T0RnNU5UZ3lMREkzTVM0Mk1EWTROVGNnVERFeU55NDRPRGsxT0RJc016QTBMamd6TXpRd055Qk1NVGt6TGpNMk1qSTROaXd5T0RZdU5qZzNOalE0SUV3eE9UTXVPRFF5TmpNM0xESTRNUzR5T1RFNU5UWWdUREl3TVM0ek5EYzFNVFlzTVRrM0xqSXhNakV6TWlCTU1qQXlMakV5TmpjMk9Td3hPRGd1TmpNMk1UTXlJRXd4TWpjdU9EZzVOVGd5TERFNE9DNDJNell4TXpJZ1RERXlOeTQ0T0RrMU9ESXNNakl3TGpVM01qZ3pOU0JNTVRJM0xqZzRPVFU0TWl3eU1qQXVOVGN5T0RNMUlGb2lJR1pwYkd3OUlpTkdSa1pHUmtZaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1USTNMamc0T1RVNE1pd3hOVFV1T0RVME1EWTJJRXd4TWpjdU9EZzVOVGd5TERFMU5TNDVNekl4TXpJZ1RESXdOUzR3TXpJM09URXNNVFUxTGprek1qRXpNaUJNTWpBMUxqWTNNelE1TlN3eE5EZ3VOelV6TlRneUlFd3lNRGN1TVRJNE5qRTFMREV6TWk0MU5qSTVPRGtnVERJd055NDRPVEl6T1RZc01USXpMams1TkRjeU5TQk1NVEkzTGpnNE9UVTRNaXd4TWpNdU9UazBOekkxSUV3eE1qY3VPRGc1TlRneUxERTFOUzQ0TlRRd05qWWdUREV5Tnk0NE9EazFPRElzTVRVMUxqZzFOREEyTmlCYUlpQm1hV3hzUFNJalJrWkdSa1pHSWo0OEwzQmhkR2crQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZ289XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2ltYWdlcy9icmFuZGluZy9odG1sLTUuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSXlOVFp3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBeU5UWWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThaejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTUN3d0lFd3lOVFlzTUNCTU1qVTJMREkxTmlCTU1Dd3lOVFlnVERBc01DQmFJaUJtYVd4c1BTSWpSamRFUmpGRklqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUWTNMak14TVRjME5pd3lNVE11T1RNeU1qa3lJRXc0Tmk0NU1ESTJOVFFzTWpBeUxqQTNOakkwTVNCRE9UQXVOamd5TVRBM09Td3lNRGd1TnpjM016UTJJRGswTGpFeU1ESXlPRFlzTWpFMExqUTBOekV6TnlBeE1ESXVNelkzTURnMkxESXhOQzQwTkRjeE16Y2dRekV4TUM0eU56SXlNRE1zTWpFMExqUTBOekV6TnlBeE1UVXVNalUyTURjMkxESXhNUzR6TlRRNE1Ua2dNVEUxTGpJMU5qQTNOaXd4T1RrdU16STJPRGd6SUV3eE1UVXVNalUyTURjMkxERXhOeTQxTWpnM09EY2dUREV6T1M0ek1UTTFOelVzTVRFM0xqVXlPRGM0TnlCTU1UTTVMak14TXpVM05Td3hPVGt1TmpZMk9UazNJRU14TXprdU16RXpOVGMxTERJeU5DNDFPRFF6TXlBeE1qUXVOekEzTnpVNUxESXpOUzQ1TWpVNU5ETWdNVEF6TGpNNU9EUXNNak0xTGpreU5UazBNeUJET0RRdU1UVXpNamsxTWl3eU16VXVPVEkxT1RReklEY3lMams0TVRrME1qa3NNakkxTGprMU9EWXdNeUEyTnk0ek1URXpNemszTERJeE15NDVNekF5TmlJZ1ptbHNiRDBpSXpBd01EQXdNQ0krUEM5d1lYUm9QZ29nSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB4TlRJdU16Z3dPVFV5TERJeE1TNHpOVFEwTVRNZ1RERTNNUzQ1TmprME1qSXNNakF3TGpBeE1qZ2dRekUzTnk0eE1qVTVPVFFzTWpBNExqUXpNems0TVNBeE9ETXVPREkzT1RFeExESXhOQzQyTVRrNE16VWdNVGsxTGpZNE5ETTJPQ3d5TVRRdU5qRTVPRE0xSUVNeU1EVXVOalV5TlRJeExESXhOQzQyTVRrNE16VWdNakV5TGpBd09UQTBNU3d5TURrdU5qTTFPVFl5SURJeE1pNHdNRGt3TkRFc01qQXlMamMyTWpFMU9TQkRNakV5TGpBd09UQTBNU3d4T1RRdU5URXpOamMySURJd05TNDBOemswTVRZc01Ua3hMalU1TWpBeU5TQXhPVFF1TkRneE1UWTRMREU0Tmk0M09ESXdOeUJNTVRnNExqUTJPRFF4T1N3eE9EUXVNakF5TlRZMUlFTXhOekV1TVRFeE1qRXpMREUzTmk0NE1UUTNNeUF4TlRrdU5UazNNekE0TERFMk55NDFNelV6TkNBeE5Ua3VOVGszTXpBNExERTBOeTQ1TkRRNE16Z2dRekUxT1M0MU9UY3pNRGdzTVRJNUxqa3dNVE13T0NBeE56TXVNelEwTlRBNExERXhOaTR4TlRNeU9UVWdNVGswTGpneU5UYzFNaXd4TVRZdU1UVXpNamsxSUVNeU1UQXVNVEU1T1RJMExERXhOaTR4TlRNeU9UVWdNakl4TGpFeE56YzJOU3d4TWpFdU5EZ3dPVFFnTWpJNUxqQXlNVFkyTXl3eE16VXVOREF3TkRNeUlFd3lNVEF1TWprd05Ua3NNVFEzTGpReU9EYzNOU0JETWpBMkxqRTJOakUwTml3eE5EQXVNRFF3TVRJM0lESXdNUzQyT1RrMU5UWXNNVE0zTGpFeE9USTRPU0F4T1RRdU9ESTJNVFU1TERFek55NHhNVGt5T0RrZ1F6RTROeTQzT0RBME55d3hNemN1TVRFNU1qZzVJREU0TXk0ek1USXlOVFFzTVRReExqVTROekE1T0NBeE9ETXVNekV5TWpVMExERTBOeTQwTWpnM056VWdRekU0TXk0ek1USXlOVFFzTVRVMExqWTBOak0wT1NBeE9EY3VOemd3TkRjc01UVTNMalUyT0RRd05pQXhPVGd1TURnNU9UVTJMREUyTWk0d016WTJNaklnVERJd05DNHhNRE01TWpRc01UWTBMall4TkRBNU5TQkRNakkwTGpVMU16UTBPQ3d4TnpNdU16YzROalF4SURJek5pNHdOamN6TlRJc01UZ3lMak14TXpRME9DQXlNell1TURZM016VXlMREl3TWk0ME1UZ3pPRGNnUXpJek5pNHdOamN6TlRJc01qSTBMakEzTVRreU5DQXlNVGt1TURVMU1UTTNMREl6TlM0NU1qYzVOelVnTVRrMkxqSXdNRFF6TWl3eU16VXVPVEkzT1RjMUlFTXhOek11T0RZd09UYzRMREl6TlM0NU1qYzVOelVnTVRVNUxqUXlOVGd5T1N3eU1qVXVNamMwTXpFeElERTFNaTR6T0RFek5Ua3NNakV4TGpNMU5EUXhNeUlnWm1sc2JEMGlJekF3TURBd01DSStQQzl3WVhSb1Bnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvamF2YXNjcmlwdC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJeU16TndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUF5TXpNaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcGJsbE5hVzRnYldWbGRDSStDaUFnSUNBOFp5QnpkSEp2YTJVOUltNXZibVVpSUhOMGNtOXJaUzEzYVdSMGFEMGlNU0lnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5NQzR6T0RjM09UUXlNRElzTUNCTU1qUXVNVGM1T1RBek5Dd3dJRXd5TkM0eE56azVNRE0wTERFMU55NDRPVE13TmpJZ1RERXhPQzR5TmpZNE5qSXNNVFUzTGpnNU16QTJNaUJNTVRFNExqSTJOamcyTWl3eE56Y3VNelU1TXpJeElFd3dMak00TnpjNU5UTTNOaXd4TnpjdU16VTVNekl4SUV3d0xqTTROemM1TlRNM05pd3pMak16TnpVNU5USTBaUzB4TkNCTU1DNHpPRGMzT1RReU1ESXNNQ0JhSWlCbWFXeHNQU0lqTURBd01EQXdJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEU0TXk0eE5UUTBNak1zTkRZdU5UQXlOelE1T1NCRE1UazVMak0zTmpNeU5pdzBOQzR6TXprNE1qazBJREl4Tmk0Mk56azJOVElzTkRjdU5UZzBNakEzT1NBeU1qa3VOalUzTVRneUxEVTRMak01T0Rnd05EWWdRekkwTXk0M01UWXhNelFzTmpndU1UTXhPVE00TmlBeU5URXVNamcyTXpjMUxEZzFMalF6TlRJNE5qTWdNalV5TGpNMk56Z3pNeXd4TURFdU5qVTNNVGN6SUVNeU5UUXVOVE13TnpRNUxERXlNUzR4TWpNME5ERWdNalV5TGpNMk56Z3pNeXd4TkRBdU5UZzVOekE1SURJME1TNDFOVE15TVRrc01UVTJMamd4TVRZd015QkRNak14TGpneU1EQTVPQ3d4TmprdU56ZzVNVEUySURJeE5pNDJOemsyTlRNc01UYzRMalEwTURjNU55QXhPVGt1TXpjMk16STJMREUzT1M0MU1qSXlOVFVnUXpFNE15NHhOVFEwTWpNc01UZ3hMalk0TlRFM0lERTJOQzQzTmprMk1ETXNNVGM0TGpRME1EYzVOeUF4TlRBdU56RXdOalV4TERFMk55NDJNall5SUVNeE16Y3VOek16TVRJeExERTFOaTQ0TVRFMk1ETWdNVE14TGpJME5ETTNOQ3d4TkRBdU5UZzVOekE1SURFeU9TNHdPREUwTlRnc01USTBMak0yTnpneU15QkRNVEkyTGpreE9EVTBNaXd4TURjdU1EWTBORGNnTVRJNUxqQTRNVFExT0N3NE55NDFPVGd5TURJeElERXpPUzQ0T1RZd016Y3NOekl1TkRVM056Y3pPQ0JETVRRNExqVTBOemN6TlN3MU55NHpNVGN6TkRFNUlERTJOUzQ0TlRFd05qRXNORGN1TlRnME1qQTNPU0F4T0RNdU1UVTBOREl6TERRMkxqVXdNamMwT1RrZ1RERTRNeTR4TlRRME1qTXNORFl1TlRBeU56UTVPU0JhSUUweE9EWXVNems0TnprMkxEWTBMamc0TnpVMk1UUWdRekU1Tnk0eU1UTXpOelVzTmpNdU9EQTJNRGs0T0NBeU1Ea3VNVEE1TkRRNExEWTNMakExTURRM056SWdNakUzTGpjMk1URXhMRGMwTGpZeU1EWTVNRGdnUXpJeU5TNHpNekV6TlN3NE15NHlOekl6TnpFM0lESXlPUzQyTlRjeE9ESXNPVFF1TURnMk9UVTVJREl6TUM0M016ZzJOQ3d4TURRdU9UQXhOVFUySUVNeU16RXVPREl3TURrNExERXhOaTQzT1RjMk1TQXlNekF1TnpNNE5qUXNNVEk1TGpjM05URXlNaUF5TWpVdU16TXhNelVzTVRRd0xqVTRPVGN4SUVNeU1Ua3VPVEkwTURZeExERTFNUzQwTURReU9Ua2dNakV3TGpFNU1Ea3dOQ3d4TlRndU9UYzBOVElnTVRrNExqSTVORGcyT1N3eE5qRXVNVE0zTkRNMklFTXhPRGN1TkRnd01qVTBMREUyTXk0ek1EQXpOVElnTVRjMUxqVTROREl4Tnl3eE5qQXVNRFUxT1RjNElERTJPQzR3TVRNNU56Y3NNVFV6TGpVMk56SXpNU0JETVRVNUxqTTJNak14TXl3eE5EY3VNRGM0TkRZMklERTFNeTQ1TlRVd01qVXNNVE0zTGpNME5UTXpOaUF4TlRFdU56a3lNRGN6TERFeU55NDJNVEl4T1RnZ1F6RTBPUzQyTWpreE5UY3NNVEV6TGpVMU16SXlOeUF4TlRBdU56RXdOalV4TERrNUxqUTVOREkxTnprZ01UVTJMakV4TnprMExEZzJMalV4TmpjME5UUWdRekUyTVM0MU1qVXlNamtzTnpRdU5qSXdOamt3T0NBeE56TXVOREl4TXpBeExEWTFMamsyT1RBeE9UTWdNVGcyTGpNNU9EYzVOU3cyTkM0NE9EYzFOakUwSUV3eE9EWXVNems0TnprMkxEWTBMamc0TnpVMk1UUWdXaUlnWm1sc2JEMGlJekF3TURBd01DSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHdMak00TnpjNU5ESXdNaXd5TURVdU5EYzNNamdnVERJMU5TNDJNVEl5TURjc01qQTFMalEzTnpJNElFd3lOVFV1TmpFeU1qQTNMREl6TWk0MU1UTTNOakVnVERBdU16ZzNOemswTWpBeUxESXpNaTQxTVRNM05qRWdUREF1TXpnM056azBNakF5TERJd05TNDBOemN5T0NCTU1DNHpPRGMzT1RReU1ESXNNakExTGpRM056STRJRm9pSUdacGJHdzlJaU16TkRreVJrWWlQand2Y0dGMGFENEtJQ0FnSUR3dlp6NEtQQzl6ZG1jK0NnPT1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL2xvZGFzaC5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM0pVc3VrbS5zdmdcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL21vY2hhLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklpQS9QZ284YzNabklIZHBaSFJvUFNJeU5UWndlQ0lnYUdWcFoyaDBQU0kzTUhCNElpQjJhV1YzUW05NFBTSXdJREFnTWpVMklEY3dJaUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhCeVpYTmxjblpsUVhOd1pXTjBVbUYwYVc4OUluaE5hVzVaVFdsdUlHMWxaWFFpUGdvZ0lDQWdQR2MrQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFeU9TNHlPRFkyTnpRc01DNHhPREU1T0RRME9EWWdRekV5T1M0eE1EazVNRFVzTUM0eE9EUXhORE13TURJZ01USTRMamt6TVRFd05pd3dMakl5TmpNek16TTFOaUF4TWpndU56Y3pNelE1TERBdU16RTRPRFk0T1RNNElFTXhNamd1TkRVNE16WTFMREF1TlRBek56azNOak01SURFeU9DNHlOakF3TVRrc01DNDRORE0wTWpJNE5qY2dNVEk0TGpJMk1EQXhPU3d4TGpJd09EWXpOVEUwSUV3eE1qZ3VNall3TURFNUxESTNMak00T0RJeE5DQkRNVEk0TGpJMk1EQXhPU3d5Tnk0Mk5EVTBORGcySURFeU9DNHhOREF5TXprc01qY3VPRGMxTXpBNUlERXlOeTQ1TVRjNE1EUXNNamd1TURBME16RTBPU0JETVRJM0xqWTVORGd3Tnl3eU9DNHhNek0yTkRRMUlERXlOeTQwTWpJMk9EZ3NNamd1TVRNek5qUTBOU0F4TWpjdU1UazVNVFEzTERJNExqQXdORE14TkRrZ1RERXlNaTQ1TWpFME16RXNNalV1TlRRd016UTNNeUJETVRJeUxqSTROREE0Tml3eU5TNHhOekk0TXpRZ01USXhMalV3TlRZeE1pd3lOUzR4TnpNd05UUXlJREV5TUM0NE5qZ3hNalVzTWpVdU5UUXdNelEzTXlCTU1UQXpMamM1TVRRM09Td3pOUzR6T1RZeU1Ea3hJRU14TURNdU1UVXpNRE0zTERNMUxqYzJORFE1TURnZ01UQXlMamMyTkRneU5Dd3pOaTQwTnpNd01UVWdNVEF5TGpjMk5EZ3lOQ3d6Tnk0eU1EazVNRFkxSUV3eE1ESXVOelkwT0RJMExEVTJMamt5TVRZek1ESWdRekV3TWk0M05qUTRNalFzTlRjdU5qVTNPVFk1TVNBeE1ETXVNVFV6TlRnMUxEVTRMak16TWpJeU1EUWdNVEF6TGpjNU1UUTNPU3cxT0M0M01ERXhOVGd6SUV3eE1qQXVPRFk0TVRJMUxEWTRMalUxTnpBeU1ESWdRekV5TVM0MU1EWTFOallzTmpndU9USTFOREE1T0NBeE1qSXVNamd5T1RnNUxEWTRMamt5TlRRd09UZ2dNVEl5TGpreU1UUXpNU3cyT0M0MU5UY3dNakF5SUV3eE16a3VPVGs0TURjM0xEVTRMamN3TVRFMU9ETWdRekUwTUM0Mk16VTVOeXcxT0M0ek16SXlNakEwSURFME1TNHdNalEzTXpJc05UY3VOalUzT1RZNU1TQXhOREV1TURJME56TXlMRFUyTGpreU1UWXpNRElnVERFME1TNHdNalEzTXpJc055NDNOemt5TURrM01TQkRNVFF4TGpBeU5EY3pNaXczTGpBek1UWTJNemd4SURFME1DNDJNVFk0TURjc05pNHpNekF4TWpRMU1pQXhNemt1T1RZek9EVTJMRFV1T1RZMU5EVTJNVGtnVERFeU9TNDNPVGs1T1Rrc01DNHlPRFEyTkRjNE1qVWdRekV5T1M0Mk5EQXpPU3d3TGpFNU5UWXhOelkzTXlBeE1qa3VORFl6TkRRMExEQXVNVGd3TURZM056SXpJREV5T1M0eU9EWTJOelFzTUM0eE9ESXdOREEyTURjZ1RERXlPUzR5T0RZMk56UXNNQzR4T0RFNU9EUTBPRFlnV2lCTk1Ua3VORE0wT0RnNU55d3lOQzQzT0Rjek5qRTVJRU14T1M0eE1Ea3lNemczTERJMExqZ3dNRFE0TlRjZ01UZ3VPREF6TWprd055d3lOQzQ0TlRjME5EUTJJREU0TGpVeE1Ea3dNalFzTWpVdU1ESTJPVFkxT0NCTU1TNDBNelF5TlRFNE55d3pOQzQ0T0RJNE1qYzNJRU13TGpjNU56azBOekkxTVN3ek5TNHlOVEEyTmprZ01DNDBNRGMyTURFeU1UUXNNelV1T1RJd05qVXdPQ0F3TGpRd056WXdNVEl4TkN3ek5pNDJOakl6TmpBeElFd3dMalEwTVRjME9Ea3pPQ3cyTXk0eE1UVTNNRGM0SUVNd0xqUTBNVGMwT0Rrek9DdzJNeTQwT0RNMk5qRTBJREF1TmpNeE5UY3pNVFV6TERZekxqZ3lOVE15T0RZZ01DNDVOVFV3TnpnMU9ETXNOalF1TURBMU5UZ3hPU0JETVM0eU56SXhOakF5Tnl3Mk5DNHhPVFV6TmpNZ01TNDJOalUzTVRneE9DdzJOQzR4T1RVek5qTWdNUzQ1T0RFM01qa3lOQ3cyTkM0d01EVTFPREU1SUV3eE1pNHhNVEV6TmpRekxEVTRMakU0TnpjM05qa2dRekV5TGpjMU16QXlOalFzTlRjdU9EQTJOVGMwTXlBeE15NHhOekl5TXpZeExEVTNMakUwTXpRNU5UUWdNVE11TVRjeU1qTTJNU3cxTmk0ME1EZ3lORGc0SUV3eE15NHhOekl5TXpZeExEUTBMakExTkRJMU5ETWdRekV6TGpFM01qSXpOakVzTkRNdU16RTNNell5T0NBeE15NDFOVGs0TnprM0xEUXlMalkwTVRBek5TQXhOQzR4T1RnNE9URXhMRFF5TGpJM05EY3lNVGtnVERFNExqVXhNRGd5T1N3ek9TNDNOelkxT1RNMklFTXhPQzQ0TXpJMk5UVXhMRE01TGpVNU1EVXpNemdnTVRrdU1UYzRNVFl3TVN3ek9TNDFNREk0TVRZeElERTVMalV6TnpRM09UY3NNemt1TlRBeU9ERTJNU0JETVRrdU9EZzVOREkxTnl3ek9TNDFNREk0TVRZeElESXdMakkxTVRJeE1ETXNNemt1TlRrd05ESTFPU0F5TUM0MU5qUXhNelEyTERNNUxqYzNOalU1TXpZZ1RESTBMamczTmpBM01qWXNOREl1TWpjME56SXhPU0JETWpVdU5URTFNRFl5TkN3ME1pNDJOREV3TXpVZ01qVXVPVEF5TnpJek1pdzBNeTR6TVRjek5qSTRJREkxTGprd01qY3lNeklzTkRRdU1EVTBNalUwTXlCTU1qVXVPVEF5TnpJek1pdzFOaTQwTURneU5EZzRJRU15TlM0NU1ESTNNak15TERVM0xqRTBNelE1TlRRZ01qWXVNekkyTVRJd05TdzFOeTQ0TVRBNE5EZ3lJREkyTGprMk16VTVPVE1zTlRndU1UZzNOemMyT1NCTU16Y3VNRGt6TWpNME5DdzJOQzR3TURVMU9ERTVJRU16Tnk0ME1URXpOakE0TERZMExqRTVOVE0yTXlBek55NDRNRFF6TmpZeExEWTBMakU1TlRNMk15QXpPQzR4TVRrNE9EVXhMRFkwTGpBd05UVTRNVGtnUXpNNExqUXpORE15TURRc05qTXVPREkxTXpJNE5pQXpPQzQyTXpNeU1UQTBMRFl6TGpRNE16WTJNVFFnTXpndU5qTXpNakV3TkN3Mk15NHhNVFUzTURjNElFd3pPQzQyTmpjek5UZ3hMRE0yTGpZMk1qTTJNREVnUXpNNExqWTJOek0xT0RFc016VXVPVEl3TmpVd09DQXpPQzR5T0RFek16YzNMRE0xTGpJMU1EWTJPU0F6Tnk0Mk5EQTNNRGMxTERNMExqZzRNamd5TnpjZ1RESXdMalUyTkRBNU5UZ3NNalV1TURJMk9UWTFPQ0JETWpBdU1qYzFNalkwT0N3eU5DNDROVGMwTkRRMklERTVMamsyTnprMk1URXNNalF1T0RBd056RTRPQ0F4T1M0Mk5EQXhNRGcxTERJMExqYzROek0yTVRrZ1RERTVMalF6TkRjM056VXNNalF1TnpnM016WXhPU0JNTVRrdU5ETTBPRGc1Tnl3eU5DNDNPRGN6TmpFNUlGb2dUVEUzTWk0NE9EVXhOekVzTWpVdU1ESTJPVFkxT0NCRE1UY3lMalV5T0RReE1Td3lOUzR3TWpZMU16UXhJREUzTWk0eE56ZzRNekVzTWpVdU1URTJOelkwTkNBeE56RXVPRFU0TlRFMkxESTFMak13TURjek9TQk1NVFUwTGpjNE1UZzNMRE0xTGpFMU5qWXdNRGtnUXpFMU5DNHhORE01TnpZc016VXVOVEkwT1Rrd05TQXhOVE11TnpVMU1qRTVMRE0yTGpFNU9USTBNVGdnTVRVekxqYzFOVEl4T1N3ek5pNDVNell4TXpNeklFd3hOVE11TnpVMU1qRTVMRFUyTGpZME56ZzFNamNnUXpFMU15NDNOVFV5TVRrc05UY3VNemc1TURFek55QXhOVFF1TVRjeU56SXpMRFU0TGpBMk1UQTNOak1nTVRVMExqZ3hOakE1TVN3MU9DNDBNamN6T0RVeElFd3hOekV1TnpVMU9EVXlMRFk0TGpBM056a3hOaUJETVRjeUxqTTRNVFF5TlN3Mk9DNDBNelV4TXpjMElERTNNeTR4TkRVeU5UVXNOamd1TkRZeE9EVTFOU0F4TnpNdU56YzBPVE16TERZNExqRXhNVGcwTnpnZ1RERTROQzR3TkRFME5UWXNOakl1TXprMk56WXlNaUJETVRnMExqTTJOekkwTml3Mk1pNHlNVFl3TmpnMUlERTROQzQxT0RjMk16UXNOakV1T0RjNE5UWXpJREU0TkM0MU9Ea3dNRE1zTmpFdU5UQTJPVGsySUVNeE9EUXVOVGt4TVRZeExEWXhMakV6TlRNeU1URWdNVGcwTGpNNU56TTJNU3cyTUM0NE1ESXhPVE14SURFNE5DNHdOelUyTnpnc05qQXVOakUzTWpJNU9DQk1NVFkyTGpnNU5qTTJOQ3cxTUM0M05qRXpOamdnUXpFMk5pNDFOelEyT0N3MU1DNDFOemM1TkRFMklERTJOaTR6TkRnNE1UY3NOVEF1TWpBMk1qWTJOeUF4TmpZdU16UTRPREUzTERRNUxqZ3pOek15T0RnZ1RERTJOaTR6TkRnNE1UY3NORE11TmpjM05ERTJNeUJETVRZMkxqTTBPRGd4Tnl3ME15NHpNRGt4TXpRMklERTJOaTQxTnpjME1UY3NOREl1T1RjeE5qSTBOeUF4TmpZdU9EazJNelkwTERReUxqYzROemMxT0NCTU1UY3lMakl6TkRrMU55d3pPUzQzTURjMk9UTTRJRU14TnpJdU5UVXlOVE0xTERNNUxqVXlNemt6TlNBeE56SXVPVFF5TmpZeExETTVMalV5TXprek5TQXhOek11TWpZeE5qQTNMRE01TGpjd056WTVNemdnVERFM09DNDJNREF5TERReUxqYzROemMxT0NCRE1UYzRMamt4T1RFME55dzBNaTQ1TnpFMk1qUTNJREUzT1M0eE1UTTFNallzTkRNdU16QTVNVE0wTmlBeE56a3VNVEV6TlRJMkxEUXpMalkzTnpReE5qTWdUREUzT1M0eE1UTTFNallzTkRndU5UTTNNREV5T1NCRE1UYzVMakV4TXpVeU5pdzBPQzQ1TURVNE16ZzFJREUzT1M0ek1EYzVNRFFzTkRrdU1qUXlPREF3TVNBeE56a3VOakkyT0RVeExEUTVMalF5TmpZMk5qZ2dRekUzT1M0NU5EY3hOallzTkRrdU5qRXhNRGd4T0NBeE9EQXVNek0wTlRVNUxEUTVMall4TVRnME5Ua2dNVGd3TGpZMU16VXdOaXcwT1M0ME1qWTJOalk0SUV3eE9UQXVPRGcxT0RBMExEUXpMalEzTWpFNU16SWdRekU1TVM0MU1qQTVOakVzTkRNdU1UQXpNalUxTXlBeE9URXVPVEV5TkRVMUxEUXlMalF5TnpJMU1UTWdNVGt4TGpreE1qUTFOU3cwTVM0Mk9USTJOalV4SUV3eE9URXVPVEV5TkRVMUxETTJMamt6TlRjNE56a2dRekU1TVM0NU1USTBOVFVzTXpZdU1qQXhNRGcxTWlBeE9URXVOVEl5TXpJNUxETTFMalV5TlRFNU16UWdNVGt3TGpnNE5UZ3dOQ3d6TlM0eE5UWXlOVFUxSUV3eE56TXVPVEV4T0RJeExESTFMak13TURNNU16Y2dRekUzTXk0MU9USXhPRFFzTWpVdU1URTFNVEEyTmlBeE56TXVNalF4T1RNc01qVXVNREkzTURZd09DQXhOekl1T0RnMU1UY3hMREkxTGpBeU5qWXlNRFFnVERFM01pNDRPRFV4TnpFc01qVXVNREkyT1RZMU9DQmFJRTB4TWpFdU9ESTJNek16TERNNUxqYzBNak14TmpRZ1F6RXlNUzQ1TVRVek5qUXNNemt1TnpReU16RTJOQ0F4TWpJdU1ESXdNVFkwTERNNUxqYzJOREl3TXpjZ01USXlMakV3TURFd055d3pPUzQ0TVRBeU1UQXpJRXd4TWpjdU9UVXlNREkxTERRekxqRTVPREl4TnpFZ1F6RXlPQzR4TVRBNE1UUXNORE11TWprd01qQTBOQ0F4TWpndU1qSTFOems0TERRekxqUTFPVFl4TnpjZ01USTRMakl5TlRjNU9DdzBNeTQyTkRNd05EUWdUREV5T0M0eU1qVTNPVGdzTlRBdU5ERTRPVFE1TmlCRE1USTRMakl5TlRjNU9DdzFNQzQyTURJNU1qUXlJREV5T0M0eE1URTVNU3cxTUM0M056STBORFUxSURFeU55NDVOVEl3TWpVc05UQXVPRFl6T0RnNE9DQk1NVEl5TGpFd01ERXdOeXcxTkM0eU5URTNPRE16SUVNeE1qRXVPVFF3TnpZNUxEVTBMak0wTWpZM09EUWdNVEl4TGpjME5qRXhPU3cxTkM0ek5ESTJOemcwSURFeU1TNDFPRFkzT0RFc05UUXVNalV4Tnpnek15Qk1NVEUxTGpjek5EZzJNeXcxTUM0NE5qTTRPRGc0SUVNeE1UVXVOVGMxTlRJMkxEVXdMamMzTVRrd01UVWdNVEUxTGpRMk1UQTVMRFV3TGpZd01qa3lORElnTVRFMUxqUTJNVEE1TERVd0xqUXhPRGswT1RZZ1RERXhOUzQwTmpFd09TdzBNeTQyTkRNd05EUWdRekV4TlM0ME5qRXdPU3cwTXk0ME5UazJNVGMzSURFeE5TNDFOell3TnpRc05ETXVNamt3TmpRME55QXhNVFV1TnpNME9EWXpMRFF6TGpFNU9ESXhOekVnVERFeU1TNDFPRFkzT0RFc016a3VPREV3TnpVNE5pQkRNVEl4TGpZMk5qY3lOQ3d6T1M0M05qUTNOalE1SURFeU1TNDNNemN5T1N3ek9TNDNOREk0TmpRMklERXlNUzQ0TWpZek16TXNNemt1TnpReU9EWTBOaUJNTVRJeExqZ3lOak16TXl3ek9TNDNOREl6TVRZMElGb2lJR1pwYkd3OUlpTTBNRFF4TXpjaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1qSTBMakEwTmpZM01Td3lOQzQxTkRjNE5qRTJJRU15TWpNdU5EVTBOakk1TERJMExqVTBOemcyTVRZZ01qSXlMamczT1RBeU55d3lOQzQyTnpBeU9USTJJREl5TWk0ek5qazRNRGNzTWpRdU9UVTROVEl6TmlCTU1qQTJMakkxTVRNMk5Td3pOQzR5TmpZNE16UTNJRU15TURVdU1qQTRNamc0TERNMExqZzJOek00TlRZZ01qQTBMalUzTkRVc016WXVNREF5TlRZeU1pQXlNRFF1TlRjME5Td3pOeTR5TURrNU1EWTFJRXd5TURRdU5UYzBOU3cxTlM0M09USXpOak0zSUVNeU1EUXVOVGMwTlN3MU5pNDVPVGt3TlRFNUlESXdOUzR5TURneU9EZ3NOVGd1TVRNeU9URXhOeUF5TURZdU1qVXhNelkxTERVNExqY3pOVE15TnpZZ1RESXhNQzQwTmpBMk16a3NOakV1TVRZMU1USTFPU0JETWpFeUxqVXdOVGN6TERZeUxqRTNNekEwT1RNZ01qRXpMakkxT1RrNExEWXlMakUxTnpRNU9UUWdNakUwTGpFNU1EZ3hMRFl5TGpFMU56UTVPVFFnUXpJeE55NHlNVGczTlN3Mk1pNHhOVGMwT1RrMElESXhPQzQ1TkRjMk16RXNOakF1TXpJd01qVTJPU0F5TVRndU9UUTNOak14TERVM0xqRXlOamsxTmprZ1RESXhPQzQ1TkRjMk16RXNNemd1TnpnME1UQTNPU0JETWpFNExqazBOell6TVN3ek9DNDFNalEzT0RneElESXhPQzQzTWpNeE16WXNNemd1TXpNNU1UWTROeUF5TVRndU5EWTROVEkyTERNNExqTXpPVEUyT0RjZ1RESXhOaTQwTkRrME5EWXNNemd1TXpNNU1UWTROeUJETWpFMkxqRTVNRGN5Tml3ek9DNHpNemt4TmpnM0lESXhOUzQ1TnpBek16Z3NNemd1TlRJME56ZzRNU0F5TVRVdU9UY3dNek00TERNNExqYzROREV3TnprZ1RESXhOUzQ1TnpBek16Z3NOVGN1TVRJMk9UVTJPU0JETWpFMUxqazNNRE16T0N3MU9DNDFOREl6TmpreUlESXhOQzQwT1RZd05qY3NOVGt1T1RZMU56YzJOeUF5TVRJdU1UQXpNamd6TERVNExqYzJPVFl3TURVZ1RESXdOeTQzTWpJNU1ETXNOVFl1TWpBek1ESTFOeUJETWpBM0xqVTJPREl4T1N3MU5pNHhNVGczTURVMElESXdOeTQwTkRreE1qVXNOVFV1T1RZNU9EZ3dNU0F5TURjdU5EUTVNVEkxTERVMUxqYzVNak0yTXpjZ1RESXdOeTQwTkRreE1qVXNNemN1TWpBNU9UQTJOU0JETWpBM0xqUTBPVEV5TlN3ek55NHdNek0wT0RZM0lESXdOeTQxTmpZNE5URXNNell1T0RVME16STVPQ0F5TURjdU56SXlPVEF6TERNMkxqYzJOVEEzT1RVZ1RESXlNeTQ0TURjeE1Ua3NNamN1TkRrd09UTXpOQ0JETWpJekxqazFOelk1TXl3eU55NDBNRFEwTWpBeElESXlOQzR4TXpjd01UUXNNamN1TkRBME5ESXdNU0F5TWpRdU1qZzJNakkwTERJM0xqUTVNRGt6TXpRZ1RESTBNQzR6TnpBME5Dd3pOaTQzTmpVd056azFJRU15TkRBdU5USXpOelUxTERNMkxqZzFOekEyTmpnZ01qUXdMalkwTkRJeE15d3pOeTR3TWpneE1qQTJJREkwTUM0Mk5EUXlNVE1zTXpjdU1qQTVPVEEyTlNCTU1qUXdMalkwTkRJeE15dzFOUzQzT1RJek5qTTNJRU15TkRBdU5qUTBNakV6TERVMUxqazJPVGc0TURFZ01qUXdMalUxTlRFNE15dzFOaTR4TlRFMk5qWWdNalF3TGpRd05EWTJNU3cxTmk0eU16Y3hPVFVnVERJeU5DNHlPRFl5TWpRc05qVXVOVEV4TXpReE1TQkRNakkwTGpFME56azJOaXcyTlM0MU9UTTBOekkySURJeU15NDVOVGMyT1RNc05qVXVOVGt6TkRjeU5pQXlNak11T0RBM01URTVMRFkxTGpVeE1UTTBNVEVnVERJeE9TNDJOall5T0Rjc05qTXVNRFEzTXpjek5TQkRNakU1TGpVME16QTROeXcyTWk0NU56VXdPVGMzSURJeE9TNHpOelEzTVRrc05qSXVPVGd3TlRjeE55QXlNVGt1TWpVMU5qSTFMRFl6TGpBME56TTNNelVnUXpJeE9DNHhNVEkyTWpJc05qTXVOamsxTXpReU55QXlNVGN1T0RrM056QTNMRFl6TGpjM01EWTRNellnTWpFMkxqZ3lOVGc0TXl3Mk5DNHhOREkwTnpBM0lFTXlNVFl1TlRZeE5qa3pMRFkwTGpJek5EUTFPQ0F5TVRZdU1UWXdOakV4TERZMExqTTNOelU0T1RJZ01qRTJMamsyTWpjM01pdzJOQzQ0TWpZNU1EVTVJRXd5TWpJdU16WTVPREEzTERZNExqQXdPVFEzTXpjZ1F6SXlNaTQ0T0RRMU1ERXNOamd1TXpBM016TTJJREl5TXk0ME5UZ3dOVGNzTmpndU5EVTBNekF3TnlBeU1qUXVNRFEyTmpjeExEWTRMalExTkRNd01EY2dRekl5TkM0Mk5ETTBPVGNzTmpndU5EVTBNekF3TnlBeU1qVXVNakE0T0RReUxEWTRMak13TnpNek5pQXlNalV1TnpJek5UTTJMRFk0TGpBd09UUTNNemNnVERJME1TNDROREU1TnpRc05UZ3VOek0xTXpJM05pQkRNalF5TGpnNE5UQTFOU3cxT0M0eE1qZzJOREl5SURJME15NDFNVGc0TXprc05UWXVPVGs1TURVeE9TQXlORE11TlRFNE9ETTVMRFUxTGpjNU1qTTJNemNnVERJME15NDFNVGc0TXprc016Y3VNakE1T1RBMk5TQkRNalF6TGpVeE9EZ3pPU3d6Tmk0d01ESTFOakl5SURJME1pNDRPRFV3TlRVc016UXVPRFk1T1RBMk9DQXlOREV1T0RReE9UYzBMRE0wTGpJMk5qZ3pORGNnVERJeU5TNDNNak0xTXpZc01qUXVPVFU0TlRJek5pQkRNakkxTGpJeE9EUXlNaXd5TkM0Mk56QXlPVEkySURJeU5DNDJNemczTVRRc01qUXVOVFEzT0RZeE5pQXlNalF1TURRMk5qY3hMREkwTGpVME56ZzJNVFlnVERJeU5DNHdORFkyTnpFc01qUXVOVFEzT0RZeE5pQmFJRTAzTUM0M016TXlOelE1TERJMExqa3lOREkwTmpNZ1F6Y3dMak0zTnpRek5Ea3NNalF1T1RJME1qUTJNeUEzTUM0d01qVXlPVGc1TERJMUxqQXhOREEwTkRrZ05qa3VOekEyTmpJME1pd3lOUzR4T1Rnd01UazJJRXcxTWk0Mk1qazVOemdzTXpVdU1ERTVOekUyTkNCRE5URXVPVGt4TlRNMk5Td3pOUzR6T0RjMk5qVTNJRFV4TGpZd016TXlNeXd6Tmk0d09UY3hOemcxSURVeExqWXdNek15TXl3ek5pNDRNek0wTVRNNElFdzFNUzQyTURNek1qTXNOVFl1TlRRMU1UTXpNaUJETlRFdU5qQXpNekl6TERVM0xqSTRNakkwTkRrZ05URXVPVGt4T1RVd09TdzFOeTQ1TlRVNU5EYzVJRFV5TGpZeU9UazNPQ3cxT0M0ek1qUTJOalUySUV3Mk9TNDNNRFkyTWpReUxEWTRMakU0TURVeU56VWdRemN3TGpNME5UQTJOVGdzTmpndU5UUTVNalExTWlBM01TNHhNakUwT0RnekxEWTRMalUwT1RJME5USWdOekV1TnpVNU9USTVPQ3cyT0M0eE9EQTFNamMxSUV3NE9DNDRNelkxTnpZeExEVTRMak15TkRZMk5UWWdRemc1TGpRM016a3lNVEVzTlRjdU9UVTFPVFEzT1NBNE9TNDROak15TXpFc05UY3VNamd5TWpRME9TQTRPUzQ0TmpNeU16RXNOVFl1TlRRMU1UTXpNaUJNT0RrdU9EWXpNak14TERNMkxqZ3pNelF4TXpnZ1F6ZzVMamcyTXpJek1Td3pOaTR3T1RZd09EWXpJRGc1TGpRM05UQXhOellzTXpVdU16ZzNOalkxTnlBNE9DNDRNelkxTnpZeExETTFMakF4T1RjeE5qUWdURGN4TGpjMU9Ua3lPVGdzTWpVdU1UazRNREU1TmlCRE56RXVORFF4TWpVMU1pd3lOUzR3TVRRd05EUTVJRGN4TGpBNE9URXhORGtzTWpRdU9USTBNalEyTXlBM01DNDNNek15TnpRNUxESTBMamt5TkRJME5qTWdURGN3TGpjek16STNORGtzTWpRdU9USTBNalEyTXlCYUlFMHlORGN1T1RZM05qWTFMREkxTGpBeU56RTROaUJNTWpRM0xqazJOelkyTlN3eU5TNDFNRFl5T1RBeUlFd3lORGt1TXpBeU16RTFMREkxTGpVd05qSTVNRElnVERJME9TNHpNREl6TVRVc01qa3VNRE14TURjek5TQk1NalE1TGpnME9UZzJNU3d5T1M0d016RXdOek0xSUV3eU5Ea3VPRFE1T0RZeExESTFMalV3TmpJNU1ESWdUREkxTVM0eU1UZzNNeklzTWpVdU5UQTJNamt3TWlCTU1qVXhMakl4T0Rjek1pd3lOUzR3TWpjeE9EWWdUREkwTnk0NU5qYzJOalVzTWpVdU1ESTNNVGcySUV3eU5EY3VPVFkzTmpZMUxESTFMakF5TnpFNE5pQmFJRTB5TlRFdU5qazNPRE0yTERJMUxqQXlOekU0TmlCTU1qVXhMalk1Tnpnek5pd3lPUzR3TXpFd056TTFJRXd5TlRJdU1qRXhNVFl4TERJNUxqQXpNVEEzTXpVZ1RESTFNaTR5TVRFeE5qRXNNall1TmpZNU9ESTVOaUJETWpVeUxqSXhNVEUyTVN3eU5pNDFOek0wTmpBMUlESTFNaTR5TVRVMU1qRXNNall1TkRJME5ERTVNeUF5TlRJdU1qRXhNVFl4TERJMkxqSXlOVEF3TWpZZ1F6STFNaTR5TURRMU9Ua3NNall1TURJeE9EWXdOQ0F5TlRJdU1qRXhNVFl4TERJMUxqZzBORGM0TkRRZ01qVXlMakl4TVRFMk1Td3lOUzQzTkRVM09EWXlJRXd5TlRJdU1qRXhNVFl4TERJMUxqWTBNamcxTURrZ1RESTFNeTR6TkRBME56a3NNamt1TURNd056UTFOQ0JNTWpVekxqZzRPREF5Tml3eU9TNHdNekEzTkRVMElFd3lOVFV1TURVeE5UWTFMREkxTGpZME1qZzFNRGtnUXpJMU5TNHdOVEUxTmpVc01qVXVPRFU0TXpZMU55QXlOVFV1TURJeU56Y3hMREkyTGpBMk5qUXpNemNnTWpVMUxqQXhOelF4T0N3eU5pNHlOVGc0TXprMUlFTXlOVFV1TURFMU1qVTVMREkyTGpRME5qQTVPVFFnTWpVMUxqQXhOelF4T0N3eU5pNDFPRFkzTVRNNElESTFOUzR3TVRjME1UZ3NNall1TmpZNU5UQXhOU0JNTWpVMUxqQXhOelF4T0N3eU9TNHdNekEzTkRVMElFd3lOVFV1TlRNd056UXpMREk1TGpBek1EYzBOVFFnVERJMU5TNDFNekEzTkRNc01qVXVNREkyT0RVM09TQk1NalUwTGpjM056ZzJOU3d5TlM0d01qWTROVGM1SUV3eU5UTXVOakUwTXpJMkxESTRMalF4TkRnMk5EWWdUREkxTWk0ME9EVXdNRGdzTWpVdU1ESTJPRFUzT1NCTU1qVXhMalk1Tnprd09Td3lOUzR3TWpZNE5UYzVJRXd5TlRFdU5qazNPRE0yTERJMUxqQXlOekU0TmlCYUlFMHlNamd1TXpVNE5qQTVMRE0zTGpneU5qRXhOVE1nUXpJeU15NDNOamczT0Rnc016Y3VPREkyTVRFMU15QXlNakV1TURNMU1UVTNMRE01TGpjM09UUXpPRFVnTWpJeExqQXpOVEUxTnl3ME15NHdNamM0TVRrMUlFTXlNakV1TURNMU1UVTNMRFEyTGpVMU1UY3pNRGNnTWpJekxqYzBPREkxTnl3ME55NDFNVGs1TURJNUlESXlPQzR4TlRNeU56Z3NORGN1T1RVMU56VXdOQ0JETWpNekxqUXlNelF5T1N3ME9DNDBOekUyTlRNZ01qTXpMamd6TkRBNE55dzBPUzR5TkRVME5EWTFJREl6TXk0NE16UXdPRGNzTlRBdU1qZ3lPREk1TXlCRE1qTXpMamd6TkRBNE55dzFNaTR3T0RJeE9ERXlJREl6TWk0ek9UazFNVEVzTlRJdU9EUTVOREEwTVNBeU1qa3VNREE0T0RJekxEVXlMamcwT1RRd05ERWdRekl5TkM0M05EZzVNREVzTlRJdU9EUTVOREEwTVNBeU1qTXVPREV5TlRrekxEVXhMamM0TlRrMU9UUWdNakl6TGpRNU9URXlNU3cwT1M0Mk5qWTROREEySUVNeU1qTXVORFl5TWpFc05Ea3VORE01TmpBMUlESXlNeTR5T0RZNU5EY3NORGt1TWpVMk1UYzROaUF5TWpNdU1EVTBNalF5TERRNUxqSTFOakUzT0RZZ1RESXlNQzQ1TmpZM01UVXNORGt1TWpVMk1UYzROaUJETWpJd0xqY3dPVE0yT0N3ME9TNHlOVFl4TnpnMklESXlNQzQwT0RjMk1URXNORGt1TkRjM05EazFOaUF5TWpBdU5EZzNOakV4TERRNUxqY3pOVEk0TWpnZ1F6SXlNQzQwT0RjMk1URXNOVEl1TkRRM09ETXpPQ0F5TWpFdU9UWXpNalVzTlRVdU5qVTFOams1TkNBeU1qa3VNREE0T0RJekxEVTFMalkxTlRZNU9UUWdRekl6TkM0eE1Ea3lNek1zTlRVdU5qVTFOams1TkNBeU16Y3VNRFV3T1RNeUxEVXpMalkxTXpZME5UWWdNak0zTGpBMU1Ea3pNaXcxTUM0eE5EVTVORFE0SUVNeU16Y3VNRFV3T1RNeUxEUTJMalkyT0RVM05UVWdNak0wTGpZM05EVTNOQ3cwTlM0M016VXlNalEySURJeU9TNDNNamMwT0N3ME5TNHdPREV4TWpVeElFTXlNalF1TnpJNE16WTFMRFEwTGpReE9UWTROamNnTWpJMExqSTFNakF3TWl3ME5DNHdPVFU1TnpnMElESXlOQzR5TlRJd01ESXNOREl1T1RJMU1qRXlNeUJETWpJMExqSTFNakF3TWl3ME1TNDVOVGczT0RnMUlESXlOQzQyTlRVNE1UZ3NOREF1TmpZMk5EWTNOeUF5TWpndU16VTROakE1TERRd0xqWTJOalEyTnpjZ1F6SXpNUzQyTmpVM09UY3NOREF1TmpZMk5EWTNOeUF5TXpJdU9EZzRNVGs1TERReExqTTNPVGN3TVRrZ01qTXpMak00T1RJd05DdzBNeTQyTURrMk5EYzFJRU15TXpNdU5ETXpNREE1TERRekxqZ3hPVEkwT0NBeU16TXVOakUzT0RBNExEUXpMams0TmpBeU56a2dNak16TGpnek5EQTROeXcwTXk0NU9EWXdNamM1SUV3eU16VXVPVEl4TmpFekxEUXpMams0TmpBeU56a2dRekl6Tmk0d05UQXlPRGNzTkRNdU9UZzJNREkzT1NBeU16WXVNVGMwT0RVMUxEUXpMamt3TnpFNE1UY2dNak0yTGpJMk16Z3pNeXcwTXk0NE1UUTROall5SUVNeU16WXVNelV4TkRNNUxEUXpMamN4TmpNd09EUWdNak0yTGpReE16QXpPU3cwTXk0Mk1EVXlOalUzSURJek5pNDBNREEzTVRnc05ETXVORGN5TnpVNE55QkRNak0yTGpBM056WTJOaXd6T1M0Mk16SXpOalU1SURJek15NDFNVFkxTURrc016Y3VPREkyTVRFMU15QXlNamd1TXpVNE5qQTVMRE0zTGpneU5qRXhOVE1nVERJeU9DNHpOVGcyTURrc016Y3VPREkyTVRFMU15QmFJRTB4TnpJdU9EVXdPVFVzTkRJdU5URTBOVFV3TXlCRE1UY3lMamM0TWpjeU15dzBNaTQxTVRRMU5UQXpJREUzTWk0M01EY3lNVGdzTkRJdU5URTBOVFV3TXlBeE56SXVOalExTmpFNUxEUXlMalUwT0RRNE1qSWdUREUyT1M0ek5qQXpNekVzTkRRdU5EWTBPRGs1SUVNeE5qa3VNak0zTVRNeUxEUTBMalV6TkRrNE5pQXhOamt1TVRVMUxEUTBMalkyTlRRd056a2dNVFk1TGpFMU5TdzBOQzQ0TURjeE1UUTFJRXd4TmprdU1UVTFMRFE0TGpVM01UVXdOaUJETVRZNUxqRTFOU3cwT0M0M01UTXlNVEkxSURFMk9TNHlNemN4TXpJc05EZ3VPRFF6TURrd05TQXhOamt1TXpZd016TXhMRFE0TGpreE16Y3lOVGNnVERFM01pNDJORFUyTVRrc05UQXVOemsxT0RZMU5DQkRNVGN5TGpjMk9EZ3hOQ3cxTUM0NE5qY3dORFEySURFM01pNDVNREF5TWprc05UQXVPRFkzTURRME5pQXhOek11TURJeU1EVTFMRFV3TGpjNU5UZzJOVFFnVERFM05pNHpNRGN6TkRJc05EZ3VPVEV6TnpJMU55QkRNVGMyTGpReU9URTNNeXcwT0M0NE5ETTJNemczSURFM05pNDFNVEkyTnpNc05EZ3VOekV6TWpFeU5TQXhOell1TlRFeU5qY3pMRFE0TGpVM01UVXdOaUJNTVRjMkxqVXhNalkzTXl3ME5DNDRNRGN4TVRRMUlFTXhOell1TlRFeU5qY3pMRFEwTGpZMk5UUXdOemtnTVRjMkxqUXlPVEl6TERRMExqVXpOVFF5TWpFZ01UYzJMak13TnpNME1pdzBOQzQwTmpRNE9Ua2dUREUzTXk0d01qSXdOVFVzTkRJdU5UUTRORGd5TWlCRE1UY3lMamsyTVRFMk9DdzBNaTQxTVRJek5EZzJJREUzTWk0NU1Ua3lNamdzTkRJdU5URTBOVFV3TXlBeE56SXVPRFV3T1RVc05ESXVOVEUwTlRVd015Qk1NVGN5TGpnMU1EazFMRFF5TGpVeE5EVTFNRE1nV2lJZ1ptbHNiRDBpSXpnelEwUXlPU0krUEM5d1lYUm9QZ29nSUNBZ1BDOW5QZ284TDNOMlp6NEtcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL25vZGVqcy5zdmdcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJaUEvUGdvOGMzWm5JSGRwWkhSb1BTSXlOVFp3ZUNJZ2FHVnBaMmgwUFNJeU16QndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUF5TXpBaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcGJsbE5hVzRnYldWbGRDSStDaUFnSUNBOGNHRjBhQ0JrUFNKTk1DNDNOVFF4TWpReE1USXNNVEUwTGpjMU1ETTBNU0JETUM0M05UUXhNalF4TVRJc01UTXpMamsyTkRZNE1pQXhPUzQxTVRZMk1ETXlMREUxTVM0NU1ESXdOU0EwT1M0d09UY3lMREUyTWk0d01USTFNalVnUXpRekxqRTVNREl6TURrc01Ua3hMamMxTURJeklEUTRMakF6T0RVMk56SXNNakUxTGpjeE9EWXhPQ0EyTkM0eU16STFNemsxTERJeU5TNHdOVGd4TURRZ1F6Z3dMamczT0RJMk55d3lNelF1TmpVM01qQTFJREV3TlM0Mk56WXlPVFlzTWpJNExqQXhNall5SURFeU9TNHlNVEk1T1RJc01qQTNMalF6T0RneE5pQkRNVFV5TGpFMU5UZzJOU3d5TWpjdU1UZ3lNRGMwSURFM05TNHpORE0zTWprc01qTTBMamsxTWpBek15QXhPVEV1TlRJeU5qRXlMREl5TlM0MU9EWXdNRFVnUXpJd09DNHhOVEl3TmpNc01qRTFMamsxT1RBek55QXlNVE11TWpFd016Z3pMREU1TUM0ek5qVXdNRE1nTWpBM0xqRTBNREExTWl3eE5Ua3VOams1TURrMElFTXlNemN1T1RRNU9ERXNNVFE1TGpVeE1qWTJOQ0F5TlRVdU1UZ3pPVE0zTERFek5DNHlNVGMyTURRZ01qVTFMakU0TXprek55d3hNVFF1TnpVd016UXhJRU15TlRVdU1UZ3pPVE0zTERrMUxqazRNVFEyTmpVZ01qTTJMak00TmpZME5pdzNPUzQzTkRNNE5qSWdNakEzTGpJd05UQXlOQ3cyT1M0Mk9UYzVPVEl5SUVNeU1UTXVOek01T1Rjc016Y3VOelkwTnpFeE55QXlNRGd1TWpBeU56SXNNVFF1TXpjM09UTTJOQ0F4T1RFdU16TTROREUyTERRdU5qVXlOelUxTURVZ1F6RTNOUzR3TnprME5Ua3NMVFF1TnpJeU9USXhPVGNnTVRVeExqWXlNalF4T1N3ekxqUTBPRGt6TmpReElERXlPQzR6TkRJeE1qWXNNak11TnpBNU1qVTVNU0JETVRBMExqRXlNamt6Tnl3eUxqSXdORFV5TnpZMElEZ3dMamc1TnpNME56UXNMVFF1TXpZeE1UTTJOelVnTmpRdU1EUTVNemt5TERVdU16a3lNemc1TlRRZ1F6UTNMamd3TmpJek56Y3NNVFF1TnprME56TTFPQ0EwTXk0eE56RXhNRGsyTERNNUxqRTVPRFk1TmpJZ05Ea3VNRGszTVRrNU9TdzJPUzQwT0RZNU5EQTFJRU15TUM0MU1UVTBNamsxTERjNUxqUTFNakl3TWpRZ01DNDNOVFF4TWpReE1USXNPVFl1TURVMk5USTFPU0F3TGpjMU5ERXlOREV4TWl3eE1UUXVOelV3TXpReElGb2lJR1pwYkd3OUlpTkdSa1pHUmtZaVBqd3ZjR0YwYUQ0S0lDQWdJRHh3WVhSb0lHUTlJazB5TURFdU1ESTBOVFV6TERjNUxqWTNOREV4TnpnZ1F6RTVPQzQyT0RBMU16UXNOemd1T0RZM016QTFOaUF4T1RZdU1qVXhOalV4TERjNExqRXdNemt6TURnZ01Ua3pMamMxTURjM05DdzNOeTR6T0RFNU9ESTRJRU14T1RRdU1UWXhPREl6TERjMUxqY3dORFF3T0RVZ01UazBMalV6T1RBNE5TdzNOQzR3TkRnMU5UTWdNVGswTGpnM05EVXlMRGN5TGpReU1EZzFNVFVnUXpJd01DNHpPREEyTXpJc05EVXVOamt6TkRnMk1pQXhPVFl1Tnpnd05UUTBMREkwTGpFMk1UY3pORFVnTVRnMExqUTROek14TlN3eE55NHdOekkxTmpVMklFTXhOekl1TmprNU5qVXhMREV3TGpJM05EazVNVFFnTVRVekxqUXlNVGd5Tml3eE55NHpOakkxTlRFMUlERXpNeTQ1TlRJeE5URXNNelF1TXpBMk5ERXpNaUJETVRNeUxqQTNPVGt4TWl3ek5TNDVNelUzTWpNMUlERXpNQzR5TURJME5EUXNNemN1TmpZd056VTNNeUF4TWpndU16STFOemd5TERNNUxqUTJPRFkwTkRFZ1F6RXlOeTR3TnpVek5ETXNNemd1TWpjeU5UQXlOeUF4TWpVdU9ESTJPVEUyTERNM0xqRXhOalU0TVRNZ01USTBMalU0TVRjd055d3pOaTR3TVRBNU16UTRJRU14TURRdU1UYzJPVEU0TERFM0xqZzVNelExTkRnZ09ETXVOekkwTWpZM01Td3hNQzR5TlRnMU1ERXlJRGN4TGpRME16RXdORFVzTVRjdU16WTRNVGd5TXlCRE5Ua3VOalkyTnpBeU1pd3lOQzR4T0RVME5qUXpJRFUyTGpFM09USXpNRElzTkRRdU5ESTNNell5TVNBMk1TNHhNelUxTXpVc05qa3VOelUzTURnME1TQkROakV1TmpFME1UVXlOQ3czTWk0eU1ETTJOak00SURZeUxqRTNNell4TVRrc056UXVOekF5TVRJM015QTJNaTQ0TURZeU56RTRMRGMzTGpJME1qUXhPVFVnUXpVNUxqa3hNVFkwTVRnc056Z3VNRFkwTVRFek1TQTFOeTR4TVRjeE5UazFMRGM0TGprME1ERXdNemNnTlRRdU5EUXpNek0zTERjNUxqZzNNaUJETXpBdU5USXdPVEV4TWl3NE9DNHlNVEkwTVRFMklERTFMakkwTWprMU9Ua3NNVEF4TGpJNE16ZzVOaUF4TlM0eU5ESTVOVGs1TERFeE5DNDROREkwTkRRZ1F6RTFMakkwTWprMU9Ua3NNVEk0TGpnME5UZ3lOaUF6TVM0Mk5ETTROVEl6TERFME1pNDRPVEUwTXpnZ05UWXVOVFl3T1RFM05Td3hOVEV1TkRBNE1ERXlJRU0xT0M0MU1qY3lOekVzTVRVeUxqQTRNREE0T0NBMk1DNDFOamMyTWpreUxERTFNaTQzTVRVMU5qTWdOakl1Tmpjd016STROQ3d4TlRNdU16RTRPRFl5SUVNMk1TNDVPRGMzT1RVNExERTFOaTR3TmpZeU9EZ2dOakV1TXprME1UUTVNeXd4TlRndU56VTROakV4SURZd0xqZzVOVGd5TkN3eE5qRXVNemcwTlRjeUlFTTFOaTR4TmprNU56azJMREU0Tmk0eU56UTJPU0ExT1M0NE5qQTFOakkwTERJd05pNHdNemd6TnpJZ056RXVOakExTlRrek1Td3lNVEl1T0RFeU5qRTVJRU00TXk0M016Y3hNemMxTERJeE9TNDRNRGcwTnpnZ01UQTBMakE1TnpJNE1pd3lNVEl1TmpFM05UVXlJREV5TXk0NU1qSTVNRE1zTVRrMUxqSTROelUzT1NCRE1USTFMalE0T1RnM015d3hPVE11T1RFM05qZzNJREV5Tnk0d05qSTBOek1zTVRreUxqUTJORGswTXlBeE1qZ3VOak0zT0RnNExERTVNQzQ1TkRJeU1UWWdRekV6TUM0Mk56azROVFlzTVRreUxqa3dPRFUyT1NBeE16SXVOekU0TmpBMExERTVOQzQzTmprMU5EWWdNVE0wTGpjME5qUTVOU3d4T1RZdU5URTFNRGt5SUVNeE5UTXVPVFE1T1RFMExESXhNeTR3TkRBeU5qUWdNVGN5TGpreE5qUXpOeXd5TVRrdU56RXpNVFUzSURFNE5DNDJOVEEyTURnc01qRXlMamt5TURBd055QkRNVGsyTGpjM01EQTROaXd5TURVdU9UQTBNRE0zSURJd01DNDNNRGc0TWpjc01UZzBMalkzTXpFek1TQXhPVFV1TlRrMU1qWXhMREUxT0M0NE5ESXlOamtnUXpFNU5TNHlNRFEzTWpVc01UVTJMamcyT1RRNElERTVOQzQzTlRBeU5Dd3hOVFF1T0RVME1EVTRJREU1TkM0eU16azRORGtzTVRVeUxqZ3dNamcwTVNCRE1UazFMalkyT1RZMk9Dd3hOVEl1TXpnd01USTRJREU1Tnk0d056TXpORFVzTVRVeExqazBNemMwTWlBeE9UZ3VORFF5TURNc01UVXhMalE1TURBMk1TQkRNakkwTGpNME5UWTVNU3d4TkRJdU9UQTNOVEkySURJME1TNHhPVGswTlRrc01USTVMakF6TWpnME9DQXlOREV1TVRrNU5EVTVMREV4TkM0NE5ESTBORFFnUXpJME1TNHhPVGswTlRrc01UQXhMakl6TkRneU9DQXlNalV1TkRJNE9ERXpMRGc0TGpBM05USTJNVFlnTWpBeExqQXlORFUxTXl3M09TNDJOelF4TVRjNElFd3lNREV1TURJME5UVXpMRGM1TGpZM05ERXhOemdnVERJd01TNHdNalExTlRNc056a3VOamMwTVRFM09DQmFJaUJtYVd4c1BTSWpOVE5ETVVSRklqNDhMM0JoZEdnK0NpQWdJQ0E4Y0dGMGFDQmtQU0pOTVRrMUxqUXdOakl5T0N3eE5ESXVNekkzTlRVMElFTXhPVFF1TVRjd05qY3hMREUwTWk0M016WTFPU0F4T1RJdU9UQXlPVE00TERFME15NHhNekU1TlRNZ01Ua3hMall4TVRBM015d3hORE11TlRFMU1qUTVJRU14T0RndU56VXhORE0xTERFek5DNDBOakl4TkNBeE9EUXVPRGt4T1RJNExERXlOQzQ0TXpVME9UUWdNVGd3TGpFMk9EZzVPU3d4TVRRdU9EZzVOVEF5SUVNeE9EUXVOamMxT1RRM0xERXdOUzR4T0RBME1EVWdNVGc0TGpNNE5qSXpOeXc1TlM0Mk56WTRNekkzSURFNU1TNHhOalU0TXpnc09EWXVOamd5TkRRME5pQkRNVGt6TGpRM056STNPU3c0Tnk0ek5URXpNREkwSURFNU5TNDNNakEzTkRnc09EZ3VNRFUyTnpZd05TQXhPVGN1T0RneU5UY3hMRGc0TGpnd01USXpNVGdnUXpJeE9DNDNPVEl4TVRrc09UVXVPVGs1TXprMk55QXlNekV1TlRRMk5qY3hMREV3Tmk0Mk5ERTVPVGdnTWpNeExqVTBOalkzTVN3eE1UUXVPRFF5TkRRMElFTXlNekV1TlRRMk5qY3hMREV5TXk0MU56YzBNVFFnTWpFM0xqYzNNakUwTWl3eE16UXVPVEUyTmpJMUlERTVOUzQwTURZeU1qZ3NNVFF5TGpNeU56VTFOQ0JNTVRrMUxqUXdOakl5T0N3eE5ESXVNekkzTlRVMElFd3hPVFV1TkRBMk1qSTRMREUwTWk0ek1qYzFOVFFnV2lCTk1UZzJMakV5TlRnM05pd3hOakF1TnpFMk9USWdRekU0T0M0ek9EY3dOREVzTVRjeUxqRXpPRGs0TlNBeE9EZ3VOekV3TURBM0xERTRNaTQwTmpVNE5pQXhPRGN1TWpFeU1qRTJMREU1TUM0MU16ZzRNRGtnUXpFNE5TNDROalkwTlRjc01UazNMamM1TWpnNElERTRNeTR4TmpBd05UWXNNakF5TGpZeU9UTXlPU0F4TnprdU9ERXpOelUyTERJd05DNDFOall6TWpJZ1F6RTNNaTQyT1RJNE1UTXNNakE0TGpZNE9EQTJNeUF4TlRjdU5EWTBOek0yTERJd015NHpNekF6TmpNZ01UUXhMakEwTVRjeU1pd3hPRGt1TVRrM09EYzJJRU14TXprdU1UVTVNREkyTERFNE55NDFOemM0TVRZZ01UTTNMakkyTWpZMU5Td3hPRFV1T0RRM09UVTJJREV6TlM0ek5qQXlOVEVzTVRnMExqQXhOekUwTXlCRE1UUXhMamN5TnpBM0xERTNOeTR3TlRNNE5qTWdNVFE0TGpBNU1ESTJPU3d4TmpndU9UVTROemswSURFMU5DNHpNREEyTXpJc01UVTVMamsyT0RReU55QkRNVFkxTGpJeU16azJPQ3d4TlRndU9UazVNVEkzSURFM05TNDFORFF3TURjc01UVTNMalF4TkRRMklERTROQzQ1TURJM09EY3NNVFUxTGpJMU1UQXlPU0JETVRnMUxqTTJNemN3T0N3eE5UY3VNVEV3TXprM0lERTROUzQzTnpNeE5EY3NNVFU0TGprek16azNJREU0Tmk0eE1qVTROellzTVRZd0xqY3hOamt5SUV3eE9EWXVNVEkxT0RjMkxERTJNQzQzTVRZNU1pQk1NVGcyTGpFeU5UZzNOaXd4TmpBdU56RTJPVElnV2lCTk9USXVNamMyTmpNM09Td3lNRE11T0RVME1ESTNJRU00TlM0ek1Ua3pPVEEwTERJd05pNHpNVEV3TmpRZ056a3VOemM0TWpnM05Td3lNRFl1TXpneE5EUTVJRGMyTGpReU9EYzJPVGdzTWpBMExqUTFNREE0TmlCRE5qa3VNekF4TXpreUxESXdNQzR6TXpreU1EVWdOall1TXpNNE16ZzRNU3d4T0RRdU5EY3dPREkxSURjd0xqTTRNREE1TVRFc01UWXpMakU0TkRneE55QkROekF1T0RRek1ESXlPQ3d4TmpBdU56UTNNRGcxSURjeExqTTVOREF6TmpJc01UVTRMakkwTWprNU1pQTNNaTR3TWpreE1Ea3lMREUxTlM0Mk9ETXpPVFFnUXpneExqSTROVE15T1RFc01UVTNMamN6TURFNE55QTVNUzQxTWprM05UTXpMREUxT1M0eU1ETXdOREVnTVRBeUxqUTNPVEl6TXl3eE5qQXVNRGt3TmprMklFTXhNRGd1TnpNeE5ESTFMREUyT0M0NE9EZ3dNRGNnTVRFMUxqSTNPRFF5T1N3eE56WXVPVGMwTWpJNElERXlNUzQ0TnpZeE1Td3hPRFF1TURVME5UUTRJRU14TWpBdU5ETTBOakkzTERFNE5TNDBORFl4TlRnZ01URTRMams1T0RjM05Dd3hPRFl1TnpjeE1EQTBJREV4Tnk0MU56QTVOallzTVRnNExqQXhPVFF6TVNCRE1UQTRMamd3TkRJeU15d3hPVFV1TmpneU5UTTVJREV3TUM0d01UZzVOemtzTWpBeExqRXhPVFEzTWlBNU1pNHlOelkyTXpjNUxESXdNeTQ0TlRRd01qY2dURGt5TGpJM05qWXpOemtzTWpBekxqZzFOREF5TnlCTU9USXVNamMyTmpNM09Td3lNRE11T0RVME1ESTNJRm9nVFRVNUxqWTRNamM1TURNc01UUXlMakkzTkRBMk1TQkRORGd1TmpZME9UTTJOQ3d4TXpndU5UQTRNalkzSURNNUxqVTJOVGszTmpVc01UTXpMall4TXprd01TQXpNeTR6TWprd05qZ3pMREV5T0M0eU56TXdPVFFnUXpJM0xqY3lORGd5TURJc01USXpMalEzTXpZME55QXlOQzQ0T1RVek5EWTBMREV4T0M0M01EZzNPRGtnTWpRdU9EazFNelEyTkN3eE1UUXVPRFF5TkRRMElFTXlOQzQ0T1RVek5EWTBMREV3Tmk0Mk1UUTJORGtnTXpjdU1UWXlNREk1T1N3NU5pNHhNakF3TlRZMUlEVTNMall5TURjeE16TXNPRGd1T1RnM01EUTNPU0JETmpBdU1UQXpNRGc0T0N3NE9DNHhNakUxTVRRMUlEWXlMamN3TVRZNU9Ua3NPRGN1TXpBMU9EVXpPU0EyTlM0ek9UZzBORGM0TERnMkxqVXpPVFkyTXpnZ1F6WTRMakl5TlRreE1EUXNPVFV1TnpNM01UWXlOaUEzTVM0NU16UTVPVFExTERFd05TNHpOVE16TlRFZ056WXVOREV4TURjek1Td3hNVFV1TURjM016STVJRU0zTVM0NE56Y3dOemM0TERFeU5DNDVORFUyT1RZZ05qZ3VNVEUxTXpBMU5pd3hNelF1TnpFMU1USTBJRFkxTGpJMk1EQTVNVEVzTVRRMExqQXlNRFF4TVNCRE5qTXVNek0zTlRjM05Dd3hORE11TkRZM056ZzVJRFl4TGpRM05EazVNVFFzTVRReUxqZzROakl3T1NBMU9TNDJPREkzT1RBekxERTBNaTR5TnpRd05qRWdURFU1TGpZNE1qYzVNRE1zTVRReUxqSTNOREEyTVNCTU5Ua3VOamd5Tnprd015d3hOREl1TWpjME1EWXhJRm9nVFRjd0xqWXdPRFUwTURVc05qY3VPVEF6TXpRMk5DQkROall1TXpZeU1URTNPQ3cwTmk0eU1ERTBOalF6SURZNUxqRTRNak0wTVN3eU9TNDRNekF6TXpRM0lEYzJMakkzT1RFMU1UWXNNalV1TnpJeU1qWTROeUJET0RNdU9ETTRORGt4T0N3eU1TNHpORFU1TXpVMklERXdNQzQxTlRRek1EWXNNamN1TlRnMU5qVTVJREV4T0M0eE56SXlOVFVzTkRNdU1qSTVNakE1TnlCRE1URTVMakk1T0RReE15dzBOQzR5TWprd056YzRJREV5TUM0ME1qZzVPVFlzTkRVdU1qYzFOakF3T1NBeE1qRXVOVFl5TnprM0xEUTJMak0xT0RNeU1qRWdRekV4TkM0NU9UYzJPVFFzTlRNdU5EQTNOamN6TWlBeE1EZ3VOVEV3TmpFNExEWXhMalF6TXpFMk1qWWdNVEF5TGpNeE16a3pMRGN3TGpFM09EVTRPVEVnUXpreExqWTROekF4TXpNc056RXVNVFl6TlRjMU9DQTRNUzQxTVRRMU9ESTRMRGN5TGpjME5UZ3lPRGdnTnpJdU1UWXhPRE0xTVN3M05DNDROalEyTVRVNElFTTNNUzQxTnpNNE1Ua3pMRGN5TGpRNU9USTRNRFFnTnpFdU1EVXlPVGN3T1N3M01DNHhOelV6TnpFMklEY3dMall3T0RVME1EVXNOamN1T1RBek16UTJOQ0JNTnpBdU5qQTROVFF3TlN3Mk55NDVNRE16TkRZMElFdzNNQzQyTURnMU5EQTFMRFkzTGprd016TTBOalFnV2lCTk1UWTRMakEzTlRrMk5TdzVNUzQ1TnpBMU5qUWdRekUyTlM0NE5EQXhNemtzT0RndU1UQTROalEwTVNBeE5qTXVOVFEwTnpnMUxEZzBMak16T0RBeU16VWdNVFl4TGpJd05EYzRPU3c0TUM0Mk56QXpOall4SUVNeE5qZ3VOREUwTWpFMkxEZ3hMalU0TVRjMU1ESWdNVGMxTGpNeU1UVTRPU3c0TWk0M09URTFOalkwSURFNE1TNDRNRGd5TmpRc09EUXVNamN5TURZeU9TQkRNVGM1TGpnMk1EZ3hNeXc1TUM0MU1UTXpPVFV4SURFM055NDBNek0xTkN3NU55NHdNemt3T0RJMUlERTNOQzQxTnpZek1UUXNNVEF6TGpjeU9EZzJOeUJETVRjeUxqVXlOamN3Tml3NU9TNDRNemMxT0RZNElERTNNQzR6TlRnNE5TdzVOUzQ1TVRReE16QTBJREUyT0M0d056VTVOalVzT1RFdU9UY3dOVFkwSUV3eE5qZ3VNRGMxT1RZMUxEa3hMamszTURVMk5DQk1NVFk0TGpBM05UazJOU3c1TVM0NU56QTFOalFnV2lCTk1USTRMak15T0RrNU9TdzFNeTR5TlRZNE5EZzBJRU14TXpJdU56Z3hNelE0TERVNExqQTRNRFF5TnpRZ01UTTNMakkwTURFek1pdzJNeTQwTmpVNE56a2dNVFF4TGpZeU5UY3hOaXcyT1M0ek1Ea3dNek0zSUVNeE16Y3VNakEyTXpRM0xEWTVMakV3TURJNU1qSWdNVE15TGpjek1qSTNPU3cyT0M0NU9URTJPVGd6SURFeU9DNHlNakV5TVN3Mk9DNDVPVEUyT1RneklFTXhNak11TnpVeU56Y3pMRFk0TGprNU1UWTVPRE1nTVRFNUxqTXhNVFk0Tml3Mk9TNHdPVGM0TnprZ01URTBMamt4T1RZMk55dzJPUzR6TURNd01EQTNJRU14TVRrdU16QTVOamMxTERZekxqVXhOREUwTWprZ01USXpMamd3TnpBM0xEVTRMakV6TlRrek1EZ2dNVEk0TGpNeU9EazVPU3cxTXk0eU5UWTRORGcwSUV3eE1qZ3VNekk0T1RrNUxEVXpMakkxTmpnME9EUWdUREV5T0M0ek1qZzVPVGtzTlRNdU1qVTJPRFE0TkNCYUlFMDRPQzR6TWpjME5EQTNMRGt5TGpBek56TXlPVEVnUXpnMkxqQTVOREF5Tmpjc09UVXVPVEV3TVRBNE5DQTRNeTQ1TmpZek9URXlMRGs1TGpneE1qSTBPRE1nT0RFdU9UUTRPVFU0TkN3eE1ETXVOekl4TmpJNElFTTNPUzR4TXpjNU9EVTRMRGszTGpBMU5URTNNRFVnTnpZdU56TXpNak0wT1N3NU1DNDBPVGszTWpBeklEYzBMamMyT0RnNU1qUXNPRFF1TVRZNU9UQTBNU0JET0RFdU1qRTFOelE0Tml3NE1pNDNNamN5TVRRMElEZzRMakE1TURVME5USXNPREV1TlRRM05UWXpNeUE1TlM0eU5UUXhNakVzT0RBdU5qVXpORGN6TnlCRE9USXVPRGd4TVRRek9DdzROQzR6TlRRNU1UVTVJRGt3TGpVMk5qZzROellzT0RndU1UVXpNamc0TXlBNE9DNHpNamMwTkRBM0xEa3lMakF6TmpVeU5EY2dURGc0TGpNeU56UTBNRGNzT1RJdU1ETTNNekk1TVNCTU9EZ3VNekkzTkRRd055dzVNaTR3TXpjek1qa3hJRm9nVFRrMUxqUTJNRFEwT1RNc01UUTVMamN4T1RrNE1TQkRPRGd1TURVNU1UY3pOaXd4TkRndU9EazBNalkxSURneExqQTRNVEF4TVRnc01UUTNMamMzTlRNME55QTNOQzQyTXpVM05qUXpMREUwTmk0ek56STBOelFnUXpjMkxqWXpNVFEzT0RRc01UTTVMamt5T1RZMElEYzVMakE0T1RNeE9UY3NNVE16TGpJek5ESXlOU0E0TVM0NU5UazRNVGMzTERFeU5pNDBNalF4T0RJZ1F6Z3pMams0TWpRM09USXNNVE13TGpNek1EYzBOaUE0Tmk0eE1UZzFOakE1TERFek5DNHlNelEwT1RVZ09EZ3VNelkxTmpRNU55d3hNemd1TVRFMU56SXhJRXc0T0M0ek5qWXdOVEU0TERFek9DNHhNVFUzTWpFZ1F6a3dMalkxTkRrMk9UUXNNVFF5TGpBMk9UYzBOQ0E1TXk0d01qWXpNemM0TERFME5TNDVOREk1TWpVZ09UVXVORFl3TkRRNU15d3hORGt1TnpFNU9UZ3hJRXc1TlM0ME5qQTBORGt6TERFME9TNDNNVGs1T0RFZ1REazFMalEyTURRME9UTXNNVFE1TGpjeE9UazRNU0JhSUUweE1qZ3VOVGsyTURZc01UYzNMakV3T0RVMk1pQkRNVEkwTGpBeU1UQTBMREUzTWk0eE56SXpOamNnTVRFNUxqUTFOelk0TkN3eE5qWXVOekV5TVRBM0lERXhOUzR3TURBNU1URXNNVFl3TGpnek9EYzROeUJETVRFNUxqTXlOek0zTVN3eE5qRXVNREE0TlRFMUlERXlNeTQzTXpneU9UTXNNVFl4TGpBNU5UTTVNU0F4TWpndU1qSXhNakVzTVRZeExqQTVOVE01TVNCRE1UTXlMamd5TmpjNU55d3hOakV1TURrMU16a3hJREV6Tnk0ek56azJPVFVzTVRZd0xqazVNVFl5TXlBeE5ERXVPRFl4TURBekxERTJNQzQzT1RJeE16SWdRekV6Tnk0ME5qQTVNemtzTVRZMkxqYzNNVEl6TVNBeE16TXVNREU0TWpRMExERTNNaTR5TXprNU16Y2dNVEk0TGpVNU5qQTJMREUzTnk0eE1EZzFOaklnVERFeU9DNDFPVFl3Tml3eE56Y3VNVEE0TlRZeUlFd3hNamd1TlRrMk1EWXNNVGMzTGpFd09EVTJNaUJhSUUweE56UXVOalk0TkRFNExERXlOaTR3Tnpjd09EUWdRekUzTnk0Mk9EZzFNelFzTVRNeUxqazJNRGN5T1NBeE9EQXVNak0wTkRVM0xERXpPUzQyTWpFeE5UTWdNVGd5TGpJMU5Ua3hNaXd4TkRVdU9UVTBNVGczSUVNeE56VXVOekEwTkRnMExERTBOeTQwTkRnM05pQXhOamd1TmpNeE1EQXhMREUwT0M0Mk5USTFORFFnTVRZeExqRTNPREkwTkN3eE5Ea3VOVFEzTURNMklFTXhOak11TlRJek9EY3lMREUwTlM0NE1qazVNRGNnTVRZMUxqZ3pPVE16TkN3eE5ERXVPVGswTlRNeUlERTJPQzR4TVRRMU56WXNNVE00TGpBME9UTTFOeUJETVRjd0xqUXhOak0yTlN3eE16UXVNRFUzT1RNZ01UY3lMall3TVRreE55d3hNekF1TURZd05EWTVJREUzTkM0Mk5qZzBNVGdzTVRJMkxqQTNOekE0TkNCTU1UYzBMalkyT0RReE9Dd3hNall1TURjM01EZzBJRXd4TnpRdU5qWTROREU0TERFeU5pNHdOemN3T0RRZ1dpQk5NVFU1TGpjMU16STFMREV6TXk0eU1qWTVPRFVnUXpFMU5pNHlNakV4TXpRc01UTTVMak0xTVRJM055QXhOVEl1TlRrME9UQXpMREUwTlM0eE9UYzJORGtnTVRRNExqa3hNelUzTVN3eE5UQXVOekUyTWpNZ1F6RTBNaTR5TURnMU1ESXNNVFV4TGpFNU5UWTFNU0F4TXpVdU1qZ3hORElzTVRVeExqUTBNall3TWlBeE1qZ3VNakl4TWpFc01UVXhMalEwTWpZd01pQkRNVEl4TGpFNE9UVTFOaXd4TlRFdU5EUXlOakF5SURFeE5DNHpORGszTlN3eE5URXVNakkwTWpBM0lERXdOeTQzTmpNek16RXNNVFV3TGpjNU5qWTJPU0JETVRBekxqa3pNelU0Tnl3eE5EVXVNakExTmprMElERXdNQzR5TWpnMU1qVXNNVE01TGpNME1qQXlOeUE1Tmk0M01UZzVNekUzTERFek15NHlOemsyTnpNZ1REazJMamN4T1Rjek5qRXNNVE16TGpJM09UWTNNeUJET1RNdU1qRTVNemt6TlN3eE1qY3VNak16T0RFZ09Ea3VPVGszTnpjMU5Dd3hNakV1TVRNMk9EWTNJRGczTGpBM09EWXhNVElzTVRFMUxqQTNOREV4TWlCRE9Ea3VPVGsyT1Rjd09Td3hNRGd1T1RrM01qYzVJRGt6TGpJeE1ERTBNamtzTVRBeUxqZzVNelE1T1NBNU5pNDJPVEF6TnpVMUxEazJMamcxT0RRNU5Ea2dURGsyTGpZNE9UVTNNVEVzT1RZdU9EVTVOekF4TlNCRE1UQXdMakUzT1RBMU5DdzVNQzQ0TURnMk1EazJJREV3TXk0NE5URTFNemdzT0RRdU9UY3pORGs0T0NBeE1EY3VOalExT0RnNExEYzVMalF4TnpVeE5EVWdRekV4TkM0ek5qVTRNemdzTnpndU9UQTVOVE0yTmlBeE1qRXVNalUyTnpJekxEYzRMalkwTkRRNE56RWdNVEk0TGpJeU1EZ3dPQ3czT0M0Mk5EUTBPRGN4SUV3eE1qZ3VNakl4TWpFc056Z3VOalEwTkRnM01TQkRNVE0xTGpJeE5qWTJOaXczT0M0Mk5EUTBPRGN4SURFME1pNHhNVFl6T1Rrc056Z3VPVEV4TlRRM05TQXhORGd1T0RNME16TTNMRGM1TGpReU16azBPVGdnUXpFMU1pNDFOekEzTnpFc09EUXVPVE01TXpFeE9TQXhOVFl1TWpFNE16RTVMRGt3TGpjMU5UVXhPVElnTVRVNUxqY3lNVFEzTnl3NU5pNDRNRGMwTVRVMklFTXhOak11TWpZME5EVXpMREV3TWk0NU1qY3lPRFFnTVRZMkxqVXhPVEExTVN3eE1EZ3VPVGt3TkRReElERTJPUzQwTmpJek5EY3NNVEUwTGprek5qazJNaUJETVRZMkxqVXlOemtzTVRJd0xqazROVFkwSURFMk15NHlPREExTkRFc01USTNMakV3T1Rrek15QXhOVGt1TnpVek1qVXNNVE16TGpJeU5qazROU0JNTVRVNUxqYzFNekkxTERFek15NHlNalk1T0RVZ1RERTFPUzQzTlRNeU5Td3hNek11TWpJMk9UZzFJRm9nVFRFM09TNDJOalUzTkRjc01qVXVORE0xTURrNE1pQkRNVGczTGpJek1qTXlOeXd5T1M0M09UZzFOakE1SURFNU1DNHhOelE0TVRnc05EY3VNemsyTXprNU1TQXhPRFV1TkRJd09ESXNOekF1TkRjeU5UazNJRU14T0RVdU1URTNOVFl4TERjeExqazBOVEEwT1RVZ01UZzBMamMzTmpBNU5TdzNNeTQwTkRRNE5URTFJREU0TkM0ME1EVXlOallzTnpRdU9UWTBOell6TlNCRE1UYzFMakF6TURjNU9TdzNNaTQ0TURFM016UTFJREUyTkM0NE5URXhNamtzTnpFdU1Ua3lNVE15SURFMU5DNHhPVE15TkRVc056QXVNVGt5TWpZek9TQkRNVFEzTGprNE5EUTVMRFl4TGpNMU1EY3hNVGNnTVRReExqVTFNRFV3TkN3MU15NHpNVEkzTlRReElERXpOUzR3T1RJek9EWXNORFl1TXpVek9EazNPQ0JETVRNMkxqZ3lPRFk0TWl3ME5DNDJPRE0xTmpNeklERXpPQzQxTmpJMU5qUXNORE11TURrd09EVXpNU0F4TkRBdU1qZzVNakEyTERReExqVTROemd6TXpVZ1F6RTFOaTQ1TnpBNE16UXNNamN1TURjd05EUXhOU0F4TnpJdU5UWXlNRGs1TERJeExqTXpPRFk1TmlBeE56a3VOalkxTnpRM0xESTFMalF6TlRBNU9ESWdUREUzT1M0Mk5qVTNORGNzTWpVdU5ETTFNRGs0TWlCTU1UYzVMalkyTlRjME55d3lOUzQwTXpVd09UZ3lJRm9pSUdacGJHdzlJaU5HUmtaR1JrWWlQand2Y0dGMGFENEtJQ0FnSUR4d1lYUm9JR1E5SWsweE1qZ3VNakl4TWpFc09UUXVOalkxTXpBd09DQkRNVE01TGpNMk5EVTFMRGswTGpZMk5UTXdNRGdnTVRRNExqTTVPRE0xTXl3eE1ETXVOams0TnpBeUlERTBPQzR6T1Rnek5UTXNNVEUwTGpnME1qUTBOQ0JETVRRNExqTTVPRE0xTXl3eE1qVXVPVGcxTnpnMElERXpPUzR6TmpRMU5Td3hNelV1TURFNU5UZzVJREV5T0M0eU1qRXlNU3d4TXpVdU1ERTVOVGc1SUVNeE1UY3VNRGMzT0Rjc01UTTFMakF4T1RVNE9TQXhNRGd1TURRME1EWTJMREV5TlM0NU9EVTNPRFFnTVRBNExqQTBOREEyTml3eE1UUXVPRFF5TkRRMElFTXhNRGd1TURRME1EWTJMREV3TXk0Mk9UZzNNRElnTVRFM0xqQTNOemczTERrMExqWTJOVE13TURnZ01USTRMakl5TVRJeExEazBMalkyTlRNd01EZ2lJR1pwYkd3OUlpTTFNME14UkVVaVBqd3ZjR0YwYUQ0S1BDOXpkbWMrQ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9pbWFnZXMvYnJhbmRpbmcvcmVhY3Quc3ZnXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWlBL1BnbzhjM1puSUhkcFpIUm9QU0l5TlRad2VDSWdhR1ZwWjJoMFBTSXlPVFp3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkxTmlBeU9UWWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBibGxOYVc0Z2JXVmxkQ0krQ2lBZ0lDQThaR1ZtY3o0S0lDQWdJQ0FnSUNBOGNtRmthV0ZzUjNKaFpHbGxiblFnWTNnOUlqVXdKU0lnWTNrOUlqVXdKU0lnWm5nOUlqVXdKU0lnWm5rOUlqVXdKU0lnY2owaU5UQWxJaUJwWkQwaWNtRmthV0ZzUjNKaFpHbGxiblF0TVNJK0NpQWdJQ0FnSUNBZ0lDQWdJRHh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU01TTBJMFJUY2lJRzltWm5ObGREMGlNQ1VpUGp3dmMzUnZjRDRLSUNBZ0lDQWdJQ0FnSUNBZ1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUkwSTVSREZHT0NJZ2IyWm1jMlYwUFNJMU9TNHlOek16TlRjNEpTSStQQzl6ZEc5d1Bnb2dJQ0FnSUNBZ0lDQWdJQ0E4YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqT1VOQ05rVXdJaUJ2Wm1aelpYUTlJakV3TUNVaVBqd3ZjM1J2Y0Q0S0lDQWdJQ0FnSUNBOEwzSmhaR2xoYkVkeVlXUnBaVzUwUGdvZ0lDQWdQQzlrWldaelBnb2dJQ0FnUEdjK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXlPQzR3TXpJek5ESXNNQzQwTlRVMU1UWXdNVFFnVERBdU1qazNPVEEzTkRjekxEYzBMakl3TXpFd016SWdUREF1TWprM09UQTNORGN6TERJeU1TNDJPVGd5TnpnZ1RERXlPQzR3TXpJek5ESXNNamsxTGpRME5qTXlJRXd5TlRVdU56WTNNak14TERJeU1TNDJPVGd5TnpnZ1RESTFOUzQzTmpjeU16RXNOelF1TWpBek1UQXpNaUJNTVRJNExqQXpNak0wTWl3d0xqUTFOVFV4TmpBeE5DQmFJaUJtYVd4c1BTSjFjbXdvSTNKaFpHbGhiRWR5WVdScFpXNTBMVEVwSWo0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFeU9DNHdNek0zTURnc056VXVNall5TmpNek5TQk1OalF1Tmprd01UQTJPQ3d4TVRFdU9ETTBNVGt5SUV3Mk5DNDJPVEF4TURZNExERTROQzQ1TnpjM05qVWdUREV5T0M0d016TTNNRGdzTWpJeExqVTBPVGMzT1NCTU1Ua3hMak0zT0RJeU1Td3hPRFF1T1RjM056WTFJRXd4T1RFdU16YzRNakl4TERFeE1TNDRNelF4T1RJZ1RERXlPQzR3TXpNM01EZ3NOelV1TWpZeU5qTXpOU0JhSWlCbWFXeHNQU0lqTmtZNU5VUkNJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdQR2NnWm1sc2JEMGlJMFpHUmtaR1JpSWdabWxzYkMxdmNHRmphWFI1UFNJd0xqRWlQZ29nSUNBZ0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk1USTRMREFnVERBc056UXVNalE1TVRFd015Qk1NVEk0TERFME15NDVORE13TmlCTU1qVTJMRGMwTGpjd05EWXlOak1nVERFeU9Dd3dJRm9pUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0FnSUNBZ1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTUM0d01EQXdNREFzSURFMU15NDFNRGc0T1RjcElpQm1hV3hzUFNJalJrWkdSa1pHSWlCbWFXeHNMVzl3WVdOcGRIazlJakF1TVNJK0NpQWdJQ0FnSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB4TWpnc01DQk1NQ3cyTnk0NE56RTRPRFl4SUV3eE1qZ3NNVFF4TGpZMk5UUTRJRXd5TlRVdU5UUTBORGcwTERZM0xqUXhOak0zTURFZ1RERXlPQ3d3SUZvaVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBOEwyYytDand2YzNablBnbz1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaW1hZ2VzL2JyYW5kaW5nL3dlYnBhY2suc3ZnXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSGVhZGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7IH1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG5cXG5oZWFkZXIgbGkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlOyB9XFxuXFxubGkgYSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzg4ODsgfVxcblxcbmltZyB7XFxuICBtYXJnaW46IDAgMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbi8vIFxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQoKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQoKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL19Gb290ZXIuc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9naGJ0bnMuY29tL2dpdGh1Yi1idG4uaHRtbD91c2VyPWRhcnVsNzUmcmVwbz13ZWItcmVhY3QmdHlwZT1zdGFyJmNvdW50PXRydWUmdj0yJyBmcmFtZUJvcmRlcj0nMCcgc2Nyb2xsaW5nPScwJyB3aWR0aD0nMTcwcHgnIGhlaWdodD0nMjBweCc+PC9pZnJhbWU+XG4gICAgICAgICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vZ2hidG5zLmNvbS9naXRodWItYnRuLmh0bWw/dXNlcj1kYXJ1bDc1JnJlcG89d2ViLXJlYWN0JnR5cGU9Zm9yayZjb3VudD10cnVlJnY9MicgZnJhbWVCb3JkZXI9JzAnIHNjcm9sbGluZz0nMCcgd2lkdGg9JzE3MHB4JyBoZWlnaHQ9JzIwcHgnPjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRm9vdGVyLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdGb290ZXInO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fRm9vdGVyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Gb290ZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fRm9vdGVyLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL19Gb290ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDUwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgI2Y0ZjRmNDsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvX0Zvb3Rlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fQXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHdpZHRoOiA3NTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQ6IDEwMCUgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNhYWE7IH1cXG5cXG5oMSwgaDIsIGgzIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XFxuXFxuZGl2Lm1haW4tY29udGVudCB7XFxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDQwcHg7IH1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6ICM1M0MxREU7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTNDMURFOyB9XFxuXFxuaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHg7XFxuICBwYWRkaW5nOiAwcHggMTBweDsgfVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAzcHg7IH1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiAjNTNDMURFO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzUzQzFERTsgfVxcblxcbmxhYmVsIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9fQXBwLnNhc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9pbmRlbnRlZFN5bnRheCEuL19BcHAuc2Fzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9fQXBwLnNhc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Fzc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImgxIHtcXG4gIGNvbG9yOiAjNWE4ODk0OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlcj9pbmRlbnRlZFN5bnRheCEuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3NcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5pY29cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpbGUtbG9hZGVyP25hbWU9ZmF2aWNvbi5pY28hLi9hcHAvaW1hZ2VzL2Zhdmljb24uaWNvXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbi8vIFRPRE86IGRvIGl0IGluIHN0b3JlIG1heWJlXG5jb25zdCBtZXRhcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jb25maWcuanNvbicpLmhlbG1ldDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DT05UQUNUIFBBR0U8L2gxPlxuICAgICAgICA8SGVsbWV0IHRpdGxlPXttZXRhcy50aXRsZX0gdGl0bGVUZW1wbGF0ZT0nJXMgfCBDb250YWN0IHBhZ2UnIC8+XG4gICAgICAgIDxwPnRlc3QgdGhlIDQwNCBwYWdlIDxhIGhyZWY9Jy9taWRkbGVvZm5vd2hlcmUnPmhlcmU8L2E+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgQXBwU3RvcmVEZXBlbmRpbmcgZnJvbSAnLi4vLi4vc3RvcmVzL0FwcFN0b3JlRGVwZW5kaW5nJztcbmltcG9ydCBIb21lU2VjdGlvbkFjdGlvbnMgZnJvbSAnLi9Ib21lU2VjdGlvbkFjdGlvbnMnO1xuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcblxuLy8gQ09NUE9ORU5UXG5pbXBvcnQgSG9tZVNlY3Rpb25TdWJQYXJ0T25lIGZyb20gJy4vSG9tZVNlY3Rpb25TdWJQYXJ0T25lJztcbmltcG9ydCBIb21lU2VjdGlvblN1YlBhcnRUd28gZnJvbSAnLi9Ib21lU2VjdGlvblN1YlBhcnRUd28nO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL19Ib21lU2VjdGlvbi5zY3NzJyk7XG59XG5cbmxldCBob21lU2VjdGlvbiA9IGNsYXNzIEhvbWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyByZXRyaWV2ZSBkYXRhIGZyb20gc3RvcmVcbiAgICBsZXQgc3RvcmVQcm9wcyA9IEhvbWVTZWN0aW9uLmdldFByb3BzRnJvbVN0b3JlcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5IT01FIFBBR0U8L2gxPlxuICAgICAgICA8SG9tZVNlY3Rpb25BY3Rpb25zIC8+XG4gICAgICAgIDxIb21lU2VjdGlvblN1YlBhcnRPbmUgYXBpRGF0YT17c3RvcmVQcm9wcy5hcGlEYXRhfSAvPlxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGFwaURhdGE9e3N0b3JlUHJvcHMuYXBpRGF0YX0vPlxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGFwaURhdGE9e3N0b3JlUHJvcHMuYXBpRGF0YURlcGVuZGluZ30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTdG9yZXMoKSB7XG4gICAgcmV0dXJuIFtBcHBTdG9yZSwgQXBwU3RvcmVEZXBlbmRpbmddO1xuICB9XG5cbiAgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpRGF0YTogQXBwU3RvcmUuZ2V0U3RhdGUoKS5nZXQoJ2RhdGFCeVJlc3RBcGknKS50b0pTKCksXG4gICAgICBhcGlEYXRhRGVwZW5kaW5nOiBBcHBTdG9yZURlcGVuZGluZy5nZXRTdGF0ZSgpLmdldCgnZGF0YUJ5UmVzdEFwaScpLnRvSlMoKVxuICAgIH07XG4gIH1cbn07XG5cbmhvbWVTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb1N0b3Jlcyhob21lU2VjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzXG4gKiovIiwiLyoqXG4gKiAnSGlnaGVyIE9yZGVyIENvbXBvbmVudCcgdGhhdCBjb250cm9scyB0aGUgcHJvcHMgb2YgYSB3cmFwcGVkXG4gKiBjb21wb25lbnQgdmlhIHN0b3Jlcy5cbiAqXG4gKiBFeHBlY3RzIHRoZSBDb21wb25lbnQgdG8gaGF2ZSB0d28gc3RhdGljIG1ldGhvZHM6XG4gKiAgIC0gZ2V0U3RvcmVzKCk6IFNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2Ygc3RvcmVzLlxuICogICAtIGdldFByb3BzRnJvbVN0b3Jlcyhwcm9wcyk6IFNob3VsZCByZXR1cm4gdGhlIHByb3BzIGZyb20gdGhlIHN0b3Jlcy5cbiAqXG4gKiBFeGFtcGxlIHVzaW5nIG9sZCBSZWFjdC5jcmVhdGVDbGFzcygpIHN0eWxlOlxuICpcbiAqICAgIGNvbnN0IE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgICBzdGF0aWNzOiB7XG4gKiAgICAgICAgZ2V0U3RvcmVzKHByb3BzKSB7XG4gKiAgICAgICAgICByZXR1cm4gW215U3RvcmVdXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBnZXRQcm9wc0Zyb21TdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICAgIHJldHVybiBteVN0b3JlLmdldFN0YXRlKClcbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHJlbmRlcigpIHtcbiAqICAgICAgICAvLyBVc2UgdGhpcy5wcm9wcyBsaWtlIG5vcm1hbCAuLi5cbiAqICAgICAgfVxuICogICAgfSlcbiAqICAgIE15Q29tcG9uZW50ID0gY29ubmVjdFRvU3RvcmVzKE15Q29tcG9uZW50KVxuICpcbiAqXG4gKiBFeGFtcGxlIHVzaW5nIEVTNiBDbGFzczpcbiAqXG4gKiAgICBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gKiAgICAgIHN0YXRpYyBnZXRTdG9yZXMocHJvcHMpIHtcbiAqICAgICAgICByZXR1cm4gW215U3RvcmVdXG4gKiAgICAgIH1cbiAqICAgICAgc3RhdGljIGdldFByb3BzRnJvbVN0b3Jlcyhwcm9wcykge1xuICogICAgICAgIHJldHVybiBteVN0b3JlLmdldFN0YXRlKClcbiAqICAgICAgfVxuICogICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgLy8gVXNlIHRoaXMucHJvcHMgbGlrZSBub3JtYWwgLi4uXG4gKiAgICAgIH1cbiAqICAgIH1cbiAqICAgIE15Q29tcG9uZW50ID0gY29ubmVjdFRvU3RvcmVzKE15Q29tcG9uZW50KVxuICpcbiAqIEEgZ3JlYXQgZXhwbGFuYXRpb24gb2YgdGhlIG1lcml0cyBvZiBoaWdoZXIgb3JkZXIgY29tcG9uZW50cyBjYW4gYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9iaXQubHkvMWFiUGtyUFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Z1bmN0aW9ucyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIGNvbm5lY3RUb1N0b3JlcyhTcGVjKSB7XG4gIHZhciBDb21wb25lbnQgPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFNwZWMgOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIC8vIENoZWNrIGZvciByZXF1aXJlZCBzdGF0aWMgbWV0aG9kcy5cbiAgICBpZiAoISgwLCBfZnVuY3Rpb25zLmlzRnVuY3Rpb24pKFNwZWMuZ2V0U3RvcmVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0VG9TdG9yZXMoKSBleHBlY3RzIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB0byBoYXZlIGEgc3RhdGljIGdldFN0b3JlcygpIG1ldGhvZCcpO1xuICAgIH1cbiAgICBpZiAoISgwLCBfZnVuY3Rpb25zLmlzRnVuY3Rpb24pKFNwZWMuZ2V0UHJvcHNGcm9tU3RvcmVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0VG9TdG9yZXMoKSBleHBlY3RzIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB0byBoYXZlIGEgc3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIG1ldGhvZCcpO1xuICAgIH1cblxuICAgIHZhciBTdG9yZUNvbm5lY3Rpb24gPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICAgICAgZGlzcGxheU5hbWU6ICdTdG9yZUNvbm5lY3Rpb24nLFxuXG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIFNwZWMuZ2V0UHJvcHNGcm9tU3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICB9LFxuXG4gICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFNwZWMuZ2V0UHJvcHNGcm9tU3RvcmVzKG5leHRQcm9wcywgdGhpcy5jb250ZXh0KSk7XG4gICAgICB9LFxuXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHN0b3JlcyA9IFNwZWMuZ2V0U3RvcmVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuc3RvcmVMaXN0ZW5lcnMgPSBzdG9yZXMubWFwKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICAgIHJldHVybiBzdG9yZS5saXN0ZW4oX3RoaXMub25DaGFuZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFNwZWMuY29tcG9uZW50RGlkQ29ubmVjdCkge1xuICAgICAgICAgIFNwZWMuY29tcG9uZW50RGlkQ29ubmVjdCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RvcmVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAodW5saXN0ZW4pIHtcbiAgICAgICAgICByZXR1cm4gdW5saXN0ZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU3BlYy5nZXRQcm9wc0Zyb21TdG9yZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KSk7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9mdW5jdGlvbnMuYXNzaWduKSh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFN0b3JlQ29ubmVjdGlvbjtcbiAgfSkoKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29ubmVjdFRvU3RvcmVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL2Nvbm5lY3RUb1N0b3Jlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG5leHBvcnRzLmVhY2hPYmplY3QgPSBlYWNoT2JqZWN0O1xuZXhwb3J0cy5hc3NpZ24gPSBhc3NpZ247XG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59O1xuXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBlYWNoT2JqZWN0KGYsIG8pIHtcbiAgby5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tKSB7XG4gICAgT2JqZWN0LmtleXMoT2JqZWN0KGZyb20pKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGYoa2V5LCBmcm9tW2tleV0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc291cmNlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHNvdXJjZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBlYWNoT2JqZWN0KGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH0sIHNvdXJjZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYWx0L3V0aWxzL2Z1bmN0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgSW1tdXRhYmxlLCB7TWFwfSBmcm9tICdpbW11dGFibGUnO1xuXG4vLyBGTFVYXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG4vLyBERVBFTkRFTkNZXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgaW1tdXRhYmxlIGZyb20gJ2FsdC91dGlscy9JbW11dGFibGVVdGlsJztcbi8vIHdlYnBhY2sgaG90IHJlbG9hZFxuaW1wb3J0IG1ha2VIb3QgZnJvbSAnYWx0L3V0aWxzL21ha2VIb3QnO1xuXG5sZXQgYXBwU3RvcmUgPSBtYWtlSG90KGFsdCwgaW1tdXRhYmxlKGNsYXNzIEFwcFN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBcHBBY3Rpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gbmV3IE1hcCh7XG4gICAgICBkYXRhQnlSZXN0QXBpOiBuZXcgTWFwKHt9KSxcbiAgICAgIGRhdGE6IG5ldyBNYXAoe30pXG4gICAgfSk7XG4gIH1cblxuICBvbkNyZWF0ZSh0ZXh0KSB7XG4gICAgdGV4dCA9IHRleHQudHJpbSgpO1xuICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBoYW5kIHdhdmluZyBvZiBjb3Vyc2UuXG4gICAgY29uc3QgaWQgPSAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpKS50b1N0cmluZygzNik7XG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuZ2V0KCdkYXRhJykuc2V0KGlkLCBuZXcgTWFwKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgdGV4dDogdGV4dFxuICAgIH0pKTtcblxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGEnLCBuZXdEYXRhKSk7XG4gIH1cblxuICBvblJlbW92ZShpZCkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmdldCgnZGF0YScpLmRlbGV0ZShpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnNldCgnZGF0YScsIG5ld0RhdGEpKTtcbiAgfVxuXG4gIG9uUmVtb3ZlQWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGEnLCBuZXcgTWFwKHt9KSkpO1xuICB9XG5cbiAgb25VcGRhdGVDb21wbGV0ZSh4KSB7XG4gICAgbGV0IHsgaWQsIGNvbXBsZXRlIH0gPSB4O1xuICAgIHRoaXMudXBkYXRlKGlkLCB7IGNvbXBsZXRlIH0pO1xuICB9XG5cbiAgb25VcGRhdGVDb21wbGV0ZUFsbCh4KSB7XG4gICAgbGV0IHsgY29tcGxldGVkIH0gPSB4O1xuICAgIC8vIHVwZGF0ZSBhbGwgbWFwIGl0ZW1zXG4gICAgbGV0IGFsbFRvZG9LZXlzSXQgPSB0aGlzLnN0YXRlLmdldCgnZGF0YScpLmtleXMoKTtcbiAgICBmb3IobGV0IHZhbHVlIG9mIGFsbFRvZG9LZXlzSXQpe1xuICAgICAgdGhpcy51cGRhdGUodmFsdWUsIHtjb21wbGV0ZTogY29tcGxldGVkfSk7XG4gICAgfVxuICB9XG5cbiAgb25VcGRhdGVUZXh0KHgpIHtcbiAgICBsZXQgeyBpZCwgdGV4dCB9ID0geDtcbiAgICB0ZXh0ID0gdGV4dCA/IHRleHQudHJpbSgpIDogJyc7XG4gICAgaWYgKHRleHQgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKGlkLCB7IHRleHQgfSk7XG4gIH1cblxuICB1cGRhdGUoaWQsIHVwZGF0ZXMpIHtcbiAgICAvLyB1cGRhdGUgaXRlbSBieSBpZCBjaGVja1xuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmdldCgnZGF0YScpLnVwZGF0ZShpZCwgKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZUtleXMgPSBPYmplY3Qua2V5cyh1cGRhdGVzKTtcbiAgICAgIHVwZGF0ZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHRvZG8gPSB0b2RvLnNldChrZXksIHVwZGF0ZXNba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0b2RvO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZS5zZXQoJ2RhdGEnLCBuZXdEYXRhKSk7XG4gIH1cblxuICB1cGRhdGVBbGwodXBkYXRlcykge1xuICAgIGZvciAodmFyIGlkIGluIHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy51cGRhdGUoaWQsIHVwZGF0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIG9uRmV0Y2goKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnNldCgnZGF0YUJ5UmVzdEFwaScsIEltbXV0YWJsZS5mcm9tSlMoe2RhdGE6ICdoZWxsbyd9KSkpO1xuICAgIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dpdGh1YicpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnNldCgnZGF0YUJ5UmVzdEFwaScsIEltbXV0YWJsZS5mcm9tSlMoe2RhdGE6IGpzb259KSkpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvbkRlc3Ryb3lDb21wbGV0ZWQoKSB7XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5kYXRhKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW2lkXS5jb21wbGV0ZSkge1xuICAgICAgICB0aGlzLm9uRGVzdHJveShpZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFyZUFsbENvbXBsZXRlKCkge1xuICAgIGxldCB7IGRhdGEgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICBmb3IgKGxldCBpZCBpbiBkYXRhKSB7XG4gICAgICBpZiAoIWRhdGFbaWRdLmNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pLCAnQXBwU3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3N0b3Jlcy9BcHBTdG9yZS5qc1xuICoqLyIsIi8vIERFUEVOREVOQ1lcbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgQXBwQWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2NyZWF0ZScsXG4gICAgICAnZmV0Y2gnLFxuICAgICAgJ3JlbW92ZScsXG4gICAgICAncmVtb3ZlQWxsJyxcbiAgICAgICd1cGRhdGVDb21wbGV0ZScsXG4gICAgICAndXBkYXRlQ29tcGxldGVBbGwnLFxuICAgICAgJ3VwZGF0ZVRleHQnXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFsdC5jcmVhdGVBY3Rpb25zKEFwcEFjdGlvbnMpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzXG4gKiovIiwiLy8gTElCUkFSWVxyXG5pbXBvcnQgQWx0IGZyb20gJ2FsdCc7XHJcblxyXG4vLyBjcmVhdGUgYWx0IGluc3RhbmNlXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBbHQoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvYWx0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbHRcIlxuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImltbXV0YWJsZVwiXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbW11dGFibGUgPSByZXF1aXJlKCdpbW11dGFibGUnKTtcblxudmFyIF9pbW11dGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1tdXRhYmxlKTtcblxuZnVuY3Rpb24gaW1tdXRhYmxlKFN0b3JlTW9kZWwpIHtcbiAgU3RvcmVNb2RlbC5jb25maWcgPSB7XG4gICAgc2V0U3RhdGU6IGZ1bmN0aW9uIHNldFN0YXRlKGN1cnJlbnRTdGF0ZSwgbmV4dFN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfSxcblxuICAgIGdldFN0YXRlOiBmdW5jdGlvbiBnZXRTdGF0ZShjdXJyZW50U3RhdGUpIHtcbiAgICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gICAgfSxcblxuICAgIG9uU2VyaWFsaXplOiBmdW5jdGlvbiBvblNlcmlhbGl6ZShzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnRvSlMoKTtcbiAgICB9LFxuXG4gICAgb25EZXNlcmlhbGl6ZTogZnVuY3Rpb24gb25EZXNlcmlhbGl6ZShkYXRhKSB7XG4gICAgICByZXR1cm4gX2ltbXV0YWJsZTJbJ2RlZmF1bHQnXS5mcm9tSlMoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdG9yZU1vZGVsO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpbW11dGFibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hbHQvdXRpbHMvSW1tdXRhYmxlVXRpbC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIG1ha2VIb3QoYWx0LCBTdG9yZSkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gU3RvcmUuZGlzcGxheU5hbWUgOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgYWx0LnN0b3Jlc1tuYW1lXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhbHQuY3JlYXRlU3RvcmUoU3RvcmUsIG5hbWUpO1xuICB9KSgpO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1ha2VIb3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FsdC91dGlscy9tYWtlSG90LmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBJbW11dGFibGUsIHtNYXB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbi8vIEZMVVhcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XG5cbi8vIERFUEVOREVOQ1lcbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBpbW11dGFibGUgZnJvbSAnYWx0L3V0aWxzL0ltbXV0YWJsZVV0aWwnO1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4vQXBwU3RvcmUnO1xuLy8gd2VicGFjayBob3QgcmVsb2FkXG5pbXBvcnQgbWFrZUhvdCBmcm9tICdhbHQvdXRpbHMvbWFrZUhvdCc7XG5cbmxldCBkZXBlbmRpbmdTdG9yZSA9IG1ha2VIb3QoYWx0LCBpbW11dGFibGUoY2xhc3MgRGVwZW5kaW5nU3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKEFwcEFjdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSBuZXcgTWFwKHtcbiAgICAgIGRhdGFCeVJlc3RBcGk6IG5ldyBNYXAoe30pXG4gICAgfSk7XG4gIH1cblxuICBvbkZldGNoKCkge1xuICAgIHRoaXMud2FpdEZvcihbQXBwU3RvcmUuZGlzcGF0Y2hUb2tlbl0pOyAvLyBldmVudCBoYXMgdG8gYmUgY29uc3VtZWRcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUuc2V0KCdkYXRhQnlSZXN0QXBpJywgSW1tdXRhYmxlLmZyb21KUyh7ZGF0YTogJ2hlcmUgaXMgZGVwZW5kZW5jeSBzdG9yZSd9KSkpO1xuICB9XG59KSwgJ0RlcGVuZGluZ1N0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVwZW5kaW5nU3RvcmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9zdG9yZXMvQXBwU3RvcmVEZXBlbmRpbmcuanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBGTFVYXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvbkFjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1zZWN0aW9uLWFjdGlvbnMnPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzKX0+RkFLRSBBUEkgQ0FMTDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIEFwcEFjdGlvbnMuZmV0Y2goKTtcbiAgfVxufVxuXG5Ib21lU2VjdGlvbkFjdGlvbnMucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uQWN0aW9ucyc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uQWN0aW9ucy5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5cbi8vIEZMVVhcbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XG5cbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVTZWN0aW9uU3ViUGFydE9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xuICAgICAgYXBpRGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgY29udGVudE1hcmt1cCA9ICdkaXNwYXRjaGluZyB6b25lIDEnO1xuICAgIGlmICh0aGlzLnByb3BzLmFwaURhdGEuZGF0YSkge1xuICAgICAgY29udGVudE1hcmt1cCA9IG1hcmtlZCgnYGBganNvblxcbicgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmFwaURhdGEuZGF0YSwgbnVsbCwgMikgKyAnYGBgJywge2JyZWFrczogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LW9uZScgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnRNYXJrdXB9fT48L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX29uQ2xpY2soKSB7XG4gICAgQXBwQWN0aW9ucy5mZXRjaCgpO1xuICB9XG59XG5cbkhvbWVTZWN0aW9uU3ViUGFydE9uZS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSG9tZVNlY3Rpb25TdWJQYXJ0T25lJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25TdWJQYXJ0T25lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtYXJrZWRcIlxuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuXG4vLyBGTFVYXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvblN1YlBhcnRUd28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIGFwaURhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNvbnRlbnRNYXJrdXAgPSAnZGlzcGF0Y2hpbmcgem9uZSAyJztcbiAgICBpZiAodGhpcy5wcm9wcy5hcGlEYXRhLmRhdGEpIHtcbiAgICAgIGNvbnRlbnRNYXJrdXAgPSBtYXJrZWQoJ2BgYGpzb25cXG4nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5hcGlEYXRhLmRhdGEsIG51bGwsIDIpICsgJ2BgYCcsIHticmVha3M6IHRydWV9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtc2VjdGlvbi1zdWItcGFydC10d28nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50TWFya3VwfX0+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIEFwcEFjdGlvbnMuZmV0Y2goKTtcbiAgfVxufVxuXG5Ib21lU2VjdGlvblN1YlBhcnRUd28ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uU3ViUGFydFR3byc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hvbWVTZWN0aW9uLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhvbWUtc2VjdGlvbi1hY3Rpb25zIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2REY2RkY7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LmhvbWUtc2VjdGlvbi1zdWItcGFydC1vbmUge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cXG5kaXYuaG9tZS1zZWN0aW9uLXN1Yi1wYXJ0LXR3byB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhFRTdGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vX0hvbWVTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlBBR0UgTk9UIEZPVU5EPC9oMT5cbiAgICAgICAgPHA+eWVzIGluZGVlZDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTm90Rm91bmRTZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdOb3RGb3VuZFNlY3Rpb24nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ob3RGb3VuZFNlY3Rpb24vTm90Rm91bmRTZWN0aW9uLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gQ09NUE9ORU5UXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7XG5pbXBvcnQgVG9kb1RleHRJbnB1dCBmcm9tICcuL1RvZG9UZXh0SW5wdXQnO1xuaW1wb3J0IFRvZG9TbmFwc2hvdHMgZnJvbSAnLi9Ub2RvU25hcHNob3RzJztcblxuLy8gRkxVWFxuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xuaW1wb3J0IFNuYXBzaG90U3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL1NuYXBzaG90U3RvcmUnO1xuaW1wb3J0IGNvbm5lY3RUb1N0b3JlcyBmcm9tICdhbHQvdXRpbHMvY29ubmVjdFRvU3RvcmVzJztcblxubGV0IHRvZG9TZWN0aW9uID0gY2xhc3MgVG9kb1NlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyByZXRyaWV2ZSBkYXRhIGZyb20gc3RvcmVcbiAgICBsZXQgc3RvcmVQcm9wcyA9IFRvZG9TZWN0aW9uLmdldFByb3BzRnJvbVN0b3JlcygpO1xuICAgIC8vIGJ1aWxkIHdpdGggY3VycmVudCBkYXRhXG4gICAgbGV0IGFsbFRvZG9zID0gc3RvcmVQcm9wcy5hbGxEYXRhLFxuICAgICAgICB0b2RvcyA9IFtdO1xuICAgIC8vIGdlbmVyYXRlIHRvZG8gaXRlbSBsaXN0XG4gICAgZm9yICh2YXIga2V5IGluIGFsbFRvZG9zKSB7XG4gICAgICB0b2Rvcy5wdXNoKDxUb2RvSXRlbSBrZXk9e2tleX0gdG9kbz17YWxsVG9kb3Nba2V5XX0gLz4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VE9ETyBQQUdFPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8nPlxuICAgICAgICAgIDxwPkZpcnN0IGFkZCBzb21lIHRhc2tzIGJ5IHByZXNzaW5nIGVudGVyIGtleTwvcD5cbiAgICAgICAgICA8VG9kb1RleHRJbnB1dCBjbGFzc05hbWU9J2VkaXQnIGlkPSduZXctdG9kbycgcGxhY2Vob2xkZXI9J1doYXQgbmVlZHMgdG8gYmUgZG9uZSA/JyBvblNhdmU9e3RoaXMuX29uU2F2ZS5iaW5kKHRoaXMpfSB2YWx1ZT0nJyAvPlxuICAgICAgICAgIDx1bCBpZD0ndG9kby1saXN0Jz57dG9kb3N9PC91bD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goeydoaWRkZW4nOiAhdG9kb3MubGVuZ3RofSl9IG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tUb2dnbGVBbGwuYmluZCh0aGlzKX0+VE9HR0xFIEFMTCBTVEFURVM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goeydoaWRkZW4nOiAhdG9kb3MubGVuZ3RofSl9IG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tSZW1vdmVBbGwuYmluZCh0aGlzKX0gPkNMRUFSPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VG9kb1NuYXBzaG90cyBzbmFwc2hvdHM9e3N0b3JlUHJvcHMuc25hcHNob3RzfSB0b2RvTGVuZ3RoPXt0b2Rvcy5sZW5ndGh9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGlja1JlbW92ZUFsbCgpIHtcbiAgICBBcHBBY3Rpb25zLnJlbW92ZUFsbCgpO1xuICB9XG5cbiAgX29uQ2xpY2tUb2dnbGVBbGwoKSB7XG4gICAgY29uc3QgY29tcGxldGVkID0gIXRoaXMuc3RhdGUuY29tcGxldGVkO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWRcbiAgICB9KTtcbiAgICBBcHBBY3Rpb25zLnVwZGF0ZUNvbXBsZXRlQWxsKHtjb21wbGV0ZWQ6IGNvbXBsZXRlZH0pO1xuICB9XG5cbiAgX29uU2F2ZSh0ZXh0KSB7XG4gICAgaWYgKHRleHQudHJpbSgpKXtcbiAgICAgIEFwcEFjdGlvbnMuY3JlYXRlKHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRTdG9yZXMoKSB7XG4gICAgcmV0dXJuIFtBcHBTdG9yZSwgU25hcHNob3RTdG9yZV07XG4gIH1cblxuICBzdGF0aWMgZ2V0UHJvcHNGcm9tU3RvcmVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxEYXRhOiBBcHBTdG9yZS5nZXRTdGF0ZSgpLmdldCgnZGF0YScpLnRvSlMoKSxcbiAgICAgIGFyZUFsbENvbXBsZXRlOiBBcHBTdG9yZS5hcmVBbGxDb21wbGV0ZSgpLFxuICAgICAgc25hcHNob3RzOiBTbmFwc2hvdFN0b3JlLmdldFN0YXRlKCkuZ2V0KCdzbmFwc2hvdHMnKS50b0FycmF5KClcbiAgICB9O1xuICB9XG59O1xuXG50b2RvU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9TdG9yZXModG9kb1NlY3Rpb24pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBGTFVYXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG4vLyBDT01QT05FTlRcbmltcG9ydCBUb2RvVGV4dElucHV0RWRpdCBmcm9tICcuL1RvZG9UZXh0SW5wdXRFZGl0JztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fVG9kb0l0ZW0uc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIHRvZG86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIGVkaXRpbmc6IGZhbHNlLFxuICAgICAgdGV4dDogdGhpcy5wcm9wcy50b2RvLnRleHRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB0b2RvID0gdGhpcy5wcm9wcy50b2RvO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2N4KHtcbiAgICAgICAgICAnY29tcGxldGVkJzogdG9kby5jb21wbGV0ZSxcbiAgICAgICAgICAnZWRpdGluZyc6IHRoaXMuc3RhdGUuZWRpdGluZ1xuICAgICAgICB9KX1cbiAgICAgICAga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHsnaW5saW5lJzogdGhpcy5zdGF0ZS5lZGl0aW5nfSl9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2xhc3NOYW1lPSd0b2dnbGUnIGRpc2FibGVkPXt0aGlzLnN0YXRlLmVkaXRpbmd9IGNoZWNrZWQ9e3RvZG8uY29tcGxldGV9IG9uQ2hhbmdlPXt0aGlzLl9vbkNsaWNrVG9nZ2xlQ29tcGxldGUuYmluZCh0aGlzKX0gdGl0bGU9J3RvZ2dsZSB0YXNrIHN0YXRlIChjb21wbGV0ZWQgPyknLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjeCh7J2hpZGRlbic6IHRoaXMuc3RhdGUuZWRpdGluZ30pfSBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrRWRpdC5iaW5kKHRoaXMpfSB0aXRsZT0nRWRpdCBtZSBieSBhIGNsaWNrJz57dG9kby50ZXh0fTwvbGFiZWw+XG4gICAgICAgICAgPFRvZG9UZXh0SW5wdXRFZGl0IGNsYXNzTmFtZT17Y3goeydoaWRkZW4nOiAhdGhpcy5zdGF0ZS5lZGl0aW5nfSl9IG9uVXBkYXRlPXt0aGlzLl9vblVwZGF0ZS5iaW5kKHRoaXMpfSBvbkNhbmNlbFVwZGF0ZT17dGhpcy5fb25DYW5jZWxVcGRhdGUuYmluZCh0aGlzKX0gdG9kbz17dG9kb30gLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goeydoaWRkZW4nOiB0aGlzLnN0YXRlLmVkaXRpbmcsICdkZXN0cm95JzogdHJ1ZX0pfSBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrUmVtb3ZlLmJpbmQodGhpcyl9IHRpdGxlPSdyZW1vdmUgdGFzayc+JiMxMDAwNjs8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxuICBfb25DbGlja0VkaXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0aW5nOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBfb25DbGlja1JlbW92ZSgpIHtcbiAgICBBcHBBY3Rpb25zLnJlbW92ZSh0aGlzLnByb3BzLnRvZG8uaWQpO1xuICB9XG5cbiAgX29uQ2xpY2tUb2dnbGVDb21wbGV0ZSgpIHtcbiAgICBBcHBBY3Rpb25zLnVwZGF0ZUNvbXBsZXRlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLnRvZG8uaWQsXG4gICAgICBjb21wbGV0ZTogIXRoaXMucHJvcHMudG9kby5jb21wbGV0ZVxuICAgIH0pO1xuICB9XG5cbiAgX29uQ2FuY2VsVXBkYXRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmc6IGZhbHNlfSk7XG4gIH1cblxuICBfb25TYXZlKHRleHQpIHtcbiAgICBpZiAodGV4dC50cmltKCkpe1xuICAgICAgQXBwQWN0aW9ucy5jcmVhdGUodGV4dCk7XG4gICAgfVxuICB9XG5cbiAgX29uVXBkYXRlKHRvZG8pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlZGl0aW5nOiBmYWxzZX0pO1xuICAgIEFwcEFjdGlvbnMudXBkYXRlVGV4dCh7XG4gICAgICBpZDogdG9kby5pZCxcbiAgICAgIHRleHQ6IHRvZG8udGV4dFxuICAgIH0pO1xuICB9XG59XG5cblRvZG9JdGVtLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdUb2RvSXRlbSc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9JdGVtLmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1RleHRJbnB1dEVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBvbkNhbmNlbFVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uVXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdG9kbzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMudG9kby50ZXh0XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2tVcGRhdGUuYmluZCh0aGlzKX0+VVBEQVRFPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fb25DbGlja0NhbmNlbC5iaW5kKHRoaXMpfT5DQU5DRUw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGlja0NhbmNlbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2FuY2VsVXBkYXRlKCk7XG4gIH1cblxuICBfb25DbGlja1VwZGF0ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlKHRoaXMucHJvcHMudG9kbyk7XG4gIH1cblxuICBfb25DaGFuZ2UoLypvYmplY3QqLyBldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMudG9kby50ZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgX29uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUl9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5fb25DbGlja1VwZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5Ub2RvVGV4dElucHV0RWRpdC5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1RleHRJbnB1dEVkaXQnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvVGV4dElucHV0RWRpdC5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX1RvZG9JdGVtLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ub2RvSXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ub2RvSXRlbS5zY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LnRvZG8ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjFGRDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7IH1cXG4gIGRpdi50b2RvIGRpdi5pbmxpbmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcbiAgZGl2LnRvZG8gbGFiZWwge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICBkaXYudG9kbyBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG5kaXYudG9kby1zbmFwc2hvdCB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFGMUZEO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblxcbmJ1dHRvbi5kZXN0cm95IHtcXG4gIHRvcDogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBsaW5lLWhlaWdodDogMTBweDtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5idXR0b24uZGVzdHJveTphY3RpdmUge1xcbiAgdG9wOiAxcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxcblxcbmxpLmNvbXBsZXRlZCBsYWJlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9fVG9kb0l0ZW0uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xuXG5jb25zdCBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xuICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG9uU2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJydcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbktleURvd249e3RoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpfSB0aXRsZT0nYWRkIHRhc2snPkFERDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrU2F2ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgX29uQ2hhbmdlKC8qb2JqZWN0Ki8gZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIF9vbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuX29uQ2xpY2tTYXZlKCk7XG4gICAgfVxuICB9XG59XG5cblRvZG9UZXh0SW5wdXQucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9UZXh0SW5wdXQnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvVGV4dElucHV0LmpzXG4gKiovIiwiLy8gTElCUkFSWVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gRkxVWFxuaW1wb3J0IFNuYXBzaG90QWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucyc7XG5cbi8vIENPTVBPTkVOVFxuaW1wb3J0IFRvZG9TbmFwc2hvdHNJdGVtIGZyb20gJy4vVG9kb1NuYXBzaG90c0l0ZW0nO1xuXG5sZXQgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvU25hcHNob3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wc1R5cGVzID0ge1xuICAgICAgdG9kb0xlbmd0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYWxsU25hcHMgPSB0aGlzLnByb3BzLnNuYXBzaG90cyxcbiAgICAgICAgaGFzVG9kb3MgPSB0aGlzLnByb3BzLnRvZG9MZW5ndGgsXG4gICAgICAgIHNuYXBzaG90cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFNuYXBzKSB7XG4gICAgICBzbmFwc2hvdHMucHVzaCg8VG9kb1NuYXBzaG90c0l0ZW0ga2V5PXtrZXl9IHNuYXBzaG90PXthbGxTbmFwc1trZXldfSAvPik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLXNuYXBzaG90Jz5cbiAgICAgICAgPHA+VGhlbiB0YWtlIGEgc25hcHNob3Qgb3IgbG9hZCBpdDwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2N4KHsnaGlkZGVuJzogIWhhc1RvZG9zfSl9IG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzKX0gPlRBS0UgU05BUFNIT1Q8L2J1dHRvbj5cbiAgICAgICAgPHVsIGlkPSd0b2RvLXNuYXBzaG90LWxpc3QnPntzbmFwc2hvdHN9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBTbmFwc2hvdEFjdGlvbnMudGFrZVNuYXBzaG90KCk7XG4gIH1cbn1cblxuVG9kb1NuYXBzaG90cy5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1NuYXBzaG90cyc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TbmFwc2hvdHMuanNcbiAqKi8iLCIvLyBERVBFTkRFTkNZXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIFNuYXBzaG90QWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ3JlbW92ZVNuYXBzaG90JyxcbiAgICAgICdib290c3RyYXBTbmFwc2hvdCcsXG4gICAgICAndGFrZVNuYXBzaG90J1xuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbHQuY3JlYXRlQWN0aW9ucyhTbmFwc2hvdEFjdGlvbnMpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMuanNcbiAqKi8iLCIvLyBMSUJSQVJZXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBGTFVYXG5pbXBvcnQgU25hcHNob3RBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zJztcblxubGV0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fVG9kb0l0ZW0uc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvU25hcHNob3RzSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJvcHNUeXBlcyA9IHtcbiAgICAgIHNuYXBzaG90OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB0b2RvID0gdGhpcy5wcm9wcy5zbmFwc2hvdDtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lubGluZSc+XG4gICAgICAgICAgPGxhYmVsPjxhIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2Jvb3RzdHJhcFNuYXBzaG90LmJpbmQodGhpcyl9Pnt0b2RvLmlkfTwvYT48L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdkZXN0cm95JyBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrUmVtb3ZlLmJpbmQodGhpcyl9PiYjMTAwMDY7PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG5cbiAgX2Jvb3RzdHJhcFNuYXBzaG90KCkge1xuICAgIFNuYXBzaG90QWN0aW9ucy5ib290c3RyYXBTbmFwc2hvdCh0aGlzLnByb3BzLnNuYXBzaG90LmlkKTtcbiAgfVxuXG4gIF9vbkNsaWNrUmVtb3ZlKCkge1xuICAgIFNuYXBzaG90QWN0aW9ucy5yZW1vdmVTbmFwc2hvdCh0aGlzLnByb3BzLnNuYXBzaG90LmlkKTtcbiAgfVxufVxuXG5Ub2RvU25hcHNob3RzSXRlbS5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1NuYXBzaG90c0l0ZW0nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzSXRlbS5qc1xuICoqLyIsIi8vIExJQlJBUllcbmltcG9ydCBJbW11dGFibGUsIHtNYXAsIExpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbi8vIEZMVVhcbmltcG9ydCBTbmFwc2hvdEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9TbmFwc2hvdEFjdGlvbnMnO1xuXG4vLyBERVBFTkRFTkNZXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgaW1tdXRhYmxlIGZyb20gJ2FsdC91dGlscy9JbW11dGFibGVVdGlsJztcbi8vIHdlYnBhY2sgaG90IHJlbG9hZFxuaW1wb3J0IG1ha2VIb3QgZnJvbSAnYWx0L3V0aWxzL21ha2VIb3QnO1xuXG5sZXQgc25hcHNob3RTdG9yZSA9IG1ha2VIb3QoYWx0LCBpbW11dGFibGUoY2xhc3MgU25hcHNob3RTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoU25hcHNob3RBY3Rpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gbmV3IE1hcCh7XG4gICAgICBzbmFwc2hvdHM6IG5ldyBMaXN0KFtdKVxuICAgIH0pO1xuICB9XG5cbiAgb25Cb290c3RyYXBTbmFwc2hvdChpZCkge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc3RhdGUuZ2V0KCdzbmFwc2hvdHMnKS5maW5kSW5kZXgoKHNuYXBzaG90KSA9PiB7XG4gICAgICByZXR1cm4gc25hcHNob3QuaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAvLyBUT0RPXG4gICAgICAvLyBhbHQucHJlcGFyZShBcHBTdG9yKVxuICAgICAgbGV0IHNuYXBzaG90ID0gdGhpcy5zdGF0ZS5nZXQoJ3NuYXBzaG90cycpLmdldChpZHgpO1xuICAgICAgYWx0LmJvb3RzdHJhcChJbW11dGFibGUuZnJvbUpTKHNuYXBzaG90LmRhdGEpKTtcbiAgICAgIC8vIGFsdC5yb2xsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uVGFrZVNuYXBzaG90KCkge1xuICAgIGNvbnN0IHNuYXBzaG90ID0ge1xuICAgICAgaWQ6ICgrbmV3IERhdGUoKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkpLnRvU3RyaW5nKDM2KSxcbiAgICAgIGRhdGE6IGFsdC50YWtlU25hcHNob3QoJ0FwcFN0b3JlJylcbiAgICB9O1xuICAgIGNvbnN0IG5ld0xpc3QgPSB0aGlzLnN0YXRlLmdldCgnc25hcHNob3RzJykucHVzaChzbmFwc2hvdCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnNldCgnc25hcHNob3RzJywgbmV3TGlzdCkpO1xuICB9XG5cbiAgb25SZW1vdmVTbmFwc2hvdChpZCkge1xuICAgIC8vIGZpbmQgc25hcHNob3QgaW5kZXggaW4gbGlzdFxuICAgIGNvbnN0IGlkeCA9IHRoaXMuc3RhdGUuZ2V0KCdzbmFwc2hvdHMnKS5maW5kSW5kZXgoKHNuYXBzaG90KSA9PiB7XG4gICAgICByZXR1cm4gc25hcHNob3QuaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gdGhpcy5zdGF0ZS5nZXQoJ3NuYXBzaG90cycpLmRlbGV0ZShpZHgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlLnNldCgnc25hcHNob3RzJywgbmV3TGlzdCkpO1xuICAgIH1cbiAgfVxufSksICdTbmFwc2hvdFN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc25hcHNob3RTdG9yZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3N0b3Jlcy9TbmFwc2hvdFN0b3JlLmpzXG4gKiovIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbi8qZXNsaW50LWRpc2FibGUgbmV3LWNhcCovXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbi8qZXNsaW50LWVuYWJsZSBuZXctY2FwKi9cblxubGV0IGFwaSA9IHJlcXVpcmUoJy4uL2FwaS9hcGknKTtcblxucm91dGVyLnVzZSgnL2FwaS8qJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGFwaS50b2RvKHJlcSwgcmVzLCBuZXh0KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cbi8vXG4vLyBjaGVjayBpZiBITVIgaXMgZW5hYmxlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuLi9hcGkvYXBpJ10sICgpID0+IHtcbiAgICBhcGkgPSByZXF1aXJlKCcuLi9hcGkvYXBpJyk7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zZXJ2ZXIvcm91dGVzL2FwaS5qc1xuICoqLyIsImxldCBhcGkgPSB7XG4gIHRvZG86IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAvLyBzaW1wbGUgYXBpIGZldGNoIGV4YW1wbGUsIG5vIG93biBEQiBoZXJlIHNvIGV4dGVybmFsIGNhbGwgaXMgbWFkZS5cblxuICAgICAgLy8gaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWJcbiAgICAgLyogZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSkudGhlbigoanNvbikgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChqc29uKTtcbiAgICAgIH0pO1xuICAgICAgKi9cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHt0ZXN0OiAndGVzdCd9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIG5leHQoZXJyKTtcbiAgICB9XG4gIH0sXG4gIG90aGVydG9kbzogKCkgPT4ge1xuXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL2FwaS9hcGkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9