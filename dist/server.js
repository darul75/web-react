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
	var apiRoutes = __webpack_require__(50);
	
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
	
	var _fs = __webpack_require__(11);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	// EXTERNALS
	
	var _lodash = __webpack_require__(8);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _iso = __webpack_require__(9);
	
	var _iso2 = _interopRequireDefault(_iso);
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(12);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	// CORE
	
	var _appRoutes = __webpack_require__(13);
	
	var _appRoutes2 = _interopRequireDefault(_appRoutes);
	
	var _appAlt = __webpack_require__(31);
	
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
	
	        // rendering back to client
	        markup += iso.render();
	        markup = html.replace('CONTENT', markup);
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

	module.exports = require("lodash");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("iso");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("fs");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react-router");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	/*eslint-disable no-unused-vars*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	/*eslint-enable no-unused-vars*/
	
	var _reactRouter = __webpack_require__(12);
	
	var _componentsAppApp = __webpack_require__(14);
	
	var _componentsAppApp2 = _interopRequireDefault(_componentsAppApp);
	
	var _componentsContactSectionContact = __webpack_require__(26);
	
	var _componentsContactSectionContact2 = _interopRequireDefault(_componentsContactSectionContact);
	
	var _componentsHomeSectionHomeSection = __webpack_require__(27);
	
	var _componentsHomeSectionHomeSection2 = _interopRequireDefault(_componentsHomeSectionHomeSection);
	
	var _componentsNotFoundSectionNotFoundSection = __webpack_require__(39);
	
	var _componentsNotFoundSectionNotFoundSection2 = _interopRequireDefault(_componentsNotFoundSectionNotFoundSection);
	
	var _componentsTodoSectionTodoSection = __webpack_require__(40);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(12);
	
	var _HeaderHeader = __webpack_require__(19);
	
	var _HeaderHeader2 = _interopRequireDefault(_HeaderHeader);
	
	if (process.env.BROWSER) {
	  __webpack_require__(15);
	  __webpack_require__(23);
	  __webpack_require__(25);
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
	        _react2['default'].createElement(_HeaderHeader2['default'], null),
	        _react2['default'].createElement(
	          'div',
	          { className: 'main-content' },
	          _react2['default'].createElement(_reactRouter.RouteHandler, null)
	        )
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "body {\n  width: 750px;\n  margin: auto;\n  font: 100% Helvetica, sans-serif;\n  color: #aaa; }\n\nh1, h2, h3 {\n  margin-top: 24px;\n  margin-bottom: 12px; }\n\ndiv.main-content {\n  -webkit-padding-start: 40px; }\n\n/* http://cssdeck.com/labs/beautiful-flat-buttons */\nbutton {\n  margin-left: 10px;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  background: #3498db;\n  border: 0;\n  border-bottom: 2px solid #BFCAD2;\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 -2px #2a8bcc; }\n", ""]);

/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(12);
	
	var reactLogo = __webpack_require__(20);
	
	if (process.env.BROWSER) {
	  __webpack_require__(21);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "V2d-uc_.png"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "div.header {\n  width: 100%;\n  margin: auto;\n  text-align: center; }\n\nheader {\n  text-align: center;\n  border-bottom: 2px solid #f4f4f4; }\n\nul {\n  list-style-type: none; }\n\nheader li {\n  display: inline;\n  padding: 5px;\n  border-left: 1px solid #eee; }\n\nli a {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #888; }\n", ""]);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "h1 {\n  color: #5a8894; }\n", ""]);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "favicon.ico"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _storesAppStore = __webpack_require__(30);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _HomeSectionActions = __webpack_require__(35);
	
	var _HomeSectionActions2 = _interopRequireDefault(_HomeSectionActions);
	
	var _HomeSectionSubPartOne = __webpack_require__(28);
	
	var _HomeSectionSubPartOne2 = _interopRequireDefault(_HomeSectionSubPartOne);
	
	var _HomeSectionSubPartTwo = __webpack_require__(36);
	
	var _HomeSectionSubPartTwo2 = _interopRequireDefault(_HomeSectionSubPartTwo);
	
	if (process.env.BROWSER) {
	  __webpack_require__(37);
	}
	
	var HomeSection = (function (_React$Component) {
	  function HomeSection() {
	    _classCallCheck(this, HomeSection);
	
	    _get(Object.getPrototypeOf(HomeSection.prototype), 'constructor', this).call(this);
	    this.state = HomeSection.getDataState();
	  }
	
	  _inherits(HomeSection, _React$Component);
	
	  _createClass(HomeSection, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesAppStore2['default'].listen(this.onChange.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesAppStore2['default'].unlisten(this.onChange.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'HOME PAGE'
	        ),
	        _react2['default'].createElement(_HomeSectionActions2['default'], null),
	        _react2['default'].createElement(_HomeSectionSubPartOne2['default'], null),
	        _react2['default'].createElement(_HomeSectionSubPartTwo2['default'], null)
	      );
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      this.setState(HomeSection.getDataState());
	    }
	  }], [{
	    key: 'getDataState',
	
	    // CALL STORE UTILS
	    value: function getDataState() {
	      return {
	        apiData: _storesAppStore2['default'].getState().dataByRestApi
	      };
	    }
	  }]);
	
	  return HomeSection;
	})(_react2['default'].Component);
	
	exports['default'] = HomeSection;
	
	HomeSection.prototype.displayName = 'HomeSection';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(29);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _storesAppStore = __webpack_require__(30);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _actionsAppActions = __webpack_require__(34);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var HomeSectionSubPartOne = (function (_React$Component) {
	  function HomeSectionSubPartOne() {
	    _classCallCheck(this, HomeSectionSubPartOne);
	
	    _get(Object.getPrototypeOf(HomeSectionSubPartOne.prototype), 'constructor', this).call(this);
	    this.state = HomeSectionSubPartOne.getDataState();
	  }
	
	  _inherits(HomeSectionSubPartOne, _React$Component);
	
	  _createClass(HomeSectionSubPartOne, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesAppStore2['default'].listen(this.onChange.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesAppStore2['default'].unlisten(this.onChange.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var contentMarkup = 'dispatching zone 1';
	      if (this.state.apiData.data) {
	        contentMarkup = (0, _marked2['default'])('```json\n' + JSON.stringify(this.state.apiData.data, null, 2) + '```', { breaks: true });
	      }
	
	      return _react2['default'].createElement('div', { className: 'home-section-sub-part-one', dangerouslySetInnerHTML: { __html: contentMarkup } });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      _actionsAppActions2['default'].fetch();
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      this.setState(HomeSectionSubPartOne.getDataState());
	    }
	  }], [{
	    key: 'getDataState',
	
	    // CALL STORE UTILS
	    value: function getDataState() {
	      return {
	        apiData: _storesAppStore2['default'].getState().dataByRestApi
	      };
	    }
	  }]);
	
	  return HomeSectionSubPartOne;
	})(_react2['default'].Component);
	
	exports['default'] = HomeSectionSubPartOne;
	
	HomeSectionSubPartOne.prototype.displayName = 'HomeSectionSubPartOne';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionSubPartOne.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("marked");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(31);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _actionsAppActions = __webpack_require__(34);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var appStore = _alt2['default'].createStore((function () {
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alt = __webpack_require__(32);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "alt.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("alt");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("object-assign");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(31);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var AppActions = function AppActions() {
	  _classCallCheck(this, AppActions);
	
	  this.generateActions('create', 'destroy', 'toggleComplete', 'fetch');
	};
	
	module.exports = _alt2['default'].createActions(AppActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actionsAppActions = __webpack_require__(34);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(29);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _storesAppStore = __webpack_require__(30);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _actionsAppActions = __webpack_require__(34);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var HomeSectionSubPartTwo = (function (_React$Component) {
	  function HomeSectionSubPartTwo() {
	    _classCallCheck(this, HomeSectionSubPartTwo);
	
	    _get(Object.getPrototypeOf(HomeSectionSubPartTwo.prototype), 'constructor', this).call(this);
	    this.state = HomeSectionSubPartTwo.getDataState();
	  }
	
	  _inherits(HomeSectionSubPartTwo, _React$Component);
	
	  _createClass(HomeSectionSubPartTwo, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesAppStore2['default'].listen(this.onChange.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesAppStore2['default'].unlisten(this.onChange.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var contentMarkup = 'dispatching zone 2';
	      if (this.state.apiData.data) {
	        contentMarkup = (0, _marked2['default'])('```json\n' + JSON.stringify(this.state.apiData.data, null, 2) + '```', { breaks: true });
	      }
	
	      return _react2['default'].createElement('div', { className: 'home-section-sub-part-two', dangerouslySetInnerHTML: { __html: contentMarkup } });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      _actionsAppActions2['default'].fetch();
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      this.setState(HomeSectionSubPartTwo.getDataState());
	    }
	  }], [{
	    key: 'getDataState',
	
	    // CALL STORE UTILS
	    value: function getDataState() {
	      return {
	        apiData: _storesAppStore2['default'].getState().dataByRestApi
	      };
	    }
	  }]);
	
	  return HomeSectionSubPartTwo;
	})(_react2['default'].Component);
	
	exports['default'] = HomeSectionSubPartTwo;
	
	HomeSectionSubPartTwo.prototype.displayName = 'HomeSectionSubPartTwo';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HomeSectionSubPartTwo.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "div.home-section-actions {\n  padding: 10px;\n  margin: 10px 0;\n  background-color: #6DF6FF;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-one {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.home-section-sub-part-two {\n  padding: 10px;\n  background-color: #8EE7FD;\n  border: 1px #eee solid; }\n", ""]);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoItem = __webpack_require__(41);
	
	var _TodoItem2 = _interopRequireDefault(_TodoItem);
	
	var _TodoTextInput = __webpack_require__(45);
	
	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);
	
	var _TodoSnapshots = __webpack_require__(46);
	
	var _TodoSnapshots2 = _interopRequireDefault(_TodoSnapshots);
	
	var _actionsAppActions = __webpack_require__(34);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var _storesAppStore = __webpack_require__(30);
	
	var _storesAppStore2 = _interopRequireDefault(_storesAppStore);
	
	var _storesSnapshotStore = __webpack_require__(49);
	
	var _storesSnapshotStore2 = _interopRequireDefault(_storesSnapshotStore);
	
	var TodoSection = (function (_React$Component) {
	  function TodoSection() {
	    _classCallCheck(this, TodoSection);
	
	    _get(Object.getPrototypeOf(TodoSection.prototype), 'constructor', this).call(this);
	    this.state = TodoSection.getDataState();
	  }
	
	  _inherits(TodoSection, _React$Component);
	
	  _createClass(TodoSection, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesAppStore2['default'].listen(this._onChange.bind(this));
	      _storesSnapshotStore2['default'].listen(this._onChange.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesAppStore2['default'].unlisten(this._onChange.bind(this));
	      _storesSnapshotStore2['default'].unlisten(this._onChange.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var allTodos = this.state.allData,
	          todos = [];
	
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
	        _react2['default'].createElement(_TodoSnapshots2['default'], { snapshots: this.state.snapshots })
	      );
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange() {
	      this.setState(TodoSection.getDataState());
	    }
	  }, {
	    key: '_onSave',
	    value: function _onSave(text) {
	      if (text.trim()) {
	        _actionsAppActions2['default'].create(text);
	      }
	    }
	  }], [{
	    key: 'getDataState',
	
	    // CALL STORE UTILS
	    value: function getDataState() {
	      return {
	        allData: _storesAppStore2['default'].getState().data,
	        areAllComplete: _storesAppStore2['default'].areAllComplete(),
	        snapshots: _storesSnapshotStore2['default'].getState().snapshots
	      };
	    }
	  }]);
	
	  return TodoSection;
	})(_react2['default'].Component);
	
	exports['default'] = TodoSection;
	
	TodoSection.prototype.displayName = 'TodoSection';
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoSection.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(42);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _actionsAppActions = __webpack_require__(34);
	
	var _actionsAppActions2 = _interopRequireDefault(_actionsAppActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(43);
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("classnames");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	exports.push([module.id, "div.todo {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\ndiv.todo-snapshot {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #C1F1FD;\n  border: 1px #eee solid; }\n\nbutton.destroy {\n  border-radius: 50%;\n  margin-left: 10px;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n  background: #3498db;\n  border: 0;\n  border-bottom: 2px solid #BFCAD2;\n  cursor: pointer;\n  -webkit-box-shadow: inset 0 -2px #2a8bcc; }\n\n.button.destroy:active {\n  top: 1px;\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\nli.completed {\n  text-decoration: line-through; }\n", ""]);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actionsSnapshotActions = __webpack_require__(47);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	var _TodoSnapshotsItem = __webpack_require__(48);
	
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(31);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var SnapshotActions = function SnapshotActions() {
	  _classCallCheck(this, SnapshotActions);
	
	  this.generateActions('destroySnapshot', 'bootstrapSnapshot', 'takeSnapshot');
	};
	
	module.exports = _alt2['default'].createActions(SnapshotActions);
	
	/* REACT HOT LOADER */ }).call(this); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SnapshotActions.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actionsSnapshotActions = __webpack_require__(47);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	var PropTypes = _react2['default'].PropTypes;
	
	if (process.env.BROWSER) {
	  __webpack_require__(43);
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/julienvalery/Documents/Dev/Git/web-react/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _alt = __webpack_require__(31);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var _actionsSnapshotActions = __webpack_require__(47);
	
	var _actionsSnapshotActions2 = _interopRequireDefault(_actionsSnapshotActions);
	
	var _lodash = __webpack_require__(8);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var snapshotStore = _alt2['default'].createStore((function () {
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
/* 50 */
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
	
	var api = __webpack_require__(51);
	
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
/* 51 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTExMjNiNjkzYzA1OTEwMjk4NTIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzPzJhM2QiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9pbWFnZXMvcmVhY3QtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL19IZWFkZXIuc2Nzcz8wZDMzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Fzcz9lZmFjIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydE9uZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmVzL0FwcFN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hbHQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWx0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib2JqZWN0LWFzc2lnblwiIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24vSG9tZVNlY3Rpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uU3ViUGFydFR3by5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzcz80MDBmIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzPzlmYmMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1RleHRJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU25hcHNob3RzSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3RvcmVzL1NuYXBzaG90U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwaS9hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNDckNpQixDQUFNOzs7O2lDQUNOLENBQU07Ozs7OztvQ0FHSCxDQUFTOzs7O3lDQUNULENBQWU7Ozs7O0FBR25DLEtBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMs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RyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3ZDLE1BQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUMxQixDQUFDLENBQUM7O3NCQUVZLE1BQU07Ozs7O0FBS3JCLEtBQUcsS0FBVSxFQUFFO0FBQ2IsU0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxZQUFNO0FBQ3RDLFFBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQsS0FBSSxHQUFHLEdBQUc7QUFDUixPQUFJLEVBQUUsY0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBSztBQUN4QixTQUFJO0FBQ0YsVUFBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWWxELFVBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7TUFDdEMsQ0FBQyxPQUFPLEdBQUcsRUFBRTtBQUNaLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNYO0lBQ0Y7QUFDRCxZQUFTLEVBQUUscUJBQU0sRUFFaEI7RUFDRixDQUFDOztzQkFFYSxHQUFHIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGUxMTIzYjY5M2MwNTkxMDI5ODUyXG4gKiovIiwiLy8gTk9ERVxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gRVhQUkVTU1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgZmF2aWNvbiBmcm9tICdzZXJ2ZS1mYXZpY29uJztcblxuLy8gUHJvZmlsZSBkZXYgb3IgcHJvZHVjdGlvblxubGV0IHByb2ZpbGUgPSBwcm9jZXNzLmVudi5ERVYgPyAnZGV2JyA6ICdwcm9kJyxcblx0cHVibGljUGF0aCA9IHByb2ZpbGUgPT09ICdkZXYnID8gJ2J1aWxkJyA6ICdkaXN0JztcblxubGV0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHB1YmxpY1BhdGgpKTtcbmFwcC51c2UoZmF2aWNvbihwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vYXBwL2ltYWdlcy9mYXZpY29uLmljbycpKSk7XG5cbi8vXG4vLyBSZWdpc3RlciBtaWRkbGV3YXJlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gcmVuZGVyZXJcbmxldCByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XG4vLyBhcGlzXG5sZXQgYXBpUm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXBpJyk7XG5cbi8vXG4vLyBDb25maWd1cmUgbWlkZGxld2FyZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5yZW5kZXJlci5pbml0KHByb2ZpbGUpO1xuXG4vL1xuLy8gQWN0aXZhdGUgbWlkZGxld2FyZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAudXNlKGFwaVJvdXRlcyk7XG5hcHAudXNlKHJlbmRlcmVyLnJlbmRlcik7XG5cbmh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJyArIGFwcC5nZXQoJ3BvcnQnKSk7XG59KTtcblxuLy9cbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYobW9kdWxlLmhvdCkge1xuICAvLyBhY2NlcHQgdXBkYXRlIG9mIGRlcGVuZGVuY3lcbiAgbW9kdWxlLmhvdC5hY2NlcHQoWycuL3JvdXRlcy9hcGknLCAnLi9yb3V0ZXMvcmVuZGVyZXInXSwgKCkgPT4ge1xuICAgIGFwaVJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL2FwaScpO1xuICAgIGFwcC51c2UoYXBpUm91dGVzKTtcbiAgICByZW5kZXJlciA9IHJlcXVpcmUoJy4vcm91dGVzL3JlbmRlcmVyJyk7XG4gICAgcmVuZGVyZXIuaW5pdCgnZGV2Jyk7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zZXJ2ZXIvc2VydmVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmUtZmF2aWNvblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwic2VydmUtZmF2aWNvblwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicGF0aFwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaHR0cFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibGV0IHJlbmRlcmVyID0gcmVxdWlyZSgnLi4vdXRpbHMvcmVuZGVyZXInKTtcblxubGV0IHByb2ZpbGUgPSAnZGV2JztcblxudmFyIHJvdXRlc1JlbmRlcmVyID0ge1xuICBpbml0OiAodHlwZSkgPT4ge1xuICAgIHByb2ZpbGUgPSB0eXBlO1xuICAgIHJlbmRlcmVyLmluaXQodHlwZSk7XG4gIH0sXG4gIHJlbmRlcjogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgcmVuZGVyZXIucmVuZGVyKHJlcSwgcmVzLCBuZXh0KTtcbiAgfVxufTtcblxuLy9cbi8vIGNoZWNrIGlmIEhNUiBpcyBlbmFibGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdChbJy4uL3V0aWxzL3JlbmRlcmVyJ10sICgpID0+IHtcbiAgICByZW5kZXJlciA9IHJlcXVpcmUoJy4uL3V0aWxzL3JlbmRlcmVyJyk7XG4gICAgcmVuZGVyZXIuaW5pdChwcm9maWxlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1JlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zZXJ2ZXIvcm91dGVzL3JlbmRlcmVyLmpzXG4gKiovIiwiLy8gTk9ERVxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuLy8gRVhURVJOQUxTXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IElzbyBmcm9tICdpc28nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLy8gQ09SRVxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi8uLi9hcHAvcm91dGVzJztcbmltcG9ydCBhbHQgZnJvbSAnLi4vLi4vYXBwL2FsdCc7XG5cbmxldCBodG1sID0gJyc7XG5cbnZhciByZW5kZXJlciA9IHtcbiAgaW5pdDogKHR5cGUpID0+IHtcbiAgICBodG1sID0gdHlwZSA9PT0gJ2RldicgP1xuICAgICAgZnMucmVhZEZpbGVTeW5jKCcuL2Fzc2V0cy9pbmRleC1kZXYuaHRtbCcsIHtlbmNvZGluZzogJ3V0ZjgnfSlcbiAgICAgIDpcbiAgICAgIGZzLnJlYWRGaWxlU3luYygnLi9kaXN0L2luZGV4LXByb2QuaHRtbCcsIHtlbmNvZGluZzogJ3V0ZjgnfSk7XG4gIH0sXG4gIHJlbmRlcjogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgbGV0IG1hcmt1cCA9ICcnLFxuICAgICAgaXNvID0gbmV3IElzbygpO1xuXG4gICAgY29uc3Qgb25lSXRlbUJvb3RzdHJhcGVkID0ge1xuICAgICAgJ0FwcFN0b3JlJzoge1xuICAgICAgICAnZGF0YUJ5UmVzdEFwaSc6IHt9LFxuICAgICAgICAnZGF0YSc6IHtcbiAgICAgICAgICAnaWFxcG9yN3AnOiB7XG4gICAgICAgICAgICAnaWQnOiAnaWFxcG9yN3AnLFxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogZmFsc2UsXG4gICAgICAgICAgICAndGV4dCc6ICdmc2ZzZGYnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qIFRoaXMgaXMgd2hlcmUgdGhlIG1hZ2ljIGhhcHBlbnMsIHdlIHRha2UgdGhlIGxvY2FscyBkYXRhIHdlIGhhdmUgYWxyZWFkeVxuICAgIGZldGNoZWQgYW5kIHNlZWQgb3VyIHN0b3JlcyB3aXRoIGRhdGEuXG4gICAgTmV4dCB3ZSB1c2UgcmVhY3Qtcm91dGVyIHRvIHJ1biB0aGUgVVJMIHRoYXQgaXMgcHJvdmlkZWQgaW4gcm91dGVzLmpzeFxuICAgIEZpbmFsbHkgd2UgdXNlIGlzbyBpbiBvcmRlciB0byByZW5kZXIgdGhpcyBjb250ZW50IHNvIGl0IHBpY2tzIGJhY2sgdXBcbiAgICBvbiB0aGUgY2xpZW50IHNpZGUgYW5kIGJvb3RzdHJhcHMgdGhlIHN0b3Jlcy5cbiAgICBpbml0IHNlcnZlciByZW5kZXJlclxuICAgICovXG4gICAgYWx0LmJvb3RzdHJhcChKU09OLnN0cmluZ2lmeShyZXMubG9jYWxzLmRhdGEgfHwgb25lSXRlbUJvb3RzdHJhcGVkKSk7XG5cbiAgICB0cnkge1xuICAgICAgUm91dGVyLnJ1bihyb3V0ZXMsIHJlcS5wYXRoLCAoSGFuZGxlciwgc3RhdGUpID0+IHtcblx0XHRcdFx0Ly8gYWx0IGZsdXggZmx1c2hcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBSZWFjdC5yZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KEhhbmRsZXIpKTtcbiAgICAgICAgaXNvLmFkZChjb250ZW50LCBhbHQuZmx1c2goKSk7XG5cbiAgICAgICAgcmVzLmNvbnRlbnRUeXBlID0gJ3RleHQvaHRtbDsgY2hhcnNldD11dGY4JztcbiAgICAgICAgbGV0IG5vdEZvdW5kID0gXy5maW5kKHN0YXRlLnJvdXRlcywge2lzTm90Rm91bmQ6IHRydWV9KTtcblxuICAgICAgICBpZiAobm90Rm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KTtcbiAgICAgICAgfVxuXG5cdFx0XHRcdC8vIHJlbmRlcmluZyBiYWNrIHRvIGNsaWVudFxuICAgICAgICBtYXJrdXAgKz0gaXNvLnJlbmRlcigpO1xuICAgICAgICBtYXJrdXAgPSBodG1sLnJlcGxhY2UoJ0NPTlRFTlQnLCBtYXJrdXApO1xuICAgICAgICByZXMuc2VuZChtYXJrdXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV4dChlKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zZXJ2ZXIvdXRpbHMvcmVuZGVyZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpc29cIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmc1wiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8qZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyovXHJcbmltcG9ydCB7Um91dGUsIERlZmF1bHRSb3V0ZSwgTm90Rm91bmRSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQXBwL0FwcCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0JztcclxuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbic7XHJcbmltcG9ydCBOb3RGb3VuZFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kU2VjdGlvbi9Ob3RGb3VuZFNlY3Rpb24nO1xyXG5pbXBvcnQgVG9kb1NlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TZWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICA8Um91dGUgbmFtZT0nYXBwJyBwYXRoPScvJyBoYW5kbGVyPXtBcHBsaWNhdGlvbn0+XHJcbiAgICA8Um91dGUgbmFtZT0naG9tZScgcGF0aD0nL2hvbWUnIGhhbmRsZXI9e0hvbWVTZWN0aW9ufS8+XHJcbiAgICA8Um91dGUgbmFtZT0ndG9kbycgcGF0aD0nL3RvZG8nIGhhbmRsZXI9e1RvZG9TZWN0aW9ufS8+XHJcbiAgICA8Um91dGUgbmFtZT0nY29udGFjdCcgcGF0aD1cIi9jb250YWN0XCIgaGFuZGxlcj17Q29udGFjdH0vPlxyXG4gICAgPERlZmF1bHRSb3V0ZSBoYW5kbGVyPXtIb21lU2VjdGlvbn0gLz5cclxuICAgIDxOb3RGb3VuZFJvdXRlIGhhbmRsZXI9e05vdEZvdW5kU2VjdGlvbn0gLz5cclxuICA8L1JvdXRlPlxyXG4pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9yb3V0ZXMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVIYW5kbGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX0FwcC5zY3NzJyk7XG4gIHJlcXVpcmUoJy4vX0FwcC5zYXNzJyk7XG4gIHJlcXVpcmUoJ2ZpbGU/bmFtZT1mYXZpY29uLmljbyEuLi8uLi9pbWFnZXMvZmF2aWNvbi5pY28nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50Jz5cbiAgICAgICAgICA8Um91dGVIYW5kbGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BcHAucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0FwcCc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0FwcC9BcHAuanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19BcHAuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9BcHAvX0FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICB3aWR0aDogNzUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250OiAxMDAlIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXFxuaDEsIGgyLCBoMyB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcblxcbmRpdi5tYWluLWNvbnRlbnQge1xcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4OyB9XFxuXFxuLyogaHR0cDovL2Nzc2RlY2suY29tL2xhYnMvYmVhdXRpZnVsLWZsYXQtYnV0dG9ucyAqL1xcbmJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0JGQ0FEMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4ICMyYThiY2M7IH1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG4vLyBcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5sZXQgcmVhY3RMb2dvID0gcmVxdWlyZSgnLi9pbWFnZXMvcmVhY3QtbG9nby5wbmcnKTtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fSGVhZGVyLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxpbWcgc3JjPXtyZWFjdExvZ299IGhlaWdodD0nNjAnIC8+XG5cdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0PHVsPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSdhcHAnPkhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz0ndG9kbyc+VG9kbzwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHRvPSdjb250YWN0Jz5Db250YWN0PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9oZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSGVhZGVyJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIlYyZC11Y18ucG5nXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2ltYWdlcy9yZWFjdC1sb2dvLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX0hlYWRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19IZWFkZXIuc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvX0hlYWRlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0ZjRmNDsgfVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbmhlYWRlciBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7IH1cXG5cXG5saSBhIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjODg4OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hlYWRlci9fSGVhZGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9fQXBwLnNhc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9pbmRlbnRlZFN5bnRheCEuL19BcHAuc2Fzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/aW5kZW50ZWRTeW50YXghLi9fQXBwLnNhc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQXBwL19BcHAuc2Fzc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImgxIHtcXG4gIGNvbG9yOiAjNWE4ODk0OyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlcj9pbmRlbnRlZFN5bnRheCEuL2FwcC9jb21wb25lbnRzL0FwcC9fQXBwLnNhc3NcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5pY29cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZpbGUtbG9hZGVyP25hbWU9ZmF2aWNvbi5pY28hLi9hcHAvaW1hZ2VzL2Zhdmljb24uaWNvXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q09OVEFDVCBQQUdFPC9oMT5cbiAgICAgICAgPHA+dGVzdCB0aGUgNDA0IHBhZ2UgPGEgaHJlZj0nL21pZGRsZW9mbm93aGVyZSc+aGVyZTwvYT48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL0NvbnRhY3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmVzL0FwcFN0b3JlJztcbmltcG9ydCBIb21lU2VjdGlvbkFjdGlvbnMgZnJvbSAnLi9Ib21lU2VjdGlvbkFjdGlvbnMnO1xuaW1wb3J0IEhvbWVTZWN0aW9uU3ViUGFydE9uZSBmcm9tICcuL0hvbWVTZWN0aW9uU3ViUGFydE9uZSc7XG5pbXBvcnQgSG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGZyb20gJy4vSG9tZVNlY3Rpb25TdWJQYXJ0VHdvJztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi9fSG9tZVNlY3Rpb24uc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IEhvbWVTZWN0aW9uLmdldERhdGFTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQXBwU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBBcHBTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SE9NRSBQQUdFPC9oMT5cbiAgICAgICAgPEhvbWVTZWN0aW9uQWN0aW9ucyAvPlxuICAgICAgICA8SG9tZVNlY3Rpb25TdWJQYXJ0T25lIC8+XG4gICAgICAgIDxIb21lU2VjdGlvblN1YlBhcnRUd28gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKEhvbWVTZWN0aW9uLmdldERhdGFTdGF0ZSgpKTtcbiAgfVxuXG4gIC8vIENBTEwgU1RPUkUgVVRJTFNcbiAgc3RhdGljIGdldERhdGFTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpRGF0YTogQXBwU3RvcmUuZ2V0U3RhdGUoKS5kYXRhQnlSZXN0QXBpXG4gICAgfTtcbiAgfVxufVxuXG5Ib21lU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnSG9tZVNlY3Rpb24nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5cbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVNlY3Rpb25TdWJQYXJ0T25lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0gSG9tZVNlY3Rpb25TdWJQYXJ0T25lLmdldERhdGFTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQXBwU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBBcHBTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBjb250ZW50TWFya3VwID0gJ2Rpc3BhdGNoaW5nIHpvbmUgMSc7XG4gICAgaWYgKHRoaXMuc3RhdGUuYXBpRGF0YS5kYXRhKSB7XG4gICAgICBjb250ZW50TWFya3VwID0gbWFya2VkKCdgYGBqc29uXFxuJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuYXBpRGF0YS5kYXRhLCBudWxsLCAyKSArICdgYGAnLCB7YnJlYWtzOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXNlY3Rpb24tc3ViLXBhcnQtb25lJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudE1hcmt1cH19PjwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKEhvbWVTZWN0aW9uU3ViUGFydE9uZS5nZXREYXRhU3RhdGUoKSk7XG4gIH1cblxuICAvLyBDQUxMIFNUT1JFIFVUSUxTXG4gIHN0YXRpYyBnZXREYXRhU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaURhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZGF0YUJ5UmVzdEFwaVxuICAgIH07XG4gIH1cbn1cblxuSG9tZVNlY3Rpb25TdWJQYXJ0T25lLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvblN1YlBhcnRPbmUnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvblN1YlBhcnRPbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZWRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1hcmtlZFwiXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuaW1wb3J0IG1lcmdlIGZyb20gJ29iamVjdC1hc3NpZ24nO1xyXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xyXG5cclxubGV0IGFwcFN0b3JlID0gYWx0LmNyZWF0ZVN0b3JlKGNsYXNzIEFwcFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoQXBwQWN0aW9ucyk7XHJcbiAgICB0aGlzLmRhdGFCeVJlc3RBcGkgPSB7fTtcclxuICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGlkLCB1cGRhdGVzKSB7XHJcbiAgICBpZih0aGlzLmRhdGFbaWRdICYmIHVwZGF0ZXMpe1xyXG4gICAgICB0aGlzLmRhdGFbaWRdID0gbWVyZ2UodGhpcy5kYXRhW2lkXSwgdXBkYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBbGwodXBkYXRlcykge1xyXG4gICAgZm9yICh2YXIgaWQgaW4gdGhpcy5kYXRhKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKGlkLCB1cGRhdGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ3JlYXRlKHRleHQpIHtcclxuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBoYW5kIHdhdmluZyBvZiBjb3Vyc2UuXHJcbiAgICB2YXIgaWQgPSAoK25ldyBEYXRlKCkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpKS50b1N0cmluZygzNik7XHJcbiAgICB0aGlzLmRhdGFbaWRdID0ge1xyXG4gICAgICBpZDogaWQsXHJcbiAgICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgdGV4dDogdGV4dFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uRmV0Y2goKSB7XHJcbiAgICB0aGlzLmRhdGFCeVJlc3RBcGkgPSB7ZGF0YTogJ2hlbGxvJ307XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9naXRodWInKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhQnlSZXN0QXBpID0ge2RhdGE6IGpzb259O1xyXG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIG9uVXBkYXRlVGV4dCh4KSB7XHJcbiAgICBsZXQgeyBpZCwgdGV4dCB9ID0geDtcclxuICAgIHRleHQgPSB0ZXh0ID8gdGV4dC50cmltKCkgOiAnJztcclxuICAgIGlmICh0ZXh0ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyB0ZXh0IH0pO1xyXG4gIH1cclxuXHJcbiAgb25Ub2dnbGVDb21wbGV0ZShpZCkge1xyXG4gICAgbGV0IGNvbXBsZXRlID0gIXRoaXMuZGF0YVtpZF0uY29tcGxldGU7XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgeyBjb21wbGV0ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uVG9nZ2xlQ29tcGxldGVBbGwoKSB7XHJcbiAgICAvKnZhciBjb21wbGV0ZSA9ICF0b2RvU3RvcmUuYXJlQWxsQ29tcGxldGUoKTtcclxuICAgIHRoaXMudXBkYXRlQWxsKHsgY29tcGxldGUgfSk7Ki9cclxuICB9XHJcblxyXG4gIG9uRGVzdHJveShpZCkge1xyXG4gICAgZGVsZXRlIHRoaXMuZGF0YVtpZF07XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3lDb21wbGV0ZWQoKSB7XHJcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YVtpZF0uY29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveShpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhcmVBbGxDb21wbGV0ZSgpIHtcclxuICAgIGxldCB7IGRhdGEgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgIGZvciAobGV0IGlkIGluIGRhdGEpIHtcclxuICAgICAgaWYgKCFkYXRhW2lkXS5jb21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59LCAnQXBwU3RvcmUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXBwU3RvcmU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL3N0b3Jlcy9BcHBTdG9yZS5qc1xuICoqLyIsImltcG9ydCBBbHQgZnJvbSAnYWx0JztcclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsdCgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9hbHQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbHRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFsdFwiXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm9iamVjdC1hc3NpZ25cIlxuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIEFwcEFjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICdjcmVhdGUnLFxuICAgICAgJ2Rlc3Ryb3knLFxuICAgICAgJ3RvZ2dsZUNvbXBsZXRlJyxcbiAgICAgICdmZXRjaCdcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoQXBwQWN0aW9ucyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9hY3Rpb25zL0FwcEFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lU2VjdGlvbkFjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1zZWN0aW9uLWFjdGlvbnMnPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzKX0+RkFLRSBBUEkgQ0FMTDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIEFwcEFjdGlvbnMuZmV0Y2goKTtcbiAgfVxufVxuXG5Ib21lU2VjdGlvbkFjdGlvbnMucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ0hvbWVTZWN0aW9uQWN0aW9ucyc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL0hvbWVTZWN0aW9uQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5cbmltcG9ydCBBcHBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvQXBwU3RvcmUnO1xuaW1wb3J0IEFwcEFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9BcHBBY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVNlY3Rpb25TdWJQYXJ0VHdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0gSG9tZVNlY3Rpb25TdWJQYXJ0VHdvLmdldERhdGFTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQXBwU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBBcHBTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBjb250ZW50TWFya3VwID0gJ2Rpc3BhdGNoaW5nIHpvbmUgMic7XG4gICAgaWYgKHRoaXMuc3RhdGUuYXBpRGF0YS5kYXRhKSB7XG4gICAgICBjb250ZW50TWFya3VwID0gbWFya2VkKCdgYGBqc29uXFxuJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuYXBpRGF0YS5kYXRhLCBudWxsLCAyKSArICdgYGAnLCB7YnJlYWtzOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXNlY3Rpb24tc3ViLXBhcnQtdHdvJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudE1hcmt1cH19PjwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBBcHBBY3Rpb25zLmZldGNoKCk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKEhvbWVTZWN0aW9uU3ViUGFydFR3by5nZXREYXRhU3RhdGUoKSk7XG4gIH1cblxuICAvLyBDQUxMIFNUT1JFIFVUSUxTXG4gIHN0YXRpYyBnZXREYXRhU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaURhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZGF0YUJ5UmVzdEFwaVxuICAgIH07XG4gIH1cbn1cblxuSG9tZVNlY3Rpb25TdWJQYXJ0VHdvLnByb3RvdHlwZS5kaXNwbGF5TmFtZSA9ICdIb21lU2VjdGlvblN1YlBhcnRUd28nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9Ib21lU2VjdGlvblN1YlBhcnRUd28uanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL19Ib21lU2VjdGlvbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fSG9tZVNlY3Rpb24uc2Nzc1wiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvY29tcG9uZW50cy9Ib21lU2VjdGlvbi9fSG9tZVNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5ob21lLXNlY3Rpb24tYWN0aW9ucyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRGNkZGO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblxcbmRpdi5ob21lLXNlY3Rpb24tc3ViLXBhcnQtb25lIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuZGl2LmhvbWUtc2VjdGlvbi1zdWItcGFydC10d28ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4RUU3RkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL0hvbWVTZWN0aW9uL19Ib21lU2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5QQUdFIE5PVCBGT1VORDwvaDE+XG4gICAgICAgIDxwPnllcyBpbmRlZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk5vdEZvdW5kU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnTm90Rm91bmRTZWN0aW9uJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvTm90Rm91bmRTZWN0aW9uL05vdEZvdW5kU2VjdGlvbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL1RvZG9JdGVtJztcbmltcG9ydCBUb2RvVGV4dElucHV0IGZyb20gJy4vVG9kb1RleHRJbnB1dCc7XG5pbXBvcnQgVG9kb1NuYXBzaG90cyBmcm9tICcuL1RvZG9TbmFwc2hvdHMnO1xuXG5pbXBvcnQgQXBwQWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL0FwcEFjdGlvbnMnO1xuaW1wb3J0IEFwcFN0b3JlIGZyb20gJy4uLy4uL3N0b3Jlcy9BcHBTdG9yZSc7XG5pbXBvcnQgU25hcHNob3RTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvU25hcHNob3RTdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0gVG9kb1NlY3Rpb24uZ2V0RGF0YVN0YXRlKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBBcHBTdG9yZS5saXN0ZW4odGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgU25hcHNob3RTdG9yZS5saXN0ZW4odGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBBcHBTdG9yZS51bmxpc3Rlbih0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICBTbmFwc2hvdFN0b3JlLnVubGlzdGVuKHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhbGxUb2RvcyA9IHRoaXMuc3RhdGUuYWxsRGF0YSxcbiAgICAgICAgdG9kb3MgPSBbXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhbGxUb2Rvcykge1xuICAgICAgdG9kb3MucHVzaCg8VG9kb0l0ZW0ga2V5PXtrZXl9IHRvZG89e2FsbFRvZG9zW2tleV19IC8+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlRPRE8gUEFHRTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvJz5cbiAgICAgICAgICA8cD5GaXJzdCBhZGQgc29tZSB0YXNrcyBieSBwcmVzc2luZyBlbnRlciBrZXk8L3A+XG4gICAgICAgICAgPFRvZG9UZXh0SW5wdXQgY2xhc3NOYW1lPSdlZGl0JyBpZD0nbmV3LXRvZG8nIHBsYWNlaG9sZGVyPSdXaGF0IG5lZWRzIHRvIGJlIGRvbmUgPycgb25TYXZlPXt0aGlzLl9vblNhdmUuYmluZCh0aGlzKX0gdmFsdWU9JycgLz5cbiAgICAgICAgICA8dWwgaWQ9J3RvZG8tbGlzdCc+e3RvZG9zfTwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VG9kb1NuYXBzaG90cyBzbmFwc2hvdHM9e3RoaXMuc3RhdGUuc25hcHNob3RzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNoYW5nZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKFRvZG9TZWN0aW9uLmdldERhdGFTdGF0ZSgpKTtcbiAgfVxuXG4gIF9vblNhdmUodGV4dCkge1xuICAgIGlmICh0ZXh0LnRyaW0oKSl7XG4gICAgICBBcHBBY3Rpb25zLmNyZWF0ZSh0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAvLyBDQUxMIFNUT1JFIFVUSUxTXG4gIHN0YXRpYyBnZXREYXRhU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbERhdGE6IEFwcFN0b3JlLmdldFN0YXRlKCkuZGF0YSxcbiAgICAgIGFyZUFsbENvbXBsZXRlOiBBcHBTdG9yZS5hcmVBbGxDb21wbGV0ZSgpLFxuICAgICAgc25hcHNob3RzOiBTbmFwc2hvdFN0b3JlLmdldFN0YXRlKCkuc25hcHNob3RzXG4gICAgfTtcbiAgfVxufVxuXG5Ub2RvU2VjdGlvbi5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1NlY3Rpb24nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvU2VjdGlvbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBBcHBBY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucyc7XG5cbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX1RvZG9JdGVtLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XG4gICAgICB0b2RvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0VkaXRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdG9kbyA9IHRoaXMucHJvcHMudG9kbztcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjeCh7XG4gICAgICAgICAgJ2NvbXBsZXRlZCc6IHRvZG8uY29tcGxldGUsXG4gICAgICAgICAgJ2VkaXRpbmcnOiB0aGlzLnN0YXRlLmlzRWRpdGluZ1xuICAgICAgICB9KX1cbiAgICAgICAga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RvZG8uY29tcGxldGV9IG9uQ2hhbmdlPXt0aGlzLl9vblRvZ2dsZUNvbXBsZXRlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxsYWJlbD57dG9kby50ZXh0fTwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVzdHJveVwiIG9uQ2xpY2s9e3RoaXMuX29uRGVzdHJveUNsaWNrLmJpbmQodGhpcyl9PiYjMTAwMDY7PC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxuICBfb25Ub2dnbGVDb21wbGV0ZSgpIHtcbiAgICBBcHBBY3Rpb25zLnRvZ2dsZUNvbXBsZXRlKHRoaXMucHJvcHMudG9kby5pZCk7XG4gIH1cblxuICBfb25EZXN0cm95Q2xpY2soKSB7XG4gICAgQXBwQWN0aW9ucy5kZXN0cm95KHRoaXMucHJvcHMudG9kby5pZCk7XG4gIH1cbn1cblxuVG9kb0l0ZW0ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9JdGVtJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb0l0ZW0uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCJcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9fVG9kb0l0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX1RvZG9JdGVtLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vX1RvZG9JdGVtLnNjc3NcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vX1RvZG9JdGVtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYudG9kbyB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFGMUZEO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDsgfVxcblxcbmRpdi50b2RvLXNuYXBzaG90IHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUYxRkQ7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkOyB9XFxuXFxuYnV0dG9uLmRlc3Ryb3kge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNCRkNBRDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAjMmE4YmNjOyB9XFxuXFxuLmJ1dHRvbi5kZXN0cm95OmFjdGl2ZSB7XFxuICB0b3A6IDFweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lOyB9XFxuXFxubGkuY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyB9XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL19Ub2RvSXRlbS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmNvbnN0IEVOVEVSX0tFWV9DT0RFID0gMTM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9UZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XG4gICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgb25TYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX3NhdmUuYmluZCh0aGlzKX0+QUREPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX3NhdmUoKSB7XG4gICAgdGhpcy5wcm9wcy5vblNhdmUodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogJydcbiAgICB9KTtcbiAgfVxuXG4gIF9vbkNoYW5nZSgvKm9iamVjdCovIGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBfb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLl9zYXZlKCk7XG4gICAgfVxuICB9XG59XG5cblRvZG9UZXh0SW5wdXQucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9UZXh0SW5wdXQnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VjdGlvbi9Ub2RvVGV4dElucHV0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNuYXBzaG90QWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucyc7XG5pbXBvcnQgVG9kb1NuYXBzaG90c0l0ZW0gZnJvbSAnLi9Ub2RvU25hcHNob3RzSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9TbmFwc2hvdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc25hcHNob3RzOiB0aGlzLnByb3BzLnNuYXBzaG90c1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFsbFNuYXBzID0gdGhpcy5zdGF0ZS5zbmFwc2hvdHMsXG4gICAgICAgIHNuYXBzaG90cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGFsbFNuYXBzKSB7XG4gICAgICBzbmFwc2hvdHMucHVzaCg8VG9kb1NuYXBzaG90c0l0ZW0ga2V5PXtrZXl9IHNuYXBzaG90PXthbGxTbmFwc1trZXldfSAvPik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLXNuYXBzaG90Jz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyl9PlRBS0UgU05BUFNIT1Q8L2J1dHRvbj5cbiAgICAgICAgPHVsIGlkPSd0b2RvLXNuYXBzaG90LWxpc3QnPntzbmFwc2hvdHN9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DbGljaygpIHtcbiAgICBTbmFwc2hvdEFjdGlvbnMudGFrZVNuYXBzaG90KCk7XG4gIH1cbn1cblxuVG9kb1NuYXBzaG90cy5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSAnVG9kb1NuYXBzaG90cyc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9jb21wb25lbnRzL1RvZG9TZWN0aW9uL1RvZG9TbmFwc2hvdHMuanNcbiAqKi8iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIFNuYXBzaG90QWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxuICAgICAgJ2Rlc3Ryb3lTbmFwc2hvdCcsXG4gICAgICAnYm9vdHN0cmFwU25hcHNob3QnLFxuICAgICAgJ3Rha2VTbmFwc2hvdCdcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWx0LmNyZWF0ZUFjdGlvbnMoU25hcHNob3RBY3Rpb25zKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNuYXBzaG90QWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zL1NuYXBzaG90QWN0aW9ucyc7XG5cbmxldCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vX1RvZG9JdGVtLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1NuYXBzaG90c0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzVHlwZXMgPSB7XG4gICAgICBzbmFwc2hvdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdG9kbyA9IHRoaXMucHJvcHMuc25hcHNob3Q7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgIDxsYWJlbD48YSBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9ib290c3RyYXBTbmFwc2hvdC5iaW5kKHRoaXMpfT57dG9kby5pZH08L2E+PC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Rlc3Ryb3knIG9uQ2xpY2s9e3RoaXMuX29uRGVzdHJveUNsaWNrLmJpbmQodGhpcyl9PiYjMTAwMDY7PC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxuICBfYm9vdHN0cmFwU25hcHNob3QoKSB7XG4gICAgU25hcHNob3RBY3Rpb25zLmJvb3RzdHJhcFNuYXBzaG90KHRoaXMucHJvcHMuc25hcHNob3QuaWQpO1xuICB9XG5cbiAgX29uRGVzdHJveUNsaWNrKCkge1xuICAgIFNuYXBzaG90QWN0aW9ucy5kZXN0cm95U25hcHNob3QodGhpcy5wcm9wcy5zbmFwc2hvdC5pZCk7XG4gIH1cbn1cblxuVG9kb1NuYXBzaG90c0l0ZW0ucHJvdG90eXBlLmRpc3BsYXlOYW1lID0gJ1RvZG9TbmFwc2hvdHNJdGVtJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vYXBwL2NvbXBvbmVudHMvVG9kb1NlY3Rpb24vVG9kb1NuYXBzaG90c0l0ZW0uanNcbiAqKi8iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgU25hcHNob3RBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvU25hcHNob3RBY3Rpb25zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmxldCBzbmFwc2hvdFN0b3JlID0gYWx0LmNyZWF0ZVN0b3JlKGNsYXNzIFNuYXBzaG90U3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKFNuYXBzaG90QWN0aW9ucyk7XG4gICAgdGhpcy5zbmFwc2hvdHMgPSBbXTtcbiAgfVxuXG4gIG9uQm9vdHN0cmFwU25hcHNob3QoaWQpIHtcbiAgICB2YXIgZWx0ID0gXy5maW5kKHRoaXMuc25hcHNob3RzLCAoc25hcCkgPT4ge1xuICAgICAgcmV0dXJuIHNuYXAuaWQgPT09IGlkO1xuICAgIH0pO1xuXG4gICAgaWYgKGVsdCkge1xuICAgICAgLy8gVE9ET1xuICAgICAgLy8gYWx0LnByZXBhcmUoQXBwU3RvcilcbiAgICAgIGFsdC5ib290c3RyYXAoZWx0LmRhdGEpO1xuICAgICAgLy8gYWx0LnJvbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25UYWtlU25hcHNob3QoKSB7XG4gICAgdmFyIHNuYXBzaG90ID0ge1xuICAgICAgaWQ6ICgrbmV3IERhdGUoKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkpLnRvU3RyaW5nKDM2KSxcbiAgICAgIGRhdGE6IGFsdC50YWtlU25hcHNob3QoJ0FwcFN0b3JlJylcbiAgICB9O1xuICAgIHRoaXMuc25hcHNob3RzLnB1c2goc25hcHNob3QpO1xuICB9XG5cbiAgb25EZXN0cm95U25hcHNob3QoaWQpIHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgLy90aGlzLnNuYXBzaG90c1xuICB9XG59LCAnU25hcHNob3RTdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNuYXBzaG90U3RvcmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL2FwcC9zdG9yZXMvU25hcHNob3RTdG9yZS5qc1xuICoqLyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG4vKmVzbGludC1kaXNhYmxlIG5ldy1jYXAqL1xubGV0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4vKmVzbGludC1lbmFibGUgbmV3LWNhcCovXG5cbmxldCBhcGkgPSByZXF1aXJlKCcuLi9hcGkvYXBpJyk7XG5cbnJvdXRlci51c2UoJy9hcGkvKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBhcGkudG9kbyhyZXEsIHJlcywgbmV4dCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG4vL1xuLy8gY2hlY2sgaWYgSE1SIGlzIGVuYWJsZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZihtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFsnLi4vYXBpL2FwaSddLCAoKSA9PiB7XG4gICAgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2FwaScpO1xuICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc2VydmVyL3JvdXRlcy9hcGkuanNcbiAqKi8iLCJsZXQgYXBpID0ge1xuICB0b2RvOiAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgLy8gc2ltcGxlIGFwaSBmZXRjaCBleGFtcGxlLCBubyBvd24gREIgaGVyZSBzbyBleHRlcm5hbCBjYWxsIGlzIG1hZGUuXG5cbiAgICAgIC8vIGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViXG4gICAgIC8qIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dpdGh1YicpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoanNvbik7XG4gICAgICB9KTtcbiAgICAgICovXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7dGVzdDogJ3Rlc3QnfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBuZXh0KGVycik7XG4gICAgfVxuICB9LFxuICBvdGhlcnRvZG86ICgpID0+IHtcblxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NlcnZlci9hcGkvYXBpLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==