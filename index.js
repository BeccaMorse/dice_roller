var Die = require('./die.js');

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d6").addEventListener("click", () => {
        var sumOfDice = 0;
        var dieElements = document.getElementsByClassName("output");
        for (var i = 0; i < dieElements.length; i++) {
            var rolled = Die.roll();
            dieElements.item(i).innerHTML = rolled;
            sumOfDice += rolled;
        }
        document.getElementById("sum").innerHTML = sumOfDice;
    })
    var dieIndex = 0
    document.getElementById("addNewDie").addEventListener("click", () => {
        var newDieElement = document.createElement("p")
        dieIndex += 1
        newDieElement.innerHTML = "Die " + dieIndex + ": "
        var newOutput = document.createElement("span")
        newOutput.className = "output"
        newDieElement.appendChild(newOutput)
        document.getElementById("diceBucket").appendChild(newDieElement)
    })

});