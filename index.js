/**
 * Simple math utils.
 * @module  mumath
 */

module.exports = {
	betwee: between,
	isBetween: isBetween,
	toPrecision: toPrecision,
	getPrecision: getPrecision
};



/**
 * Clamper
 *
 * @param {number} a Current value to cut off
 * @param {number} min Left limit
 * @param {number} max Right limit
 *
 * @return {number} Clamped value
 */

function between(a, min, max){
	return max > min ? Math.max(Math.min(a,max),min) : Math.max(Math.min(a,min),max)
}


/**
 * Whether element is between left & right including
 *
 * @param {number} a
 * @param {number} left
 * @param {number} right
 *
 * @return {Boolean}
 */

function isBetween(a, left, right){
	if (a <= right && a >= left) return true;
	return false;
}


/**
 * Precision round
 *
 * @param {number} value
 * @param {number} step Minimal discrete to round
 *
 * @return {number}
 *
 * @example
 * round(213.34, 1) == 213
 * round(213.34, .1) == 213.3
 * round(213.34, 10) == 210
 */

function round(value, step) {
	step = parseFloat(step);
	if (step === 0) return value;
	value = Math.round(value / step) * step;
	return parseFloat(value.toFixed(getPrecision(step)));
}


/**
 * Get precision from float:
 *
 * @example
 * 1.1 → 1, 1234 → 0, .1234 → 4
 *
 * @param {number} n
 *
 * @return {number} decimap places
 */

function getPrecision(n){
	var s = n + '',
		d = s.indexOf('.') + 1;

	return !d ? 0 : s.length - d;
}
