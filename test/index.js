var m = require('../index');
var assert = require('assert');

assert.equal(m.min(0,2),0);
assert.equal(m.max(0,2),2);
assert.deepEqual(m.min([0,0],[2,-2]),[0,-2]);

assert.equal(m.clamp(-100, 0, 100), 0);
assert.equal(m.clamp(-100, 100, 0), 0);

//limit arrays
assert.deepEqual(m.clamp([-100, -200], -100, 100),  [-100, -100]);
assert.deepEqual(m.clamp([-101, 101], [-50, -100], [100, 50]), [-50, 50]);

//limit objects
assert.deepEqual(m.clamp({top: 120, bottom: -10}, 0, 100), {top: 100, bottom: 0});
assert.deepEqual(m.clamp({top: 120, bottom: -10}, {top: 0, bottom:0},  {top: 100, bottom: 100}), {top: 100, bottom: 0});

//maths
assert.deepEqual(m.sub({top:10,bottom:20}, {top:5, bottom:5}), {top:5, bottom:15});
assert.deepEqual(m.add({top:10, bottom:20}, {top:5, bottom:5}), {top:15, bottom:25});

//precisions
assert.equal(m.precision(0.02), 2);
assert.equal(m.round(0.3, .5), .5);

//conditions
assert.ok(m.gt(2,1));
assert.ok(m.gte(2,1));
assert.ok(m.lt(1,2));
assert.ok(m.lte(1,2));

//loop
assert.equal(m.mod(10, 100), 10);

assert.equal(m.mod(110, 100), 10);
assert.equal(m.mod(110, 90), 20);

assert.equal(m.mod(-110, 100), 90);

assert.equal(m.mod(110, 0, 100), 10);
assert.equal(m.mod(110, -10, 100), 0);
assert.equal(m.mod(110, -10, 90), 10);
assert.equal(m.mod(-110, -100, 0), -10);
assert.equal(m.mod(-110, -100, 10), 0);
assert.equal(m.mod(-110, -90, 10), -10);

//lg
assert.equal(m.lg(100), 2);
assert.equal(m.lg(10), 1);
assert.equal(m.lg(1), 0);
assert.equal(Math.round(m.lg(0.1)), -1);

//len
assert.equal(m.len(3,4), 5);

//closest
assert.equal(m.closest(0.2, [0.01, 0.1, 1, 10, 100]), 0.1);

//order
assert.equal(m.order(123), 100);
assert.equal(m.order(0.000213), 0.0001);
assert.equal(m.order(-123), 100);
assert.equal(m.order(-0.0000123), 0.00001);