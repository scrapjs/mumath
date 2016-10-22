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

	return v.toFixed(prec);
};
