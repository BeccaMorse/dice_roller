var dieRoller = require('./dieRoller.js');

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d6").addEventListener("click", () => {
        document.getElementById("output").innerHTML
            = dieRoller();
    })
});