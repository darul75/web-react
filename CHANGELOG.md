# Changelog

## 1.2.1

### Changed

* fix HMR for api on server side, bad way of exporting module

## 1.2.0

### Changed

* babel 6 integration with following configuration

{
  "presets": ["react", "es2015", "stage-0"],
  "plugins": [
  	"transform-es2015-arrow-functions",
  	"transform-es2015-classes",
  	"transform-es2015-destructuring",
  	"transform-es2015-modules-commonjs",
  	"transform-es2015-object-super",
  	"transform-class-properties",
  	"transform-decorators-legacy"
  ]
}

* alt flux implementation version upgraded : decorators usage...
* refactoring component to functional stateless component when possible
* eslint rules...

NOTE: http://stackoverflow.com/questions/33801311/webpack-babel-6-es6-decorators

## 1.1.0

### Changed

* react upgraded to 0.14.0
* react-router upgraded to 1.0.x branch latest
* react-hot-loader upgraded 1.3.0

Refactoring according to new React/Router api changes.