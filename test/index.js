var m = require('../index');
var assert = require('assert');

assert.equal(m.min(0,2),0);
assert.equal(m.max(0,2),2);
assert.deepEqual(m.min([0,0],[2,-2]),[0,-2]);

assert.equal(m.between(-100, 0, 100), 0);
assert.equal(m.between(-100, 100, 0), 0);

//limit arrays
assert.deepEqual(m.between([-100, -200], -100, 100),  [-100, -100]);
assert.deepEqual(m.between([-101, 101], [-50, -100], [100, 50]), [-50, 50]);

//limit objects
assert.deepEqual(m.between({top: 120, bottom: -10}, 0, 100), {top: 100, bottom: 0});
assert.deepEqual(m.between({top: 120, bottom: -10}, {top: 0, bottom:0},  {top: 100, bottom: 100}), {top: 100, bottom: 0});

//maths
assert.deepEqual(m.sub({top:10,bottom:20}, {top:5, bottom:5}), {top:5, bottom:15});
assert.deepEqual(m.add({top:10, bottom:20}, {top:5, bottom:5}), {top:15, bottom:25});

//precisions
assert.equal(m.precision(0.02), 2);
assert.equal(m.round(0.3, .5), .5);