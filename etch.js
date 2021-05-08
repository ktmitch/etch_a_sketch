
var main = document.querySelector("#main")
const allDivs = document.querySelectorAll("div")

var randColor = Math.floor(Math.random() * 255)
var color = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')'

const newDiv = document.createElement('div')

var i = 1

function reset() {
    main.removeChild(newDiv)
}

window.addEventListener('load', () => {
    create()
})

function create() {
    
    var finalInt = 16
    

    var btn = document.querySelector("#button-clear")

    document.documentElement.style.setProperty('--repeat', finalInt)

    for (i; i <= finalInt * finalInt; i++) {

        const newDiv = document.createElement('div')
        newDiv.classList.add("allDivs")
        newDiv.setAttribute('style', 'border: 1px black solid; width: 100%; height: 0; padding-bottom: 100%; margin: 0') //overflow hidden if adding content

        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = 'gray'
            // newDiv.style.setProperty("backgroundColor", color)
        })

        main.appendChild(newDiv)
        console.log("Added")
        
        
        btn.addEventListener('click', () => {
            main.removeChild(newDiv)
        })
        
    }

    btn.removeEventListener('click', reset)

    }




//////////////////////////////////////////////////

function randomColor() {
    newDiv.addEventListener('mouseenter', () => {
        var randColor = Math.floor(Math.random() * 255)
        newDiv.style.backgroundColor = randColor;
})
}

function clear() {

    // for

    // main.removeChild(newDiv)


    // var allSquares = document.querySelectorAll(".allDivs")

    // for(var l = 0; l < allSquares.length; l++) {
    //     allSquares[l].style.backgroundColor = 'white'
    // }

    var answer = prompt("How Many Squares Per Side?")
    var answerInt = parseInt(answer)
    console.log(answerInt)
    
    if (answerInt <= 50 && answerInt > 0) {

        var finalInt = answerInt * answerInt
        console.log(finalInt)


        var btn = document.querySelector("#button-clear")
        document.documentElement.style.setProperty('--repeat', answerInt)

        for (i = 1; i <= finalInt; i++) {

            const newDiv = document.createElement('div')
            newDiv.classList.add("allDivs")
            newDiv.setAttribute('style', 'border: 1px black solid; width: 100%; height: 0; padding-bottom: 100%; margin: 0') //overflow hidden if adding content

            newDiv.addEventListener('mouseenter', () => {
                newDiv.style.backgroundColor = 'gray'
        })

        main.appendChild(newDiv)
        console.log("Selection Valid")

        btn.addEventListener('click', () => {
            main.removeChild(newDiv)
        })

    }
        // }
    }
    else {
        alert("Error, please enter a number between 1 and 100")
    }
}

 
var btn = document.querySelector("#button-clear")
btn.addEventListener('click', clear)