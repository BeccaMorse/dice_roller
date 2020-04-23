var Die = require('./die.js');

const createDie = (dice, numSides) => {
    var die = new Die("die-" + dice.length, numSides)
    dice.push(die)
    document.getElementById("diceBucket").insertAdjacentHTML("beforeend",
        "<p>" + numSides + "-Sided Die: " +
        "<span id=\"" + die.id + "\"><span>" +
    "</p>")
}

document.addEventListener("DOMContentLoaded", () => {
    var dice = [];
    document.getElementById("d6").addEventListener("click", () => {
        var sumOfDice = 0;
        var dieElements = document.getElementsByClassName("output");
        for (var i = 0; i < dice.length; i++) {
            var die = dice[i]
            var rolled = die.roll()
            document.getElementById(die.id).innerHTML = rolled
            sumOfDice += rolled;
        }
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