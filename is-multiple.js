/**
 * Check if one number is multiple of other
 *
 * @module  mumath/is-multiple
 */
'use strict';
var almost = require('almost-equal');

module.exports = isMultiple;

function isMultiple (a, b, eps) {
	var remainder = a % b;

	if (!eps) eps = 2*Number.EPSILON || 2.2204460492503131e-16;

	if (!remainder) return true;
	if (almost(0, remainder, eps, 0) || almost(Math.abs(b), Math.abs(remainder), eps, 0)) return true;

	return false;
}
