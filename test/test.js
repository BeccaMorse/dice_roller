var dieRoller = require('../die.js');

var assert = require('assert');

var assertChai = require('chai').assert;

describe('die', function () {
  it('should return 1-6', function () {
    assertChai.isBelow(dieRoller(), 7);
  });
});