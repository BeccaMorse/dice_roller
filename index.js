var Die = require('./die.js');

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
        var newDieElement = document.createElement("p")
        var numSides = document.getElementById("numSides").value
        try {
            var die = new Die("die-" + dice.length, numSides)
            newDieElement.innerHTML = numSides + "-Sided Die: "
            var newOutput = document.createElement("span")
            newOutput.id = die.id
            newDieElement.appendChild(newOutput)
            document.getElementById("diceBucket").appendChild(newDieElement)
            dice.push(die)
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