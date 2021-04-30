
var main = document.querySelector("#main")
const allDivs = document.querySelectorAll("div")


function create() {
    const newDiv = document.createElement('div')
    newDiv.classList.add("allDivs")
    // newDiv.textContent = " s"
    newDiv.setAttribute('style', 'border: 1px black solid; width: 100%; height: 0; padding-bottom: 100%; margin: 0') //overflow hidden if adding content
    newDiv.addEventListener('mouseenter', () => {
        newDiv.style.backgroundColor = 'lightblue'
    })
    main.appendChild(newDiv)
    console.log("Added")
}

var i = 0

for (i ; i < 256; i++) {
    create()
}

//////////////////////////////////////////////////

function clear() {

    document.querySelectorAll(".allDivs").style.backgroundColor = 'white'

    var answer = prompt("How Many Squares Per Side?")
    var answerInt = parseInt(answer)
    
    if (answerInt <= 100 && answerInt > 0) {
        var finalInt = answerInt * answerInt
        for (x = 0; x < finalInt; x++) {
            create()
        }
    }
    else {
        alert("Error, please enter a number between 1 and 100")
    }
}




var btn = document.querySelector("#button-clear")
btn.addEventListener('click', clear)


// var first = document.createElement('div')
// var second = document.createElement('div')
// var third = document.createElement('div')
// var fourth = document.createElement('div')
// var fifth = document.createElement('div')
// var sixth = document.createElement('div')
// var seventh = document.createElement('div')
// var eighth = document.createElement('div')
// var ninth = document.createElement('div')
// var tenth = document.createElement('div')
// var eleventh = document.createElement('div')
// var twelfth = document.createElement('div')
// var thirteenth = document.createElement('div')
// var fourteenth = document.createElement('div')
// var fifteenth = document.createElement('div')
// var sixteenth = document.createElement('div')

// first.setAttribute('style', 'grid-area: one;');
// first.setAttribute('class', 'grid-item');
// first.textContent = 'Hello World'
// first.addEventListener('hover', sketch)

// second.style.gridArea = 'two'
// second.setAttribute('class', 'grid-item');
// second.textContent = 'Hello World again'
// second.addEventListener('hover', sketch)

// third.setAttribute('style', 'grid-area: three;');
// third.setAttribute('class', 'grid-item');
// third.textContent = 'Hello World'
// third.addEventListener('hover', sketch)

// fourth.setAttribute('style', 'grid-area: four;');
// fourth.setAttribute('class', 'grid-item');
// fourth.textContent = 'Hello World'
// fourth.addEventListener('hover', sketch)


// fifth.setAttribute('style', 'grid-area: five;');
// fifth.setAttribute('class', 'grid-item');
// fifth.textContent = 'Hello World'
// fifth.addEventListener('hover', sketch)


// sixth.setAttribute('style', 'grid-area: six;');
// sixth.setAttribute('class', 'grid-item');
// sixth.textContent = 'Hello World'
// sixth.addEventListener('hover', sketch)


// seventh.setAttribute('style', 'grid-area: seven;');
// seventh.setAttribute('class', 'grid-item');
// seventh.textContent = 'Hello World'
// seventh.addEventListener('hover', sketch)

// eighth.setAttribute('style', 'grid-area: eight;');
// eighth.setAttribute('class', 'grid-item');
// eighth.textContent = 'Hello World'
// eighth.addEventListener('hover', sketch)

// ninth.setAttribute('style', 'grid-area: nine;');
// ninth.setAttribute('class', 'grid-item');
// ninth.textContent = 'Hello World'
// ninth.addEventListener('hover', sketch)

// tenth.setAttribute('style', 'grid-area: ten;')
// tenth.setAttribute('class', 'grid-item');
// tenth.textContent = 'Hello World'
// tenth.addEventListener('hover', sketch)

// eleventh.setAttribute('style', 'grid-area: eleven;')
// eleventh.setAttribute('class', 'grid-item');
// eleventh.textContent = 'Hello World'
// eleventh.addEventListener('hover', sketch)

// twelfth.setAttribute('style', 'grid-area: twelve;');
// twelfth.setAttribute('class', 'grid-item');
// twelfth.textContent = 'Hello World'
// twelfth.addEventListener('hover', sketch)

// thirteenth.setAttribute('style', 'grid-area: thirteen;');
// thirteenth.setAttribute('class', 'grid-item');
// thirteenth.textContent = 'Hello World'
// thirteenth.addEventListener('hover', sketch)

// fourteenth.setAttribute('style', 'grid-area: fourteen;');
// fourteenth.setAttribute('class', 'grid-item');
// fourteenth.textContent = 'Hello World'
// fourteenth.addEventListener('hover', sketch)

// fifteenth.setAttribute('style', 'grid-area: fifteen;');
// fifteenth.setAttribute('class', 'grid-item');
// fifteenth.textContent = 'Hello World'
// fifteenth.addEventListener('hover', sketch)

// sixteenth.setAttribute('style', 'grid-area: sixteen;');
// sixteenth.setAttribute('class', 'grid-item');
// sixteenth.textContent = 'Hello World'
// sixteenth.addEventListener('hover', sketch)

// main.appendChild(first)
// main.appendChild(second)
// main.appendChild(third)
// main.appendChild(fourth)
// main.appendChild(fifth)
// main.appendChild(sixth)
// main.appendChild(seventh)
// main.appendChild(eighth)
// main.appendChild(ninth)
// main.appendChild(tenth)
// main.appendChild(eleventh)
// main.appendChild(twelfth)
// main.appendChild(thirteenth)
// main.appendChild(fourteenth)
// main.appendChild(fifteenth)
// main.appendChild(sixteenth)