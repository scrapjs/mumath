/**
 * @module mumath/mix
 */
module.exports = require('./wrap')(function (x, y, a) {
	return x * (1.0 - a) + y * a;
});