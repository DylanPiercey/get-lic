<h1 align="center">
  <!-- Logo -->
  <br/>
  get-loc
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/get-loc">
    <img src="https://img.shields.io/npm/v/get-loc.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/get-loc">
    <img src="https://img.shields.io/npm/dm/get-loc.svg?style=flat-square" alt="Downloads"/>
  </a>
</h1>

Simple utility to get the current `window.location`. Has support for [history polyfill](https://github.com/devote/HTML5-History-API) and web/service workers.

# Installation

```console
npm install get-loc
```

# Example

```javascript
import getLocation from 'get-loc'
const location = getLocation()

location.href === 'http://github.com/DylanPiercey/get-location'
```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
