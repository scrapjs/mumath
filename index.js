/**
 * Composed set of all math utils
 *
 * @module  mumath
 */
module.exports = {
	clamp: require('./clamp'),
	within: require('./within'),
	round: require('./round'),
	precision: require('./precision'),
	mod: require('./mod'),
	add: require('./add'),
	sub: require('./sub'),
	min: require('./min'),
	max: require('./max'),
	div: require('./div'),
	lg: require('./lg'),
	log: require('./log'),
	mult: require('./mult'),
	floor: require('./floor'),
	ceil: require('./ceil'),
	len: require('./len'),
	closest: require('./closest'),
	order: require('./order'),
	mix: require('./mix'),

	gt: require('./gt'),
	gte: require('./gte'),
	lt: require('./lt'),
	lte: require('./lte'),
	eq: require('./eq'),
	ne: require('./ne')
};