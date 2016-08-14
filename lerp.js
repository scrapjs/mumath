/**
 * @module mumath/lerp
 */
module.exports = function (x, y, a) {
	return x * (1.0 - a) + y * a;
};