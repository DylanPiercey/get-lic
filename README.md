<h1 align="center">
  <!-- Logo -->
  <br/>
  Get-Loc
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Prettier -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- Travis build -->
  <a href="https://travis-ci.org/DylanPiercey/get-loc">
  <img src="https://img.shields.io/travis/DylanPiercey/get-loc.svg" alt="Build status"/>
  </a>
  <!-- Coveralls coverage -->
  <a href="https://coveralls.io/github/DylanPiercey/get-loc">
    <img src="https://img.shields.io/coveralls/DylanPiercey/get-loc.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/get-loc">
    <img src="https://img.shields.io/npm/v/get-loc.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/get-loc">
    <img src="https://img.shields.io/npm/dm/get-loc.svg" alt="Downloads"/>
  </a>
  <!-- Size -->
  <a href="https://npmjs.org/package/get-loc">
    <img src="https://img.shields.io/badge/size-533b-green.svg" alt="Browser Bundle Size"/>
  </a>
</h1>

Simple utility to get the current `window.location`. Has support for [history polyfill](https://github.com/devote/HTML5-History-API) and web/service workers.

# Installation

```console
npm install get-loc
```

# Example

```javascript
import { get } from 'get-loc'

const location = get()
location.href === 'http://github.com/DylanPiercey/get-location'
```

### Contributions

* Use `npm test` to build and run tests.

Please feel free to create a PR!
