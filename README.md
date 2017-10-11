<h1 align="center">
  <!-- Logo -->
  <br/>
  get-loc
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/get-loc">
    <img src="https://img.shields.io/npm/v/get-loc.svg" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/get-loc">
    <img src="https://img.shields.io/npm/dm/get-loc.svg" alt="Downloads"/>
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
