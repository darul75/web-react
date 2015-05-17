web-react [![NPM version](https://badge.fury.io/js/web-react.png)](http://badge.fury.io/js/web-react) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/web-react/counters/views.png)](https://sourcegraph.com/github.com/darul75/web-react) [![Join the chat at https://gitter.im/darul75/web-react](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/darul75/web-react?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
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

For a simple website with no server side it is really fine.

For a more complex website, an Express server is used but work is not finished.

- Server side React rendering is ready and done through [React-Router](https://github.com/rackt/react-router)
- Some API server routes are just given as example.

On both client/server [Fetch](https://github.com/github/fetch) request handler is used (for example on server side)

Hope you will enjoy.

Demo
-------------
TODO

How to use it
-------------

*DEV ONLY CLIENT*

Webpack with hot changes loading but no own server. Port: 8080

See changes at [http://127.0.0.1:8080](http://127.0.0.1:8080)

```
npm run dev
```

*DEV ONLY CLIENT/SERVER*

Start one webpack in background for client hot changes loading.

```
npm run dev-server-client
```

Then start your node server in debug break mode. One Express server will be launched in debug mode in ES6 thanks to Babel. 

See changes at [http://127.0.0.1:3000](http://127.0.0.1:3000)

```
npm run dev-server
```

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

RELEASE
-------------

* 0.0.1: starter kit
 
Metrics

[![NPM](https://nodei.co/npm/web-react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/web-react/)

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
