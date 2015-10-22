web-react [![NPM version](https://badge.fury.io/js/web-react.png)](http://badge.fury.io/js/web-react) [![Build Status](https://travis-ci.org/darul75/web-react.png?branch=master)](https://travis-ci.org/darul75/web-react) [![Join the chat at https://gitter.im/darul75/web-react](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/darul75/web-react?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
=====================

Another Webpack React Kit.

Why
-------------

Because there are many React starter kits but some are so specific and difficult to take in hands.

Idea was to take in hands following stack :

* [ES6](https://babeljs.io/docs/learn-es6/) : and you will learn React with awesome ECM6 features.
* [Webpack](https://github.com/webpack/webpack) : amazing bundler, still to learn so much about it.
* [React](https://github.com/facebook/react) : choosed because I love idea of Virtual DOM.
* [Flux](https://facebook.github.io/flux/docs/overview.html) : flux and used implementation is [Alt](http://alt.js.org/)
* [Immutable](https://facebook.github.io/immutable-js/) : Immutable everywhere.
* [EsLint](http://eslint.org/): JS and JSX syntax validator.
* [Express](http://expressjs.com/): Version 4.
* [Mocha](http://mochajs.org/): Testing.

For a simple website with no server side it is really fine.

For a more complex website, an Express server is used but work is not finished.

- Server side React rendering is ready and done through [React-Router](https://github.com/rackt/react-router)
- Flux on server side has begin thanks to [Iso](https://github.com/goatslacker/iso/) and Alt feature to bootstrap your app with data.
- Some API server routes are just given as example.
- You can debug it on server side thanks to sourcemaps.
- *NEW FEATURE* : hot reloading of you code on server side too (node), it will patch silently without restarting your node server.

On both client/server [Fetch](https://github.com/github/fetch) request handler is used (for example on server side)

Hope you will enjoy.

CODE, DEBUG in an isomorphic JS way !

Demo
-------------

https://react-web.herokuapp.com/

Try reload page, put wrong path, snapshot todo list...play, I will improve it later to show how it works.

How to use it
-------------

*DEV ONLY CLIENT*

Webpack with hot changes loading but no own server, enough for a single presentation page app by instance. Port: 8080

See changes at [http://127.0.0.1:8080](http://127.0.0.1:8080)

```
npm run dev
```

*DEV ONLY CLIENT/SERVER*

Let's use your own NodeJS server.

Start webpack in background with *hot changes loading* and *debug* in both client/server sides.

```
npm run dev-server-client
```

*Then* start your node server which is an express one in this case that will be launched in ES6 thanks to Babel.

```
npm run dev-server
```

or with debug nodejs mode :

```
npm run dev-server-debug
```

See changes at [http://127.0.0.1:3000](http://127.0.0.1:3000)

*PRODUCTION*

Build production bundle both client and server.
```
npm run build
```

Run production client/server React/Express website.

```
npm run start
```

See it at [http://127.0.0.1:3000](http://127.0.0.1:3000)

STRUCTURE
-------------
```
.
├── /build/                     # Compiled output
├── /conf/                      # Webpack scripts + testing glue.
├── /dist/                      # Production compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /app/                       # Source code of the client application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
|       |── /__tests__/         # React components unit tests
│   ├── /stores/                # Stores contain the application state and logic
├── /server/                    # The source code of the server application
│   ├── /api/                   # REST API
│   ├── /routes/                # Express routes entries
│   ├── /server/                # Server-side startup script
│   ├── /utils/                 # Some specific, rendering...
├── /assets/                    # Static resources
│   ├── index.html              # Html templates used for `dev client` / `dev server` / `production`
│   ├── config                  # JSON configuration file, used for <head> metas today, more later...
└── package.json                # The list of 3rd party libraries and utilities
```

FOCUS
-------------

Thanks to [react-helmet](https://github.com/nfl/react-helmet), now you will be able to enhance head dom part with one json configuration [file](https://github.com/darul75/web-react/blob/master/assets/config.json).

```json
{
  "title": "web-react",
  "meta":[
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
```

RELEASE
-------------

* 1.1.0: react 0.14.0 + react-router 1.0.x => refactoring
* 1.0.9: bump RHL version, may remove NoErrorsPlugin with React Hot Loader 1.3.0
* 1.0.8: record/reload all dispatched payload example
* 1.0.7: Immutable integration + code refactoring + todo task edition + some actions
* 1.0.6: branding
* 1.0.5: fix runtime dependency
* 1.0.4: <head/> tags in config file, meta, links + dynamic title ability, isomorphic
* 1.0.3: fix import + dependent store example
* 1.0.2: webpack hot module store fixture
* 1.0.1: connect stores wrapper + refactoring
* 1.0.0: footer + demo tags
* 0.0.9: demo production distribution + local webpack path + licence
* 0.0.8: hot [HMR](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack) server reloading + refactor server directories.
* 0.0.7: testing available with mocha, scss/sass/css loaders fixes.
* 0.0.6: full ES6 + start refactoring.
* 0.0.5: debug mode for both client/server side
* 0.0.4: starter kit

Metrics

[![NPM](https://nodei.co/npm/web-react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/web-react/)

TODO
-------------

- [x] Update React/React routet version and other libraries if needed
- [ ] Look at webpack node middleware for HMR
- [ ] Now that io.js and node merged again, see for ES6/ES7 compliance and refactoring
- [ ] More example of routing, fetching.
- [ ] More tests
- [ ] Change flux implementation => redux ?

## License

The MIT License (MIT)

Copyright (c) 2015 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
