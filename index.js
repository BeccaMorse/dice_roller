document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("d6").addEventListener("click", () => {
        document.getElementById("output").innerHTML
            = Math.ceil(Math.random() * 6)
    })
})