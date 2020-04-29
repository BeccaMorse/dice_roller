var Die = require('../die.js');

var assert = require('assert');

var assertChai = require('chai').assert;

describe('die', function () {
  it('should return 1-10', function () {
    var die = new Die("die", 10)
    assertChai.isBelow(die.roll(), 11);
  });

  describe('numSides', function () {
    it('should be a number', function () {
      assert.throws(() => {
        var die = new Die("die", "hello")
      }, Error, "No Dice! That's not a number.")
    });

    it('should be positive', function () {
      assert.throws(() => {
        var die = new Die("die", 0)
      }, Error, "Stay Positive! Number of sides must be greater than zero.");
    })

    it('should be a whole number', function () {
      assert.throws(() => {
        var die = new Die("die", 3.14)
      }, Error, "Stay Wholesome! Whole numbers only, please.")
    })

    it('should be less than 101', function () {
      assert.throws(() => {
        var die = new Die("die",101)
      }, Error, "100 or under, please!")
    })
  });
});