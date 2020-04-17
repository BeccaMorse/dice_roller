var dieRoller = require('./dieRoller.js');

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d6").addEventListener("click", () => {
        var sumOfDice = 0;
        var dice = document.getElementsByClassName("output");
        for (var i = 0; i < dice.length; i++) {
            var rolled = dieRoller();
            dice.item(i).innerHTML = rolled;
            sumOfDice += rolled;
        }
        document.getElementById("sum").innerHTML = sumOfDice;
    })
    var x = 0
    document.getElementById("addNewDie").addEventListener("click", () => {
        var newDie = document.createElement("p")
        x += 1
        newDie.innerHTML = "Die " + x + ": "
        var newOutput = document.createElement("span")
        newOutput.className = "output"
        newDie.appendChild(newOutput)
        document.getElementById("diceBucket").appendChild(newDie)
    })

});