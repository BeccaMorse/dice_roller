module.exports = class Die {
    static roll() {
        return Math.ceil(Math.random() * 6);
    }
}