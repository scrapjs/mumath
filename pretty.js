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
	if (almost(v, 0)) return 0;

	if (!prec) {
		prec = precision(v);
		prec = Math.min(prec, 20);
	}

	let remainder = v%1;
	let whole = parseInt( Math.floor(v+.5) );

	return whole + remainder.toFixed(prec).substring(1);
};
