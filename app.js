let X = []
let O = []
let currPlay = 0;
const winningConditions = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];
let gameActive = true;
let xWins = 0;
let oWins = 0;
let tie = 0;
// Create prompt for names
let person1 = prompt("Enter Player 1's Name", "Player 1");
let person2 = prompt("Enter Player 2's Name", "Player 2");
// Changes name of players if they aren't empty
if (person1 != null) {
  document.querySelector(".player1 h2").innerText = person1;
}
if (person2 != null) {
    document.querySelector(".player2 h2").innerText = person2;
}

// function to make winner name flash
const winnerWinner = (winner) => {
    let white = () => {
        winner.style.color = "white"
        console.log('white')
    }
    let grey = () => {
        winner.style.color = "rgba(256,256, 256, 0.5)"
    }
    setTimeout(white, 250)
    setTimeout(grey, 500)
    setTimeout(white, 750)
    setTimeout(grey, 1000)
    setTimeout(white, 1250)
    setTimeout(grey, 1500)
    setTimeout(white, 1750)
    setTimeout(grey, 2000)
    if (document.querySelector('.player1') == winner) {
        document.querySelector('.player2').style.color = 'rgba(256,256, 256, 0.5)';
        setTimeout(white, 2250)
    } else if (document.querySelector('.player2') == winner) {
        document.querySelector('.player1').style.color = 'rgba(256,256, 256, 0.5)';
        setTimeout(white, 2250)
    } else {
        document.querySelector('.player1').style.color = 'rgba(256,256, 256, 0.5)';
        document.querySelector('.player2').style.color = 'rgba(256,256, 256, 0.5)';
    }
}


// function to add numbers of the squares clicked to arrays for Xs and Os
const addTurn = (clickedSquare) => {
let cell = clickedSquare.dataset.cellIndex
let player2 = document.querySelector('.player2')
let player1 = document.querySelector('.player1')
currPlay++
if (currPlay % 2 !== 0) {
    X.push(cell)
    clickedSquare.innerText = 'X'
    player2.style.color = 'white'
    player1.style.color = 'rgba(256,256, 256, 0.5)'

} else {
    O.push(cell)
    clickedSquare.innerText = 'O'
    player2.style.color = 'rgba(256,256, 256, 0.5)'
    player1.style.color = 'white'

}
}

// Checks every time a move is played if the game is won with that move
const checkWinner = () => {

    let xPrint = document.querySelector('.player1 h5')
    let oPrint = document.querySelector('.player2 h5')
    let tiePrint = document.querySelector('.tie h5')


    for(let i=0; i < winningConditions.length; i++) {
        //checks with X wins
        if (X.includes(winningConditions[i][0]) && X.includes(winningConditions[i][1]) && X.includes(winningConditions[i][2])){
            gameActive = false;
            xWins++;
            xPrint.innerText = xWins
            winnerWinner(document.querySelector('.player1'))
            var winImg = document.createElement('img');
            winImg.src = `images/${i}.svg`
            winImg.classList.add('winImg')
            document.querySelector('.game-container').appendChild(winImg)

        // checks if O wins
        } else if (O.includes(winningConditions[i][0]) && O.includes(winningConditions[i][1]) && O.includes(winningConditions[i][2])){
            gameActive = false;
            oWins++;
            oPrint.innerText = oWins
            winnerWinner(document.querySelector('.player2'))
            var winImg = document.createElement('img');
            winImg.src = `images/${i}.svg`
            winImg.classList.add('winImg')
            document.querySelector('.game-container').appendChild(winImg)
        
        } 
        // Add line if someone wins

        
    

    // checks if TIE
    } if (currPlay === 9) {
        gameActive = false;
        tie++;
        tiePrint.innerText = tie;
        winnerWinner(document.querySelector('.tie'))
    }
}
// Create an function that resets everything
const reset = () => {
    currPlay = 0;
    X = []
    O = []
    for (let i = 0; i < 9; i++) {
       let box = document.querySelector('.game-container')
       let square = box.querySelector(`.cell${i}`)
       square.innerText = ''
    }
    gameActive = true;
    let player2 = document.querySelector('.player2')
    let player1 = document.querySelector('.player1')
    player2.style.color = 'rgba(256,256, 256, 0.5)'
    player1.style.color = 'white'
    // remove line
    document.querySelector('.winImg').remove()

    squares.removeEventListener('click', reset)

}

// Creating an event listener for the tic tac toe box
const squares = document.querySelector('.game-container')
squares.addEventListener('click', (event) => {
    let clickedSquare = event.target
    // checks if game is not active and allows people to click the play area if the game is over
    if (!gameActive) {
        reset()
    } else if (event.currentTarget !== clickedSquare && clickedSquare.innerText === '') {
        addTurn(clickedSquare)
        checkWinner()
    }
})
// squares.addEventListener('mouseover', (event) => {
//     let clickedSquare = event.target
//     if (clickedSquare.innerText === ''){
//         if (currPlay % 2 !== 0) {
//             clickedSquare.innerText = 'O'
//             clickedSquare.style.color = 'rgba(256,256, 256, 0.5)'
//         } else {
//             clickedSquare.innerText = 'X'
//             clickedSquare.style.color = 'rgba(256,256, 256, 0.5)'
//         }
// }
// })
// squares.addEventListener('mouseout', (event) => {
//     let clickedSquare = event.target
//     clickedSquare.style.color = 'white'

// })

const colorSelected = (element) => {
    document.body.style.background = element.value
}