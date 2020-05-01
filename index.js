var Die = require('./die.js');

const createDie = (dice, numSides) => {
    var die = new Die("die-" + dice.length, numSides)
    dice.push(die)
    document.getElementById("diceBucket").insertAdjacentHTML("beforeend",
        "<div class=\"die-container\">" +
        "<span class=\"die\" id=\"" + die.id + "\">" + numSides + "</span> (" +
        numSides + " sides)" +
    "</div>")
}

const rollAllDice = (dice) => {
    var sumOfDice = 0;
    for (dieIndex in dice) {
        var die = dice[dieIndex]
        var rolled = die.roll()
        document.getElementById(die.id).innerHTML = rolled
        sumOfDice += rolled;
    }
    return sumOfDice
}

document.addEventListener("DOMContentLoaded", () => {
    var dice = [];
    document.getElementById("rollAllDice").addEventListener("click", () => {
        var sumOfDice = rollAllDice(dice)
        document.getElementById("sum").innerHTML = sumOfDice;
    })
    document.getElementById("addNewDie").addEventListener("click", () => {
        var numSides = document.getElementById("numSides").value
        try {
            createDie(dice, numSides)
        } catch (e) {
            window.alert(e)
        }
    })
    document.getElementById("removeDie").addEventListener("click", () => {
       var diceBucket = document.getElementById("diceBucket")
       diceBucket.removeChild(diceBucket.lastElementChild)
       dice.pop()
    })
});