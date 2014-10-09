var m = require('../index');
var assert = require('better-assert');

assert.ok(m.between(-100, 0, 100) === 0);
assert.ok(m.between(-100, 100, 0) === 0);