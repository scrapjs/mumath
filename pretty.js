/**
 * Format number nicely
 *
 * @module  mumath/loop
 *
 */
'use strict';

var precision = require('./precision');
var almost = require('almost-equal');
var normalize = require('./normalize');

module.exports = function (v, eps) {
	if (eps == null) eps = almost.FLT_EPSILON;

	v = normalize(v);

	if (almost(v, 0, eps)) return '0';

	var prec = precision(v, eps);
		prec = Math.min(prec, 20);

	// return v.toFixed(prec);
	return v.toFixed(prec);
};
