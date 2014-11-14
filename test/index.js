var m = require('../index');
var assert = require('assert');

assert.equal(m.between(-100, 0, 100), 0);
assert.equal(m.between(-100, 100, 0), 0);

//limit arrays
assert.deepEqual(m.between([-100, -200], -100, 100),  [-100, -100]);
assert.deepEqual(m.between([-101, 101], [-50, -100], [100, 50]), [-50, 50]);

//limit objects
assert.deepEqual(m.between({top: 120, bottom: -10}, 0, 100), {top: 100, bottom: 0});
assert.deepEqual(m.between({top: 120, bottom: -10}, {top: 0, bottom:0},  {top: 100, bottom: 100}), {top: 100, bottom: 0});