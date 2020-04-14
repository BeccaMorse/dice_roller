var dieRoller = require('../dieRoller.js');

var assert = require('assert');

var assertChai = require('chai').assert;

describe('dieRoller', function () {
  it('should return 1-6', function () {
    assertChai.isBelow(dieRoller(), 7);
  });
});