module.exports = class Die {
    constructor(id, numSides) {
        if (isNaN(numSides)) {
            throw new Error("No Dice! That's not a number.")
        } else if (numSides <= 0) {
            throw new Error("Stay Positive! Number of sides must be greater than zero.")
        } else if (numSides % 1 != 0) {
            throw new Error("Stay Wholesome! Whole numbers only, please.")
        } else if (numSides > 100) {
            throw new Error("100 or under, please!")
        }
        this.id = id
        this.numSides = numSides
    }
    roll() {
        return Math.ceil(Math.random() * this.numSides);
    }
}