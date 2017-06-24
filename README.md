# generator-na-webpack [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Simple webpack boilerplate for es6 front-end projects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-na-webpack using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
$ npm install -g yo
$ npm install -g generator-na-webpack
```

Then generate your new project:

```
$ yo na-webpack
```

## About the generated project

- The directory structure of generated project would be:
```
├── dist/
│   └── index.html
├── src/
│   └── index.js
│   └── styles/
│       └── index.css
├── .gitignore
├── .eslintrc.json
├── package.json
├── package-lock.json
├── server.js
└── webpack.config.js
```
- `dist` folder contains html files, you can add more of them. _( and when you build the project, the transpiled js files would be here)_ *This folder can be directly published to github-pages after building*
- `src` folder contains the css and js files which you would develop with

## Steps to use the generated project
1. run `npm install` ── it would install all dependencies
2. For development run `npm run dev` ── you can start coding now and go to the url `http://localhost:9000` in your browser
3. To build the project run `npm run build` ── this would output all the js and css files into assets folder

Enjoy!

## License

MIT © [Navarjun](http://navarjun.com)


[npm-image]: https://badge.fury.io/js/generator-na-webpack.svg
[npm-url]: https://npmjs.org/package/generator-na-webpack
[travis-image]: https://travis-ci.org/Navarjun/generator-na-webpack.svg?branch=master
[travis-url]: https://travis-ci.org/Navarjun/generator-na-webpack
[daviddm-image]: https://david-dm.org/Navarjun/generator-na-webpack.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Navarjun/generator-na-webpack
