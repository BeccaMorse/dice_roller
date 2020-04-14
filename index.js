var dieRoller = require('./dieRoller.js');

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d6").addEventListener("click", () => {
        var dice = document.getElementsByClassName("output");
        for (var i = 0; i < dice.length; i++) {
            dice.item(i).innerHTML = dieRoller();
        }
    })
});