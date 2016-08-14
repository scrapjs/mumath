/**
 * Composed set of all math utils, wrapped
 *
 * @module  mumath
 */
const wrap = require('./wrap');

module.exports = {
	clamp: wrap(require('./clamp')),
	within: wrap(require('./within')),
	round: wrap(require('./round')),
	precision: wrap(require('./precision')),
	mod: wrap(require('./mod')),
	lg: wrap(require('./lg')),
	len: wrap(require('./len')),
	closest: wrap(require('./closest')),
	order: wrap(require('./order')),
	lerp: wrap(require('./lerp'))
};