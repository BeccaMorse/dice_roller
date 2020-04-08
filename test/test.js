var rolledFace = require('../dieRoller.js');

var assert = require('assert');

var assertChai = require('chai').assert;

  describe('dieRoller', function() {
    // it('should return 5', function() {
    //   assert.equal(rolledFace(), 5);
    // });
    it('should return 1-6', function() {
        assertChai.isBelow(rolledFace(), 7);
      });
  });

