/**
 * Return quadratic length
 *
 * @module  mumath/loop
 *
 */

module.exports = require('./wrap')(function (a, b) {
	return Math.sqrt(a*a + b*b);
});