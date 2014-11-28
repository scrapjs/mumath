var wrap = require('./wrap');

/**
 * Simple math utils.
 *
 * @module  mumath
 */
module.exports = {
	between: wrap(require('./between')),
	isBetween: wrap(require('./is-between')),
	round: wrap(require('./round')),
	getPrecision: require('./get-precision'),
	min: wrap(Math.min),
	max: wrap(Math.max),
	add: wrap(function(a,b){return a+b}),
	sub: wrap(function(a,b){return a-b}),
	div: wrap(function(a,b){return a/b}),
	mult: wrap(function(a,b){return a*b}),
	mod: wrap(function(a,b){return a%b}),
	floor: wrap(function(a){return Math.floor(a)}),
	ceil: wrap(function(a){return Math.ceil(a)})
};