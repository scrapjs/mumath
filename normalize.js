/**
 * Get rid of float remainder
 *
 * @module mumath/normalize
 */
'use strict';

var almost = require('almost-equal');

module.exports = function(value, eps) {
	if (eps == null) eps = Number.EPSILON || almost.FLT_EPSILON;

	//pick number’s neighbour, which is way shorter, like 0.4999999999999998 → 0.5
	// var remainder = Math.abs(value % 1);

	var range = 10;
	var len = (value+'').length;

	for (var i = 1; i < range; i++) {
		var left = value - eps*i,
			right = value + eps*i;

		if (len - (left+'').length > 2) return left;
		if (len - (right+'').length > 2) return right;
	}

	return value;
};
