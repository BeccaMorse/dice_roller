var Die = require('../die.js');

var assert = require('assert');

var assertChai = require('chai').assert;

describe('die', function () {
  it('should return 1-10', function () {
    var die = new Die("die", 10)
    assertChai.isBelow(die.roll(), 11);
  });
});