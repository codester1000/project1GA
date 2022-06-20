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
// function to add numbers of the squares clicked to arrays for Xs and Os
const addTurn = (clickedSquare, displayTurn) => {
    let cell = clickedSquare.dataset.cellIndex
    currPlay++
    if (currPlay % 2 !== 0) {
        X.push(cell)
        clickedSquare.innerText = 'X'
        displayTurn.innerText = "It is O's turn"

    } else {
        O.push(cell)
        clickedSquare.innerText = 'O'
        displayTurn.innerHTML = "It is X's turn"
    }
}
// Checks every time a move is played if the game is won with that move, using the array winningConditions
const checkWinner = (displayTurn) => {

    let xPrint = document.querySelector('.left h5')
    let oPrint = document.querySelector('.right h5')

    for(let i=0; i < winningConditions.length; i++) {
        if (X.includes(winningConditions[i][0]) && X.includes(winningConditions[i][1]) && X.includes(winningConditions[i][2])){
            gameActive = false;
            displayTurn.innerText = "X WINS!!!"
            xWins++;
            xPrint.innerText = xWins

        } else if (O.includes(winningConditions[i][0]) && O.includes(winningConditions[i][1]) && O.includes(winningConditions[i][2])){
            gameActive = false;
            displayTurn.innerText = "O WINS!!!"
            oWins++;
            oPrint.innerText = oWins
            
        } else if (currPlay === 9) {
            gameActive = false;
            displayTurn.innerText = "IT'S A TIE!!!"
        } 
    }
}
// Create an function that resets everything
const reset = () => {
    currPlay = 0;
    gameActive = true;
    X = []
    O = []
    for (let i = 0; i < 9; i++) {
       let box = document.querySelector('.game-container')
       let square = box.querySelector(`.cell${i}`)
       square.innerText = ''
    }
    let displayTurn = document.querySelector('.message')
    displayTurn.innerHTML = "It is X's turn"

}

// Creating an event listener for the tic tac toe box
// I kind think this should be at the end because there should be some functions in between that can be used when somethings clicked
const squares = document.querySelector('.game-container')
squares.addEventListener('click', (event) => {
    let clickedSquare = event.target
    let displayTurn = document.querySelector('.message')
    if (event.currentTarget !== clickedSquare && gameActive === true && clickedSquare.innerText === '') {
        addTurn(clickedSquare, displayTurn)
        checkWinner(displayTurn)
    } 
})

// Reset button event listener
const resetButton = document.querySelector('button')
resetButton.addEventListener('click', reset)