/**
 * Format number nicely
 *
 * @module  mumath/loop
 *
 */
'use strict';

var precision = require('./precision');
var almost = require('almost-equal');

module.exports = function (v, prec) {
	if (almost(v, 0, almost.FLT_EPSILON)) return 0;

	let remainder = Math.abs(v%1);
	if (almost(remainder, 0) || almost(remainder, 1)) remainder = 0;
	let whole = parseInt( Math.round(v) )

	if (!prec) {
		prec = precision(v);
		prec = Math.min(prec, 20);
	}

	return whole + remainder.toFixed(prec).substring((whole+'').length);
};
