module.exports = class Die {
    constructor(id, numSides) {
        this.id = id
        this.numSides = numSides
    }
    roll() {
        return Math.ceil(Math.random() * this.numSides);
    }
}