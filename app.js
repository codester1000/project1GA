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

// const winnerWinner = (winner) => {
//         let white = setInterval(() => {
//             winner.style.color = "white"
//         }, 400)
//         let greys = setInterval(() => {
//             winner.style.color = "grey"
//         }, 400)
//         let grey = setTimeout(greys, 200)
// }


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
        player1.style.color = 'grey'

    } else {
        O.push(cell)
        clickedSquare.innerText = 'O'
        player2.style.color = 'grey'
        player1.style.color = 'white'

    }
}
// Creates a function if the player wins and flashes their name

// Checks every time a move is played if the game is won with that move, using the array winningConditions
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
            // winnerWinner(document.querySelector('.player1'))

        // checks if O wins
        } else if (O.includes(winningConditions[i][0]) && O.includes(winningConditions[i][1]) && O.includes(winningConditions[i][2])){
            gameActive = false;
            oWins++;
            oPrint.innerText = oWins
            // winnerWinner(document.querySelector('.player2'))
        // checks if TIE
        } 
    } if (currPlay === 9) {
        gameActive = false;
        tie++;
        tiePrint.innerText = tie;
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
    player2.style.color = 'grey'
    player1.style.color = 'white'
    console.log('hey')
    squares.removeEventListener('click', reset)
    // clearInterval(white)
    // clearInterval(grey)

}

// Creating an event listener for the tic tac toe box
const squares = document.querySelector('.game-container')
squares.addEventListener('click', (event) => {
    let clickedSquare = event.target
    if (!gameActive) {
        reset()
    } else if (event.currentTarget !== clickedSquare && gameActive === true && clickedSquare.innerText === '') {
        addTurn(clickedSquare)
        checkWinner()
    } 

})

// Reset button event listener
// const button = document.querySelector('button')
// button.addEventListener('click', reset)
