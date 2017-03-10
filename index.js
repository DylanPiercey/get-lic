'use strict'

// Better global support (for web/service workers)≥
var window = require('global')

/**
 * Finds the location object, checking for polyfill and falling back to empty object.
 * @return {Object}
 */
module.exports = function getLocation () {
  return (window.history && window.history.location) || window.location || { href: '' }
}
