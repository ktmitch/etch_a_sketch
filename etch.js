
var main = document.querySelector("#main")
const allDivs = document.querySelectorAll("div")

var randColor = Math.floor(Math.random() * 255)



function create() {
    const newDiv = document.createElement('div')
    newDiv.classList.add("allDivs")
    newDiv.setAttribute('style', 'border: 1px black solid; width: 100%; height: 0; padding-bottom: 100%; margin: 0') //overflow hidden if adding content
    newDiv.addEventListener('mouseenter', () => {
        var randColor = Math.floor(Math.random() * 255)
        newDiv.style.backgroundColor = 'lightblue'
    })
    main.appendChild(newDiv)
    console.log("Added")
}

var i = 0

window.addEventListener('load', () => {
for (i ; i < 256; i++) {
    create()
}})

//////////////////////////////////////////////////


function clear() {


    var allSquares = document.querySelectorAll(".allDivs")

    for(var l = 0; l < allSquares.length; l++) {
        allSquares[l].style.backgroundColor = 'white'
    }

    var answer = prompt("How Many Squares Per Side?")
    var answerInt = parseInt(answer)
    console.log(answerInt)
    
    if (answerInt <= 100 && answerInt > 0) {
        var finalInt = answerInt * answerInt
        console.log(finalInt)
        // for (x = 0; x < finalInt; x++) {
        var finalGrid = document.documentElement.style.setProperty('--repeat', finalInt)
        console.log(finalGrid)
        create()
        // }
    }
    else {
        alert("Error, please enter a number between 1 and 100")
    }
}


var btn = document.querySelector("#button-clear")
btn.addEventListener('click', clear)